
'use client';

import { useState } from 'react';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { PreLoader } from '@/components/pre-loader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>JMV Impex</title>
        <meta name="description" content="Exquisite copper items by JMV Impex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        {loading && <PreLoader onAnimationComplete={() => setLoading(false)} />}
        <div className={cn('min-h-screen flex flex-col', { 'hidden': loading })}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
