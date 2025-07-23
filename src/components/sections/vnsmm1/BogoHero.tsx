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
  const checkoutUrl = `https://secure.vnsh.com/vnsmm1/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="sm:px-4 bg-white font-appleemoji pt-[24px] md:mx-[-43px] mx-[-5px]">
      <div className="max-w-[1140px] mx-auto sm:px-4">
        <div className="text-center mb-[5px] md:mb-[10px] md:px-[60px]">
          <h1 className="text-[26px] md:text-[38px] mb-[2px] md:leading-[45.6px] leading-[1.2] md:px-[0] md:ml-[-15px]">
          The Comfiest,<i className='font-bold'> Most Discreet</i> Way to Conceal Spare Mags Right In Your Pocket <u>(Or Anywhere You Want!)</u> –<br></br> While Still Being Able to <b>Deploy In Seconds </b>…
          </h1>
        </div>

        <div className="mx-auto mb-3 w-[100%] md:w-[100%] mt-[25px] md:mt-[25px]">
          <VidalyticsPlayer 
            playerId="QBcF0gJAHJbvE4zx" 
            className="rounded-lg shadow-lg w-full md:w-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default BogoHero;
