
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export function RingAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animationValues, setAnimationValues] = useState({
    ringScale: 0.1,
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

      // Reset to initial or final state when outside the animation viewport
      if (top > 0) {
        setAnimationValues({ ringScale: 0.1, ringOpacity: 0, textOpacity: 0, textScale: 0.8 });
        return;
      }
      if (top < -scrollableHeight) {
        // Set to a state where the ring is gone and text is fully visible
        setAnimationValues({ ringScale: 0.1, ringOpacity: 0, textOpacity: 1, textScale: 1 });
        return;
      }

      // Calculate overall progress (0 to 1) through the entire section
      const progress = Math.min(1, Math.max(0, -top / scrollableHeight));
      
      const progressPerCycle = 1.0 / numCycles;
      const currentCycleIndex = Math.floor(progress / progressPerCycle);
      
      // Stop the ring animation after the last cycle
      if (currentCycleIndex >= numCycles) {
          setAnimationValues(prev => ({ ...prev, ringOpacity: 0, textOpacity: 1, textScale: 1 }));
          return;
      }
      
      // Calculate progress within the current cycle (0 to 1)
      const progressInCurrentCycle = (progress % progressPerCycle) / progressPerCycle;

      // --- REFINED ANIMATION LOGIC ---
      
      // 1. Scale: Start at 0.1 and grow to 20. This is less extreme and more performant.
      const ringScale = 0.1 + progressInCurrentCycle * 25;

      // 2. Opacity: Fade in quickly, stay solid, then fade out.
      // This makes the ring feel more solid for longer, enhancing the "tunnel" effect.
      let ringOpacity = 0;
      const appearEnd = 0.05; // Fully appeared by 5%
      const fadeStart = 0.25; // Start fading at 25%
      
      if (progressInCurrentCycle < appearEnd) {
        // Fade in quickly at the start of the cycle
        ringOpacity = progressInCurrentCycle / appearEnd;
      } else if (progressInCurrentCycle >= appearEnd && progressInCurrentCycle < fadeStart) {
        // Stay solid and opaque
        ringOpacity = 1;
      } else {
        // Fade out for the rest of the cycle
        ringOpacity = 1 - (progressInCurrentCycle - fadeStart) / (1 - fadeStart);
      }
      ringOpacity = Math.max(0, ringOpacity); // Clamp opacity to 0

      // Text fades in during the last part of the overall animation
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
