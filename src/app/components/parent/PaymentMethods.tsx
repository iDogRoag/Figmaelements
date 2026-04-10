import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { CreditCard, CheckCircle2, Plus } from 'lucide-react';

const mockPaymentMethods = [
  {
    id: '1',
    type: 'Visa',
    last4: '4242',
    expiryMonth: '12',
    expiryYear: '2028',
    isDefault: true,
    isAutoPay: true,
  },
  {
    id: '2',
    type: 'Mastercard',
    last4: '5555',
    expiryMonth: '06',
    expiryYear: '2027',
    isDefault: false,
    isAutoPay: false,
  },
];

export function PaymentMethods() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payment Methods</h1>
          <p className="text-gray-600 mt-2">Manage your payment cards and auto-pay settings</p>
        </div>
        <Button className="bg-[#326389] hover:bg-[#2a5474] gap-2">
          <Plus className="w-4 h-4" />
          Add Payment Method
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockPaymentMethods.map((method) => (
          <Card key={method.id} className={method.isDefault ? 'border-2 border-[#326389]' : ''}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-[#326389]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{method.type}</CardTitle>
                    <p className="text-sm text-gray-600">•••• {method.last4}</p>
                  </div>
                </div>
                {method.isDefault && (
                  <Badge className="bg-[#326389] text-white hover:bg-[#326389]">Default</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Expires</p>
                <p className="text-base font-medium text-gray-900">
                  {method.expiryMonth}/{method.expiryYear}
                </p>
              </div>

              {method.isAutoPay && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-800 font-medium">Auto-pay enabled</span>
                </div>
              )}

              <div className="flex gap-2 pt-2 border-t border-gray-200">
                <Button variant="outline" size="sm" className="flex-1">
                  Edit
                </Button>
                {!method.isDefault && (
                  <Button variant="outline" size="sm" className="flex-1">
                    Set as Default
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Auto-Pay Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            Auto-pay automatically charges your default payment method on the scheduled due date each month.
          </p>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Auto-pay Status</p>
              <p className="text-sm text-gray-600">Next payment: May 6, 2026</p>
            </div>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Active
            </Badge>
          </div>
          <Button variant="outline" className="w-full">
            Manage Auto-Pay Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
