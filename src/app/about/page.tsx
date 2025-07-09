'use client';

import { Gem, Hammer, Sparkles, HeartPulse, Crown, Recycle, Palette } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { useState, useRef, useEffect } from 'react';

export default function AboutPage() {
    const horizontalScrollRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);

    const copperAdvantages = [
        {
            icon: HeartPulse,
            title: "Health & Hygiene",
            description: "Copper is naturally antimicrobial, helping to keep your environment clean and safe by eliminating harmful bacteria."
        },
        {
            icon: Crown,
            title: "Unmatched Durability",
            description: "Known for its strength and corrosion resistance, copper products are an investment that lasts for generations."
        },
        {
            icon: Recycle,
            title: "Eco-Friendly Choice",
            description: "Copper is one of the most recycled materials on earth, making it a sustainable choice for a greener planet."
        },
        {
            icon: Palette,
            title: "Timeless Beauty",
            description: "With its warm, radiant hue that develops a unique patina over time, copper adds elegance to any setting."
        }
    ];

    useEffect(() => {
        const horizontalSection = horizontalScrollRef.current;
        const cardsContainer = cardsContainerRef.current;
        
        const handleScroll = () => {
            if (!horizontalSection || !cardsContainer) return;
    
            const { top, height } = horizontalSection.getBoundingClientRect();
            // The total vertical distance we can scroll through for this effect
            const scrollableHeight = height - window.innerHeight;
    
            // If we are scrolled above the section, do nothing.
            if (top > 0) {
                setTranslateX(0);
                return;
            }
            
            // If we have scrolled past the section.
            if (top < -scrollableHeight) {
                const maxScrollLeft = cardsContainer.scrollWidth - window.innerWidth;
                setTranslateX(-maxScrollLeft);
                return;
            }
    
            // Calculate scroll progress within the section (0 to 1)
            const scrollProgress = -top / scrollableHeight;
            
            // Calculate the total horizontal distance the cards can scroll
            const maxScrollLeft = cardsContainer.scrollWidth - window.innerWidth;
    
            setTranslateX(-scrollProgress * maxScrollLeft);
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                About JMV Impex
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Dedicated to the art of copper craftsmanship, we blend tradition with innovation to deliver products of unparalleled quality and beauty.
            </p>
        </div>

        <section id="process" className="py-16 md:py-24 bg-secondary/50 rounded-lg">
            <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                The Journey of Our Copper
                </h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                From raw material to a work of art, each piece undergoes a meticulous process.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    <Gem className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-xl font-semibold">1. Design & Sourcing</h3>
                <p className="text-muted-foreground">We begin by sourcing the purest copper and creating timeless designs that blend tradition with modern aesthetics.</p>
                </div>
                <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    <Hammer className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-xl font-semibold">2. Artisan Forging</h3>
                <p className="text-muted-foreground">Our master artisans skillfully hammer, shape, and forge the copper by hand, breathing life and unique character into every curve.</p>
                </div>
                <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card border shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-xl font-semibold">3. Finishing & Patina</h3>
                <p className="text-muted-foreground">The final piece is polished to a brilliant shine or treated to develop a beautiful, natural patina, ensuring a one-of-a-kind finish.</p>
                </div>
            </div>
            </div>
        </section>

        <section id="why-copper" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                        Why Choose Copper?
                    </h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                        Discover the unique advantages that make copper a superior choice for your home and health.
                    </p>
                </div>
            </div>

            <div ref={horizontalScrollRef} className="relative h-[300vh] w-full mt-12">
                <div className="sticky top-0 flex h-screen items-center overflow-x-hidden">
                    <div
                        ref={cardsContainerRef}
                        className="flex items-center gap-8"
                        style={{ transform: `translateX(${translateX}px)` }}
                    >
                        {/* Start padding to center the first card */}
                        <div className="w-[calc((100vw-70vw)/2)] md:w-[calc((100vw-45vw)/2)] lg:w-[calc((100vw-30vw)/2)] flex-shrink-0" />

                        {copperAdvantages.map((advantage, index) => {
                            const Icon = advantage.icon;
                            return (
                                <div key={index} className="w-[70vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0">
                                    <div className="flex flex-col items-center text-center p-8 gap-6 border rounded-xl bg-card shadow-xl h-[450px] justify-center transition-transform hover:-translate-y-2">
                                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-accent/10 text-accent mb-4">
                                            <Icon className="h-10 w-10" />
                                        </div>
                                        <h3 className="font-headline text-2xl font-semibold">{advantage.title}</h3>
                                        <p className="text-muted-foreground text-base">{advantage.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                        
                        {/* End padding to center the last card */}
                        <div className="w-[calc((100vw-70vw)/2)] md:w-[calc((100vw-45vw)/2)] lg:w-[calc((100vw-30vw)/2)] flex-shrink-0" />
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
