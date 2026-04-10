// Velo Event Bus - Communication layer between React and Wix Velo backend

import type {
  AuthCompleteEvent,
  StudentAddedEvent,
  CartUpdatedEvent,
  WaiverSignedEvent,
  PaymentInitiateEvent,
  PaymentSuccessEvent,
  SessionLoadedEvent,
  CapacityUpdatedEvent,
  CapacityReleasedEvent,
  StripeSessionReadyEvent,
  EnrollmentConfirmedEvent,
  PaymentFailedEvent,
  PromoValidatedEvent,
} from '../types';

// React emits these events to Velo
export const emitToVelo = {
  authComplete: (data: AuthCompleteEvent) => {
    window.dispatchEvent(new CustomEvent('auth:complete', { detail: data }));
  },

  studentAdded: (data: StudentAddedEvent) => {
    window.dispatchEvent(new CustomEvent('student:added', { detail: data }));
  },

  cartUpdated: (data: CartUpdatedEvent) => {
    window.dispatchEvent(new CustomEvent('cart:updated', { detail: data }));
  },

  waiverSigned: (data: WaiverSignedEvent) => {
    window.dispatchEvent(new CustomEvent('waivers:signed', { detail: data }));
  },

  paymentInitiate: (data: PaymentInitiateEvent) => {
    window.dispatchEvent(new CustomEvent('payment:initiate', { detail: data }));
  },

  paymentSuccess: (data: PaymentSuccessEvent) => {
    window.dispatchEvent(new CustomEvent('payment:success', { detail: data }));
  },

  promoCodeValidate: (code: string) => {
    window.dispatchEvent(new CustomEvent('promo:validate', { detail: { code } }));
  },
};

// React listens for these events from Velo
export const listenToVelo = {
  sessionLoaded: (callback: (data: SessionLoadedEvent) => void) => {
    const handler = (e: Event) => callback((e as CustomEvent).detail);
    window.addEventListener('session:loaded', handler);
    return () => window.removeEventListener('session:loaded', handler);
  },

  capacityUpdated: (callback: (data: CapacityUpdatedEvent) => void) => {
    const handler = (e: Event) => callback((e as CustomEvent).detail);
    window.addEventListener('capacity:updated', handler);
    return () => window.removeEventListener('capacity:updated', handler);
  },

  capacityReleased: (callback: (data: CapacityReleasedEvent) => void) => {
    const handler = (e: Event) => callback((e as CustomEvent).detail);
    window.addEventListener('capacity:released', handler);
    return () => window.removeEventListener('capacity:released', handler);
  },

  stripeSessionReady: (callback: (data: StripeSessionReadyEvent) => void) => {
    const handler = (e: Event) => callback((e as CustomEvent).detail);
    window.addEventListener('stripe:sessionReady', handler);
    return () => window.removeEventListener('stripe:sessionReady', handler);
  },

  enrollmentConfirmed: (callback: (data: EnrollmentConfirmedEvent) => void) => {
    const handler = (e: Event) => callback((e as CustomEvent).detail);
    window.addEventListener('enrollment:confirmed', handler);
    return () => window.removeEventListener('enrollment:confirmed', handler);
  },

  paymentFailed: (callback: (data: PaymentFailedEvent) => void) => {
    const handler = (e: Event) => callback((e as CustomEvent).detail);
    window.addEventListener('payment:failed', handler);
    return () => window.removeEventListener('payment:failed', handler);
  },

  promoValidated: (callback: (data: PromoValidatedEvent) => void) => {
    const handler = (e: Event) => callback((e as CustomEvent).detail);
    window.addEventListener('promo:validated', handler);
    return () => window.removeEventListener('promo:validated', handler);
  },
};
