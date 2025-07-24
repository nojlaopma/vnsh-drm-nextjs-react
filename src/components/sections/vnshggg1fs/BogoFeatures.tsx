'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { images } from '@/utils/images';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import FeatureGrid from '@/components/common/FeatureGrid';

const BogoFeatures = () => {
  const searchParams = useSearchParams();
  const utmParams = Array.from(searchParams.entries())
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  const checkoutUrl = `https://secure.vnsh.com/vnshggg1fs/checkout${utmParams ? `?${utmParams}` : ''}`;

  // Yotpo script for reviews
  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdn-widgetsrepository.yotpo.com/v1/loader/55tSynaStxGWu7L2pyjFXek3WqEEKvm1wBiNTTJ6?languageCode=en';
      script.async = true;
      document.head.appendChild(script);

      return () => {
        clearTimeout(timer);
        // Clean up the script when component unmounts
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }, 5000);
  }, []);

  return (
    <section className="pt-[10px] md:pt-[1px] pb-6">
      <div className="max-w-[1100px] mx-auto px-1 font-arial">
        <div className="text-left text-[20px] md:text-[22px] mt-[3px] md:mt-[22px] leading-[26px] mx-[-3px] md:mx-[16px]">

        <p className='md:mb-[22px] mb-[20px]'>No one ever thought it could happen, but <span className='font-bold'>a new firearm confiscation law</span> has been activated in nearly half the United States.</p>

          <p className='md:mb-[22px] mb-[20px]'>And if you state isn’t one of them… <span className='font-bold italic'>there’s a VERY good chance it will be soon!</span></p>

          <p className="md:mb-[22px] mb-[20px]">It’s called the <span className='underline'>Extreme Risk Protection Order Law</span>, and here’s why it should <span className='font-bold'>terrify you.</span></p>
          
          <p className="md:mb-[22px] mb-[20px]">It makes it so that if <span className='font-bold italic'>just 1 person</span> reports you as “unfit” to own firearms... and just <span className='font-bold italic'>1 judge</span> agrees…</p>
          
          <p className="md:mb-[22px] mb-[20px]">Your weapons can be <span className='font-bold'>confiscated immediately.</span></p>
          
          <p className="md:mb-[22px] mb-[20px]">21 states already have this law on the books… <span className='font-bold'>but it could soon be activated in all 50 states.</span></p>
          
          <p className="md:mb-[22px] mb-[20px]"><span className='bg-[#ffff00]'> (especially since the Federal Government is offering $750 million to <span className='font-bold italic'>any state who adopts this awful law)</span></span></p>
          
          <p className="md:mb-[22px] mb-[20px]">And sadly… this law is just the tip of the iceberg!</p>
          
          <p className="md:mb-[22px] mb-[20px]">New laws <span className='font-bold'>expected to be passed this year</span> could make you pay $800 a year for every gun you own...put you on a national firearms registry… BAN any semi-automatic rifle… and JAIL people who refuse to give them up.</p>
          
          <p className="mb-4">They’re chopping your gun rights to pieces… and leaving you a totally defenseless sitting duck in the process.</p>

          <p className="mb-4 font-bold">That’s why we want to give you a hardcopy of the Guerrilla Gun Guide for HALF PRICE today!</p>
          

          <div className="text-center mt-[20px] md:mt-[20px] font-sans">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-[95%] md:w-[92%] mx-auto py-[40px] md:py-[26px] text-center font-bold animate-pulse-cta text-[1.3rem] md:text-[1.75rem] whitespace-normal break-words font-bolder leading-[1.3] md:leading-[1.75]"
              >
                Yes, Give Me My FREE Hardcopy of the Guerrilla Gun Guide!
              </Button>
            </Link>
          </div>

          <br></br>
          
          <p className="md:px-[90px] text-[23px] text-center md:text-[32px] text-[#FF9C00] font-bold leading-[27px] md:leading-[37px] px-[10px]">How to<span className="text-[#ff0000]"> "Confiscation Proof" Every Gun You Own -</span> Plus DOZENS<span className="text-[#ff0000]"> of 100% Legal Loopholes</span> to Stay Armed No Matter What!``
          </p>

        <div className="w-full overflow-hidden flex justify-center mb-[20px] md:mb-[25px]">
            <div className="relative w-full">
              <Image
                src={images.ggg.gungirldesktop}
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                width={800}
                height={530}
                className="w-[300px] h-[175px] md:w-[800px] md:h-[530px] mx-auto mt-[5px] md:mt-[20px]"
                priority
                />
            </div>
        </div>

          <p className="mb-4">Like we said…</p>
          
          <p className="mb-4">The Guerrilla Gun Guide will show you how to hide your guns so they’re <span className='font-bold italic'>never confiscated</span> (or stolen in a home invasion either)...</p>
          
          <p className="mb-4">But that’s not all it will show you.</p>

          <p className="mb-4">Inside, you’ll also discover:</p>


          <div className="flex flex-col lg:flex-row gap-7 mb-7">
            <div className="space-y-4 flex-1 px-7">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                    <Image 
                      src={images.checkmark}
                      alt="Checkmark"
                      width={30}
                      height={30}
                    />
                </div>
                <p className="leading-[25px]"><span className='font-bold'>How to get "off the books" pistols and rifles</span> <span className='underline'>with zero background check</span>. These untraceable guns also cost a fraction of what you'd pay in a gun shop! <span className='font-bold italic'>(pg. 15)</span></p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                    <Image 
                      src={images.checkmark}
                      alt="Checkmark"
                      width={30}
                      height={30}
                    />
                </div>
                <p className="leading-[25px]"><span className='font-bold'>1 simple trick to "disappear" guns you already own</span> <span className='underline'>from the government's prying eyes</span>. They'll never come looking for them, because they won't even know they exist. <span className='font-bold italic'>(pg. 27)</span></p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                    <Image 
                      src={images.checkmark}
                      alt="Checkmark"
                      width={30}
                      height={30}
                    />
                </div>
                <p className="leading-[25px]"><span className='font-bold'>The 1 ATF Form you should avoid at all costs</span>. Every gun owner has seen it and probably filled it out at least once. But after you see what I have to say about it, you'll never touch this form again. <span className='font-bold italic'>(pg. 32)</span></p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                    <Image 
                      src={images.checkmark}
                      alt="Checkmark"
                      width={30}
                      height={30}
                    />
                </div>
                <p className="leading-[25px]"><span className='font-bold'>How to legally "erase" serial numbers from your guns</span>. It does the same thing as physically scratching them off... but it's totally legal and anyone can do it! <span className='font-bold italic'>(pg. 41)</span></p>
              </div>

            </div>
          </div>

          <p className="mb-4">Plus a <span className='font-bold'>WHOLE LOT</span> more…</p>
          
          <div className="text-center mt-[20px] md:mt-[20px] font-sans">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-[95%] md:w-[92%] mx-auto py-[40px] md:py-[26px] text-center font-bold animate-pulse-cta text-[1.3rem] md:text-[1.75rem] whitespace-normal break-words font-bolder leading-[1.3] md:leading-[1.75]"
              >
                Yes, Give Me My Hardcopy of the Guerrilla Gun Guide 50% OFF!
              </Button>
            </Link>
          </div>
          
          <p className="md:px-[10px] text-center my-6 sm:text-[23px] md:text-[26px] lg:text-[38px] text-[#FF9C00] font-bold leading-[1.2]">
          <span className="text-[#ff0000] block"> FAIR WARNING:</span>
          This Deal Could Disappear Once You Leave This Page!
          </p>

          <p className="my-[1.35rem]">Look…</p>
          
          <p className="my-[1.35rem]">We want you to have a copy of the Guerrilla Gun Guide for HALF OFF today – along with a FREE VNSH MagMate.</p>
          
          <p className="my-[1.35rem]">HOWEVER…</p>

          <p className="my-[1.35rem]"><span className='font-bold bg-[#ffff00]'>We can only promise you this deal if you claim it immediately.</span></p>
          
          <p className="my-[1.35rem]">There are 2 reasons for that:</p>
          
          <p className="my-[1.35rem]">1. There are a lot of people who would like to see this information <span className='font-bold italic'>scrubbed and removed</span> from the internet. So if this page gets reported by anti-gunners too many times, there’s a chance it could be <span className='font-bold'>shut down without notice.</span> (This has happened to us <span className='underline'>plenty of times before!</span>)</p>

          <p className="my-[1.35rem]">2. This may be our <span className='font-bold italic'>last printing</span> of this book! For the same reason above, there are many printers who refuse to produce this book for us. Once the copies we have on-hand are gone, there are no promises we’ll be able to make more.</p>

          <p className="my-[1.35rem]">So if you own guns and want to keep them <span className='font-bold italic'>no matter what</span> … you need to grab this deal NOW.</p>
          <p className="mt-6 mb-4 font-bold">We guarantee you won’t regret having this information in your hands!</p>

          <div className="text-center md:mt-[20px] md:mb-[5px] font-sans">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-[95%] md:w-[92%] mx-auto py-[26px] text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.75rem] whitespace-normal break-words font-bolder"
              >
                Yes, Give Me My Hardcopy of the Guerrilla Gun Guide 50% OFF!
              </Button>
            </Link>
          </div>
          <br></br>
          <FeatureGrid items={[
            {
              image: {
                mobile: images.features.moneyBack,
                desktop: images.features.moneyBack,
                alt: '60 Day Money Back Guarantee',
                imageHeight: 150,
                imageWidth: 150,
              },
              title: '60 Day Money Back Guarantee',
              description: 'No question asked 60 day refund or replacement guaranteed. If you are unhappy for any reason, get your money back. Rock solid guarantee...'
            },
            {
              image: {
                mobile: images.features.smallBusiness,
                desktop: images.features.smallBusiness,
                alt: 'Thank You!',
                imageHeight: 150,
                imageWidth: 150,
              },
              title: 'Thank You!',
              description: 'Your purchase supports the second amendment community and increases our ability to defend ourselves and remain free.'
            },
            {
              image: {
                mobile: images.features.securePayment,
                desktop: images.features.securePayment,
                alt: '100% Secure Payment',
                imageHeight: 100,
                imageWidth: 100,
                className: 'md:mb-[20px]'
              },
              title: '100% Secure Payment',
              description: 'All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy...',
            }
          ]} className='' />
          
        </div>
      </div>
    </section>
  );
};


export default BogoFeatures;
