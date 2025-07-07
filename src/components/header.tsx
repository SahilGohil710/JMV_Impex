import Link from 'next/link';
import { UtensilsCrossed } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-foreground">CopperCraft Showcase</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/#catalog" className="text-muted-foreground transition-colors hover:text-foreground">
            Catalog
          </Link>
          <Link href="/#contact" className="text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
