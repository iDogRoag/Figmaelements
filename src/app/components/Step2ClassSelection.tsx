import { useState, useEffect } from 'react';
import { Clock, MapPin, Users, AlertCircle, ShoppingCart, X, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import type { Student, ClassData } from '../types';
import { hasConflictWithStudent, formatCurrency, formatTimeRemaining } from '../utils/helpers';

interface Step2ClassSelectionProps {
  students: Student[];
  currentStudent: Student;
  allClasses: ClassData[];
  onClassSelected: (studentId: string, classId: string) => void;
  onClassRemoved: (studentId: string, classId: string) => void;
  onContinue: () => void;
  onAddAnotherStudent: () => void;
  onCapacityExpired: (classId: string) => void;
  onBack: () => void;
}

export function Step2ClassSelection({
  students,
  currentStudent,
  allClasses,
  onClassSelected,
  onClassRemoved,
  onContinue,
  onAddAnotherStudent,
  onCapacityExpired,
  onBack,
}: Step2ClassSelectionProps) {
  const [showAllClasses, setShowAllClasses] = useState(false);
  const [reservationTimers, setReservationTimers] = useState<Record<string, number>>({});

  // Filter classes based on student profile
  const getFilteredClasses = () => {
    if (showAllClasses) return allClasses;

    return allClasses.filter(
      (cls) =>
        cls.grade === currentStudent.grade &&
        cls.proficiency === currentStudent.proficiency
    );
  };

  const filteredClasses = getFilteredClasses();

  // Calculate total cart value
  const cartTotal = students.reduce((total, student) => {
    return (
      total +
      student.selectedClasses.reduce((sum, selection) => {
        const cls = allClasses.find((c) => c.id === selection.classId);
        return sum + (cls?.price || 0);
      }, 0)
    );
  }, 0);

  const totalClassesSelected = students.reduce(
    (sum, s) => sum + s.selectedClasses.length,
    0
  );

  // Countdown timers for reservations
  useEffect(() => {
    const interval = setInterval(() => {
      setReservationTimers((prev) => {
        const updated = { ...prev };
        let hasChanges = false;

        Object.keys(updated).forEach((classId) => {
          if (updated[classId] > 0) {
            updated[classId]--;
            hasChanges = true;
          } else if (updated[classId] === 0) {
            onCapacityExpired(classId);
            delete updated[classId];
            hasChanges = true;
          }
        });

        return hasChanges ? updated : prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onCapacityExpired]);

  const handleAddToCart = (classId: string) => {
    onClassSelected(currentStudent.id, classId);

    // Start 15-minute countdown (900 seconds)
    setReservationTimers((prev) => ({ ...prev, [classId]: 900 }));
  };

  const handleRemoveFromCart = (studentId: string, classId: string) => {
    onClassRemoved(studentId, classId);

    // Remove timer
    setReservationTimers((prev) => {
      const updated = { ...prev };
      delete updated[classId];
      return updated;
    });
  };

  const isClassSelected = (classId: string) => {
    return currentStudent.selectedClasses.some((s) => s.classId === classId);
  };

  const hasTimeConflict = (classData: ClassData) => {
    return hasConflictWithStudent(classData, currentStudent, allClasses);
  };

  return (
    <div className="w-full bg-gray-50 pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Student Info</span>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Select Classes for {currentStudent.firstName}
          </h2>
          <p className="mt-2 text-gray-600">
            Choose from our available classes
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="py-1.5 px-3">
            Grade: {currentStudent.grade}
          </Badge>
          <Badge variant="secondary" className="py-1.5 px-3">
            Proficiency: {currentStudent.proficiency === 'speaker' ? 'Hebrew Speaker' : 'Non-Hebrew Speaker'}
          </Badge>
          {!showAllClasses && filteredClasses.length < allClasses.length && (
            <button
              onClick={() => setShowAllClasses(true)}
              className="text-sm text-[#326389] hover:underline font-medium"
            >
              View All {allClasses.length} Classes
            </button>
          )}
          {showAllClasses && (
            <button
              onClick={() => setShowAllClasses(false)}
              className="text-sm text-[#326389] hover:underline font-medium"
            >
              Show Recommended Only
            </button>
          )}
        </div>

        {/* Classes Grid */}
        {filteredClasses.length === 0 ? (
          <Card className="p-8 text-center">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No matching classes found
            </h3>
            <p className="text-gray-600 mb-4">
              Try viewing all classes to see more options
            </p>
            <Button onClick={() => setShowAllClasses(true)} variant="outline">
              View All Classes
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredClasses.map((cls) => {
              const selected = isClassSelected(cls.id);
              const conflict = hasTimeConflict(cls);
              const soldOut = cls.spotsRemaining === 0;
              const capacityPercent = (cls.spotsRemaining / cls.totalCapacity) * 100;
              const reservationTime = reservationTimers[cls.id];

              return (
                <Card
                  key={cls.id}
                  className={`
                    p-5 transition-all
                    ${selected ? 'border-[#326389] ring-2 ring-[#326389]/20' : ''}
                    ${conflict || soldOut ? 'opacity-60' : ''}
                  `}
                >
                  <div className="space-y-3">
                    {/* Title & Proficiency */}
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-gray-900 leading-tight">
                          {cls.title}
                        </h3>
                        <Badge
                          variant={cls.proficiency === 'speaker' ? 'default' : 'secondary'}
                          className="shrink-0"
                        >
                          {cls.proficiency === 'speaker' ? 'Speaker' : 'Non-Speaker'}
                        </Badge>
                      </div>
                      {cls.teacher && (
                        <p className="text-sm text-gray-600 mt-1">with {cls.teacher}</p>
                      )}
                    </div>

                    {/* Schedule */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>
                        {cls.days.join(', ')} • {cls.startTime} - {cls.endTime}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{cls.location}</span>
                    </div>

                    {/* Capacity */}
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>
                            {cls.spotsRemaining} of {cls.totalCapacity} spots available
                          </span>
                        </div>
                      </div>
                      <Progress value={capacityPercent} className="h-1.5" />
                    </div>

                    {/* Price */}
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(cls.price)}
                    </div>

                    {/* Warnings */}
                    {conflict && (
                      <div className="flex items-start gap-2 p-2 bg-amber-50 border border-amber-200 rounded text-sm text-amber-800">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Time conflict with selected class</span>
                      </div>
                    )}

                    {soldOut && (
                      <div className="flex items-start gap-2 p-2 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>This class is currently full</span>
                      </div>
                    )}

                    {/* Reservation Timer */}
                    {selected && reservationTime && (
                      <div
                        className={`
                          flex items-center gap-2 p-2 rounded text-sm
                          ${reservationTime < 300 ? 'bg-red-50 border border-red-200 text-red-800' : 'bg-blue-50 border border-blue-200 text-blue-800'}
                        `}
                      >
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>Spot reserved for {formatTimeRemaining(reservationTime)}</span>
                      </div>
                    )}

                    {/* Action Button */}
                    {selected ? (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleRemoveFromCart(currentStudent.id, cls.id)}
                      >
                        Remove from Cart
                      </Button>
                    ) : (
                      <Button
                        className="w-full bg-[#326389] hover:bg-[#326389]/90"
                        disabled={conflict || soldOut}
                        onClick={() => handleAddToCart(cls.id)}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Sticky Footer Cart */}
      {totalClassesSelected > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Cart Summary */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">
                    {totalClassesSelected} {totalClassesSelected === 1 ? 'class' : 'classes'} selected
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {formatCurrency(cartTotal)}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  onClick={onAddAnotherStudent}
                  className="flex-1 sm:flex-none"
                >
                  Add Another Student
                </Button>
                <Button
                  onClick={onContinue}
                  className="flex-1 sm:flex-none bg-[#326389] hover:bg-[#326389]/90"
                >
                  Proceed to Waivers
                </Button>
              </div>
            </div>

            {/* Student Pills */}
            <div className="flex flex-wrap gap-2 mt-3">
              {students.map((student) => (
                student.selectedClasses.length > 0 && (
                  <div
                    key={student.id}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm"
                  >
                    <span>
                      <strong>{student.firstName}:</strong> {student.selectedClasses.length} {student.selectedClasses.length === 1 ? 'class' : 'classes'}
                    </span>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
