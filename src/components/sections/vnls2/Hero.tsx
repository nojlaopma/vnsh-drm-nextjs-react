import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getImagePath } from '@/utils/images';
import VidalyticsPlayer from '@/components/ui/VidalyticsPlayer';

const Hero = () => {
  return (
    <section id="hero" className="py-[35px] md:py-8">
      <div className="max-w-[1265px] mx-auto">
        <div className="text-center mb-[24px] md:mb-[23px]">
          <h2 className="text-[#ff0000] text-[26px] md:text-[31px] font-normal italic mb-[24px] md:mb-[23px] leading-[31px] md:leading-none ">
            URGENT: For Anyone Seeking <u>Better Accuracy!</u>
          </h2>
          <h1 className="text-[23px] md:text-[37px] font-bold mb-[15px] md:mb-[12px] leading-[28px] md:leading-[42px]">
            Increase Accuracy and Gain Confidence With Your Shooting Save Big With Our New Customer Program
          </h1>
          <p className="text-[26px] md:text-[31px] font-normal italic text-gray-800 leading-[31px] md:leading-none">
            (Money-Back <b><u>Guaranteed to Skyrocket Your Accuracy</u></b> In 60 Days Or Less)
          </p>
        </div>
        
        <div className="w-[98%] md:w-[36.8%] mx-auto mb-[43px]">
          <VidalyticsPlayer className="rounded-lg shadow-lg w-full" />
        </div>
        
        <div className="text-center">
          <Link href="#pricing" className="w-full sm:w-auto">
            <Button 
              variant="cta"
              size="lg"
              className="w-full md:w-[72%] mx-auto py-[30px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
            >
              Yes! Give Me My Laser Strike System!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
