'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { images } from '@/utils/images';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import FeatureGrid from '@/components/common/FeatureGrid';
import { CustomerReviewsB } from './';
import { CustomerReviewsA } from './';


const BogoFeatures = () => {
  const searchParams = useSearchParams();
  const utmParams = Array.from(searchParams.entries())
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  const checkoutUrl = `https://secure.vnsh.com/vnshswtbogo1/checkout${utmParams ? `?${utmParams}` : ''}`;

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
    <section className="pt-[27px] md:pt-[27px] pb-6">
      <div className="max-w-[1100px] mx-auto px-1 font-arial">
      
      <p className="text-center text-[24px] md:text-[32px] text-[#ff9c00] font-bold leading-[28px] md:leading-[37px] px-[40px] md:px-[10px]">
      Sadly, VNSH Can <span className="text-[#ff0000]">No Longer Sell These…</span><br></br>
      Bad News for Us… <span className="text-[#ff0000]">But GREAT News for You!</span>
          </p>
        
        <div className="text-left text-[20px] md:text-[20px] mt-[26px] md:mt-[26px] leading-[26px] mx-[10px] md:mx-[-2px]">

          <p className='mb-[18px]'>You may have seen the Shockwave Torch before – an incredibly powerful non-gun defense tool you can carry nearly all the places firearms CAN’T go.</p>
          
          <p className="mb-[18px]">Originally, we planned to sell the Shockwave Torch under the VNSH brand…</p>
          
          <p className="mb-[18px]">But for a variety of reasons… </p>
          
          <p className="mb-[18px]">VNSH can <span className="font-bold italic">no longer sell them…</span></p>
          
          <p className="mb-[18px]">And they will ONLY be available from our sister company <span className="font-bold italic">Pain Safari.</span></p>
          
          <p className="mb-[18px]">The BAD NEWS about that is…</p>
          
          <p className="mb-[18px]">We have a ton of Shockwave Torches in our warehouse with <span className="font-bold italic">old, VNSH-branded packaging.</span></p>
          
          <p className="mb-[18px]"><span className="font-bold bg-[#ffff00]">But the very GOOD NEWS for you is…</span></p>
          
          <p className="mb-[18px]">We’re giving you an absolutely absurd deal to get them out the door. </p>

          <p className="mb-[18px] font-bold">You’re getting the chance to snag THREE Shockwaves for only $44.97 + FREE Shipping!</p>

          <p className="mb-[18px]"><span className="font-bold bg-[#ffff00]">Buy 1, Get 2 FREE!</span></p>
          
          <div className="text-center mt-8 mb-6">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                Yes! Give Me My 2 FREE Shockwave Torches!
              </Button>
            </Link>
          </div>
          
          
          <p className="text-[23px] md:text-[38px] leading-[26px] md:leading-[44px] text-[#ff9c00] text-center my-6 md:px-[100px] font-bold">
          Why The Shockwave Torch Is the <span className='text-[#ff0000]'>Perfect “Backup” Weapon</span> to Your Firearm
          </p>

          <p className="mb-[18px]">Obviously, your gun is the “end all be all” solution to stopping a potentially deadly conflict.</p>
          <p className="mb-[18px]">That’s why you carry it. </p>
          <p className="mb-[18px]">But not every conflict requires deadly force…</p>
          <p className="mb-[18px]">And if you’re ever forced to pull that trigger…</p>
          <p className="mb-[18px] font-bold italic">You better be 100% sure you can prove you were justified.</p>
          <p className="mb-[18px]">Otherwise, you could end up in a <span className="underline">life-ruining</span> legal battle.</p>

        <div className="w-full overflow-hidden flex justify-center">
            <div className="relative w-full">
              <Image
                src={images.swt.news}
                alt="VNSH Shockwave Torch"
                width={936}
                height={397}
                className="w-[936px] h-[397px] md:w-[936px] md:h-[397px] mx-auto mt-[5px] md:mt-[3.8px]"
                priority
                />
            </div>
        </div>

        <p className="mb-[18px]"> Heck, even if you CAN prove you did the right thing… you might still find yourself in a whole mess of trouble.</p> 
        <p className="mb-[18px]">Just ask Jay Rodney Lewis from Iowa…</p> 
        <p className="mb-[18px]">Jay shot a violent drunk during a “road rage” incident.</p> 

          
          <p className="text-[23px] md:text-[38px] leading-[26px] md:leading-[44px] md:px-[100px] text-center my-6 text-[#ff9c00] font-bold">
          Proven Innocent But Still Went to Jail!?!
          </p>

          <p className="mb-[18px]">He was ultimately proven innocent in his trial – and <span className='font-bold italic'>he didn’t even kill the guy…</span></p>
          <p className="mb-[18px]">But since he couldn’t afford his $22k bond fee… <span className='font-bold italic'>he ended up spending 112 days in jail.</span></p>
          <p className="mb-[18px]">During those 112 days, he lost his job, life savings, apartment… <span className='font-bold italic'>everything.</span></p>
          <p className="mb-[18px]">Stories like this are the reason why many gun owners are choosing to carry some form of non-lethal defense tool as a “first line of defense” to use <span className='font-bold italic'>before their gun.</span></p>
          <p className="mb-[18px]">The problem is…</p>
          <p className="mb-[18px]">Most non-lethal defense tools <span className='font-bold'>don’t do diddly squat.</span></p>
          <p className="mb-[18px]">That’s why we made the Shockwave Torch.</p> 
          <p className="mb-[18px]">It stands apart from the rest of the non-lethal defense tools on the market, because…</p>


          <p className="text-[23px] md:text-[38px] leading-[26px] md:leading-[44px] md:px-[0] text-center my-6 text-[#ff9c00] font-bold">
          <span className='text-[#ff0000]'>With 9,000 Volts and 1.5 Microcoulombs… </span><br></br>The Shockwave Torch Is One of the Most Powerful Non-Gun Defense Tools You Can Own
          </p>


          <p className="mb-[18px]">If you’re going to trust your life with a defense tool… and have the confidence to reach for it <span className='underline'>before your gun…</span></p>
          <p className="mb-[18px]">Then obviously you want to know that it can <span className='font-bold italic'>bring the pain when you need it to.</span></p>
          <p className="mb-[18px]">And the Shockwave Torch does that in spades.</p>
          <p className="mb-[18px]">Yes, it delivers 9,000 volts of power…</p>
          <p className="mb-[18px]">But the real measure of its effectiveness has to do with its 1.5 microcoulombs. </p>
          <p className="mb-[18px] font-bold italic">What the heck is a microcoulomb? </p>
          <p className="mb-[18px]">Put simply, the higher the microcoulomb number, <span className='font-bold italic'>the more it hurts.</span> </p>
          <p className="mb-[18px]">To give you an idea of what the Shockwave Torch’s 1.5 microcoulombs feels like…</p>
          <p className="mb-[18px]">The National Institute of Justice did a study reporting that people experience <span className='font-bold italic'>“intolerable pain” at just 1 microcoulomb.</span></p>
          <p className="mb-[18px]">So rest assured, the Shockwave Torch’s 1.5 microcoulomb and 9,000 volts is more than enough to <span className='font-bold bg-[#ffff00]'>instantly put just about anyone on the ground in a second or less.</span></p>



          <div className="text-center mt-8 mb-6">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                Yes! Give Me My 2 FREE Shockwave Torches!
              </Button>
            </Link>
          </div>


        {/* Customer Reviews Section */}
        <CustomerReviewsA />

        <p className="text-center my-6 text-[#ff9c00] font-bold text-[23px] md:text-[38px] leading-[26px] md:leading-[44px] md:px-[100px]">
            <span className="text-[#ff0000]">5 “Bonus Reasons”</span> the Shockwave Torch Is An
            <span className="text-[#ff0000]"> Awesome EDC</span>
          </p>

          <div className="w-full mt-[30px] mb-8 md:mb-12 flex justify-center items-center">
            <div className="relative max-w-[350px]">
              <Image
                src={images.swt.image1}
                alt="60-Day Money Back Guarantee"
                width={432}
                height={432}
                className="object-contain w-[432px] h-auto md:w-[350px] md:h-auto"
                priority
              />
            </div>
          </div>

          <p className="mb-4">The simple fact that the Shockwave Torch is one of the most powerful non-gun defense tools available to the public should be enough to justify owning one.</p>
          <p className="mb-4">However, that’s not all that makes it one of the smartest EDC tools you could have.</p>

          <div className="flex flex-col md:flex-row gap-9 mb-7 md:w-[90%] mx-auto">
            <div className="space-y-4 flex-1 px-4">
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
                  <span className="font-bold text-[#ff0000] block">You Can Carry It In “Gun-Free” Zones: </span> This is a big one. If you’re passing through an area where guns simply can’t go, you need something to avoid being a sitting duck. And the Shockwave Torch fits the bill perfectly.
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
                  <span className="font-bold text-[#ff0000] block">
                  It’s “Deer In Headlights” Bright:</span> The Shockwave Torch also includes an insanely bright flashlight. This bulb lasts 100,000 hours so you’ll get a lifetime of use out of it. But the best part is how bright it is! This incredible bulb fires off blinding light. Flick it on and your Shockwave Torch illuminates 10x the area of other lights.
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
                  <span className="font-bold text-[#ff0000] block">It’s Built Like A TANK:</span>The Shockwave Torch is as tough as nails. Made from an ultralight and ultra-rugged combat aluminum body every inch of it is reinforced so you can use it and abuse it for years.
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
                  <span className="font-bold text-[#ff0000] block">
                  It’s So Easy To Use:</span> There’s nothing complicated about the Shockwave Torch. It also never jams or needs reloading, and takes zero skill to use. Just push it against thugs, press a button, and watch them fall.
                </p>
              </div>
            </div>
            
            {/* Side images - responsive layout */}
            <div className="w-full md:w-auto md:pl-6 mt-6 md:mt-0 md:pt-6">
              {/* Grid for medium and large screens */}
              <div className="hidden md:grid grid-cols-2 md:grid-cols-1 gap-4 md:w-[250px] items-start">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image 
                    src={images.swt.gunfreedefense}
                    alt="Magazine Pouch - Front View"
                    width={250}
                    height={250}
                    className="object-cover w-full h-full"
                    sizes="(min-width: 1024px) 250px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image 
                    src={images.swt.perfectlighting}
                    alt="Magazine Pouch - Side View"
                    width={250}
                    height={250}
                    className="w-full h-full"
                    sizes="(min-width: 1024px) 250px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
                <div className="relative aspect-square w-full overflow-hidden lg:block">
                  <Image 
                    src={images.swt.easytouse}
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
                      src={images.swt.gunfreedefense}
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
                      src={images.swt.perfectlighting}
                      alt="Magazine Pouch - Side View"
                      width={250}
                      height={250}
                      className="object-cover w-full h-full"
                      sizes="85vw"
                    />
                  </div>
                  <div className="flex-shrink-0 w-[85vw] aspect-square relative rounded-lg overflow-hidden snap-center">
                    <Image 
                      src={images.swt.easytouse}
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

          <p className="mb-[18px]">When you carry your Shockwave Torch, <span className='font-bold'>it obviously means you’re protected anywhere and everywhere you go.</span></p>
          <p className="mb-[18px]">Plus, it’s just 6.5 inches x 1.5 inches and only weighs 4 ounces, which is the perfect size to carry around in a purse, a car, or a pocket! (or your holster?)</p>
          <p className="mb-[18px]">It’s pretty easy to see why the Shockwave Torch is <span className='font-bold'>the hands down champion</span> of non-gun defense tools.</p>
          <p className="mb-[18px]">And you have the chance to grab them for the price they’ve EVER sold for!</p>


          <div className="text-center mt-8 mb-6">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                Yes! Give Me My 2 FREE Shockwave Torches!
              </Button>
            </Link>
          </div>

          <p className="text-center my-6 text-[#ff9c00] font-bold text-[23px] md:text-[38px] leading-[26px] md:leading-[44px] md:px-[100px]">
            Grab 1 Shockwave,
            <span className="text-[#ff0000]">Get 2 FREE</span>
            Before This Limited Rebrand Liquidation Ends!
          </p>

          <p className="mb-[18px]">Like we said… </p>
          
          <p className="mb-[18px]">VNSH will no longer be selling Shockwave Torches, and they’ll only be available through our sister company Pain Safari.</p>
          
          <p className="mb-[18px]">But since we have a good few Shockwaves with <span className='font-bold italic'>old VNSH packaging</span>…</p>
          
          <p className="mb-[18px] ">We’re giving them to you at a fraction of their normal cost. </p>

          <p className="mb-[18px]">Instead of the normal price of $44.97 per torch. </p>

          <p className="mb-[18px]"><span className='font-bold bg-[#ffff00]'>You get THREE Shockwaves for the price of one!</span></p>
          
          <p className="mb-[18px]">This is a fantastic deal when you consider that similar – <span className='font-bold italic'>and less powerful</span> – stun guns sell for north of $100. </p>
          
          <p className="mb-[18px]">(And they <span className='underline'>don’t even tell you</span> how many microcoulombs they have, which is what really matters most!)</p>
          
          <p className="mb-[18px] ">Plus, when you grab your Shockwave Torch right now, you’ll be doing so <span className='font-bold'>100% risk-free</span>, because…</p>


          <p className="text-center my-6 text-[#ff9c00] font-bold text-[23px] md:text-[38px] leading-[26px] md:leading-[44px] md:px-[50px]">
          We Give You An <span className="text-[#ff0000]">Iron-Clad, Money-Back Guarantee</span>
          </p>

          <div className="w-full mt-[30px] mb-8 md:mb-12 flex justify-center items-center">
            <div className="relative max-w-[350px]">
              <Image
                src={images.guarantee.moneyBack}
                alt="60-Day Money Back Guarantee"
                width={200}
                height={200}
                className="object-contain w-[200px] h-auto md:w-[350px] md:h-auto"
                priority
              />
            </div>
          </div>



          <p className="mb-4">Our stance on doing business is simple.</p>
          
          <p className="mb-4">You must absolutely love your Shockwave Torch</p>
          
          <p className="mb-4">If not, then <b className='italic'>we’ll refund you every penny</b>.</p>
          
          <p className="mb-4 ">It’s that simple.</p>

          <p className="mb-4">All you have to do is call or email our US-Based Support Team, and we’ll promptly refund you everything.</p>
          
          <p className="mb-4">And you have a full year of coverage on this guarantee!</p>
          
          <p className="mb-4">We know you’ll love the Shockwave Torch, which is why we’re happy to extend you this iron-clad guarantee.</p>
          
          <p className="mb-4">So don’t wait any longer!</p>

          <p className="mb-4">Grab your Shockwave Torch NOW!</p>
          
          <p className="md:px-[100px] text-center my-6 sm:text-[23px] md:text-[26px] lg:text-[38px] text-[#ff9c00] font-bold leading-[1.2]">
          <span className="text-[#ff0000]">Don't Wait...</span><br></br>
          Once This Liquidation Is Done, You Will NOT See This Deal Again!
          </p>

          <p className="mb-4"><span className='font-bold italic'>If you want a liability-free way to protect yourself…</span></p>
          <p className="mb-4">If you want to have something you can deploy against any attacker that’s 99% as effective as a gun – <span className='font-bold'>but that you NEVER have to think twice before using…</span></p>
          <p className="mb-4">Then you owe it to yourself to grab this crazy liquidation deal on Shockwave Torches today!</p>
          <p className="mb-4">It’s one of the most powerful non-gun defense tools you can carry, and you’re getting it risk-free with our 365-day satisfaction guarantee. </p>
          <p className="mb-4">So don’t wait! </p>
          <p className="mt-6 mb-4">Grab yours NOW!</p> 

        <div className="text-center mb-6">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[34px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1] whitespace-normal break-words"
              >
                Yes! Give Me My 2 FREE Shockwave Torches!
              </Button>
            </Link>
          </div>

          <CustomerReviewsB />

          <div className="w-full mt-[30px] mb-8 md:mb-12 flex justify-center items-center">
            <div className="relative">
              <Image
                src={images.swt.review1}
                alt="60-Day Money Back Guarantee"
                width={893}
                height={263}
                className="object-contain w-[893px] h-auto"
                priority
              />
            </div>
          </div>

          <FeatureGrid items={[
            {
              image: {
                mobile: images.features.moneyBack,
                desktop: images.features.moneyBack,
                alt: '60 Day Money Back Guarantee'
              },
              title: '60 Day Money Back Guarantee',
              description: 'No question asked 60 day refund or replacement guaranteed. If you are unhappy for any reason, get your money back. Rock solid guarantee...'
            },
            {
              image: {
                mobile: images.features.smallBusiness,
                desktop: images.features.smallBusiness,
                alt: 'Thank You!'
              },
              title: 'Thank You!',
              description: 'Your purchase supports the second amendment community and increases our ability to defend ourselves and remain free.'
            },
            {
              image: {
                mobile: images.features.securePayment,
                desktop: images.features.securePayment,
                alt: '100% Secure Payment',
                imageHeight: 157,
                imageWidth: 125
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
