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
}

const Pricing = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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

      setPlans([
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
        },
        {
          id: 'elite',
          title: 'Elite Pack',
          price: '$129.97',
          originalPrice: '$399.88',
          savings: '$269.91',
          description: '',
          features: ['+ All Calibers (9mm, .380, .40 & .45)'],
          image: eliteImage,
          ctaLink: buildUrlWithParams('https://secure.vnsh.com/vnls2/elite-checkout'),
          ctaText: 'Add to Cart',
          isPopular: false,
        },
        {
          id: 'ultimate',
          title: 'Ultimate Pack',
          price: '$199.97',
          originalPrice: '$599.88',
          savings: '$399.91',
          description: '',
          features: [
            '+ All Calibers (9mm, .380, .40 & .45)',
            '+ 5 FREE Targets ($50 Value)',
            '+ FREE Shipping',
            '+ FREE Training Guide'
          ],
          image: ultimateImage,
          ctaLink: buildUrlWithParams('https://secure.vnsh.com/vnls2/ultimate-checkout'),
          ctaText: 'Add to Cart',
          isPopular: false,
        }
      ]);
      
      setIsLoading(false);
    };

    loadImages();
  }, [buildUrlWithParams]);
  
  if (isLoading) {
    return <div className="py-12 text-center">Loading pricing...</div>;
  }

  return (
    <section id="pricing" className="pb-[50px]">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`mx-auto w-full max-w-[300px] rounded-lg overflow-hidden shadow-lg ${
                plan.id === 'elite' ? 'bg-[#ededed]' : 'bg-white'
              }`}
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
                <div className={`p-4 w-full ${
                  plan.id === 'elite' ? 'bg-[#ededed]' : ''
                }`}>
                  
                  {/* <h3 className="text-2xl font-bold mb-2">{plan.title}</h3> */}
                  <div className="text-4xl font-bold mb-2 text-center">
                    {plan.price}
                    <span className="text-[18px] text-red-500 ml-2">+ Free S&H</span>
                  </div>
                  <p className="text-black text-center font-bold mb-2">
                    You Saved {plan.savings}
                  </p>
                  <p className="text-black text-center mb-4">{plan.description}</p>
                  
                  {plan.features.map((feature, index) => (
                    <div key={index} className="bg-black text-white px-3 py-2 rounded-md text-sm mb-2 text-center">
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
                      width={200}
                      height={60}
                      className="w-full h-auto"
                      loading="lazy"
                      decoding="async"
                      quality={85}
                    />
                  </a>
                </div>  
                
                <div className="mt-4">
                  <Image
                    src="/images/GBB_cardsMobile.webp"
                    alt="Payment Methods"
                    width={160}
                    height={40}
                    className="mx-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {plan.isPopular && (
                  <div className="bg-green-500 text-white text-center py-1 font-bold w-full">
                    MOST POPULAR
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
