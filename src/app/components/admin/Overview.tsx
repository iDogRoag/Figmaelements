import { useState, useEffect } from 'react';
import { Users, GraduationCap, DollarSign, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { getAdminOverview } from '../../../services/wixService';

const getStatsConfig = (statsData: { totalStudents: number; activeClasses: number; totalRevenue: number; pendingAutopay: number }) => [
  {
    title: 'Total Students',
    value: statsData.totalStudents.toString(),
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Active Classes',
    value: statsData.activeClasses.toString(),
    icon: GraduationCap,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Total Revenue',
    value: `$${statsData.totalRevenue.toLocaleString()}`,
    icon: DollarSign,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Pending Autopay (May 6)',
    value: `$${statsData.pendingAutopay.toLocaleString()}`,
    icon: Calendar,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

const recentActivity = [
  { student: 'Sarah Cohen', action: 'Enrolled in Hebrew Conversation', time: '2 hours ago' },
  { student: 'David Levi', action: 'Payment received - $450', time: '4 hours ago' },
  { student: 'Rachel Goldberg', action: 'Updated medical information', time: '5 hours ago' },
  { student: 'Michael Katz', action: 'Enrolled in Reading Adventures', time: 'Yesterday' },
  { student: 'Emma Shapiro', action: 'Sibling discount applied', time: 'Yesterday' },
];

const upcomingPayments = [
  { family: 'Cohen Family', amount: '$225', dueDate: 'May 6, 2026', status: 'scheduled' },
  { family: 'Levi Family', amount: '$450', dueDate: 'May 6, 2026', status: 'scheduled' },
  { family: 'Goldberg Family', amount: '$337.50', dueDate: 'May 6, 2026', status: 'scheduled' },
  { family: 'Katz Family', amount: '$210', dueDate: 'May 6, 2026', status: 'pending' },
  { family: 'Shapiro Family', amount: '$405', dueDate: 'May 6, 2026', status: 'scheduled' },
];

export function Overview() {
  const [isLoading, setIsLoading] = useState(true);
  const [statsData, setStatsData] = useState({
    totalStudents: 0,
    activeClasses: 0,
    totalRevenue: 0,
    pendingAutopay: 0,
  });

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const data = await getAdminOverview(); // Get everything in one call
        setStatsData({
          totalStudents: data.totalStudents,
          activeClasses: data.activeClasses,
          totalRevenue: data.totalRevenue,
          pendingAutopay: data.pendingAutopay,
        });
        // Student roster data available in data.students if needed for future features
      } catch (error) {
        console.error('Failed to load admin overview:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const stats = getStatsConfig(statsData);

  return (
    <div className="p-8 space-y-8">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/50 z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#326389]" />
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-[#326389] mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.student}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Autopay (May 6)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingPayments.map((payment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{payment.family}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{payment.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">{payment.amount}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        payment.status === 'scheduled'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-[#326389] text-white rounded-lg hover:bg-[#2a5474] transition-colors text-left">
              <p className="font-semibold">Export All Data</p>
              <p className="text-sm text-blue-100 mt-1">Download complete roster CSV</p>
            </button>
            <button className="p-4 bg-white border-2 border-[#326389] text-[#326389] rounded-lg hover:bg-blue-50 transition-colors text-left">
              <p className="font-semibold">Email All Parents</p>
              <p className="text-sm text-gray-600 mt-1">Send announcement to families</p>
            </button>
            <button className="p-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <p className="font-semibold">Edit Registration Fees</p>
              <p className="text-sm text-gray-600 mt-1">Update pricing settings</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
