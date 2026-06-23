import { motion } from "framer-motion";
import { usePageFade } from "../motion";
import styles from "./ContactHero.module.css";

function ContactHero() {
  const heroMotion = usePageFade(0.6);

  return (
    <motion.section className={styles.hero} {...heroMotion}>
      <p className={styles.eyebrow}>Community & Availability</p>
      <h1 className={styles.title}>Join The Chaos</h1>
      <p className={styles.subtitle}>
        Whether you&apos;re in your hostel room, stuck in a library, or hanging
        out after class, we&apos;re probably closer than you think.
      </p>
    </motion.section>
  );
}

export default ContactHero;
