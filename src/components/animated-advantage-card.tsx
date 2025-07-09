'use client';

import { useRef, useState, type FC, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedAdvantageCardProps {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
}

export function AnimatedAdvantageCard({ icon: Icon, title, description }: AnimatedAdvantageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * -20; // Max rotation 10deg
    const rotateY = ((x / width) - 0.5) * 20; // Max rotation 10deg

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      className="[perspective:1000px] group h-64"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="relative h-full w-full rounded-lg shadow-xl [transform-style:preserve-3d] transition-transform duration-200 ease-out"
        style={{ transform }}
      >
        <div className="absolute inset-0 bg-card rounded-lg border flex flex-col items-center justify-center text-center p-6">
            <Icon className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-headline text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm rounded-lg p-6 flex flex-col justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-headline text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
