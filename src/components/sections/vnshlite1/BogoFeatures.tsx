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
  const checkoutUrl = `https://secure.vnsh.com/vnshlite1/checkout${utmParams ? `?${utmParams}` : ''}`;

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
    <section className="pb-[19px] md:pb-6 md:mx-[20px] mt-[1px] md:mt-[15px] md:leading-[35px]">
      <div className="w-full font-arial">
        
        <div className="text-left text-[18px] md:text-[22px] text-black md:mt-[40px]">

        <p className="font-appleemoji text-center md:px-[0] md:mx-[30px] md:my-6 text-[24px] md:text-[37px] text-[#f90] font-bold leading-[30px] md:leading-[45px]">Everything People LOVE About the VNSH Original… <br></br><span className="text-[#ff0000]"> With a New Featherweight Design</span> 
          </p>

        <div className="w-full overflow-hidden flex justify-center">
            <div className="relative w-full">
              <Image
                src={images.holsterlite.lite2}
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                width={700}
                height={467}
                className="w-[332px] h-[332px] md:w-[700px] md:h-[467px] mx-auto mt-[1px] md:mt-[3.8px]"
                priority
                />
            </div>
        </div>

        <p className="mb-4">By popular demand, we’ve created a “lite” version of the VNSH Holster for those who want the most minimal option possible.</p>
          
          <p className="mb-4">The <span className="font-bold bg-[#ff0]">1 key difference</span> between the VNSH Original and VNSH Lite is this:</p>
          

          <p className="mb-4">We simply <span className="font-bold underline">removed the 2 mag pouches</span> from the VNSH Original to make our comfiest, most compact holster ever!</p>
          
          <p className="mb-4">You still get…</p>

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
                <p className="leading-relaxed">All-Day Comfort With an <b>Integrated “No Stink” Yoga Pant Material Belt</b></p>
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
                <p className="leading-relaxed">Compatibility With 99% of Modern Semi Autos <b>(No More Wasted Money On Separate Holsters)</b></p>
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
                <p className="leading-relaxed">Level 2 Retention With <b>Adjustable Magnetic Closure for Easy Thumb Break</b></p>
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
                <p className="leading-relaxed">“Bombproof” Holster Body With <b>Premium Cordura Blend</b></p>
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
                <p className="leading-relaxed">Total Peace of Mind With <b>Non-Penetrable Trigger Guard</b></p>
              </div>

            </div>
          </div>

          <p className="mb-4">But now with an <span className="font-bold italic bg-[#ff0]">even smaller, more concealable form factor!</span> </p>
          
          <p className="mb-4">If you simply want the easiest, comfiest option to carry your firearm and nothing else… <b>the VNSH Lite is just what you’ve been looking for!</b></p>
          
          <div className="text-center w-[100%] md:w-[89%] mx-auto md:mt-[50px] mt-[50px] mb-[34px] md:mb-[20px]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[50px] md:py-[40px] px-10 md:px-1 font-bold animate-pulse-cta text-[28px] md:text-[30px] whitespace-normal break-words rounded-[0.25rem] leading-[30px] font-sans"
            >
              Yes, Give Me My VNSH Holster Lite Risk-Free!
            </Button>
          </Link>
        </div>

        <div className="w-full text-center my-[15px] md:my-[15px]">
          <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
          60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
          </span>
        </div>
      <br /><br />

          <div className="text-center mb-6">
            <span className="md:mx-[50px] bg-[#ffa500] text-[20px] md:text-[48px] font-bold leading-none md:leading-[45px] ">Discover Why Over 175,234 Americans Are Carrying With VNSH…</span>
          </div>
          
          
          <p className='mb-4'>Literally <b className='italic'>hundreds of thousands</b> of Americans are using VNSH to carry comfortably all day, every day.</p>

          <p className="mb-4">The biggest reason why is…</p>

          <p className="mb-4">It’s GUARANTEED to be <b className='italic'>the most comfortable</b> holster you’ve ever worn – <span className='font-bold bg-[#ff0]'>or you get 100% of your money back!</span></p>
          

          
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
          

          <p className="text-center mx-[-5px] md:mx-[40px] my-6 text-[26px] md:text-[37px] text-[#f90] font-bold leading-[1.2] font-appleemoji">
          Ultra-Plush 
            <span className="text-[#ff0000]"> “Yoga Pant” Material</span> Belt + a Robust Cordura Holster Body That’ll <span className="text-[#ff0000]"> Never Dig or Poke</span>
          </p>

          <p className="mb-4">Unlike traditional holsters that require a <span className='font-bold'>bulky tactical belt</span> and constantly <span className='font-bold'>jab at your body…</span></p>
          
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
                <p className="leading-relaxed font-bold italic">Feels softer than your favorite PJs on Christmas morning…</p>
              </div>
            </div>
          </div>

          <p className="mb-4">… combined with a super tough Cordura blend holster body that gives you <b >top-notch retention</b> – with a non-rigid feel that’ll make you forget you're carrying at all</p>
          
          <p className="mb-4">Plus, VNSH makes just about ANY semi auto <b className='underline'>disappear in plain sight.</b></p>
          
          <p className="mb-4">How many other holsters can do all that??</p>
          
          <p className="mb-4 font-bold">The answer is ZERO.</p>

          <div data-secondsdelay="" className="yotpo-reviews-container">
            <div 
              data-text="text" 
              data-yotpo-instance-id="461899" 
              data-yotpo-product-id=""
              data-yotpo-cart-product-id="" 
              data-secondsdelay="" 
              className="yotpo-widget-instance"
            ></div>
          </div>



          <div className="text-center w-[100%] md:w-[89%] mx-auto md:mt-[50px] mt-[50px] mb-[34px] md:mb-[20px]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[50px] md:py-[40px] px-10 md:px-1 font-bold animate-pulse-cta text-[28px] md:text-[30px] whitespace-normal break-words rounded-[0.25rem] leading-[30px] font-sans"
            >
              Yes, Give Me My VNSH Holster Lite Risk-Free!
            </Button>
          </Link>
        </div>

        <div className="w-full text-center my-[15px] md:my-[15px]">
          <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
          60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
          </span>
        </div>
      <hr />
      <p className="text-center md:mx-[40px] my-6 text-[26px] md:text-[37px] text-[#f16500] font-bold leading-[1.2] font-appleemoji">Best News On the New VNSH Lite… <span className="text-[#ff0000]"> Smaller Holster = Smaller Price!</span></p>

      <div className="w-full overflow-hidden flex justify-center">
            <div className="relative w-full">
              <Image
                src={images.holsterlite.lite3}
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                width={700}
                height={467}
                className="w-[400px] h-[267px] md:w-[700px] md:h-[467px] mx-auto mt-[5px] md:mt-[3.8px]"
                priority
                />
            </div>
        </div>
        <br />

        <p className="mb-4">We didn’t just shrink the size of our holster for you… <span className="font-bold italic bg-[#ff0]">we also shrunk the price!!</span></p>
          
        <p className="mb-4">Since the VNSH Lite <span className="underline">doesn’t include the spare mag pouches</span> of the VNSH original, it takes less material (and money) to produce…</p>

        <p className="mb-4 italic font-bold">…which means we can bring it to you for an insanely good deal.</p>
          
        <p className="mb-4">The VNSH Original has a normal retail price of $129.97…</p>

        <p className="mb-4">However, we want to celebrate the new VNSH Lite and build some buzz for it…</p>

        <p className="mb-4">That’s an incredible price for the most affordable VNSH Holster EVER!</p>

        <p className="mb-4">So you have the chance to get it for the ultra-low introductory price of just for <span className="font-bold bg-[#ff0]">just 59.97!</span></p>
          
        <p className="mb-4">That’s <span className="font-bold italic">incredible price for the most</span> affordable VNSH Holster EVER!</p>

        <p className="mb-4">But this low price won’t be around forever.</p>
          
        <p className="mb-4">Plus, when you grab this deal right now, you’ll be doing so <b className='font-bold'>100% Risk-Free</b>, because…</p>


          <p className="text-center my-6 text-[26px] md:text-[37px] text-[#f16500] font-bold leading-[1.2] font-appleemoji">
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
          
          <p className="mb-4"><span className='bg-[#ff0]'>Plus, we also give you a <i className="font-extrabold">2-year workmanship guarantee as well!</i></span></p>

          <p className="mb-4">We know you’ll love your VNSH gear, which is why we’re happy to extend you these iron-clad guarantees.</p>
          
          <p className="mb-4">So if you want the <span className='font-bold italic'>smallest, most “print-proof”</span> VNSH Holster ever… and the <span className='font-bold italic'>absolute lowest price</span> it’ll ever be sold…</p>
          
          <p className="mb-4">Then you owe it to yourself to grab this deal now!</p>


          <div className="text-center w-[100%] md:w-[89%] mx-auto md:mt-[50px] mt-[50px] mb-[34px] md:mb-[20px]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[50px] md:py-[40px] px-10 md:px-1 font-bold animate-pulse-cta text-[28px] md:text-[30px] whitespace-normal break-words rounded-[0.25rem] leading-[30px] font-sans"
            >
              Yes, Give Me My VNSH Holster Lite Risk-Free!
            </Button>
          </Link>
        </div>

        <div className="w-full text-center my-[15px] md:my-[15px]">
          <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
          60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
          </span>
        </div>
        <br></br> 
   
        <p className="text-center my-6 text-[26px] md:text-[36px] text-[#ff0000] font-bold leading-[1.2] font-appleemoji">
        When the Unthinkable Happens…<span className="text-[#f90] block"> Don’t Let An Uncomfortable Holster Be the Reason</span> <u>You Get Caught Unarmed…</u>
          </p>

          <p className="mb-4">Look, every time you decide NOT to carry… <span className='font-bold italic'>you’re leaving yourself exposed.</span></p>
          
          <p className="mb-4">Plain and simple.</p>
          
          <p className="mb-4">So if you find yourself rarely carrying <span className='font-bold italic'>because your holster is just too dang uncomfortable…</span></p>
          
          <p className="mb-4"><span className='underline'>Right now is the best time to fix that problem</span> – so you can maximize the odds you always make it back home safe.</p>


          <p className="mb-4">Plus…</p>
          
          <p className="mb-4">The price you’re getting today is also the <span className='font-bold italic'>lowest it will EVER be for the VNSH Lite.</span></p>
          
          <p className="mb-4">So if you care about carrying more to <span className='font-bold'>keep you and your family safe everywhere you go…</span></p>
          
          <p className="mb-4">And if you appreciate getting the best deal possible…</p>

          <p className="mb-4">Move fast and get your VNSH Lite NOW!</p>



          <div className="text-center w-[100%] md:w-[89%] mx-auto md:mt-[50px] mt-[50px] mb-[34px] md:mb-[20px]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[50px] md:py-[40px] px-10 md:px-1 font-bold animate-pulse-cta text-[28px] md:text-[30px] whitespace-normal break-words rounded-[0.25rem] leading-[30px] font-sans"
            >
              Yes, Give Me My VNSH Holster Lite Risk-Free!
            </Button>
          </Link>
        </div>

        <div className="w-full text-center my-[15px] md:my-[15px]">
          <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
          60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
          </span>
        </div>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-[100%] md:max-w-[1200px]">
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
                  src="/images/testimonials/TestimoniesDesktop.webp"
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



          <div className="text-center w-[100%] md:w-[89%] mx-auto md:mt-[50px] mt-[50px] mb-[34px] md:mb-[20px]">
          <Link href={checkoutUrl} className="w-full" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="cta"
              size="lg"
              className="w-full mx-auto py-[50px] md:py-[40px] px-10 md:px-1 font-bold animate-pulse-cta text-[28px] md:text-[30px] whitespace-normal break-words rounded-[0.25rem] leading-[30px] font-sans"
            >
              Yes, Give Me My VNSH Holster Lite Risk-Free!
            </Button>
          </Link>
        </div>

        <div className="w-full text-center my-[15px] md:my-[20px] md:mb-[15px]">
          <span className="font-bold text-center bg-[#ff0] text-[red] text-[18px] md:text-[22px]">
          60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
          </span>
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
                className: 'mb-[15px] md:mb-[0]'
              },
              title: '100% Secure Payment',
              description: 'All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy...'
            }
          ]} className="mb-[22px] mt-[10px]"/>
 
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
      question: 'Q: Does This Come In Right-handed And Left-Handed Configurations?',
      answer: 'A: No, the VNSH holster is a true ambidextrous holster.'
    },
    {
      question: 'Q: Will This Work With My Laser Sights Or A Mounted Light?',
      answer: 'A: Depending on the light or sight you are using it may fit. Smaller lights and lasers do fit with most compact and some full-size guns. You can safely purchase the holster and if it doesn\'t work for your setup we\'ll give you a prepaid return label for a full refund.'
    },
    {
      question: 'Q: Will This Work For My Revolver?',
      answer: 'A: The holster will fit most compact revolvers but we don\'t have an exhaustive list of which revolvers do and don\'t fit.'
    },
    {
      question: 'Q: Do I Need A Belt? How Does It Connect Around The Waist?',
      answer: 'A: NO! The holster has a built in Waist Band. It secures around your waist with built-in, high quality molded velcro. You do not need a belt... or anything else for that matter. You could even wear it naked if you wanted too. ;)'
    },
    {
      question: 'Q: My Semi-automatic Isn\'t Listed Above. Will It Fit?',
      answer: 'A: Yes, all semi-automatic firearms fit. In fact, that is what our design is specifically set for. This is the only holster on the market that will fit any semi-automatic firearm. The exception is the C.O.R.E. series from Smith and Wesson.'
    },
    {
      question: 'Q: Does This Holster Work With Slide-mounted Optics (Red Dots, etc)?',
      answer: 'A: In most cases no, though some smaller, sub-compact weapons may work with a slide-mounted optic. If you want to try the holster out with your optic and it doesn\'t work, please remember we offer an any-reason return policy for the first 60-days you own the holster.'
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-[10px]"></h2>
        <div className="space-y-2 md:mb-[50px]">
          {faqItems.map((item, index) => (
            <div key={index} className="overflow-hidden md:mx-[-27px]">
              <button
                className="w-full flex justify-between items-center py-[12px] px-[15px] md:px-[10px] bg-[#00000008] hover:bg-gray-100 transition-colors text-left cursor-pointer text-[18px] md:text-[22px] font-bold text-[#007bff] md:mt-[8px] border-[1px] border-solid border-[#dddddd] rounded-[0.25rem]"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-grow font-bold font-appleemoji md:ml-[10px]">{item.question}</span>
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
