import type { Step } from './../state/typings'

interface StepperContextType {
  steps: Step[];
  currentStepIndex: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (index: number) => void;
}

export type { StepperContextType };
