import styles from "./InfoSection.module.css";

const infoItems = [
  ["FSSAI Certified", "License Number: 10019999000123"],
  ["Manufacturer", "Crunch Chaos Foods Pvt. Ltd."],
  ["Address", "Plot 42, Sector 18, Noida, UP — 201301"],
  ["Shelf Life", "6 months"],
  ["Storage", "Store in a cool, dry place."],
  ["Taxes", "MRP inclusive of all taxes."],
];

function InfoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Compliance Corner</p>
        <h2 className={styles.title}>The Boring But Important Stuff</h2>
        <p className={styles.subtitle}>Because adults insist.</p>

        <div className={styles.grid}>
          {infoItems.map(([label, value]) => (
            <div key={label} className={styles.item}>
              <p className={styles.label}>{label}</p>
              <p className={styles.value}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
