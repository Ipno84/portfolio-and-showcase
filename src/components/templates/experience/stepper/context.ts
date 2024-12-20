import { createContext } from "react";
import type { StepperContextType } from "./typings";

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export default StepperContext;
