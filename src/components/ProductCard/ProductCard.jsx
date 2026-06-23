import { MotionArticle, useFadeUp } from "../motion";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const stars = Array.from({ length: 5 }, (_, index) => index < product.moodMeter);

  return (
    <MotionArticle className={styles.card} {...useFadeUp()}>
      <div className={styles.visual} aria-hidden="true">
        <img className={styles.packet} src={product.image} alt="" loading="lazy" />
      </div>

      <div className={styles.header}>
        <div>
          <p className={styles.title}>{product.title}</p>
          <h3 className={styles.personality}>{product.personality}</h3>
        </div>
        {product.limitedEdition ? (
          <span className={styles.badge}>Limited Edition</span>
        ) : null}
      </div>

      <p className={styles.description}>{product.description}</p>

      <div className={styles.section}>
        <p className={styles.label}>Best With</p>
        <ul className={styles.list}>
          {product.bestWith.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <p className={styles.label}>Mood Meter</p>
        <div className={styles.rating} aria-label={`${product.moodMeter} out of 5`}>
          {stars.map((active, index) => (
            <span
              key={`${product.title}-${index + 1}`}
              className={active ? styles.starActive : styles.star}
            >
              {"\u2605"}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.meta}>
        <div>
          <p className={styles.label}>Size</p>
          <p className={styles.value}>{product.size}</p>
        </div>
        <div>
          <p className={styles.label}>Price</p>
          <p className={styles.value}>{product.price}</p>
        </div>
      </div>
    </MotionArticle>
  );
}

export default ProductCard;
