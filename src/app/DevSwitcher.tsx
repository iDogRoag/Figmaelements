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
 * - Element A: Registration Flow (App.tsx)
 * - Element B: Parent Dashboard (ParentApp.tsx)
 * - Element C: Admin Dashboard (AdminApp.tsx)
 */
export default function DevSwitcher() {
  const [view, setView] = useState<'registration' | 'parent' | 'admin'>('registration');

  return (
    <>
      {/* View Switcher Toolbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold text-sm uppercase tracking-wider">
              🔧 Dev Mode
            </span>
            <div className="h-4 w-px bg-white/30" />
            <span className="text-sm text-white/80">
              Toggle between Registration, Parent & Admin Dashboards
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setView('registration')}
              className={`
                px-4 py-2 rounded-lg text-sm font-semibold transition-all
                ${
                  view === 'registration'
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }
              `}
            >
              📝 Registration
            </button>
            <button
              onClick={() => setView('parent')}
              className={`
                px-4 py-2 rounded-lg text-sm font-semibold transition-all
                ${
                  view === 'parent'
                    ? 'bg-white text-green-600 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }
              `}
            >
              👨‍👩‍👧 Parent Portal
            </button>
            <button
              onClick={() => setView('admin')}
              className={`
                px-4 py-2 rounded-lg text-sm font-semibold transition-all
                ${
                  view === 'admin'
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }
              `}
            >
              ⚙️ Admin
            </button>
          </div>
        </div>
      </div>

      {/* Content Area (with top padding to account for fixed toolbar) */}
      <div className="pt-[60px]">
        {view === 'registration' && <RegistrationFlow />}
        {view === 'parent' && <ParentApp />}
        {view === 'admin' && <AdminApp />}
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </>
  );
}
