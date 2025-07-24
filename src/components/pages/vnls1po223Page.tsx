'use client';

import { useEffect } from 'react';
// Import BogoHero and BogoFeatures from the vnls1po223 sections
import { BogoHero, BogoFeatures } from '@/components/sections/vnls1po223';

interface vnls1po223po223PageProps {
  params: {
    pageId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function vnls1po223po223Page({ params }: vnls1po223po223PageProps) {
  useEffect(() => {
    // Add specific class to body for this page
    document.body.classList.add('bogo-page');
    // Apply Tailwind classes to body
    document.body.className += ' bg-[url(/images/background/black_geo_ver_min.webp)] bg-cover bg-fixed bg-repeat bg-center'
    
    // Create and append the header floater after the header
    const header = document.querySelector('header');
    if (header) {
      const floater = document.createElement('div');
      floater.className = 'banner-floater w-full bg-[#2afe4e] text-center sticky top-0 z-10 text-[16px] md:text-[22px] md:leading-[26px] leading-[1.5] font-bold text-black font-arial';
      
      const link = document.createElement('span');
      link.className = 'hover:underline block w-full';
      link.innerHTML = 'HALF OFF Pre-Order Deal On New .223 Version<br>(Ships Late March)';
      
      const container = document.createElement('div');
      container.className = 'max-w-[1265px] mx-auto px-4 md:py-[6px] py-[1px]';
      container.appendChild(link);
      
      floater.appendChild(container);
      header.parentNode?.insertBefore(floater, header.nextSibling);
    }



    // Cleanup function
    return () => {
      document.body.classList.remove('bogo-page');
      // Reset body styles
      document.body.className = document.body.className.replace('bg-[url(/images/background/black_geo_ver_min.webp)] bg-cover bg-fixed bg-repeat bg-center', '');
      
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



