'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { getImagePath } from '@/utils/images';

// Default logo size
const DEFAULT_LOGO_SIZE = { width: 120, height: 40 };
const BOGO_LOGO_SIZE = { width: 219, height: 73 };

const Header = () => {
  const pathname = usePathname();
  const [logoPath, setLogoPath] = useState<string>('');
  
  // Determine logo size and showContact based on the current route
  const isBogoPage = pathname?.includes('vnshblackbogo1') || pathname?.includes('vnshcamobogo1') || pathname?.includes('vnsmp1') || pathname?.includes('vnls1');
  const logoSize = isBogoPage ? BOGO_LOGO_SIZE : DEFAULT_LOGO_SIZE;

  useEffect(() => {
    const loadLogo = async () => {
      const path = await getImagePath('White-VNSH-Logo.webp');
      setLogoPath(path);
    };

    loadLogo();
  }, []);

  if (!logoPath) {
    return (
      <header className="bg-black pt-[10px] pb-[10px]">
        <div className="max-w-[1265px] mx-auto px-4 md:px-8 lg:px-[70px] h-[64px] flex items-center">
          {/* Placeholder for logo */}
        </div>
      </header>
    );
  }
  return (
    <header className="bg-black pt-[10px] pb-[10px] font-arial">
      <div className="max-w-[1265px] mx-auto px-4 md:px-8 lg:px-[70px]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full p-[10px] px-[3px]">
          <Link href="/" className="lg:flex-1 lg:flex lg:justify-start">
            <Image 
              src={logoPath} 
              alt="VNSH Logo" 
              width={logoSize.width}
              height={logoSize.height}
              priority
              loading="eager"
              decoding="sync"
              className="aspect-auto object-contain"
            />
          </Link>
          {isBogoPage && (
            <div className="w-full lg:w-auto text-center lg:text-right mt-4 lg:mt-0">
              <div 
                id="header-contact"
                className="text-white text-lg md:text-[22px] lg:text-right"
              >
                Questions? | 888-526-1885
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
