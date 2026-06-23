import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroDecor from "../../assets/illustrations/hero-decor.svg";
import cheeseBomb from "../../assets/products/cheese-bomb-masala.svg";
import styles from "./HomeHero.module.css";

function HomeHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const productY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const productRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const hintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div className={styles.backdrop} style={{ y: bgY }}>
        <img className={styles.landscape} src={heroDecor} alt="" />
        <div className={styles.mist} />
      </motion.div>

      <motion.div className={styles.inner} style={{ opacity: smoothOpacity }}>
        <motion.div className={styles.copy} style={{ y: titleY }}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            Healthy, Delicious, Campus-Fuelled Nutrition
          </motion.p>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            <span className={styles.line}>CRUNCH</span>
            <span className={styles.lineAccent}>CHAOS</span>
          </motion.h1>
          <motion.p
            className={styles.lede}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          >
            Real potatoes. Real spice. Zero pretence. The boldest chip on every
            campus bench in India.
          </motion.p>
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            <Link to="/products" className={styles.ctaPrimary}>
              Shop Flavours
            </Link>
            <Link to="/about" className={styles.ctaGhost}>
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.productStage}
          style={{ y: productY, rotate: productRotate }}
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          <div className={styles.productGlow} />
          <img className={styles.product} src={cheeseBomb} alt="Crunch Chaos pack" />
        </motion.div>
      </motion.div>

      <motion.div className={styles.scrollHint} style={{ opacity: hintOpacity }}>
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}

export default HomeHero;
