import { motion, useReducedMotion } from "framer-motion";

export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export function useFadeUp(distance = 20, duration = 0.6, delay = 0) {
  const prefersReducedMotion = useReducedMotion();

  return getFadeUp(prefersReducedMotion, distance, duration, delay);
}

export function usePageFade(duration = 0.55) {
  const prefersReducedMotion = useReducedMotion();

  return {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration, ease: [0.22, 1, 0.36, 1] },
  };
}

export function useButtonMotion() {
  const prefersReducedMotion = useReducedMotion();

  return {
    whileHover: prefersReducedMotion ? {} : { scale: 1.03 },
    whileTap: prefersReducedMotion ? {} : { scale: 0.97 },
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  };
}

export function useMotionPreference() {
  return useReducedMotion();
}

export function getFadeUp(
  prefersReducedMotion,
  distance = 20,
  duration = 0.6,
  delay = 0
) {
  return {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewportOnce,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration, delay, ease: [0.22, 1, 0.36, 1] },
  };
}

export const MotionSection = motion.section;
export const MotionArticle = motion.article;
