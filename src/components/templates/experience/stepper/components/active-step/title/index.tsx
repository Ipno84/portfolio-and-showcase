import { useEffect } from "react";
import type { Step } from "../../../../state/typings";
import { easings, useSpring, animated } from "@react-spring/web";

const AnimatedHeading = animated("h4");

const duration = 100;

const Title: React.FC<Pick<Step, "company" | "role">> = ({ company, role }) => {
  const [headingStyles, headingApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(30px)",
    config: { duration: 200, easing: easings.easeInOutCirc },
  }));

  useEffect(() => {
    headingApi.set({ opacity: 0, transform: "translateX(30px)" });

    headingApi.start({
      opacity: 1,
      transform: "translateX(0)",
      delay: duration,
    });
  }, [company, role, headingApi]);

  return (
    <AnimatedHeading style={headingStyles} className="active__step_title">
      {role} <span>@ {company}</span>
    </AnimatedHeading>
  );
};

export default Title;
