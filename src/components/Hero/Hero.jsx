import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroDecor from "../../assets/illustrations/hero-decor.svg";
import { useButtonMotion, usePageFade } from "../motion";
import styles from "./Hero.module.css";

function Hero() {
  const heroMotion = usePageFade(0.6);
  const buttonMotion = useButtonMotion();

  return (
    <motion.section className={styles.hero} {...heroMotion}>
      <div className={styles.glowPrimary} aria-hidden="true" />
      <div className={styles.glowSecondary} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <img className={styles.decor} src={heroDecor} alt="" aria-hidden="true" />

      <motion.div
        className={styles.content}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
        }}
      >
        <motion.p
          className={styles.badge}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          India&apos;s Boldest College Snack
        </motion.p>
        <motion.h1
          className={styles.title}
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <span className={styles.crunch}>CRUNCH</span>
          <span className={styles.chaos}>CHAOS</span>
        </motion.h1>
        <motion.p
          className={styles.tagline}
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          Lose Control. Gain Crunch.
        </motion.p>
        <motion.p
          className={styles.subheading}
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          For nights you&apos;ll never forget. From midnight Maggi sessions to
          pre-exam panic, Crunch Chaos belongs in the stories you&apos;ll laugh
          about years later.
        </motion.p>

        <motion.div
          className={styles.actions}
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <motion.div {...buttonMotion}>
            <Link to="/products" className={styles.primaryButton}>
              Explore Flavours
            </Link>
          </motion.div>
          <motion.div {...buttonMotion}>
            <Link to="/contact" className={styles.secondaryButton}>
              Join The Chaos
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
