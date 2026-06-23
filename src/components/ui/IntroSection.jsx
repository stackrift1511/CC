import BlurFade from "./BlurFade";
import SectionHeader from "./SectionHeader";
import styles from "./IntroSection.module.css";

function IntroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          kicker="Our Story"
          title="Welcome to Crunch Chaos"
          subtitle="Born on campus benches and late-night canteen runs, we craft bold potato chips for the moments that don't make the yearbook — but definitely make the group chat."
        />
        <BlurFade delay={0.2}>
          <p className={styles.body}>
            Every batch starts with real potatoes, honest spices, and zero
            shortcuts. We believe snacking should feel intentional — a small
            ritual of crunch in an otherwise chaotic day. From hostel hallways to
            road-trip pit stops, Crunch Chaos is the flavour you reach for when
            ordinary just won&apos;t cut it.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

export default IntroSection;
