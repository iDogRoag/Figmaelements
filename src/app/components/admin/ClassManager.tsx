import { useState } from 'react';
import { Plus, MoreVertical, Clock, MapPin, Users, GraduationCap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { CreateClassModal } from './CreateClassModal';

interface Class {
  id: string;
  title: string;
  teacher: string;
  grade: string;
  proficiency: 'speaker' | 'non-speaker';
  schedule: string;
  time: string;
  location: string;
  enrolled: number;
  capacity: number;
}

const MOCK_CLASSES: Class[] = [
  {
    id: '1',
    title: 'Hebrew for Beginners',
    teacher: 'Morah Maya',
    grade: '2',
    proficiency: 'non-speaker',
    schedule: 'Monday, Wednesday',
    time: '4:00 PM - 5:00 PM',
    location: 'Main Campus - Room 101',
    enrolled: 8,
    capacity: 12,
  },
  {
    id: '2',
    title: 'Hebrew Conversation Club',
    teacher: 'Moreh Yael',
    grade: '3',
    proficiency: 'speaker',
    schedule: 'Tuesday, Thursday',
    time: '4:30 PM - 5:30 PM',
    location: 'Main Campus - Room 102',
    enrolled: 10,
    capacity: 15,
  },
  {
    id: '3',
    title: 'Reading Adventures',
    teacher: 'Morah Dana',
    grade: '1',
    proficiency: 'non-speaker',
    schedule: 'Friday',
    time: '3:00 PM - 4:00 PM',
    location: 'Downtown Center - Room A',
    enrolled: 12,
    capacity: 12,
  },
];

export function ClassManager() {
  const [classes] = useState<Class[]>(MOCK_CLASSES);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Class Management</h1>
          <p className="text-gray-600 mt-1">Create and manage program classes</p>
        </div>
        <Button
          onClick={() => setShowCreateModal(true)}
          className="bg-[#326389] hover:bg-[#326389]/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create New Class
        </Button>
      </div>

      {/* Class List */}
      {classes.length === 0 ? (
        <Card className="p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No classes created for this season yet
            </h3>
            <p className="text-gray-600 mb-6">
              Get started by creating your first class using the button above.
            </p>
            <Button
              onClick={() => setShowCreateModal(true)}
              className="bg-[#326389] hover:bg-[#326389]/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Class
            </Button>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <Card key={classItem.id} className="p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {classItem.title}
                  </h3>
                  <p className="text-sm text-gray-600">{classItem.teacher}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Class</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{classItem.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{classItem.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{classItem.location}</span>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Grade {classItem.grade}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  {classItem.proficiency === 'speaker' ? 'Speaker' : 'Non-Speaker'}
                </span>
              </div>

              {/* Enrollment */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>Enrollment</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {classItem.enrolled} / {classItem.capacity}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#326389] h-2 rounded-full transition-all"
                    style={{
                      width: `${(classItem.enrolled / classItem.capacity) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Create Class Modal */}
      <CreateClassModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
}
