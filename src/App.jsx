import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import AppBackground from "./layout/AppBackground";
import SmoothScroll from "./layout/SmoothScroll";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Nutrition from "./pages/Nutrition";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import styles from "./App.module.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <AppBackground />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ position: "fixed", inset: 0, zIndex: 9999 }}
          >
            <LoadingScreen />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className={styles.shell}>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
