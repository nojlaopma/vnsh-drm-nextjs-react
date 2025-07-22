import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { images } from '@/utils/images';

const BogoHero = () => {
  const searchParams = useSearchParams();
  const utmParams = Array.from(searchParams.entries())
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  const checkoutUrl = `https://secure.vnsh.com/vnshlite1/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="sm:px-4 bg-white font-appleemoji pt-[24px]">
      <div className="max-w-[1140px] mx-auto sm:px-4">
        <div className="text-center mb-[19px] md:mb-[10px] md:px-[100px]">
          <h1 className="text-[26px] md:text-[37px] mb-[2px] md:leading-[44.5px] leading-[1.2]">
          <i className='font-bold'> New Ultra-Minimal</i> "Little Brother" of the <i className='font-bold'>Comfiest Holster On Earth...</i><br></br> <u className='text-italic'>Max Concealment In ANY Clothing!</u>
          </h1>
          <p className="text-center font-bold text-[#dc3545] text-[18px] md:text-[25px] italic leading-[28px] mt-[26px] md:mt-[25px] "><span className='bg-[#ff0] pt-[5px] md:pt-[0]'>Guaranteed Comfort Or 100% Of Your Money Back!</span>
          </p>
        </div>
        
        <div className="w-full overflow-hidden flex justify-center">
            <div className="relative w-full">
              <Image
                src={images.holsterlite.lite1}
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                width={420}
                height={280}
                className="w-[420px] h-[280px] md:w-[700px] md:h-[467px] mx-auto mt-[8px] md:mt-[19px]"
                priority
                />
            </div>
        </div>

        <div className="text-center w-[100%] md:w-[89%] mx-auto md:mt-[50px] mt-[50px] mb-[34px] md:mb-[20px]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[50px] md:py-[40px] px-10 md:px-1 font-bold animate-pulse-cta text-[28px] md:text-[30px] whitespace-normal break-words rounded-[0.25rem] leading-[30px] font-sans"
            >
              Yes, Give Me My VNSH Holster Lite Risk-Free!
            </Button>
          </Link>
        </div>

        <div className="w-full text-center my-[15px] md:my-[28px]">
          <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px] font-sans leading-[34px] md:leading-[28px]">
          60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
          </span>
        </div>

      </div>
    </section>
  );
};

export default BogoHero;
