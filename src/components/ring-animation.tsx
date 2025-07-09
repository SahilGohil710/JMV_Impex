
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ParticleAnimation } from './particle-animation';

export function RingAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animationValues, setAnimationValues] = useState({
    ringScale: 0.1,
    ringOpacity: 0,
    textOpacity: 0,
    textScale: 0.8,
    particleOpacity: 0,
  });

  const numCycles = 3;

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;

      if (top > 0) {
        setAnimationValues({ ringScale: 0.1, ringOpacity: 0, textOpacity: 0, textScale: 0.8, particleOpacity: 0 });
        return;
      }
      if (top < -scrollableHeight) {
        setAnimationValues({ ringScale: 0.1, ringOpacity: 0, textOpacity: 1, textScale: 1, particleOpacity: 0 });
        return;
      }

      const progress = Math.min(1, Math.max(0, -top / scrollableHeight));
      
      const progressPerCycle = 1.0 / numCycles;
      const currentCycleIndex = Math.floor(progress / progressPerCycle);
      
      if (currentCycleIndex >= numCycles) {
          setAnimationValues(prev => ({ ...prev, ringOpacity: 0, textOpacity: 1, textScale: 1, particleOpacity: 0 }));
          return;
      }
      
      const progressInCurrentCycle = (progress % progressPerCycle) / progressPerCycle;

      const ringScale = 0.1 + progressInCurrentCycle * 25;

      let ringOpacity = 0;
      const appearEnd = 0.05;
      const fadeStart = 0.25; 
      
      if (progressInCurrentCycle < appearEnd) {
        ringOpacity = progressInCurrentCycle / appearEnd;
      } else if (progressInCurrentCycle >= appearEnd && progressInCurrentCycle < fadeStart) {
        ringOpacity = 1;
      } else {
        ringOpacity = 1 - (progressInCurrentCycle - fadeStart) / (1 - fadeStart);
      }
      ringOpacity = Math.max(0, ringOpacity);

      const particleOpacity = ringOpacity;

      const textFadeStart = 0.85;
      const textProgress = (progress - textFadeStart) / (1 - textFadeStart);
      const textOpacity = Math.min(1, Math.max(0, textProgress));
      const textScale = 0.8 + Math.min(0.2, Math.max(0, textProgress * 0.2));

      setAnimationValues({
        ringScale,
        ringOpacity,
        textOpacity,
        textScale,
        particleOpacity,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[300vh] w-full bg-black">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden space-background">
        
        <div className="absolute inset-0 z-10">
          <ParticleAnimation opacity={animationValues.particleOpacity} />
        </div>
        
        <h2
          className="font-headline text-5xl md:text-7xl font-bold text-white text-center z-20"
          style={{ 
            opacity: animationValues.textOpacity,
            transform: `scale(${animationValues.textScale})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          JMV Impex
          <br/>
          <span className="text-2xl md:text-3xl text-slate-300 font-normal">Crafted for Generations</span>
        </h2>
        
        <div
          className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
          style={{
             opacity: animationValues.ringOpacity,
             willChange: 'transform, opacity',
          }}
        >
          <div style={{ transform: `scale(${animationValues.ringScale})` }}>
            <Image
                src="/images/HomePage/Copper_Ring.png"
                alt="Copper Ring Animation"
                width={100}
                height={100}
                priority
                data-ai-hint="copper ring"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
