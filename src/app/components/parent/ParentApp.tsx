import { useState } from 'react';
import { ParentLayout } from './ParentLayout';
import { ParentDashboard } from './ParentDashboard';
import { RegisterSibling } from './RegisterSibling';
import { PaymentMethods } from './PaymentMethods';
import { ContactSchool } from './ContactSchool';

type ParentView = 'dashboard' | 'register' | 'payment' | 'contact';

export function ParentApp() {
  const [currentView, setCurrentView] = useState<ParentView>('dashboard');
  const parentName = 'Maya'; // In production, this would come from authentication

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <ParentDashboard parentName={parentName} />;
      case 'register':
        return <RegisterSibling />;
      case 'payment':
        return <PaymentMethods />;
      case 'contact':
        return <ContactSchool />;
      default:
        return null;
    }
  };

  return (
    <ParentLayout
      currentView={currentView}
      onNavigate={setCurrentView}
      parentName={parentName}
    >
      {renderView()}
    </ParentLayout>
  );
}
