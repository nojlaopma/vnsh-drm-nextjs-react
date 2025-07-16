'use client';

import Image from 'next/image';

type FeatureItem = {
  image: {
    mobile: string;
    desktop: string;
    alt: string;
  };
  title: string;
  description: string;
  imageHeight?: number;
  imageWidth?: number;
};

const FeatureGrid = ({ items, className = '' }: { items: FeatureItem[]; className?: string }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-4 ml-[-20px] mr-[-20px] md:ml-[-80px] md:mr-[-80px] mb-[7px]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className={`relative w-[${item.imageHeight ?? 150}px] h-[${item.imageWidth ?? 150}px] mx-auto`}>
                  <Image
                    src={item.image.desktop}
                    alt={item.image.alt}
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, 150px"
                    height={item.imageHeight ?? 150}
                    width={item.imageWidth ?? 150}
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
