import { business } from '../data/siteConfig';

/**
 * Build a wa.me deep link with a pre-filled, context-aware message.
 * Always encodes the message to avoid injection / malformed URLs.
 *
 * @param {string} [message] - plain text message (defaults to a general enquiry)
 * @returns {string} https://wa.me/... URL
 */
export function whatsappLink(message) {
  const defaultMsg =
    'Hello SK Unique Studio Salon, I would like to enquire about your beauty services and book an appointment.';
  const text = encodeURIComponent((message || defaultMsg).slice(0, 500));
  const number = String(business.whatsapp).replace(/\D/g, '');
  return `https://wa.me/${number}?text=${text}`;
}

/** tel: link for click-to-call */
export function telLink() {
  return `tel:${String(business.phone).replace(/[^\d+]/g, '')}`;
}
