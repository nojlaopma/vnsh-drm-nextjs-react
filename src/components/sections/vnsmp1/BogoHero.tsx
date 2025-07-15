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
  const checkoutUrl = `https://secure.vnsh.com/vnsmp1/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="sm:px-4 bg-white font-arial pt-[20px]">
      <div className="mx-auto sm:px-4">
        <div className="text-center">
          <h1 className="text-[23px] md:text-[38px] mb-4 leading-[1.15] italic">
         Carry Even MORE Ammo and <b>Reload Lightning Fast</b> With the VNSH Support-Side Mag Pouch...
          </h1>
        </div>
        
        <div className="w-full overflow-hidden flex justify-center">
            <div className="relative w-full">
              <Image
                src={images.vnsmp1.hero}
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                width={500}
                height={500}
                className="h-auto mx-auto mt-[3.8px]"
                priority
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default BogoHero;
