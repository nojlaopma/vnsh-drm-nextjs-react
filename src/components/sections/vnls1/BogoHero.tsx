import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getImagePath } from '@/utils/images';
import VidalyticsPlayer from '@/components/ui/VidalyticsPlayer';

const BogoHero = () => {
  const searchParams = useSearchParams();
  const utmParams = Array.from(searchParams.entries())
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  const checkoutUrl = `https://secure.vnsh.com/vnls1/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="sm:px-4 bg-white font-arial">
      <div className="max-w-[1265px] mx-auto font-arial">
        <div className="text-center mb-5">
          <h1 className="text-[23px] md:text-[38px] mb-4 leading-none font-arial">
          Cutting-Edge Dry Fire System Maximizes Accuracy With <u>$0.00 Spent On Ammo and 0 Hours At the Range…</u>
          </h1>
          <h1 className="text-center font-bold inline-block text-[34px] italic leading-none">(Train Like the Pros from the Comfort of Your Living Room!)</h1>
        </div>
        
        <div className="w-full px-[100px] mb-8">
          <VidalyticsPlayer 
            playerId="SvCThUZ_l0peXdh_" 
            className="w-full" 
          />
        </div>
        
        <div className="text-center">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-[70%] mx-auto py-[25px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
            >
              Yes! Give Me My Laser Strike System!
            </Button>
          </Link>
        </div>
        <div className="w-full flex justify-center my-4">
            <span className="font-bold text-center bg-[#ff0] text-[red] text-[22px]">
              In Stock Now and Ships FREE!
            </span>
          </div><br></br>

      </div>
    </section>
  );
};

export default BogoHero;
