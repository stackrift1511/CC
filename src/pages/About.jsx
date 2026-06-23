import { useEffect } from "react";
import AboutHero from "../components/AboutHero/AboutHero";
import StorySection from "../components/StorySection/StorySection";
import MascotSection from "../components/MascotSection/MascotSection";
import ValuesSection from "../components/ValuesSection/ValuesSection";
import AboutCTA from "../components/AboutCTA/AboutCTA";
import styles from "./About.module.css";

function About() {
  useEffect(() => {
    document.title = "Our Story & Mascot | Crunch Chaos";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Born in a hostel room during pre-exam panic, Crunch Chaos belongs in the stories you'll laugh about later. Meet Chacha, our chaotic group mascot."
      );
    }
  }, []);

  return (
    <div className={styles.page}>
      <AboutHero />
      <StorySection />
      <MascotSection />
      <ValuesSection />
      <AboutCTA />
    </div>
  );
}

export default About;
