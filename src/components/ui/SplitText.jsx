import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

function SplitText({
  text,
  className,
  as: Tag = "span",
  mode = "words",
  delay = 0,
  stagger = 0.04,
}) {
  const prefersReducedMotion = useReducedMotion();
  const units = mode === "chars" ? text.split("") : text.split(" ");

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {units.map((unit, index) => (
        <motion.span
          key={`${unit}-${index}`}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.55,
            delay: delay + index * stagger,
            ease,
          }}
        >
          {unit}
          {mode === "words" && index < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}

export default SplitText;
