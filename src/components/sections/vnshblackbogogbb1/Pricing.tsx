'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/utils/images';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface PricingPlan {
  id: string;
  title: string;
  price: string;
  originalPrice: string;
  savings: string;
  description: string;
  shipping: string;
  features: string[];
  image: string;
  ctaLink: string;
  ctaText: string;
  isPopular: boolean;
  popularityRank: number;
}

const Pricing = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  const searchParams = useSearchParams();
  
  // Get all URL parameters as an object
  const urlParams = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());
    return Object.fromEntries(params.entries());
  }, [searchParams]);
  
  // Function to append URL parameters to a base URL
  const buildUrlWithParams = useMemo(() => (baseUrl: string) => {
    if (Object.keys(urlParams).length === 0) return baseUrl;
    
    const url = new URL(baseUrl);
    Object.entries(urlParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    return url.toString();
  }, [urlParams]);
  
  useEffect(() => {
    const loadImages = async () => {
      const [starterImage, eliteImage, ultimateImage] = await Promise.all([
        getImagePath('holster/StarterBlackHolsterMobile.webp'),
        getImagePath('holster/AdvancedBlackHolsterMobile.webp'),
        getImagePath('holster/EnhancedBlackHolsterMobile.webp')
      ]);

      // Define plans with popularity rank (lower number = more popular)
      const plansData = [
        {
          id: 'starter',
          title: 'Starter Pack',
          price: '$79',
          originalPrice: '',
          savings: '$120.90',
          description: '',
          shipping: '(Includes S&H)',
          features: [],
          image: starterImage,
          ctaLink: buildUrlWithParams('https://secure.vnsh.com/vnshblackbogogbb1/starter-checkout'),
          ctaText: 'Add to Cart',
          isPopular: false,
          popularityRank: 3 // Middle popularity
        },
        {
          id: 'advanced',
          title: 'Advanced Pack',
          price: '$199',
          originalPrice: '',
          savings: '$280.77',
          description: '',
          shipping: '+ Free S&H',
          features: ['+ 4 Colors (Black, Gray, Camo, Nude)'],
          image: eliteImage,
          ctaLink: buildUrlWithParams('https://secure.vnsh.com/vnshblackbogogbb1/advanced-checkout'),
          ctaText: 'Add to Cart',
          isPopular: true,
          popularityRank: 1 // Most popular
        },
        {
          id: 'enhanced',
          title: 'Enhanced Pack',
          price: '$149',
          originalPrice: '',
          savings: '$250.80',
          description: '',
          shipping: '+ Free S&H',
          features: ['+ 4 Colors (Black, Gray, Camo, Nude)'],
          image: ultimateImage,
          ctaLink: buildUrlWithParams('https://secure.vnsh.com/vnshblackbogogbb1/enhanced-checkout'),
          ctaText: 'Add to Cart',
          isPopular: false,
          popularityRank: 2 // Least popular
        }
      ];

      // Keep original order but apply margin based on popularityRank
      setPlans(plansData);
      
      setIsLoading(false);
    };

    loadImages();
  }, [buildUrlWithParams]);
  
  if (isLoading) {
    return <div className="py-12 text-center">Loading pricing...</div>;
  }

  return (
    <section id="pricing" className="md:mt-[50px] pb-[50px]">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {[...plans]
            .sort((a, b) => isMobile ? a.popularityRank - b.popularityRank : 0)
            .map((plan) => ( // Sort by popularityRank on mobile/tablet, keep original order on desktop
            <div 
              key={plan.id}
              className={`mx-auto w-full max-w-[300px]  mb-[25px] md:mb-[0]`}
              style={{
                marginTop: !isMobile ? `${(plan.popularityRank - 1) * 15}px` : '0'
              }}
            >
              <div className={`flex flex-col items-center rounded-lg overflow-hidden shadow-lg pb-[25px] bg-white border-solid border-[#a3a0a0]  ${plan.id === 'advanced' ? 'border-[2px] ' : 'border-[1px] '}`}>
                <div className="relative w-full">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                    loading="lazy"
                    decoding="async"
                    quality={85}
                  />
                  {plan.features.map((feature, index) => (
                    <div key={index} className="w-full text-center bg-black text-white py-[3px] text-[14px]">
                      {feature}
                    </div>
                  ))}
                 
                 {plan.id === 'advanced' ? (
                 <div className="flex flex-col grid grid-cols-2 md:grid md:grid-cols-2 lg:grid-cols-2 gap-1 bg-[#ededed]">
                   <div className='flex flex-col'>
                        <Image
                            src="/images/tacticalbag/SpecialOffer2.avif"
                            alt=""
                            width={146}
                            height={123}
                            className="mx-auto"
                            loading="lazy"
                            decoding="async"
                        />
                   </div>
                   <div className='flex flex-col py-[20px] px-[3px]'> <span className="bg-[#fadf28] font-bold text-[13px]">The Operator's Choice</span>
                    <span className="text-[10px] py-[10px] leading-[11px]">A 20-gallon, military-grade tactical range bag with plenty of room for multiple handguns, hearing protection, and ammo for the entire day.</span>
                   </div>
                 </div>
                 ) : null}

                </div>
                <div className={`p-3 w-full`}>
                  {/* <h3 className="text-2xl font-bold mb-2">{plan.title}</h3> */}
                  <div className="text-[40px] font-bold mb-1 text-center">
                    {plan.price}
                    <span className="text-[18px] text-[#ff0000] ml-2">{plan.shipping}</span>
                  </div>
                  <p className="text-black text-center font-bold mb-1 text-[19px]">
                    You Saved {plan.savings}
                  </p>
                  <p className="text-black text-center mb-1 text-[19px]">{plan.description}</p>
                </div>
                
                <div className="text-center w-full">
                  <a
                    href={plan.ctaLink}
                    className="inline-block w-full max-w-[200px] transition-transform duration-200 hover:scale-110"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/GBB_Add_to_cart.webp"
                      alt="Add to Cart"
                      width={210}
                      height={61}
                      className="h-auto h-[61px]"
                      loading="lazy"
                      decoding="async"
                      quality={85}
                    />
                  </a>
                </div>  
                
                <div className="mt-2">
                  <Image
                    src="/images/GBB_cardsMobile.webp"
                    alt="Payment Methods"
                    width={180}
                    height={34}
                    className="mx-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
