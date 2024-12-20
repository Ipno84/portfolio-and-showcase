import { useEffect } from "react";
import { easings, useSpring, animated } from "@react-spring/web";
import type { TaskProps } from "./typings";

const AnimatedListItem = animated("li");

const duration = 200;

const Task: React.FC<TaskProps> = ({ children, index }) => {
  const [listStyles, listApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(-30px)",
    config: { duration: 200, easing: easings.easeInOutCirc },
  }));

  useEffect(() => {
    listApi.set({ opacity: 0, transform: "translateX(-30px)" });

    listApi.start({
      opacity: 1,
      transform: "translateX(0)",
      delay: (index + 1) * duration,
    });
  }, [children, listApi, index]);

  return (
    <AnimatedListItem style={listStyles} className="active__step_list_item">
      <svg
        className="icon__tick"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#a168e8"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      {children}
    </AnimatedListItem>
  );
};

export default Task;
