import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';

export function SystemSettings() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-600 mt-2">Manage your organization settings and preferences</p>
      </div>

      {/* Organization Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Organization Information</CardTitle>
          <CardDescription>Update your organization's basic information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="org-name">Organization Name</Label>
              <Input id="org-name" defaultValue="The New Hebrew Program" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-email">Primary Email</Label>
              <Input id="org-email" type="email" defaultValue="info@tnhp.org" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-phone">Phone Number</Label>
              <Input id="org-phone" type="tel" defaultValue="(617) 555-0100" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-website">Website</Label>
              <Input id="org-website" type="url" defaultValue="https://tnhp.org" />
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <Label htmlFor="org-address">Address</Label>
            <Input id="org-address" defaultValue="123 Hebrew Lane, Brookline, MA 02446" />
          </div>
          <div className="flex justify-end">
            <Button className="bg-[#326389] hover:bg-[#2a5474]">Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      {/* Registration Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Registration Settings</CardTitle>
          <CardDescription>Configure registration and enrollment preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Allow New Registrations</Label>
              <p className="text-sm text-gray-600">
                Enable or disable new family registrations
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Require Medical Forms</Label>
              <p className="text-sm text-gray-600">
                Require families to complete medical information forms
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-Approve Registrations</Label>
              <p className="text-sm text-gray-600">
                Automatically approve registrations without manual review
              </p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label htmlFor="max-students">Maximum Students Per Class</Label>
            <Input id="max-students" type="number" defaultValue="12" className="max-w-xs" />
          </div>
        </CardContent>
      </Card>

      {/* Payment Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Settings</CardTitle>
          <CardDescription>Configure payment and billing preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable Payment Plans</Label>
              <p className="text-sm text-gray-600">
                Allow families to pay in monthly installments
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Automatic Late Fees</Label>
              <p className="text-sm text-gray-600">
                Automatically apply late fees to overdue payments
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="late-fee">Late Fee Amount</Label>
              <Input id="late-fee" type="number" defaultValue="25" placeholder="$" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grace-period">Grace Period (days)</Label>
              <Input id="grace-period" type="number" defaultValue="5" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Email Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Configure automated email notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Registration Confirmation</Label>
              <p className="text-sm text-gray-600">
                Send confirmation email after registration
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Payment Reminders</Label>
              <p className="text-sm text-gray-600">
                Send reminders 3 days before payment due date
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Class Updates</Label>
              <p className="text-sm text-gray-600">
                Notify families when class information changes
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Data & Privacy */}
      <Card>
        <CardHeader>
          <CardTitle>Data & Privacy</CardTitle>
          <CardDescription>Manage data retention and privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Data Retention Period</Label>
            <p className="text-sm text-gray-600 mb-2">
              How long to retain student and family data after enrollment ends
            </p>
            <Input defaultValue="5 years" className="max-w-xs" />
          </div>
          <Separator />
          <div className="flex gap-3">
            <Button variant="outline">Export All Data</Button>
            <Button variant="outline" className="text-red-600 hover:text-red-700">
              Delete Inactive Accounts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
