
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="min-h-[40px] md:min-h-[48px] lg:min-h-[60px] flex items-center justify-center">
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

      <section id="featured-products" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
              Featured Products
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              A glimpse into our collection of masterfully crafted copper items.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {products.slice(0, 2).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild>
                <Link href="/products">
                    View All Products
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
