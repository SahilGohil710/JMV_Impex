import { products } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Package, Ruler, Check } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Special layout for Copper Fittings
  if (product.id === '3') {
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
                <BreadcrumbLink asChild>
                  <Link href="/products">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-2 bg-accent/20 text-accent-foreground">{product.category}</Badge>
            <h1 className="font-headline text-4xl md:text-5xl font-bold">{product.name}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(product.details as { name: string; image: string }[]).map((fitting, index) => (
              <Card key={index} className="group overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-square w-full bg-secondary/30">
                    <Image
                      src={fitting.image}
                      alt={fitting.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint="copper fitting"
                    />
                  </div>
                  <div className="p-4 border-t">
                    <h3 className="font-semibold">{fitting.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    );
  }

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
              <BreadcrumbLink asChild>
                <Link href="/products">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              data-ai-hint="copper product"
            />
          </div>
          <div className="flex flex-col">
            <Badge variant="secondary" className="mb-2 bg-accent/20 text-accent-foreground self-start">{product.category}</Badge>
            <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
            
            <Separator className="my-6" />

            <h3 className="font-semibold text-xl mb-4">Features</h3>
            <ul className="space-y-3 mb-6">
              {(product.details as string[]).map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{detail}</span>
                </li>
              ))}
            </ul>
             <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-accent shrink-0" />
                    <span><strong>Material:</strong> {product.material}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-accent shrink-0" />
                    <span><strong>Dimensions:</strong> {product.dimensions}</span>
                </div>
             </div>
          </div>
        </div>

        {product.specChart && (
          <div className="mt-16">
            <h3 className="font-headline text-3xl font-bold mb-6 text-center">Specification Chart</h3>
            <Card className="overflow-hidden border">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/20 hover:bg-primary/20">
                      <TableHead colSpan={2} className="p-4 text-center font-bold text-primary-foreground whitespace-nowrap align-middle bg-primary">Outer Diameter</TableHead>
                      <TableHead colSpan={product.specChart.headers.length} className="p-4 text-center font-bold text-primary-foreground whitespace-nowrap align-middle bg-primary">
                        PCC - 50FT - 100FT PANCAKE COILS
                        <span className="block font-normal">Wall Thickness (MM)</span>
                      </TableHead>
                    </TableRow>
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                      <TableHead className="text-center font-semibold whitespace-nowrap">MM</TableHead>
                      <TableHead className="text-center font-semibold whitespace-nowrap">INCH</TableHead>
                      {product.specChart.headers.map((header) => (
                        <TableHead key={header} className="text-center font-semibold whitespace-nowrap">{header}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {product.specChart.rows.map((row, rowIndex) => (
                      <TableRow key={rowIndex}>
                        <TableCell className="text-center font-medium whitespace-nowrap">{row.od_mm}</TableCell>
                        <TableCell className="text-center font-medium whitespace-nowrap">{row.od_in}</TableCell>
                        {row.values.map((value, valueIndex) => (
                          <TableCell key={valueIndex} className="text-center whitespace-nowrap">
                            {value && <Check className="h-5 w-5 mx-auto text-accent" />}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        )}

      </div>
    </div>
  );
}
