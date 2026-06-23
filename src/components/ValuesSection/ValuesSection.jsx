import {
  MotionArticle,
  MotionSection,
  getFadeUp,
  useFadeUp,
  useMotionPreference,
} from "../motion";
import GlowCard from "../react-bits/GlowCard";
import styles from "./ValuesSection.module.css";

const values = [
  { title: "Real Moments", text: "No fake perfection. Just memories worth remembering." },
  { title: "Maximum Flavour", text: "Life's too short for boring snacks." },
  { title: "Campus First", text: "Built for students. Inspired by students." },
  { title: "Responsible Chaos", text: "Good flavour. Less waste. Better choices." },
];

function ValuesSection() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Brand Values</p>
        <h2 className={styles.title}>What We Believe</h2>
      </div>

      <div className={styles.grid}>
        {values.map((value, index) => (
          <MotionArticle
            key={value.title}
            className={styles.cardWrap}
            {...getFadeUp(prefersReducedMotion, 20, 0.45, index * 0.05)}
          >
            <GlowCard className={styles.glowCard}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardText}>{value.text}</p>
              </article>
            </GlowCard>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}

export default ValuesSection;
