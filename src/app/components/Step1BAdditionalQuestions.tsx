import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import type { Student, AdditionalQuestions } from '../types';

interface Step1BAdditionalQuestionsProps {
  student: Student;
  onQuestionsComplete: (studentId: string, questions: AdditionalQuestions) => void;
  onBack: () => void;
}

// Collapsible section wrapper
function Section({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Card className="overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {open ? (
          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="pt-4 space-y-4">{children}</div>
        </div>
      )}
    </Card>
  );
}

export function Step1BAdditionalQuestions({
  student,
  onQuestionsComplete,
  onBack,
}: Step1BAdditionalQuestionsProps) {
  const [formData, setFormData] = useState<AdditionalQuestions>({
    hebrewName: '',
    previousHebrewEducation: 'none',
    yearsOfHebrewStudy: '',
    hebrewSchoolName: '',
    specialNeeds: '',
    medicalConditions: '',
    allergies: '',
    medications: '',
    dietaryRestrictions: '',
    emergencyContact1Name: '',
    emergencyContact1Phone: '',
    emergencyContact1Relationship: '',
    emergencyContact2Name: '',
    emergencyContact2Phone: '',
    emergencyContact2Relationship: '',
    parentCell: '',
    parentWork: '',
    additionalNotes: '',
    photoPermission: 'yes',
    pickupAuthorization: [],
  });

  const [pickupPerson, setPickupPerson] = useState({ name: '', relationship: '' });

  const update = (field: keyof AdditionalQuestions, value: unknown) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleAddPickupPerson = () => {
    if (pickupPerson.name && pickupPerson.relationship) {
      update('pickupAuthorization', [
        ...(formData.pickupAuthorization || []),
        pickupPerson,
      ]);
      setPickupPerson({ name: '', relationship: '' });
    }
  };

  const handleRemovePickupPerson = (index: number) => {
    update(
      'pickupAuthorization',
      formData.pickupAuthorization?.filter((_, i) => i !== index) || []
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuestionsComplete(student.id, formData);
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
          <span className="text-sm font-medium">Back</span>
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Additional Information</h2>
          <p className="mt-2 text-gray-600">
            For {student.firstName} {student.lastName}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Expand each section to fill in details. Only emergency contact is required.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* ── Hebrew Background — pre-expanded ── */}
          <Section title="Hebrew Background" defaultOpen>
            <div>
              <Label htmlFor="hebrewName">Hebrew Name (if applicable)</Label>
              <Input
                id="hebrewName"
                type="text"
                value={formData.hebrewName}
                onChange={(e) => update('hebrewName', e.target.value)}
                className="mt-1"
                placeholder="e.g., David ben Avraham"
              />
            </div>

            <div>
              <Label htmlFor="previousEducation">Previous Hebrew Education</Label>
              <Select
                value={formData.previousHebrewEducation}
                onValueChange={(v) => update('previousHebrewEducation', v)}
              >
                <SelectTrigger id="previousEducation" className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="home">At Home</SelectItem>
                  <SelectItem value="synagogue">Synagogue/Temple</SelectItem>
                  <SelectItem value="hebrew-school">Hebrew School</SelectItem>
                  <SelectItem value="day-school">Jewish Day School</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.previousHebrewEducation !== 'none' && (
              <>
                <div>
                  <Label htmlFor="yearsOfStudy">Years of Study</Label>
                  <Input
                    id="yearsOfStudy"
                    type="text"
                    value={formData.yearsOfHebrewStudy}
                    onChange={(e) => update('yearsOfHebrewStudy', e.target.value)}
                    className="mt-1"
                    placeholder="e.g., 2 years"
                  />
                </div>
                <div>
                  <Label htmlFor="schoolName">School/Program Name (if applicable)</Label>
                  <Input
                    id="schoolName"
                    type="text"
                    value={formData.hebrewSchoolName}
                    onChange={(e) => update('hebrewSchoolName', e.target.value)}
                    className="mt-1"
                    placeholder="Name of previous school or program"
                  />
                </div>
              </>
            )}
          </Section>

          {/* ── Emergency Contacts — pre-expanded ── */}
          <Section title="Emergency Contacts" defaultOpen>
            {/* Primary — always visible inside open section */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700 text-sm">Primary Emergency Contact *</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ec1Name">Full Name *</Label>
                  <Input
                    id="ec1Name"
                    type="text"
                    value={formData.emergencyContact1Name}
                    onChange={(e) => update('emergencyContact1Name', e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <Label htmlFor="ec1Relationship">Relationship *</Label>
                  <Input
                    id="ec1Relationship"
                    type="text"
                    value={formData.emergencyContact1Relationship}
                    onChange={(e) => update('emergencyContact1Relationship', e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Mother"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="ec1Phone">Phone Number *</Label>
                <Input
                  id="ec1Phone"
                  type="tel"
                  value={formData.emergencyContact1Phone}
                  onChange={(e) => update('emergencyContact1Phone', e.target.value)}
                  required
                  className="mt-1"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Secondary */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h4 className="font-medium text-gray-700 text-sm">Secondary Emergency Contact</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ec2Name">Full Name</Label>
                  <Input
                    id="ec2Name"
                    type="text"
                    value={formData.emergencyContact2Name}
                    onChange={(e) => update('emergencyContact2Name', e.target.value)}
                    className="mt-1"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <Label htmlFor="ec2Relationship">Relationship</Label>
                  <Input
                    id="ec2Relationship"
                    type="text"
                    value={formData.emergencyContact2Relationship}
                    onChange={(e) => update('emergencyContact2Relationship', e.target.value)}
                    className="mt-1"
                    placeholder="Father"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="ec2Phone">Phone Number</Label>
                <Input
                  id="ec2Phone"
                  type="tel"
                  value={formData.emergencyContact2Phone}
                  onChange={(e) => update('emergencyContact2Phone', e.target.value)}
                  className="mt-1"
                  placeholder="(555) 987-6543"
                />
              </div>
            </div>
          </Section>

          {/* ── Medical & Special Needs — collapsed ── */}
          <Section title="Medical & Special Needs">
            <div>
              <Label htmlFor="allergies">Allergies (food, environmental, medications)</Label>
              <Textarea
                id="allergies"
                value={formData.allergies}
                onChange={(e) => update('allergies', e.target.value)}
                className="mt-1"
                placeholder="Please list any allergies..."
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="medications">Current Medications (include dosage if needed during class)</Label>
              <Textarea
                id="medications"
                value={formData.medications}
                onChange={(e) => update('medications', e.target.value)}
                className="mt-1"
                placeholder="Please list any medications..."
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="medicalConditions">Medical Conditions (asthma, diabetes, seizures, etc.)</Label>
              <Textarea
                id="medicalConditions"
                value={formData.medicalConditions}
                onChange={(e) => update('medicalConditions', e.target.value)}
                className="mt-1"
                placeholder="Please list any medical conditions staff should be aware of..."
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="dietaryRestrictions">Dietary Restrictions (kosher, vegetarian, vegan, etc.)</Label>
              <Textarea
                id="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={(e) => update('dietaryRestrictions', e.target.value)}
                className="mt-1"
                placeholder="Please list any dietary restrictions..."
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="specialNeeds">Special Needs or Accommodations (learning, behavioral, physical)</Label>
              <Textarea
                id="specialNeeds"
                value={formData.specialNeeds}
                onChange={(e) => update('specialNeeds', e.target.value)}
                className="mt-1"
                placeholder="Please describe any accommodations needed..."
                rows={3}
              />
            </div>
          </Section>

          {/* ── Additional Parent Contact — collapsed ── */}
          <Section title="Additional Parent/Guardian Contact">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="parentCell">Cell Phone</Label>
                <Input
                  id="parentCell"
                  type="tel"
                  value={formData.parentCell}
                  onChange={(e) => update('parentCell', e.target.value)}
                  className="mt-1"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="parentWork">Work Phone</Label>
                <Input
                  id="parentWork"
                  type="tel"
                  value={formData.parentWork}
                  onChange={(e) => update('parentWork', e.target.value)}
                  className="mt-1"
                  placeholder="(555) 987-6543"
                />
              </div>
            </div>
          </Section>

          {/* ── Authorized Pickup Persons — collapsed ── */}
          <Section title="Authorized Pickup Persons">
            <p className="text-sm text-gray-600 -mt-2">
              List anyone authorized to pick up your child (other than parents/guardians)
            </p>

            {formData.pickupAuthorization && formData.pickupAuthorization.length > 0 && (
              <div className="space-y-2">
                {formData.pickupAuthorization.map((person, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-sm">{person.name}</p>
                      <p className="text-xs text-gray-600">{person.relationship}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemovePickupPerson(index)}
                      className="text-red-600 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pickupName">Name</Label>
                <Input
                  id="pickupName"
                  type="text"
                  value={pickupPerson.name}
                  onChange={(e) => setPickupPerson((p) => ({ ...p, name: e.target.value }))}
                  className="mt-1"
                  placeholder="Grandparent, Aunt, etc."
                />
              </div>
              <div>
                <Label htmlFor="pickupRelationship">Relationship</Label>
                <Input
                  id="pickupRelationship"
                  type="text"
                  value={pickupPerson.relationship}
                  onChange={(e) => setPickupPerson((p) => ({ ...p, relationship: e.target.value }))}
                  className="mt-1"
                  placeholder="Grandmother"
                />
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleAddPickupPerson}
              disabled={!pickupPerson.name || !pickupPerson.relationship}
            >
              Add Person
            </Button>
          </Section>

          {/* ── Photo & Media Permission — collapsed ── */}
          <Section title="Photo & Media Permission">
            <div>
              <Label>
                May we photograph/video your child for promotional materials, social media, or our website?
              </Label>
              <RadioGroup
                value={formData.photoPermission}
                onValueChange={(v) => update('photoPermission', v as 'yes' | 'no')}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="photo-yes" />
                  <Label htmlFor="photo-yes" className="font-normal cursor-pointer">
                    Yes, I grant permission
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="photo-no" />
                  <Label htmlFor="photo-no" className="font-normal cursor-pointer">
                    No, I do not grant permission
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </Section>

          {/* ── Additional Notes — collapsed ── */}
          <Section title="Additional Notes">
            <div>
              <Label htmlFor="additionalNotes">
                Is there anything else we should know about your child?
              </Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => update('additionalNotes', e.target.value)}
                className="mt-1"
                placeholder="Any other information that would help us better support your child's learning experience..."
                rows={4}
              />
            </div>
          </Section>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onBack} className="flex-1">
              Back
            </Button>
            <Button type="submit" className="flex-1 bg-[#326389] hover:bg-[#326389]/90">
              Save & Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
