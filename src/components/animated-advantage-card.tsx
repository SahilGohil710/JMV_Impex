'use client';

import type { FC } from 'react';

interface AnimatedAdvantageCardProps {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
}

export function AnimatedAdvantageCard({ icon: Icon, title, description }: AnimatedAdvantageCardProps) {
  return (
    <div
      className="group relative h-64 overflow-hidden rounded-lg border bg-card p-6 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Base content */}
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <Icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
        <h3 className="font-headline text-xl font-semibold text-foreground">{title}</h3>
      </div>

      {/* Hover content - fades in on top */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/90 p-6 text-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-headline text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}
