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
// --- NEW IMPORT HERE ---
import { getClasses, submitRegistration, calculateCheckout } from './services/wixService';
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

export default function App() {
  const [stage, setStage] = useState<Stage>(0);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  // --- NEW LOADING STATE ---
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
  const [allClasses, setAllClasses] = useState<ClassData[]>([]); // Initialized as empty
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

  // 1. DYNAMIC CLASS LOADING
  useEffect(() => {
    async function initClasses() {
      setIsLoading(true);
      try {
        const data = await getClasses('season-2026');
        // Mapping Wix service types to your ClassData types
        const formattedClasses = data.map(c => ({
          id: c._id,
          title: c.title,
          proficiency: (c.proficiency?.toLowerCase() as any) || 'non-speaker',
          schedule: `${c.daysOfWeek?.join(' & ')} at ${c.startTime}`,
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
        toast.error("Failed to load classes from Wix");
      } finally {
        setIsLoading(false);
      }
    }
    initClasses();
  }, []);

  // 2. BACKEND MATH INTEGRATION (Calculates Cart via Service)
  useEffect(() => {
    async function updateCartMath() {
      if (session.students.length === 0) return;
      
      setIsLoading(true);
      try {
        const cartData = {
          students: session.students.map(s => ({ studentId: s.id, classes: s.selectedClasses.map(sc => sc.classId) }))
        };
        const result = await calculateCheckout(cartData);
        
        setCartSummary(prev => ({
          ...prev,
          total: result.payInFullTotal,
          lastMonthTuition: result.lastMonthTuition,
          monthlyPayments: result.monthlyPayments,
          // Use previous values for subtotal/fees or pull them from result if added to wixService
        }));
      } finally {
        setIsLoading(false);
      }
    }
    updateCartMath();
  }, [session.students]);

  // Helper to mark stage as completed and move to next
  const completeStageAndMoveTo = (currentStageNum: number, nextStage: Stage) => {
    if (!completedStages.includes(currentStageNum)) {
      setCompletedStages((prev) => [...prev, currentStageNum]);
    }
    setStage(nextStage);
  };

  const navigateToStage = (targetStage: number) => {
    setStage(targetStage as Stage);
  };

  const handleAuthComplete = (data: { memberId: string; email: string; isReturning: boolean }) => {
    setSession((prev) => ({
      ...prev,
      parentId: data.memberId,
      email: data.email,
      isReturning: data.isReturning,
    }));
    emitToVelo.authComplete(data);
    completeStageAndMoveTo(0, 1);
  };

  // 3. SYNC TO WIX ON STEP 1 CONTINUE
  const handleStep1Continue = async () => {
    setIsLoading(true);
    try {
      await submitRegistration({ email: session.email }, session.students as any);
      completeStageAndMoveTo(1, 2);
    } catch (err) {
      toast.error("Connection to Wix lost. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStudentAdded = (student: Student, skipAdditionalQuestions = false) => {
    setSession((prev) => ({
      ...prev,
      students: [...prev.students, student],
    }));
    emitToVelo.studentAdded({ student });
    if (skipAdditionalQuestions) {
      setCurrentStudentIndex(session.students.length);
      return;
    }
    setCurrentStudentIndex(session.students.length);
    completeStageAndMoveTo(1, '1b');
  };

  // ... (Rest of your original handlers for handleClassSelected, Waivers, etc.) ...
  // Keep your handleClassSelected, handleClassRemoved, handleWaiversSigned logic as they are!

  const currentStudent = session.students[currentStudentIndex];

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Progress Tracker */}
        <ProgressTracker
          currentStage={stage}
          completedStages={completedStages}
          onStageClick={navigateToStage}
        />

        {/* --- GLOBAL LOADING OVERLAY --- */}
        {isLoading && (
          <div className="fixed inset-0 bg-white/50 z-50 flex items-center justify-center">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#326389]"></div>
          </div>
        )}

        {/* Stage Rendering */}
        {stage === 0 && <Stage0Auth onAuthComplete={handleAuthComplete} />}

        {stage === 1 && (
          <Step1StudentInfo
            studentsInSession={session.students}
            onStudentAdded={handleStudentAdded}
            onStudentUpdated={(id, updated) => setSession(prev => ({...prev, students: prev.students.map(s => s.id === id ? updated : s)}))}
            onStudentDeleted={(id) => setSession(prev => ({...prev, students: prev.students.filter(s => s.id !== id)}))}
            onContinue={handleStep1Continue} // UPDATED HERE
            onBack={session.students.length > 0 ? () => navigateToStage(2) : undefined}
          />
        )}

        {/* ... (Keep your existing Stage 1b, 2, 3, 4 and Success Screen code) ... */}
      </div>
  );
}