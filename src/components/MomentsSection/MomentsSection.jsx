import {
  MotionArticle,
  MotionSection,
  getFadeUp,
  useFadeUp,
  useMotionPreference,
} from "../motion";
import GlowCard from "../react-bits/GlowCard";
import styles from "./MomentsSection.module.css";

const moments = [
  {
    title: "3 AM Hostel Hunger",
    description: "Nobody's asleep. Everyone's pretending.",
    marker: "01",
  },
  {
    title: "Night Before Internals",
    description: "Confidence level: Unreasonably high.",
    marker: "02",
  },
  {
    title: "One Last Match",
    description: "The biggest lie in gaming history.",
    marker: "03",
  },
  {
    title: "Tea Stall Philosophies",
    description: "Where life's biggest decisions somehow get made.",
    marker: "04",
  },
  {
    title: "Canteen Crushes",
    description: "The reason you've suddenly become regular at lunch.",
    marker: "05",
  },
  {
    title: "Deadline Panic",
    description: "Fear. Panic. And somehow, productivity.",
    marker: "06",
  },
];

function MomentsSection() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.header}>
        <p className={styles.kicker}>Shared Campus Energy</p>
        <h2 className={styles.title}>Moments That Need A Packet</h2>
        <p className={styles.subtitle}>Some memories deserve better snacks.</p>
      </div>

      <div className={styles.grid}>
        {moments.map((moment, index) => (
          <MotionArticle
            key={moment.title}
            className={styles.cardWrap}
            {...getFadeUp(prefersReducedMotion, 20, 0.45, index * 0.05)}
          >
            <GlowCard className={styles.glowCard}>
              <article className={styles.card}>
                <div className={styles.icon}>{moment.marker}</div>
                <h3 className={styles.cardTitle}>{moment.title}</h3>
                <p className={styles.cardText}>{moment.description}</p>
              </article>
            </GlowCard>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}

export default MomentsSection;
