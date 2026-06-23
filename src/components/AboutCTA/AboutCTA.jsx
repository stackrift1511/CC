import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useButtonMotion, useFadeUp } from "../motion";
import styles from "./AboutCTA.module.css";

function AboutCTA() {
  const buttonMotion = useButtonMotion();

  return (
    <motion.section className={styles.section} {...useFadeUp()}>
      <motion.div
        className={styles.banner}
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1.01 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.content}>
          <p className={styles.eyebrow}>Still Here?</p>
          <h2 className={styles.title}>Still With Us?</h2>
          <p className={styles.text}>Good. We&apos;d hate to eat alone.</p>
        </div>

        <motion.div {...buttonMotion}>
          <Link to="/contact" className={styles.button}>
            Join The Chaos
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AboutCTA;
