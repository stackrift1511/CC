import { motion } from "framer-motion";
import SplitText from "../ui/SplitText";
import BlurFade from "../ui/BlurFade";
import { usePageFade } from "../motion";
import styles from "./ProductHero.module.css";

function ProductHero() {
  const heroMotion = usePageFade(0.6);

  return (
    <motion.section className={styles.hero} {...heroMotion}>
      <p className={styles.eyebrow}>Snack Moodboard</p>
      <h1 className={styles.title}>
        <SplitText text="Pick Your Vibe" mode="words" delay={0.1} stagger={0.08} />
      </h1>
      <BlurFade delay={0.25}>
        <p className={styles.subtitle}>Four flavours. Zero regrets.</p>
      </BlurFade>
      <BlurFade delay={0.35}>
        <p className={styles.description}>
          Whether you&apos;re pulling an all-nighter, watching movies, or
          pretending you&apos;ll start studying tomorrow, there&apos;s a flavour
          for every mood.
        </p>
      </BlurFade>
    </motion.section>
  );
}

export default ProductHero;
