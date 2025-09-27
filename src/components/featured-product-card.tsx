import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface FeaturedProductCardProps {
  product: Product;
}

export function FeaturedProductCard({ product }: FeaturedProductCardProps) {
  return (
    <Card className="group w-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <CardHeader className="p-0 relative h-60">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="copper product"
          />
        </Link>
      </CardHeader>
      <div className="flex flex-col flex-grow p-6">
        <CardContent className="p-0 flex-grow">
            <Badge variant="secondary" className="mb-2 bg-accent/20 text-accent-foreground">{product.category}</Badge>
            <CardTitle className="text-xl font-headline mb-2">
                <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
                {product.name}
                </Link>
            </CardTitle>
            <p className="text-muted-foreground text-sm line-clamp-3">{product.description}</p>
        </CardContent>
        <CardFooter className="p-0 pt-4 mt-auto">
          <Button asChild variant="link" className="p-0 h-auto">
            <Link href={`/products/${product.id}`}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
