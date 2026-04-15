import { useState } from 'react';
import { Check, UserPlus, ArrowLeft, Pencil, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import type { Student, Proficiency } from '../types';
import { generateTempId, validateAgeForGrade, getGradeLabel } from '../utils/helpers';

interface Step1StudentInfoProps {
  studentsInSession: Student[];
  onStudentAdded: (student: Student, skipAdditionalQuestions?: boolean) => void;
  onStudentUpdated: (studentId: string, updatedStudent: Student) => void;
  onStudentDeleted: (studentId: string) => void;
  onContinue: () => void;
  onBack?: () => void;
}

const grades = ['K', '1', '2', '3', '4', '5', '6', '7', '8'];

export function Step1StudentInfo({
  studentsInSession,
  onStudentAdded,
  onStudentUpdated,
  onStudentDeleted,
  onContinue,
  onBack,
}: Step1StudentInfoProps) {
  const [showForm, setShowForm] = useState(studentsInSession.length === 0);
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [grade, setGrade] = useState('');
  const [proficiency, setProficiency] = useState<Proficiency>('non-speaker');
  const [dob, setDob] = useState('');
  const [ageWarning, setAgeWarning] = useState('');

  const handleDobChange = (value: string) => {
    setDob(value);
    if (value && grade) {
      const isValid = validateAgeForGrade(value, grade);
      if (!isValid) {
        setAgeWarning('Age may not match selected grade');
      } else {
        setAgeWarning('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingStudentId) {
      // Update existing student
      const updatedStudent: Student = {
        id: editingStudentId,
        firstName,
        lastName,
        grade,
        proficiency,
        dob,
        selectedClasses: studentsInSession.find((s) => s.id === editingStudentId)?.selectedClasses || [],
        additionalQuestions: studentsInSession.find((s) => s.id === editingStudentId)?.additionalQuestions,
      };
      onStudentUpdated(editingStudentId, updatedStudent);
      setEditingStudentId(null);
    } else {
      // Add new student
      const student: Student = {
        id: generateTempId(),
        firstName,
        lastName,
        grade,
        proficiency,
        dob,
        selectedClasses: [],
      };
      onStudentAdded(student);
    }

    // Reset form
    setFirstName('');
    setLastName('');
    setGrade('');
    setProficiency('non-speaker');
    setDob('');
    setAgeWarning('');
    setShowForm(false);
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudentId(student.id);
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setGrade(student.grade);
    setProficiency(student.proficiency);
    setDob(student.dob);
    setShowForm(true);
  };

  const handleDeleteStudent = (studentId: string) => {
    if (confirm('Are you sure you want to remove this student?')) {
      onStudentDeleted(studentId);
    }
  };

  const handleCancelEdit = () => {
    setEditingStudentId(null);
    setFirstName('');
    setLastName('');
    setGrade('');
    setProficiency('non-speaker');
    setDob('');
    setAgeWarning('');
    setShowForm(false);
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>
        )}

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Student Information</h2>
          <p className="mt-2 text-gray-600">
            Add students you'd like to register for classes
          </p>
        </div>

        {/* Students in Current Session */}
        {studentsInSession.length > 0 && !showForm && (
          <div className="space-y-4 mb-6">
            <h3 className="text-sm font-medium text-gray-700">Students Being Registered</h3>
            {studentsInSession.map((student) => (
              <Card key={student.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {student.firstName} {student.lastName}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {getGradeLabel(student.grade)} • {student.proficiency === 'speaker' ? 'Hebrew Speaker' : 'Non-Hebrew Speaker'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEditStudent(student)}
                      className="p-2 text-gray-600 hover:text-[#326389] hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit student"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteStudent(student.id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Remove student"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Add New Student Button */}
        {!showForm && (
          <Button
            type="button"
            variant="outline"
            className="w-full h-12 mb-6"
            onClick={() => setShowForm(true)}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Add New Student
          </Button>
        )}

        {/* New Student Form */}
        {showForm && (
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Sarah"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Cohen"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="grade">Grade *</Label>
                <Select value={grade} onValueChange={setGrade} required>
                  <SelectTrigger id="grade" className="mt-1">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {grades.map((g) => (
                      <SelectItem key={g} value={g}>
                        {getGradeLabel(g)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Hebrew Proficiency *</Label>
                <div className="mt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setProficiency('speaker')}
                    className={`
                      flex-1 py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all
                      ${
                        proficiency === 'speaker'
                          ? 'border-[#326389] bg-[#326389]/5 text-[#326389]'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    Hebrew Speaker
                  </button>
                  <button
                    type="button"
                    onClick={() => setProficiency('non-speaker')}
                    className={`
                      flex-1 py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all
                      ${
                        proficiency === 'non-speaker'
                          ? 'border-[#326389] bg-[#326389]/5 text-[#326389]'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    Non-Hebrew Speaker
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => handleDobChange(e.target.value)}
                  required
                  className="mt-1"
                  max={new Date().toISOString().split('T')[0]}
                />
                {ageWarning && (
                  <p className="text-sm text-amber-600 mt-1">{ageWarning}</p>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                {studentsInSession.length > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </Button>
                )}
                <Button
                  type="submit"
                  className="flex-1 bg-[#326389] hover:bg-[#326389]/90"
                >
                  {editingStudentId ? 'Update Student' : 'Save Student & Continue'}
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Continue Button (shown when students exist and not showing form) */}
        {studentsInSession.length > 0 && !showForm && (
          <Button
            onClick={onContinue}
            className="w-full h-12 bg-[#326389] hover:bg-[#326389]/90 mt-6"
          >
            Continue to Class Selection
          </Button>
        )}
      </div>
    </div>
  );
}
