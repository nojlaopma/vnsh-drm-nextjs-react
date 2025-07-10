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
  const checkoutUrl = `https://secure.vnsh.com/vnsmp1/checkout${utmParams ? `?${utmParams}` : ''}`;

  return (
    <section id="bogo-hero" className="sm:px-4 bg-white">
      <div className="max-w-[1265px] mx-auto sm:px-4">
        <div className="text-center mb-8 lg:px-[60px]">
          <h1 className="text-[23px] md:text-[35px] mb-4 leading-none">
          <i > Carry Even MORE Ammo and <b>Reload Lightning Fast</b> With the VNSH Support-Side Mag Pouch...</i>
          </h1>
        </div>
        
        <div className="w-full mt-[30px] sm:mb-8 md:mb-12 overflow-hidden flex justify-center">
          <div className="relative w-full max-w-[800px] mx-auto">
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/MagPouchDesktop.webp?v=1730563797"
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BogoHero;
