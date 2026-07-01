/* =========================================================================
   SERVICES & PRICING — single source of truth.

   Prices transcribed VERBATIM from the SK Unique Studio printed menu.
   Do NOT invent or estimate prices. `price` is a number in GBP.
   `from: true` renders a "from £X" label.

   ⚠️  ONE SECTION NEEDS OWNER CONFIRMATION:
   The bottom ~5 lines of "Nail Extensions" were hidden by the iOS share
   overlay in the supplied photo. Confirmed/readable lines are included
   below. The remaining lines are collected in `PENDING_CONFIRMATION` at the
   bottom of this file — fill them in and move them into the nails group.
   ========================================================================= */

// Images use curated REAL photography (Unsplash, free commercial licence).
// To use your own photos: drop files into /public/images and change `src`
// to e.g. "/images/nails.jpg". The <LazyImage> component shows an elegant
// gradient if any image fails to load, so nothing ever looks broken.
const IMG = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const serviceCategories = [
  {
    id: 'nails',
    name: 'Nails',
    tagline: 'Sculpted, flawless, unmistakably you',
    description:
      'From natural manicures to statement acrylic extensions, our nail artistry blends precision with the finest gels and finishes for a look that lasts.',
    image: {
      src: IMG('1604654894610-df63bc536371'),
      alt: 'Close-up of elegant manicured nails with glossy polish',
    },
    fromPrice: 20,
    whatsappContext: 'Hello, I would like to book a nail appointment.',
    groups: [
      {
        title: 'Natural Nails',
        items: [
          { name: 'Mini Manicure', note: 'with regular polish', price: 20 },
          { name: 'Mini Pedicure', note: 'with regular polish', price: 22 },
          { name: 'Full Manicure', note: 'with regular polish', price: 25 },
          { name: 'Full Pedicure', note: 'with regular polish', price: 40 },
        ],
      },
      {
        title: 'Shellac & Gel Polish',
        items: [
          { name: 'Mini Manicure', price: 30 },
          { name: 'Full Manicure', price: 35 },
          { name: 'Mini Pedicure', price: 32 },
          { name: 'Full Pedicure', price: 45 },
          { name: 'French Shellac Hands', price: 32 },
          { name: 'French Shellac Feet', price: 35 },
          { name: 'Shellac Take Off', price: 10 },
          { name: 'Shellac Repair', price: 5, from: true },
        ],
      },
      {
        title: 'Nail Extensions',
        items: [
          { name: 'Full Set Acrylic', price: 45 },
          { name: 'Full Set Ombre', price: 50 },
          { name: 'Full Set French', price: 42 },
          { name: 'Chrome Nails', price: 33 },
          { name: 'Infills', price: 35 },
          { name: 'Toes Extension', price: 35 },
          { name: 'Full Set Toes & French', price: 42 },
          // ⚠️ Remaining lines were hidden in the supplied photo —
          //    see PENDING_CONFIRMATION at the bottom of this file.
        ],
      },
      {
        title: 'Finishing Touches',
        items: [
          {
            name: 'Extras',
            note: 'Gems, Stones, Polish Stickers, Foil, Glitters',
            price: 15,
            from: true,
          },
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
        title: 'Facials & Skin',
        items: [
          { name: 'Regular Clean Up', price: 40 },
          { name: 'Luxury Simple Facial', note: '45 mins', price: 50 },
          { name: 'Deep Cleansing Facial', note: '60 mins', price: 70 },
          { name: 'Gold Facial', note: '1 hr', price: 90 },
          { name: 'Hydrafacial with LED Therapy', price: 120 },
          { name: 'Full Face Bleach', price: 25 },
        ],
      },
    ],
  },

  {
    id: 'brows',
    name: 'Brows & Threading',
    tagline: 'Framed to perfection',
    description:
      'Expert threading and brow artistry — precise shaping, tinting, henna and laminate to define your features with clean, natural symmetry.',
    image: {
      src: IMG('1519415387722-a1c3bbef716c'),
      alt: 'Eyebrow threading treatment in progress',
    },
    fromPrice: 8,
    whatsappContext:
      'Hello, I would like to enquire about eyebrow / threading services.',
    groups: [
      {
        title: 'Threading',
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
      {
        title: 'Brow Treatments',
        items: [
          { name: 'Eyebrow Tint', price: 12 },
          { name: 'Eyebrow Henna', price: 30 },
          { name: 'Eyebrow Laminate', price: 45 },
        ],
      },
    ],
  },

  {
    id: 'lashes',
    name: 'Lashes',
    tagline: 'Effortless, wide-awake eyes',
    description:
      'From a natural lash lift to full-volume Russian sets, our lash treatments are applied with meticulous care for beautiful, long-lasting definition.',
    image: {
      src: IMG('1589710751893-f9a6770ad71b'),
      alt: 'Eyelash extension application close-up',
    },
    fromPrice: 15,
    whatsappContext: 'Hello, I would like to book an eyelash appointment.',
    groups: [
      {
        title: 'Lashes',
        items: [
          { name: 'Eyelash Tint', price: 18 },
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
        title: 'Face',
        items: [
          { name: 'Eyebrow Waxing', price: 18 },
          { name: 'Upper Lip', price: 10 },
          { name: 'Chin', price: 10 },
          { name: 'Side Face', price: 12 },
          { name: 'Neck', price: 12 },
          { name: 'Forehead', price: 10 },
          { name: 'Nose', price: 10 },
          { name: 'Full Face', price: 45 },
        ],
      },
      {
        title: 'Body',
        items: [
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
        title: 'Massage',
        items: [
          { name: 'Head Massage', note: '15 mins', price: 20 },
          { name: 'Back, Neck & Shoulder', note: '30 mins', price: 35 },
          {
            name: 'Ultimate Relaxation Full Body Massage',
            note: '1 hr',
            price: 70,
          },
        ],
      },
    ],
  },

  {
    id: 'makeup',
    name: 'Makeup',
    tagline: 'Occasion-ready glamour',
    description:
      'Flawless makeup artistry for every occasion — from a party-ready glam to complete bridal looks with trials, using premium, long-wear products.',
    image: {
      src: IMG('1602910344008-22f323cc1817'),
      alt: 'Makeup artist applying makeup to a client',
    },
    fromPrice: 30,
    whatsappContext: 'Hello, I would like to enquire about makeup services.',
    groups: [
      {
        title: 'Make Up',
        items: [
          { name: 'Full Face Glam', price: 50 },
          { name: 'Party Make Up', price: 50, from: true },
          { name: 'Bridal Trials', price: 60 },
          { name: 'Bridal Makeup', price: 150, from: true },
          { name: 'Eye Makeup', price: 30 },
        ],
      },
    ],
  },

  {
    id: 'more',
    name: 'Piercings & Candling',
    tagline: 'Signature extras',
    description:
      'Complete your visit with our additional treatments — traditional Hopi ear candling and professional ear & nose piercing with aftercare.',
    image: {
      src: IMG('1600721391776-b5cd0e0048f9'),
      alt: 'Close-up of an ear with an elegant gold earring',
    },
    fromPrice: 15,
    whatsappContext:
      'Hello, I would like to enquire about piercing / ear candling.',
    groups: [
      {
        title: 'Ear Candling',
        items: [{ name: 'Hopi Ear Candling', price: 30 }],
      },
      {
        title: 'Piercings',
        items: [
          { name: 'Ear Piercing', price: 50 },
          { name: 'Nose Piercing', price: 40 },
          { name: 'Aftercare Lotion', price: 15 },
        ],
      },
    ],
  },
];

/* -------------------------------------------------------------------------
   ⚠️ OWNER: please confirm the Nail Extensions lines hidden in the photo.
   The last visible partial line read "Over…  £35" (likely "Overlay").
   Add the correct name/price for each, then move them into the
   nails → "Nail Extensions" group above. Nothing here is displayed on the
   site until you move it up, so no guessed prices are ever shown.
   ------------------------------------------------------------------------- */
export const PENDING_CONFIRMATION = [
  // { name: 'Overlay', price: 35 },
  // { name: '???',     price: 0 },
  // { name: '???',     price: 0 },
  // { name: '???',     price: 0 },
];

// Convenience: the 7 headline categories shown in the Services showcase.
export const featuredServiceIds = [
  'nails',
  'facials',
  'brows',
  'lashes',
  'waxing',
  'massage',
  'makeup',
];
