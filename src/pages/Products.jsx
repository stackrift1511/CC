import { useEffect } from "react";
import ProductHero from "../components/ProductHero/ProductHero";
import ProductCard from "../components/ProductCard/ProductCard";
import ComparisonSection from "../components/ComparisonSection/ComparisonSection";
import ProductCTA from "../components/ProductCTA/ProductCTA";
import cheeseBombPacket from "../assets/products/cheese-bomb-masala.svg";
import examSurvivorPacket from "../assets/products/exam-survivor-pack.svg";
import smokyTandooriPacket from "../assets/products/smoky-tandoori-lime.svg";
import spicyMangoPacket from "../assets/products/spicy-mango-chaat.svg";
import styles from "./Products.module.css";

const products = [
  {
    title: "Spicy Mango Chaat",
    personality: "For Dangerous Decisions",
    description:
      "Sweet. Tangy. Unexpected. Just like saying: \"I'll study tomorrow.\"",
    bestWith: ["Late-night gaming", "Hostel gossip", "Rainy evenings"],
    moodMeter: 4,
    size: "30g, 50g",
    price: "\u20B920 - \u20B930",
    spiceLevel: "Medium-high",
    mood: "Sharp and chaotic",
    bestTime: "After 10 PM",
    image: spicyMangoPacket,
  },
  {
    title: "Smoky Tandoori Lime",
    personality: "For The Loud Friend",
    description:
      "The planner. The hype person. The one who says: \"Bro, let's go on a trip.\"",
    bestWith: ["Road trips", "Group studies", "Cricket matches"],
    moodMeter: 3,
    size: "30g, 50g",
    price: "\u20B920 - \u20B930",
    spiceLevel: "Balanced",
    mood: "Bold and social",
    bestTime: "Any group plan",
    image: smokyTandooriPacket,
  },
  {
    title: "Cheese Bomb Masala",
    personality: "For Comfort Lovers",
    description: "Movie nights. Blankets. No drama. Only vibes.",
    bestWith: ["Netflix", "Rain", "Weekend naps"],
    moodMeter: 2,
    size: "30g, 50g",
    price: "\u20B920 - \u20B930",
    spiceLevel: "Easy-going",
    mood: "Soft and cozy",
    bestTime: "Slow evenings",
    image: cheeseBombPacket,
  },
  {
    title: "Exam Survivor Pack",
    personality: "Sleep Is Optional",
    description:
      "Limited edition. Maximum confidence. Minimum preparation.",
    bestWith: ["Internals", "Project deadlines", "Existential crises"],
    moodMeter: 5,
    size: "100g",
    price: "\u20B960",
    spiceLevel: "High-alert",
    mood: "Pure survival mode",
    bestTime: "Submission week",
    limitedEdition: true,
    image: examSurvivorPacket,
  },
];

function Products() {
  useEffect(() => {
    document.title = "Flavours & Products | Crunch Chaos";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore the boldest flavours of Crunch Chaos chips. Try Spicy Mango Chaat, Smoky Tandoori Lime, Cheese Bomb Masala, or the Exam Survivor Pack."
      );
    }
  }, []);

  return (
    <div className={styles.page}>
      <ProductHero />

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </section>

      <ComparisonSection products={products} />
      <ProductCTA />
    </div>
  );
}

export default Products;
