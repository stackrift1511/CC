import { useEffect } from "react";
import ContactHero from "../components/ContactHero/ContactHero";
import DeliverySection from "../components/DeliverySection/DeliverySection";
import CampusSection from "../components/CampusSection/CampusSection";
import CommunitySection from "../components/CommunitySection/CommunitySection";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import styles from "./Contact.module.css";

function Contact() {
  useEffect(() => {
    document.title = "Where to Buy & Contact | Crunch Chaos";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Find Crunch Chaos at campus stores near you or get them delivered in minutes via Blinkit, Zepto, Swiggy Instamart, and more."
      );
    }
  }, []);

  return (
    <div className={styles.page}>
      <ContactHero />
      <DeliverySection />
      <CampusSection />
      <CommunitySection />
      <ContactCTA />
    </div>
  );
}

export default Contact;
