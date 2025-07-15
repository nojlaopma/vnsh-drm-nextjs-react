'use client';

import { useEffect } from 'react';
// Import BogoHero and BogoFeatures from the vnsmp1 sections
import { BogoHero, BogoFeatures } from '@/components/sections/vnsmp1';

interface Vnsmp1PageProps {
  params: {
    pageId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Vnsmp1Page({ params }: Vnsmp1PageProps) {
  useEffect(() => {
    // Add specific class to body for this page
    document.body.classList.add('bogo-page');
    // Apply Tailwind classes to body
    document.body.className += ' bg-[url(/images/background/black_geo_ver_min.webp)] bg-cover bg-fixed bg-repeat bg-center'

    // Cleanup function
    return () => {
      document.body.classList.remove('bogo-page');
      // Reset body styles
      document.body.className = document.body.className.replace('bg-[url(/images/background/black_geo_ver_min.webp)] bg-cover bg-fixed bg-repeat bg-center', '');
      
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent font-arial">
      <main className="bg-transparent">
        <BogoHero />
        <BogoFeatures />
      </main>
    </div>
  );
};



