import { useEffect, useRef } from 'react';

export function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect(); // fire ONCE only — then stop observing
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect(); // cleanup on unmount
  }, [threshold]);

  return ref;
}
