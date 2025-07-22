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
  const checkoutUrl = `https://secure.vnsh.com/vnls1/checkout${utmParams ? `?${utmParams}` : ''}`;

  const [imagePaths, setImagePaths] = useState<{[key: string]: string}>({
    desktop: '',
    checkmark: '',
    markVogel: ''
  });

  const featuresList = [
    {
      title: 'The Laser Strike Cartridge',
      description: 'Cased with a beautiful graf metal finish, our laser cartridge comes in a caliber of your choosing to fit perfectly in your firearm. It features a soft rubber backing that absorbs the impact of the firing pin and activates the laser with every trigger pull.'
    },
    {
      title: 'The Laser Strike Target System',
      description: 'Your Laser Strike comes with three targets and a tripod that function seamlessly with the companion smartphone app. Just hang up your target, put your phone on the tripod, do a quick calibration, then start training!'
    },
    {
      title: 'Companion Smartphone App',
      description: 'Available for both Apple and Android phones, the free app that goes with your Laser Strike System offers innovative functionality that detects and records laser hits instantly, giving you additional insight with every shot.'
    }
  ];

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
    <section className="pt-2 pb-6">
      <div className="max-w-[1100px] mx-auto md:px-4 font-arial">
      <p 
            className="text-center mb-[15px] md:my-6 text-[20px] mid:text-[26px] lg:text-[38px] text-[#f16500] font-bold leading-[1.2]"
          >
           <span className='text-[#dc3545]'>The Fastest, Easiest Way to</span>  Become An <u>Insanely Accurate Shooter</u> <span className='text-[#dc3545]'> (Guaranteed, Or You Don't Pay a Dime)</span>  
          </p>

        <div className="text-left text-[18px] md:text-[22px] text-black">

          <p className='mb-4'>Let me ask you something…</p>
          
          <p className="mb-4">Wouldn't it be amazing if every time you drew and shot your gun, you hit exactly what you were aiming for?</p>
          
          <p className="mb-4">Over and over again…</p>
          
          <p className="mb-4">And with lightning quick speed?</p>

          <p className="mb-4">I'm sure you said <b>“YES.”</b></p>

          <p className="mb-4">That's every shooter's dream, to be deadly accurate and as fast as a pro.</p>

          <p className="mb-4">Anyone can become this good…</p>

          <p className="mb-4">The problem is…</p>

            <ol className="mb-4 pl-10 list-decimal space-y-2 font-bold">
              <li className="pl-2 leading-[0.9]">It's impossible to find the time to train…</li>
              <li className="pl-2 leading-[0.9]">And shooting enough to be deadly accurate is crazy expensive!</li>
            </ol>

          <p className="mb-4">That's where the VNSH Laser Strike Training System comes in…</p>

          <p className="mb-4">Because with this system in your hands…</p>
          

          <p 
            className="text-center my-6 text-[20px] md:text-[26px] lg:text-[38px] text-[#f16500] font-bold leading-[1.2]"
          >
            You Will Become a Better Shot In Minutes –
            <span className='text-[#dc3545]'> Without Spending a Dime On Ammo or Range Time!</span>
          </p>

          <div className="w-full my-6 flex justify-center">
            <div className="w-full w-[80%] md:w-[90%] lg:w-[54%] mx-auto">
              <Image
                src={images.laserStrike.laser1}
                alt="60 Day Money Back Guarantee"
                width={1200}
                height={320}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <p className='mb-4'>The VNSH Laser Strike Training System is a revolutionary dry fire laser training platform that simulates shooting live rounds <b className='italic'>as closely as possible</b>…</p>
          
          <p className="mb-4">…so you can practice any time, any place, and without spending anything on range time or ammo!</p>
          
          <p className="mb-4">The Laser Strike System gives you a simple way to supplement your range days with the extra practice <b>you must have</b> to gain maximum accuracy and confidence with your firearm.</p>
          
          <p className="mb-4">And it also <b className='underline'>saves you $100s – if not $1,000s – of dollars in the process.</b></p>

          <p className="mb-4">By removing the time and ammo cost of going to the range…</p>

          <p className="mb-4">The Laser Strike System <b>gives you an “unfair advantage”</b> to becoming the best shooter possible.</p>

          <p className="mb-4">That’s the simple reason why…</p>

          <div className="text-center">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
          <Button 
              variant="cta"
              size="lg"
              className="w-full md:w-[70%] mx-auto py-[30px] px-4 text-center font-bold animate-pulse-cta text-[1.425rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
            >
              Yes! Give Me My Laser Strike System!
            </Button>
          </Link>
        </div>
        <div className="w-full text-center my-[15px] md:my-[31px]">
            <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
              In Stock Now and Ships FREE!
            </span>
          </div>
          <br></br>
          <hr></hr>


          <p 
            className="text-center my-6 text-[20px] md:text-[26px] lg:text-[38px] text-[#f16500] font-bold leading-[1.2]"
            
          >
            1000s and 1000s of Americans Have Used This to
            <span className='text-[#dc3545]'>  Kill Their Bad Shooting Habits</span>
            … Like a Cheat Code for Better Accuracy and Speed!
          </p>


          <p className='mb-4'>What does it take to become the <b className='italic'>best shooter possible?</b></p>
          
          <p className="mb-4 underline">It takes thousands of trigger pulls!!</p>
          
          <p className="mb-4 font-bold">Just listen to World Champion marksman Robert Vogel…</p>
          
          <p className="mb-4">When asked “How often do you dry fire?” he replied…</p>

          <p className="mb-4 italic font-black"><span className="bg-[yellow]">"In one form or another, just about every day. For sheer skill building I feel it has no equal. For every live round that I actually fire, <u>I probably mimic that round eight to 10 times in dry fire.</u>"</span></p>

          <p className="mb-4">See, even the professionals can’t afford to spend countless hours in the range.</p>

          <p className="mb-4">And they know dry fire training is the best shortcut to get their volume in.</p>

          <p className="mb-4">But the Laser Strike System <b className='underline'>upgrades traditional dry fire</b> training <b className='italic'>from a shortcut to a full-on cheat code!</b></p>

          <p className="mb-4">Because instead of just letting you practice your draw, trigger pull, and gun handling…</p>

          <p className="mb-4">The Laser Strike System lets you <b className='italic'>simulate putting rounds on target <u>with instant feedback!</u></b></p>

          <p className="mb-4">For anyone who LOVES to shoot… and wants to max out their confidence and accuracy… <b className='italic'>but just doesn’t have the time, money, and ammo to do it at the range…</b></p>

          <p className="mb-4">The Laser Strike System is a must-have.</p>

          <p className="mb-4">Even better though…</p>

          <div className="text-center">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
          <Button 
              variant="cta"
              size="lg"
              className="w-full md:w-[70%] mx-auto py-[30px] px-4 text-center font-bold animate-pulse-cta text-[1.425rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
            >
              Yes! Give Me My Laser Strike System!
            </Button>
          </Link>
        </div>
        <div className="w-full text-center my-[15px] md:my-[31px]">
            <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
              In Stock Now and Ships FREE!
            </span>
          </div>


          <p 
            className="text-center my-6 text-[20px] md:text-[26px] lg:text-[38px] text-[#f16500] font-bold leading-[1.2]">
            The Laser Strike System Is<br></br>
            <span className="text-[#dc3545]"> Stupid-Simple to Use!</span>
          </p>


          <div className="w-full my-6 flex justify-center">
            <div className="w-full w-[80%] md:w-[90%] lg:w-[80%] mx-auto">
              <Image
                src={images.laserStrike.demo}
                alt="Laser Strike Demo"
                width={1200}
                height={320}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>


          <p className="mb-4">Now that you know what the Laser Strike System can do for you…</p>

          <p className="mb-4">Let’s take a quick look at how it works.</p>

          <p className="mb-4">It’s incredibly easy, and involves just three things:</p>


          <div className="space-y-8">
            {featuresList.map((feature, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 flex items-center justify-center">
                  <Image 
                    src={images.checkmark}
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
            <br></br>
          <p className="mb-4">As you can see, the Laser Strike System is unbelievably simple to set up and use.</p>

          <p className="mb-4">All said, it takes no more than 5 minutes to get up-and-running anywhere.</p>

          <p className="mb-4">But that’s not the only thing that makes it great…</p>

          <hr></hr>

          <p 
            className="mx-[15px] md:mx-[31px] text-center my-6 text-[20px] md:text-[26px] lg:text-[38px] text-[#f16500] font-bold leading-[1.2]"
          >
            <span className='text-[#dc3545]'>6 Reasons</span> the Laser Strike Will Help You Make the Shot
            <span className='text-[#dc3545]'> You Can’t Afford to Miss…</span>
          </p>
          


          <p className="mb-4">You carry a gun for <b>1 simple reason:</b> <u>to be able to defend your life and the lives of your loved ones.</u></p>

          <p className="mb-4">And if you’re ever forced to deploy your firearm…</p>

          <p className="mb-4">You may not have more than a <b className='italic'>few moments</b> and a <b >single shot</b> to do it effectively. That’s why it’s <b className='underline'>so critical</b> to achieve the split-second level of accuracy the Laser Strike System can give you!</p>

          <p className="mb-4">It lets you <b className='italic'>finally gain</b> the “second nature” response to reliably draw and put rounds on target <b className='italic'>without thinking about it one bit.</b></p>

          <p className="mb-4">And it lets you do it far faster than range time with live rounds alone!</p>

          <p className="mb-4">That simple fact alone is reason enough to own one, but that’s not the only thing that makes it great:</p>

            <br></br>
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
                <span className="font-bold text-[#dc3545]">Helps Eliminate “Recoil Flinch”:</span> Recoil itself has zero impact on your accuracy. But your anticipation of recoil can have a serious impact. Since the Laser Strike takes recoil out of the equation, you can train yourself to eliminate the “recoil flinch” that plagues so many shooters.
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
                <span className="font-bold text-[#dc3545]">Reduces Firearm Wear-and-Tear:</span> Not only is the Laser Strike guaranteed to be 100% safe for your guns, but it also minimizes overall wear and the frequency with which you need to clean them – since it reduces the amount of live ammo you use.
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
                <span className="font-bold text-[#dc3545]">Companion Smartphone App:</span> Available for both Apple and Android phones, the free app that goes with your Laser Strike System offers innovative functionality that detects and records laser hits instantly, giving you additional insight with every shot.
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
                <span className="font-bold text-[#dc3545]">Compatible With a Wide Range of Firearms:</span> If your gun shoots 9MM, .45 ACP, .40 S&W, and .380 ACP, then it will work with the Laser Strike. Just be sure to select the appropriate caliber when placing your order. If you don’t see your caliber, just know we plan to add more soon!
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
                <span className="font-bold text-[#dc3545]">100% Safe for Home Use:</span> After ensuring your gun is fully unloaded and contains nothing but the laser cartridge, the Laser Strike lets you safely practice around friends and family with zero worry.
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
                <span className="font-bold text-[#dc3545]">Super Portable:</span> The entire Laser Strike system can fit into any small backpack or gun bag no problem. Take it on vacation, to a friend's house, or just about anywhere.
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
                <span className="font-bold text-[#dc3545]">Totally Quiet:</span> There’s never any risk of disturbing your wife, kids, or neighbors, because the Laser Strike lets you practice in total silence!
              </p>
            </div>
  
            </div>
            
            {/* Side images - responsive layout */}
            <div className="w-full lg:w-auto lg:pl-6 mt-6 lg:mt-0 lg:pt-6">
              {/* Grid for medium and large screens */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-1 gap-4 lg:w-[400px] items-start">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image 
                    src={images.laserStrike.laser2}
                    alt="Magazine Pouch - Front View"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image 
                    src={images.logo.desktop}
                    alt="Magazine Pouch - Side View"
                    width={400}
                    height={400}
                    className="w-full h-full"
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
                <div className="relative aspect-square w-full overflow-hidden lg:block">
                  <Image 
                    src={images.laserStrike.laser3}
                    alt="Magazine Pouch - Worn View"
                    width={400}
                    height={400}
                    className="w-full h-full"
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
              </div>
              
              {/* Mobile carousel - shows on small screens */}
              <div className="md:hidden">
                <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
                  <div className="flex-shrink-0 w-[85vw] aspect-square relative rounded-lg overflow-hidden snap-center">
                    <Image 
                      src={images.laserStrike.laser2}
                      alt="Magazine Pouch - Front View"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      sizes="85vw"
                      priority
                    />
                  </div>
                  <div className="flex-shrink-0 w-[85vw] aspect-square relative rounded-lg overflow-hidden snap-center">
                    <Image 
                      src={images.logo.desktop}
                      alt="Magazine Pouch - Side View"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      sizes="85vw"
                    />
                  </div>
                  <div className="flex-shrink-0 w-[85vw] aspect-square relative rounded-lg overflow-hidden snap-center">
                    <Image 
                      src={images.laserStrike.laser3}
                      alt="Magazine Pouch - Worn View"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      sizes="85vw"
                    />
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500 mt-2">Swipe to see more</div>
              </div>
            </div>
          </div>

          <div className="text-center">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
          <Button 
              variant="cta"
              size="lg"
              className="w-full md:w-[70%] mx-auto py-[30px] px-4 text-center font-bold animate-pulse-cta text-[1.425rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
            >
              Yes! Give Me My Laser Strike System!
            </Button>
          </Link>
        </div>
        <div className="w-full text-center my-[15px] md:my-[31px]">
            <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
              In Stock Now and Ships FREE!
            </span>
          </div>


          <p 
            className="text-center my-6 text-[18px] md:text-[26px] lg:text-[38px] text-[#f16500] font-bold leading-[1.2]"
          >
            We Give You An
            <span className='text-[#dc3545]'> Iron-Clad,
            <br></br>Money-Back</span>  Guarantee
          </p>

          
          <div className="w-full flex justify-center my-6">
            <div className="w-[70%] md:w-[90%] lg:w-[30%] mx-auto">
              <Image
                src={images.guarantee.moneyBack}
                alt="Money-Back Guarantee"
                width={300}
                height={300}
                className="w-full h-auto object-contain"
                style={{ borderRadius: 0 }}
                priority
              />
            </div>
          </div>

          <p className="mb-4">Our stance on doing business is simple.</p>
          
          <p className="mb-4">You must absolutely love your Laser Strike System.</p>
          
          <p className="mb-4">If not, then <b className='italic'>we’ll refund you every penny.</b></p>

          <p className="mb-4">It’s that simple.</p>

          <p className="mb-4">You have a <b className='underline'>full 60-days</b> to get it… try it yourself… and see if it’s worth your hard-earned money.</p>
          
          <p className="mb-4">If you decide it’s not…</p>
          
          <p className="mb-4">All you have to do is call or email our <b className='italic'>US-Based Support Team</b>, and we’ll promptly refund you everything.</p>

          <p className="mb-4">We’ll <b className='italic'>even cover your return shipping</b> if you aren’t absolutely thrilled.</p>

          <p className="mb-4">If for any reason you don’t think it is, you get every penny back.</p>

          <p className="mb-4">Plus, we also give you a <b className='italic'>2-year workmanship guarantee</b> as well!</p>
          
          <p className="mb-4">We know you’ll love the Laser Strike System, which is why we’re happy to extend you this iron-clad guarantee.</p>
          
          <p className="mb-4">So don’t wait any longer!</p>

          <p className="mb-4">Grab yours NOW!</p>

          <hr></hr>

          <p 
            className="text-center my-6 text-[18px] md:text-[26px] lg:text-[38px] text-[#f16500] font-bold leading-[1.2]"
          >
            Don’t Wait… Leave Now and Your Chance to Lock In Today’s Low Price <span className='text-[#dc3545]'>May Not Come Again!</span>
          </p>

          <p className="mb-4 font-bold italic">If you want the <u>fastest, easiest possible way</u> to maximize your accuracy and confidence…</p>

          <p className="mb-4">And if you want to save countless hours and hundreds of dollars in range time and ammo costs…</p>

          <p className="mb-4">Then you owe it to yourself to grab a VNSH Laser Strike System today!</p>
          
          <p className="mb-4">Plus, you’re getting it risk-free with our 60-day satisfaction guarantee.</p>
          
          <p className="mb-4">So don’t wait!</p>

          <p className="mb-4">Grab your Laser Strike System NOW!</p>


          <div className="text-center">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
          <Button 
              variant="cta"
              size="lg"
              className="w-full md:w-[70%] mx-auto py-[30px] px-4 text-center font-bold animate-pulse-cta text-[1.425rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
            >
              Yes! Give Me My Laser Strike System!
            </Button>
          </Link>
        </div>
        <div className="w-full text-center my-[15px] md:mt-[20px] md:mb-[25px]">
            <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
              In Stock Now and Ships FREE!
            </span>
          </div>


          {/* FAQ Section */}
          <FAQ />

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
                imageHeight: 128,
                imageWidth: 102,
                className: 'md:mb-[20px]'
              },
              title: '100% Secure Payment',
              description: 'All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy.'
            }
          ]}  className="mb-[-8px]" />
          
        </div>
      </div>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Q: What Guns Work With This System?',
      answer: 'A: Right now, the Laser Strike is available in the following calibers: 9mm, .45mm, .40 S&W, and .380 ACP. If you don’t see your caliber, just know we plan on adding more very soon!'
    },
    {
      question: 'Q: Does Lack of Recoil Make This Less Effective Than Live Rounds?',
      answer: 'A: No! This is a huge myth. The effectiveness of dry fire training lies in the fact that recoil isn’t connected to the accuracy of your shot. Since the gun doesn’t kick until the bullet has exited the barrel, your precision and aim alone are what dictate accuracy.'
    },
    {
      question: 'Q: How Much Space Do I Need to Set It Up?',
      answer: 'A: The Laser Strike is intended for use at a minimum of 3 yards, and the laser can be shot up to 15-20 yards accurately. So it’s easy to use in tight spaces or at longer distances. Keep in mind though, it’s designed for indoor use.'
    },
    {
      question: 'Q: Will the App Work On My Phone?',
      answer: 'A: Yes, the smartphone app needed to use the Laser Strike System is available for all Apple and Android phones.'
    },
    {
      question: 'Q: Will I Need to Rerack After Every Shot?',
      answer: 'A: Yes, the smartphone app needed to use the Laser Strike System is available for all Apple and Android phones.'
    },
  ];

  return (
    <div className="w-full px-4 md:mt[10px] md:mb-[42px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[20px] md:text-[38px] md:leading-[42px] font-bold text-center mb-5 text-[#f16500]">Frequently Answered Questions About the VNSH Laser Strike Training System</h2>
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div key={index} className="overflow-hidden md:mx-[-14px]">
              <button
                className="w-full flex justify-between items-center py-[6.5px] px-[10px] bg-[#f2f2f2] hover:bg-gray-100 transition-colors text-left cursor-pointer text-[20px] font-bold text-[#007bff] md:mt-[2.1px]"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-grow text-[18px] md:text-[20px]">{item.question}</span>
                <span className="text-[#007bff] transform transition-transform duration-200 ml-4 flex-shrink-0">
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </button>
              {openIndex === index && (
                <div className="bg-[#e9e9e9] border-[1px] border-solid border-[#dddddd] leading-[22px] text-[20px] py-[30px] px-[10px]">
                  <p className="text-gray-700 text-[20px]">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BogoFeatures;
