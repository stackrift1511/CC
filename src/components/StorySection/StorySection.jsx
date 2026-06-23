import { MotionSection, useFadeUp } from "../motion";
import GlowCard from "../react-bits/GlowCard";
import styles from "./StorySection.module.css";

function StorySection() {
  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <GlowCard className={styles.glowCard}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Hostel Beginnings</p>
          <h2 className={styles.title}>How It All Began</h2>
          <div className={styles.story}>
            <p>It started with a terrible week.</p>
            <p>Internals.</p>
            <p>Broken Wi-Fi.</p>
            <p>Mess food that should probably be investigated.</p>
            <p>
              And two roommates trying to survive on optimism and whatever
              seasonings they could find.
            </p>
            <p>
              Somewhere between hunger and experimentation, something unexpected
              happened.
            </p>
            <p>
              A strange combination of spices turned into a flavour everyone in
              the hostel wanted.
            </p>
            <p>And just like that, Crunch Chaos was born.</p>
          </div>
        </div>
      </GlowCard>
    </MotionSection>
  );
}

export default StorySection;
