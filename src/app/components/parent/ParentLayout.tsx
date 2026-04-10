import { ReactNode } from 'react';
import { Home, UserPlus, CreditCard, Mail, LogOut } from 'lucide-react';

interface ParentLayoutProps {
  children: ReactNode;
  currentView: 'dashboard' | 'register' | 'payment' | 'contact';
  onNavigate: (view: 'dashboard' | 'register' | 'payment' | 'contact') => void;
  parentName?: string;
}

const navItems = [
  { id: 'dashboard' as const, label: 'Dashboard', icon: Home },
  { id: 'register' as const, label: 'Register a New Sibling', icon: UserPlus },
  { id: 'payment' as const, label: 'Payment Methods', icon: CreditCard },
  { id: 'contact' as const, label: 'Contact School', icon: Mail },
];

export function ParentLayout({ children, currentView, onNavigate, parentName = 'Maya' }: ParentLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo/Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-[#326389]">The New Hebrew Program</h1>
          <p className="text-sm text-gray-600 mt-1">Family Portal</p>
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
                    onClick={() => onNavigate(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                      ${
                        isActive
                          ? 'bg-[#326389] text-white shadow-sm'
                          : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
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
            <div className="w-10 h-10 rounded-full bg-[#326389] flex items-center justify-center text-white font-semibold">
              {parentName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{parentName}</p>
              <p className="text-xs text-gray-600">Parent Account</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors mt-2">
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
