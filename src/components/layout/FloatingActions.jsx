import { AnimatePresence, motion } from 'framer-motion';
import './FloatingActions.css';
import Icon from '../ui/Icon';
import { whatsappLink, telLink } from '../../utils/whatsapp';
import { useScrolled } from '../../hooks/useScrolled';
import { business } from '../../data/siteConfig';

export default function FloatingActions() {
  const showTop = useScrolled(600);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Floating WhatsApp — visible site-wide */}
      <a
        className="fab fab--whatsapp"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SK Unique Studio on WhatsApp"
      >
        <span className="fab__pulse" aria-hidden="true" />
        <Icon name="whatsapp" size={30} />
        <span className="fab__tooltip">Book on WhatsApp</span>
      </a>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="fab fab--top"
            onClick={scrollTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
          >
            <Icon name="arrowUp" size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky mobile call + WhatsApp bar */}
      <div className="mobilebar" role="group" aria-label="Quick contact">
        <a className="mobilebar__btn mobilebar__btn--call" href={telLink()}>
          <Icon name="phone" size={20} />
          <span>Call {business.phoneDisplay}</span>
        </a>
        <a
          className="mobilebar__btn mobilebar__btn--wa"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="whatsapp" size={20} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
