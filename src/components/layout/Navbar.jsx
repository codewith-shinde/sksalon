import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Navbar.css';
import Logo from '../ui/Logo';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import { navLinks } from '../../data/siteConfig';
import { whatsappLink } from '../../utils/whatsapp';
import { useScrolled } from '../../hooks/useScrolled';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(30);
  useLockBodyScroll(open);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" aria-label="SK Unique Studio — home">
          <Logo />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <Button
            href={whatsappLink()}
            variant="dark"
            size="sm"
            icon="whatsapp"
            className="nav__cta"
          >
            Book Now
          </Button>
          <button
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={26} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className="nav__mobile-panel"
              aria-label="Mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="nav__mobile-links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a href={link.href} onClick={close}>
                      <span className="nav__mobile-index">
                        0{i + 1}
                      </span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="nav__mobile-cta">
                <Button
                  href={whatsappLink()}
                  variant="dark"
                  icon="whatsapp"
                  onClick={close}
                >
                  Book on WhatsApp
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
