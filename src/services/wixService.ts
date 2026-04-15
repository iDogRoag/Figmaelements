// src/services/wixService.ts
//
// Event-based RPC layer between React Custom Elements and Wix Velo.
//
// Flow:
//   React dispatches  →  window: 'wix:request'  →  Velo Page Code
//   Velo dispatches   →  window: 'wix:response:<requestId>'  →  React
//
// Velo Page Code must listen for 'wix:request' and dispatch the matching
// 'wix:response:<requestId>' with { data } on success or { error } on failure.

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

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

export type FamilyDashboardData = {
  students: Array<{
    id: string;
    name: string;
    grade: string;
    enrolledClass: string;
    teacher: string;
    schedule: string;
    location: string;
  }>;
  payment: {
    nextPaymentDate: string;
    nextPaymentAmount: string;
    autoPayEnabled: boolean;
  };
  documents: Array<{
    title: string;
    date: string;
    url: string;
  }>;
};

// ---------------------------------------------------------------------------
// Core RPC utility
// ---------------------------------------------------------------------------

const REQUEST_TIMEOUT_MS = 10_000;

function dispatchToWix<T>(eventName: string, payload: unknown): Promise<T> {
  return new Promise((resolve, reject) => {
    const requestId = crypto.randomUUID();
    const responseEventName = `wix:response:${requestId}`;

    // Reject and clean up if Velo never responds
    const timeout = setTimeout(() => {
      window.removeEventListener(responseEventName, handler);
      reject(new Error(`Wix request "${eventName}" timed out after ${REQUEST_TIMEOUT_MS}ms`));
    }, REQUEST_TIMEOUT_MS);

    const handler = (e: Event) => {
      clearTimeout(timeout);
      window.removeEventListener(responseEventName, handler);
      const { data, error } = (e as CustomEvent<{ data: T; error?: string }>).detail;
      if (error) {
        reject(new Error(error));
      } else {
        resolve(data);
      }
    };

    window.addEventListener(responseEventName, handler);

    window.dispatchEvent(
      new CustomEvent('wix:request', {
        detail: { eventName, payload, requestId },
      })
    );
  });
}

// ---------------------------------------------------------------------------
// Service functions
// ---------------------------------------------------------------------------

/** Fetches available classes for a given season from Wix CMS. */
export function getClasses(seasonId: string): Promise<WixClass[]> {
  return dispatchToWix('getClasses', { seasonId });
}

/** Submits parent and student info to the Wix backend (upsertParent + createStudent). */
export function submitRegistration(
  parent: ParentData,
  students: StudentData[]
): Promise<{ ok: boolean; parentId: string }> {
  return dispatchToWix('submitRegistration', { parent, students });
}

/** Calculates authoritative checkout totals (tuition, discounts, fees) from Wix backend. */
export function calculateCheckout(
  cart: CartData
): Promise<{
  payInFullTotal: number;
  paymentPlanDueToday: number;
  monthlyPayments: number;
  lastMonthTuition: number;
}> {
  return dispatchToWix('calculateCheckout', cart);
}

/** Fetches admin overview stats and student roster. */
export function getAdminOverview(): Promise<AdminOverviewData> {
  return dispatchToWix('getAdminOverview', {});
}

/** Fetches all data needed for the parent dashboard (students, payment info, documents). */
export function getFamilyDashboardData(memberId: string): Promise<FamilyDashboardData> {
  return dispatchToWix('getFamilyDashboardData', { memberId });
}
