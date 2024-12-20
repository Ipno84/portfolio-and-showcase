import React from "react";
import { useStepper } from "../../hooks/use-stepper";

const Indicator: React.FC = () => {
  const { steps, currentStepIndex } = useStepper();

  const stepsCount = steps.length;
  const stepPercentage = 100 / stepsCount;
  const currentStepPercentage = 100 * currentStepIndex;

  return (
    <span
      style={{
        ["--itemSize" as any]: `${stepPercentage}%`,
        ["--itemStep" as any]: `${currentStepPercentage}%`,
      }}
      className="stepper__indicator"
    />
  );
};

export default Indicator;
