import { useState, useEffect } from 'react';
import { Download, Mail, AlertCircle, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

type PaymentStatus = 'paid' | 'pending' | 'overdue';

interface RosterStudent {
  id: string;
  name: string;
  grade: string;
  class: string;
  teacher: string;
  paymentStatus: PaymentStatus;
  hasMedicalAlert: boolean;
  medicalNotes?: string;
  parentEmail: string;
}

const FALLBACK_ROSTER: RosterStudent[] = [
  {
    id: '1',
    name: 'Sarah Cohen',
    grade: '2',
    class: 'Hebrew Conversation Club',
    teacher: 'Moreh David',
    paymentStatus: 'paid',
    hasMedicalAlert: true,
    medicalNotes: 'Severe peanut allergy',
    parentEmail: 'parent@cohen.com',
  },
  {
    id: '2',
    name: 'David Levi',
    grade: '3',
    class: 'Reading Adventures in Hebrew',
    teacher: 'Morah Rachel',
    paymentStatus: 'paid',
    hasMedicalAlert: false,
    parentEmail: 'parent@levi.com',
  },
  {
    id: '3',
    name: 'Rachel Goldberg',
    grade: '2',
    class: 'Hebrew for Beginners',
    teacher: 'Morah Sarah',
    paymentStatus: 'pending',
    hasMedicalAlert: true,
    medicalNotes: 'Asthma - inhaler required',
    parentEmail: 'parent@goldberg.com',
  },
  {
    id: '4',
    name: 'Michael Katz',
    grade: '1',
    class: 'Hebrew Through Music & Art',
    teacher: 'Morah Leah',
    paymentStatus: 'paid',
    hasMedicalAlert: false,
    parentEmail: 'parent@katz.com',
  },
  {
    id: '5',
    name: 'Emma Shapiro',
    grade: '3',
    class: 'Reading Adventures in Hebrew',
    teacher: 'Morah Rachel',
    paymentStatus: 'pending',
    hasMedicalAlert: false,
    parentEmail: 'parent@shapiro.com',
  },
  {
    id: '6',
    name: 'Jacob Rosenberg',
    grade: '2',
    class: 'Hebrew Conversation Club',
    teacher: 'Moreh David',
    paymentStatus: 'paid',
    hasMedicalAlert: true,
    medicalNotes: 'Dairy allergy',
    parentEmail: 'parent@rosenberg.com',
  },
  {
    id: '7',
    name: 'Leah Schwartz',
    grade: '1',
    class: 'Hebrew Through Music & Art',
    teacher: 'Morah Leah',
    paymentStatus: 'overdue',
    hasMedicalAlert: false,
    parentEmail: 'parent@schwartz.com',
  },
  {
    id: '8',
    name: 'Noah Stein',
    grade: '2',
    class: 'Hebrew for Beginners',
    teacher: 'Morah Sarah',
    paymentStatus: 'paid',
    hasMedicalAlert: false,
    parentEmail: 'parent@stein.com',
  },
];

const getPaymentStatusColor = (status: PaymentStatus) => {
  switch (status) {
    case 'paid':
      return 'bg-green-100 text-green-700';
    case 'pending':
      return 'bg-yellow-100 text-yellow-700';
    case 'overdue':
      return 'bg-red-100 text-red-700';
  }
};

export function ClassRosters() {
  const [isLoading, setIsLoading] = useState(true);
  const [rosterData, setRosterData] = useState<RosterStudent[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('all');
  const [filterPayment, setFilterPayment] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setRosterData(FALLBACK_ROSTER);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleExportCSV = () => {
    // In production, this would generate and download a CSV
    const csvContent = [
      ['Student Name', 'Grade', 'Class', 'Teacher', 'Payment Status', 'Medical Alert', 'Parent Email'],
      ...rosterData.map(student => [
        student.name,
        student.grade,
        student.class,
        student.teacher,
        student.paymentStatus,
        student.hasMedicalAlert ? 'Yes' : 'No',
        student.parentEmail,
      ]),
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tnhp-roster-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const handleEmailAllParents = () => {
    // In production, this would open an email composer or modal
    alert('Email composer would open here to send message to all parents');
  };

  const filteredData = rosterData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.class.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = filterClass === 'all' || student.class === filterClass;
    const matchesPayment = filterPayment === 'all' || student.paymentStatus === filterPayment;
    return matchesSearch && matchesClass && matchesPayment;
  });

  const uniqueClasses = Array.from(new Set(rosterData.map(s => s.class)));

  return (
    <div className="p-8 space-y-6">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/50 z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#326389]" />
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Live Roster</h1>
          <p className="text-gray-600 mt-2">
            {filteredData.length} students across {uniqueClasses.length} classes
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button onClick={handleExportCSV} variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export to CSV
          </Button>
          <Button onClick={handleEmailAllParents} className="gap-2 bg-[#326389] hover:bg-[#2a5474]">
            <Mail className="w-4 h-4" />
            Email All Parents
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search students or classes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filterClass} onValueChange={setFilterClass}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {uniqueClasses.map(className => (
                  <SelectItem key={className} value={className}>
                    {className}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filterPayment} onValueChange={setFilterPayment}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by payment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payment Statuses</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Roster Table */}
      <Card>
        <CardHeader>
          <CardTitle>Student Roster</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Teacher
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Payment Status
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Medical Alert
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.parentEmail}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Grade {student.grade}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {student.class}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {student.teacher}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(
                          student.paymentStatus
                        )}`}
                      >
                        {student.paymentStatus.charAt(0).toUpperCase() + student.paymentStatus.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {student.hasMedicalAlert ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="relative group">
                            <AlertCircle className="w-5 h-5 text-red-600" />
                            {student.medicalNotes && (
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                {student.medicalNotes}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No students found matching your filters.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
