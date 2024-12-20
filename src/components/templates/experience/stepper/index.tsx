import React from "react";
import StepperProvider from "./components/provider";
import StepsList from "./components/steps-list";
import ActiveStep from "./components/active-step";
import ErrorBoundary from "../../../utils/error-boundary";
import "./style.scss";

const Stepper: React.FC = () => {
  return (
    <ErrorBoundary>
      <StepperProvider>
        <div className="stepper__container">
          <div className="stepper__container_left">
            <StepsList />
          </div>
          <div className="stepper__container_right">
            <ActiveStep />
          </div>
        </div>
      </StepperProvider>
    </ErrorBoundary>
  );
};

export default Stepper;
