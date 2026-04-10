import { useState } from 'react';
import { Search, UserPlus, Edit, Trash2, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  grade: string;
  dob: string;
  enrolledClasses: number;
  status: 'active' | 'inactive';
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  medicalNotes?: string;
}

const mockStudents: Student[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Cohen',
    grade: '2',
    dob: '2018-03-15',
    enrolledClasses: 1,
    status: 'active',
    parentName: 'Rebecca Cohen',
    parentEmail: 'rebecca@cohen.com',
    parentPhone: '(617) 555-0101',
  },
  {
    id: '2',
    firstName: 'David',
    lastName: 'Levi',
    grade: '3',
    dob: '2017-08-22',
    enrolledClasses: 2,
    status: 'active',
    parentName: 'Jonathan Levi',
    parentEmail: 'jon@levi.com',
    parentPhone: '(617) 555-0102',
    medicalNotes: 'None',
  },
  {
    id: '3',
    firstName: 'Rachel',
    lastName: 'Goldberg',
    grade: '2',
    dob: '2018-01-10',
    enrolledClasses: 1,
    status: 'active',
    parentName: 'Miriam Goldberg',
    parentEmail: 'miriam@goldberg.com',
    parentPhone: '(617) 555-0103',
    medicalNotes: 'Asthma - inhaler required',
  },
  {
    id: '4',
    firstName: 'Michael',
    lastName: 'Katz',
    grade: '1',
    dob: '2019-05-30',
    enrolledClasses: 1,
    status: 'active',
    parentName: 'Daniel Katz',
    parentEmail: 'daniel@katz.com',
    parentPhone: '(617) 555-0104',
  },
  {
    id: '5',
    firstName: 'Emma',
    lastName: 'Shapiro',
    grade: '3',
    dob: '2017-11-18',
    enrolledClasses: 1,
    status: 'active',
    parentName: 'Lisa Shapiro',
    parentEmail: 'lisa@shapiro.com',
    parentPhone: '(617) 555-0105',
  },
  {
    id: '6',
    firstName: 'Jacob',
    lastName: 'Rosenberg',
    grade: '2',
    dob: '2018-07-25',
    enrolledClasses: 1,
    status: 'active',
    parentName: 'Aaron Rosenberg',
    parentEmail: 'aaron@rosenberg.com',
    parentPhone: '(617) 555-0106',
    medicalNotes: 'Dairy allergy',
  },
];

export function StudentDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filteredStudents = mockStudents.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.parentEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Database</h1>
          <p className="text-gray-600 mt-2">{mockStudents.length} total students</p>
        </div>
        <Button className="gap-2 bg-[#326389] hover:bg-[#2a5474]">
          <UserPlus className="w-4 h-4" />
          Add New Student
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by student name or parent email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Student Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {student.firstName} {student.lastName}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">Grade {student.grade}</p>
                </div>
                <Badge
                  variant={student.status === 'active' ? 'default' : 'secondary'}
                  className={student.status === 'active' ? 'bg-green-100 text-green-700' : ''}
                >
                  {student.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Student Info */}
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">DOB:</span>{' '}
                  <span className="text-gray-900">
                    {new Date(student.dob).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Classes:</span>{' '}
                  <span className="font-medium text-gray-900">{student.enrolledClasses}</span>
                </div>
              </div>

              {/* Parent Info */}
              <div className="pt-3 border-t border-gray-200 space-y-2 text-sm">
                <div className="font-medium text-gray-700">Parent/Guardian</div>
                <div className="text-gray-900">{student.parentName}</div>
                <div className="text-gray-600">{student.parentEmail}</div>
                <div className="text-gray-600">{student.parentPhone}</div>
              </div>

              {/* Medical Notes */}
              {student.medicalNotes && (
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs font-medium text-red-600 mb-1">Medical Notes</div>
                  <div className="text-sm text-gray-700">{student.medicalNotes}</div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-3 border-t border-gray-200 flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={() => setSelectedStudent(student)}
                >
                  <Eye className="w-3 h-3" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-2">
                  <Edit className="w-3 h-3" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="gap-2 text-red-600 hover:text-red-700">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500">No students found matching your search.</p>
          </CardContent>
        </Card>
      )}

      {/* Student Detail Modal (simplified) */}
      {selectedStudent && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStudent(null)}
        >
          <Card className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <CardTitle>
                {selectedStudent.firstName} {selectedStudent.lastName}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-600">Grade</div>
                  <div className="text-gray-900">Grade {selectedStudent.grade}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600">Date of Birth</div>
                  <div className="text-gray-900">
                    {new Date(selectedStudent.dob).toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600">Enrolled Classes</div>
                  <div className="text-gray-900">{selectedStudent.enrolledClasses}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600">Status</div>
                  <div className="text-gray-900">{selectedStudent.status}</div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="text-sm font-medium text-gray-900 mb-2">Parent/Guardian</div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>{selectedStudent.parentName}</div>
                  <div>{selectedStudent.parentEmail}</div>
                  <div>{selectedStudent.parentPhone}</div>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setSelectedStudent(null)}>
                  Close
                </Button>
                <Button className="bg-[#326389] hover:bg-[#2a5474]">Edit Student</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
