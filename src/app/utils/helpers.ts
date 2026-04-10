import type { ClassData, Student } from '../types';

// Check if two classes have overlapping schedules
export function hasTimeConflict(class1: ClassData, class2: ClassData): boolean {
  // Check if they share any days
  const sharedDays = class1.days.some(day => class2.days.includes(day));
  if (!sharedDays) return false;

  // Parse times (format: "16:00")
  const start1 = parseTime(class1.startTime);
  const end1 = parseTime(class1.endTime);
  const start2 = parseTime(class2.startTime);
  const end2 = parseTime(class2.endTime);

  // Check if time ranges overlap
  return start1 < end2 && start2 < end1;
}

function parseTime(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

// Check if a class conflicts with any of the student's selected classes
export function hasConflictWithStudent(
  classData: ClassData,
  student: Student,
  allClasses: ClassData[]
): boolean {
  return student.selectedClasses.some(selection => {
    // Skip checking against itself
    if (selection.classId === classData.id) return false;
    
    const selectedClass = allClasses.find(c => c.id === selection.classId);
    return selectedClass && hasTimeConflict(classData, selectedClass);
  });
}

// Calculate age from date of birth
export function calculateAge(dob: string): number {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Validate age matches grade (rough validation)
export function validateAgeForGrade(dob: string, grade: string): boolean {
  const age = calculateAge(dob);
  const gradeNum = parseInt(grade.replace(/\D/g, ''));

  // Rough validation: grade + 5 should be close to age
  // Kindergarten = 5, 1st = 6, 2nd = 7, etc.
  const expectedAge = gradeNum === 0 ? 5 : gradeNum + 5;
  return Math.abs(age - expectedAge) <= 2; // Allow 2 year variance
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

// Generate temporary UUID for students
export function generateTempId(): string {
  return 'temp_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Format time remaining
export function formatTimeRemaining(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Get grade label
export function getGradeLabel(grade: string): string {
  const gradeLabels: Record<string, string> = {
    'K': 'Kindergarten',
    '1': '1st Grade',
    '2': '2nd Grade',
    '3': '3rd Grade',
    '4': '4th Grade',
    '5': '5th Grade',
    '6': '6th Grade',
    '7': '7th Grade',
    '8': '8th Grade',
  };
  return gradeLabels[grade] || grade;
}