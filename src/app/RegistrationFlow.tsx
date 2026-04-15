import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { ProgressTracker } from './components/ProgressTracker';
import { Stage0Auth } from './components/Stage0Auth';
import { Step1StudentInfo } from './components/Step1StudentInfo';
import { Step1BAdditionalQuestions } from './components/Step1BAdditionalQuestions';
import { Step2ClassSelection } from './components/Step2ClassSelection';
import { Step3Waivers } from './components/Step3Waivers';
import { Step4Checkout } from './components/Step4Checkout';
import { SuccessScreen } from './components/SuccessScreen';
import { emitToVelo, listenToVelo } from './utils/veloEventBus';
import { getClasses, submitRegistration, calculateCheckout } from '../services/wixService';
import type {
  Stage,
  Student,
  ClassData,
  RegistrationSession,
  CartSummary,
  EnrollmentConfirmedEvent,
  PaymentMethod,
  AdditionalQuestions,
} from './types';

// Fallback mock data if backend is unavailable
const FALLBACK_CLASSES: ClassData[] = [
  {
    id: 'cls_1',
    title: 'Hebrew for Beginners',
    proficiency: 'non-speaker',
    schedule: 'Monday & Wednesday',
    location: 'Main Campus - Room 101',
    spotsRemaining: 8,
    totalCapacity: 12,
    price: 450,
    grade: '2',
    teacher: 'Morah Sarah',
    description: 'Introduction to Hebrew alphabet and basic vocabulary',
    startTime: '16:00',
    endTime: '17:00',
    days: ['Monday', 'Wednesday'],
  },
  {
    id: 'cls_2',
    title: 'Hebrew Conversation Club',
    proficiency: 'speaker',
    schedule: 'Tuesday & Thursday',
    location: 'Main Campus - Room 102',
    spotsRemaining: 5,
    totalCapacity: 10,
    price: 480,
    grade: '2',
    teacher: 'Moreh David',
    description: 'Practice conversational Hebrew in a fun, interactive environment',
    startTime: '16:30',
    endTime: '17:30',
    days: ['Tuesday', 'Thursday'],
  },
  {
    id: 'cls_3',
    title: 'Reading Adventures in Hebrew',
    proficiency: 'non-speaker',
    schedule: 'Monday',
    location: 'Downtown Center - Room A',
    spotsRemaining: 3,
    totalCapacity: 15,
    price: 420,
    grade: '3',
    teacher: 'Morah Rachel',
    description: 'Build reading comprehension through stories',
    startTime: '15:00',
    endTime: '16:30',
    days: ['Monday'],
  },
  {
    id: 'cls_4',
    title: 'Hebrew Through Music & Art',
    proficiency: 'non-speaker',
    schedule: 'Friday',
    location: 'Main Campus - Art Studio',
    spotsRemaining: 12,
    totalCapacity: 15,
    price: 400,
    grade: '1',
    teacher: 'Morah Leah',
    description: 'Learn Hebrew through creative expression',
    startTime: '14:00',
    endTime: '15:30',
    days: ['Friday'],
  },
];

export default function App() {
  const [stage, setStage] = useState<Stage>(1);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<RegistrationSession>({
    parentId: '',
    email: '',
    isReturning: false,
    students: [],
    waivers: {
      medical: { signed: false },
      liability: { signed: false },
      media: { signed: false },
    },
  });
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [allClasses, setAllClasses] = useState<ClassData[]>([]);
  const [cartSummary, setCartSummary] = useState<CartSummary>({
    subtotal: 0,
    siblingDiscount: 0,
    promoDiscount: 0,
    total: 0,
    registrationFee: 75,
    materialsFee: 50,
    lastMonthTuition: 0,
    monthlyPayments: 0,
    students: [],
  });
  const [paymentError, setPaymentError] = useState<string>();
  const [enrollmentConfirmation, setEnrollmentConfirmation] = useState<EnrollmentConfirmedEvent>();

  // Load classes from backend on mount
  useEffect(() => {
    // In dev mode there is no Velo backend — use fallback data immediately
    if (import.meta.env.DEV) {
      const timer = setTimeout(() => {
        setAllClasses(FALLBACK_CLASSES);
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }

    async function initClasses() {
      setIsLoading(true);
      try {
        const data = await getClasses('season-2026');
        const formattedClasses = data.map(c => ({
          id: c._id,
          title: c.title,
          proficiency: (c.proficiency?.toLowerCase() as 'speaker' | 'non-speaker') || 'non-speaker',
          schedule: `${c.daysOfWeek?.join(' & ')} ${c.startTime}`,
          location: c.location || 'TBD',
          spotsRemaining: c.spotsRemaining || 0,
          totalCapacity: 12,
          price: c.price,
          grade: c.gradeLevel || '1',
          teacher: c.teacher || 'Morah',
          description: '',
          startTime: c.startTime || '',
          endTime: c.endTime || '',
          days: c.daysOfWeek || [],
        }));
        setAllClasses(formattedClasses);
      } catch (err) {
        toast.error('Failed to load classes from backend');
        setAllClasses(FALLBACK_CLASSES);
      } finally {
        setIsLoading(false);
      }
    }
    initClasses();
  }, []);

  // Helper to mark stage as completed and move to next
  const completeStageAndMoveTo = (currentStageNum: number, nextStage: Stage) => {
    if (!completedStages.includes(currentStageNum)) {
      setCompletedStages((prev) => [...prev, currentStageNum]);
    }
    setStage(nextStage);
  };

  // Helper to navigate to a specific stage
  const navigateToStage = (targetStage: number) => {
    setStage(targetStage as Stage);
  };

  // Listen for Velo events
  useEffect(() => {
    const unsubscribeSessionLoaded = listenToVelo.sessionLoaded((data) => {
      setSession((prev) => ({
        ...prev,
        parentId: data.memberId,
        students: data.existingStudents,
      }));
    });

    const unsubscribeCapacityUpdated = listenToVelo.capacityUpdated((data) => {
      setAllClasses((prev) =>
        prev.map((cls) =>
          cls.id === data.classId ? { ...cls, spotsRemaining: data.spotsRemaining } : cls
        )
      );
    });

    const unsubscribeCapacityReleased = listenToVelo.capacityReleased((data) => {
      toast.warning('Reservation Expired', {
        description: data.message,
      });
    });

    const unsubscribeEnrollmentConfirmed = listenToVelo.enrollmentConfirmed((data) => {
      setEnrollmentConfirmation(data);
      setStage('success');
    });

    const unsubscribePaymentFailed = listenToVelo.paymentFailed((data) => {
      setPaymentError(data.error);
      toast.error('Payment Failed', {
        description: data.error,
      });
    });

    const unsubscribePromoValidated = listenToVelo.promoValidated((data) => {
      if (data.valid) {
        setCartSummary((prev) => ({
          ...prev,
          promoDiscount: data.discount,
          total: prev.subtotal - prev.siblingDiscount - data.discount,
        }));
        toast.success('Promo code applied!');
      } else {
        toast.error('Invalid promo code');
      }
    });

    return () => {
      unsubscribeSessionLoaded();
      unsubscribeCapacityUpdated();
      unsubscribeCapacityReleased();
      unsubscribeEnrollmentConfirmed();
      unsubscribePaymentFailed();
      unsubscribePromoValidated();
    };
  }, []);

  // Calculate cart summary using backend when students/classes change
  useEffect(() => {
    async function updateCartMath() {
      if (session.students.length === 0) {
        // Reset cart if no students
        setCartSummary({
          subtotal: 0,
          siblingDiscount: 0,
          promoDiscount: 0,
          total: 0,
          registrationFee: 75,
          materialsFee: 0,
          lastMonthTuition: 0,
          monthlyPayments: 0,
          students: [],
        });
        return;
      }

      // Calculate local subtotal and student details for UI
      const subtotal = session.students.reduce((total, student) => {
        return (
          total +
          student.selectedClasses.reduce((sum, selection) => {
            const cls = allClasses.find((c) => c.id === selection.classId);
            return sum + (cls?.price || 0);
          }, 0)
        );
      }, 0);

      const studentsWithClasses = session.students.filter(
        (s) => s.selectedClasses.length > 0
      ).length;
      const siblingDiscount = studentsWithClasses > 1 ? subtotal * 0.1 : 0;

      try {
        // In dev mode there is no Velo backend — skip the RPC call and fall through to local calc
        if (import.meta.env.DEV) throw new Error('dev');

        // Get authoritative pricing from backend
        const cartData = {
          students: session.students.map(s => ({
            studentId: s.id,
            classes: s.selectedClasses.map(sc => sc.classId)
          }))
        };
        const result = await calculateCheckout(cartData);

        setCartSummary({
          subtotal,
          siblingDiscount,
          promoDiscount: cartSummary.promoDiscount || 0,
          total: result.payInFullTotal,
          registrationFee: 75,
          materialsFee: session.students.length * 25,
          lastMonthTuition: result.lastMonthTuition,
          monthlyPayments: result.monthlyPayments,
          students: session.students.map((student) => ({
            studentId: student.id,
            studentName: `${student.firstName} ${student.lastName}`,
            classes: student.selectedClasses.map((selection) => {
              const cls = allClasses.find((c) => c.id === selection.classId);
              return {
                classId: selection.classId,
                className: cls?.title || '',
                price: cls?.price || 0,
              };
            }),
          })),
        });
      } catch (err) {
        // Fallback to local calculation if backend fails
        const afterDiscounts = subtotal - siblingDiscount - (cartSummary.promoDiscount || 0);
        const monthlyPayments = Math.ceil(afterDiscounts / 9);
        const materialsFee = session.students.length * 25;

        setCartSummary({
          subtotal,
          siblingDiscount,
          promoDiscount: cartSummary.promoDiscount || 0,
          total: afterDiscounts + 75 + materialsFee,
          registrationFee: 75,
          materialsFee,
          lastMonthTuition: monthlyPayments,
          monthlyPayments,
          students: session.students.map((student) => ({
            studentId: student.id,
            studentName: `${student.firstName} ${student.lastName}`,
            classes: student.selectedClasses.map((selection) => {
              const cls = allClasses.find((c) => c.id === selection.classId);
              return {
                classId: selection.classId,
                className: cls?.title || '',
                price: cls?.price || 0,
              };
            }),
          })),
        });
      }
    }
    updateCartMath();
  }, [session.students, allClasses, cartSummary.promoDiscount]);

  const handleAuthComplete = (data: { memberId: string; email: string; isReturning: boolean }) => {
    setSession((prev) => ({
      ...prev,
      parentId: data.memberId,
      email: data.email,
      isReturning: data.isReturning,
    }));

    emitToVelo.authComplete(data);

    // Move to Step 1
    completeStageAndMoveTo(0, 1);
  };

  const handleStudentAdded = (student: Student, skipAdditionalQuestions = false) => {
    setSession((prev) => ({
      ...prev,
      students: [...prev.students, student],
    }));

    emitToVelo.studentAdded({ student });

    // If this is an existing student with saved data, skip Step 1B
    if (skipAdditionalQuestions) {
      setCurrentStudentIndex(session.students.length);
      return; // Stay on Step 1
    }

    // Move to Step 1B (Additional Questions) for new students
    setCurrentStudentIndex(session.students.length);
    completeStageAndMoveTo(1, '1b');
  };

  const handleAdditionalQuestionsComplete = (
    studentId: string,
    questions: AdditionalQuestions
  ) => {
    setSession((prev) => ({
      ...prev,
      students: prev.students.map((s) =>
        s.id === studentId ? { ...s, additionalQuestions: questions } : s
      ),
    }));

    // Go back to Step 1 so user can add another student or continue to class selection
    setStage(1);
  };

  const handleStudentUpdated = (studentId: string, updatedStudent: Student) => {
    setSession((prev) => ({
      ...prev,
      students: prev.students.map((s) => (s.id === studentId ? updatedStudent : s)),
    }));
  };

  const handleStudentDeleted = (studentId: string) => {
    setSession((prev) => ({
      ...prev,
      students: prev.students.filter((s) => s.id !== studentId),
    }));

    // If no students left, stay on Step 1
    if (session.students.length === 1) {
      setCurrentStudentIndex(0);
    }
  };

  const handleClassSelected = (studentId: string, classId: string) => {
    setSession((prev) => ({
      ...prev,
      students: prev.students.map((s) =>
        s.id === studentId
          ? {
              ...s,
              selectedClasses: [
                ...s.selectedClasses,
                { classId, reservationExpiry: Date.now() + 15 * 60 * 1000 },
              ],
            }
          : s
      ),
    }));

    emitToVelo.cartUpdated({
      studentId,
      classIds: [classId],
      subtotal: cartSummary.subtotal,
    });
  };

  const handleClassRemoved = (studentId: string, classId: string) => {
    setSession((prev) => ({
      ...prev,
      students: prev.students.map((s) =>
        s.id === studentId
          ? {
              ...s,
              selectedClasses: s.selectedClasses.filter((c) => c.classId !== classId),
            }
          : s
      ),
    }));
  };

  const handleAddAnotherStudent = () => {
    setStage(1);
  };

  const handleWaiversSigned = (data: {
    medicalNotes: string;
    signatures: {
      codeOfConduct: { dataURL: string; fullName: string };
      cancellation: { dataURL: string; fullName: string };
      photoRelease: { dataURL: string; fullName: string };
    };
  }) => {
    setSession((prev) => ({
      ...prev,
      medicalNotes: data.medicalNotes,
      waiverSignatures: data.signatures,
    }));
  };

  const handlePaymentSubmit = (paymentMethod: PaymentMethod, promoCode?: string) => {
    setPaymentError(undefined);

    emitToVelo.paymentInitiate({
      cartSummary,
      paymentMethod,
    });

    if (import.meta.env.DEV) {
      // Simulate payment success after 2 seconds in DEV mode
      setTimeout(() => {
        const mockConfirmation: EnrollmentConfirmedEvent = {
          confirmationNumber: 'CONF-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
          receiptURL: '#',
          transactionId: 'TXN-' + Math.random().toString(36).substring(2, 15).toUpperCase(),
          studentNames: session.students.map((s) => `${s.firstName} ${s.lastName}`),
          classNames: session.students.flatMap((s) =>
            s.selectedClasses.map((sc) => {
              const cls = allClasses.find((c) => c.id === sc.classId);
              return cls?.title || '';
            })
          ),
          totalPaid: paymentMethod === 'full' ? cartSummary.total : cartSummary.registrationFee + cartSummary.materialsFee + cartSummary.lastMonthTuition,
          paymentMethod: paymentMethod === 'full' ? 'Paid in Full' : 'Monthly Payment Plan',
          date: new Date().toISOString(),
        };

        setEnrollmentConfirmation(mockConfirmation);
        setStage('success');

        emitToVelo.paymentSuccess({
          stripeSessionId: 'stripe_' + Date.now(),
          enrollments: session.students.map((s) => ({
            studentId: s.id,
            classIds: s.selectedClasses.map((sc) => sc.classId),
          })),
        });
      }, 2000);
    }
  };

  const handleCapacityExpired = (classId: string) => {
    // Remove the class from all students
    setSession((prev) => ({
      ...prev,
      students: prev.students.map((s) => ({
        ...s,
        selectedClasses: s.selectedClasses.filter((c) => c.classId !== classId),
      })),
    }));

    const expiredClass = allClasses.find((c) => c.id === classId);
    toast.warning('Reservation Expired', {
      description: `Your spot in "${expiredClass?.title}" has been released. Please re-add if still available.`,
    });
  };

  const handlePromoCodeValidate = (code: string) => {
    emitToVelo.promoCodeValidate(code);
  };

  const handleRegisterAnother = () => {
    // Reset to Step 1 but keep parent session
    setSession((prev) => ({
      ...prev,
      students: [],
      waivers: {
        medical: { signed: false },
        liability: { signed: false },
        media: { signed: false },
      },
    }));
    setStage(1);
  };

  const handleGoToDashboard = () => {
    // In production, this would navigate to the family dashboard
    window.location.href = '/dashboard';
  };

  const currentStudent = session.students[currentStudentIndex];

  return (
    <div className="bg-gray-50 w-full">
        {/* Progress Tracker */}
        <ProgressTracker
          currentStage={stage}
          completedStages={completedStages}
          onStageClick={navigateToStage}
        />

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-white/50 z-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#326389]" />
          </div>
        )}

        {/* Stage Rendering */}
        {stage === 0 && <Stage0Auth onAuthComplete={handleAuthComplete} />}

        {stage === 1 && (
          <Step1StudentInfo
            studentsInSession={session.students}
            onStudentAdded={handleStudentAdded}
            onStudentUpdated={handleStudentUpdated}
            onStudentDeleted={handleStudentDeleted}
            onContinue={async () => {
              setIsLoading(true);
              try {
                if (!import.meta.env.DEV) {
                  await submitRegistration(
                    { email: session.email, wixMemberId: session.parentId },
                    session.students.map(s => ({
                      firstName: s.firstName,
                      lastName: s.lastName,
                      dob: s.dob,
                      grade: s.grade,
                      medicalNotes: s.medicalNotes,
                    }))
                  );
                }
                completeStageAndMoveTo(1, 2);
              } catch (err) {
                toast.error('Failed to sync student data. Please try again.');
              } finally {
                setIsLoading(false);
              }
            }}
            onBack={session.students.length > 0 ? () => navigateToStage(2) : undefined}
          />
        )}

        {stage === '1b' && currentStudent && (
          <Step1BAdditionalQuestions
            student={currentStudent}
            onQuestionsComplete={handleAdditionalQuestionsComplete}
            onBack={() => navigateToStage(1)}
          />
        )}

        {stage === 2 && currentStudent && (
          <Step2ClassSelection
            students={session.students}
            currentStudent={currentStudent}
            allClasses={allClasses}
            onClassSelected={handleClassSelected}
            onClassRemoved={handleClassRemoved}
            onContinue={() => completeStageAndMoveTo(2, 3)}
            onAddAnotherStudent={handleAddAnotherStudent}
            onCapacityExpired={handleCapacityExpired}
            onBack={() => navigateToStage(1)}
          />
        )}

        {stage === 3 && (
          <Step3Waivers
            students={session.students}
            onWaiversSigned={handleWaiversSigned}
            onContinue={() => completeStageAndMoveTo(3, 4)}
            onBack={() => navigateToStage(2)}
          />
        )}

        {stage === 4 && (
          <Step4Checkout
            students={session.students}
            allClasses={allClasses}
            cartSummary={cartSummary}
            onPaymentSubmit={handlePaymentSubmit}
            onPromoCodeValidate={handlePromoCodeValidate}
            paymentError={paymentError}
            onBack={() => navigateToStage(3)}
          />
        )}

        {stage === 'success' && enrollmentConfirmation && (
          <SuccessScreen
            confirmation={enrollmentConfirmation}
            onRegisterAnother={handleRegisterAnother}
            onGoToDashboard={handleGoToDashboard}
          />
        )}
      </div>
  );
}