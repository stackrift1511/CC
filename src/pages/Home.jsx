import { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import StatsStrip from "../components/StatsStrip/StatsStrip";
import MomentsSection from "../components/MomentsSection/MomentsSection";
import CTASection from "../components/CTASection/CTASection";

function Home() {
  useEffect(() => {
    document.title = "Crunch Chaos | India's Boldest College Snack";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Crunch Chaos is the ultimate college snack. 0g trans fat, real potatoes, real spices. Perfect for hostel nights, road trips, and exam study sessions."
      );
    }
  }, []);

  return (
    <>
      <Hero />
      <StatsStrip />
      <MomentsSection />
      <CTASection />
    </>
  );
}

export default Home;
