import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Plus, Trash2, Loader2, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog';
import { CreatePromoModal } from './CreatePromoModal';

interface GlobalFeesFormData {
  registrationFee: number;
  materialsFee: number;
  baseMonthlyTuition: number;
  earlyBirdDeadline: string;
  earlyBirdDiscount: number;
}

interface PromoCode {
  id: string;
  code: string;
  discountAmount: number;
  expiryDate: string;
}

const MOCK_PROMO_CODES: PromoCode[] = [
  {
    id: '1',
    code: 'SUMMER2024',
    discountAmount: 50,
    expiryDate: '2024-08-31',
  },
  {
    id: '2',
    code: 'WELCOME10',
    discountAmount: 10,
    expiryDate: '2024-12-31',
  },
];

export function FinancialSettings() {
  const [loading, setLoading] = useState(false);
  const [siblingDiscountEnabled, setSiblingDiscountEnabled] = useState(true);
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>(MOCK_PROMO_CODES);
  const [showCreatePromo, setShowCreatePromo] = useState(false);
  const [deletePromoId, setDeletePromoId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GlobalFeesFormData>({
    defaultValues: {
      registrationFee: 75,
      materialsFee: 25,
      baseMonthlyTuition: 450,
      earlyBirdDeadline: '2024-07-15',
      earlyBirdDiscount: 15,
    },
  });

  const onSubmitFees = async (data: GlobalFeesFormData) => {
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Financial settings saved successfully!');
    setLoading(false);
  };

  const handleDeletePromo = (id: string) => {
    setPromoCodes((prev) => prev.filter((promo) => promo.id !== id));
    setDeletePromoId(null);
    toast.success('Promo code deleted successfully');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Financial Settings</h1>
        <p className="text-gray-600 mt-1">Manage fees, pricing, and promotions</p>
      </div>

      <div className="max-w-4xl space-y-6">
        {/* Card 1: Global Fees */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Global Fees</h2>

          <form onSubmit={handleSubmit(onSubmitFees)} className="space-y-6">
            {/* Registration & Materials Fees */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="registrationFee">
                  Registration Fee <span className="text-red-500">*</span>
                </Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    id="registrationFee"
                    type="number"
                    step="0.01"
                    min="0"
                    {...register('registrationFee', {
                      required: 'Registration fee is required',
                      min: { value: 0, message: 'Must be positive' },
                    })}
                    className="pl-7"
                    placeholder="75.00"
                  />
                </div>
                {errors.registrationFee && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.registrationFee.message}
                  </p>
                )}
                <p className="text-sm text-gray-600 mt-1">One-time fee per family</p>
              </div>

              <div>
                <Label htmlFor="materialsFee">
                  Materials Fee <span className="text-red-500">*</span>
                </Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    id="materialsFee"
                    type="number"
                    step="0.01"
                    min="0"
                    {...register('materialsFee', {
                      required: 'Materials fee is required',
                      min: { value: 0, message: 'Must be positive' },
                    })}
                    className="pl-7"
                    placeholder="25.00"
                  />
                </div>
                {errors.materialsFee && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.materialsFee.message}
                  </p>
                )}
                <p className="text-sm text-gray-600 mt-1">Per student</p>
              </div>
            </div>

            {/* Base Monthly Tuition */}
            <div>
              <Label htmlFor="baseMonthlyTuition">
                Base Monthly Tuition <span className="text-red-500">*</span>
              </Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <Input
                  id="baseMonthlyTuition"
                  type="number"
                  step="0.01"
                  min="0"
                  {...register('baseMonthlyTuition', {
                    required: 'Base tuition is required',
                    min: { value: 0, message: 'Must be positive' },
                  })}
                  className="pl-7"
                  placeholder="450.00"
                />
              </div>
              {errors.baseMonthlyTuition && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.baseMonthlyTuition.message}
                </p>
              )}
              <p className="text-sm text-gray-600 mt-1">
                Default monthly tuition per student
              </p>
            </div>

            {/* Early Bird Settings */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Early Bird Discount
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="earlyBirdDeadline">Deadline Date</Label>
                  <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      id="earlyBirdDeadline"
                      type="date"
                      {...register('earlyBirdDeadline')}
                      className="pl-10"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Register before this date to receive discount
                  </p>
                </div>

                <div>
                  <Label htmlFor="earlyBirdDiscount">Discount Percentage</Label>
                  <div className="relative mt-1">
                    <Input
                      id="earlyBirdDiscount"
                      type="number"
                      step="1"
                      min="0"
                      max="100"
                      {...register('earlyBirdDiscount', {
                        min: { value: 0, message: 'Must be 0-100' },
                        max: { value: 100, message: 'Must be 0-100' },
                      })}
                      placeholder="15"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                      %
                    </span>
                  </div>
                  {errors.earlyBirdDiscount && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.earlyBirdDiscount.message}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mt-1">Percentage off tuition</p>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#326389] hover:bg-[#326389]/90"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Settings'
                )}
              </Button>
            </div>
          </form>
        </Card>

        {/* Card 2: Discount Engine */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Discount Engine</h2>

          {/* Sibling Discount Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
            <div className="flex-1">
              <Label htmlFor="sibling-discount" className="text-base font-semibold">
                Automatic Sibling Discount (10%)
              </Label>
              <p className="text-sm text-gray-600 mt-1">
                Apply 10% discount when 2+ students enroll
              </p>
            </div>
            <Switch
              id="sibling-discount"
              checked={siblingDiscountEnabled}
              onCheckedChange={setSiblingDiscountEnabled}
            />
          </div>

          {/* Active Promo Codes */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Active Promo Codes
              </h3>
              <Button
                onClick={() => setShowCreatePromo(true)}
                variant="outline"
                size="sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Promo Code
              </Button>
            </div>

            {promoCodes.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Plus className="w-6 h-6 text-gray-400" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  No active promo codes
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Create your first promo code to offer discounts
                </p>
                <Button
                  onClick={() => setShowCreatePromo(true)}
                  variant="outline"
                  size="sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Promo Code
                </Button>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Code
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Discount Amount
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Expiry Date
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {promoCodes.map((promo) => (
                      <tr key={promo.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          <code className="px-2 py-1 bg-gray-100 rounded text-[#326389]">
                            {promo.code}
                          </code>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          ${promo.discountAmount}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {formatDate(promo.expiryDate)}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => setDeletePromoId(promo.id)}
                            className="inline-flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Create Promo Modal */}
      <CreatePromoModal
        open={showCreatePromo}
        onClose={() => setShowCreatePromo(false)}
        onPromoCreated={(promo) => {
          setPromoCodes((prev) => [...prev, promo]);
        }}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deletePromoId} onOpenChange={() => setDeletePromoId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Promo Code</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this promo code? This action cannot be
              undone and students will no longer be able to use this code.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletePromoId && handleDeletePromo(deletePromoId)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
