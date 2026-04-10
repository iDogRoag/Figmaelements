import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { UserPlus } from 'lucide-react';

export function RegisterSibling() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Register a New Sibling</h1>
        <p className="text-gray-600 mt-2">Add another child to your family account</p>
      </div>

      <Card>
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-[#326389] bg-opacity-10 flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-[#326389]" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Start New Registration</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Click below to begin the registration process for a new student. You'll automatically receive a 10% sibling discount!
          </p>
          <Button className="bg-[#326389] hover:bg-[#2a5474]">
            Begin Registration Process
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sibling Discount</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800">
              <strong>Great news!</strong> When you enroll 2 or more students, you'll automatically receive a 10% discount on total tuition costs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
