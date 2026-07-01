import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Gallery.css';
import SectionHeading from '../ui/SectionHeading';
import LazyImage from '../ui/LazyImage';
import Icon from '../ui/Icon';
import { galleryImages, galleryCategories } from '../../data/gallery';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into filtered list

  const filtered =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  useLockBodyScroll(lightbox !== null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i + 1) % filtered.length),
    [filtered.length]
  );
  const prev = useCallback(
    () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, close, next, prev]);

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              A glimpse of our <em>artistry</em>
            </>
          }
          subtitle="Real results and moments from the studio. Tap any image to view."
        />

        <div className="gallery__filters" role="group" aria-label="Filter gallery">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter ${filter === cat ? 'is-active' : ''}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="gallery__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.button
                layout
                key={img.src}
                className={`gallery__item ${
                  img.span ? `gallery__item--${img.span}` : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightbox(i)}
                aria-label={`View: ${img.alt}`}
              >
                <LazyImage src={img.src} alt={img.alt} />
                <span className="gallery__overlay">
                  <Icon name="plus" size={26} />
                  <span className="gallery__cat">{img.category}</span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button className="lightbox__btn lightbox__close" onClick={close} aria-label="Close">
              <Icon name="close" size={26} />
            </button>
            <button
              className="lightbox__btn lightbox__prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              <Icon name="arrowRight" size={26} style={{ transform: 'rotate(180deg)' }} />
            </button>

            <motion.figure
              className="lightbox__figure"
              key={filtered[lightbox].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                className="lightbox__img"
              />
              <figcaption className="lightbox__caption">
                {filtered[lightbox].alt}
                <span>
                  {lightbox + 1} / {filtered.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              className="lightbox__btn lightbox__next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              <Icon name="arrowRight" size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
