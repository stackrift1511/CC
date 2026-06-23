import {
  MotionArticle,
  MotionSection,
  getFadeUp,
  useFadeUp,
  useMotionPreference,
} from "../motion";
import GlowCard from "../react-bits/GlowCard";
import styles from "./ComparisonSection.module.css";

function ComparisonSection({ products }) {
  const prefersReducedMotion = useMotionPreference();

  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Quick Comparison</p>
        <h2 className={styles.title}>Find Your Match</h2>
      </div>

      <div className={styles.grid}>
        {products.map((product, index) => (
          <MotionArticle
            key={product.title}
            className={styles.cardWrap}
            {...getFadeUp(prefersReducedMotion, 20, 0.45, index * 0.05)}
          >
            <GlowCard className={styles.glowCard}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <div className={styles.row}>
                  <span className={styles.label}>Spice level</span>
                  <span className={styles.value}>{product.spiceLevel}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.label}>Mood</span>
                  <span className={styles.value}>{product.mood}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.label}>Best time</span>
                  <span className={styles.value}>{product.bestTime}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.label}>Size</span>
                  <span className={styles.value}>{product.size}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.label}>Price</span>
                  <span className={styles.value}>{product.price}</span>
                </div>
              </article>
            </GlowCard>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}

export default ComparisonSection;
