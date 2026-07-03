import './CTABand.css';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { whatsappLink } from '../../utils/whatsapp';

export default function CTABand() {
  return (
    <section className="ctaband" aria-label="Book your appointment">
      <div className="ctaband__marquee" aria-hidden="true">
        <div className="ctaband__track">
          {[...Array(2)].map((_, r) => (
            <span key={r}>
              Book Your Appointment <Icon name="sparkle" size={20} /> Beauty ·
              Confidence · You <Icon name="sparkle" size={20} /> SK Unique Studio{' '}
              <Icon name="sparkle" size={20} />{' '}
            </span>
          ))}
        </div>
      </div>

      <div className="container ctaband__inner">
        <Reveal>
          <h2 className="ctaband__title">
            Ready to feel <span className="gold-text serif-italic">your best?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="ctaband__text">
            Book your treatment in seconds — just message us on WhatsApp. We
            can&apos;t wait to welcome you.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="ctaband__actions">
          <Button href={whatsappLink()} variant="dark" size="lg" icon="whatsapp">
            Book on WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
