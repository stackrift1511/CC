import { motion } from "framer-motion";
import { usePageFade } from "../motion";
import styles from "./AboutHero.module.css";

function AboutHero() {
  const heroMotion = usePageFade(0.6);

  return (
    <motion.section className={styles.hero} {...heroMotion}>
      <p className={styles.eyebrow}>The Campus Origin Story</p>
      <h1 className={styles.title}>The Hostel Legend</h1>
      <p className={styles.subtitle}>
        Every good story starts with bad decisions and late-night conversations.
      </p>
    </motion.section>
  );
}

export default AboutHero;
