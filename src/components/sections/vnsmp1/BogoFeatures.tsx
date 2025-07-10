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
  const checkoutUrl = `https://secure.vnsh.com/vnsmp1/checkout${utmParams ? `?${utmParams}` : ''}`;

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
    <section className="pt-2 pb-6">
      <div className="max-w-[1100px] mx-auto px-4" style={{ fontFamily: 'Arial, sans-serif' }}>
        
      <p 
            className="text-center my-6 text-[26px] lg:text-[36px]"
            style={{
              color: '#f16500',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            Why Adding This to Your CCW Rig Lets You <br></br><span style={{ color: '#ff0000' }}>Be Ready for Anything...</span>
          </p>
        
        <div className="text-left text-[18px] md:text-[22px] text-black">

          <p className='mb-4'>Let’s be honest, there's never such a thing as too much ammo.</p>
          
          <p className="mb-4">And if you own a VNSH holster, you’re already aware it’s a leader in its class with how many rounds it lets you carry.</p>
          
          <p className="mb-4">But what if you want to add <b className='italic'>even more ammo</b> … or use the pockets on your VNSH holster for a knife or light?</p>
          
          <p className="mb-4">Or maybe you want to reload from your support side, not your strong side.</p>
          
          <p className="mb-4 underline">That’s why we made the VNSH Support-Side Mag Pouch.</p>
          
          <p className="mb-4">Not only does it let you carry an <b>absolutely massive load of ammo</b>…</p>
          
          <p className="mb-4">But it also <b>prevents you from having to reach across your body</b> to reload – saving you precious time in a conflict and preserving your stance.</p>
          
          <p className="mb-4">There’s no two ways about it.</p>
          
          <p className="mb-4">This support-side mag pouch is <b className='italic'>perfect for anyone who wants to</b>…</p>
          
          <div className="text-center mt-8 mb-12">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                YES! Send Me My VNSH Support-Side Mag Pouch Now!
              </Button>
            </Link>
          </div>
          
          <div className="w-full flex justify-center my-4">
            <span 
              className="font-bold text-center" 
              style={{
                backgroundColor: '#ff0',
                color: 'red',
                fontSize: '22px'
              }}
            >
              In Stock Now and Ships FREE!
            </span>
          </div><br></br>
          
          <p 
            className="text-center my-6 text-[26px] lg:text-[36px] italic"
            style={{
              color: 'red',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            Carry the Most Ammo Possible and Reload Faster to Maximize Your Defensive Capability
          </p>

          <p className="mb-4">With today’s huge increase in mass shootings, it’s not a bad idea to have as much ammo as possible if you’re unlucky enough to get caught in such a terrible situation.</p>
          
          <p className="mb-4">Maybe you need to <b className='italic'>lay down cover fire to help yourself or others</b> flee to safety…</p>
          
          <p className="mb-4">Or maybe you just want to go about your day-to-day life <b className='italic'>never having to worry</b> that you’ll be left stranded and ammoless when you <u>need it most</u>.</p>

          <p className="mb-4">No matter how you slice it… as long as you don’t mind carrying it, there’s really <b>no downside</b> to packing extra ammo.</p>

          <p className="mb-4">And our support-side pouch gives you <b>an extra layer of protection</b> … by letting you carry <b>an additional <span className='italic underline'>30 rounds</span> of ammo</b> (or more, depending on your specific setup).</p>
          
          <p className="mb-4">And like we said… it also <b className='italic'>reduces your reload time considerably</b>.</p>

          <p className="mb-4">If you want to <u>maximize your defensive capabilities</u> and be ready for anything, then the VNSH Support-Side Mag Pouch is exactly what you want.</p>

          <div className="text-center mt-8 mb-12">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                YES! Send Me My VNSH Support-Side Mag Pouch Now!
              </Button>
            </Link>
          </div>
          
          <div className="w-full flex justify-center my-4">
            <span 
              className="font-bold text-center" 
              style={{
                backgroundColor: '#ff0',
                color: 'red',
                fontSize: '22px'
              }}
            >
              In Stock Now and Ships FREE!
            </span>
          </div><br></br>
          <hr></hr>
          <p 
            className="text-center my-6 text-[26px] lg:text-[36px]"
            style={{
              color: '#f16500',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            <span style={{ color: '#ff0000' }}>5 Reasons</span> to Grab a VNSH Support-Side Mag Pouch NOW!
          </p>

          <p className="mb-4">The simple fact that the VNSH Support-Side Mag Pouch lets you conceal an absurd amount of ammo wherever you go… while also making it lightning-fast to reload in a confrontation… should be more than enough to justify owning one.</p>
          
          
          <p className="mb-4">However, that's not all that makes it one of the smartest ways to add extra ammo to your carry setup…</p>
          
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
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
                <span className="font-bold text-[#dc3545]">Ultra Durable 1000D Cordura:</span> We made this mag pouch with the same bombproof material as our flagship VNSH Holster, so you can count on it lasting you a lifetime.
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
                <span className="font-bold text-[#dc3545]">Fits 99% of All Modern Handgun Magazines:</span> Thanks to its universal fit design, this pouch will easily hold just about any magazines in your arsenal.
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
                <span className="font-bold text-[#dc3545]">Perfect for Other EDC Too:</span> The two compartments in this pouch will perfectly accommodate a flashlight, knife, or other daily carry items - whenever you don't feel the need to be strapped to the gills. ;)
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
                <span className="font-bold text-[#dc3545]">Preserves Your Stance and Accuracy Under Stress:</span> If you're engaged in a conflict, the last thing you want to do is reach across your body to reload. Carrying with this mag pouch means you'll never have to worry about doing that!
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
                <span className="font-bold text-[#dc3545]">Super Solid Retention + Instant Access:</span> The unique elasticity of the individual pouches will hold any magazine secure regardless of what you're doing, but the open design lets you get to them instantly when needed.
              </p>
            </div>
            <p className="mb-4">If you carry regularly…</p>

            <p className="mb-4">And if your <b>top priority</b> is to be the <b>best protector for yourself and others</b> that you possibly can be…</p>

            <p className="mb-4">Then there’s simply no reason not to own a VNSH Support-Side Mag Pouch.</p>

            <p className="mb-4">And right now is the best time to snag one, because…</p>
            </div>
            
            {/* Side images - responsive layout */}
            <div className="w-full lg:w-auto lg:pl-6 mt-6 lg:mt-0 lg:pt-6">
              {/* Grid for medium and large screens */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-1 gap-4 lg:w-[300px] items-start">
                <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                  <Image 
                    src={images.vnsmp1.frontView}
                    alt="Magazine Pouch - Front View"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    sizes="(min-width: 1024px) 300px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                  <Image 
                    src={images.vnsmp1.sideView}
                    alt="Magazine Pouch - Side View"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    sizes="(min-width: 1024px) 300px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden lg:block">
                  <Image 
                    src={images.vnsmp1.wornView}
                    alt="Magazine Pouch - Worn View"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    sizes="(min-width: 1024px) 300px, (min-width: 768px) calc(50vw - 2rem), 100vw"
                  />
                </div>
              </div>
              
              {/* Mobile carousel - shows on small screens */}
              <div className="md:hidden">
                <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
                  <div className="flex-shrink-0 w-[85vw] aspect-square relative rounded-lg overflow-hidden snap-center">
                    <Image 
                      src={images.vnsmp1.frontView}
                      alt="Magazine Pouch - Front View"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                      sizes="85vw"
                      priority
                    />
                  </div>
                  <div className="flex-shrink-0 w-[85vw] aspect-square relative rounded-lg overflow-hidden snap-center">
                    <Image 
                      src={images.vnsmp1.sideView}
                      alt="Magazine Pouch - Side View"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                      sizes="85vw"
                    />
                  </div>
                  <div className="flex-shrink-0 w-[85vw] aspect-square relative rounded-lg overflow-hidden snap-center">
                    <Image 
                      src={images.vnsmp1.wornView}
                      alt="Magazine Pouch - Worn View"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                      sizes="85vw"
                    />
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500 mt-2">Swipe to see more</div>
              </div>
            </div>
          </div>


          
          <div className="text-center mt-8 mb-12">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
               YES! Send Me My VNSH Support-Side Mag Pouch Now!
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center my-4">
            <span 
              className="font-bold text-center" 
              style={{
                backgroundColor: '#ff0',
                color: 'red',
                fontSize: '22px'
              }}
            >
              In Stock Now and Ships FREE!
            </span>
          </div><br></br>

          <p 
            className="text-center my-6 text-[26px] lg:text-[36px]"
            style={{
              color: '#f16500',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
           New Product Launch Pricing Is Still In Effect! Grab Your Support-Side Mag Pouch NOW
          </p>

        <p className="mb-4">As you know, just about everything has shot up in cost over the past several months…</p>
          
          <p className="mb-4">And that includes the price of our supplies too – especially the <b>ultra premium, 1000 thread-count Cordura</b> we use to make our holsters and mag pouches.</p>
          
          <p className="mb-4">So in the next few weeks or months, we may need to raise prices on these to keep our business viable.</p>
          
          <p className="mb-4">When we do that, you can expect the price of this pouch to jump <b className='italic'>at least 20-30%</b>.</p>

          <p className="mb-4 " >Thankfully, for today… we can keep offering the same low price we’ve had on the VNSH Support-Side Mag Pouch since we launched it.</p>
          
          <p className="mb-4">And if you act now, you can get one for <b>just $25.97</b>.</p>
          <p className="mb-4">Plus, when you grab yours right now, you’ll be doing so 100% risk-free, because…</p>
          <p 
            className="text-center my-6 text-[26px] lg:text-[36px]"
            style={{
              color: '#f16500',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            You’re Getting An 
            <span style={{ color: '#ff0000' }}> Iron-Clad,
            Money-Back</span> Guarantee
          </p>

          <div className="w-full mt-[30px] mb-8 md:mb-12 overflow-hidden flex justify-center">
            <div className="relative w-full max-w-[250px] mx-auto">
              <Image
                src={images.guarantee.moneyBack}
                alt="60-Day Money Back Guarantee"
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>
          </div>



          <p className="mb-4">Our stance on doing business is simple.</p>
          
          <p className="mb-4">You must absolutely love your new mag pouch.</p>
          
          <p className="mb-4">If not, then <b className='italic'>we’ll refund you every penny</b>.</p>
          
          <p className="mb-4 ">It’s that simple.</p>

          <p className="mb-4">You have a <b className='underline'>full 60 days</b> to try it out and see if it’s worth your hard earned money…</p>
          
          <p className="mb-4">If you decide it’s not…</p>
          
          <p className="mb-4">All you have to do is call or email our <b className='italic'>US-Based Support Team</b>, and we’ll promptly refund you everything.</p>
          
          <p className="mb-4">You’re <b className='italic'>also covered</b> by a 2-year materials and workmanship guarantee!</p>

          <p className="mb-4">We know you’ll love this mag pouch <b>(and the peace of mind it gives you)</b>, which is why we’re happy to extend you this iron-clad guarantee.</p>
          
          <p className="mb-4">So don’t wait any longer!</p>
          
          <p className="mb-4">Grab your VNSH Support-Side Mag Pouch NOW!</p>

          <p 
            className="text-center my-6 text-[26px] lg:text-[36px]"
            style={{
              color: '#f16500',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            Don’t Wait - Leave Now and Your Chance to Lock In This Low Price
            <span style={{ color: '#ff0000' }}> May Not Come Again!</span>  
          </p>

          <div className="w-full mt-[30px] mb-8 md:mb-12 overflow-hidden flex justify-center">
            <div className="relative w-full max-w-[400px] mx-auto">
              <Image
                src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/MagPouch5Mobile.webp?v=1730563797"
                alt="VNSH Support-Side Mag Pouch - Money-Back Guarantee"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <p className="mb-4">If you want to carry with the <b>absolute most firepower possible</b>…</p>
          
          <p className="mb-4">And if you want to have <b className='italic'>life-saving speed on your reload time</b> in the heat of a conflict…</p>
          
          <p className="mb-4">Then you owe it to yourself to grab a VNSH Support-Side Mag Pouch today!</p>

          <p className="mb-4">Like we said…</p>
          
          <p className="mb-4">There are <b>no promises</b> on how long today’s low, new product launch price will last…</p>
          
          <p className="mb-4">If you come back tomorrow or next week, it may not be here any longer.</p>

          <p className="mb-4">Plus, your purchase today is <b>100% risk-free</b> since you’re covered by our <b>60-day, money-back guarantee</b>.</p>
          <p className="mb-4">So don’t wait!</p>
          <p className="mb-4">Grab your VNSH Support-Side Mag Pouch NOW!</p>

        <div className="text-center mt-8 mb-12">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                YES! Send Me My VNSH Support-Side Mag Pouch Now!
              </Button>
            </Link>
          </div>

          <div className="w-full flex justify-center my-4">
            <span 
              className="font-bold text-center" 
              style={{
                backgroundColor: '#ff0',
                color: 'red',
                fontSize: '22px'
              }}
            >
              In Stock Now and Ships FREE!
            </span>
          </div><br></br>

          <FeatureGrid items={[
            {
              image: {
                mobile: images.features.moneyBack,
                desktop: images.features.moneyBack,
                alt: '60 Day Money Back Guarantee'
              },
              title: '60 Day Money Back Guarantee',
              description: 'No question asked 60 day refund or replacement guaranteed. If you are unhappy for any reason, get your money back.'
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
                alt: '100% Secure Payment'
              },
              title: '100% Secure Payment',
              description: 'All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy.'
            }
          ]} />
          
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
      question: 'Q: Does this come in right-handed and left-handed configurations?',
      answer: 'A: No, the VNSH holster is a true ambidextrous holster.'
    },
    {
      question: 'Q: Will This Work With My Laser Sights or a Mounted Light?',
      answer: 'A: Depending on the light or sight you are using it may fit. Smaller lights and lasers do fit with most compact and some full-size guns. You can safely purchase the holster and if it doesn\'t work for your setup we\'ll give you a prepaid return label for a full refund.'
    },
    {
      question: 'Q: Will this work for my revolver?',
      answer: 'A: The holster will fit most compact revolvers but we don\'t have an exhaustive list of which revolvers do and don\'t fit.'
    },
    {
      question: 'Q: Do I Need a Belt? How Does It Connect Around The Waist?',
      answer: 'A: NO! The holster has a built in Waist Band. It secures around your waist with built-in, high quality molded velcro. You do not need a belt... or anything else for that matter. You could even wear it naked if you wanted too. ;)'
    },
    {
      question: 'Q: My Semi-automatic Isn\'t Listed. Will it fit?',
      answer: 'A: Yes, all semi-automatic firearms fit. In fact, that is what our design is specifically set for. This is the only holster on the market that will fit any semi-automatic firearm. The exception is the C.O.R.E. series from Smith and Wesson.'
    },
    {
      question: 'Q: Will My Magazines Fit in the Pouches?',
      answer: 'A: Yes, all magazines for all semi-automatics will fit in any or all of the two magazine pouches.'
    },
    {
      question: 'Q: Does this holster work with slide-mounted optics (Red dots, etc)?',
      answer: 'A: In most cases no, though some smaller, sub-compact weapons may work with a slide-mounted optic. If you want to try the holster out with your optic and it doesn\'t work, please remember we offer an any-reason return policy for the first 60-days you own the holster.'
    }
  ];

  return (
    <div className="w-full px-4 my-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left cursor-pointer"
                onClick={() => toggleFAQ(index)}
                style={{
                  fontSize: '20px',
                  color: '#007bff',
                  fontWeight: 700
                }}
              >
                <span className="flex-grow">{item.question}</span>
                <span className="text-[#007bff] transform transition-transform duration-200 ml-4 flex-shrink-0">
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border-t border-gray-100">
                  <p className="text-gray-700">{item.answer}</p>
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
