import { useMemo } from "react";
import { useStepper } from "../../hooks/use-stepper";
import Task from "./task";
import Title from "./title";
import DateRange from "./date-range";
import "./style.scss";

const ActiveStep: React.FC = () => {
  const { steps, currentStepIndex } = useStepper();

  const step = useMemo(
    () => steps[currentStepIndex],
    [steps, currentStepIndex]
  );

  if (!step) return null;

  return (
    <div className="active__step">
      <Title role={step.role} company={step.company} />
      <DateRange start={step.start} end={step.end} />
      {step.tasks ? (
        <ul className="active__step_list">
          {step.tasks.map((task, index) => (
            <Task key={task} index={index}>
              {task}
            </Task>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ActiveStep;
