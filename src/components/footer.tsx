import { UtensilsCrossed, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">CopperCraft Showcase</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Discover the timeless elegance of handcrafted copperware by JMV Impex.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-headline font-semibold mb-2">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:inquiries@jmvimpex.com" className="hover:text-primary">inquiries@jmvimpex.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>123 Copper Lane, Artisan City</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#catalog" className="hover:text-primary">Catalog</Link></li>
                <li><Link href="/#about" className="hover:text-primary">About Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} JMV Impex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
