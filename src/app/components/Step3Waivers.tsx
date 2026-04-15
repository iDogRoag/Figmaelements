import { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { FileText, RotateCcw, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import type { Student } from '../types';

interface Step3WaiversProps {
  students: Student[];
  onWaiversSigned: (data: {
    medicalNotes: string;
    signatures: {
      codeOfConduct: { dataURL: string; fullName: string };
      cancellation: { dataURL: string; fullName: string };
      photoRelease: { dataURL: string; fullName: string };
    };
  }) => void;
  onContinue: () => void;
  onBack: () => void;
}

const waiverTexts = {
  codeOfConduct: `The New Hebrew Program Code of Conduct

The New Hebrew Program is a center for the teaching of the Hebrew language and Jewish education in the spirit of Israeli culture.

The New Hebrew Program is committed to providing a safe, caring, and inclusive learning and working environment by promoting respect, responsible citizenship and academic success. A positive school climate exists when all members of the center feel safe, comfortable, and accepted.

The Standards of Behavior outlined apply to all members of the center, including students, parents and guardians, school staff, volunteers, and visitors when:
• on school property;
• participating in extra-curricular activities;
• participating in off-site school-sponsored activities;
• or engaging in an activity that will have an impact on the school climate.


A) Standards of Behavior
All members of the school community are expected to:
• respect and comply with federal, provincial, and municipal laws;
• demonstrate honesty and integrity;
• respect the rights of others and treat one another with dignity and respect at all times, regardless of economic status, race, color, national or ethnic origin, language group, religion, gender, sexual orientation, gender identity, age, or ability;
• show proper care and regard for school property and the property of others;
• take appropriate measures to help those in need;
• demonstrate the best effort during all school-based activities.


B) Inappropriate behaviors
In abiding by The New Hebrew Program's Standards of behavior, all members of the school community are expected to refrain from:
• breaking federal, provincial, or municipal laws;
• any behavior that discriminates based on economic status, race, color, national or ethnic origin, language group, religion, gender, sexual orientation, gender identity, age, or ability, such as racial, homophobic, or transphobic comments;
• any violent or bullying behavior (physical, verbal, social, electronic) that intentionally hurts (physically, socially, or emotionally) another person;
• any inappropriate use of language;
• making derogatory or hateful comments toward an individual or group of people;
• threatening an individual or group of people;
• threatening to damage or destroy property;
• injuring an individual, group of people, or property;
• using technology to intentionally abuse or bully another person;
• using technology to interfere with the positive climate of the school;
• using language that is violent, profane, or discriminatory;
• wearing clothes that depict violence, profanity, or discrimination.


C) Proactive Strategies
Expected behaviors as identified in The New Hebrew Program's Standards of behavior will be encouraged and supported through the school-wide practices listed below.
• behavioral expectations are discussed with all members of the school community during scheduled meetings.
• Standards of behavior for students are reviewed, practiced and discussed on a regularly scheduled basis and as needed.
• Standards of behavior are applied consistently by all staff.
• Students are presented with a choice of behaviors and related consequences to enable them to make an informed choice before acting.
• Appropriate behaviors are modelled by school staff.
• Appropriate student behaviors are acknowledged by staff.
• Teachers contact parents/guardians to provide feedback on student behavior and accomplishments.


D) Reactive Strategies
When inappropriate student behaviors occur, the school may employ a range of interventions and supports. These include learning opportunities for reinforcing positive behavior while helping students to make good choices. Consequences are applied within a framework that shifts the focus from one that is strictly punitive to one that is both corrective and supportive.

Appropriate options for school response to Level 1 student behaviors (those behaviors which are responded to by the teacher witnessing the behavior):
• verbal reminders
• model expected behavior
• re-teach the expected behavior
• offer choices and consequences of the choices
• communication to parent/guardian

Appropriate options for school response to Level 2 student behaviors (student behaviors which are referred to the administration) include strategies listed for Level 1 behaviors, plus:
• home contact
• natural consequences
• monitor behaviors
• Mediation
• parent/school conference
• restricted access to facilities/activities
• behavior contract
• out-of-school suspension


E) Our Locations
The general appearance of the school locations is the responsibility of the entire community. Students are expected to clean up after themselves, and leave their classroom clean and organized. Students should not use or play with any materials that are not The New Hebrew Program property. Running in the classroom and in hallways is not permitted.


F) Drop off and Pick Up
Students should arrive to and leave from class on time. Supervision outside of the scheduled class is unavailable. Parents or caregivers must remain with the student until their scheduled class starts. In case someone other than parents will pick up the student, notify The New Hebrew Program in advance.`,

  cancellationPolicy: `The New Hebrew Program Cancellation Policy

Cancellation & Withdrawal Policy

Cancellations by June 30
Full refund of the amount paid, minus a $35 processing fee.

Cancellations during July
Refund of the amount paid, minus a $35 processing fee and an $80 non-refundable materials fee.

Cancellations after August 1
No refunds will be provided. All fees paid are non-refundable, including registration fees, materials fees, and tuition payments.

Monthly Tuition
Monthly tuition payments are due on the 6th of each month. Late payments may result in removal from the program. The pre-paid last month tuition will be applied to your final month of enrollment.

Withdrawal Policy
If you need to withdraw your child from the program, you must provide written notice at least 14 days before the start of the next month to avoid being charged for that month's tuition.`,

  photoRelease: `Photo Release

I grant The New Hebrew Program permission to use photographs, videos, or other media featuring my child for promotional, educational, and marketing purposes.

This may include use on the website, social media, printed materials, and other promotional channels.

I understand that my child's name may be used alongside their image. I waive any rights to compensation or approval of the finished product.

If you do not wish your child to be photographed, please contact us separately to opt out.`,
};

export function Step3Waivers({ students, onWaiversSigned, onContinue, onBack }: Step3WaiversProps) {
  const [medicalNotes, setMedicalNotes] = useState('');
  const [fullNameCodeOfConduct, setFullNameCodeOfConduct] = useState('');
  const [fullNameCancellation, setFullNameCancellation] = useState('');
  const [fullNamePhotoRelease, setFullNamePhotoRelease] = useState('');
  const [agreedCodeOfConduct, setAgreedCodeOfConduct] = useState(false);
  const [agreedCancellation, setAgreedCancellation] = useState(false);
  const [agreedPhotoRelease, setAgreedPhotoRelease] = useState(false);

  const [hasCodeOfConductSig, setHasCodeOfConductSig] = useState(false);
  const [hasCancellationSig, setHasCancellationSig] = useState(false);
  const [hasPhotoReleaseSig, setHasPhotoReleaseSig] = useState(false);

  const codeOfConductSigRef = useRef<SignatureCanvas>(null);
  const cancellationSigRef = useRef<SignatureCanvas>(null);
  const photoReleaseSigRef = useRef<SignatureCanvas>(null);

  const isFormComplete = () => {
    return (
      agreedCodeOfConduct &&
      agreedCancellation &&
      agreedPhotoRelease &&
      fullNameCodeOfConduct.trim() &&
      fullNameCancellation.trim() &&
      fullNamePhotoRelease.trim() &&
      hasCodeOfConductSig &&
      hasCancellationSig &&
      hasPhotoReleaseSig
    );
  };

  const handleSubmit = () => {
    if (!isFormComplete()) return;

    const signatures = {
      codeOfConduct: {
        dataURL: codeOfConductSigRef.current!.toDataURL(),
        fullName: fullNameCodeOfConduct,
      },
      cancellation: {
        dataURL: cancellationSigRef.current!.toDataURL(),
        fullName: fullNameCancellation,
      },
      photoRelease: {
        dataURL: photoReleaseSigRef.current!.toDataURL(),
        fullName: fullNamePhotoRelease,
      },
    };

    onWaiversSigned({ medicalNotes, signatures });
    onContinue();
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Class Selection</span>
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Waivers & Policies</h2>
          <p className="mt-2 text-gray-600">
            Please review and sign all required documents
          </p>
        </div>

        {/* Medical Notes */}
        {students.length > 1 && (
          <Card className="p-6 mb-6">
            <Label htmlFor="medicalNotes" className="text-base font-semibold">
              Medical Notes (Optional)
            </Label>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              If you have multiple children enrolled, please specify which child each note applies to.
            </p>
            <Textarea
              id="medicalNotes"
              value={medicalNotes}
              onChange={(e) => setMedicalNotes(e.target.value)}
              placeholder="Example: Sarah has a peanut allergy. David uses an inhaler for asthma."
              className="min-h-24"
            />
          </Card>
        )}

        {!students.length && (
          <Card className="p-6 mb-6">
            <Label htmlFor="medicalNotes" className="text-base font-semibold">
              Medical Notes (Optional)
            </Label>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              Please share any allergies, medical conditions, or special needs we should be aware of.
            </p>
            <Textarea
              id="medicalNotes"
              value={medicalNotes}
              onChange={(e) => setMedicalNotes(e.target.value)}
              placeholder="Example: Peanut allergy, uses inhaler for asthma"
              className="min-h-24"
            />
          </Card>
        )}

        {/* Code of Conduct Waiver */}
        <Card className="p-6 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <FileText className="w-6 h-6 text-[#326389] shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                The New Hebrew Program Code of Conduct
              </h3>
              <p className="text-sm text-gray-600 mt-1">Required for all participants</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg max-h-64 overflow-y-auto mb-4 text-sm text-gray-700 whitespace-pre-line">
            {waiverTexts.codeOfConduct}
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="fullNameCodeOfConduct">Full Legal Name *</Label>
              <Input
                id="fullNameCodeOfConduct"
                type="text"
                value={fullNameCodeOfConduct}
                onChange={(e) => setFullNameCodeOfConduct(e.target.value)}
                placeholder="Your full name"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label className="mb-2 block">Signature *</Label>
              <div className="border-2 border-gray-300 rounded-lg bg-white">
                <SignatureCanvas
                  ref={codeOfConductSigRef}
                  onEnd={() => setHasCodeOfConductSig(true)}
                  canvasProps={{
                    className: 'w-full h-32 rounded-lg',
                  }}
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="mt-2"
                onClick={() => { codeOfConductSigRef.current?.clear(); setHasCodeOfConductSig(false); }}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear Signature
              </Button>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="agreeCodeOfConduct"
                checked={agreedCodeOfConduct}
                onCheckedChange={(checked) => setAgreedCodeOfConduct(checked === true)}
              />
              <Label
                htmlFor="agreeCodeOfConduct"
                className="text-sm font-normal leading-relaxed cursor-pointer"
              >
                I have read and agree to The New Hebrew Program Code of Conduct
              </Label>
            </div>
          </div>
        </Card>

        {/* Cancellation Policy */}
        <Card className="p-6 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <FileText className="w-6 h-6 text-[#326389] shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                The New Hebrew Program Cancellation Policy
              </h3>
              <p className="text-sm text-gray-600 mt-1">Required for all participants</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg max-h-64 overflow-y-auto mb-4 text-sm text-gray-700 whitespace-pre-line">
            {waiverTexts.cancellationPolicy}
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="fullNameCancellation">Full Legal Name *</Label>
              <Input
                id="fullNameCancellation"
                type="text"
                value={fullNameCancellation}
                onChange={(e) => setFullNameCancellation(e.target.value)}
                placeholder="Your full name"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label className="mb-2 block">Signature *</Label>
              <div className="border-2 border-gray-300 rounded-lg bg-white">
                <SignatureCanvas
                  ref={cancellationSigRef}
                  onEnd={() => setHasCancellationSig(true)}
                  canvasProps={{
                    className: 'w-full h-32 rounded-lg',
                  }}
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="mt-2"
                onClick={() => { cancellationSigRef.current?.clear(); setHasCancellationSig(false); }}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear Signature
              </Button>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="agreeCancellation"
                checked={agreedCancellation}
                onCheckedChange={(checked) => setAgreedCancellation(checked === true)}
              />
              <Label
                htmlFor="agreeCancellation"
                className="text-sm font-normal leading-relaxed cursor-pointer"
              >
                I have read and agree to The New Hebrew Program Cancellation Policy
              </Label>
            </div>
          </div>
        </Card>

        {/* Photo Release */}
        <Card className="p-6 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <FileText className="w-6 h-6 text-[#326389] shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Photo Release
              </h3>
              <p className="text-sm text-gray-600 mt-1">Required for all participants</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg max-h-64 overflow-y-auto mb-4 text-sm text-gray-700 whitespace-pre-line">
            {waiverTexts.photoRelease}
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="fullNamePhotoRelease">Full Legal Name *</Label>
              <Input
                id="fullNamePhotoRelease"
                type="text"
                value={fullNamePhotoRelease}
                onChange={(e) => setFullNamePhotoRelease(e.target.value)}
                placeholder="Your full name"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label className="mb-2 block">Signature *</Label>
              <div className="border-2 border-gray-300 rounded-lg bg-white">
                <SignatureCanvas
                  ref={photoReleaseSigRef}
                  onEnd={() => setHasPhotoReleaseSig(true)}
                  canvasProps={{
                    className: 'w-full h-32 rounded-lg',
                  }}
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="mt-2"
                onClick={() => { photoReleaseSigRef.current?.clear(); setHasPhotoReleaseSig(false); }}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear Signature
              </Button>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="agreePhotoRelease"
                checked={agreedPhotoRelease}
                onCheckedChange={(checked) => setAgreedPhotoRelease(checked === true)}
              />
              <Label
                htmlFor="agreePhotoRelease"
                className="text-sm font-normal leading-relaxed cursor-pointer"
              >
                I have read and agree to the Photo Release
              </Label>
            </div>
          </div>
        </Card>

        {/* Continue Button */}
        <Button
          onClick={handleSubmit}
          disabled={!isFormComplete()}
          className="w-full h-12 bg-[#326389] hover:bg-[#326389]/90 disabled:opacity-50"
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
}