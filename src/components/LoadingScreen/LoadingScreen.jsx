import { motion } from "framer-motion";
import logoMark from "../../assets/icons/logo-mark.svg";
import styles from "./LoadingScreen.module.css";

function LoadingScreen() {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <motion.div
          className={styles.logoWrap}
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img className={styles.logo} src={logoMark} alt="Crunch Chaos Logo" />
        </motion.div>

        <h1 className={styles.brand}>
          <span className={styles.crunch}>CRUNCH</span>
          <span className={styles.chaos}>CHAOS</span>
        </h1>

        <motion.p
          className={styles.tagline}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Preparing the crunch...
        </motion.p>
      </div>
    </div>
  );
}

export default LoadingScreen;
