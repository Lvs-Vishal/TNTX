import React from 'react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

// ==========================================
// 9. SECTION HEADINGS — REVEAL WIPE (Pure CSS)
// ==========================================
export const RevealHeading = ({ children, className = "" }) => {
  const ref = useRevealOnScroll();
  return (
    <div ref={ref} className={`reveal-block ${className}`}>
      {children}
    </div>
  );
};

// ==========================================
// 10. CONTENT CARDS — STAGGER RISE (Pure CSS)
// ==========================================
export const StaggerContainer = ({ children, className = "" }) => {
  const ref = useRevealOnScroll();
  return (
    <div ref={ref} className={`reveal-stagger ${className}`}>
      {children}
    </div>
  );
};

export const StaggerCard = ({ children, className = "" }) => {
  return (
    <div className={`relative group overflow-hidden ${className}`}>
      {/* Ochre left border on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-industrial-orange origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out z-10" />
      {children}
    </div>
  );
};

// ==========================================
// 11. THE PROBLEM SECTION — HORIZONTAL TEXT MARQUEE (Pure CSS)
// ==========================================
export const HorizontalMarquee = ({ text }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center select-none opacity-[0.04]">
      <div
        className="text-[120px] md:text-[180px] font-heading font-bold text-industrial-orange whitespace-nowrap"
        style={{ animation: "marqueeScroll 20s linear infinite" }}
      >
        {text} &middot; {text} &middot; {text} &middot; {text} &middot; {text} &middot; {text} &middot;{' '}
      </div>
    </div>
  );
};

// ==========================================
// 12. VALUE CHAIN SECTION — STAGGER REVEAL (Pure CSS)
// ==========================================
export const AnimatedValueChain = ({ items }) => {
  const ref = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className="chain-wrapper relative flex flex-wrap justify-center items-center gap-y-6 mb-16"
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center">
          {/* Chain node */}
          <div className="chain-node font-heading text-white bg-industrial-steel px-6 py-3 border border-industrial-zinc relative z-10 hover:border-industrial-orange/60 transition-all duration-300 hover:bg-industrial-steel/80">
            <span className="relative z-10">{item}</span>
          </div>

          {/* Arrow connector */}
          {i < items.length - 1 && (
            <div className="chain-arrow hidden sm:flex items-center w-12 relative">
              <div className="flex-1 h-[2px] bg-industrial-zinc relative overflow-hidden">
                {/* Animated orange fill */}
                <div className="chain-line-fill absolute inset-0 bg-industrial-orange origin-left" />
              </div>
              {/* Arrowhead */}
              <svg width="8" height="12" viewBox="0 0 8 12" className="chain-arrowhead flex-shrink-0 -ml-px">
                <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ==========================================
// 13. TESTIMONIALS (Pure CSS stagger, no parallax scroll listener)
// ==========================================
export const ParallaxTestimonials = ({ testimonials }) => {
  const ref = useRevealOnScroll();
  return (
    <div ref={ref} className="reveal-stagger grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-industrial-steel border border-industrial-zinc p-6 relative group"
        >
          {/* Quote Mark */}
          <div className="mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-industrial-orange/30">
              <path d="M10 11L8 15H11V19H5V15L7 11H5V7H10V11ZM20 11L18 15H21V19H15V15L17 11H15V7H20V11Z" fill="currentColor" />
            </svg>
          </div>

          <p className="font-body text-industrial-smoke mb-6">"{t.quote}"</p>
          <div className="border-t border-industrial-zinc pt-4">
            <p className="font-heading text-white text-sm">{t.name}</p>
            <p className="font-body text-industrial-smoke text-xs">{t.role}</p>
            <p className="font-body text-industrial-orange text-xs">{t.loc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
