'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/utils/images';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const features = [
  {
    title: '100% Safe for Home Use',
    description: 'After ensuring your gun is fully unloaded and contains nothing but the laser cartridge, the Laser Strike lets you safely practice around friends and family with zero worry.'
  },
  {
    title: 'Helps Fix "Recoil Flinch"',
    description: 'Recoil itself has zero impact on your accuracy. But your anticipation of recoil can have a serious impact. Since the Laser Strike takes recoil out of the equation, you can train yourself to eliminate the "recoil flinch" that plagues so many shooters.'
  },
  {
    title: 'Reduces Firearm Wear-and-Tear',
    description: 'Not only is the Laser Strike guaranteed to be 100% safe for your guns, but it also minimizes overall wear and the frequency with which you need to clean them – since it reduces the amount of live ammo you use.'
  },
  {
    title: 'Compatible With a Wide Range of Guns',
    description: 'If your gun shoots 9mm, .45mm, .40 S&W, and .380 ACP, then it will work with the Laser Strike. Just be sure to select the appropriate caliber when placing your order.'
  }
];

const Features = () => {
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
              className="w-[85%] md:w-[80%] mx-auto py-2 px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
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
        
        <div className="mb-12">
          <div className="relative w-full max-w-[375px] mx-auto overflow-hidden shadow-lg mb-8">
            <Image
              src={imagePaths.desktop}
              alt="Laser Strike Training System"
              width={375}
              height={0}
              className="w-full h-auto object-cover"
              sizes="(max-width: 640px) 100vw, 375px"
              loading="lazy"
              decoding="async"
              quality={85}
            />
          </div>
          
          <p className="text-[18px] md:text-[22px] text-black mb-8">
            The Laser Strike System combines a precision-fit laser cartridge with a smartphone app and portable target kit to <span className="font-bold">simulate live round training and give you instant feedback with every shot...</span> 
          </p>
          
          <p className="text-[18px] md:text-[22px] text-black mb-8">
            ...while saving you a boatload of money in the process.
          </p>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 flex items-center justify-center">
                  <Image 
                    src={imagePaths.checkmark} 
                    alt="Checkmark" 
                    width={30} 
                    height={30}
                    className="w-[30px] h-[30px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="text-[18px] md:text-[22px] font-bold text-black mb-2 leaspaning-none">{feature.title}: </span>
                <span className="text-[18px] md:text-[22px] text-black">{feature.description}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <p className="text-[18px] md:text-[22px] text-black mb-4">
              <u>Pro Shooters like Mark Vogel</u> already use standard dry fire training <b className="italic">every day</b> as a <b className="italic">shortcut</b> to get more practice volume in...
            </p>
            <p className="text-[18px] md:text-[22px] text-black mb-4">
              "In one form or another, [I dry fire] <b className="italic">just about every day," Vogel says</b>. "For sheer skill building, I feel it has no equal. For every live round I actually fire, <b className="italic">I probably mimic that round 8 to 10 times in dry fire.</b>"
            </p> 
            <p className="text-[18px] md:text-[22px] text-black mb-4">
              But the Laser Strike System transforms traditional dry fire training from a simple shortcut <b className="italic">to a full-on accuracy cheat code!!</b>
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-end md:w-auto flex-shrink-0">
            <div className="relative w-[300px] h-[300px] md:w-[300px] md:h-[300px]">
              <Image
                src={imagePaths.markVogel}
                alt="Mark Vogel - Professional Shooter"
                fill
                className="object-cover shadow-md"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 300px, 300px"
              />
            </div>
          </div>
        </div>
        

        
        <div className="text-center mt-8 mb-8">
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
        
        <div className="mb-12">
          <h2 className="text-[20px] md:text-[38px] font-bold text-center my-0 mx-5 mb-5 leading-[20px] md:leading-normal">
            Know <u>Without a Doubt</u> You'll{' '}
            <span className="text-red-600">Always Make the 1 Shot You Can't Afford to Miss...</span>
          </h2>
          <div className="space-y-6 mb-8">
            <p className="text-[18px] md:text-[22px] text-[#212529]">You carry for one simple reason: <span className="font-bold">to make sure you get home safe no matter what.</span></p>
            <p className="text-[18px] md:text-[22px] text-[#212529]">And if someone tries to stop that from happening, you'll likely have <span className="font-bold">a few seconds</span> and possibly <span className="font-bold">just 1 shot</span> to react.</p>
            <p className="text-[18px] md:text-[22px] text-[#212529]">The Laser Strike System gives you the confidence to <span className="font-bold underline">ensure you NEVER miss that shot!!</span></p>
            <p className="text-[18px] md:text-[22px] text-[#212529]">Like we said...</p>
            <p className="text-[18px] md:text-[22px] text-[#212529]">Because we already know <b className="italic">you're the kind of person</b> who cares deeply about <u>being the most effective protector possible</u> (for both yourself and those around you)...</p>
            <p className="text-[18px] md:text-[22px] text-[#212529]">And since we <b className="italic">have no doubt you'll be amazed</b> at how rapidly the Laser Strike System will <span className="font-bold underline">skyrocket your accuracy...</span></p>
            <p className="text-[18px] md:text-[22px] font-bold bg-[#ff0] inline-block">
              On this page only, we're giving you one for $70 OFF!
            </p>
            <p className="text-[18px] md:text-[22px] text-[#212529]">But you won't see this deal again after you leave this page...</p>
            <p className="text-[18px] md:text-[22px] text-[#212529]">So grab yours NOW!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
