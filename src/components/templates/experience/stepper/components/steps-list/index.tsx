import { useStepper } from "../../hooks/use-stepper";
import StepItem from "./item";
import Indicator from "./indicator";
import "./style.scss";

const StepsList: React.FC = () => {
  const { steps } = useStepper();

  if (steps.length === 0) return null;

  return (
    <div className="stepper__list_container">
      <Indicator />
      <ul className="stepper__list">
        {steps.map(({ company }, index) => {
          return (
            <StepItem key={company} index={index} title={company}>
              {company}
            </StepItem>
          );
        })}
      </ul>
    </div>
  );
};

export default StepsList;
