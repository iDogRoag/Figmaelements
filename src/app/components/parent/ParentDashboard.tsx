import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { CheckCircle2, Download, Calendar, DollarSign, GraduationCap, Clock, UserPlus, CreditCard, Mail } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  grade: string;
  enrolledClass: string;
  teacher: string;
  schedule: string;
  location: string;
}

interface Document {
  title: string;
  date: string;
  url: string;
}

const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Sarah Cohen',
    grade: '2',
    enrolledClass: 'Hebrew Conversation Club',
    teacher: 'Moreh David',
    schedule: 'Tuesdays & Thursdays, 4:30 PM - 5:30 PM',
    location: 'Main Campus - Room 102',
  },
  {
    id: '2',
    name: 'Benjamin Cohen',
    grade: '4',
    enrolledClass: 'Reading Adventures in Hebrew',
    teacher: 'Morah Rachel',
    schedule: 'Mondays, 3:00 PM - 4:30 PM',
    location: 'Downtown Center - Room A',
  },
];

const mockDocuments: Document[] = [
  { title: 'Registration Receipt - September 2025', date: 'Sept 1, 2025', url: '#' },
  { title: 'Tax Form 2025', date: 'Jan 15, 2026', url: '#' },
  { title: 'Enrollment Confirmation', date: 'Aug 20, 2025', url: '#' },
  { title: 'Class Schedule 2025-2026', date: 'Aug 20, 2025', url: '#' },
];

interface ParentDashboardProps {
  parentName?: string;
}

export function ParentDashboard({ parentName = 'Maya' }: ParentDashboardProps) {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const nextPaymentDate = 'May 6, 2026';
  const nextPaymentAmount = '$240.00';
  const autoPayEnabled = true;

  return (
    <div className="p-8 space-y-8">
      {/* Shalom Header */}
      <div className="bg-gradient-to-r from-[#326389] to-[#4a7ba7] text-white rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">שלום, {parentName}!</h1>
        <p className="text-lg text-blue-100">Welcome back to your family dashboard</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Students (takes 2 columns on large screens) */}
        <div className="lg:col-span-2 space-y-6">
          {/* My Students Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockStudents.map((student) => (
                <Card key={student.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{student.name}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">Grade {student.grade}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#326389] bg-opacity-10 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-[#326389]" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">Enrolled Class</div>
                      <div className="text-base text-gray-900">{student.enrolledClass}</div>
                    </div>
                    <Button
                      onClick={() => setSelectedStudent(student)}
                      variant="outline"
                      className="w-full border-[#326389] text-[#326389] hover:bg-[#326389] hover:text-white"
                    >
                      View Class Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Documents & Receipts Section */}
          <Card>
            <CardHeader>
              <CardTitle>Documents & Receipts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center">
                        <Download className="w-5 h-5 text-[#326389]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{doc.title}</p>
                        <p className="text-xs text-gray-600">{doc.date}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-[#326389] hover:text-[#2a5474]"
                      onClick={() => window.open(doc.url, '_blank')}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Payment Info */}
        <div className="space-y-6">
          {/* Next Payment Card */}
          <Card className="border-2 border-[#326389] shadow-lg">
            <CardHeader className="bg-gradient-to-br from-[#326389] to-[#4a7ba7] text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Next Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-4 h-4 text-[#326389]" />
                  <span className="text-sm font-medium">Due Date</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{nextPaymentDate}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-700">
                  <DollarSign className="w-4 h-4 text-[#326389]" />
                  <span className="text-sm font-medium">Amount</span>
                </div>
                <p className="text-3xl font-bold text-[#326389]">{nextPaymentAmount}</p>
              </div>

              {autoPayEnabled && (
                <div className="pt-4 border-t border-gray-200">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-3 py-1">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Auto-pay is ON
                  </Badge>
                  <p className="text-xs text-gray-600 mt-2">
                    Payment will be processed automatically on the due date
                  </p>
                </div>
              )}

              <Button className="w-full bg-[#326389] hover:bg-[#2a5474] mt-4">
                View Payment History
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <UserPlus className="w-4 h-4 mr-2" />
                Register Another Child
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CreditCard className="w-4 h-4 mr-2" />
                Update Payment Method
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                Contact the School
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Class Details Modal */}
      {selectedStudent && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStudent(null)}
        >
          <Card className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <CardHeader className="bg-gradient-to-r from-[#326389] to-[#4a7ba7] text-white rounded-t-lg">
              <CardTitle>{selectedStudent.enrolledClass}</CardTitle>
              <p className="text-sm text-blue-100 mt-1">{selectedStudent.name} - Grade {selectedStudent.grade}</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-[#326389]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Teacher</p>
                    <p className="text-base text-gray-900">{selectedStudent.teacher}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#326389]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Schedule</p>
                    <p className="text-base text-gray-900">{selectedStudent.schedule}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#326389]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Location</p>
                    <p className="text-base text-gray-900">{selectedStudent.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <Button variant="outline" className="flex-1" onClick={() => setSelectedStudent(null)}>
                  Close
                </Button>
                <Button className="flex-1 bg-[#326389] hover:bg-[#2a5474]">
                  Contact Teacher
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
