'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { images } from '@/utils/images';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import FeatureGrid from '@/components/common/FeatureGrid';
import Pricing, { CheckoutContext } from './Pricing';

const BogoFeatures = () => {
  const searchParams = useSearchParams();
  const checkoutBaseUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || 'https://secure.vnsh.com/vnsmmfs1';
  const [selectedCheckoutUrl, setSelectedCheckoutUrl] = useState('');

  // Build the default checkout URL with UTM parameters
  const checkoutUrl = useMemo(() => {
    const url = new URL(`${checkoutBaseUrl}/checkout`);
    
    // Add params from the URL
    searchParams.forEach((value, key) => {
      url.searchParams.append(key, value);
    });
    
    return url.toString();
  }, [searchParams, checkoutBaseUrl]);

  const [imagePaths, setImagePaths] = useState<{[key: string]: string}>({
    desktop: '',
    checkmark: '',
    markVogel: ''
  });

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

  // Show loading state if images aren't loaded yet
  if (Object.keys(imagePaths).length === 0) {
    return <div className="py-12">Loading...</div>;
  };

  return (
    <section className="pb-[19px] md:pb-6 md:mx-[12px] mt-[1px] md:mt-[0] md:leading-[37.83px] leading-[37.83px]">
      <div className="w-full font-arial">
        <div className="text-left text-[18px] md:text-[22px] text-black md:mt-[0] mt-[85px]">
          
        <p className="font-appleemoji text-center md:px-[0] md:mx-[-30px] md:my-7 text-[32px] md:text-[32px] text-[#f90] font-bold leading-[42px] md:leading-[45px]">This Makes 99% of Magazines <span className="text-[#ff0000]"> Disappear In Plain Sight…</span></p>

        <div className="w-full overflow-hidden flex justify-center mt-[20px] md:mt-[0] md:mb-[20px]">
            <div className="relative w-full">
              <Image
                src={images.magmate.free1}
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                width={465}
                height={390}
                className="w-[465px] h-[390px] md:w-[465px] md:h-[390px] mx-auto mt-[1px] md:mt-[3.8px]"
                priority
                />
            </div>
        </div>

          <p className="mb-4 mt-[20px] md:mt-[0]">Carrying a firearm for protection is smart.</p>
          <p className="mb-4">And carrying a spare mag is <span className="font-bold italic">even smarter.</span></p>
          <p className="mb-4">That’s why we made the VNSH Holster (our flagship product) with two built-in mag pouches.</p>
          <p className="mb-4 font-bold italic">However…</p>
          <p className="mb-4">You might want to use your VNSH Holster’s built-in mag pouches <span className="font-bold">for something besides ammo</span> – like a flashlight or knife…</p>
          <p className="mb-4">Or maybe you’d prefer to <span className="font-bold">keep your spare mag on your support side</span>…</p>
          <p className="mb-4">Or you might just want to do everything you can to <span className="font-bold">avoid adding extra bulk that might print</span>.</p>
          <p className="mb-4">These are just a few of the reasons why we’re introducing…</p>
          <p className="mb-4 font-bold">The new VNSH MagMate!</p>
          <p className="mb-4">Not only does it let you easily and comfortably add extra ammo to your daily carry setup…</p>
          <p className="mb-4">But it lets you do it with <span className="font-bold italic">far less bulk</span> than virtually any other mag clip on the market.</p>
          <p className="mb-4">Yet it still fits 99% of mags… sits firmly and securely (while being super easy to deploy from)… and makes your mag look like nothing more than a pocket knife or flashlight!</p>
          <p className="mb-4">That’s why it’s perfect for anyone who wants…</p>
          

          <p className="font-appleemoji text-center md:px-[0] md:mx-[0px] md:my-6 text-[24px] md:text-[38px] text-[#f90] font-bold leading-[30px] md:leading-[45px] text-[#ff0000] italic">Fast, Easy, and DEEP Concealment… While Only Adding 20 Grams of Weight!!</p>

          <p className="mb-4">The 1 thing that makes the MagMate so special is simple…</p>
          <p className="mb-4">It transforms any pocket into a concealed mag pouch, and it does that while adding <span className="font-bold italic">as little weight and bulk as possible.</span></p>
          <p className="mb-4">The MagMate weighs around 20 grams – about the weight of 4 nickels.</p>
          <p className="mb-4">That means you can use it to securely store any magazine… in any pocket… and chances are good <span className="font-bold italic">you’ll forget it’s even there.</span></p>
          <p className="mb-4">But that’s not the only thing that will make the MagMate the last mag clip you ever buy…</p>

          <div className="text-center w-[100%] md:w-[89%] mx-auto md:mt-[50px] mt-[50px] mb-[34px] md:mb-[20px]">
          <Link href="#pricing" className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[50px] md:py-[40px] px-10 md:px-1 font-bold animate-pulse-cta text-[28px] md:text-[30px] whitespace-normal break-words rounded-[0.25rem] leading-[30px] font-sans"
            >
              YES! Send Me My FREE VNSH MagMate Now!
            </Button>
          </Link>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <p className="font-appleemoji text-center md:px-[0] md:mx-[30px] md:my-6 text-[24px] md:text-[37px] text-[#f90] font-bold leading-[30px] md:leading-[45px]"><span className="text-[#ff0000]">6 Reasons</span> to Grab a VNSH MagMate NOW!</p>

        <p className="mb-4">The simple fact that the VNSH MagMate lets you <span className="font-bold italic">effortlessly slip any mag into your pocket and <u>make it disappear</u></span> should be more than enough reason to own one.</p>
          <p className="mb-4">However, that's not all that makes it one of the smartest ways to add extra ammo to your carry setup…</p>
          
          <div className="flex flex-col lg:flex-row gap-7 mb-7">
            <div className="space-y-4 flex-1">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3 mt-1">
                  <Image 
                    src={images.checkmark}
                    alt="Checkmark"
                    width={30}
                    height={30}
                  />
              </div>
              <p className="leading-relaxed">
                <span className="font-bold text-[#dc3545]">Ultra Minimal Design:</span> The MagMate strikes a perfect balance between aesthetics and function. By cutting out the clip’s center, it seamlessly blends in. No more <b className="font-bold italic">“Hey, check out my massive clip”</b> moments. ;)
              </p>
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
              <p className="leading-relaxed">
                <span className="font-bold text-[#dc3545]">Fully Adjustable & Customizable:</span> you can easily tailor the depth the MagMate sits in your pocket. That means you can find the perfect fit for any combination of pants and mags you’ve got!
              </p>
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
              <p className="leading-relaxed">
                <span className="font-bold text-[#dc3545]">Extremely Durable:</span> Built from 100% steel with a double oxide finish and high-strength carbon fiber, you can beat this clip up for years and it won’t care one bit.
              </p>
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
              <p className="leading-relaxed">
                <span className="font-bold text-[#dc3545]">Preserves Your Stance and Accuracy Under Stress:</span> If you’re engaged in a conflict, it’s fastest and easiest to reload from your support-side. And the MagMate lets you reload right from your support-side pocket… or really anywhere you decide to keep it.
              </p>
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
              <p className="leading-relaxed">
                <span className="font-bold text-[#dc3545]">Fits 99% of All Modern Handgun Magazines:</span> Thanks to its fully adjustable design, the MagMate will easily hold just about any magazine in your arsenal.
              </p>
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
              <p className="leading-relaxed">
                <span className="font-bold text-[#dc3545]">Super Solid Retention + Instant Access:</span> The MagMate includes a small tooth at the end of the clip, which guarantees it stays put no matter what situation you find yourself in.
              </p>
            </div>
  
            </div>
            
            {/* Side images - responsive layout */}
            <div className="w-full lg:w-auto lg:pl-6 mt-6 lg:mt-0 lg:pt-6">
              {/* Grid for medium and large screens */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-1 gap-4 lg:w-[250px] items-start">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image 
                    src="/images/magmate/MagMate1.webp"
                    alt="Magazine Pouch - Front View"
                    width={250}
                    height={250}
                    className="object-cover w-full h-full"
                    sizes="(min-width: 1024px) 250px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image 
                    src="/images/magmate/MagMate2.webp"
                    alt="Magazine Pouch - Side View"
                    width={250}
                    height={250}
                    className="w-full h-full"
                    sizes="(min-width: 1024px) 250px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
                <div className="relative aspect-square w-full overflow-hidden lg:block">
                  <Image 
                    src="/images/magmate/MagMate3.webp"
                    alt="Magazine Pouch - Worn View"
                    width={250}
                    height={250}
                    className="w-full h-full"
                    sizes="(min-width: 1024px) 250px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
              </div>
              
              {/* Mobile carousel - shows on small screens */}
              <div className="md:hidden">
                <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
                  <div className="flex-shrink-0 w-[85vw] aspect-square relative rounded-lg overflow-hidden snap-center">
                    <Image 
                      src="/images/magmate/MagMate1.webp"
                      alt="Magazine Pouch - Front View"
                      width={250}
                      height={250}
                      className="object-cover w-full h-full"
                      sizes="85vw"
                      priority
                    />
                  </div>
                  <div className="flex-shrink-0 w-[85vw] aspect-square relative rounded-lg overflow-hidden snap-center">
                    <Image 
                      src="/images/magmate/MagMate2.webp"
                      alt="Magazine Pouch - Side View"
                      width={250}
                      height={250}
                      className="object-cover w-full h-full"
                      sizes="85vw"
                    />
                  </div>
                  <div className="flex-shrink-0 w-[85vw] aspect-square relative rounded-lg overflow-hidden snap-center">
                    <Image 
                      src="/images/magmate/MagMate3.webp"
                      alt="Magazine Pouch - Worn View"
                      width={250}
                      height={250}
                      className="object-cover w-full h-full"
                      sizes="85vw"
                    />
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500 mt-2">Swipe to see more</div>
              </div>
            </div>
          </div>

          <p className="mb-4">If you carry regularly…</p>
          <p className="mb-4">And if your <span className="font-bold">top priority</span> is to be the <span className="font-bold">best protector for yourself and others</span> that you possibly can be…</p>
          <p className="mb-4">Then there’s simply no reason not to carry at least one spare mag…</p>
          <p className="mb-4">And the VNSH MagMate is one of the smartest ways to do that!</p>
          <p className="mb-4">And right now is the best time to snag one, because…</p>

          <div className="text-center w-[100%] md:w-[89%] mx-auto md:mt-[50px] mt-[50px] mb-[34px] md:mb-[20px]">
          <Link href="#pricing" className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[50px] md:py-[40px] px-10 md:px-1 font-bold animate-pulse-cta text-[28px] md:text-[30px] whitespace-normal break-words rounded-[0.25rem] leading-[30px] font-sans"
            >
              YES! Send Me My FREE VNSH MagMate Now!
            </Button>
          </Link>
        </div>

        <p className="font-appleemoji text-center md:px-[0] md:mx-[30px] md:my-6 text-[24px] md:text-[38px] text-[#f90] font-bold leading-[30px] md:leading-[45px]">For a Short Time... <span className="text-[#ff0000]"> You Can Get a FREE MagMate! </span><br></br> (Just Cover S&H)</p>


          <p className="mb-4">Yep, you read that right…</p>
          <p className="mb-4">Normally <span className="line-through">$29.97</span> at full retail price… </p>
          <p className="mb-4">On this page only, you’re getting the chance to score a FREE <b>MagMate</b>.</p>
          <p className="mb-4">The reason we’re doing this?</p>
          <p className="mb-4">It’s pretty simple.</p>
          <p className="mb-4">Like any business, we rely on <span className="font-bold italic">repeat customers</span> to be successful.</p>
          <p className="mb-4">And the best thing we can do to try and earn your business as a repeat customer is to make your first purchase with us as <span className="font-bold italic">easy and inexpensive as possible</span>.</p>
          <p className="mb-4">We want you to get the MagMate in your hands… experience it yourself… and see that it’s <span className="font-bold italic">every bit as awesome as we say it is</span>.</p>
          <p className="mb-4">So that next time one of our products catches your eye, you’ll know our name and the quality we stand for. </p>
          <p className="mb-4">That’s why you can get a Free MagMate today – <span className="font-bold">or one Free MagMate + additional ones at a very deep discount</span></p>
          <p className="mb-4">But if for <span className="font-bold italic">ANY reason</span> you decide your MagMate isn’t living up to your expectations…</p>



          <p className="text-center my-6 text-[26px] md:text-[38px] text-[#f90] font-bold leading-[1.2] font-appleemoji">
          You Won’t Even Risk the Small Cost of Shipping, Because… <br></br>You’re 100% Covered By Our <span className="text-[#ff0000]"> Iron-Clad, <br></br>Money-Back</span> Guarantee
          </p>

          <div className="w-full mt-[30px] mb-8 md:mb-12 overflow-hidden flex justify-center">
            <div className="relative w-full max-w-[200px] md:max-w-[300px] mx-auto">
              <Image
                src={images.guarantee.moneyBack}
                alt="60-Day Money Back Guarantee"
                width={300}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          </div>




          <p className="mb-4">Like we said…</p>

          <p className="mb-4">On this special page, you can get one FREE MagMate for <span className="font-bold italic">nothing but the cost of shipping...</span></p>

          <p className="mb-4">Or you can opt to bundle additional MagMates with your Free one <span className="font-bold italic">at a significant discount</span>. </p>

          <p className="mb-4">But regardless of which one you decide… <span className="font-bold underline">you won’t risk a single penny.</span></p>
          
          <p className="mb-4">Because you’re fully covered by our <span className="font-bold">60-Day Money Back Guarantee</span>.</p>
          
          <p className="mb-4">If at any point within two months of your purchase you decide the MagMate isn’t for you… </p>

          <p className="mb-4">Just call or email our <span className="font-bold">US-Based Support Team</span>, and they’ll give you a prompt and courteous refund – no questions or hassles.</p>

          <p className="mb-2">You also get a <span className="font-bold">Lifetime Workmanship Guarantee</span></p>

          <p className="mb-2">So if you discover any flaws or defects that stop your MagMate from working properly, we’ll ship you a replacement ASAP.</p>

          <p className="mb-2">And that guarantee is good for life!</p>


        <p className="md:mt-[70px] text-center my-6 text-[26px] md:text-[38px] text-[#f90] font-bold leading-[1.2] font-appleemoji">
        <span className="text-[#ff0000]">WARNING:</span> If You Leave This Page, Your Chance to Claim This FREE Deal May Disappear!
          </p>


          <div className="w-full mt-[30px] mb-8 md:mb-12 overflow-hidden flex justify-center">
            <div className="relative w-full max-w-[200px] md:max-w-[720px] mx-auto">
              <Image
                src={images.magmate.image2}
                alt=""
                width={720}
                height={720}
                className="object-contain"
                priority
              />
            </div>
          </div>

        <p className="mb-2">As you probably guessed...</p>
        <p className="mb-2">This deal has become <strong className="font-bold italic">extremely popular</strong>.</p>
        <p className="mb-2">And while we do everything in our power to ensure there are plenty of MagMates to go around... and that nobody gets left out...</p>
        <p className="mb-2">We <strong className="font-bold italic">cannot promise</strong> you'll still be able to claim your Free MagMate if you leave this page and come back later.</p>
        <p className="mb-2">Since we're not just offering Free MagMates... but also offering you the chance to grab extras at a steep discount (on top of your Free one)...</p>
        <p className="mb-2">Most people decide to get more than one, when they see how inexpensive they are for this special promotion.</p>
        <p className="mb-2">As a result, inventory levels are <strong className="font-bold italic">very unpredictable</strong>, and this deal could go from open to <strong className="font-bold underline">shut down</strong> at a moment's notice.</p>
        <p className="mb-2">So don't wait!</p>
        <p className="mb-2" id="pricing">Grab your FREE MagMate NOW – before someone else does!!</p>

        <CheckoutContext.Provider value={{ selectedCheckoutUrl, setSelectedCheckoutUrl }}>
          <Pricing />

          <div className="text-center w-[100%] md:w-[25%] mx-auto md:mt-[10px] mt-[50px] mb-[34px] md:mb-[15px]">
            <Link href={selectedCheckoutUrl || checkoutUrl} className="w-full" rel="noopener noreferrer">
              <Button 
                variant="default"
                size="lg"
                className="bg-[#28a745] hover:bg-[#28a745] w-full mx-auto py-[50px] md:py-[40px] px-10 md:px-1 font-bold text-[28px] md:text-[30px] whitespace-normal break-words rounded-[0.25rem] leading-[30px] font-sans"
              >
                Add To Cart
              </Button>
            </Link>
          </div>
        </CheckoutContext.Provider>

          <FeatureGrid items={[
            {
              image: {
                mobile: images.features.moneyBack2,
                desktop: images.features.moneyBack2,
                alt: '60 Day Money Back Guarantee',
                imageHeight: 129,
                imageWidth: 105,
              },
              title: '60 Day Money Back Guarantee',
              description: 'No question asked 60 day refund or replacement guaranteed. If you are unhappy for any reason, get your money back. Rock solid guarantee...'
            },
            {
              image: {
                mobile: images.features.smallBusiness2,
                desktop: images.features.smallBusiness2,
                alt: 'Thank You!',
                className: '',
                imageHeight: 133,
                imageWidth: 129,
              },
              title: 'Thank You!',
              description: 'Your purchase supports the second amendment community and increases our ability to defend ourselves and remain free.'
            },
            {
              image: {
                mobile: images.features.securePayment,
                desktop: images.features.securePayment,
                alt: '100% Secure Payment',
                imageHeight: 128,
                imageWidth: 102,
                className: 'mb-[15px] md:mb-[0]'
              },
              title: '100% Secure Payment',
              description: 'All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy...'
            }
          ]} className="mb-[22px] mt-[40px]"/>
 
        </div>
      </div>
    </section>
  );
};


export default BogoFeatures;
