import { useEffect } from 'react';

/** Lock body scroll while `locked` is true (e.g. mobile menu / lightbox). */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    const scrollBarComp =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollBarComp > 0) {
      document.body.style.paddingRight = `${scrollBarComp}px`;
    }
    return () => {
      document.body.style.overflow = original;
      document.body.style.paddingRight = '';
    };
  }, [locked]);
}
