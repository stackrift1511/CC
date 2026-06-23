import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./PremiumButton.module.css";

function PremiumButton({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  fullWidth = false,
  onClick,
  type = "button",
}) {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
      };

  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();
  const wrapClass = fullWidth ? `${styles.wrap} ${styles.wrapFull}` : styles.wrap;

  if (to) {
    return (
      <motion.div {...motionProps} className={wrapClass}>
        <Link to={to} className={classes}>
          <span className={styles.label}>{children}</span>
          <span className={styles.shine} aria-hidden="true" />
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className={wrapClass}>
        <a href={href} className={classes}>
          <span className={styles.label}>{children}</span>
          <span className={styles.shine} aria-hidden="true" />
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      {...motionProps}
    >
      <span className={styles.label}>{children}</span>
      <span className={styles.shine} aria-hidden="true" />
    </motion.button>
  );
}

export default PremiumButton;
