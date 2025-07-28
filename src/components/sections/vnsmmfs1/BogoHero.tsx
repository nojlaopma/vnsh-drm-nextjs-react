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
  const checkoutUrl = `https://secure.vnsh.com/vnsmmfs1/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="bg-white font-appleemoji pt-[23px]">
      <div className="mx-auto">
        <div className="text-center md:px-[40px]">
          <h1 className="text-[26px] md:text-[2rem] mb-[2px] md:leading-[39px] leading-[1.2]">
          The Comfiest,<i className='font-bold'> Most Discreet</i> Way to Conceal Spare Mags Right In Your Pocket <u>(Or Anywhere You Want!)</u> – While Still Being Able to <b>Deploy In Seconds </b>…
          </h1>
        </div>

        <div className="mx-auto mb-3 w-[100%] md:w-[97.6%] mt-[24px] md:mt-[24px]">
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
