import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { useButtonMotion } from "../motion";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Dark" : "Light";
  const icon = isDark ? "\uD83C\uDF19" : "\u2600\uFE0F";
  const buttonMotion = useButtonMotion();

  return (
    <motion.button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      {...buttonMotion}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            className={styles.icon}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {icon}
          </motion.span>
        </AnimatePresence>
      </span>
      <span>{label}</span>
    </motion.button>
  );
}

export default ThemeToggle;
