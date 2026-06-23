import {
  MotionArticle,
  MotionSection,
  getFadeUp,
  useFadeUp,
  useMotionPreference,
} from "../motion";
import deliveryBox from "../../assets/illustrations/delivery-box.svg";
import styles from "./DeliverySection.module.css";

const platforms = [
  { name: "Blinkit", text: "Because cravings don't wait." },
  { name: "Zepto", text: "For people who need chips immediately." },
  { name: "Swiggy Instamart", text: "Late-night rescues since forever." },
  { name: "Flipkart Minutes", text: "Because assignments can wait." },
  { name: "BigBasket Now", text: "Stock up before future-you regrets it." },
  { name: "CrunchChaos.in", text: "Build your own chaos box." },
];

function DeliverySection() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Fast Track</p>
        <h2 className={styles.title}>Delivered In Minutes {"\u26A1"}</h2>
        <p className={styles.subtitle}>
          Snack emergencies happen. We&apos;ve planned accordingly.
        </p>
      </div>

      <div className={styles.grid}>
        {platforms.map((platform, index) => (
          <MotionArticle
            key={platform.name}
            className={styles.card}
            {...getFadeUp(prefersReducedMotion, 20, 0.45, index * 0.05)}
          >
            <img className={styles.cardArt} src={deliveryBox} alt="" loading="lazy" />
            <h3 className={styles.cardTitle}>{platform.name}</h3>
            <p className={styles.cardText}>{platform.text}</p>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}

export default DeliverySection;
