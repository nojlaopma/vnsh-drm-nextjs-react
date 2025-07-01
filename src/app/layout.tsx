'use client';

import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import useSmoothScroll from '@/hooks/useSmoothScroll';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
        <link rel="icon" type="image/png" href="/images/VNSH_-_fav_128w.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main className="min-h-screen bg-[#f7f4f4] w-full px-4 md:px-8 lg:px-[70px] max-w-[1265px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
