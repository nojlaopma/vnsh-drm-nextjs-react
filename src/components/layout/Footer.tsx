'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getImagePath } from '@/utils/images';
import { PolicyModal, PolicyContent } from './PolicyModal';
import TermsContent from '../policies/TermsContent';
import PrivacyPolicyContent from '../policies/PrivacyPolicyContent';
import ShippingPolicyContent from '../policies/ShippingPolicyContent';
import ReturnPolicyContent from '../policies/ReturnPolicyContent';

const Footer = () => {
  const pathname = usePathname();
  const [logoPath, setLogoPath] = useState<string>('');

  const bogoValues = ['vnshblackbogo1', 'vnshcamobogo1'];
  const isVnshbogo = bogoValues.some(value => pathname?.includes(value));

  useEffect(() => {
    const loadLogo = async () => {
      const path = await getImagePath('VNSHLogoFooter.webp');
      setLogoPath(path);
    };

    loadLogo();
  }, []);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const openModal = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);
  
  return (
    <footer className="bg-[#f7f4f4] w-full px-4 md:px-8 lg:px-[70px] max-w-[1200px] mx-auto font-arial">
      {/* Terms & Conditions Modal */}
      <PolicyModal 
        isOpen={activeModal === 'terms'} 
        onClose={closeModal}
        title="Terms & Disclaimer"
      >
        <PolicyContent >
          <TermsContent />
        </PolicyContent>
      </PolicyModal>

      {/* Privacy Policy Modal */}
      <PolicyModal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal}
        title="Privacy Policy"
      >
        <PolicyContent>
          <PrivacyPolicyContent />
        </PolicyContent>
      </PolicyModal>

      {/* Shipping Policy Modal */}
      <PolicyModal 
        isOpen={activeModal === 'shipping'} 
        onClose={closeModal}
        title="Shipping Policy"
      >
        <PolicyContent>
          <ShippingPolicyContent />
        </PolicyContent>
      </PolicyModal>

      {/* Return Policy Modal */}
      <PolicyModal 
        isOpen={activeModal === 'returns'} 
        onClose={closeModal}
        title="Return Policy"
      >
        <PolicyContent>
          <ReturnPolicyContent />
        </PolicyContent>
      </PolicyModal>

      <div className="max-w-[1100px] mx-auto px-4 font-arial">
        <div id="footer-copyright" className={isVnshbogo ? 'text-center color-[#212529]' : 'text-center pb-[18px] text-[18px]'}>
          &copy; {currentYear} VNSH.com{isVnshbogo ? '.' : ''} All Rights Reserved.
        </div>
        
        <div id="footer-links" className={`flex flex-wrap justify-center gap-4 w-full  text-[18px] leading-[0.8] ${isVnshbogo ? 'pb-[54px]' : 'pb-[50px]'}`}>
          <div className={`flex flex-col sm:flex-row gap-[25px] ${isVnshbogo ? 'md:gap-[11px]' : 'md:gap-4'}`}>
            <button 
              onClick={() => setActiveModal('terms')}
              className="bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto"
              aria-label="View Terms & Disclaimer"
            >
              Terms & Disclaimer
            </button>

            <button 
              onClick={() => setActiveModal('privacy')}
              className="bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto"
              aria-label="View Privacy Policy"
            >
              Privacy Policy
            </button>

            <button 
              onClick={() => setActiveModal('shipping')}
              className="bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto"
              aria-label="View Shipping Policy"
            >
              Shipping Policy
            </button>

            <button 
              onClick={() => setActiveModal('returns')}
              className="bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto"
              aria-label="View Return Policy"
            >
              Return Policy
            </button>
          </div>
        </div>
        
        {logoPath && (
          <div className="footer-logo-container flex justify-center">
            <div className="w-[325px]">
              <Image 
                src={logoPath}
                alt="VNSH Logo" 
                width={325} 
                height={183} 
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
                quality={85}
                sizes="(max-width: 768px) 100vw, 325px"
              />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
