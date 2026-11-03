"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

const VARIANTS = {
  // Wipes open from the left (for the pill image).
  slide: {
    initial: { clipPath: "inset(0% 100% 0% 0% round 9999px)" },
    animate: { clipPath: "inset(0% 0% 0% 0% round 9999px)" },
    transition: { duration: 0.9, ease: EASE },
  },
  // Pops in with a small turn (for the round image).
  pop: {
    initial: { opacity: 0, scale: 0.6, rotate: -12 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { type: "spring", stiffness: 160, damping: 14 },
  },
};

/**
 * Entrance effect for the small images inside the heading.
 * float: adds a very slow vertical drift after the entrance.
 * Reduced-motion users see the image immediately, with no movement.
 */
export default function ImageReveal({
  children,
  variant = "pop",
  delay = 0,
  float = false,
}) {
  const reduceMotion = useReducedMotion();
  const { initial, animate, transition } = VARIANTS[variant];

  return (
    <motion.span
      className="inline-flex shrink-0"
      initial={reduceMotion ? false : initial}
      animate={animate}
      transition={{ ...transition, delay }}
    >
      {float && !reduceMotion ? (
        <motion.span
          className="inline-flex"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 1,
          }}
        >
          {children}
        </motion.span>
      ) : (
        children
      )}
    </motion.span>
  );
}
