'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

type FeatureItem = {
  image: {
    mobile: string;
    desktop: string;
    alt: string;
    imageHeight?: number;
    imageWidth?: number;
    className?: string;
  };
  title: string;
  description: string;
};

const FeatureGrid = ({ items, className = '' }: { items: FeatureItem[]; className?: string }) => {
  const pathname = usePathname();

  if( pathname?.includes('vnshblackbogo1') || pathname?.includes('vnshcamobogo1') ) {
    return (
      <div className={`w-[98%] mx-auto md:w-full ${className} ${pathname}`} >
        <div className={`mx-auto mb-[7px]`}>
          <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 md:px-[23.5px]`}>
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-[1px] md:mb-[21px]">
                  <div className={`relative w-[${item.image.imageHeight ?? 150}px] h-[${item.image.imageWidth ?? 150}px] mx-auto pb-[20px] md:pb-[0]`}>
                    <Image
                      src={item.image.desktop}
                      alt={item.image.alt}
                      className={`object-contain ${item.image.className}`}
                      sizes="(max-width: 768px) ${item.image.imageHeight ?? 150}px, ${item.image.imageWidth ?? 150}px"
                      height={item.image.imageHeight ?? 150}
                      width={item.image.imageWidth ?? 150}
                    />
                  </div>
                </div>
                <p className="text-[16px] font-[800] mb-[18px] md:mb-[20.9px] text-[#212529]">{item.title}</p>
                <p className="text-[16px] text-center text-[#212529] leading-[20px] mx-auto md:px-[4.5px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }else if(pathname?.includes('vnls1')){
    return (
      <div className={`w-full ${className}`} >
        <div className={`mx-auto mb-[7px]`}>
          <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1`}>
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center px-[14px]">
                <div className="mb-[16px]">
                  <div className={`relative w-[${item.image.imageHeight ?? 150}px] h-[${item.image.imageWidth ?? 150}px] mx-auto pb-[20px] md:pb-[0]`}>
                    <Image
                      src={item.image.desktop}
                      alt={item.image.alt}
                      className={`object-contain ${item.image.className}`}
                      sizes="(max-width: 768px) ${item.image.imageHeight ?? 150}px, ${item.image.imageWidth ?? 150}px"
                      height={item.image.imageHeight ?? 150}
                      width={item.image.imageWidth ?? 150}
                    />
                  </div>
                </div>
                <p className="text-[16px] font-[800] mb-[20px] md:mb-[16px] text-[#212529]">{item.title}</p>
                <p className="text-[17px] text-center text-[#212529] leading-[20px] mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }else if(pathname?.includes('vnsmp1')){
    return (
      <div className={`w-full ${className}`} >
        <div className={`max-w-7xl mx-auto px-4 md:px-1 ml-[-20px] mr-[-20px] md:ml-[-60px] md:mr-[-60px] mb-[-9px] md:mb-[7px]`}>
          <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1 md:gap-[20px]`}>
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className={`relative w-[${item.image.imageHeight ?? 150}px] h-[${item.image.imageWidth ?? 150}px] mx-auto`}>
                    <Image
                      src={item.image.desktop}
                      alt={item.image.alt}
                      className="object-contain"
                      sizes="(max-width: 768px) ${item.image.imageHeight ?? 150}px, ${item.image.imageWidth ?? 150}px"
                      height={item.image.imageHeight ?? 150}
                      width={item.image.imageWidth ?? 150}
                    />
                  </div>
                </div>
                <h3 className="text-[1.17rem] font-bold mb-4 text-[#212529]">{item.title}</h3>
                <p className="text-[16px] text-center text-[#212529] leading-[18px] mx-auto mb-[16px] md:mb-[0]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`w-full ${className}`} >
      <div className={`max-w-7xl mx-auto px-4 ml-[-20px] mr-[-20px] md:ml-[-80px] md:mr-[-80px] mb-[7px]`}>
        <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1`}>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className={`relative w-[${item.image.imageHeight ?? 150}px] h-[${item.image.imageWidth ?? 150}px] mx-auto`}>
                  <Image
                    src={item.image.desktop}
                    alt={item.image.alt}
                    className={`object-contain ${item.image.className}`}
                    sizes="(max-width: 768px) ${item.image.imageHeight ?? 150}px, ${item.image.imageWidth ?? 150}px"
                    height={item.image.imageHeight ?? 150}
                    width={item.image.imageWidth ?? 150}
                  />
                </div>
              </div>
              <h3 className="text-[1.17rem] font-bold mb-4 text-[#212529]">{item.title}</h3>
              <p className="text-[16px] text-center text-[#212529] leading-[18px] mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
