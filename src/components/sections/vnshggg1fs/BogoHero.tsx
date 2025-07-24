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
  const checkoutUrl = `https://secure.vnsh.com/vnshggg1fs/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="sm:px-4 bg-white font-arial pt-[16px]">
      <div className="mx-auto">
        <div className="text-center ">
          <p className="text-center text-[23px] md:text-[32px] text-[#FF9C00] font-bold leading-[27px] md:leading-[37px] px-[0] md:px-[50px] mx-[1px]">
          Awful New <span className="text-[#ff0000]">Gun Confiscation Law Activated</span> In 21 States…
          This <span className="text-[#ff0000]">FREE Book</span> Shows You How to Stay Armed!
          </p>
        </div>
        
        <div className="w-full overflow-hidden flex justify-center">
            <div className="relative w-full">
              <Image
                src={images.ggg.hero1}
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                width={400}
                height={400}
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto mt-[10px] md:mt-[16px]"
                priority
                />
            </div>
        </div>
      </div>

      <div className="text-center mt-[20px] md:mt-[20px] font-sans">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-[95%] md:w-[92%] mx-auto py-[40px] md:py-[26px] text-center font-bold animate-pulse-cta text-[1.3rem] md:text-[1.75rem] whitespace-normal break-words font-bolder leading-[1.3] md:leading-[1.75]"
              >
                Yes, Give Me My FREE Hardcopy of the Guerrilla Gun Guide!
              </Button>
            </Link>
          </div>
    </section>
  );
};

export default BogoHero;
