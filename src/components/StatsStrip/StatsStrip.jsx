import {
  MotionArticle,
  MotionSection,
  getFadeUp,
  useFadeUp,
  useMotionPreference,
} from "../motion";
import styles from "./StatsStrip.module.css";

const stats = [
  { value: "4", label: "Bold Flavours" },
  { value: "0g", label: "Trans Fat" },
  { value: "\u20B920", label: "Starting Price" },
  { value: "100+", label: "Campus Stores" },
];

function StatsStrip() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.grid}>
        {stats.map((stat, index) => (
          <MotionArticle
            key={stat.label}
            className={styles.card}
            {...getFadeUp(prefersReducedMotion, 20, 0.45, index * 0.06)}
          >
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}

export default StatsStrip;
