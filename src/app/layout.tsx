'use client';

import { useEffect } from 'react';
import { Inter, Montserrat } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import useSmoothScroll from '@/hooks/useSmoothScroll';

// Optimize Inter font with only the weights we need
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  preload: true,
});

// Optimize Montserrat font with only the weights we need
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enable smooth scrolling for anchor links
  useSmoothScroll();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>VNSH Laser Strike Training System</title>
        <meta name="description" content="Increase accuracy and gain confidence with your shooting. Save big with our new customer program." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" type="image/webp" href="/images/VNSH_-_fav_128w.webp" />
        
        {/* Preload critical font files */}
        <link 
          rel="preload" 
          href={inter.variable} 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href={montserrat.variable} 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-white text-gray-900 antialiased`}>
        <Header />
        <div className="min-h-screen w-full">
          <main className="w-full bg-[#f7f4f4] px-4 md:px-8 lg:px-[70px] max-w-[1265px] mx-auto relative overflow-hidden">
            {/* Reserve space for any fixed/absolute positioned elements */}
            <div className="relative">
              {/* Add a placeholder for any potential content that might cause layout shifts */}
              <div aria-hidden="true" className="hidden md:block absolute inset-0 -z-10"></div>
              {children}
            </div>
          </main>
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
