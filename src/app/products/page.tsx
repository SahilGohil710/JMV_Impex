
import { products } from '@/lib/data';
import { ProductCatalog } from '@/components/product-catalog';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="bg-secondary/50">
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
                        <BreadcrumbPage>Products</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                    Our Collection
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Explore our curated selection of handcrafted copperware. Each piece is a testament to quality craftsmanship and timeless design.
                </p>
            </div>
            
            <ProductCatalog products={products} />
        </div>
    </div>
  );
}
