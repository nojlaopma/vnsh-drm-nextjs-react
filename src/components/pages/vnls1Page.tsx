'use client';

import { useEffect } from 'react';
// Import BogoHero and BogoFeatures from the vnls1 sections
import { BogoHero, BogoFeatures } from '@/components/sections/vnls1';

interface vnls1PageProps {
  params: {
    pageId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function vnls1Page({ params }: vnls1PageProps) {
  useEffect(() => {
    // Add specific class to body for this page
    document.body.classList.add('bogo-page');
    // Apply background styles to body
    document.body.style.backgroundImage = 'url(/images/background/black_geo_ver_min.webp)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.backgroundPosition = 'center center';
 

    // Cleanup function
    return () => {
      document.body.classList.remove('bogo-page');
      // Reset body styles
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
      
      const floater = document.querySelector('.banner-floater');
      if (floater) {
        floater.remove();
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#fff] md:px-8 lg:px-[70px] max-w-[1240px] mx-auto relative overflow-hidden min-h-screen flex flex-col px-[15px]">
      <main>
        <BogoHero />
        <BogoFeatures />
      </main>
    </div>
  );
};



