import {
  MotionArticle,
  MotionSection,
  getFadeUp,
  useFadeUp,
  useMotionPreference,
} from "../motion";
import mapMarker from "../../assets/illustrations/map-marker.svg";
import styles from "./CampusSection.module.css";

const campuses = [
  { city: "Delhi NCR", text: "DU to Amity." },
  { city: "Mumbai", text: "Fueling presentations and attendance shortages." },
  {
    city: "Bangalore",
    text: "Engineering students doing engineering student things.",
  },
  {
    city: "Pune & Hyderabad",
    text: "Questionable sleep schedules. Excellent snack choices.",
  },
];

function CampusSection() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Where We Show Up</p>
        <h2 className={styles.title}>Around Campus</h2>
        <p className={styles.subtitle}>
          From canteens to common rooms. We&apos;re spreading responsibly.
        </p>
      </div>

      <div className={styles.grid}>
        {campuses.map((campus, index) => (
          <MotionArticle
            key={campus.city}
            className={styles.card}
            {...getFadeUp(prefersReducedMotion, 20, 0.45, index * 0.05)}
          >
            <img className={styles.cardArt} src={mapMarker} alt="" loading="lazy" />
            <h3 className={styles.cardTitle}>{campus.city}</h3>
            <p className={styles.cardText}>{campus.text}</p>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}

export default CampusSection;
