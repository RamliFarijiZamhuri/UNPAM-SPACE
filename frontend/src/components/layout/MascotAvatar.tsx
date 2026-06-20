import React from 'react';

interface MascotAvatarProps {
  className?: string;
  size?: number | string;
  gender?: 'pria' | 'wanita';
  mood?: 'thumbs_up' | 'normal';
}

export const MascotAvatar: React.FC<MascotAvatarProps> = ({
  className = '',
  size = 48,
  gender = 'pria',
  mood = 'thumbs_up'
}) => {
  // If wanita is selected, we render a beautiful hijab/modest student mascot matching the uploaded hijab mascot illustration (the 5th one)
  if (gender === 'wanita') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        id="unpam-space-mascot-hijab"
      >
        <defs>
          <linearGradient id="hijab-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="shirt-grad-w" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="face-grad-w" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD8BE" />
            <stop offset="100%" stopColor="#F3B08E" />
          </linearGradient>
        </defs>

        {/* Outer Circular Soft Blue Glow or Background */}
        <circle cx="60" cy="60" r="54" fill="#EEF2F6" stroke="#E2E8F0" strokeWidth="2" />

        {/* Hijab Drape Back */}
        <path d="M35 55 C35 30, 85 30, 85 55 C85 85, 35 85, 35 55 Z" fill="#8B5CF6" />

        {/* Shoulders & Hijab Bottom */}
        <path
          d="M 25 105 
             C 25 85, 40 80, 60 80 
             C 80 80, 95 85, 95 105 
             Z"
          fill="url(#shirt-grad-w)"
        />

        {/* Hijab Front Frame */}
        <path
          d="M 60 22 
             C 38 22, 34 44, 34 60 
             C 34 75, 42 90, 60 98 
             C 78 90, 86 75, 86 60 
             C 86 44, 82 22, 60 22 
             Z"
          fill="url(#hijab-grad)"
        />

        {/* Inner Face Cutout */}
        <path
          d="M 60 30 
             C 47 30, 44 42, 44 55 
             C 44 68, 50 76, 60 76 
             C 70 76, 76 68, 76 55 
             C 76 42, 73 30, 60 30 
             Z"
          fill="url(#face-grad-w)"
        />

        {/* Hijab Inner Wrap Fold */}
        <path d="M44 55 C46 45, 54 36, 60 36 C66 36, 74 45, 76 55" stroke="#7C3AED" strokeWidth="1.5" fill="none" />

        {/* Big expressive anime eyes */}
        {/* Left eye */}
        <ellipse cx="52" cy="52" rx="3.5" ry="5" fill="#1E293B" />
        <circle cx="50.5" cy="50" r="1.2" fill="#FFFFFF" />
        <path d="M48 47 C50 45, 54 45, 56 47" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Right eye */}
        <ellipse cx="68" cy="52" rx="3.5" ry="5" fill="#1E293B" />
        <circle cx="66.5" cy="50" r="1.2" fill="#FFFFFF" />
        <path d="M64 47 C66 45, 70 45, 72 47" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Smiling Mouth */}
        <path d="M54 62 C54 62, 60 67, 66 62" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M54 62 Q60 69 66 62 Z" fill="#EF4444" />

        {/* Blushing cheeks */}
        <circle cx="47" cy="58" r="3" fill="#FCA5A5" opacity="0.6" />
        <circle cx="73" cy="58" r="3" fill="#FCA5A5" opacity="0.6" />

        {/* Hijab Drooping Drape Overlay (front tie) */}
        <path
          d="M 52 85 
             C 52 85, 48 105, 46 112 
             C 54 112, 66 112, 74 112 
             C 72 105, 68 85, 68 85 
             Z"
          fill="#7C3AED"
        />
        
        {/* Cute brown shoulder bag strap */}
        <path d="M28 105 L42 84" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M42 84 L40 82" stroke="#F59E0B" strokeWidth="4" />
      </svg>
    );
  }

  // Male mascot wearing the blue hoodie giving a thumbs up!
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      id="unpam-space-mascot-hoodie"
    >
      <defs>
        <linearGradient id="hoodie-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="face-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD3B6" />
          <stop offset="100%" stopColor="#F9A474" />
        </linearGradient>
        <linearGradient id="hair-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Circle background for nice centering */}
      <circle cx="60" cy="60" r="54" fill="#EEF2F6" stroke="#E2E8F0" strokeWidth="2" />

      {/* Grey backpack background */}
      <path
        d="M 32 75 
           L 26 120 
           L 44 120 
           L 38 75 
           Z"
        fill="#64748B"
        stroke="#475569"
        strokeWidth="1"
      />
      <path
        d="M 88 75 
           L 94 120 
           L 76 120 
           L 82 75 
           Z"
        fill="#64748B"
        stroke="#475569"
        strokeWidth="1"
      />

      {/* Main Body (Vibrant Blue Hoodie) */}
      <path
        d="M 28 120 
           C 28 85, 42 74, 60 74 
           C 78 74, 92 85, 92 120 
           Z"
        fill="url(#hoodie-grad)"
        filter="url(#soft-shadow)"
      />

      {/* Backpack straps on the hoodie */}
      <path
        d="M 38 76 
           C 38 76, 36 94, 38 115"
        stroke="#475569"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 82 76 
           C 82 76, 84 94, 82 115"
        stroke="#475569"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Inner face / neck connection */}
      <path d="M 52 74 H 68 V 85 H 52 Z" fill="#F9A474" />

      {/* Hood Opening (Blue Collar fold) */}
      <path
        d="M 40 76 
           C 40 76, 50 64, 60 64 
           C 70 64, 80 76, 80 76 
           C 80 76, 70 85, 60 85 
           C 50 85, 40 76, 40 76 
           Z"
        fill="#2563EB"
        stroke="#1D4ED8"
        strokeWidth="1.5"
      />

      {/* Hoodie white strings */}
      <path d="M 54 82 L 54 98" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="54" cy="99" r="2" fill="#FFFFFF" />
      
      <path d="M 66 82 L 66 98" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="66" cy="99" r="2" fill="#FFFFFF" />

      {/* Face */}
      <path
        d="M 42 45 
           C 42 32, 48 24, 60 24 
           C 72 24, 78 32, 78 45 
           C 78 58, 72 66, 60 66 
           C 48 66, 42 58, 42 45 
           Z"
        fill="url(#face-grad)"
      />

      {/* Friendly pointed ears */}
      <path d="M 42 42 C40 42, 38 46, 42 48" fill="#F9A474" />
      <path d="M 78 42 C80 42, 82 46, 78 48" fill="#F9A474" />

      {/* Mascot's Hair (Spiky / Styled Black college student hair) */}
      <path
        d="M 40 42 
           C 38 32, 44 18, 60 18 
           C 76 18, 82 32, 80 42 
           C 77 38, 74 34, 70 34 
           C 65 34, 63 38, 60 38 
           C 57 38, 55 34, 50 34 
           C 46 34, 43 38, 40 42 
           Z"
        fill="url(#hair-grad)"
      />

      {/* Spiky bits at the top of the hair for 3D render feel */}
      <path d="M 50 18 Q 52 14 55 17 Q 58 14 62 17 Q 66 14 68 18" fill="#1E293B" />

      {/* Friendly, cute cartoon eyes */}
      <ellipse cx="51" cy="42" rx="3.5" ry="4.5" fill="#1E293B" />
      <circle cx="49.5" cy="40.5" r="1.2" fill="#FFFFFF" />

      <ellipse cx="69" cy="42" rx="3.5" ry="4.5" fill="#1E293B" />
      <circle cx="67.5" cy="40.5" r="1.2" fill="#FFFFFF" />

      {/* Eyebrows */}
      <path d="M 46 36 C48 34, 53 34, 55 36" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 65 36 C67 34, 72 34, 74 36" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Wide happy smile (showing neat white teeth and red tongue) */}
      <path
        d="M 52 51 
           Q 60 58 68 51"
        stroke="#1E293B"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Curved smile cutout with teeth */}
      <path
        d="M 52 51 
           Q 60 60 68 51 
           Z"
        fill="#E11D48"
      />
      {/* Teeth white bar */}
      <path
        d="M 53.5 52.2 
           Q 60 55 66.5 52.2 
           L 66 53.5 
           Q 60 56 54 53.5 
           Z"
        fill="#FFFFFF"
      />

      {/* Rosy blush */}
      <circle cx="46" cy="48" r="2.5" fill="#EF4444" opacity="0.32" />
      <circle cx="74" cy="48" r="2.5" fill="#EF4444" opacity="0.32" />

      {/* 3D THUMBS-UP ARM & HAND GESTURE (Mood selection) */}
      {mood === 'thumbs_up' && (
        <g filter="url(#soft-shadow)">
          {/* Sleeve reaching out */}
          <path
            d="M 32 100 
               C 22 92, 16 80, 16 75 
               C 16 68, 26 72, 34 84 
               Z"
            fill="url(#hoodie-grad)"
            stroke="#1D4ED8"
            strokeWidth="1"
          />

          {/* Skin fist/hand */}
          <circle cx="16" cy="73" r="5.5" fill="#F9A474" stroke="#D97706" strokeWidth="0.5" />
          
          {/* Thumb pointing up */}
          <path
            d="M 16 73 
               C 16 64, 11 61, 11 63 
               C 11 65, 14 74, 14 75 
               Z"
            fill="#FFD3B6"
            stroke="#D97706"
            strokeWidth="0.8"
          />

          {/* Curled fingers (fist folds) */}
          <path d="M 13 72 C12 72, 11 74, 13 75" stroke="#D97706" strokeWidth="1" />
          <path d="M 14 74 C13 74, 12 76, 14 77" stroke="#D97706" strokeWidth="1" />
          <path d="M 15 76 C14 76, 13 78, 15 79" stroke="#D97706" strokeWidth="1" />
        </g>
      )}
    </svg>
  );
};
