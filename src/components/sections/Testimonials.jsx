import './Testimonials.css';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Stars from '../ui/Stars';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import { testimonials } from '../../data/testimonials';
import { business } from '../../data/siteConfig';
import { whatsappLink } from '../../utils/whatsapp';

export default function Testimonials() {
  return (
    <section className="tst section" id="testimonials">
      <div className="tst__bg" aria-hidden="true" />
      <div className="container tst__inner">
        <SectionHeading
          light
          eyebrow="Client Love"
          title={
            <>
              Loved by clients across <em>York</em>
            </>
          }
          subtitle="Real experiences from the people who make SK Unique Studio what it is."
        />

        <Reveal className="tst__banner">
          <div className="tst__banner-score">
            <strong>{business.rating}</strong>
            <Stars rating={business.rating} size={20} />
          </div>
          <div className="tst__banner-text">
            <span>Rated Excellent</span>
            <p>Based on {business.reviewCount}+ Google reviews</p>
          </div>
          <div className="tst__banner-g">G</div>
        </Reveal>

        <div className="tst__grid">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 0.08}
              className="tst__card"
            >
              <Icon name="quote" size={30} className="tst__quote" />
              <Stars rating={t.rating} size={16} />
              <p className="tst__text">{t.quote}</p>
              <div className="tst__author">
                <span className="tst__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <strong>{t.name}</strong>
                  <span>
                    {t.service} · {t.location}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="tst__cta">
          <Button href={whatsappLink()} variant="dark" size="lg" icon="whatsapp">
            Join our happy clients
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
