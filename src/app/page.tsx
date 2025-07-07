import { products } from '@/lib/data';
import { ProductCatalog } from '@/components/product-catalog';
import { Award, Target, Leaf } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            The Art of Copper
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Experience the warmth and beauty of handcrafted copperware from JMV Impex. Each piece tells a story of tradition and quality.
          </p>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-background">
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
      
      <section id="catalog" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
              Our Collection
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              Browse our curated selection of fine copper products.
            </p>
          </div>
          <ProductCatalog products={products} />
        </div>
      </section>
    </div>
  );
}
