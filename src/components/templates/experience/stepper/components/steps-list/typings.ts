import type { PropsWithChildren } from "react";

interface StepItemProps extends PropsWithChildren {
  index: number;
  title?: string
}

export type { StepItemProps };
