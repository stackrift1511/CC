import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useButtonMotion, useFadeUp } from "../motion";
import styles from "./ProductCTA.module.css";

function ProductCTA() {
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
          <p className={styles.eyebrow}>Need A Tiebreaker?</p>
          <h2 className={styles.title}>Still Can&apos;t Decide?</h2>
          <p className={styles.text}>Honestly, neither can we.</p>
        </div>

        <motion.div {...buttonMotion}>
          <Link to="/nutrition" className={styles.button}>
            See What&apos;s Inside
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default ProductCTA;
