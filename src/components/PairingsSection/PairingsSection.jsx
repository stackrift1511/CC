import {
  MotionArticle,
  MotionSection,
  getFadeUp,
  useFadeUp,
  useMotionPreference,
} from "../motion";
import styles from "./PairingsSection.module.css";

const pairings = [
  {
    title: "Spicy Mango Chaat",
    items: ["Horror movies", "Group studies", "Bad decisions"],
  },
  {
    title: "Smoky Tandoori Lime",
    items: ["Cricket matches", "Road trips", "Hostel gossip"],
  },
  {
    title: "Cheese Bomb Masala",
    items: ["Netflix", "Rain", "Existential crises"],
  },
];

function PairingsSection() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Snack Situations</p>
        <h2 className={styles.title}>Pairs Well With</h2>
      </div>

      <div className={styles.grid}>
        {pairings.map((pairing, index) => (
          <MotionArticle
            key={pairing.title}
            className={styles.card}
            {...getFadeUp(prefersReducedMotion, 20, 0.45, index * 0.06)}
          >
            <h3 className={styles.cardTitle}>{pairing.title}</h3>
            <ul className={styles.list}>
              {pairing.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}

export default PairingsSection;
