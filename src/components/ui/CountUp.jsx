import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

function parseValue(raw) {
  const match = String(raw).match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) {
    return { prefix: "", number: null, suffix: raw };
  }
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

function CountUp({ value, className, duration = 1.4 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const { prefix, number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(prefersReducedMotion ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (!isInView || number === null || prefersReducedMotion) {
      setDisplay(value);
      return undefined;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(number * eased);
      setDisplay(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, number, prefix, suffix, value, duration, prefersReducedMotion]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}

export default CountUp;
