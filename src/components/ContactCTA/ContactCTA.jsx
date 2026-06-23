import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useButtonMotion, useFadeUp } from "../motion";
import styles from "./ContactCTA.module.css";

function ContactCTA() {
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
          <p className={styles.eyebrow}>Until Next Time</p>
          <h2 className={styles.title}>See You Around?</h2>
          <p className={styles.text}>Hopefully with a packet in hand.</p>
        </div>

        <motion.div {...buttonMotion}>
          <Link to="/" className={styles.button}>
            Back To Home
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default ContactCTA;
