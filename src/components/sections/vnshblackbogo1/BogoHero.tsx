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
  const checkoutUrl = `https://secure.vnsh.com/vnshblackbogo1/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="sm:px-4 bg-white font-arial pt-[20px]">
      <div className="max-w-[1265px] mx-auto sm:px-4">
        <div className="text-center mb-8 lg:px-[42px]">
          <h1 className="text-[23px] md:text-[35px] mb-[10px] md:leading-[1.14]">
          <i className='font-bold'> Insanely Comfy Holster</i> Makes Any Semi-Auto (Plus 2 Extra Mags) <i className='font-bold'>Disappear In Plain Sight</i> Even If You Wear <u className='text-italic'>Nothing But Gym Shorts, Sweatpants and T-Shirts!</u>
          </h1>
          <p className="text-center font-bold text-red-600 text-[25px] italic leading-[25px] mt-[12px]"><span className='bg-[#ff0] '>Guaranteed Comfort Or 100% Of Your Money Back!</span>
          </p>
        </div>
        
        <div className="mx-auto mb-3 w-[97.7%] mt-[40px]">
          <VidalyticsPlayer 
            playerId="HwShRL3Xs4kohiz4" 
            className="rounded-lg shadow-lg w-full" 
          />
        </div>
        <div className="text-center w-[97.7%]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[2rem] px-4 font-bold animate-pulse-cta text-[1.125rem] md:text-[2rem] whitespace-normal break-words"
            >
              Give Me This Buy 1, Get 1 FREE Deal Before It's Gone!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BogoHero;
