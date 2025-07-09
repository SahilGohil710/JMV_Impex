
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ParticleAnimation } from './particle-animation';

export function RingAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ringContainerRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();

  const numCycles = 3;

  useEffect(() => {
    const section = sectionRef.current;
    const ringContainer = ringContainerRef.current;
    const ringInner = ringInnerRef.current;
    const text = textRef.current;
    const particles = particleContainerRef.current;

    if (!section || !ringContainer || !ringInner || !text || !particles) return;

    // Hint to the browser to optimize these properties for animation
    ringInner.style.willChange = 'transform';
    ringContainer.style.willChange = 'opacity';
    particles.style.willChange = 'opacity';
    text.style.willChange = 'opacity, transform';


    const handleScroll = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      animationFrameId.current = requestAnimationFrame(() => {
        const { top, height } = section.getBoundingClientRect();
        const scrollableHeight = height - window.innerHeight;

        // Reset state when out of view
        if (top > 0) {
          ringContainer.style.opacity = '0';
          ringInner.style.transform = 'translateZ(-1000px)';
          text.style.opacity = '0';
          text.style.transform = 'scale(0.8)';
          particles.style.opacity = '0';
          return;
        }
        if (top < -scrollableHeight) {
          ringContainer.style.opacity = '0';
          text.style.opacity = '1';
          text.style.transform = 'scale(1)';
          particles.style.opacity = '0';
          return;
        }

        const progress = Math.min(1, Math.max(0, -top / scrollableHeight));
        
        const progressPerCycle = 1.0 / numCycles;
        const currentCycleIndex = Math.floor(progress / progressPerCycle);
        
        if (currentCycleIndex >= numCycles) {
            ringContainer.style.opacity = '0';
            particles.style.opacity = '0';
        } else {
            const progressInCurrentCycle = (progress % progressPerCycle) / progressPerCycle;

            // Animate Z-translation from far to near for a smooth "fly-through"
            // Start far away (-1000px), move past the camera (to 200px)
            const zTranslation = -1000 + progressInCurrentCycle * 1200;
            ringInner.style.transform = `translateZ(${zTranslation}px)`;

            // Control opacity for a fade-in/fade-out effect per cycle
            let ringOpacity = 0;
            const appearEnd = 0.15; // Takes 15% of the cycle to fully appear
            const fadeStart = 0.5;  // Starts fading at 50% of the cycle

            if (progressInCurrentCycle < appearEnd) {
              // Fade in
              ringOpacity = progressInCurrentCycle / appearEnd;
            } else if (progressInCurrentCycle < fadeStart) {
              // Hold at full opacity
              ringOpacity = 1;
            } else {
              // Fade out
              ringOpacity = 1 - (progressInCurrentCycle - fadeStart) / (1 - fadeStart);
            }

            ringContainer.style.opacity = `${Math.max(0, ringOpacity)}`;
            particles.style.opacity = `${Math.max(0, ringOpacity)}`;
        }
        
        // Handle text fade-in at the very end of the whole animation
        const textFadeStart = 0.9;
        const textProgress = (progress - textFadeStart) / (1 - textFadeStart);
        const textOpacity = Math.min(1, Math.max(0, textProgress));
        const textScale = 0.8 + Math.min(0.2, Math.max(0, textProgress * 0.2));

        text.style.opacity = `${textOpacity}`;
        text.style.transform = `scale(${textScale})`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[300vh] w-full bg-black">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden [transform-style:preserve-3d] [perspective:400px]">
        
        <Image
          src="/images/HomePage/BG_Copper_Ring.png"
          alt="Abstract copper texture background"
          fill
          className="object-cover z-0"
          data-ai-hint="copper texture"
        />

        <div ref={particleContainerRef} className="absolute inset-0 z-10 pointer-events-none">
          <ParticleAnimation />
        </div>
        
        <h2
          ref={textRef}
          className="font-headline text-5xl md:text-7xl font-bold text-white text-center z-20"
          style={{ 
            opacity: 0,
            transform: 'scale(0.8)',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          JMV Impex
          <br/>
          <span className="text-2xl md:text-3xl text-slate-300 font-normal">Crafted for Generations</span>
        </h2>
        
        <div
          ref={ringContainerRef}
          className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
          style={{
             opacity: 0,
          }}
        >
          <div ref={ringInnerRef}>
            <Image
                src="/images/HomePage/Copper_Ring.png"
                alt="Copper Ring Animation"
                width={500}
                height={500}
                priority
                data-ai-hint="copper ring"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
