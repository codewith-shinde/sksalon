import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

/**
 * Scroll-reveal wrapper. Animates children into view once.
 * Respects prefers-reduced-motion (renders statically).
 * Forwards ref to the underlying element for pointer/tilt effects.
 *
 * props: as, direction (up|down|left|right|none), delay, distance, className
 */
const Reveal = forwardRef(function Reveal(
  {
    children,
    as = 'div',
    direction = 'up',
    delay = 0,
    distance = 32,
    duration = 0.75,
    once = true,
    amount = 0.25,
    className,
    ...rest
  },
  ref
) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    const Tag = as;
    return (
      <Tag ref={ref} className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.div;
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }[direction];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

export default Reveal;
