
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

    const handleScroll = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      animationFrameId.current = requestAnimationFrame(() => {
        const { top, height } = section.getBoundingClientRect();
        const scrollableHeight = height - window.innerHeight;

        if (top > 0) {
          ringContainer.style.opacity = '0';
          ringInner.style.transform = 'scale(0.1)';
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

            const ringScale = 0.1 + progressInCurrentCycle * 20;
            
            let ringOpacity = 0;
            const appearEnd = 0.05;
            const fadeStart = 0.35; 
            
            if (progressInCurrentCycle < appearEnd) {
              ringOpacity = progressInCurrentCycle / appearEnd;
            } else if (progressInCurrentCycle >= appearEnd && progressInCurrentCycle < fadeStart) {
              ringOpacity = 1;
            } else {
              ringOpacity = 1 - (progressInCurrentCycle - fadeStart) / (1 - fadeStart);
            }
            ringOpacity = Math.max(0, ringOpacity);

            ringContainer.style.opacity = `${ringOpacity}`;
            ringInner.style.transform = `scale(${ringScale})`;
            particles.style.opacity = `${ringOpacity}`;
        }
        
        const textFadeStart = 0.85;
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
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        <Image
          src="/images/HomePage/BG_Copper_Ring.png"
          alt="Abstract copper texture background"
          fill
          className="object-cover z-0"
          data-ai-hint="copper texture"
        />

        <div ref={particleContainerRef} className="absolute inset-0 z-10 pointer-events-none" style={{ willChange: 'opacity' }}>
          <ParticleAnimation />
        </div>
        
        <h2
          ref={textRef}
          className="font-headline text-5xl md:text-7xl font-bold text-white text-center z-20"
          style={{ 
            opacity: 0,
            transform: 'scale(0.8)',
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            willChange: 'opacity, transform'
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
             willChange: 'opacity',
          }}
        >
          <div ref={ringInnerRef} style={{ willChange: 'transform', transform: 'scale(0.1)' }}>
            <Image
                src="/images/HomePage/Copper_Ring.png"
                alt="Copper Ring Animation"
                width={250}
                height={250}
                priority
                data-ai-hint="copper ring"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
