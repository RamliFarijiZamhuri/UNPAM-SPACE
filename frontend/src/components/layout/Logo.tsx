import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      id="unpam-space-brand-logo"
    >
      <defs>
        {/* Soft radial background glow for a 'space' vibe */}
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>

        {/* Left Ribbon: Royal Blue to Bright Cyan */}
        <linearGradient id="blueToCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        {/* Right Ribbon: Bright Cyan to Indigo/Purple */}
        <linearGradient id="cyanToPurple" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>

        {/* Gold Star Glow */}
        <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Drop shadow filter to create the overlapping 3D ribbon depth */}
        <filter id="ribbonShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="-1.5" dy="1.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* 1. Ambient Background Glow */}
      <circle cx="50" cy="50" r="45" fill="url(#bgGlow)" />

      {/* 2. Left Ribbon (Runs from top-left, curves down to bottom-center) */}
      <path
        d="M 20 20 
           L 20 54 
           C 20 70.5, 33.5 84, 50 84 
           L 50 70 
           C 38.4 70, 34 61.6, 34 54 
           L 34 20 
           Z"
        fill="url(#blueToCyan)"
      />

      {/* 3. Right Ribbon (Overlaps at bottom-center, curves up to top-right with 3D shadow) */}
      <path
        d="M 50 84 
           C 66.5 84, 80 70.5, 80 54 
           L 80 20 
           L 66 20 
           L 66 54 
           C 66 61.6, 61.6 70, 50 70 
           Z"
        fill="url(#cyanToPurple)"
        filter="url(#ribbonShadow)"
      />

      {/* 4. Space Sparkle Star Accent (Floating elegant 4-pointed star) */}
      <path
        d="M 83 8 
           Q 83 15, 90 15 
           Q 83 15, 83 22 
           Q 83 15, 76 15 
           Q 83 15, 83 8 
           Z"
        fill="url(#goldGlow)"
      />
    </svg>
  );
};
