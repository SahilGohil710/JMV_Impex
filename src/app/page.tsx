'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Target, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = [
    {
      icon: Award,
      title: 'Quality Materials',
      description: 'We use only the highest-grade pure copper to ensure longevity and safety.',
      image: 'https://placehold.co/600x800.png',
      hint: 'copper raw material'
    },
    {
      icon: Target,
      title: 'Artisanal Skill',
      description: 'Every item is meticulously handcrafted by skilled artisans with generations of experience.',
      image: 'https://placehold.co/600x800.png',
      hint: 'craftsman working'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'We are committed to ethical sourcing and environmentally friendly production methods.',
      image: 'https://placehold.co/600x800.png',
      hint: 'eco friendly copper'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      // Calculate the portion of the section that can be scrolled through
      const scrollableHeight = height - window.innerHeight;
      
      // Don't run if the section is not in the active scroll area
      if (top > 0 || top < -scrollableHeight) {
        return;
      }

      // Calculate scroll progress within the section (0 to 1)
      const progress = Math.abs(top) / scrollableHeight;
      const newIndex = Math.min(content.length - 1, Math.floor(progress * content.length));

      if (newIndex !== activeContentIndex) {
        setActiveContentIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeContentIndex, content.length]);


  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 flex items-center justify-center bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              JMV Impex
            </h1>
          </div>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            The Art of Copper. Experience the warmth and beauty of handcrafted copperware. Each piece tells a story of tradition and quality.
          </p>
           <div className="mt-8">
            <Button asChild size="lg">
                <Link href="/products">
                    Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Timeless Craftsmanship Section */}
      <section ref={sectionRef} id="craftsmanship" className="relative bg-background h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                            Timeless Craftsmanship
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            At JMV Impex, we are dedicated to preserving the ancient art of copper crafting. Our artisans blend traditional techniques with contemporary designs to create pieces that are not only beautiful but also functional and durable.
                        </p>
                        <div className="mt-8 space-y-8">
                            {content.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className={cn("flex gap-4 transition-opacity duration-500", activeContentIndex === index ? "opacity-100" : "opacity-30")}>
                                        <Icon className="h-8 w-8 text-primary mt-1 shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="relative h-full min-h-[500px] md:min-h-[600px] rounded-lg overflow-hidden shadow-xl">
                        {content.map((item, index) => (
                            <Image
                                key={index}
                                src={item.image}
                                alt={item.title}
                                fill
                                className={cn(
                                    "object-cover transition-opacity duration-1000 ease-in-out absolute inset-0",
                                    activeContentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                )}
                                data-ai-hint={item.hint}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
