'use client';

import { useEffect } from 'react';
// Import BogoHero and BogoFeatures from the vns3mmbonus sections
import { BogoHero, BogoFeatures } from '@/components/sections/vns3mmbonus';

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
    
    // Create and append the header floater after the header
    const header = document.querySelector('header');
    if (header) {
      const floater = document.createElement('div');
      floater.className = 'banner-floater w-full bg-[#2afe4e] text-center sticky top-0 z-10 text-[20px] md:text-[22px] md:leading-[2.5] leading-[1.5] font-bold text-black font-arial';
      
      const link = document.createElement('span');
      link.className = 'hover:underline px-[5px] md:px-[0]';
      // Add &nbsp; only for mobile screens
      const isMobile = window.innerWidth < 768;
      const space = isMobile ? '&nbsp;&nbsp;' : '';
      link.innerHTML = `FREE Bonus <strike>$30</strike> MagMate Spare Mag Carrier - This Page ONLY!${space}`;
      
      const container = document.createElement('div');
      container.className = 'max-w-[1265px] mx-auto pl-[6px] md:px-8 lg:px-[70px]';
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
    <div className="w-full bg-[#fff] px-[20px] md:px-10 lg:px-[70px] max-w-[1200px] mx-auto relative overflow-hidden min-h-screen flex flex-col font-arial">
      <main>
        <BogoHero />
        <BogoFeatures />
      </main>
    </div>
  );
};



