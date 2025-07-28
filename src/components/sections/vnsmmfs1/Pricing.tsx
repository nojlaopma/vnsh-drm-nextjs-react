'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/utils/images';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

// Create a context to store the selected checkout URL
export const CheckoutContext = createContext<{
  selectedCheckoutUrl: string;
  setSelectedCheckoutUrl: (url: string) => void;
}>({ 
  selectedCheckoutUrl: '', 
  setSelectedCheckoutUrl: () => {} 
});

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
  const { setSelectedCheckoutUrl } = useContext(CheckoutContext);
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');

  useEffect(() => {
    // Set initial value
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Call on initial load
    checkIfMobile();
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const searchParams = useSearchParams();
  const checkoutBaseUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || 'https://secure.vnsh.com/vnsmmfs1';
  
  const getQueryParams = () => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  };

  const buildCheckoutUrl = (planId: string) => {
    const queryParams = getQueryParams();
    const url = new URL(`${checkoutBaseUrl}/checkout`);
    url.searchParams.append('item_selected', planId);
    
    // Add other query parameters from the current URL
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    
    return url.toString();
  };

  useEffect(() => {
    const fetchPlans = async () => {
      setIsLoading(true);
      
      // Define plans based on the image provided
      const pricingPlans: PricingPlan[] = [
        {
          id: 'magmate-1',
          title: '1<br/>MagMate',
          price: '$0.00',
          originalPrice: '$29.97',
          savings: 'Save $29.97',
          description: '1 MagMate',
          shipping: '$9.97<br/>S&H',
          features: [],
          image: getImagePath('magmate/1705321241647_mag1.png'),
          ctaLink: buildCheckoutUrl('i5vbpsg'),
          ctaText: 'Get 1 MagMate',
          isPopular: false,
          popularityRank: 2
        },
        {
          id: 'magmate-2',
          title: '2<br/>MagMates',
          price: '$19.97',
          originalPrice: '$59.94',
          savings: 'Save $39.97',
          description: '2 MagMates',
          shipping: 'FREE<br/>Shipping',
          features: [],
          image: getImagePath('magmate/1705321253494_mag2.png'),
          ctaLink: buildCheckoutUrl('iv84ped'),
          ctaText: 'Get 2 MagMates',
          isPopular: false,
          popularityRank: 3
        },
        {
          id: 'magmate-3',
          title: '3<br/>MagMates',
          price: '$29.97',
          originalPrice: '$89.91',
          savings: 'Save $59.94',
          description: '3 MagMates',
          shipping: 'FREE<br/>Shipping',
          features: [],
          image: getImagePath('magmate/1705321289565_mag3.png'),
          ctaLink: buildCheckoutUrl('iu7gtjh'),
          ctaText: 'Get 3 MagMates',
          isPopular: true,
          popularityRank: 1
        }
      ];
      
      setPlans(pricingPlans);
      setIsLoading(false);
    };
    
    fetchPlans();
  }, [searchParams]);

  // Sort plans by price for display
  const sortedPlans = useMemo(() => {
    return [...plans].sort((a, b) => Number(a.price.replace('$', '')) - Number(b.price.replace('$', '')));
  }, [plans]);
  
  // Set default selected plan to the popular one, if available
  useEffect(() => {
    if (plans.length > 0) {
      const popularPlan = plans.find(plan => plan.isPopular);
      if (popularPlan) {
        setSelectedPlanId(popularPlan.id);
        setSelectedCheckoutUrl(popularPlan.ctaLink);
      } else {
        setSelectedPlanId(plans[0].id);
        setSelectedCheckoutUrl(plans[0].ctaLink);
      }
    }
  }, [plans, setSelectedCheckoutUrl]);
  
  // Handle plan selection
  const handlePlanClick = (plan: PricingPlan) => {
    setSelectedPlanId(plan.id);
    setSelectedCheckoutUrl(plan.ctaLink);
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading pricing options...</div>;
  }

  return (
    <section className="py-8 px-4 md:px-10 max-w-[550px] mx-auto">
      <div className="grid grid-cols-1 grid-cols-3 gap-2">
        {sortedPlans.map((plan, index) => (
          <div 
            key={plan.id}
            onClick={() => handlePlanClick(plan)}
            className={`relative rounded-lg rounded-[20px] overflow-hidden border-[4px] cursor-pointer ${selectedPlanId === plan.id ? 'border-[#ff0000]' : 'border-[#000] hover:border-[#ff0000]'}`}
          >
            <div className="text-[28px] bg-black text-white text-center py-3 leading-[35px]">
              <span dangerouslySetInnerHTML={{ __html: plan.title }} />
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-4 w-full flex justify-center">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    width={125}
                    height={125}
                    className="object-contain"
                  />
              </div>
              
              <div className="text-[20px] w-full text-center text-gray-500 line-through font-bold italic py-[10px] text-[#000] bg-[#f5f5f5]">
                {plan.originalPrice}
              </div>
              
              <div className="text-[35px] w-full text-center text-[#ff0000] font-bold text-3xl pb-[20px] bg-[#f5f5f5]">
                {plan.price}
              </div>
              
              <div className="text-[25px] bg-[#28a745] text-white w-full text-center leading-[1.2] py-[10px]">
                <span dangerouslySetInnerHTML={{ __html: plan.shipping }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
