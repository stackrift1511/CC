import { useTheme } from "../../hooks/useTheme";
import BorderGlow from "./BorderGlow/BorderGlow";

const PALETTE = {
  dark: {
    colors: ["#ff6b2b", "#2a4a7a", "#4a6fa5"],
    glowColor: "24 90 55",
  },
  light: {
    colors: ["#e8621a", "#2a4a7a", "#6b8fc4"],
    glowColor: "22 82 48",
  },
};

function GlowCard({
  children,
  className = "",
  borderRadius = 20,
  animated = false,
  fillOpacity = 0.35,
}) {
  const { theme } = useTheme();
  const palette = PALETTE[theme] ?? PALETTE.dark;

  return (
    <BorderGlow
      className={className}
      backgroundColor="var(--card)"
      borderRadius={borderRadius}
      colors={palette.colors}
      glowColor={palette.glowColor}
      fillOpacity={fillOpacity}
      animated={animated}
    >
      {children}
    </BorderGlow>
  );
}

export default GlowCard;
