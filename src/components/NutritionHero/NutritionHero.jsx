import { motion } from "framer-motion";
import { usePageFade } from "../motion";
import leafIcon from "../../assets/icons/leaf.svg";
import styles from "./NutritionHero.module.css";

function NutritionHero() {
  const heroMotion = usePageFade(0.6);

  return (
    <motion.section className={styles.hero} {...heroMotion}>
      <img className={styles.heroIcon} src={leafIcon} alt="" aria-hidden="true" />
      <p className={styles.eyebrow}>Crunch Clarity</p>
      <h1 className={styles.title}>What&apos;s Inside?</h1>
      <p className={styles.subtitle}>
        Nobody buys chips for protein. But everyone deserves to know what&apos;s
        inside every crunch.
      </p>
    </motion.section>
  );
}

export default NutritionHero;
