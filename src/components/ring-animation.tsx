
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export function RingAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animationValues, setAnimationValues] = useState({
    ringScale: 0.05,
    ringOpacity: 0,
    textOpacity: 0,
    textScale: 0.8,
  });

  const numCycles = 3;

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;

      // If we are not in the animation viewport, reset to initial or final state
      if (top > 0) {
        setAnimationValues({ ringScale: 0.05, ringOpacity: 0, textOpacity: 0, textScale: 0.8 });
        return;
      }
      if (top < -scrollableHeight) {
        setAnimationValues({ ringScale: 0.05, ringOpacity: 0, textOpacity: 1, textScale: 1 });
        return;
      }

      // Calculate overall progress (0 to 1)
      const progress = Math.min(1, Math.max(0, -top / scrollableHeight));
      
      const progressPerCycle = 1.0 / numCycles;
      const currentCycleIndex = Math.floor(progress / progressPerCycle);
      
      // Don't go beyond the last cycle for ring animation
      if (currentCycleIndex >= numCycles) {
          setAnimationValues(prev => ({ ...prev, ringOpacity: 0, textOpacity: 1, textScale: 1 }));
          return;
      }

      const progressInCurrentCycle = (progress % progressPerCycle) / progressPerCycle;

      // Ring scales from 0.05 to 100 and fades out
      const ringScale = 0.05 + progressInCurrentCycle * 100;
      const ringOpacity = 1 - progressInCurrentCycle;

      // Text fades in during the last part of the animation
      const textFadeStart = 0.85;
      const textProgress = (progress - textFadeStart) / (1 - textFadeStart);
      const textOpacity = Math.min(1, Math.max(0, textProgress));
      const textScale = 0.8 + Math.min(0.2, Math.max(0, textProgress * 0.2));


      setAnimationValues({
        ringScale,
        ringOpacity,
        textOpacity,
        textScale
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[300vh] w-full bg-background">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* The Text - positioned underneath the ring */}
        <h2
          className="font-headline text-5xl md:text-7xl font-bold text-foreground text-center z-10"
          style={{ 
            opacity: animationValues.textOpacity,
            transform: `scale(${animationValues.textScale})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
          }}
        >
          JMV Impex
          <br/>
          <span className="text-2xl md:text-3xl text-muted-foreground font-normal">Crafted for Generations</span>
        </h2>
        
        {/* The Ring Image */}
        <div
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          style={{
             opacity: animationValues.ringOpacity,
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
