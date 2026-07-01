import Icon from './Icon';
import './Stars.css';

/** Star rating display. Supports half stars. */
export default function Stars({ rating = 5, size = 18, label }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span
      className="stars"
      role="img"
      aria-label={label || `${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const isHalf = i === full && half;
        return (
          <span key={i} className={`stars__item ${i < full ? 'is-full' : ''}`}>
            {isHalf ? (
              <span className="stars__half">
                <Icon name="star" size={size} className="stars__bg" />
                <span className="stars__clip">
                  <Icon name="star" size={size} className="stars__fg" />
                </span>
              </span>
            ) : (
              <Icon
                name="star"
                size={size}
                className={i < full ? 'stars__fg' : 'stars__bg'}
              />
            )}
          </span>
        );
      })}
    </span>
  );
}
