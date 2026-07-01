import { useState } from 'react';
import './LazyImage.css';

/**
 * Progressive image with:
 *  - native lazy-loading + async decoding
 *  - shimmer skeleton until loaded
 *  - elegant gradient fallback if the image fails (so nothing looks broken)
 *
 * props: src, alt, className, ratio (e.g. "3/4"), eager (bool), sizes
 */
export default function LazyImage({
  src,
  alt = '',
  className = '',
  ratio,
  eager = false,
  sizes,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const style = ratio ? { aspectRatio: ratio } : undefined;

  return (
    <div
      className={`lazyimg ${loaded ? 'is-loaded' : ''} ${
        failed ? 'is-failed' : ''
      } ${className}`}
      style={style}
      data-alt={alt}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={eager ? 'high' : 'auto'}
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          {...rest}
        />
      )}
    </div>
  );
}
