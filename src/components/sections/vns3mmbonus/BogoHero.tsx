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
  const checkoutUrl = `https://secure.vnsh.com/vns3mmbonus/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="sm:px-4 bg-white font-arial pt-[20px]">
      <div className="max-w-[1265px] mx-auto sm:px-4">
        <div className="text-center mb-[19px] md:mb-[10px] lg:px-[42px]">
          <h1 className="text-[23px] md:text-[36px] mb-[2px] md:leading-[1.16] leading-[1.2]">
          <i className='font-bold'> Insanely Comfy Holster</i> Makes Any Semi-Auto (Plus 2 Extra Mags) <i className='font-bold'>Disappear In Plain Sight</i> Even If You Wear <u className='text-italic'>Nothing But Gym Shorts, Sweatpants and T-Shirts!</u>
          </h1>
          <p className="text-center font-bold text-[red] text-[22px] md:text-[25px] italic leading-[26px] mt-[8px] md:mt-[22px] "><span className='bg-[#ff0] px-[5px] md:px-[5]'>Guaranteed Comfort Or 100% Of Your Money Back!</span>
          </p>
        </div>
        
        <div className="mx-auto mb-4 md:mb-3 w-[93%] md:w-[97.7%] mt-[10px] md:mt-[20px]">
          <VidalyticsPlayer 
            playerId="HwShRL3Xs4kohiz4" 
            className="rounded-lg shadow-lg w-full" 
          />
        </div>
        <div className="text-center w-[90%] md:w-[89%] mx-auto">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[30px] px-1 font-bold animate-pulse-cta text-[22px] md:text-[2rem] whitespace-normal break-words rounded-[0.25rem]"
            >
              Give Me My VNSH Holster + FREE MagMate
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BogoHero;
