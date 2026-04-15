import { CheckCircle, Mail, FileText, UserPlus, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import type { EnrollmentConfirmedEvent } from '../types';
import { formatCurrency } from '../utils/helpers';

interface SuccessScreenProps {
  confirmation: EnrollmentConfirmedEvent;
  onRegisterAnother: () => void;
  onGoToDashboard: () => void;
}

export function SuccessScreen({
  confirmation,
  onRegisterAnother,
  onGoToDashboard,
}: SuccessScreenProps) {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Registration Complete!
          </h1>
          <p className="text-lg text-gray-600">
            Your enrollment has been successfully processed
          </p>
        </div>

        {/* Email Confirmation Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
          <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <p className="font-semibold">Confirmation email sent</p>
            <p className="mt-1">
              A detailed receipt and enrollment information has been sent to your email address.
            </p>
          </div>
        </div>

        {/* Enrollment Summary Card */}
        <Card className="p-6 mb-6">
          <div className="flex items-start gap-3 mb-6">
            <FileText className="w-6 h-6 text-[#326389] shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Enrollment & Receipt Summary
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Confirmation #{confirmation.confirmationNumber}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Students Enrolled */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Students Enrolled</p>
              <div className="space-y-1">
                {confirmation.studentNames.map((name, index) => (
                  <p key={index} className="text-gray-900">{name}</p>
                ))}
              </div>
            </div>

            {/* Classes */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-2">Classes</p>
              <div className="space-y-1">
                {confirmation.classNames.map((className, index) => (
                  <p key={index} className="text-gray-900">{className}</p>
                ))}
              </div>
            </div>

            {/* Payment Details */}
            <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Transaction ID</p>
                <p className="text-gray-900 font-medium">{confirmation.transactionId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Payment Method</p>
                <p className="text-gray-900 font-medium">{confirmation.paymentMethod}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="text-gray-900 font-medium">
                  {new Date(confirmation.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Paid</p>
                <p className="text-gray-900 font-bold text-lg">
                  {formatCurrency(confirmation.totalPaid)}
                </p>
              </div>
            </div>

            {/* Receipt Link */}
            {confirmation.receiptURL && (
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={confirmation.receiptURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#326389] hover:underline font-medium inline-flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Download Receipt (PDF)
                </a>
              </div>
            )}
          </div>
        </Card>

        {/* Next Steps */}
        <Card className="p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#326389] text-white flex items-center justify-center shrink-0 text-sm font-semibold">
                1
              </div>
              <p>
                Check your email for a detailed confirmation with class schedules and first-day instructions.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#326389] text-white flex items-center justify-center shrink-0 text-sm font-semibold">
                2
              </div>
              <p>
                Add class dates to your calendar to ensure you don't miss any sessions.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#326389] text-white flex items-center justify-center shrink-0 text-sm font-semibold">
                3
              </div>
              <p>
                Visit your family dashboard to view enrollment details, update student information, and manage payments.
              </p>
            </li>
          </ul>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="outline"
            onClick={onRegisterAnother}
            className="flex-1 h-12"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Register Another Child
          </Button>
          <Button
            onClick={onGoToDashboard}
            className="flex-1 h-12 bg-[#326389] hover:bg-[#326389]/90"
          >
            <Home className="w-4 h-4 mr-2" />
            Go to Family Dashboard
          </Button>
        </div>

        {/* Support Info */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Questions? Contact us at{' '}
          <a href="mailto:support@newhebrewprogram.org" className="text-[#326389] hover:underline">
            support@newhebrewprogram.org
          </a>
        </p>
      </div>
    </div>
  );
}
