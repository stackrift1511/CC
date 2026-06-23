import { useTheme } from "../hooks/useTheme";
import LightPillar from "../components/react-bits/LightPillar/LightPillar";
import styles from "./AppBackground.module.css";

function AppBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.base} />
      <LightPillar
        topColor={isLight ? "#8aafd4" : "#2a4a7a"}
        bottomColor={isLight ? "#f0a060" : "#ff6b2b"}
        intensity={0.2}
        rotationSpeed={0.22}
        glowAmount={isLight ? 0.003 : 0.004}
        pillarWidth={2.8}
        pillarHeight={0.32}
        noiseIntensity={isLight ? 0.2 : 0.3}
        mixBlendMode="screen"
        className={isLight ? styles.pillarLight : styles.pillarDark}
      />
      <div className={styles.vignette} />
    </div>
  );
}

export default AppBackground;
