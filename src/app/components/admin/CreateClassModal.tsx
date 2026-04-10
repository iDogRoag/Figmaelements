import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface CreateClassFormData {
  title: string;
  location: string;
  teacher: string;
  grade: string;
  proficiency: 'speaker' | 'non-speaker';
  days: string[];
  startTime: string;
  endTime: string;
  capacity: number;
}

interface CreateClassModalProps {
  open: boolean;
  onClose: () => void;
}

const MOCK_TEACHERS = ['Morah Maya', 'Moreh Yael', 'Morah Dana', 'Moreh David'];
const GRADES = ['1', '2', '3', '4', '5', '6'];
const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Sunday',
];

export function CreateClassModal({ open, onClose }: CreateClassModalProps) {
  const [loading, setLoading] = useState(false);
  const [proficiency, setProficiency] = useState<'speaker' | 'non-speaker'>('non-speaker');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    control,
  } = useForm<CreateClassFormData>({
    defaultValues: {
      title: '',
      teacher: '',
      grade: '',
      location: '',
      startTime: '',
      endTime: '',
      capacity: undefined,
    },
  });

  const startTime = watch('startTime');
  const endTime = watch('endTime');

  // Validate end time is after start time
  const isTimeValid = !startTime || !endTime || endTime > startTime;

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const onSubmit = async (data: CreateClassFormData) => {
    if (selectedDays.length === 0) {
      toast.error('Please select at least one day');
      return;
    }

    if (!isTimeValid) {
      toast.error('End time must be after start time');
      return;
    }

    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Class saved successfully!');
    setLoading(false);
    reset({
      title: '',
      teacher: '',
      grade: '',
      location: '',
      startTime: '',
      endTime: '',
      capacity: undefined,
    });
    setProficiency('non-speaker');
    setSelectedDays([]);
    onClose();
  };

  const handleClose = () => {
    if (!loading) {
      reset({
        title: '',
        teacher: '',
        grade: '',
        location: '',
        startTime: '',
        endTime: '',
        capacity: undefined,
      });
      setProficiency('non-speaker');
      setSelectedDays([]);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create New Class</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new class for the program.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          {/* Class Title */}
          <div>
            <Label htmlFor="title">
              Class Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              {...register('title', { required: 'Class title is required' })}
              placeholder="e.g., Hebrew for Beginners"
              className="mt-1"
            />
            {errors.title && (
              <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Teacher Name */}
          <div>
            <Label htmlFor="teacher">
              Teacher Name <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="teacher"
              control={control}
              rules={{ required: 'Teacher is required' }}
              render={({ field }) => (
                <Select value={field.value || ''} onValueChange={field.onChange}>
                  <SelectTrigger id="teacher" className="mt-1">
                    <SelectValue placeholder="Select a teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    {MOCK_TEACHERS.map((teacher) => (
                      <SelectItem key={teacher} value={teacher}>
                        {teacher}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.teacher && (
              <p className="text-sm text-red-600 mt-1">{errors.teacher.message}</p>
            )}
          </div>

          {/* Grade Level */}
          <div>
            <Label htmlFor="grade">
              Grade Level <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="grade"
              control={control}
              rules={{ required: 'Grade is required' }}
              render={({ field }) => (
                <Select value={field.value || ''} onValueChange={field.onChange}>
                  <SelectTrigger id="grade" className="mt-1">
                    <SelectValue placeholder="Select grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    {GRADES.map((grade) => (
                      <SelectItem key={grade} value={grade}>
                        Grade {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.grade && (
              <p className="text-sm text-red-600 mt-1">{errors.grade.message}</p>
            )}
          </div>

          {/* Proficiency */}
          <div>
            <Label>
              Proficiency Level <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-3 mt-2">
              <button
                type="button"
                onClick={() => setProficiency('speaker')}
                className={`
                  flex-1 py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all
                  ${
                    proficiency === 'speaker'
                      ? 'border-[#326389] bg-[#326389]/5 text-[#326389]'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                Hebrew Speaker
              </button>
              <button
                type="button"
                onClick={() => setProficiency('non-speaker')}
                className={`
                  flex-1 py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all
                  ${
                    proficiency === 'non-speaker'
                      ? 'border-[#326389] bg-[#326389]/5 text-[#326389]'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                Non-Hebrew Speaker
              </button>
            </div>
          </div>

          {/* Days of Week */}
          <div>
            <Label>
              Schedule (Days) <span className="text-red-500">*</span>
            </Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {DAYS_OF_WEEK.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  className={`
                    px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all
                    ${
                      selectedDays.includes(day)
                        ? 'border-[#326389] bg-[#326389] text-white'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {day.substring(0, 3)}
                </button>
              ))}
            </div>
          </div>

          {/* Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startTime">
                Start Time <span className="text-red-500">*</span>
              </Label>
              <Input
                id="startTime"
                type="time"
                {...register('startTime', { required: 'Start time is required' })}
                className="mt-1"
              />
              {errors.startTime && (
                <p className="text-sm text-red-600 mt-1">{errors.startTime.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="endTime">
                End Time <span className="text-red-500">*</span>
              </Label>
              <Input
                id="endTime"
                type="time"
                {...register('endTime', { required: 'End time is required' })}
                className="mt-1"
              />
              {errors.endTime && (
                <p className="text-sm text-red-600 mt-1">{errors.endTime.message}</p>
              )}
              {!isTimeValid && (
                <p className="text-sm text-red-600 mt-1">
                  End time must be after start time
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location">
              Location <span className="text-red-500">*</span>
            </Label>
            <Input
              id="location"
              {...register('location', { required: 'Location is required' })}
              placeholder="e.g., Main Campus - Room 101"
              className="mt-1"
            />
            {errors.location && (
              <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>
            )}
          </div>

          {/* Max Capacity */}
          <div>
            <Label htmlFor="capacity">
              Max Capacity <span className="text-red-500">*</span>
            </Label>
            <Input
              id="capacity"
              type="number"
              min="1"
              {...register('capacity', {
                required: 'Capacity is required',
                valueAsNumber: true,
                min: { value: 1, message: 'Capacity must be at least 1' },
              })}
              placeholder="e.g., 15"
              className="mt-1"
            />
            {errors.capacity && (
              <p className="text-sm text-red-600 mt-1">{errors.capacity.message}</p>
            )}
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
                  Saving...
                </>
              ) : (
                'Save Class'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
