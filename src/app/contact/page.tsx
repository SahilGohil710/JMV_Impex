
import { Mail, Phone, MapPin, MessageCircle, Navigation } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export default function ContactPage() {
  const whatsappNumber = "919869561920";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(whatsappLink)}&size=200x200&bgcolor=f8fafc`;

  const address = "Shop No. 17, Gr. Floor, Old Hira Building, Vitthalbhai Patel Road, Parsiwada 1st Lane, C. P. Tank, Mumbai - 400004.";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;


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
              <BreadcrumbPage>Contact Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:jmvimpexsales@gmail.com" className="hover:text-primary break-all">jmvimpexsales@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+919869561920" className="hover:text-primary">+91 98695 61920</a>
                    <span className="mx-1">/</span>
                    <a href="tel:+918779642352" className="hover:text-primary">87796 42352</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Our Address</h3>
                    <p>{address}</p>
                    <Button variant="link" asChild className="p-0 h-auto font-normal mt-2">
                        <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            <Navigation className="mr-2 h-4 w-4" />
                            Get Directions
                        </Link>
                    </Button>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Connect on WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center text-center gap-6 pt-6">
                <div className="p-4 bg-slate-50 rounded-lg border">
                   <Image
                    src={qrCodeUrl}
                    alt="WhatsApp QR Code"
                    width={200}
                    height={200}
                    className="rounded-md"
                    data-ai-hint="qr code"
                    />
                </div>
                <p className="text-muted-foreground">Scan the QR code or click the button below to start a chat with us directly on WhatsApp.</p>
                 <Button asChild size="lg">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                    </Link>
                </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
