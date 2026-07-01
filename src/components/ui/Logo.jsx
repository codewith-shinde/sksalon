import { useState } from 'react';
import './Logo.css';

/**
 * Brand logo, using the real supplied assets:
 *   /logo.png       → full lockup (emblem + wordmark + tagline)  [hero]
 *   /logo-mark.png  → emblem only (crown + face + SK)            [nav/footer]
 *
 * variant: 'full' (emblem mark + rendered wordmark) | 'mark' | 'hero' (full lockup)
 * tone: 'dark' (default, for light bg) | 'light' (for dark bg)
 */
export default function Logo({ variant = 'full', tone = 'dark', className = '' }) {
  const [markOk, setMarkOk] = useState(true);
  const [fullOk, setFullOk] = useState(true);

  // Hero: the complete lockup, presented large.
  if (variant === 'hero') {
    return (
      <span className={`logo logo--hero ${className}`}>
        {fullOk ? (
          <img
            className="logo__full"
            src="/logo.jpg"
            alt="SK Unique Studio — Beauty, Confidence, You"
            width="560"
            height="549"
            fetchpriority="high"
            onError={() => setFullOk(false)}
          />
        ) : (
          <span className="logo__mark logo__mark--big" aria-hidden="true">
            SK
          </span>
        )}
      </span>
    );
  }

  // Nav / footer: emblem mark + rendered wordmark for a clean horizontal lockup.
  return (
    <span className={`logo logo--${variant} logo--${tone} ${className}`}>
      {markOk ? (
        <img
          className="logo__img"
          src="/logo-mark.jpg"
          alt="SK Unique Studio"
          width="54"
          height="50"
          onError={() => setMarkOk(false)}
        />
      ) : (
        <span className="logo__mark" aria-hidden="true">
          SK
        </span>
      )}

      {variant !== 'mark' && (
        <span className="logo__word">
          <span className="logo__name">SK Unique Studio</span>
          <span className="logo__tag">Beauty · Confidence · You</span>
        </span>
      )}
    </span>
  );
}
