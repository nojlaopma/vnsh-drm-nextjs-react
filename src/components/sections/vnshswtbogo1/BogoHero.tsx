import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { images } from '@/utils/images';
import VidalyticsPlayer from '@/components/ui/VidalyticsPlayer';

const BogoHero = () => {
  const searchParams = useSearchParams();
  const utmParams = Array.from(searchParams.entries())
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  const checkoutUrl = `https://secure.vnsh.com/vnshswtbogo1/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="sm:px-4 bg-white font-arial pt-[25px]">
      <div className="mx-auto sm:px-4">
        <div className="text-center">
          <h1 className="md:px-[50px] font-bold text-[24px] md:text-[32px] mb-1 md:mb-4 leading-[29px] md:leading-[39px] mx-[25px] md:mx-[0]">
          <span className="text-[#ff0000]">Limited Rebranding Liquidation:</span> #1 “Gun-Free Zone” Weapon!
          <span className="block md:inline"><span className="text-[#ff0000]"> Buy 1, Get 2 FREE</span> On BRUTAL 9,000 Volt Shockwave Torches!</span>
          </h1>
        </div>
        
        <div className="w-full overflow-hidden flex justify-center">
            <div className="relative w-full mt-[15px] md:mt-[5px]">
              <Image
                src={images.swt.hero}
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                width={600}
                height={327}
                className="w-[430px] h-[234px] md:w-[600px] md:h-[327px] mx-auto mt-[5px] md:mt-[3.8px]"
                priority
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default BogoHero;
