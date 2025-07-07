
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
  onComplete?: () => void;
}

export function TypingEffect({ text, className, speed = 150, onComplete }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setIsTyping(true);
    setDisplayedText('');
    
    if (!text) {
        setIsTyping(false);
        return;
    };

    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  useEffect(() => {
    if (!isTyping && onComplete) {
      onComplete();
    }
  }, [isTyping, onComplete]);


  return (
    <h1 className={cn(className)}>
      {displayedText}
      {isTyping && <span className="animate-pulse">_</span>}
    </h1>
  );
}
