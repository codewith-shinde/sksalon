/** Format a GBP price. `from` prefixes "from". */
export function formatPrice(price, from = false) {
  if (price == null) return 'Enquire';
  const value = `£${price}`;
  return from ? `from ${value}` : value;
}

/**
 * Basic client-side input sanitiser for contact form fields.
 * Strips angle brackets and ASCII control chars to prevent HTML/script
 * injection before the value is ever used. Any server/endpoint must
 * ALSO validate — never trust the client alone.
 */
export function sanitizeInput(value = '') {
  return String(value)
    .replace(/[<>]/g, '')
    // strip ASCII control characters (0x00–0x1F and 0x7F)
    // eslint-disable-next-line no-control-regex
    .replace(/[\x00-\x1F\x7F]/g, '')
    .trim()
    .slice(0, 1000);
}

/** Simple email shape validation (defence-in-depth, not a guarantee). */
export function isValidEmail(email = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

/** UK phone: allow digits, spaces, +, (), - ; require 7–15 digits. */
export function isValidPhone(phone = '') {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}
