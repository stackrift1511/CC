import { motion } from "framer-motion";
import logoMark from "../../assets/icons/logo-mark.svg";
import SplitText from "../ui/SplitText";
import styles from "./LoadingScreen.module.css";

function LoadingScreen() {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <motion.div
          className={styles.logoWrap}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <img className={styles.logo} src={logoMark} alt="Crunch Chaos Logo" />
        </motion.div>

        <h1 className={styles.brand}>
          <SplitText
            text="CRUNCH"
            className={styles.crunch}
            mode="chars"
            delay={0.2}
            stagger={0.04}
          />
          <SplitText
            text="CHAOS"
            className={styles.chaos}
            mode="chars"
            delay={0.45}
            stagger={0.04}
          />
        </h1>

        <motion.div
          className={styles.progressTrack}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className={styles.progressBar}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default LoadingScreen;
