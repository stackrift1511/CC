import { motion, useReducedMotion } from "framer-motion";
import { viewportOnce } from "../motion";

const ease = [0.22, 1, 0.36, 1];

function BlurFade({
  children,
  className,
  as: Tag = motion.div,
  delay = 0,
  duration = 0.65,
  y = 28,
  inView = true,
}) {
  const prefersReducedMotion = useReducedMotion();
  const Component = Tag;

  const props = prefersReducedMotion
    ? { className }
    : {
        className,
        initial: { opacity: 0, y, filter: "blur(8px)" },
        ...(inView
          ? {
              whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
              viewport: viewportOnce,
            }
          : {
              animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            }),
        transition: { duration, delay, ease },
      };

  return <Component {...props}>{children}</Component>;
}

export default BlurFade;
