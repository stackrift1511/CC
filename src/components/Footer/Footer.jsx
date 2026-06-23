import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useFadeUp } from "../motion";
import styles from "./Footer.module.css";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/nutrition", label: "Nutrition" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const clubItems = ["Instagram", "YouTube", "X", "#MyCrunchChaos"];

function Footer() {
  return (
    <motion.footer className={styles.footer} {...useFadeUp()}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <section className={styles.brandArea}>
            <p className={styles.brand}>CRUNCH CHAOS</p>
            <p className={styles.tagline}>Lose Control. Gain Crunch.</p>
            <p className={styles.description}>
              Built for hostel nights, terrible Wi-Fi, and memories you&apos;ll
              laugh about years later.
            </p>
          </section>

          <section className={styles.column}>
            <p className={styles.heading}>Quick Links</p>
            <nav className={styles.links} aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={styles.link}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </section>

          <section className={styles.column}>
            <p className={styles.heading}>Come Hang Out</p>
            <p className={styles.clubText}>
              The best memes. The worst exam schedules. And people somehow
              surviving both.
            </p>
            <div className={styles.clubItems}>
              {clubItems.map((item) => (
                <a key={item} href="#" className={styles.clubItem}>
                  {item}
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.legal}>
          <p className={styles.meta}>&copy; 2025 Crunch Chaos Foods Pvt. Ltd.</p>
          <p className={styles.note}>
            A fictional brand created for academic purposes.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
