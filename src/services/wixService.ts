// src/services/wixService.ts

/**
 * NOTE FOR PRODUCTION: 
 * When moving to the live Wix site, you will swap these mock functions
 * for real imports from your backend/dbServices.jsw module:
 * import { getAvailableClasses, upsertParent, createStudent, processCheckoutCart } from 'backend/dbServices';
 */

export type WixClass = {
  _id: string;
  title: string;
  teacher?: string;
  gradeLevel?: string;
  proficiency?: string;
  daysOfWeek?: string[];
  startTime?: string;
  endTime?: string;
  location?: string;
  spotsRemaining?: number;
  status?: string;
  seasonId?: string;
  price: number;
};

export type ParentData = {
  email: string;
  wixMemberId?: string;
  title?: string;
  cellPhone?: string;
};

export type StudentData = {
  firstName: string;
  lastName: string;
  dob?: string;
  grade?: string;
  medicalNotes?: string;
};

export type CartData = {
  students: Array<{ studentId: string; classes: string[] }>;
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const MOCK_CLASSES: WixClass[] = [
  {
    _id: 'class-1',
    title: 'Hebrew Conversation (Grades 3–4)',
    teacher: 'Maya',
    gradeLevel: '3-4',
    proficiency: 'Speaker',
    daysOfWeek: ['Mon'],
    startTime: '4:00 PM',
    endTime: '5:00 PM',
    location: 'Brookline',
    spotsRemaining: 6,
    status: 'Active',
    seasonId: 'season-2026',
    price: 1200,
  },
  {
    _id: 'class-2',
    title: 'Hebrew Reading (Grades 1–2)',
    teacher: 'Yael',
    gradeLevel: '1-2',
    proficiency: 'Non-Speaker',
    daysOfWeek: ['Wed'],
    startTime: '4:00 PM',
    endTime: '5:00 PM',
    location: 'Brookline',
    spotsRemaining: 2,
    status: 'Active',
    seasonId: 'season-2026',
    price: 1200,
  },
];

const MOCK_FEES = {
  registrationFee: 75,
  materialsFee: 25,
  siblingDiscountPercent: 10,
};

// --- Service Functions ---

/** * Fetches available classes.
 * Simulates the backend call to getAvailableClasses(seasonId).
 */
export async function getClasses(seasonId: string): Promise<WixClass[]> {
  await delay(600); // Simulate network lag
  return MOCK_CLASSES.filter(c => c.seasonId === seasonId && c.status === 'Active');
}

/** * Submits family and student info.
 * Simulates upsertParent and createStudent calls.
 */
export async function submitRegistration(parent: ParentData, students: StudentData[]) {
  await delay(800);
  console.log('Backend: Parent & Students Synced to CMS', { parent, students });
  return { ok: true, parentId: 'mock-parent-123' };
}

/** * Calculates checkout totals.
 * Simulates processCheckoutCart using per-seat math and 9-month division.
 */
export async function calculateCheckout(cart: CartData) {
  await delay(500);
  
  let tuitionSubtotal = 0;
  cart.students.forEach(s => {
    s.classes.forEach(classId => {
      const cls = MOCK_CLASSES.find(c => c._id === classId);
      tuitionSubtotal += cls?.price || 0;
    });
  });

  const siblingEligible = cart.students.length >= 2;
  const siblingDiscount = siblingEligible ? (tuitionSubtotal * (MOCK_FEES.siblingDiscountPercent / 100)) : 0;
  const discountedAnnual = tuitionSubtotal - siblingDiscount;

  // Business Rule: Divide by 9 for installments
  const monthlyTuition = Math.round((discountedAnnual / 9) * 100) / 100;
  const materialsTotal = MOCK_FEES.materialsFee * cart.students.length;

  return {
    payInFullTotal: discountedAnnual + MOCK_FEES.registrationFee + materialsTotal,
    paymentPlanDueToday: monthlyTuition + MOCK_FEES.registrationFee + materialsTotal,
    monthlyPayments: monthlyTuition,
    lastMonthTuition: monthlyTuition
  };
}

// --- Admin Service Functions ---

export type AdminOverviewData = {
  totalStudents: number;
  activeClasses: number;
  totalRevenue: number;
  pendingAutopay: number;
  students: Array<{
    _id: string;
    title: string;
    grade?: string;
    classes: string[];
    payment?: 'Paid' | 'Pending' | 'Overdue';
    medical?: boolean;
    teacher?: string;
  }>;
};

/**
 * Fetches the complete overview for the Admin Dashboard.
 * Calls backend getAdminOverview().
 * In production, this returns data from Wix backend including:
 * totalStudents, activeClasses, totalRevenue, pendingAutopay, students[]
 */
export async function getAdminOverview(): Promise<AdminOverviewData> {
  await delay(1000); // Simulate database processing

  return {
    totalStudents: 142,
    activeClasses: 13,
    totalRevenue: 170400,
    pendingAutopay: 34080,
    students: [
      { _id: "s1", title: "Ben Doe", grade: "2", classes: ["Hebrew Reading"], payment: "Paid", medical: true, teacher: "Yael" },
      { _id: "s2", title: "Lily Doe", grade: "1", classes: ["Hebrew Reading"], payment: "Paid", medical: false, teacher: "Yael" },
      { _id: "s3", title: "Ari Cohen", grade: "4", classes: ["Hebrew Conversation"], payment: "Pending", medical: false, teacher: "Maya" },
    ]
  };
}

// Legacy functions - kept for backward compatibility, but consider using getAdminOverview() instead
export async function getAdminStats() {
  const overview = await getAdminOverview();
  return {
    totalStudents: overview.totalStudents,
    activeClasses: overview.activeClasses,
    totalRevenue: overview.totalRevenue,
    pendingAutopay: overview.pendingAutopay,
  };
}

export async function getAdminRoster() {
  const overview = await getAdminOverview();
  return overview.students.map(s => ({
    name: s.title,
    grade: s.grade || '1',
    className: s.classes[0] || 'Unassigned',
    teacher: s.teacher || 'TBD',
    payment: s.payment || 'Pending',
    medical: s.medical || false,
  }));
}