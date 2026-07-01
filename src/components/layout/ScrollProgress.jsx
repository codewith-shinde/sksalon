import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

/** Thin gold progress bar that tracks page scroll (top of viewport). */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
