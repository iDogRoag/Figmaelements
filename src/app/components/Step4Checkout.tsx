import { useState } from 'react';
import { CreditCard, AlertCircle, Tag, Check, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import type { Student, ClassData, PaymentMethod, CartSummary } from '../types';
import { formatCurrency } from '../utils/helpers';

interface Step4CheckoutProps {
  students: Student[];
  allClasses: ClassData[];
  cartSummary: CartSummary;
  onPaymentSubmit: (paymentMethod: PaymentMethod, promoCode?: string) => void;
  onPromoCodeValidate: (code: string) => void;
  paymentError?: string;
  onBack: () => void;
}

export function Step4Checkout({
  students,
  allClasses,
  cartSummary,
  onPaymentSubmit,
  onPromoCodeValidate,
  paymentError,
  onBack,
}: Step4CheckoutProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('full');
  const [showPromoField, setShowPromoField] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [cardName, setCardName] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePromoApply = () => {
    if (promoCode.trim()) {
      onPromoCodeValidate(promoCode);
      setPromoApplied(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // In production, this would integrate with Stripe
    onPaymentSubmit(paymentMethod, promoApplied ? promoCode : undefined);
  };

  const calculateTodayCharge = () => {
    return cartSummary.registrationFee + cartSummary.materialsFee + cartSummary.lastMonthTuition;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Waivers</span>
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
          <p className="mt-2 text-gray-600">Review your order and complete payment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Order Summary */}
          <div className="space-y-6">
            {/* Payment Option Selection */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Option
              </h3>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('full')}
                  className={`
                    w-full p-4 rounded-lg border-2 text-left transition-all
                    ${
                      paymentMethod === 'full'
                        ? 'border-[#326389] bg-[#326389]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">Pay in Full</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Pay entire program cost today
                      </p>
                    </div>
                    {paymentMethod === 'full' && (
                      <Check className="w-5 h-5 text-[#326389]" />
                    )}
                  </div>
                  <p className="text-lg font-bold text-[#326389] mt-2">
                    {formatCurrency(cartSummary.total)}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('plan')}
                  className={`
                    w-full p-4 rounded-lg border-2 text-left transition-all
                    ${
                      paymentMethod === 'plan'
                        ? 'border-[#326389] bg-[#326389]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">Monthly Payment Plan</p>
                      <p className="text-sm text-gray-600 mt-1">
                        9-month program (last month prepaid + 8 monthly payments)
                      </p>
                    </div>
                    {paymentMethod === 'plan' && (
                      <Check className="w-5 h-5 text-[#326389]" />
                    )}
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-700">
                      <strong>Today:</strong> {formatCurrency(calculateTodayCharge())}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Then:</strong> {formatCurrency(cartSummary.monthlyPayments)} × 8 months
                    </p>
                  </div>
                </button>
              </div>
            </Card>

            {/* Order Summary */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Order Summary
              </h3>

              <div className="space-y-4">
                {cartSummary.students.map((student) => (
                  <div key={student.studentId} className="pb-4 border-b border-gray-200 last:border-0">
                    <p className="font-semibold text-gray-900 mb-2">{student.studentName}</p>
                    <div className="space-y-1">
                      {student.classes.map((cls) => (
                        <div key={cls.classId} className="flex justify-between text-sm">
                          <span className="text-gray-600">{cls.className}</span>
                          <span className="text-gray-900 font-medium">
                            {formatCurrency(cls.price)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Pricing Breakdown */}
                <div className="pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">{formatCurrency(cartSummary.subtotal)}</span>
                  </div>

                  {cartSummary.siblingDiscount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Sibling Discount</span>
                      <span className="text-green-600">
                        -{formatCurrency(cartSummary.siblingDiscount)}
                      </span>
                    </div>
                  )}

                  {cartSummary.promoDiscount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Promo Code Applied</span>
                      <span className="text-green-600">
                        -{formatCurrency(cartSummary.promoDiscount)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm pt-2">
                    <span className="text-gray-600">Registration Fee (per family)</span>
                    <span className="text-gray-900">{formatCurrency(cartSummary.registrationFee)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Materials Fee</span>
                    <span className="text-gray-900">{formatCurrency(cartSummary.materialsFee)}</span>
                  </div>

                  {paymentMethod === 'plan' && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Last Month Tuition (prepaid)</span>
                      <span className="text-gray-900">
                        {formatCurrency(cartSummary.lastMonthTuition)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between pt-4 border-t border-gray-200">
                    <span className="font-bold text-gray-900">
                      {paymentMethod === 'full' ? 'Total Due Today' : 'Due Today'}
                    </span>
                    <span className="font-bold text-gray-900 text-lg">
                      {paymentMethod === 'full'
                        ? formatCurrency(cartSummary.total)
                        : formatCurrency(calculateTodayCharge())}
                    </span>
                  </div>

                  {paymentMethod === 'plan' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                      <p className="text-sm text-blue-900">
                        <strong>Payment Schedule:</strong> After today's payment, you'll be charged{' '}
                        {formatCurrency(cartSummary.monthlyPayments)} on the 6th of each month for 8 months.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Promo Code */}
            {!showPromoField ? (
              <button
                type="button"
                onClick={() => setShowPromoField(true)}
                className="text-sm text-[#326389] hover:underline font-medium flex items-center gap-2"
              >
                <Tag className="w-4 h-4" />
                Have a promo code?
              </button>
            ) : (
              <Card className="p-4">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePromoApply}
                    disabled={!promoCode.trim() || promoApplied}
                  >
                    Apply
                  </Button>
                </div>
              </Card>
            )}
          </div>

          {/* Right Column - Payment Form */}
          <div>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Information
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Cardholder Name *</Label>
                  <Input
                    id="cardName"
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Jane Doe"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="cardNumber">Card Number *</Label>
                  <Input
                    id="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\s/g, '');
                      if (/^\d*$/.test(value) && value.length <= 16) {
                        setCardNumber(value.replace(/(\d{4})/g, '$1 ').trim());
                      }
                    }}
                    placeholder="4242 4242 4242 4242"
                    required
                    className="mt-1"
                    maxLength={19}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cardExpiry">Expiry Date *</Label>
                    <Input
                      id="cardExpiry"
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value.length <= 4) {
                          const formatted = value.length >= 2 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;
                          setCardExpiry(formatted);
                        }
                      }}
                      placeholder="MM/YY"
                      required
                      className="mt-1"
                      maxLength={5}
                    />
                  </div>

                  <div>
                    <Label htmlFor="cardCvc">CVC *</Label>
                    <Input
                      id="cardCvc"
                      type="text"
                      value={cardCvc}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value.length <= 4) {
                          setCardCvc(value);
                        }
                      }}
                      placeholder="123"
                      required
                      className="mt-1"
                      maxLength={4}
                    />
                  </div>
                </div>

                {/* Payment Error */}
                {paymentError && (
                  <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Payment Failed</p>
                      <p className="mt-1">{paymentError}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-[#326389] hover:bg-[#326389]/90 mt-6"
                  disabled={loading}
                >
                  {loading ? (
                    'Processing...'
                  ) : (
                    <>
                      Pay {paymentMethod === 'full' ? formatCurrency(cartSummary.total) : formatCurrency(calculateTodayCharge())} & Submit Registration
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Your payment is secured by Stripe. We never store your card details.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
