import React from 'react';

export const BackgroundLayers = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 2. LOOM THREAD GRID - ANIMATED SVG BACKGROUND */}
      <svg className="absolute inset-[-100px] w-[calc(100%+200px)] h-[calc(100%+200px)] opacity-[0.04] animate-loom-drift">
        <defs>
          <pattern
            id="loom-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal ochre */}
            <line x1="0" y1="20" x2="40" y2="20" stroke="#D4A017" strokeWidth="0.5" />
            {/* Vertical rust */}
            <line x1="20" y1="0" x2="20" y2="40" stroke="#A0522D" strokeWidth="0.5" />
            {/* Intersection circle */}
            <circle cx="20" cy="20" r="1.5" fill="#D4A017" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#loom-pattern)" />
      </svg>

      {/* 3. RADIAL VIGNETTE */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(8,7,5,0.85) 100%)"
        }}
      />

      {/* 24. BOTTOM-LEFT AMBIENT GLOW */}
      <div className="ambient-glow-left" />

      {/* 25. TOP-RIGHT AMBIENT GLOW */}
      <div className="ambient-glow-right" />
    </div>
  );
};
