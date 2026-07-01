import { useRef } from 'react';
import './Services.css';
import SectionHeading from '../ui/SectionHeading';
import LazyImage from '../ui/LazyImage';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import { serviceCategories, featuredServiceIds } from '../../data/services';
import { formatPrice } from '../../utils/format';
import { whatsappLink } from '../../utils/whatsapp';

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  // Subtle 3D tilt on pointer move (skipped on touch / reduced motion).
  const onMove = (e) => {
    const el = cardRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${(-py * 6).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(px * 6).toFixed(2)}deg`);
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <Reveal
      delay={(index % 3) * 0.08}
      className="svc-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      ref={cardRef}
    >
      <a
        href={whatsappLink(service.whatsappContext)}
        target="_blank"
        rel="noopener noreferrer"
        className="svc-card__link"
        aria-label={`Enquire about ${service.name}`}
      >
        <div className="svc-card__media">
          <LazyImage src={service.image.src} alt={service.image.alt} ratio="4/3" />
          <span className="svc-card__price">
            {formatPrice(service.fromPrice, true)}
          </span>
          <span className="svc-card__index">
            0{index + 1}
          </span>
        </div>
        <div className="svc-card__body">
          <h3 className="svc-card__title">{service.name}</h3>
          <p className="svc-card__tagline">{service.tagline}</p>
          <p className="svc-card__desc">{service.description}</p>
          <span className="svc-card__cta">
            Book this treatment
            <Icon name="arrowRight" size={18} />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function Services() {
  const featured = featuredServiceIds
    .map((id) => serviceCategories.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Treatments crafted to make you <em>glow</em>
            </>
          }
          subtitle="Seven signature service categories, each delivered with premium products and expert precision. Tap any treatment to book instantly on WhatsApp."
        />

        <div className="services__grid">
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
