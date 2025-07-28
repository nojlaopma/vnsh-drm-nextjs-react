'use client';

import { useEffect } from 'react';
// Import components from the vnsmmfs1 sections
import { BogoHero, BogoFeatures, Pricing } from '@/components/sections/vnsmmfs1';

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
      floater.className = 'banner-floater w-full bg-[#ffa500] text-center top-0 z-10 text-[18px] md:text-[2rem] leading-[1.5] font-bold font-500 text-black font-appleemoji';
      
      const link = document.createElement('h2');
      link.className = '';
      link.innerHTML = `Handing Out FREE MagMates Today! (just cover s&h)`;
      
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
    <div className="w-full bg-[#fff] px-[20px] md:px-[50px] max-w-[1140px] mx-auto relative overflow-hidden min-h-screen flex flex-col font-arial rounded-[3px]">
      <main>
        <BogoHero />
        <BogoFeatures />
      </main>
    </div>
  );
};



