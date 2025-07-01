'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/utils/images';

const Header = () => {
  const [logoPath, setLogoPath] = useState<string>('');

  useEffect(() => {
    const loadLogo = async () => {
      const path = await getImagePath('White-VNSH-Logo.webp');
      setLogoPath(path);
    };

    loadLogo();
  }, []);

  if (!logoPath) {
    return (
      <header className="bg-black py-2">
        <div className="max-w-[1265px] mx-auto px-4 md:px-8 lg:px-[70px] h-[64px] flex items-center">
          {/* Placeholder for logo */}
        </div>
      </header>
    );
  }
  return (
    <header className="bg-black py-2">
      <div className="max-w-[1265px] mx-auto px-4 md:px-8 lg:px-[70px]">
        <div id="header-logo" className="flex justify-center lg:justify-start p-2.5 w-full">
          <Link href="/">
            <Image 
              src={logoPath} 
              alt="VNSH Logo" 
              width={120} 
              height={40} 
              priority
              loading="eager"
              decoding="sync"
              className="h-[40px] w-[120px] aspect-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
