import { Check } from 'lucide-react';
import type { Stage } from '../types';

interface ProgressTrackerProps {
  currentStage: Stage;
  onStageClick?: (stage: number) => void;
  completedStages?: number[];
}

const steps = [
  { id: 1, label: 'Student Info' },
  { id: 2, label: 'Class Selection' },
  { id: 3, label: 'Waivers' },
  { id: 4, label: 'Payment' },
];

export function ProgressTracker({ currentStage, onStageClick, completedStages = [] }: ProgressTrackerProps) {
  if (currentStage === 0 || currentStage === 'success') return null;

  // Map stage '1b' to display as step 1 in the progress tracker
  const currentStep = currentStage === '1b' ? 1 : (currentStage as number);

  const canNavigateToStep = (stepId: number) => {
    // Can navigate to current step or any completed step
    return stepId === currentStep || completedStages.includes(stepId);
  };

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav aria-label="Progress">
          <ol className="flex items-center justify-between">
            {steps.map((step, index) => {
              const isComplete = step.id < currentStep;
              const isCurrent = step.id === currentStep;
              const isUpcoming = step.id > currentStep;

              const isClickable = canNavigateToStep(step.id);

              return (
                <li key={step.id} className="flex-1 relative">
                  <div className="flex items-center">
                    {/* Step indicator */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => isClickable && onStageClick?.(step.id)}
                        disabled={!isClickable}
                        title={isClickable ? `Go to ${step.label}` : step.label}
                        className={`
                          w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
                          ${isComplete ? 'bg-[#326389] text-white hover:bg-[#326389]/80' : ''}
                          ${isCurrent ? 'bg-[#326389] text-white ring-4 ring-[#326389]/20' : ''}
                          ${isUpcoming ? 'bg-gray-200 text-gray-500' : ''}
                          ${isClickable && !isCurrent ? 'cursor-pointer hover:scale-110 hover:shadow-md' : ''}
                          ${!isClickable ? 'cursor-not-allowed' : ''}
                        `}
                        aria-current={isCurrent ? 'step' : undefined}
                        aria-label={`Go to ${step.label}`}
                      >
                        {isComplete ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-semibold">{step.id}</span>
                        )}
                      </button>
                      <span
                        className={`
                          mt-2 text-xs font-medium whitespace-nowrap
                          ${isCurrent ? 'text-[#326389]' : ''}
                          ${isComplete ? 'text-gray-700' : ''}
                          ${isUpcoming ? 'text-gray-400' : ''}
                        `}
                      >
                        {step.label}
                      </span>
                    </div>

                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div
                        className={`
                          flex-1 h-0.5 mx-4 transition-all duration-200
                          ${isComplete ? 'bg-[#326389]' : 'bg-gray-200'}
                        `}
                      />
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
