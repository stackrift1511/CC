import { motion, useReducedMotion } from "framer-motion";

export const easePremium = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export function useFadeUp(distance = 24, duration = 0.65, delay = 0) {
  const prefersReducedMotion = useReducedMotion();
  return getFadeUp(prefersReducedMotion, distance, duration, delay);
}

export function usePageFade(duration = 0.6) {
  const prefersReducedMotion = useReducedMotion();

  return {
    initial: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 20, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration, ease: easePremium },
  };
}

export function useButtonMotion() {
  const prefersReducedMotion = useReducedMotion();

  return {
    whileHover: prefersReducedMotion ? {} : { y: -2 },
    whileTap: prefersReducedMotion ? {} : { scale: 0.98 },
    transition: { duration: 0.2, ease: easePremium },
  };
}

export function useMotionPreference() {
  return useReducedMotion();
}

export function getFadeUp(
  prefersReducedMotion,
  distance = 24,
  duration = 0.65,
  delay = 0
) {
  return {
    initial: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 0, y: distance, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: viewportOnce,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration, delay, ease: easePremium },
  };
}

export function getStaggerChildren(stagger = 0.06, delayChildren = 0.05) {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export function getStaggerItem(distance = 20) {
  return {
    hidden: { opacity: 0, y: distance, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: easePremium },
    },
  };
}

export const MotionSection = motion.section;
export const MotionArticle = motion.article;
