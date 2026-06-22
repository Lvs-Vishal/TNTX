import { useMemo } from 'react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

// ==========================================
// THREAD LINES (Pure CSS – replaces Canvas particles)
// ==========================================
export const ThreadLines = () => {
  const threads = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      width: 30 + (i * 17) % 50,
      top: (i * 5.5) % 100,
      left: (i * 5.8) % 100,
      rotation: (i * 23) % 180,
      duration: 12 + (i * 3.7) % 16,
      delay: -(i * 2.1),
      opacity: 0.06 + (i % 3) * 0.03,
      color: i % 2 === 0 ? '#C8500A' : '#8a3808'
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        overflow: 'hidden', pointerEvents: 'none',
        zIndex: 0
      }}
    >
      {threads.map(t => (
        <div
          key={t.id}
          style={{
            position: 'absolute',
            top: `${t.top}%`,
            left: `${t.left}%`,
            width: `${t.width}px`,
            height: '1px',
            background: t.color,
            opacity: t.opacity,
            transform: `rotate(${t.rotation}deg)`,
            animation: `threadFloat ${t.duration}s ${t.delay}s linear infinite`
          }}
        />
      ))}
    </div>
  );
};

// ==========================================
// LOOM WHEEL (Pure SVG + CSS spin)
// ==========================================
export const LoomWheel = () => {
  const spokes = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => {
      const angle = (i / 24) * Math.PI * 2;
      return {
        x2: 190 + Math.cos(angle) * 180,
        y2: 190 + Math.sin(angle) * 180,
      };
    });
  }, []);

  return (
    <svg viewBox="0 0 380 380" className="loom-wheel" aria-hidden="true">
      <circle cx="190" cy="190" r="179" fill="none" stroke="#C8500A" strokeWidth="0.8" />
      <circle cx="190" cy="190" r="20" fill="none" stroke="#C8500A" strokeWidth="0.8" />
      {spokes.map((s, i) => (
        <line key={i} x1="190" y1="190" x2={s.x2} y2={s.y2} stroke="#C8500A" strokeWidth="0.5" />
      ))}
    </svg>
  );
};

// ==========================================
// HERO HEADLINE SPLIT TEXT (Pure CSS, no Framer Motion)
// ==========================================
export const SplitTextReveal = ({ text, delay = 0, className = "" }) => {
  const words = text.split(" ");

  return (
    <span
      className={className}
      style={{ display: "inline-block" }}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block"
          style={{
            opacity: 0,
            transform: "translateY(40px)",
            filter: "blur(4px)",
            animation: `splitReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            animationDelay: `${delay + idx * 0.12}s`,
            marginRight: "0.25em"
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

// ==========================================
// REVEAL SECTION (Pure CSS + IntersectionObserver)
// ==========================================
export const RevealSection = ({ children, className = "" }) => {
  const ref = useRevealOnScroll();
  return (
    <div ref={ref} className={`reveal-block ${className}`}>
      {children}
    </div>
  );
};
