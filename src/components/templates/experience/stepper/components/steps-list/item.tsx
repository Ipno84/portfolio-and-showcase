import React, { useCallback, useMemo } from "react";
import { useStepper } from "../../hooks/use-stepper";
import type { StepItemProps } from "./typings";

const StepItem: React.FC<StepItemProps> = ({ index, title, children }) => {
  const { currentStepIndex, goToStep } = useStepper();

  const onItemClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (index !== currentStepIndex) {
        goToStep(index);
      }
    },
    [index, currentStepIndex]
  );

  const className = useMemo(() => {
    const classList = ["stepper__list_item"];
    if (index === currentStepIndex) {
      classList.push("stepper__list_item--active");
    }
    return classList.join(" ");
  }, [index, currentStepIndex]);

  return (
    <li className={className}>
      <a href="#" onClick={onItemClick} title={title}>
        {children}
      </a>
    </li>
  );
};

export default StepItem;
