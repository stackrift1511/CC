import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import "./Counter.css";

function Number({ mv, number, height }) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) memo -= 10 * height;
    return memo;
  });

  return (
    <motion.span className="counter-number" style={{ y }}>
      {number}
    </motion.span>
  );
}

function normalizeNearInteger(num) {
  const nearest = Math.round(num);
  const tolerance = 1e-9 * Math.max(1, Math.abs(num));
  return Math.abs(num - nearest) < tolerance ? nearest : num;
}

function getValueRoundedToPlace(value, place) {
  const scaled = value / place;
  return Math.floor(normalizeNearInteger(scaled));
}

function Digit({ place, value, height, digitStyle }) {
  const isDecimal = place === ".";
  const valueRoundedToPlace = isDecimal ? 0 : getValueRoundedToPlace(value, place);
  const animatedValue = useSpring(valueRoundedToPlace, { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (!isDecimal) animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace, isDecimal]);

  if (isDecimal) {
    return (
      <span className="counter-digit" style={digitStyle}>
        .
      </span>
    );
  }

  return (
    <div
      className="counter-digit"
      style={{
        ...digitStyle,
        height,
        overflow: "hidden",
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

function buildPlaces(value) {
  const str = value.toString();
  return [...str].map((ch, i, a) => {
    if (ch === ".") return ".";
    const dotIdx = a.indexOf(".");
    if (dotIdx === -1) return 10 ** (a.length - i - 1);
    if (i < dotIdx) return 10 ** (dotIdx - i - 1);
    return 10 ** -(i - dotIdx);
  });
}

export default function Counter({
  value,
  fontSize = 48,
  padding = 0,
  places = buildPlaces(value),
  gap = 4,
  borderRadius = 4,
  horizontalPadding = 0,
  textColor = "inherit",
  fontWeight = 600,
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 8,
  gradientFrom = "transparent",
  gradientTo = "transparent",
  topGradientStyle,
  bottomGradientStyle,
}) {
  const height = fontSize + padding;
  const defaultCounterStyle = {
    fontSize,
    gap,
    borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    color: textColor,
    fontWeight,
    direction: "ltr",
  };
  const defaultTopGradientStyle = {
    height: gradientHeight,
    background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
  };
  const defaultBottomGradientStyle = {
    height: gradientHeight,
    background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
  };

  return (
    <div className="counter-container" style={containerStyle}>
      <div className="counter-counter" style={{ ...defaultCounterStyle, ...counterStyle }}>
        {places.map((place) => (
          <Digit
            key={String(place)}
            place={place}
            value={value}
            height={height}
            digitStyle={digitStyle}
          />
        ))}
      </div>
      {gradientHeight > 0 ? (
        <div className="gradient-container" aria-hidden="true">
          <div
            className="top-gradient"
            style={{ ...defaultTopGradientStyle, ...topGradientStyle }}
          />
          <div
            className="bottom-gradient"
            style={{ ...defaultBottomGradientStyle, ...bottomGradientStyle }}
          />
        </div>
      ) : null}
    </div>
  );
}
