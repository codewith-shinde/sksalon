import './About.css';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import LazyImage from '../ui/LazyImage';
import Icon from '../ui/Icon';
import { whatsappLink } from '../../utils/whatsapp';

// Threading-led imagery — our signature craft leads the Our Story visual.
// A1 is the salon's own threading photo (in /public/images).
const A1 = '/images/our-story-threading.jpg';
const A2 =
  'https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?auto=format&fit=crop&w=800&q=80';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__visual">
          <Reveal direction="right" className="about__img about__img--main">
            <LazyImage
              src={A1}
              alt="Precision eyebrow threading treatment in progress"
              ratio="4/5"
            />
          </Reveal>
          <Reveal direction="up" delay={0.15} className="about__img about__img--sub">
            <LazyImage
              src={A2}
              alt="Beautifully defined brows and lashes after treatment"
              ratio="1/1"
            />
          </Reveal>
          <Reveal delay={0.3} className="about__badge">
            <Icon name="sparkle" size={22} />
            <div>
              <strong>Expert Threading</strong>
              <span>Our signature craft</span>
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
              Threading is our signature craft. Using the traditional technique,
              our therapists shape your brows with fine, precise control for
              clean, natural symmetry that lasts — from a quick eyebrow tidy to
              full-face threading. Alongside it we offer flawless lashes,
              results-driven facials, nails, waxing and bridal makeup, every
              treatment delivered with meticulous care.
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

          <Reveal delay={0.34}>
            <Button href={whatsappLink()} variant="dark" icon="whatsapp">
              Book your visit
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
