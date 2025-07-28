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


  let isVnshBogo = pathname?.includes('vnshblackbogo1') || pathname?.includes('vnshcamobogo1') || pathname?.includes('vnshblackbogogbb1') || pathname?.includes('vnshblackbogogbb2') || pathname?.includes('vnshblackbogogbb3');
  let isVnls1 = pathname?.includes('vnls1');
  let isVnls2 = pathname?.includes('vnls2');
  let isVnshLite1 = pathname?.includes('vnshlite1');
  let isVnsmm1 = pathname?.includes('vnsmm1');
  let isVnshggg1 = pathname?.includes('vnshggg1');
  let isVnls1po223 = pathname?.includes('vnls1po223');
  let isVnsmp1 = pathname?.includes('vnsmp1');
  let isVnsmmfs1 = pathname?.includes('vnsmmfs1');


  if( isVnshBogo ) {
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
  }else if(isVnls1){
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
  }else if(isVnsmp1){
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
  }else if(isVnshLite1){
    return (
      <div className={`w-full ${className}`} >
        <div className={`max-w-7xl mx-auto px-4 ml-[-20px] mr-[-20px] md:ml-[-40px] md:mr-[-40px] mb-[7px]`}>
          <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4`}>
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-[1px]">
                  <div className={`relative w-[${item.image.imageHeight ?? 129}px] h-[${item.image.imageWidth ?? 129}px] mx-auto`}>
                    <Image
                      src={item.image.desktop}
                      alt={item.image.alt}
                      className={`object-contain ${item.image.className}`}
                      sizes="(max-width: 768px) ${item.image.imageHeight ?? 129}px, ${item.image.imageWidth ?? 129}px"
                      height={item.image.imageHeight ?? 129}
                      width={item.image.imageWidth ?? 129}
                    />
                  </div>
                </div>
                <h3 className="text-[17.6px] font-bold text-[#212529]">{item.title}</h3>
                <p className="text-[17.6px] text-center text-[#212529] leading-[35px] md:leading-[32px] mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }else if(isVnsmm1){
    return (
      <div className={`w-full ${className}`} >
        <div className={`max-w-7xl mx-auto px-4 ml-[-20px] mr-[-20px] md:mx-[-48px] mb-[7px]`}>
          <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5`}>
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-[1px]">
                  <div className={`relative w-[${item.image.imageHeight ?? 129}px] h-[${item.image.imageWidth ?? 129}px] mx-auto`}>
                    <Image
                      src={item.image.desktop}
                      alt={item.image.alt}
                      className={`object-contain h-[${item.image.imageHeight}px] w-[${item.image.imageWidth}px]`}
                      height={item.image.imageHeight ?? 129}
                      width={item.image.imageWidth ?? 129}
                    />
                  </div>
                </div>
                <h3 className="text-[17.6px] font-bold text-[#212529]">{item.title}</h3>
                <p className="text-[17.6px] text-left text-[#212529] leading-[35px] md:leading-[32px] mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }else if(isVnshggg1){
    return (
      <div className={`w-full ${className}`} >
        <div className={`max-w-7xl mx-auto px-4 mx[-20px] md:mx-[-90px] mb-[7px]`}>
          <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5`}>
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-[18.2px] md:mb-[1px] md:pb-[20px]">
                  <div className={`relative w-[${item.image.imageHeight ?? 129}px] h-[${item.image.imageWidth ?? 129}px] mx-auto`}>
                    <Image
                      src={item.image.desktop}
                      alt={item.image.alt}
                      className={`${item.image.className} object-contain h-[${item.image.imageHeight}px] w-[${item.image.imageWidth}px]`}
                      height={item.image.imageHeight ?? 129}
                      width={item.image.imageWidth ?? 129}
                    />
                  </div>
                </div>
                <h3 className="text-[18.9px] font-bold text-[#212529] pb-[16px] md:pb-[15px]">{item.title}</h3>
                <p className="text-[16px] md:text-[17px] text-center text-[#212529] leading-[18px] md:leading-[17.6px] mx-auto md:px-[0]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }else if(isVnsmmfs1){
    return (
      <div className={`w-full ${className}`} >
        <div className={`max-w-7xl mx-auto px-4 ml-[-20px] mr-[-20px] md:mx-[-15px] mb-[7px]`}>
          <div className={`grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-5`}>
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-[1px]">
                  <div className={`relative w-[${item.image.imageHeight ?? 129}px] h-[${item.image.imageWidth ?? 129}px] mx-auto`}>
                    <Image
                      src={item.image.desktop}
                      alt={item.image.alt}
                      className={`object-contain h-[${item.image.imageHeight}px] w-[${item.image.imageWidth}px]`}
                      height={item.image.imageHeight ?? 129}
                      width={item.image.imageWidth ?? 129}
                    />
                  </div>
                </div>
                <h3 className="text-[17.6px] font-bold text-[#212529]">{item.title}</h3>
                <p className="text-[17.6px] text-left text-[#212529] leading-[35px] md:leading-[32px] mx-auto">{item.description}</p>
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
