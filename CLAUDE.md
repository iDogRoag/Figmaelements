# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server (Vite)
pnpm build      # Production build
```

Install dependencies: `pnpm install` (preferred) or `npm i`.

No test runner is configured.

## Project Overview

This is a React + TypeScript + Vite application for **The New Hebrew Program** — a multi-step student registration system with an admin dashboard and a parent portal. It is designed to be embedded as **Wix Custom Elements** on a Wix site, communicating with Wix Velo backend via browser `CustomEvent`s.

## Architecture

### Three independent "apps" under one dev entry point

`DevSwitcher.tsx` lets you toggle between the three apps during development. In production, each will be a separate Wix Custom Element:

- **Registration Flow** (`RegistrationFlow.tsx`) — multi-step wizard (stages: `0 → 1 → 1b → 2 → 3 → 4 → success`)
- **Parent Portal** (`src/app/components/parent/ParentApp.tsx`)
- **Admin Dashboard** (`src/app/components/admin/AdminApp.tsx`)

### Velo Event Bus (`src/app/utils/veloEventBus.ts`)

All React↔Wix communication goes through `window` CustomEvents:

- `emitToVelo.*` — React dispatches events **to** Wix Velo (e.g., `auth:complete`, `cart:updated`, `payment:initiate`)
- `listenToVelo.*` — React subscribes to events **from** Wix Velo (e.g., `session:loaded`, `enrollment:confirmed`, `payment:failed`)

### Service Layer (`src/services/wixService.ts`)

Uses a **CustomEvent RPC** pattern to call the Wix backend:
1. React calls e.g. `getClasses('season-2026')` → dispatches `wix:request` CustomEvent on `window`
2. Wix **page code** (`kpdnd.js`) listens for `wix:request`, calls `backend/dbServices.jsw`, responds with `wix:response:<requestId>`
3. `wixService.ts` resolves the promise with the response data

> **Why not direct imports?** Custom element bundles run as public JS files and **cannot** `import from 'backend/dbServices.jsw'` — that syntax only works in Wix page code. The RPC bridge in page code is the correct production pattern.

Key functions: `getClasses`, `submitRegistration`, `calculateCheckout`, `getAdminOverview`, `getFamilyDashboardData`.

### Registration Flow state

`RegistrationFlow.tsx` owns all state for the multi-step flow:
- `session: RegistrationSession` — parent info + array of `Student` objects
- `cartSummary: CartSummary` — pricing, recalculated on every student/class change via `calculateCheckout()`
- Stage navigation uses numeric stages (`0`–`4`) plus string stages (`'1b'`, `'success'`)

### UI Stack

- **shadcn/ui** components live in `src/app/components/ui/` (Radix UI primitives with Tailwind)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Hook Form** for all form validation
- **Sonner** for toast notifications
- **Lucide React** for icons
- Brand primary color: `#326389`

## Key Type Definitions (`src/app/types.ts`)

`Stage`, `Student`, `ClassData`, `RegistrationSession`, `CartSummary`, and all Velo event payload types are defined here. These are the shared contracts between the UI and the event bus.

## Production Deployment Notes

- The three apps ship as separate Wix Custom Elements
- `wixService.ts` mock functions are replaced with real Wix backend imports
- Payment is handled by Stripe via Wix; the React side only initiates (`payment:initiate` event) and listens for results (`enrollment:confirmed` / `payment:failed`)
