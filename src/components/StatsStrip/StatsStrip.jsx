import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  MotionArticle,
  MotionSection,
  getFadeUp,
  useFadeUp,
  useMotionPreference,
} from "../motion";
import Counter from "../react-bits/Counter/Counter";
import GlowCard from "../react-bits/GlowCard";
import styles from "./StatsStrip.module.css";

const stats = [
  { value: 4, prefix: "", suffix: "", label: "Bold Flavours" },
  { value: 0, prefix: "", suffix: "g", label: "Trans Fat" },
  { value: 20, prefix: "₹", suffix: "", label: "Starting Price" },
  { value: 100, prefix: "", suffix: "+", label: "Campus Stores" },
];

function StatCard({ stat, index, prefersReducedMotion }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <MotionArticle
      ref={ref}
      className={styles.cardWrap}
      {...getFadeUp(prefersReducedMotion, 20, 0.5, index * 0.07)}
    >
      <GlowCard className={styles.glowCard}>
        <div className={styles.card}>
          <div className={styles.valueRow}>
            {stat.prefix ? <span className={styles.prefix}>{stat.prefix}</span> : null}
            {inView ? (
              <Counter
                value={stat.value}
                fontSize={36}
                fontWeight={600}
                textColor="var(--primary)"
                gradientHeight={0}
              />
            ) : (
              <span className={styles.valueFallback}>{stat.value}</span>
            )}
            {stat.suffix ? <span className={styles.suffix}>{stat.suffix}</span> : null}
          </div>
          <p className={styles.label}>{stat.label}</p>
        </div>
      </GlowCard>
    </MotionArticle>
  );
}

function StatsStrip() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.grid}>
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            stat={stat}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </MotionSection>
  );
}

export default StatsStrip;
