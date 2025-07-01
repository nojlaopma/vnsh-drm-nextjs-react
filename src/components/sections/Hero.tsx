import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getImagePath } from '@/utils/images';
import VidalyticsPlayer from '@/components/ui/VidalyticsPlayer';

const Hero = () => {
  return (
    <section id="hero" className="py-8">
      <div className="max-w-[1265px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#ff0000] text-[26px] md:text-[31px] font-normal italic mb-4 leading-none">
            URGENT: For Anyone Seeking <u>Better Accuracy!</u>
          </h2>
          <h1 className="text-[23px] md:text-[37px] font-bold mb-4 leading-none">
            Increase Accuracy and Gain Confidence With Your Shooting Save Big With Our New Customer Program
          </h1>
          <p className="text-[23px] md:text-[31px] font-normal italic text-gray-800 leading-none">
            (Money-Back <b><u>Guaranteed to Skyrocket Your Accuracy</u></b> In 60 Days Or Less)
          </p>
        </div>
        
        <div className="w-full md:w-[50%] mx-auto mb-8">
          <VidalyticsPlayer className="rounded-lg shadow-lg w-full" />
        </div>
        
        <div className="text-center">
          <Link href="#pricing" className="w-full sm:w-auto">
            <Button 
              variant="cta"
              size="lg"
              className="w-[85%] md:w-[80%] mx-auto py-2 px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
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
