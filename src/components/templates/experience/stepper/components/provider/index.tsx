import { useCallback, useState, type PropsWithChildren } from "react";
import StepperContext from "./../../context";
import steps from "./../../../state";

const StepperProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goToNextStep = useCallback(() => {
    setCurrentStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  }, []);

  const goToPreviousStep = useCallback(() => {
    setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToStep = useCallback((index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    }
  }, []);

  return (
    <StepperContext.Provider
      value={{
        steps,
        currentStepIndex,
        goToNextStep,
        goToPreviousStep,
        goToStep,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export default StepperProvider;
