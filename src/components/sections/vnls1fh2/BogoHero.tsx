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
  const checkoutUrl = `https://secure.vnsh.com/vnls1fh2/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="sm:px-4 bg-white font-arial">
      <div className="max-w-[1265px] mx-auto font-arial">
        <div className="text-center mb-[25px] md:mb-[21px]">
          <h1 className="text-[23px] md:text-[38px] mb-4 md:mb-3 leading-[28px] md:leading-[43px] font-arial mt-[14px] md:mt-[10px]">
          Cutting-Edge Dry Fire System Maximizes Accuracy With <u>$0.00 Spent On Ammo and 0 Hours At the Range…</u>
          </h1>
          <h1 className="text-center font-bold inline-block text-[26px] md:text-[34px] italic leading-[30px] md:leading-none">(Train Like the Pros from the Comfort of Your Living Room!)</h1>
        </div>
        
        <div className="w-full md:px-[84px] mb-2">
          <VidalyticsPlayer 
            playerId="SvCThUZ_l0peXdh_" 
            className="w-full" 
          />
        </div>
        
        <div className="text-center">
          <Link href={checkoutUrl} className="w-full" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full md:w-[85%] mx-auto py-[3rem] md:py-[2rem] px-4 text-center font-bold animate-pulse-cta text-[1.425rem] md:text-[1.8rem] text-[1rem] leading-[2rem] whitespace-normal break-words"
            >
              Give Me My Laser Strike System + FREE VNSH Holster
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BogoHero;
