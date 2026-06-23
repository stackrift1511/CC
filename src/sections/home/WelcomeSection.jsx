import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./WelcomeSection.module.css";

function WelcomeSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className={styles.section}>
      <motion.div className={styles.inner} style={{ y, opacity }}>
        <p className={styles.kicker}>Welcome</p>
        <h2 className={styles.title}>Welcome to Crunch Chaos</h2>
        <p className={styles.body}>
          We started with a simple idea: campus snacking deserved better than bland
          chips and broken promises. Every batch is crafted from real potatoes,
          honest spices, and recipes inspired by street-side chaat counters and
          midnight canteen runs across India.
        </p>
        <p className={styles.body}>
          No trans fat. No maida. Just bold flavour for the moments that matter —
          exam panic, road trips, and the stories you&apos;ll still be telling at
          reunions.
        </p>
      </motion.div>
    </section>
  );
}

export default WelcomeSection;
