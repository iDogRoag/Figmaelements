import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactSchool() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Contact School</h1>
        <p className="text-gray-600 mt-2">Get in touch with The New Hebrew Program</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="regarding">Regarding Student</Label>
                    <Input id="regarding" placeholder="Select student (optional)" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="min-h-[200px]"
                  />
                </div>

                <Button className="w-full bg-[#326389] hover:bg-[#2a5474]">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#326389]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Phone</p>
                  <p className="text-base text-gray-900">(617) 555-0100</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#326389]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Email</p>
                  <p className="text-base text-gray-900">info@tnhp.org</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#326389]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Address</p>
                  <p className="text-base text-gray-900">
                    123 Hebrew Lane<br />
                    Brookline, MA 02446
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#326389] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#326389]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Office Hours</p>
                  <p className="text-base text-gray-900">
                    Mon-Fri: 9:00 AM - 5:00 PM<br />
                    Sun: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="link" className="p-0 h-auto text-left text-[#326389] hover:text-[#2a5474]">
                  What is your cancellation policy?
                </Button>
                <Button variant="link" className="p-0 h-auto text-left text-[#326389] hover:text-[#2a5474]">
                  How do I update student information?
                </Button>
                <Button variant="link" className="p-0 h-auto text-left text-[#326389] hover:text-[#2a5474]">
                  When are school holidays?
                </Button>
                <Button variant="link" className="p-0 h-auto text-left text-[#326389] hover:text-[#2a5474]">
                  How can I access tax documents?
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
