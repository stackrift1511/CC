import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useButtonMotion, useFadeUp } from "../motion";
import styles from "./CTASection.module.css";

function CTASection() {
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
          <p className={styles.kicker}>Campus Callout</p>
          <h2 className={styles.title}>Ready To Lose Control?</h2>
          <p className={styles.text}>
            Join thousands of students making ordinary moments slightly
            crunchier.
          </p>
        </div>

        <motion.div {...buttonMotion}>
          <Link to="/contact" className={styles.button}>
            Grab A Packet
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default CTASection;
