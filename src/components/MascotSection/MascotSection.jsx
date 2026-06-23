import { MotionSection, useFadeUp } from "../motion";
import chachaMascot from "../../assets/mascot/chacha.svg";
import styles from "./MascotSection.module.css";

function MascotSection() {
  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.card}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Group Energy</p>
          <h2 className={styles.title}>Meet Chacha {"\uD83C\uDF5F"}</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.mascotWrap} aria-hidden="true">
            <img className={styles.mascot} src={chachaMascot} alt="" loading="lazy" />
          </div>

          <div className={styles.block}>
            <p>Every friend group has one.</p>
            <p>
              The person who starts nonsense, creates memories, and somehow
              survives every semester.
            </p>
            <p>Chacha is that friend.</p>
          </div>

          <div className={styles.quoteCard}>
            <p>He&apos;s chaotic.</p>
            <p>He&apos;s loud.</p>
            <p>He&apos;s impossible to ignore.</p>
            <p>And honestly, college would be boring without him.</p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

export default MascotSection;
