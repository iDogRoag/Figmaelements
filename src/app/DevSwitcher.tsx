import { useState } from 'react';
import { Toaster } from 'sonner';
import RegistrationFlow from './RegistrationFlow';
import { AdminApp } from './components/admin/AdminApp';
import { ParentApp } from './components/parent/ParentApp';

/**
 * Development View Switcher
 *
 * This component allows you to toggle between the Registration Flow,
 * Parent Dashboard, and Admin Dashboard during development.
 *
 * In production, these will be separate Wix Custom Elements:
 * - Element A: Registration Flow (RegistrationFlow.tsx)
 * - Element B: Parent Dashboard (ParentApp.tsx)
 * - Element C: Admin Dashboard (AdminApp.tsx)
 */
export default function DevSwitcher() {
  const [view, setView] = useState<'registration' | 'parent' | 'admin'>('registration');

  return (
    <>
      {/* View Switcher Toolbar — compact on mobile */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
        <div className="px-3 py-2 flex items-center justify-between gap-2">
          <span className="font-bold text-xs uppercase tracking-wider whitespace-nowrap hidden sm:block">
            🔧 Dev Mode
          </span>

          <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-end">
            <button
              onClick={() => setView('registration')}
              className={`
                px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap
                ${view === 'registration' ? 'bg-white text-purple-600 shadow' : 'bg-white/10 hover:bg-white/20'}
              `}
            >
              📝 Registration
            </button>
            <button
              onClick={() => setView('parent')}
              className={`
                px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap
                ${view === 'parent' ? 'bg-white text-green-600 shadow' : 'bg-white/10 hover:bg-white/20'}
              `}
            >
              👨‍👩‍👧 Parent
            </button>
            <button
              onClick={() => setView('admin')}
              className={`
                px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap
                ${view === 'admin' ? 'bg-white text-blue-600 shadow' : 'bg-white/10 hover:bg-white/20'}
              `}
            >
              ⚙️ Admin
            </button>
          </div>
        </div>
      </div>

      {/* Content Area (with top padding to account for fixed toolbar) */}
      <div className="pt-[44px]">
        {view === 'registration' && <RegistrationFlow />}
        {view === 'parent' && <ParentApp />}
        {view === 'admin' && <AdminApp />}
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </>
  );
}
