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
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="relative w-[150px] h-[150px] mx-auto">
                  <Image
                    src={item.image.desktop}
                    alt={item.image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, 150px"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'rgb(33, 37, 41)' }}>{item.title}</h3>
              <p style={{
                fontSize: '16px',
                textAlign: 'center',
                color: 'rgb(33, 37, 41)',
                lineHeight: '20px',
                margin: '0 auto',
                maxWidth: '300px'
              }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
