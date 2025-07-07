
'use client';

import { TypingEffect } from './typing-effect';

interface PreLoaderProps {
  onAnimationComplete: () => void;
}

export function PreLoader({ onAnimationComplete }: PreLoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <TypingEffect
        text="JMV Impex"
        className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
        onComplete={() => {
          setTimeout(onAnimationComplete, 500);
        }}
        speed={100}
      />
    </div>
  );
}
