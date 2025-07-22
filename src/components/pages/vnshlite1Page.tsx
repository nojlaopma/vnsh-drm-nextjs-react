'use client';

import { useEffect } from 'react';
// Import BogoHero and BogoFeatures from the vnshlite1 sections
import { BogoHero, BogoFeatures } from '@/components/sections/vnshlite1';

interface VnshBlackBogo1PageProps {
  params: {
    pageId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function VnshBlackBogo1Page({ params }: VnshBlackBogo1PageProps) {
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
    <div className="w-full bg-[#fff] px-[20px] md:px-10 lg:px-[70px] max-w-[1140px] mx-auto relative overflow-hidden min-h-screen flex flex-col font-arial">
      <main>
        <BogoHero />
        <BogoFeatures />
      </main>
    </div>
  );
};



