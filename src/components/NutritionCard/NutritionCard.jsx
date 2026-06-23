import { MotionArticle, useFadeUp } from "../motion";
import GlowCard from "../react-bits/GlowCard";
import styles from "./NutritionCard.module.css";

function NutritionCard({ item }) {
  return (
    <MotionArticle {...useFadeUp()}>
      <GlowCard className={styles.glowCard}>
        <article className={styles.card}>
          <h3 className={styles.title}>{item.title}</h3>
          <div className={styles.table}>
            {item.values.map(([label, value]) => (
              <div key={`${item.title}-${label}`} className={styles.row}>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{value}</span>
              </div>
            ))}
          </div>
        </article>
      </GlowCard>
    </MotionArticle>
  );
}

export default NutritionCard;
