import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Stars from '../ui/Stars';
import Logo from '../ui/Logo';
import { business } from '../../data/siteConfig';
import { whatsappLink } from '../../utils/whatsapp';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

const headline = ['Where', 'beauty', 'meets', 'artistry'];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const word = {
  hidden: { opacity: 0, y: '110%' },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '-8%']);
  const logoY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '10%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow hero__glow--1" />
        <span className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__inner">
        <motion.div className="hero__content" style={{ y: textY, opacity: fade }}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            York&apos;s Premium Beauty Studio
          </motion.span>

          <motion.h1
            className="hero__title"
            variants={reduced ? undefined : container}
            initial={reduced ? undefined : 'hidden'}
            animate={reduced ? undefined : 'show'}
          >
            {headline.map((w, i) => (
              <span className="hero__word-wrap" key={i}>
                <motion.span
                  className={`hero__word ${i === 3 ? 'gold-text serif-italic' : ''}`}
                  variants={reduced ? undefined : word}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Expert threading, nails, facials, lashes, brows, waxing, massage
            &amp; makeup — delivered with meticulous care in a calm, luxurious
            space in the heart of York.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <Button href={whatsappLink()} variant="dark" size="lg" icon="whatsapp">
              Book Appointment
            </Button>
          </motion.div>

          <motion.div
            className="hero__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="hero__rating">
              <Stars rating={business.rating} size={18} />
              <span>
                <strong>{business.rating}★</strong> Google rating
              </span>
            </div>
            <span className="hero__divider" />
            <span className="hero__trust-item">
              <Icon name="mapPin" size={16} /> 10 Colliergate, York
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          style={{ y: logoY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__logo-halo" aria-hidden="true" />
          <div className="hero__logo-card">
            <Logo variant="hero" />
          </div>

          <motion.div
            className="hero__card hero__card--rating"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <div className="hero__card-stars">
              <Stars rating={5} size={15} />
            </div>
            <p>“Best salon in York — I never go anywhere else.”</p>
          </motion.div>

          <motion.div
            className="hero__card hero__card--stat"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
          >
            <strong>50+</strong>
            <span>Signature treatments</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...Array(2)].map((_, r) => (
            <span key={r}>
              Threading <Icon name="sparkle" size={14} /> Nails{' '}
              <Icon name="sparkle" size={14} /> Facials{' '}
              <Icon name="sparkle" size={14} /> Lashes{' '}
              <Icon name="sparkle" size={14} /> Brows{' '}
              <Icon name="sparkle" size={14} /> Waxing{' '}
              <Icon name="sparkle" size={14} /> Massage{' '}
              <Icon name="sparkle" size={14} /> Makeup{' '}
              <Icon name="sparkle" size={14} />{' '}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
