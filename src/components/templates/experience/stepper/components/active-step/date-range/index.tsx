import { useEffect, useMemo } from "react";
import { easings, useSpring, animated } from "@react-spring/web";
import type { Step } from "./../../../../state/typings";

const AnimatedHeading = animated("h5");

const duration = 100;

const DateRange: React.FC<Pick<Step, "start" | "end">> = ({ start, end }) => {
  const stepDatesRange = useMemo(
    () => [start, end].filter(Boolean).join(" - "),
    [start, end]
  );

  const [headingStyles, headingApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(-30px)",
    config: { duration: 200, easing: easings.easeInOutCirc },
  }));

  useEffect(() => {
    headingApi.set({ opacity: 0, transform: "translateX(-30px)" });

    headingApi.start({
      opacity: 1,
      transform: "translateX(0)",
      delay: duration,
    });
  }, [stepDatesRange, headingApi]);

  return (
    <AnimatedHeading style={headingStyles} className="active__step_subtitle">
      {stepDatesRange}
    </AnimatedHeading>
  );
};

export default DateRange;
