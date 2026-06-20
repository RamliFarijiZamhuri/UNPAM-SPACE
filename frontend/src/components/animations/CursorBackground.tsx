import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CursorBackground() {
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor follow lag
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Offset by half width
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Glow ball 1 */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-radial from-(--color-ice-tint) to-transparent opacity-60 blur-3xl"
        style={{
          x: springX,
          y: springY,
        }}
      />
      {/* Decorative ambient stationary rings */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-radial from-blue-50 to-transparent opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-120 h-120 rounded-full bg-radial from-teal-50 to-transparent opacity-30 blur-3xl pointer-events-none" />
    </div>
  );
}
