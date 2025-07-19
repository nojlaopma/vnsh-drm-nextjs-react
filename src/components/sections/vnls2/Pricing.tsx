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
        getImagePath('LSSMobile.webp'),
        getImagePath('LSSMobile3.webp'),
        getImagePath('LSSMObile2.webp')
      ]);

      // Define plans with popularity rank (lower number = more popular)
      const plansData = [
        {
          id: 'starter',
          title: 'Starter Pack',
          price: '$49.97',
          originalPrice: '$79.97',
          savings: '$30.00',
          description: '(Pick Your Caliber)',
          features: [],
          image: starterImage,
          ctaLink: buildUrlWithParams('https://secure.vnsh.com/vnls2/starter-checkout'),
          ctaText: 'Add to Cart',
          isPopular: false,
          popularityRank: 3 // Middle popularity
        },
        {
          id: 'advanced',
          title: 'Advanced Pack',
          price: '$129.97',
          originalPrice: '$399.88',
          savings: '$269.91',
          description: '',
          features: ['+ All Calibers (9mm, .380, .40 & .45)'],
          image: eliteImage,
          ctaLink: buildUrlWithParams('https://secure.vnsh.com/vnls2/advanced-checkout'),
          ctaText: 'Add to Cart',
          isPopular: true,
          popularityRank: 1 // Most popular
        },
        {
          id: 'enhanced',
          title: 'Enhanced Pack',
          price: '$199.97',
          originalPrice: '$599.88',
          savings: '$109.97',
          description: '(Pick Your Caliber)',
          features: ['+ Extra Laser Cartidge'],
          image: ultimateImage,
          ctaLink: buildUrlWithParams('https://secure.vnsh.com/vnls2/enhanced-checkout'),
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
    <section id="pricing" className="pb-[50px]">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {[...plans]
            .sort((a, b) => isMobile ? a.popularityRank - b.popularityRank : 0)
            .map((plan) => ( // Sort by popularityRank on mobile/tablet, keep original order on desktop
            <div 
              key={plan.id}
              className={`mx-auto w-full max-w-[300px] rounded-lg overflow-hidden shadow-lg mb-[25px] md:mb-[0] ${
                plan.id === 'advanced' ? 'bg-[#ededed]' : 'bg-white'
              }`}
              style={{
                marginTop: !isMobile ? `${(plan.popularityRank - 1) * 15}px` : '0'
              }}
            >
              <div className="flex flex-col items-center pb-[25px]">
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
                </div>
                <div className={`p-3 w-full ${
                  plan.id === 'advanced' ? 'bg-[#ededed]' : ''
                }`}>
                  
                  {/* <h3 className="text-2xl font-bold mb-2">{plan.title}</h3> */}
                  <div className="text-[40px] font-bold mb-1 text-center">
                    {plan.price}
                    <span className="text-[18px] text-red-500 ml-2">+ Free S&H</span>
                  </div>
                  <p className="text-black text-center font-bold mb-1 text-[19px]">
                    You Saved {plan.savings}
                  </p>
                  <p className="text-black text-center mb-1 text-[19px]">{plan.description}</p>
                  
                  {plan.features.map((feature, index) => (
                    <div key={index} className="bg-black text-white px-3 py-[3px] rounded-md text-[14px] mb-1">
                      {feature}
                    </div>
                  ))}
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
