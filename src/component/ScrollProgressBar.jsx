import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgressBar
 * A thin teal gradient bar pinned to the top of the viewport that smoothly
 * tracks scroll progress across the page using GPU-accelerated scaleX.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-accent-strong via-accent to-accent-soft"
        style={{ scaleX }}
      />
    </div>
  );
}

