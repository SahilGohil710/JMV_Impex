
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Award,
  Target,
  Leaf,
  Factory,
  ShieldCheck,
  Building2,
  TrendingUp,
  Globe2,
  Shapes,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = [
    {
      icon: Award,
      title: 'Quality Materials',
      description: 'We use only the highest-grade pure copper to ensure longevity and safety.',
      image: '/images/Timeless_Craftsmanship/Quality_Materials.png',
      hint: 'copper raw material',
    },
    {
      icon: Target,
      title: 'Artisanal Skill',
      description: 'Every item is meticulously handcrafted by skilled artisans with generations of experience.',
      image: '/images/Timeless_Craftsmanship/Artisanal_Skill.png',
      hint: 'craftsman working',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'We are committed to ethical sourcing and environmentally friendly production methods.',
      image: '/images/Timeless_Craftsmanship/Sustainable_Practices.png',
      hint: 'eco friendly copper',
    },
  ];

  const craftsmanshipIntro = 'At JMV Impex, we are dedicated to preserving the ancient art of copper crafting. Our artisans blend traditional techniques with contemporary designs to create pieces that are not only beautiful but also functional and durable.';
  
  const advantages = [
    {
      icon: Factory,
      title: 'Manufacturing Capacity',
      description: 'Capable of producing 35 to 40 tons annually, showcasing our robust manufacturing capabilities.',
    },
    {
      icon: ShieldCheck,
      title: 'Environmental Compliance',
      description: 'Our operations adhere to eco-friendly practices and are compliant with ROHS and ISO standards, ensuring sustainability.',
    },
    {
      icon: Building2,
      title: 'Largest Manufacturing Unit',
      description: 'Proudly boasting the largest manufacturing unit for copper fittings, catering to ACR, Medical Gas, and Plumbing industries.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Trajectory',
      description: 'From 4 tons annually in 2006 to 480 tons today, our growth reflects our commitment to expansion and advancement.',
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Exporting to over 11 countries, we are a trusted partner in the international market.',
    },
    {
      icon: Award,
      title: 'Quality and Reliability',
      description: 'Renowned for our superior quality and unwavering dependability, we have earned a stellar reputation in the industry.',
    },
    {
      icon: Shapes,
      title: 'Extensive Product Range',
      description: 'Currently manufacturing over 100 products of varying sizes and thicknesses to meet diverse industry needs.',
    },
  ];


  useEffect(() => {
    // The scroll effect is only for desktop screens (md breakpoint and up).
    if (window.innerWidth < 768) {
      return;
    }

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      if (top > 0 || top < -scrollableHeight) {
        return;
      }

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
      <section className="relative w-full py-20 lg:py-32 flex items-center justify-center text-white">
        <Image
          src="/images/HomePage/HomePage.png"
          alt="Copper background"
          fill
          priority
          className="object-cover"
          data-ai-hint="copper texture"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay for readability */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              JMV Impex
            </h1>
          </div>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-200">
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
      
      {/* Timeless Craftsmanship Section - DESKTOP */}
      <section ref={sectionRef} id="craftsmanship" className="hidden md:block relative bg-background h-[300vh] py-16 lg:py-24">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                            Timeless Craftsmanship
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                           {craftsmanshipIntro}
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
                                sizes="(min-width: 768px) 50vw, 100vw"
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
      
      {/* Timeless Craftsmanship Section - MOBILE */}
      <section id="craftsmanship-mobile" className="block md:hidden bg-background py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold text-foreground">
                    Timeless Craftsmanship
                </h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                    {craftsmanshipIntro}
                </p>
            </div>
            <div className="space-y-12">
                {content.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Card key={index} className="overflow-hidden shadow-lg">
                            <CardContent className="p-0">
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                        data-ai-hint={item.hint}
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Icon className="h-8 w-8 text-primary shrink-0" />
                                        <h3 className="font-semibold text-foreground text-xl">{item.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
      
      {/* Advantage Section */}
       <section id="advantages" className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                The JMV Impex Advantage
            </h2>
            <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">
                Discover the key benefits of partnering with us for your copper needs.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {advantages.map((advantage, index) => (
                <div key={index} className="[perspective:1000px] group h-64">
                <div className="relative h-full w-full rounded-lg shadow-xl [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                    {/* Front of card */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                        <div className="h-full w-full bg-card rounded-lg p-6 flex flex-col items-center justify-center text-center border">
                            <advantage.icon className="h-12 w-12 text-primary mb-4" />
                            <h3 className="font-headline text-xl font-semibold text-foreground">{advantage.title}</h3>
                        </div>
                    </div>
                    {/* Back of card */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div className="h-full w-full bg-card rounded-lg p-6 flex flex-col justify-center text-center border">
                            <h3 className="font-headline text-lg font-semibold text-foreground mb-2">{advantage.title}</h3>
                            <p className="text-muted-foreground text-sm">{advantage.description}</p>
                        </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>

    </div>
  );

    