import { motion } from "framer-motion";
import { usePageFade } from "../motion";
import styles from "./ProductHero.module.css";

function ProductHero() {
  const heroMotion = usePageFade(0.6);

  return (
    <motion.section className={styles.hero} {...heroMotion}>
      <p className={styles.eyebrow}>Snack Moodboard</p>
      <h1 className={styles.title}>Pick Your Vibe</h1>
      <p className={styles.subtitle}>Four flavours. Zero regrets.</p>
      <p className={styles.description}>
        Whether you&apos;re pulling an all-nighter, watching movies, or
        pretending you&apos;ll start studying tomorrow, there&apos;s a flavour
        for every mood.
      </p>
    </motion.section>
  );
}

export default ProductHero;
