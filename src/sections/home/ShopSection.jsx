import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BorderGlow from "../../components/react-bits/BorderGlow/BorderGlow";
import spicyMango from "../../assets/products/spicy-mango-chaat.svg";
import smokyTandoori from "../../assets/products/smoky-tandoori-lime.svg";
import cheeseBomb from "../../assets/products/cheese-bomb-masala.svg";
import styles from "./ShopSection.module.css";

const products = [
  { name: "Spicy Mango Chaat", size: "50g", price: "₹30", image: spicyMango },
  { name: "Smoky Tandoori Lime", size: "50g", price: "₹30", image: smokyTandoori },
  { name: "Cheese Bomb Masala", size: "50g", price: "₹30", image: cheeseBomb },
];

function ShopSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 0.35], [40, 0]);

  return (
    <section ref={ref} className={styles.section}>
      <motion.div className={styles.header} style={{ y: headerY }}>
        <h2 className={styles.title}>Shop Now</h2>
        <p className={styles.subtitle}>Pick your crunch. Add to cart. Repeat responsibly.</p>
      </motion.div>

      <div className={styles.grid}>
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <BorderGlow
              className={styles.glowCard}
              backgroundColor="var(--card)"
              borderRadius={18}
              glowColor="24 90 55"
              colors={["#ff6b2b", "#2a4a7a", "#4a6fa5"]}
              animated={index === 1}
            >
              <article className={styles.card}>
                <div className={styles.visual}>
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <p className={styles.size}>{product.size}</p>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.price}>{product.price}</p>
                <button type="button" className={styles.cartBtn}>
                  Add to Cart
                </button>
              </article>
            </BorderGlow>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ShopSection;
