import { ReactNode, useState } from 'react';
import { LayoutDashboard, GraduationCap, Users, DollarSign, Settings, LogOut, Database, Menu, X } from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
  currentView: 'dashboard' | 'classes' | 'rosters' | 'students' | 'financials' | 'settings';
  onNavigate: (view: 'dashboard' | 'classes' | 'rosters' | 'students' | 'financials' | 'settings') => void;
}

const navItems = [
  { id: 'dashboard' as const, label: 'Overview', icon: LayoutDashboard },
  { id: 'classes' as const, label: 'Class Manager', icon: GraduationCap },
  { id: 'rosters' as const, label: 'Class Rosters', icon: Users },
  { id: 'students' as const, label: 'Student Database', icon: Database },
  { id: 'financials' as const, label: 'Financial Settings', icon: DollarSign },
  { id: 'settings' as const, label: 'System Settings', icon: Settings },
];

export function AdminLayout({ children, currentView, onNavigate }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (view: typeof currentView) => {
    onNavigate(view);
    setSidebarOpen(false);
  };

  const currentLabel = navItems.find(n => n.id === currentView)?.label ?? 'Overview';

  const SidebarContent = () => (
    <>
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-[#326389]">The New Hebrew Program</h1>
        <p className="text-sm text-gray-600 mt-1">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigate(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                    ${isActive ? 'bg-[#326389] text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'}
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-[#326389] flex items-center justify-center text-white font-semibold flex-shrink-0">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
            <p className="text-xs text-gray-600">admin@tnhp.org</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors mt-2">
          <LogOut className="w-4 h-4" />
          <span>Log Out</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="w-full bg-gray-50 flex">
      {/* Desktop Sidebar — always visible on md+ */}
      <aside className="hidden md:flex w-64 flex-shrink-0 bg-white border-r border-gray-200 flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-200 ease-in-out md:hidden
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="absolute top-3 right-3">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-lg hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <SidebarContent />
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <header className="md:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-lg hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <h2 className="text-sm font-semibold text-gray-900">{currentLabel}</h2>
        </header>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
