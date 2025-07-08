'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/utils/images';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const BogoFeatures = () => {
  const [imagePaths, setImagePaths] = useState<{[key: string]: string}>({});

  useEffect(() => {
    const loadImages = async () => {
      const paths = await Promise.all([
        getImagePath('vnsh-laser4-desktop.webp'),
        getImagePath('check_30_30.webp'),
        getImagePath('Mark_Vogel.webp')
      ]);

      setImagePaths({
        desktop: paths[0],
        checkmark: paths[1],
        markVogel: paths[2]
      });
    };

    loadImages();
  }, []);

  // Show loading state if images aren't loaded yet
  if (Object.keys(imagePaths).length === 0) {
    return <div className="py-12">Loading...</div>;
  };

  return (
    <section className="pt-2 pb-6">
      <div className="max-w-[1100px] mx-auto px-4" style={{ fontFamily: 'Arial, sans-serif' }}>
        <div className="text-left mb-12 text-[18px] md:text-[22px] text-black">
          <p className='mb-4'>Aside from your new VNSH Holster… what you're about to see on this page is by far the <b className='italic'>#1 thing you can get to maximize your defensive capabilities.</b></p>
          
          <p className="mb-4">You already have a gun…</p>
          
          <p className="mb-4">And you just got an ultra-comfy holster to start carrying everywhere…</p>
          
          <p className="mb-4">The <b className="italic">only thing you're missing</b> is…</p>
          
          <p className="mb-4">…a way to guarantee you can deploy your weapon with <b className='italic'>dead-eye accuracy</b> in a <b className='italic'>split-second</b> conflict scenario (which nearly all conflict scenarios are).</p>
          
          <p className="mb-4">That's why we're giving you a <b>private, one-time deal</b> on a breakthrough product that does exactly that.</p>
          
          <p className="mb-4"><span className="font-bold">It's our revolutionary Laser Strike Training System</span> – <b className='bg-yellow-300'>normally $149.97, but only $79.97 for you today only!</b></p>
          
          <p className="mb-4">And the reason why 1000s of gun owners swear by it is because…</p>
          
          <p className="mb-4">It simulates <b className='italic'>unlimited live fire trigger pulls</b> so you can get in the training volume it takes to reach your full accuracy potential – without spending a <b className='italic'>small fortune in ammo</b> plus hours and hours at the range.</p>
          
          <p className="mb-4">It's without a doubt the <b className='italic'>fastest and easiest way to become dead accurate</b> (and also the only way we know of that's <u>money-back guaranteed</u>).</p>
          
          <p className="mb-4">Plus, when you get the Laser Strike System, it's almost like…</p>
          
          <div className="text-center mt-8 mb-12">
            <Link href="#pricing" className="w-full sm:w-auto">
              <Button 
                variant="cta"
                size="lg"
                className="w-full md:w-[80%] mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                Yes! Give Me My Laser Strike System!
              </Button>
            </Link>
          </div>
          
          <h2 className="text-[20px] md:text-[38px] font-bold text-center my-0 mx-5 leading-[20px] md:leading-normal">
            A Free Lifetime Range Membership You Can Take With You Anywhere!
            <span className="block text-red-600 text-[20px] md:text-[38px] mt-2 leading-[20px] md:leading-normal">
              Fastest Way to Get "Dead Accurate" With $0 In Ammo
            </span>
          </h2>
        </div>
        
        {/* Rest of the Features component content would go here */}
        {/* I've included the main content structure, but you might want to add the remaining features sections */}
      </div>
    </section>
  );
};

export default BogoFeatures;
