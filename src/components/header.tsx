'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Header() {
    const pathname = usePathname();

    const navLinks = [
        { href: '/products', label: 'Products' },
        { href: '/about', label: 'About Us' },
        { href: '/contact', label: 'Contact' },
    ];
    
    return (
        <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                
                {/* Desktop Header */}
                <div className="hidden md:grid w-full grid-cols-3 items-center">
                    <div className="justify-self-start">
                        <Link href="/" className="flex items-center gap-2">
                            <UtensilsCrossed className="h-6 w-6 text-primary" />
                            <span className="font-headline text-xl font-bold text-foreground">JMV Impex</span>
                        </Link>
                    </div>

                    <nav className="flex items-center justify-center gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'transition-colors hover:text-foreground',
                                    pathname === link.href ? 'text-foreground font-semibold' : 'text-muted-foreground'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    
                    <div className="justify-self-end">
                        {/* Empty div for spacing, can be used for a CTA button in the future */}
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="flex md:hidden w-full items-center justify-between">
                     <Link href="/" className="flex items-center gap-2">
                        <UtensilsCrossed className="h-6 w-6 text-primary" />
                        <span className="font-headline text-xl font-bold text-foreground">JMV Impex</span>
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader className="sr-only">
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <div className="p-6 pt-12">
                                <SheetClose asChild>
                                    <Link href="/" className="flex items-center gap-2 mb-8">
                                        <UtensilsCrossed className="h-6 w-6 text-primary" />
                                        <span className="font-headline text-xl font-bold text-foreground">JMV Impex</span>
                                    </Link>
                                </SheetClose>
                                <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <SheetClose asChild key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                            'text-lg font-medium transition-colors hover:text-primary',
                                            pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}
