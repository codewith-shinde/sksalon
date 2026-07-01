import './About.css';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import LazyImage from '../ui/LazyImage';
import Icon from '../ui/Icon';
import { whatsappLink } from '../../utils/whatsapp';

const stats = [
  { value: '10+', label: 'Years of expertise' },
  { value: '50+', label: 'Signature treatments' },
  { value: '4.5★', label: 'Google rating' },
  { value: '5000+', label: 'Happy clients' },
];

// Genuine beauty/treatment imagery (not the salon's own premises).
const A1 =
  'https://images.unsplash.com/photo-1570174006382-148305ce4972?auto=format&fit=crop&w=900&q=80';
const A2 =
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__visual">
          <Reveal direction="right" className="about__img about__img--main">
            <LazyImage
              src={A1}
              alt="Relaxing body treatment in progress at a beauty studio"
              ratio="4/5"
            />
          </Reveal>
          <Reveal direction="up" delay={0.15} className="about__img about__img--sub">
            <LazyImage
              src={A2}
              alt="Luxury spa products, candle and flowers"
              ratio="1/1"
            />
          </Reveal>
          <Reveal delay={0.3} className="about__badge">
            <Icon name="sparkle" size={22} />
            <div>
              <strong>Est. York</strong>
              <span>City-centre studio</span>
            </div>
          </Reveal>
        </div>

        <div className="about__content">
          <Reveal>
            <span className="eyebrow">Our Story</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="about__title">
              A sanctuary of <em>beauty</em> &amp; calm in the heart of York
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="about__text">
              At SK Unique Studio, every visit is designed to feel like an
              escape. We pair genuine expertise with premium products and an
              immaculate, tranquil space — so you leave looking and feeling your
              absolute best.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="about__text">
              From precision nails and results-driven facials to flawless lashes,
              brows and bridal makeup, our skilled team treats every client with
              warmth, care and meticulous attention to detail.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <ul className="about__points">
              <li>
                <Icon name="check" size={18} /> Fully qualified, experienced therapists
              </li>
              <li>
                <Icon name="check" size={18} /> Premium, skin-loving products
              </li>
              <li>
                <Icon name="check" size={18} /> Spotless, hygienic & relaxing space
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.34} className="about__stats">
            {stats.map((s) => (
              <div className="about__stat" key={s.label}>
                <strong className="gold-text">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.4}>
            <Button href={whatsappLink()} variant="dark" icon="whatsapp">
              Book your visit
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
