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
  const isVnls2 = pathname?.includes('vnls2');
  const isVnls1 = pathname?.includes('vnls1');
  const isVns3mmbonus = pathname?.includes('vns3mmbonus');
  const isVnshlite1 = pathname?.includes('vnshlite1');
  const isVnsmm1 = pathname?.includes('vnsmm1');
  const isVnshggg1 = pathname?.includes('vnshggg1');

  let maxWidth = 'max-w-[1200px]';
  let paddingBottom = '';
  let backgroundColor = 'bg-[#f7f4f4]';
  let footerLinkGap = 'gap-[25px] md:gap-[11px]';
  let footerLinkPaddingBottom = 'pb-[20px]';
  let copyRightText = 'text-center color-[#212529] text-[16px]';
  let footerCopyrightMarginBottom = '';
  let footerLinkMarginTop = '';

  if( isVnls1 ) {
    maxWidth = 'max-w-[1240px]';
    paddingBottom = 'pb-[34px]';
  }else if( isVnls2 ) {
    maxWidth = 'max-w-[1240px]';
    backgroundColor = 'bg-[#f7f4f4] md:bg-[#f7f4f4]';
    footerLinkGap = 'gap-[16px]';
  }else if( isVnshlite1  || isVnsmm1) {
    maxWidth = 'max-w-[1140px]';
    backgroundColor = 'bg-[#f7f4f4] md:bg-[#f7f4f4]';
  }else if( isVnshbogo ) {
    footerLinkPaddingBottom = 'pb-[54px]';
    footerLinkGap = 'md:gap-[11px]';
    copyRightText = 'text-center color-[#212529]';
    footerLinkMarginTop = 'mt-[17px] md:mt-[0]';
    footerCopyrightMarginBottom = 'mb-[-4px] md:mb-[0]';
  }else if( isVnsmm1 || isVns3mmbonus  ) {
    footerLinkPaddingBottom = 'pb-[50px]';
    footerLinkGap = 'md:gap-[16px]';
    copyRightText = 'text-center text-[18px]';
    footerCopyrightMarginBottom = 'mb-[-10px] md:mb-[18px]';
    footerLinkMarginTop = 'mt-[27px] md:mt-[0]';
  }else if( isVnshggg1 ) {
    footerLinkPaddingBottom = 'pb-[50px] md:pb-[50px]';
    footerLinkGap = 'md:gap-[16px]';
    copyRightText = 'text-center text-[18px]';
    footerCopyrightMarginBottom = 'mb-[-10px] md:mb-[18px]';
    footerLinkMarginTop = 'mt-[27px] md:mt-[0]';
  }



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
  
  if( isVnshlite1 || isVnsmm1){
    return (
      <footer className={`${maxWidth} ${backgroundColor} w-full px-0 md:px-8 md:px-[70px] mx-auto font-arial  md:pb-[42px] pb-[20px] md:pb-[0]`}>
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
  
        <div className="max-w-[1100px] mx-auto font-arial text-center text-[17.5px] leading-[48px] md:leading-[24px] font-400">
          <div id="footer-copyright" className="break-words md:mx-[0]">
            &copy; {currentYear} VNSH.com{isVnsmm1 ? '' : '.'} All Rights Reserved.
            <span 
                onClick={() => setActiveModal('terms')}
                className={`bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto ${footerLinkMarginTop}`}
                aria-label="View Terms & Disclaimer"
              > Terms & Disclaimer<span className="md:text-[22px]"> |</span>
              </span>
              <span 
                onClick={() => setActiveModal('privacy')}
                className={`bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto ${footerLinkMarginTop}`}
                aria-label="View Privacy Policy"
              > Privacy Policy<span className="md:text-[22px]"> |</span>
              </span>

              <span 
                onClick={() => setActiveModal('shipping')}
                className={`bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto ${footerLinkMarginTop}`}
                aria-label="View Shipping Policy"
              > Shipping Policy<span className="md:text-[22px]"> |</span>
              </span>
              <span 
                onClick={() => setActiveModal('returns')}
                className={`bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto ${footerLinkMarginTop}`}
                aria-label="View Return Policy"
              >Return Policy&nbsp;
              </span>

          </div>
          
          
          {logoPath && (
            <div className="footer-logo-container flex justify-center pb-[53px] mt-[5px]">
              <div className="w-[225px] md:w-[325px]">
                <Image 
                  src={logoPath}
                  alt="VNSH Logo" 
                  width={225} 
                  height={75} 
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 225px"
                />
              </div>
            </div>
          )}
        </div>
      </footer>
    );
  }


  return (
    <footer className={`${maxWidth} ${backgroundColor} w-full px-4 md:px-8 lg:px-[70px] mx-auto font-arial ${paddingBottom}`}>
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
        <div id="footer-copyright" className={`${copyRightText} ${footerCopyrightMarginBottom}`}>
          &copy; {currentYear} VNSH.com{isVnshbogo || isVnls2 || isVns3mmbonus || isVnshggg1 ? '.' : ''} All Rights Reserved.
        </div>
        
        <div id="footer-links" className={`flex flex-wrap justify-center gap-4 w-full text-[18px] leading-[0.8] ${footerLinkPaddingBottom}`}>
          <div className={`flex flex-col sm:flex-row ${footerLinkGap}`}>
            <button 
              onClick={() => setActiveModal('terms')}
              className={`bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto ${footerLinkMarginTop}`}
              aria-label="View Terms & Disclaimer"
            >
              Terms & Disclaimer
            </button>

            <button 
              onClick={() => setActiveModal('privacy')}
              className={`bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto ${footerLinkMarginTop}`}
              aria-label="View Privacy Policy"
            >
              Privacy Policy
            </button>

            <button 
              onClick={() => setActiveModal('shipping')}
              className={`bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto ${footerLinkMarginTop}`}
              aria-label="View Shipping Policy"
            >
              Shipping Policy
            </button>

            <button 
              onClick={() => setActiveModal('returns')}
              className={`bg-transparent border-none text-[#212529] cursor-pointer p-0 no-underline px-[2px] w-full sm:w-auto ${footerLinkMarginTop}`}
              aria-label="View Return Policy"
            >
              Return Policy
            </button>
          </div>
        </div>
        
        {logoPath && (
          <div className="footer-logo-container flex justify-center pb-[53px] mt-[5px]">
            <div className="w-[225px] md:w-[325px]">
              <Image 
                src={logoPath}
                alt="VNSH Logo" 
                width={225} 
                height={75} 
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
                quality={85}
                sizes="(max-width: 768px) 100vw, 225px"
              />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
