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
  const checkoutUrl = `https://secure.vnsh.com/vns3mmbonus/checkout${utmParams ? `?${utmParams}` : ''}`;

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
    <section className="pb-[19px] md:pb-6 mx-[20px] mt-[1px] md:mt-[15px] md:leading-[25px]">
      <div className="w-full font-arial">
        {/* Responsive Image */}
        <div className="w-full overflow-hidden flex justify-center">
          <div className="relative w-full max-w-[100%] mx-auto">
            <div className="relative w-[70.5%] md:w-[90%] max-w-[100%] mx-auto overflow-hidden pb-[45%]">
              <Image
                src="/images/magmate/FREE_Magmate.jpeg"
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="text-left text-[18px] md:text-[22px] text-black md:mt-[40px]">

          <div className="text-center mb-6">
            <span className="md:mx-[50px] bg-[#ffa500] text-[20px] md:text-[48px] font-bold leading-none md:leading-[45px] ">Discover Why Over 175,234 Americans Are Carrying With VNSH…</span>
          </div>
          
          
          <p className='mb-4'>Literally <b className='italic'>hundreds of thousands</b> of Americans are using VNSH to carry comfortably all day, every day.</p>

          <p className="mb-4">The biggest reason why is…</p>

          <p className="mb-4">It’s GUARANTEED to be <b className='italic'>the most comfortable</b> holster you’ve ever worn – <span className='bg-[#ff0]'>or you get 100% of your money back!</span></p>
          

          
          <div className="w-full my-6 flex justify-center">
            <div className="w-full md:w-[90%] lg:w-[65%] mx-auto">
              <Image
                src="/images/guarantee/guaranteed_bannerDesktop.jpeg"
                alt="60 Day Money Back Guarantee"
                width={1200}
                height={320}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          
          <p className="mb-4 italic font-bold">What makes it so comfortable??</p>
          
          <p className="mb-4">The secret is our…</p>
          

          <p className="text-center md:mx-[40px] my-6 text-[26px] md:text-[36px] text-[#f16500] font-bold leading-[1.2]">
          Ultra-Plush 
            <span className="text-[#ff0000]"> “Yoga Pant” Material</span> Belt + a Robust Cordura Holster Body That’ll <span className="text-[#ff0000]"> Never Dig or Poke</span>
          </p>

          <p className="mb-4">Unlike traditional holsters that require a bulky tactical belt and constantly jab at your body…</p>
          
          <p className="mb-4">VNSH uses a durable but stretchy built-in belt that</p>

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
                <p className="leading-relaxed">Effortlessly wicks sweat…</p>
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
                <p className="leading-relaxed">Never retains odor…</p>
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
                <p className="leading-relaxed">Feels softer than your favorite PJs on Christmas morning…</p>
              </div>
            </div>
          </div>



          
          <p className="mb-4">… combined with a super tough Cordura blend holster body that gives you <b >top-notch retention</b> – with a non-rigid feel that’ll make you forget you're carrying at all</p>
          
          <p className="mb-4">Plus, VNSH makes just about ANY semi auto <b className='underline'>disappear in plain sight.</b></p>
          
          <p className="mb-4">How many other holsters can do all that??</p>
          
          <p className="mb-4 font-bold">The answer is ZERO.</p>




          <div className="text-center w-[97.7%]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[35px] px-4 font-bold animate-pulse-cta text-[22px] md:text-[2rem] whitespace-normal break-words rounded-[0.25rem]"
            >
              Give Me My VNSH Holster + FREE MagMate
            </Button>
          </Link>
        </div>

        <div className="w-full text-center my-[15px] md:my-[15px]">
            <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
            60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
            </span>
          </div>

          <p className="text-center my-6 md:mt-[50px] text-[26px] md:text-[36px] text-[#FF9900] font-bold leading-[1.2]">Seriously, This Holster Works With 99.9% of
          Semi-Automatic Pistols On the Planet</p>

          
          <div className="w-full my-6 flex justify-center">
            <div className="w-[90%] md:w-[90%] lg:w-[60%] mx-auto">
              <Image
                src={images.holster.blackHolsterMobile3}
                alt="VNSH Holster - Comfortable and Concealable"
                width={375}
                height={375}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          <p className="mb-4">Our holster design means that <b>regardless of what pistol you own…</b> it will help you safely and comfortably carry it.</p>

          <p className="mb-4">No more needing to buy multiple holsters for all your pistols.</p>

          <p className="mb-4">Plus, since it has 2-built in mag pouches, now <b>you don’t need to spend extra money on mag pouches</b> to guarantee you’re never out of the fight.</p>

          <p className="mb-4">Take a look at the list of brands our holster works with and then grab yours before the price goes up!</p>
          

          <div className="w-full my-8">
            <div className="w-full">
              <div className="relative w-full">
                {/* Mobile/Tablet Image */}
                <div className="block md:hidden w-full">
                  <Image
                    src={images.logo.mobile}
                    alt="VNSH Logo"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                {/* Desktop Image */}
                <div className="hidden md:block w-full">
                  <Image
                    src={images.logo.desktop}
                    alt="VNSH Logo"
                    width={1200}
                    height={300}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center w-[97.7%]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[35px] px-4 font-bold animate-pulse-cta text-[22px] md:text-[2rem] whitespace-normal break-words rounded-[0.25rem]"
            >
              Give Me My VNSH Holster + FREE MagMate
            </Button>
          </Link>
        </div>

        <div className="w-full text-center my-[15px] md:my-[15px]">
            <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
            60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
            </span>
          </div>

         <br></br>

         <p className="text-center my-6 text-[26px] md:text-[36px] text-[#f16500] font-bold leading-[1.2]">
            <span className="text-[#ff0000] italic"> Limited FREE Bonus Gift (Worth $30)</span> Comfiest, <span className="text-[#ff0000] italic"> Most Discreet</span> Way to Conceal Spare Mags <span className="text-[#ff0000]"> Right In Your Pocket!</span>
          </p>




          <div className="w-full flex justify-center my-8">
            <div className="w-[90%] md:w-[90%] lg:w-[65%] mx-auto">
              <Image
                src="/images/magmate/FREE_Magmate.jpeg"
                alt="VNSH Holster - Secure Retention"
                width={1200}
                height={800}
                className="w-full h-auto rounded-none"
                priority
              />
            </div>
          </div>

          <p className="mb-4">For a short time, we’re sending out our bestselling Universal Mag Carrier <span className="font-bold italic">- the VNSH MagMate</span> – <span className="bg-[#ff0]">100% FREE with every holster order (from this page ONLY!)</span></p>

          
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

          <p className="mb-4">Normally $30…</p>
          <p className="mb-4">The VNSH MagMate is yours <span className="font-bold italic bg-[#ff0]">totally FREE</span> with your holster order today!</p>
          <p className="mb-4">Plus, when you grab this deal, you’ll be doing so <span className="font-bold italic">100% Risk-Free</span>, because…</p>
  
          <div className="text-center w-[97.7%]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[35px] px-4 font-bold animate-pulse-cta text-[22px] md:text-[2rem] whitespace-normal break-words rounded-[0.25rem]"
            >
              Give Me My VNSH Holster + FREE MagMate
            </Button>
          </Link>
        </div>

        <div className="w-full text-center my-[15px] md:my-[15px]">
            <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
            60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
            </span>
          </div>


          <p className="text-center my-6 text-[26px] md:text-[36px] text-[#f16500] font-bold leading-[1.2]">
            You’re Getting An 
            <span className="text-[#ff0000]"> Iron-Clad,
            Money-Back</span> Guarantee
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



          <p className="mb-4">Love everything about your order, or <b className='italic'>we’ll refund you every penny.</b></p>
          
          <p className="mb-4">It’s that simple.</p>
          
          <p className="mb-4">If you aren’t totally thrilled, all you have to do is contact our <b className='italic'>US-Based Support Team</b> within 60 days to get a full refund.</p>
          
          <p className="mb-4 font-bold"><span className='bg-[#ff0]'>Plus, we also give you a <i className="font-extrabold">2-year workmanship guarantee as well!</i></span></p>

          <p className="mb-4">We know you’ll love your VNSH gear, which is why we’re happy to extend you these iron-clad guarantees.</p>
          
          <p className="mb-4">So if you want to get an awesome price on the world’s most comfortable holster…</p>
          
          <p className="mb-4">Plus… get a FREE VNSH MagMate with it…</p>
          
          <p className="mb-4">Then you owe it to yourself to grab this deal now!</p>


          <div className="text-center w-[97.7%]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[35px] px-4 font-bold animate-pulse-cta text-[22px] md:text-[2rem] whitespace-normal break-words rounded-[0.25rem]"
            >
              Give Me My VNSH Holster + FREE MagMate
            </Button>
          </Link>
        </div>

        <div className="w-full text-center my-[15px] md:my-[15px]">
            <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
            60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
            </span>
          </div>
          <br></br>
   
          <div className="w-full flex justify-center md:my-4">
            <div className="w-full max-w-[100%] md:max-w-[500px] px-4">
              {/* Mobile/Tablet Image */}
              <div className="block md:hidden">
                <Image
                  src="/images/testimonials/TestimoniesMobile.webp"
                  alt="Customer Testimonials"
                  width={600}
                  height={800}
                  className="block md:hidden w-full h-auto"
                  priority
                />
              </div>
              {/* Desktop Image */}
              <div className="hidden md:block">
                <Image
                  src="/images/testimonials/TestimoniesMobile.webp"
                  alt="Customer Testimonials"
                  width={1200}
                  height={800}
                  className="hidden md:block w-full h-auto"
                  priority
                />
              </div>
            </div>
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
                alt: 'Thank You!',
                className: ''
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
                className: 'mb-[15px] md:mb-[22px]'
              },
              title: '100% Secure Payment',
              description: 'All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy...'
            }
          ]} className="mb-[9px] mt-[45px]"/>
 
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
      question: 'Q: My Semi-automatic Isn\'t Listed Above. Will it fit?',
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
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-5"></h2>
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div key={index} className="overflow-hidden md:mx-[-40px]">
              <button
                className="w-full flex justify-between items-center py-[9px] px-[10px] bg-[#f2f2f2] hover:bg-gray-100 transition-colors text-left cursor-pointer text-[20px] font-bold text-[#007bff] md:mt-[2.1px] border-[1px] border-solid border-[#dddddd]"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-grow">{item.question}</span>
                <span className="text-[16px] text-[#007bff] transform transition-transform duration-200 ml-4 flex-shrink-0">
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </button>
              {openIndex === index && (
                <div className="bg-[#e9e9e9] border-[1px] border-solid border-[#dddddd] leading-[22px] text-[20px] py-[30px] px-[10px]">
                  <p className="text-[#212529]">{item.answer}</p>
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
