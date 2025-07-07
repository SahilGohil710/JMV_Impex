
import { Award, Target, Leaf, Gem, Hammer, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export default function AboutPage() {
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

        <section id="about" className="py-16 md:py-24 bg-secondary/50 rounded-lg">
            <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                    Timeless Craftsmanship
                </h2>
                <p className="mt-4 text-muted-foreground">
                    At JMV Impex, we are dedicated to preserving the ancient art of copper crafting. Our artisans blend traditional techniques with contemporary designs to create pieces that are not only beautiful but also functional and durable.
                </p>
                <div className="mt-8 space-y-6">
                    <div className="flex gap-4">
                    <Award className="h-8 w-8 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-foreground">Quality Materials</h3>
                        <p className="text-muted-foreground">We use only the highest-grade pure copper to ensure longevity and safety.</p>
                    </div>
                    </div>
                    <div className="flex gap-4">
                    <Target className="h-8 w-8 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-foreground">Artisanal Skill</h3>
                        <p className="text-muted-foreground">Every item is meticulously handcrafted by skilled artisans with generations of experience.</p>
                    </div>
                    </div>
                    <div className="flex gap-4">
                    <Leaf className="h-8 w-8 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-foreground">Sustainable Practices</h3>
                        <p className="text-muted-foreground">We are committed to ethical sourcing and environmentally friendly production methods.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="relative h-80 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                    src="https://placehold.co/600x800.png"
                    alt="Craftsman working on copper"
                    fill
                    className="object-cover"
                    data-ai-hint="copper workshop"
                />
                </div>
            </div>
            </div>
        </section>
        
        <section id="process" className="py-16 md:py-24">
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

      </div>
    </div>
  );
}
