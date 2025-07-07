
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <section className="w-full flex-grow flex items-center justify-center bg-secondary/50">
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
    </div>
  );
}
