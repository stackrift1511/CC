import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Counter from "../../components/react-bits/Counter/Counter";
import styles from "./PromoBand.module.css";

const badges = [
  "0g Trans Fat",
  "Real Potatoes",
  "No Maida",
  "Made in India",
  "Bold Spices",
];

const stats = [
  { value: 4, prefix: "", suffix: "", label: "Bold Flavours" },
  { value: 0, prefix: "", suffix: "g", label: "Trans Fat" },
  { value: 20, prefix: "₹", suffix: "", label: "Starting Price" },
  { value: 100, prefix: "", suffix: "+", label: "Campus Stores" },
];

function StatBlock({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      className={styles.stat}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.statValue}>
        {stat.prefix ? <span className={styles.statPrefix}>{stat.prefix}</span> : null}
        {inView ? (
          <Counter
            value={stat.value}
            fontSize={42}
            fontWeight={600}
            textColor="var(--text)"
            gradientFrom="var(--promo-bg)"
            gradientTo="transparent"
          />
        ) : (
          <span>{stat.value}</span>
        )}
        {stat.suffix ? <span className={styles.statSuffix}>{stat.suffix}</span> : null}
      </div>
      <p className={styles.statLabel}>{stat.label}</p>
    </motion.div>
  );
}

function PromoBand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const decorX = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={ref} className={styles.section}>
      <motion.div className={styles.decorBranch} style={{ x: decorX }} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.p
          className={styles.shipping}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Free delivery on campus orders above ₹199
        </motion.p>

        <motion.ul
          className={styles.badges}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {badges.map((badge) => (
            <motion.li
              key={badge}
              className={styles.badge}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
            >
              {badge}
            </motion.li>
          ))}
        </motion.ul>

        <div className={styles.statsRow}>
          {stats.map((stat, index) => (
            <StatBlock key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        <motion.div
          className={styles.offerBlock}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.offerTitle}>10% off on your first order</p>
          <form className={styles.signup} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className={styles.input}
              placeholder="Your email"
              aria-label="Email for newsletter"
            />
            <button type="submit" className={styles.signupBtn}>
              Sign Up
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default PromoBand;
