import { useState } from 'react';
import { AdminLayout } from './AdminLayout';
import { Overview } from './Overview';
import { ClassManager } from './ClassManager';
import { ClassRosters } from './ClassRosters';
import { StudentDatabase } from './StudentDatabase';
import { FinancialSettings } from './FinancialSettings';
import { SystemSettings } from './SystemSettings';

type AdminView = 'dashboard' | 'classes' | 'rosters' | 'students' | 'financials' | 'settings';

export function AdminApp() {
  const [currentView, setCurrentView] = useState<AdminView>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Overview />;
      case 'classes':
        return <ClassManager />;
      case 'rosters':
        return <ClassRosters />;
      case 'students':
        return <StudentDatabase />;
      case 'financials':
        return <FinancialSettings />;
      case 'settings':
        return <SystemSettings />;
      default:
        return null;
    }
  };

  return (
    <AdminLayout currentView={currentView} onNavigate={setCurrentView}>
      {renderView()}
    </AdminLayout>
  );
}
