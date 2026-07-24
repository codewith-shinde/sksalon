/* =========================================================================
   Central business configuration — single source of truth.
   Values fall back to env vars so they can be overridden per environment
   without touching code (Cloudflare Pages → Settings → Environment vars).
   ========================================================================= */

const env = import.meta.env;

export const business = {
  name: 'SK Unique Studio',
  legalName: 'SK Unique Studio Salon',
  tagline: 'Beauty · Confidence · You',
  type: 'Luxury Beauty Salon',
  rating: 4.5,
  reviewCount: 120,

  phoneDisplay: '07404 797054',
  phone: env.VITE_PHONE_NUMBER || '+447404797054',
  whatsapp: env.VITE_WHATSAPP_NUMBER || '447404797054',
  email: env.VITE_CONTACT_EMAIL || 'skuniquestudio@yahoo.com',

  address: {
    line1: '10 Colliergate',
    city: 'York',
    postcode: 'YO1 8BP',
    country: 'United Kingdom',
  },

  // Use the exact street address (no business name) — searching by name
  // resolves to the wrong pin.
  mapsQuery: env.VITE_MAPS_QUERY || '10+Colliergate,+YO1+8BP',

  // Directions / profile link
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=10+Colliergate,+YO1+8BP',
};

export const openingHours = [
  { day: 'Monday', hours: '10:00 - 7:00' },
  { day: 'Tuesday', hours: '10:00 - 7:00' },
  { day: 'Wednesday', hours: '10:00 - 7:00' },
  { day: 'Thursday', hours: '10:00 - 8:00' },
  { day: 'Friday', hours: '10:00 - 8:00' },
  { day: 'Saturday', hours: '9:30 - 5:30' },
  { day: 'Sunday', hours: 'Closed' },
];

// No social profiles yet. Add entries here to show icons in the footer, e.g.
//   { label: 'Instagram', href: 'https://instagram.com/...', icon: 'instagram' }
export const socials = [];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];
