import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface CreatePromoFormData {
  code: string;
  discountAmount: number;
  expiryDate: string;
}

interface CreatePromoModalProps {
  open: boolean;
  onClose: () => void;
  onPromoCreated: (promo: {
    id: string;
    code: string;
    discountAmount: number;
    expiryDate: string;
  }) => void;
}

export function CreatePromoModal({ open, onClose, onPromoCreated }: CreatePromoModalProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePromoFormData>();

  const onSubmit = async (data: CreatePromoFormData) => {
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newPromo = {
      id: Math.random().toString(36).substring(7),
      code: data.code.toUpperCase(),
      discountAmount: data.discountAmount,
      expiryDate: data.expiryDate,
    };

    onPromoCreated(newPromo);
    toast.success('Promo code created successfully!');
    setLoading(false);
    reset();
    onClose();
  };

  const handleClose = () => {
    if (!loading) {
      reset();
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create Promo Code</DialogTitle>
          <DialogDescription>
            Create a promotional discount code for students to use during registration.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          {/* Promo Code */}
          <div>
            <Label htmlFor="code">
              Promo Code <span className="text-red-500">*</span>
            </Label>
            <Input
              id="code"
              {...register('code', {
                required: 'Promo code is required',
                pattern: {
                  value: /^[A-Z0-9]+$/i,
                  message: 'Only letters and numbers allowed',
                },
              })}
              placeholder="e.g., SUMMER2024"
              className="mt-1 uppercase"
              maxLength={20}
            />
            {errors.code && (
              <p className="text-sm text-red-600 mt-1">{errors.code.message}</p>
            )}
            <p className="text-sm text-gray-600 mt-1">
              Letters and numbers only, will be converted to uppercase
            </p>
          </div>

          {/* Discount Amount */}
          <div>
            <Label htmlFor="discountAmount">
              Discount Amount <span className="text-red-500">*</span>
            </Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                id="discountAmount"
                type="number"
                step="0.01"
                min="0"
                {...register('discountAmount', {
                  required: 'Discount amount is required',
                  min: { value: 0.01, message: 'Must be greater than $0' },
                })}
                className="pl-7"
                placeholder="50.00"
              />
            </div>
            {errors.discountAmount && (
              <p className="text-sm text-red-600 mt-1">
                {errors.discountAmount.message}
              </p>
            )}
            <p className="text-sm text-gray-600 mt-1">Fixed dollar amount off total</p>
          </div>

          {/* Expiry Date */}
          <div>
            <Label htmlFor="expiryDate">
              Expiry Date <span className="text-red-500">*</span>
            </Label>
            <Input
              id="expiryDate"
              type="date"
              {...register('expiryDate', {
                required: 'Expiry date is required',
                validate: (value) => {
                  const selected = new Date(value);
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return selected >= today || 'Expiry date must be in the future';
                },
              })}
              className="mt-1"
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.expiryDate && (
              <p className="text-sm text-red-600 mt-1">{errors.expiryDate.message}</p>
            )}
            <p className="text-sm text-gray-600 mt-1">
              Code will expire at end of this date
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={handleClose}
              disabled={loading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#326389] hover:bg-[#326389]/90"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Promo Code'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
