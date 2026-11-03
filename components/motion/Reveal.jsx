"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

const TAGS = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  ul: motion.ul,
  li: motion.li,
  nav: motion.nav,
  section: motion.section,
  article: motion.article,
};

const OFFSETS = {
  up: { x: 0, y: 20 },
  down: { x: 0, y: -20 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Fades its children in (optionally moving / scaling them).
 *
 * Props
 * - as:        "div" | "p" | "span" | "h1" | "h2" | "h3" | "ul" | "li" | "nav" | "section" | "article"
 * - delay:     seconds before the animation starts
 * - duration:  animation length in seconds
 * - direction: "up" | "down" | "left" | "right" | "none"
 * - y:         vertical offset in px, overrides the direction's default (e.g. -40 drops in from above)
 * - scale:     starting scale (e.g. 0.5 grows to 1)
 * - amount:    share of the element (0 to 1) that must be visible before it plays
 * - inView:    true (default) plays when scrolled into view, once.
 *              false plays immediately on mount.
 * - ...rest:   any other prop (id, aria-*, onClick...) is passed to the element.
 *
 * Only opacity and transform are animated. Reduced-motion users see the
 * content right away, with no animation.
 */
export default function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  y,
  scale = 1,
  amount = 0.15,
  inView = true,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Component = TAGS[as] ?? motion.div;

  const base = OFFSETS[direction] ?? OFFSETS.up;
  const hidden = { opacity: 0, x: base.x, y: y ?? base.y, scale };
  const shown = { opacity: 1, x: 0, y: 0, scale: 1 };

  const trigger = inView
    ? {
        whileInView: shown,
        viewport: { once: true, amount, margin: "0px 0px -40px 0px" },
      }
    : { animate: shown };

  return (
    <Component
      {...rest}
      className={className}
      initial={reduceMotion ? false : hidden}
      transition={
        reduceMotion ? { duration: 0 } : { duration, delay, ease: EASE }
      }
      {...trigger}
    >
      {children}
    </Component>
  );
}
