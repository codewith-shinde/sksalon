import './Footer.css';
import Logo from '../ui/Logo';
import Icon from '../ui/Icon';
import { business, navLinks, socials, openingHours } from '../../data/siteConfig';
import { serviceCategories } from '../../data/services';
import { whatsappLink, telLink } from '../../utils/whatsapp';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo tone="light" />
          <p className="footer__blurb">
            A luxury beauty studio in the heart of York. Expert treatments,
            premium products and a calm, immaculate space designed around you.
          </p>
          {socials.length > 0 && (
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer__social"
                >
                  <Icon name={s.icon} size={20} />
                </a>
              ))}
            </div>
          )}
        </div>

        <nav className="footer__col" aria-label="Footer navigation">
          <h3 className="footer__title">Explore</h3>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Services">
          <h3 className="footer__title">Services</h3>
          <ul>
            {serviceCategories.slice(0, 7).map((s) => (
              <li key={s.id}>
                <a href="#services">{s.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__title">Visit & Book</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="mapPin" size={18} />
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                {business.address.line1}, {business.address.city},{' '}
                {business.address.postcode}
              </a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={telLink()}>{business.phoneDisplay}</a>
            </li>
            <li>
              <Icon name="whatsapp" size={18} />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li>
              <Icon name="clock" size={18} />
              <span>
                Mon–Sat {openingHours[0].hours}
                <br />
                Sun {openingHours[6].hours}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {business.legalName}. All rights reserved.
        </p>
        <p className="footer__credit">
          Crafted with care · <span className="gold-text">Beauty · Confidence · You</span>
        </p>
      </div>
    </footer>
  );
}
