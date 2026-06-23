import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useButtonMotion, usePageFade } from "../components/motion";
import styles from "./NotFound.module.css";

function NotFound() {
  const heroMotion = usePageFade(0.6);
  const buttonMotion = useButtonMotion();

  useEffect(() => {
    document.title = "404 Page Not Found | Crunch Chaos";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Looks like someone ate this page. Even Chacha gets lost sometimes."
      );
    }
  }, []);

  return (
    <motion.section className={styles.hero} {...heroMotion}>
      <div className={styles.glowPrimary} aria-hidden="true" />
      <div className={styles.glowSecondary} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.badge}>{"\u26A0"} Error 404</p>
        <h1 className={styles.title}>Looks Like Someone Ate This Page.</h1>
        <p className={styles.subtitle}>
          Don&apos;t worry. Even Chacha gets lost sometimes.
        </p>

        <div className={styles.actions}>
          <motion.div {...buttonMotion}>
            <Link to="/" className={styles.primaryButton}>
              Take Me Home
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default NotFound;
