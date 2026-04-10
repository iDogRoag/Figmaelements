# Admin Dashboard - The New Hebrew Program

## Overview

A complete admin dashboard for managing classes, rosters, financial settings, and promotions for The New Hebrew Program. Built with React, TypeScript, and Tailwind CSS v4, following the established design system.

---

## 🎨 Design System

- **Primary Color**: `#326389` (brand blue)
- **UI Framework**: Tailwind CSS v4 with custom tokens
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Form Handling**: React Hook Form 7.55.0
- **Notifications**: Sonner toasts

---

## 📁 File Structure

```
src/app/components/admin/
├── AdminApp.tsx              # Main admin application container
├── AdminLayout.tsx           # Sidebar navigation + layout wrapper
├── ClassManager.tsx          # View 1: Class list & management
├── CreateClassModal.tsx      # Modal: Create new class form
├── FinancialSettings.tsx     # View 2: Fees & promo codes
└── CreatePromoModal.tsx      # Modal: Create promo code form

src/app/
└── AdminDemo.tsx             # Standalone demo entry point
```

---

## 🖥️ Views & Features

### **Admin Layout (Sidebar Navigation)**

**Left Sidebar**:
- Logo & branding
- Navigation menu:
  - Dashboard (placeholder)
  - **Classes** (implemented)
  - Rosters (placeholder)
  - **Financials** (implemented)
  - Settings (placeholder)
- User profile section
- Logout button

**Features**:
- Active state highlighting (#326389 background)
- Hover states for navigation items
- Responsive design
- Fixed sidebar with scrollable main content

---

### **View 1: Class Manager**

**URL**: Navigate to "Classes" in sidebar

#### **Class List Display**

**Card Grid Layout**:
- 3-column grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Each class card shows:
  - Class title & teacher
  - Schedule (days)
  - Time range
  - Location (with map pin icon)
  - Grade badge
  - Proficiency badge (Speaker/Non-Speaker)
  - Enrollment progress bar
  - Kebab menu (3-dot) with actions:
    - Edit Class
    - Duplicate
    - Delete

**Mock Data**:
```typescript
3 sample classes:
1. Hebrew for Beginners - Grade 2, Non-Speaker, M/W
2. Hebrew Conversation Club - Grade 3, Speaker, T/Th
3. Reading Adventures - Grade 1, Non-Speaker, F
```

**Empty State**:
- Displays when no classes exist
- Friendly icon + message
- CTA button to create first class

#### **Create Class Modal**

**Trigger**: "Create New Class" button (top-right)

**Form Fields**:
1. **Class Title** (text, required)
   - Placeholder: "e.g., Hebrew for Beginners"

2. **Teacher Name** (dropdown, required)
   - Options: Morah Maya, Moreh Yael, Morah Dana, Moreh David

3. **Grade Level** (dropdown, required)
   - Options: Grade 1-6

4. **Proficiency Level** (radio buttons, required)
   - Hebrew Speaker / Non-Hebrew Speaker
   - Toggle-style selection with blue highlight

5. **Schedule (Days)** (multi-select pills, required)
   - Mon, Tue, Wed, Thu, Fri, Sun
   - Click to toggle selection
   - Selected days have blue background

6. **Start Time** (time picker, required)

7. **End Time** (time picker, required)
   - Validation: Must be after start time
   - Error message if invalid

8. **Location** (text, required)
   - Placeholder: "e.g., Main Campus - Room 101"

9. **Max Capacity** (number, required)
   - Min value: 1

**Actions**:
- **Cancel** (ghost button) - Closes modal, resets form
- **Save Class** (primary button) - Submits form
  - Shows loading spinner during save
  - Success toast: "Class saved successfully!"
  - Closes modal on success

**Validation**:
- Red border on invalid fields
- Helper text below errors
- Form prevents submission if invalid
- Custom time validation logic

---

### **View 2: Financial Settings**

**URL**: Navigate to "Financials" in sidebar

#### **Card 1: Global Fees**

**Purpose**: Set base pricing for all registrations

**Form Fields**:

1. **Registration Fee** (number, required)
   - Dollar input with $ prefix
   - Default: $75
   - Helper: "One-time fee per family"

2. **Materials Fee** (number, required)
   - Dollar input with $ prefix
   - Default: $25
   - Helper: "Per student"

3. **Base Monthly Tuition** (number, required)
   - Dollar input with $ prefix
   - Default: $450
   - Helper: "Default monthly tuition per student"

**Early Bird Discount Section**:

4. **Deadline Date** (date picker)
   - Calendar icon prefix
   - Helper: "Register before this date to receive discount"

5. **Discount Percentage** (number, 0-100)
   - Percentage input with % suffix
   - Helper: "Percentage off tuition"
   - Validation: 0-100 range

**Actions**:
- **Save Settings** button
  - Loading spinner during save
  - Success toast: "Financial settings saved successfully!"

---

#### **Card 2: Discount Engine**

**Purpose**: Manage automatic discounts and promo codes

**Sibling Discount Toggle**:
- Large toggle switch with label
- "Automatic Sibling Discount (10%)"
- Subtext: "Apply 10% discount when 2+ students enroll"
- Gray background card for prominence
- ON by default

**Active Promo Codes Section**:

**Header**:
- Title: "Active Promo Codes"
- "+ Create Promo Code" button (outline, right-aligned)

**Table** (when promo codes exist):
| Column | Description |
|--------|-------------|
| Code | Uppercase code in gray badge with blue text |
| Discount Amount | Dollar value (e.g., $50) |
| Expiry Date | Formatted date (e.g., Aug 31, 2024) |
| Action | Red "Delete" button with trash icon |

**Mock Data**:
```typescript
2 sample promo codes:
1. SUMMER2024 - $50, expires 8/31/2024
2. WELCOME10 - $10, expires 12/31/2024
```

**Empty State**:
- Dashed border card
- Icon + message: "No active promo codes"
- Subtext: "Create your first promo code to offer discounts"
- CTA button

**Delete Confirmation**:
- Alert dialog appears when delete clicked
- Title: "Delete Promo Code"
- Message: "Are you sure? This action cannot be undone..."
- Actions: Cancel (gray) / Delete (red)
- Success toast after deletion

---

#### **Create Promo Code Modal**

**Trigger**: "+ Create Promo Code" button

**Form Fields**:

1. **Promo Code** (text, required)
   - Auto-converts to uppercase
   - Max length: 20 characters
   - Validation: Letters and numbers only
   - Helper: "Letters and numbers only, will be converted to uppercase"

2. **Discount Amount** (number, required)
   - Dollar input with $ prefix
   - Min: $0.01
   - Helper: "Fixed dollar amount off total"

3. **Expiry Date** (date picker, required)
   - Min: Today
   - Validation: Must be in future
   - Helper: "Code will expire at end of this date"

**Actions**:
- **Cancel** (ghost button)
- **Create Promo Code** (primary button)
  - Loading: "Creating..." with spinner
  - Success toast: "Promo code created successfully!"
  - Adds to table immediately

---

## 🎯 Interaction Patterns

### **Loading States**
- All save/submit buttons show spinner when processing
- Button text changes (e.g., "Saving...", "Creating...")
- Button disabled during loading
- 1.5s simulated delay for mock API calls

### **Success Feedback**
- Toast notifications (top-right)
- Green success icon
- Auto-dismiss after 3 seconds
- Clear, concise messages

### **Validation**
- Real-time validation via React Hook Form
- Red border on invalid fields
- Helper text below errors
- Custom validators (time range, date range, regex)

### **Confirmation Dialogs**
- Used for destructive actions (delete)
- Clear warning message
- Cancel (safe) vs Confirm (destructive) buttons
- Prevents accidental deletions

### **Empty States**
- Friendly, encouraging messages
- Clear CTAs to get started
- Icon-based visual elements
- Subtle dashed borders

---

## 🔧 State Management

### **Mock Data Approach**
- All data is hardcoded in components for Phase 6 MVP
- Uses React useState for temporary state
- Simulates API delays with setTimeout
- Ready for Velo backend integration

### **Future Velo Integration**
```typescript
// Example event structure (to be implemented)

// Creating a class
emitToVelo.createClass({
  title: string,
  teacher: string,
  grade: string,
  proficiency: 'speaker' | 'non-speaker',
  days: string[],
  startTime: string,
  endTime: string,
  location: string,
  capacity: number
})

// Updating financial settings
emitToVelo.updateFinancialSettings({
  registrationFee: number,
  materialsFee: number,
  baseMonthlyTuition: number,
  earlyBirdDeadline: string,
  earlyBirdDiscount: number
})

// Creating promo code
emitToVelo.createPromoCode({
  code: string,
  discountAmount: number,
  expiryDate: string
})
```

---

## 📱 Responsive Design

### **Breakpoints**
- **Mobile** (< 640px): Single column, stacked layout
- **Tablet** (640px - 1024px): 2-column grid for classes
- **Desktop** (> 1024px): 3-column grid, full sidebar

### **Mobile Optimizations**
- Sidebar could collapse to hamburger menu (future)
- Touch-friendly button sizes (min 44px)
- Scrollable tables with horizontal overflow
- Form inputs stack vertically

---

## 🎨 Component Reusability

### **Shared UI Components**
All using shadcn/ui library:
- `Button` - Primary, outline, ghost variants
- `Input` - Text, number, date, time
- `Label` - Form field labels
- `Select` - Dropdown menus
- `Switch` - Toggle switches
- `Dialog` - Modal overlays
- `Card` - Content containers
- `AlertDialog` - Confirmation prompts
- `DropdownMenu` - Kebab menu actions

### **Custom Components**
- `AdminLayout` - Reusable for all admin views
- Form validation patterns (React Hook Form)
- Loading button states
- Empty state templates

---

## 🚀 How to View

### **Option 1: Standalone Demo**
Update your entry point to import AdminDemo:

```typescript
// In your main entry file
import AdminDemo from './app/AdminDemo';

// Render AdminDemo instead of App
<AdminDemo />
```

### **Option 2: Route Integration**
Add routing to switch between registration and admin:

```typescript
import { useState } from 'react';
import App from './app/App';
import { AdminApp } from './app/components/admin/AdminApp';

function Root() {
  const [mode, setMode] = useState<'registration' | 'admin'>('registration');
  
  return mode === 'admin' ? <AdminApp /> : <App />;
}
```

---

## ✅ Implementation Checklist

### **Completed**
- ✅ Admin layout with sidebar navigation
- ✅ Class Manager view with card grid
- ✅ Create Class modal with full form
- ✅ Financial Settings view
- ✅ Global Fees card with all inputs
- ✅ Discount Engine card with toggle
- ✅ Promo code table with CRUD
- ✅ Create Promo modal
- ✅ Delete confirmation dialogs
- ✅ Empty states for all lists
- ✅ Loading states on all actions
- ✅ Success toast notifications
- ✅ Form validation (React Hook Form)
- ✅ Responsive design
- ✅ Mock data for development

### **Future Enhancements**
- ⏳ Edit Class functionality (currently "Edit" in menu)
- ⏳ Duplicate Class functionality
- ⏳ Dashboard view (analytics, stats)
- ⏳ Rosters view (student lists per class)
- ⏳ Settings view (admin preferences)
- ⏳ Search & filters for class list
- ⏳ Pagination for large datasets
- ⏳ Bulk actions (select multiple, delete all)
- ⏳ Export to CSV/PDF
- ⏳ Velo backend integration
- ⏳ Real-time updates (WebSocket/polling)
- ⏳ Audit logs (who changed what)
- ⏳ Role-based permissions

---

## 🐛 Known Limitations (MVP)

1. **No Data Persistence**: Refreshing page loses changes
2. **No Edit Flow**: "Edit Class" menu item does nothing yet
3. **No Duplicate**: "Duplicate Class" menu item does nothing yet
4. **No Delete Class**: Delete in kebab menu not wired up
5. **No Search/Filter**: Class list shows all items
6. **No Pagination**: Assumes small dataset
7. **Static Teacher List**: Hardcoded names, not dynamic
8. **No Validation on Backend**: Client-side only
9. **Promo Codes**: Fixed dollar amount only (no percentage option)
10. **Single Season**: No concept of multiple program seasons/years

---

## 🎓 Usage Examples

### **Creating a New Class**
1. Navigate to "Classes" in sidebar
2. Click "Create New Class" button
3. Fill in all required fields:
   - Title: "Hebrew Storytelling"
   - Teacher: Morah Dana
   - Grade: 4
   - Proficiency: Non-Speaker
   - Days: Monday, Wednesday (click to select)
   - Time: 3:30 PM - 4:30 PM
   - Location: Downtown Center - Room B
   - Capacity: 15
4. Click "Save Class"
5. See success toast
6. Modal closes, return to class list

### **Creating a Promo Code**
1. Navigate to "Financials" in sidebar
2. Scroll to "Active Promo Codes" section
3. Click "+ Create Promo Code"
4. Fill in fields:
   - Code: FALL2024 (auto-uppercases)
   - Discount: $75
   - Expiry: December 31, 2024
5. Click "Create Promo Code"
6. See success toast
7. New code appears in table immediately

### **Updating Global Fees**
1. Navigate to "Financials" in sidebar
2. Edit fields in "Global Fees" card:
   - Registration Fee: $100 (up from $75)
   - Materials Fee: $30 (up from $25)
   - Early Bird Discount: 20% (up from 15%)
3. Click "Save Settings"
4. See loading spinner
5. See success toast
6. Settings persisted (in memory for MVP)

---

## 🔐 Security Considerations (Production)

- **Authentication**: Verify admin role before showing dashboard
- **Authorization**: Role-based access control (RBAC)
- **Input Sanitization**: Prevent XSS in text fields
- **Rate Limiting**: Prevent spam submissions
- **Audit Logging**: Track all admin actions
- **Data Validation**: Server-side validation required
- **Secure API**: HTTPS only, authentication tokens
- **CSRF Protection**: Tokens for state-changing operations

---

## 📊 Future Data Models

### **Class Model** (Backend)
```typescript
interface Class {
  id: string;
  title: string;
  teacherId: string; // FK to teachers table
  grade: string;
  proficiency: 'speaker' | 'non-speaker';
  schedule: {
    days: string[];
    startTime: string;
    endTime: string;
  };
  location: string;
  capacity: number;
  enrolled: number; // calculated from enrollments
  seasonId: string; // FK to seasons table
  active: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string; // admin user ID
}
```

### **PromoCode Model** (Backend)
```typescript
interface PromoCode {
  id: string;
  code: string; // unique, uppercase
  type: 'fixed' | 'percentage'; // future enhancement
  discountAmount: number;
  expiryDate: string;
  active: boolean;
  usageCount: number; // times used
  maxUsages?: number; // optional limit
  createdAt: string;
  createdBy: string; // admin user ID
}
```

---

This admin dashboard provides a clean, professional MVP for managing The New Hebrew Program's classes and financial settings, ready for integration with the existing registration system and Velo backend.
