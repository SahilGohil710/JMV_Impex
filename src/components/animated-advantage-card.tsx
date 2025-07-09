'use client';

import type { FC } from 'react';

interface AnimatedAdvantageCardProps {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
}

export function AnimatedAdvantageCard({ icon: Icon, title, description }: AnimatedAdvantageCardProps) {
  return (
    <div className="group h-64 w-full [perspective:1000px]">
      <div
        className="relative h-full w-full rounded-lg border bg-card shadow-lg transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front of the card */}
        <div
          className="absolute flex h-full w-full flex-col items-center justify-center gap-4 p-6 [backface-visibility:hidden]"
        >
          <Icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
          <h3 className="font-headline text-xl font-semibold text-foreground text-center">{title}</h3>
        </div>

        {/* Back of the card */}
        <div
          className="absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-card p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
           <h3 className="font-headline text-lg font-semibold text-foreground mb-2">{title}</h3>
           <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
