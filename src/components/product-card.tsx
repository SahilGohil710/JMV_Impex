import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col md:flex-row group">
      <div className="md:w-2/5 relative min-h-[250px] md:min-h-0 overflow-hidden">
        <Link href={`/products/${product.id}`} className="block h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="copper item"
          />
        </Link>
      </div>
      <div className="flex flex-col flex-grow p-6 md:w-3/5">
        <CardHeader className="p-0">
          <Badge variant="secondary" className="mb-2 bg-accent/20 text-accent-foreground self-start">{product.category}</Badge>
          <CardTitle className="text-xl font-headline mb-2">
            <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
              {product.name}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
          <p className="text-muted-foreground text-sm mt-2 line-clamp-3">{product.description}</p>
        </CardContent>
        <CardFooter className="p-0 pt-4 flex justify-between items-center mt-auto">
          <p className="text-xl font-semibold text-primary">${product.price.toFixed(2)}</p>
          <Button asChild size="sm">
            <Link href={`/products/${product.id}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
