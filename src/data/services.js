/* =========================================================================
   SERVICES & PRICING — single source of truth.

   ⚠️  TRANSCRIBED VERBATIM from the SK Unique Studio printed menu.
   The order of categories, the exact service names, capitalisation,
   spelling, prices, `(from)` labels and duration labels — e.g. (45mins),
   (1hr) — all mirror the printed menu EXACTLY. Do not reorder, rename,
   merge, split, round or infer. The printed menu is the source of truth.

   Only intentional deviation from the printed menu:
   • "Extras" is set to `from £5` (owner correction; printed menu shows £15).
   ========================================================================= */

// Images use curated REAL photography (Unsplash, free commercial licence).
// To use your own photos: drop files into /public/images and change `src`
// to e.g. "/images/nails.jpg". The <LazyImage> component shows an elegant
// gradient if any image fails to load, so nothing ever looks broken.
const IMG = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const serviceCategories = [
  {
    id: 'threading',
    name: 'Threading',
    tagline: 'Precision shaping, clean symmetry',
    description:
      'Our signature craft — traditional threading for precise, natural shaping across the brows and face, with clean symmetry that lasts.',
    image: {
      src: '/images/threading-card.jpg',
      alt: 'Close-up of precise eyebrow threading in progress',
    },
    fromPrice: 8,
    whatsappContext: 'Hello, I would like to book a threading appointment.',
    groups: [
      {
        items: [
          { name: 'Eyebrows', price: 15 },
          { name: 'Upper Lip', price: 8 },
          { name: 'Chin', price: 8 },
          { name: 'Forehead', price: 10 },
          { name: 'Skin Fade', price: 12 },
          { name: 'Neck', price: 12 },
          { name: 'Full Face', price: 40 },
        ],
      },
    ],
  },

  {
    id: 'brows-lashes',
    name: 'Brows & Lashes',
    tagline: 'Defined brows, beautiful lashes',
    description:
      'Brow artistry and lash treatments — tint, henna, laminate, lifts and full lash sets applied with meticulous care for wide-awake, defined eyes.',
    image: {
      src: IMG('1589710751893-f9a6770ad71b'),
      alt: 'Beautifully defined brows and lashes after treatment',
    },
    fromPrice: 12,
    whatsappContext:
      'Hello, I would like to enquire about brows & lashes services.',
    groups: [
      {
        items: [
          { name: 'Eyebrow Tint', price: 12 },
          { name: 'Eyelash Tint', price: 18 },
          { name: 'Eyebrow Henna', price: 30 },
          { name: 'Eyebrow Laminate', price: 45 },
          { name: 'Lash Lift', price: 60 },
          { name: 'Semi-Permanent Lashes', price: 45 },
          { name: 'Individual Lashes', price: 60, from: true },
          { name: 'Classic Set', price: 50 },
          { name: 'Hybrid Set', price: 70, from: true },
          { name: 'Russian Set', price: 80, from: true },
          { name: 'Lash Removal', price: 15 },
        ],
      },
    ],
  },

  {
    id: 'facials',
    name: 'Facials',
    tagline: 'Radiance, restored',
    description:
      'Results-driven facials tailored to your skin — from a refreshing clean-up to our signature Gold Facial and advanced Hydrafacial with LED therapy.',
    image: {
      src: IMG('1570172619644-dfd03ed5d881'),
      alt: 'Woman receiving a relaxing facial treatment in a spa',
    },
    fromPrice: 25,
    whatsappContext: 'Hello, I would like to enquire about your facials.',
    groups: [
      {
        items: [
          { name: 'Regular Clean up', price: 40 },
          { name: 'Luxury Simple Facial', note: '45mins', price: 50 },
          { name: 'Deep Cleansing Facial', note: '60mins', price: 70 },
          { name: 'Gold Facial', note: '1hr', price: 90 },
          { name: 'Hydrafacial with LED Therapy', price: 120 },
          { name: 'Full Face Bleach', price: 25 },
        ],
      },
    ],
  },

  {
    id: 'massage',
    name: 'Massage',
    tagline: 'Deep calm, released tension',
    description:
      'Unwind with therapeutic massage — from a quick head massage reset to our Ultimate Relaxation full-body experience.',
    image: {
      src: IMG('1544161515-4ab6ce6db874'),
      alt: 'Relaxing back massage treatment in a calm spa setting',
    },
    fromPrice: 20,
    whatsappContext: 'Hello, I would like to book a massage.',
    groups: [
      {
        items: [
          { name: 'Head Massage', note: '15mins', price: 20 },
          { name: 'Back, Neck & Shoulder', note: '30mins', price: 35 },
          {
            name: 'Ultimate Relaxation Full Body Massage',
            note: '1hr',
            price: 70,
          },
        ],
      },
    ],
  },

  {
    id: 'makeup',
    name: 'Make Up',
    tagline: 'Occasion-ready glamour',
    description:
      'Flawless makeup artistry for every occasion — from a party-ready glam to complete bridal looks with trials, using premium, long-wear products.',
    image: {
      src: '/images/makeup-bridal.jpg',
      alt: 'Bridal makeup application with veil and tiara',
    },
    fromPrice: 30,
    whatsappContext: 'Hello, I would like to enquire about makeup services.',
    groups: [
      {
        items: [
          { name: 'Full Face Glam', price: 50 },
          { name: 'Party Make up', price: 50, from: true },
          { name: 'Bridal Trials', price: 60 },
          { name: 'Bridal Makeup', price: 150, from: true },
          { name: 'Eye Makeup', price: 30 },
        ],
      },
    ],
  },

  {
    id: 'ear-candling',
    name: 'Ear Candling',
    tagline: 'Gentle, traditional care',
    description:
      'Traditional Hopi ear candling — a calm, gentle treatment to soothe and relax.',
    image: {
      src: IMG('1600721391776-b5cd0e0048f9'),
      alt: 'Calm, relaxing treatment room',
    },
    fromPrice: 30,
    whatsappContext: 'Hello, I would like to book Hopi ear candling.',
    groups: [
      {
        items: [{ name: 'Hopi Ear Candling', price: 30 }],
      },
    ],
  },

  {
    id: 'piercings',
    name: 'Piercings',
    tagline: 'Safe, professional piercing',
    description:
      'Professional ear and nose piercing carried out with care, plus aftercare to keep you comfortable.',
    image: {
      src: IMG('1600721391776-b5cd0e0048f9'),
      alt: 'Close-up of an ear with an elegant gold earring',
    },
    fromPrice: 15,
    whatsappContext: 'Hello, I would like to enquire about piercing.',
    groups: [
      {
        items: [
          { name: 'Ear Piercing', price: 50 },
          { name: 'Nose Piercing', price: 40 },
          { name: 'Aftercare Lotion', price: 15 },
        ],
      },
    ],
  },

  {
    id: 'waxing',
    name: 'Waxing',
    tagline: 'Smooth, gentle, thorough',
    description:
      'Professional waxing for face and body using premium wax for a smooth, comfortable finish — from delicate facial areas to full-body treatments.',
    image: {
      src: IMG('1661308675370-31455561e15e'),
      alt: 'Smooth, hair-free skin after a professional wax',
    },
    fromPrice: 10,
    whatsappContext: 'Hello, I would like to enquire about waxing services.',
    groups: [
      {
        items: [
          { name: 'Eyebrow Waxing', price: 18 },
          { name: 'Upper Lip', price: 10 },
          { name: 'Chin', price: 10 },
          { name: 'Side Face', price: 12 },
          { name: 'Neck', price: 12 },
          { name: 'Forehead', price: 10 },
          { name: 'Nose', price: 10 },
          { name: 'Full Face', price: 45 },
          { name: 'Underarm', price: 15 },
          { name: 'Half Arm', price: 12 },
          { name: 'Full Arm', price: 22 },
          { name: 'Half Leg', note: 'ankles to knees', price: 22 },
          { name: 'Full Leg', note: 'ankles to hips', price: 45 },
          { name: 'Full Leg & Bikini', price: 55 },
          { name: 'Bikini', price: 20 },
          { name: 'Brazilian', price: 30 },
          { name: 'Hollywood', price: 40 },
          { name: 'Full Back', price: 30 },
          { name: 'Chest', price: 25 },
          { name: 'Tummy', price: 15 },
          { name: 'Full Body', note: 'including face', price: 160 },
        ],
      },
    ],
  },

  {
    id: 'natural-nails',
    name: 'Natural Nails',
    tagline: 'Clean, classic, cared-for',
    description:
      'Manicures and pedicures with regular polish — precise, beautifully finished natural nails.',
    image: {
      src: IMG('1604654894610-df63bc536371'),
      alt: 'Close-up of elegant manicured natural nails',
    },
    fromPrice: 20,
    whatsappContext: 'Hello, I would like to book a natural nails appointment.',
    groups: [
      {
        items: [
          { name: 'Mini Manicure', note: 'with regular polish', price: 20 },
          { name: 'Mini Pedicure', note: 'with regular polish', price: 22 },
          { name: 'Full Manicure', note: 'with regular polish', price: 25 },
          { name: 'Full Pedicure', note: 'with regular polish', price: 40 },
        ],
      },
    ],
  },

  {
    id: 'shellac-gel',
    name: 'Shellac & Gel Polish',
    tagline: 'Long-lasting, high-shine colour',
    description:
      'High-shine, long-lasting shellac and gel polish for hands and feet, including French finishes.',
    image: {
      src: IMG('1604654894610-df63bc536371'),
      alt: 'Glossy shellac gel polish manicure',
    },
    fromPrice: 5,
    whatsappContext: 'Hello, I would like to book a shellac / gel appointment.',
    groups: [
      {
        items: [
          { name: 'Mini Manicure', price: 30 },
          { name: 'Full Manicure', price: 35 },
          { name: 'Mini Pedicure', price: 32 },
          { name: 'Full Pedicure', price: 45 },
          { name: 'French Shellac Hands', price: 32 },
          { name: 'French Shellac Feet', price: 35 },
          { name: 'Shellac Take off', price: 10 },
          { name: 'Shellac Repair', price: 5, from: true },
        ],
      },
    ],
  },

  {
    id: 'nail-extensions',
    name: 'Nail Extensions',
    tagline: 'Sculpted, statement nails',
    description:
      'Statement acrylic and builder gel extensions — full sets, ombre, French, chrome and more, sculpted with precision.',
    image: {
      src: IMG('1604654894610-df63bc536371'),
      alt: 'Close-up of sculpted acrylic nail extensions',
    },
    fromPrice: 10,
    whatsappContext: 'Hello, I would like to book nail extensions.',
    groups: [
      {
        items: [
          { name: 'Full Set Acrylic', price: 45 },
          { name: 'Full Set Ombre', price: 50 },
          { name: 'Full Set French', price: 42 },
          { name: 'Chrome Nails', price: 33 },
          { name: 'Infills', price: 35 },
          { name: 'Toes Extension', price: 35 },
          { name: 'Full Set Toes & French', price: 42 },
          { name: 'Overlays', price: 35 },
          { name: 'Builder Gel', price: 30 },
          { name: 'Builder Gel Extensions', price: 40 },
          { name: 'Builder Gel Extensions with French', price: 43 },
          { name: 'Builder Gel French', price: 35 },
          { name: 'Take off Acrylic', price: 15 },
          { name: 'Acrylic Repair', price: 10 },
        ],
      },
    ],
  },

  {
    id: 'extra',
    name: 'Extra',
    tagline: 'Finishing touches',
    description:
      'Add-on finishing touches to make your nails your own — gems, stones, polish stickers, foil and glitters.',
    image: {
      src: IMG('1604654894610-df63bc536371'),
      alt: 'Decorative nail art finishing touches',
    },
    fromPrice: 5,
    whatsappContext: 'Hello, I would like to enquire about nail extras.',
    groups: [
      {
        items: [
          {
            name: 'Extras',
            note: 'Gems, Stones, Polish Stickers, Foil, Glitters',
            price: 5,
            from: true,
          },
        ],
      },
    ],
  },
];

// Convenience: the headline categories shown in the Services showcase.
export const featuredServiceIds = [
  'threading',
  'brows-lashes',
  'facials',
  'waxing',
  'massage',
  'makeup',
  'nail-extensions',
];
