"use client";

import { UtensilsCrossed, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">JMV Impex</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Manufacturer and Stockist of Copper Fittings, Copper Pipe Tubes, Copper-Nickel Fittings.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-headline font-semibold mb-2">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <a href="mailto:jmvimpexsales@gmail.com" className="hover:text-primary break-all">jmvimpexsales@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+919869561920" className="hover:text-primary">+91 98695 61920</a>
                    <span className="mx-1">/</span>
                    <a href="tel:+918779642352" className="hover:text-primary">87796 42352</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span>Shop No. 17, Gr. Floor, Old Hira Building, Vitthalbhai Patel Road, Parsiwada 1st Lane, C. P. Tank, Mumbai - 400004.</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products" className="hover:text-primary">Products</Link></li>
                <li><Link href="/#about" className="hover:text-primary">About Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-xs text-muted-foreground">
          © {year} JMV Impex. All rights reserved. | GST: 27AAUFJ1223C1ZK
        </div>
      </div>
    </footer>
  );
}
