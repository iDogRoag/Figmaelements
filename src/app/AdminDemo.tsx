import { Toaster } from 'sonner';
import { AdminApp } from './components/admin/AdminApp';

/**
 * Admin Dashboard Demo
 *
 * This is a standalone demo of the admin dashboard.
 * To view this in your app, temporarily change the import in your entry point
 * from './App' to './AdminDemo'
 *
 * Features:
 * - Class Manager view with Create Class modal
 * - Financial Settings view with Global Fees and Promo Codes
 * - Sidebar navigation
 * - Mock data for development
 */
export default function AdminDemo() {
  return (
    <>
      <AdminApp />
      <Toaster position="top-right" />
    </>
  );
}
