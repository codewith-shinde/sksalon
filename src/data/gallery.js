/* Gallery images — curated REAL photography (Unsplash, free commercial licence),
   each verified to genuinely match its category. No salon-premises photos are
   used. Swap `src` with the salon's own photos in /public/images when ready. */

const IMG = (id, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const galleryCategories = [
  'All',
  'Nails',
  'Facials',
  'Lashes',
  'Brows',
  'Makeup',
  'Massage',
];

export const galleryImages = [
  {
    src: IMG('1604654894610-df63bc536371'),
    alt: 'Glossy manicured nails with elegant polish',
    category: 'Nails',
    span: 'tall',
  },
  {
    src: IMG('1589710751893-f9a6770ad71b'),
    alt: 'Eyelash extension application in progress',
    category: 'Lashes',
  },
  {
    src: IMG('1570172619644-dfd03ed5d881'),
    alt: 'Relaxing facial treatment with a mask',
    category: 'Facials',
    span: 'wide',
  },
  {
    src: '/images/makeup-bridal.jpg',
    alt: 'Bridal makeup application with veil and tiara',
    category: 'Makeup',
  },
  {
    src: '/images/threading-card.jpg',
    alt: 'Close-up of precise eyebrow threading in progress',
    category: 'Brows',
    span: 'tall',
  },
  {
    src: IMG('1522337660859-02fbefca4702'),
    alt: 'Fresh pink manicure with nail polish',
    category: 'Nails',
  },
  {
    src: IMG('1544161515-4ab6ce6db874'),
    alt: 'Relaxing oil massage treatment',
    category: 'Massage',
    span: 'wide',
  },
  {
    src: IMG('1674049406179-d7bf2c263e71'),
    alt: 'Precise eyelash extension application',
    category: 'Lashes',
  },
  {
    src: IMG('1515688594390-b649af70d282'),
    alt: 'Premium makeup products and brushes',
    category: 'Makeup',
  },
];
