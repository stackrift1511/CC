import {
  MotionArticle,
  MotionSection,
  getFadeUp,
  useFadeUp,
  useMotionPreference,
} from "../motion";
import GlowCard from "../react-bits/GlowCard";
import styles from "./CommunitySection.module.css";

const channels = [
  { name: "Instagram", text: "For snack drops, chaos updates, and the occasional campus spiral." },
  { name: "YouTube", text: "Longer stories, louder moments, and proof that hostel lore is real." },
  { name: "X", text: "Quick thoughts, quick jokes, and even quicker exam panic." },
  { name: "#MyCrunchChaos", text: "The best memes. The worst exam schedules. And people somehow surviving both." },
];

function CommunitySection() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>The Online Side</p>
        <h2 className={styles.title}>The Chaos Club</h2>
        <p className={styles.subtitle}>
          The best memes. The worst exam schedules. And people somehow surviving both.
        </p>
      </div>

      <div className={styles.grid}>
        {channels.map((channel, index) => (
          <MotionArticle
            key={channel.name}
            className={styles.cardWrap}
            {...getFadeUp(prefersReducedMotion, 20, 0.45, index * 0.05)}
          >
            <GlowCard className={styles.glowCard}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{channel.name}</h3>
                <p className={styles.cardText}>{channel.text}</p>
              </article>
            </GlowCard>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}

export default CommunitySection;
