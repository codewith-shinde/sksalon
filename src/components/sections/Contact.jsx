import { useState, useRef } from 'react';
import './Contact.css';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import { business, openingHours } from '../../data/siteConfig';
import { whatsappLink } from '../../utils/whatsapp';
import { sanitizeInput, isValidEmail, isValidPhone } from '../../utils/format';
import { serviceCategories } from '../../data/services';

const todayIndex = () => {
  // 0 = Sunday in JS; our array is Mon..Sun
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
    website: '', // honeypot (must stay empty)
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const lastSubmit = useRef(0);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (form.name.trim().length < 2) err.name = 'Please enter your name.';
    if (!isValidPhone(form.phone)) err.phone = 'Enter a valid phone number.';
    if (!form.service) err.service = 'Please choose a service.';
    if (form.message.trim().length < 5)
      err.message = 'Tell us a little more (min 5 characters).';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    // Bot protection: honeypot filled → silently drop.
    if (form.website) {
      setStatus({ type: 'success', msg: 'Thank you! We will be in touch.' });
      return;
    }
    // Rate limiting: max 1 submit / 15s.
    const now = Date.now();
    if (now - lastSubmit.current < 15000) {
      setStatus({
        type: 'error',
        msg: 'Please wait a few seconds before trying again.',
      });
      return;
    }
    if (!validate()) {
      setStatus({ type: 'error', msg: 'Please fix the highlighted fields.' });
      return;
    }
    lastSubmit.current = now;

    // No backend needed — compose a WhatsApp message with sanitised values.
    const msg =
      `Hello SK Unique Studio, I'd like to book an appointment.%0A%0A` +
      `Name: ${sanitizeInput(form.name)}%0A` +
      `Phone: ${sanitizeInput(form.phone)}%0A` +
      `Service: ${sanitizeInput(form.service)}%0A` +
      `Message: ${sanitizeInput(form.message)}`;
    const number = String(business.whatsapp).replace(/\D/g, '');
    window.open(
      `https://wa.me/${number}?text=${msg}`,
      '_blank',
      'noopener,noreferrer'
    );
    setStatus({
      type: 'success',
      msg: 'Opening WhatsApp to send your enquiry…',
    });
    setForm({ name: '', phone: '', service: '', message: '', website: '' });
  };

  const today = todayIndex();

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Visit Us"
          title={
            <>
              Come and be <em>pampered</em>
            </>
          }
          subtitle="Find us in the heart of York. Book ahead to secure your preferred time."
        />

        <div className="contact__grid">
          {/* Left: info + hours + map */}
          <div className="contact__info">
            <Reveal className="contact__cards">
              <a
                className="contact__card"
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact__icon">
                  <Icon name="mapPin" size={22} />
                </span>
                <div>
                  <strong>Location</strong>
                  <p>
                    {business.address.line1}, {business.address.city},{' '}
                    {business.address.postcode}
                  </p>
                </div>
              </a>
              <a
                className="contact__card"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact__icon">
                  <Icon name="whatsapp" size={22} />
                </span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>Message us anytime</p>
                </div>
              </a>
              <a className="contact__card" href={`mailto:${business.email}`}>
                <span className="contact__icon">
                  <Icon name="mail" size={22} />
                </span>
                <div>
                  <strong>Email</strong>
                  <p>{business.email}</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1} className="contact__hours">
              <h3 className="contact__hours-title">
                <Icon name="clock" size={18} /> Opening Hours
              </h3>
              <ul>
                {openingHours.map((h, i) => (
                  <li key={h.day} className={i === today ? 'is-today' : ''}>
                    <span>{h.day}</span>
                    <span>{h.hours}</span>
                    {i === today && <em>Today</em>}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="contact__map">
              <iframe
                title="Map to SK Unique Studio, 10 Colliergate, York"
                src={`https://www.google.com/maps?q=${business.mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal direction="left" className="contact__form-wrap">
            <form className="contact__form" onSubmit={onSubmit} noValidate>
              <h3 className="contact__form-title">Request an appointment</h3>
              <p className="contact__form-sub">
                Fill in your details and we&apos;ll confirm your booking on
                WhatsApp.
              </p>

              {/* Honeypot — hidden from users, catches bots */}
              <div className="contact__hp" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={update}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={80}
                  value={form.name}
                  onChange={update}
                  aria-invalid={!!errors.name}
                  placeholder="Your name"
                />
                {errors.name && <span className="contact__err">{errors.name}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={update}
                  aria-invalid={!!errors.phone}
                  placeholder="07…"
                />
                {errors.phone && <span className="contact__err">{errors.phone}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={update}
                  aria-invalid={!!errors.service}
                >
                  <option value="">Select a treatment…</option>
                  {serviceCategories.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span className="contact__err">{errors.service}</span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  value={form.message}
                  onChange={update}
                  aria-invalid={!!errors.message}
                  placeholder="Preferred date/time and any details…"
                />
                {errors.message && (
                  <span className="contact__err">{errors.message}</span>
                )}
              </div>

              <Button as="button" type="submit" variant="dark" icon="whatsapp">
                Send via WhatsApp
              </Button>

              {status && (
                <p
                  className={`contact__status contact__status--${status.type}`}
                  role="status"
                >
                  {status.msg}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
