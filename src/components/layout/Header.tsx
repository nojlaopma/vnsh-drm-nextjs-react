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
  const contactNumber = '888-526-1885';
  const pathname = usePathname();
  const [logoPath, setLogoPath] = useState<string>('');
  
  // Determine logo size and showContact based on the current route
  const listSpage = ['vnshblackbogo1', 'vnshcamobogo1','vnsmp1','vnls1','vns3mmbonus','vnshlite1','vnshggg1','vnshblackbogogbb1'];
  const isBogoPage = listSpage.some(value => pathname?.includes(value));

  const isVnls = pathname?.includes('vnls2') || pathname?.includes('vnls1');
  const isVnls2 = pathname?.includes('vnls2');
  const isVnshlite1 = pathname?.includes('vnshlite1');
  const isVnsmm1 = pathname?.includes('vnsmm1');

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

  if( isVnshlite1 || isVnsmm1){
    return(
    <header className="bg-black font-arial">
      <div className="max-w-[1265px] mx-auto px-4 md:px-8 md:px-[70px]">
        <div className={`flex flex-col md:flex-row md:justify-between items-center w-full md:py-[15.5px] py-[6px]`}>
          <Link href="/" className="md:flex-1 md:flex md:justify-center pt-[10px] md:pt-[0]">
            <Image 
              src={logoPath} 
              alt="VNSH Logo" 
              width="218"
              height="72"
              priority
              loading="eager"
              decoding="sync"
              className="aspect-auto object-contain"
            />
          </Link>
            <div className="md:flex-1 md:flex md:justify-center w-full md:w-auto text-center mb-[10px] md:mb-[0]">
              <div 
                id="header-contact"
                className={`text-white text-[12px] md:text-[22px]`}
              >
                Questions? | {contactNumber}
              </div>
            </div>
        </div>
      </div>
    </header>
    );
  }

  return (
    <header className="bg-black pt-[10px] md:pb-[10px] pb-[6px] font-arial">
      <div className="max-w-[1265px] mx-auto px-4 md:px-8 lg:px-[70px]">
        <div className={`flex flex-col lg:flex-row lg:justify-between items-center w-full pt-[10px] md:pb-[10px] px-[3px] ${isVnls ? 'md:pl-[23px]' : ''} ${isVnls2 ? 'pb-[18px]' : ''}`}>
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
            <div className="w-full lg:w-auto text-center lg:text-right md:mt-4 mt-3 lg:mt-0">
              <div 
                id="header-contact"
                className={`text-white text-[15px] md:text-[22px] lg:text-right ${isVnls ? 'md:pr-[20px]' : ''}`}
              >
                Questions? | {contactNumber}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );


};

export default Header;
