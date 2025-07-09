'use client';

import { useEffect, useState } from 'react';

interface ParticleAnimationProps {
  count?: number;
}

export function ParticleAnimation({ count = 50 }: ParticleAnimationProps) {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Avoid running this on the server
    if (typeof window === 'undefined') return;

    const newParticles = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const animationDuration = Math.random() * 3 + 2; // 2s to 5s
      const animationDelay = Math.random() * 3; // delay up to 3s
      
      const angle = Math.random() * 360;
      const radius = Math.random() * 50 + 50;
      
      const startX = `calc(50vw + ${radius}vmax * ${Math.cos(angle * Math.PI / 180)})`;
      const startY = `calc(50vh + ${radius}vmax * ${Math.sin(angle * Math.PI / 180)})`;

      return (
        <div
          key={i}
          className="particle"
          style={{
            '--start-x': startX,
            '--start-y': startY,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
          }}
        />
      );
    });
    setParticles(newParticles);
  }, [count]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {particles}
    </div>
  );
}
