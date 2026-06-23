import BlurFade from "./BlurFade";
import styles from "./SectionHeader.module.css";

function SectionHeader({ kicker, title, subtitle, align = "left", delay = 0 }) {
  return (
    <header
      className={`${styles.header} ${align === "center" ? styles.center : ""}`}
    >
      {kicker ? (
        <BlurFade delay={delay}>
          <p className={styles.kicker}>{kicker}</p>
        </BlurFade>
      ) : null}
      <BlurFade delay={delay + 0.08}>
        <h2 className={styles.title}>{title}</h2>
      </BlurFade>
      {subtitle ? (
        <BlurFade delay={delay + 0.14}>
          <p className={styles.subtitle}>{subtitle}</p>
        </BlurFade>
      ) : null}
    </header>
  );
}

export default SectionHeader;
