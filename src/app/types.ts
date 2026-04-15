// Registration Flow Types

export type Proficiency = 'speaker' | 'non-speaker';
export type PaymentMethod = 'full' | 'plan';
export type Stage = 0 | 1 | '1b' | 2 | 3 | 4 | 'success';

export interface AdditionalQuestions {
  hebrewName: string;
  previousHebrewEducation: 'none' | 'home' | 'synagogue' | 'hebrew-school' | 'day-school' | 'other';
  yearsOfHebrewStudy: string;
  hebrewSchoolName: string;
  specialNeeds: string;
  medicalConditions: string;
  allergies: string;
  medications: string;
  dietaryRestrictions: string;
  emergencyContact1Name: string;
  emergencyContact1Phone: string;
  emergencyContact1Relationship: string;
  emergencyContact2Name: string;
  emergencyContact2Phone: string;
  emergencyContact2Relationship: string;
  parentCell: string;
  parentWork: string;
  additionalNotes: string;
  photoPermission: 'yes' | 'no';
  pickupAuthorization?: Array<{ name: string; relationship: string }>;
}

export interface Student {
  id: string; // temp UUID until saved to Velo
  firstName: string;
  lastName: string;
  grade: string;
  proficiency: Proficiency;
  dob: string;
  selectedClasses: ClassSelection[];
  additionalQuestions?: AdditionalQuestions;
}

export interface ClassSelection {
  classId: string;
  reservationExpiry?: number; // timestamp
}

export interface ClassData {
  id: string;
  title: string;
  proficiency: Proficiency;
  schedule: string;
  location: string;
  spotsRemaining: number;
  totalCapacity: number;
  price: number;
  grade: string;
  teacher?: string;
  description?: string;
  startTime: string; // "16:00"
  endTime: string; // "17:00"
  days: string[]; // ["Monday", "Wednesday"]
}

export interface WaiverSignature {
  signed: boolean;
  signatureURL?: string;
  fullName?: string;
  timestamp?: string;
}

export interface Waivers {
  medical: WaiverSignature;
  liability: WaiverSignature;
  media: WaiverSignature;
}

export interface RegistrationSession {
  parentId: string;
  email: string;
  isReturning: boolean;
  students: Student[];
  waivers: Waivers;
  medicalNotes?: string;
  promoCode?: string;
  discount?: number;
}

export interface CartSummary {
  subtotal: number;
  siblingDiscount: number;
  promoDiscount: number;
  total: number;
  registrationFee: number;
  materialsFee: number;
  lastMonthTuition: number;
  monthlyPayments: number;
  students: Array<{
    studentId: string;
    studentName: string;
    classes: Array<{
      classId: string;
      className: string;
      price: number;
    }>;
  }>;
}

// Velo Custom Events - React Emits
export interface AuthCompleteEvent {
  memberId: string;
  email: string;
  isReturning: boolean;
}

export interface StudentAddedEvent {
  student: Student;
}

export interface CartUpdatedEvent {
  studentId: string;
  classIds: string[];
  subtotal: number;
}

export interface WaiverSignedEvent {
  type: 'medical' | 'liability' | 'media';
  signatureDataURL: string;
  fullName: string;
  timestamp: string;
  version: string;
}

export interface PaymentInitiateEvent {
  cartSummary: CartSummary;
  paymentMethod: PaymentMethod;
}

export interface PaymentSuccessEvent {
  stripeSessionId?: string;
  enrollments: Array<{ studentId: string; classIds: string[] }>;
}

// Velo Custom Events - Velo Emits
export interface SessionLoadedEvent {
  memberId: string;
  existingStudents: Student[];
  previousRegistrations: any[];
}

export interface CapacityUpdatedEvent {
  classId: string;
  spotsRemaining: number;
}

export interface CapacityReleasedEvent {
  classId: string;
  message: string;
}

export interface StripeSessionReadyEvent {
  clientSecret: string;
  sessionId: string;
}

export interface EnrollmentConfirmedEvent {
  confirmationNumber: string;
  receiptURL: string;
  transactionId: string;
  studentNames: string[];
  classNames: string[];
  totalPaid: number;
  paymentMethod: string;
  date: string;
}

export interface PaymentFailedEvent {
  error: string;
  code?: string;
}

export interface PromoValidatedEvent {
  valid: boolean;
  discount: number;
  code: string;
}
