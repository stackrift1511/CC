import { useEffect } from "react";
import NutritionHero from "../components/NutritionHero/NutritionHero";
import GoodStuffSection from "../components/GoodStuffSection/GoodStuffSection";
import NutritionCard from "../components/NutritionCard/NutritionCard";
import PairingsSection from "../components/PairingsSection/PairingsSection";
import InfoSection from "../components/InfoSection/InfoSection";
import styles from "./Nutrition.module.css";

const nutritionItems = [
  {
    title: "Spicy Mango Chaat",
    values: [
      ["Energy", "152 kcal"],
      ["Total Fat", "8.5g"],
      ["Saturated Fat", "2.1g"],
      ["Trans Fat", "0g"],
      ["Sodium", "195mg"],
      ["Carbohydrates", "17g"],
      ["Dietary Fibre", "1.2g"],
      ["Sugars", "1.8g"],
      ["Protein", "2g"],
      ["Vitamin C", "4% RDA"],
    ],
  },
  {
    title: "Smoky Tandoori Lime",
    values: [
      ["Energy", "148 kcal"],
      ["Total Fat", "8.2g"],
      ["Saturated Fat", "2.0g"],
      ["Trans Fat", "0g"],
      ["Sodium", "185mg"],
      ["Carbohydrates", "16.5g"],
      ["Dietary Fibre", "1.3g"],
      ["Sugars", "1.2g"],
      ["Protein", "2.1g"],
      ["Vitamin C", "6% RDA"],
    ],
  },
  {
    title: "Cheese Bomb Masala",
    values: [
      ["Energy", "158 kcal"],
      ["Total Fat", "9.0g"],
      ["Saturated Fat", "2.5g"],
      ["Trans Fat", "0g"],
      ["Sodium", "210mg"],
      ["Carbohydrates", "17.5g"],
      ["Dietary Fibre", "1.0g"],
      ["Sugars", "1.5g"],
      ["Protein", "2.3g"],
      ["Calcium", "3% RDA"],
    ],
  },
];

function Nutrition() {
  useEffect(() => {
    document.title = "Nutrition & Ingredients | Crunch Chaos";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Get clear details about what goes into Crunch Chaos. 0g trans fat, real potatoes, and real spices certified by FSSAI."
      );
    }
  }, []);

  return (
    <div className={styles.page}>
      <NutritionHero />
      <GoodStuffSection />

      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          {nutritionItems.map((item) => (
            <NutritionCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <PairingsSection />
      <InfoSection />
    </div>
  );
}

export default Nutrition;
