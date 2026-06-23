import {
  MotionArticle,
  MotionSection,
  getFadeUp,
  useFadeUp,
  useMotionPreference,
} from "../motion";
import madeIndiaIcon from "../../assets/icons/made-india.svg";
import noMaidaIcon from "../../assets/icons/no-maida.svg";
import potatoIcon from "../../assets/icons/potato.svg";
import spicesIcon from "../../assets/icons/spices.svg";
import transFatIcon from "../../assets/icons/trans-fat.svg";
import styles from "./GoodStuffSection.module.css";

const items = [
  { icon: transFatIcon, title: "0g Trans Fat" },
  { icon: potatoIcon, title: "Real Potatoes" },
  { icon: spicesIcon, title: "Real Spices" },
  { icon: noMaidaIcon, title: "No Maida" },
  { icon: madeIndiaIcon, title: "Made In India" },
];

function GoodStuffSection() {
  const prefersReducedMotion = useMotionPreference();

  return (
    <MotionSection className={styles.section} {...useFadeUp()}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Simple Wins</p>
        <h2 className={styles.title}>Good Stuff</h2>
      </div>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <MotionArticle
            key={item.title}
            className={styles.card}
            {...getFadeUp(prefersReducedMotion, 20, 0.45, index * 0.05)}
          >
            <div className={styles.icon}>
              <img src={item.icon} alt="" loading="lazy" />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}

export default GoodStuffSection;
