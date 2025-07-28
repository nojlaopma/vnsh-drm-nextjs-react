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
  const checkoutUrl = `https://secure.vnsh.com/vnshcamobogo1/checkout${utmParams ? `?${utmParams}` : ''}`;

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
    <section className="pb-[19px] md:pb-6 mx-[5px] md:ml-[-8px] md:mr-[-8px] mt-[15px]">
      <div className="w-full font-arial">
        {/* Responsive Image */}
        <div className="w-full overflow-hidden flex justify-center mt-[20px] md:mt-[30px] mb-[25px]">
          <div className="relative w-full max-w-[100%] mx-auto">
            <div className='relative w-[84%] md:w-[90%] max-w-[100%] mx-auto overflow-hidden pb-[50%]'>
              <Image
                src="/images/holster/VNSH_Camo_BOGO.webp"
                alt="VNSH Camo Holster - Limited Time BOGO Offer"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="text-left text-[18px] md:text-[22px] text-black">

          <div className="text-center mb-4">
            <span className="bg-[#ffa500] text-[20px] md:text-[36px] font-bold lg:leading-[45px] ">175,232 Americans Have Trusted Us to Give Them The MOST Comfortable Holster They've Ever Worn</span>
          </div>
          
          <p className='mb-4'>The VNSH Holster is rapidly becoming one of America’s best-selling holsters… <b > and for good reason too!</b></p>
          
          <p className="mb-4">It's GUARANTEED to be <b>the most comfortable holster</b> you'll ever wear - or you get 100% of your money back! Try it for 60 days, and if you don't like it for any reason, let us know and we'll give you every penny back.</p>
          
          <div className="w-full my-6 flex justify-center">
            <div className="w-full md:w-[90%] lg:w-[65%] mx-auto">
              <Image
                src={images.guarantee.bannerMobile}
                alt="60 Day Money Back Guarantee"
                width={1200}
                height={320}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          
          <p className="mb-4">The reason for it’s insane comfort? The materials. We combined the rugged <b>1000D Cordura</b> with a stretchy <b>‘yoga pant’ fabric</b> that is not only built to last for years, but also feels like silk boxers on your skin.</p>
          
          <p className="mb-4">Even better, these sweat-wicking materials do <u>NOT</u> retain sweat or odor, so you can <b>carry comfortably all day</b> without getting sticky or slimy.</p>
          
          <p className="mb-4">You can wear this holster with <u className="font-bold">ANY</u> clothing. That’s because our specially designed, built in waistband simply goes around your torso like a belt, and doesn’t need hooks, clips, or a tactical belt to wear.</p>
          
          <p className="mb-4">This means you can wear this holster with a business suit, sweat suit, or swim suit… <i>or even just your birthday suit.</i></p>
          
          <p className="mb-4">But where it really excels <i className="font-bold">(and where most other holsters fail miserably)</i> is that it helps you carry anywhere while having the ability to carry 2 additional mags.</p>
          
          <p className="mb-4">Perhaps the best thing of all is this holster will fit 99% of all brands, types, and styles of semi autos.</p>
          
          <p className="mb-4">And our unique design ensures your concealed carry device <b>“Vanishes”</b> against your body, making it virtually invisible to others.</p>
          
          <p className="mb-4">It’s why we named it the <u className="font-bold">VNSH Holster!</u></p>
          
          <p className="mb-4">How many other holsters can do all that? <b>The answer is ZERO.</b></p>
          
          <div className="w-full my-6 flex justify-center">
            <div className="w-[90%] md:w-[90%] lg:w-[65%] mx-auto">
              <Image
                src="/images/holster/VNSH_Holster_Camo_1.webp"
                alt="VNSH Camo Holster - Comfortable and Concealable"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          <p className="mb-4">Now it’s obvious we’d be saying this. But take a look at what some of our thousands upon thousands of customers say about our holster.</p>
          
{/*           
          <h2 className="text-[38px] text-[#ff9900] font-[700] text-center my-0 mx-5">
            What Our Customers Are Saying
          </h2> */}

          <div data-secondsdelay="" className="yotpo-reviews-container">
            <div 
              data-text="text" 
              data-yotpo-instance-id="461899" 
              data-yotpo-product-id="8836877746476"
              data-yotpo-cart-product-id="" 
              data-secondsdelay="" 
              className="yotpo-widget-instance"
            ></div>
          </div>

          {/* <div id="yotpo-testimonials-custom-tab" className="my-8"></div> */}

          <div className="text-center mt-8 mb-12">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                Give Me This Buy 1, Get 1 FREE Deal Before It's Gone!
              </Button>
            </Link>
          </div>
          
          <div className="w-full flex justify-center my-4">
            <span 
              className="font-bold text-center bg-[#ff0] text-[#ff0000] text-[22px]"
            >
              60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
            </span>
          </div><br></br>
          <hr></hr>
          
          <p 
            className="text-center my-6 text-[26px] lg:text-[36px] text-[#f16500] font-bold leading-[1.2]"
          >
            Seriously, This Holster Works With 99.9% of Single Semi-Automatic Pistols On the Planet
          </p>
          
          <div className="w-full flex justify-center my-6">
            <div className="w-[90%] md:w-[90%] lg:w-[65%] mx-auto">
              <Image
                src="/images/holster/VNSH_Holster_Camo_2Desktop.webp"
                alt="VNSH Camo Holster - Fits Most Pistols"
                width={1200}
                height={675}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <p className="mb-4">Our holster design means that <b>regardless of what pistol you own</b> it will help you safely and comfortably carry it.</p>
          
          <p className="mb-4">No more needing to buy multiple holsters for all your pistols.</p>
          
          <p className="mb-4">Plus, since it has 2-built in mag pouches, <b>now you don't need to spend extra money on mag pouches</b> to guarantee you’re never out of the fight.</p>

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

          <div className="text-center mt-8 mb-12">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                Give Me This Buy 1, Get 1 FREE Deal Before It's Gone!
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center my-4">
            <span 
              className="font-bold text-center bg-[#ff0] text-[#ff0000] text-[22px]"
            >
              60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
            </span>
          </div><br></br>
          <hr></hr>

          <p 
            className="text-center my-6 text-[26px] lg:text-[36px] text-[#f16500] font-bold leading-[1.2]"
          >
            Don’t Let An Uncomfortable Holster Be The Reason You’re Unarmed When Bad Guys Attack
          </p>

          <p className="mb-4">The vast majority of gun owners don’t carry their gun daily for 1 simple reason.</p>
          
          <p className="mb-4">They don’t like how their holster feels.</p>
          
          <p className="mb-4">The good news is that the VNSH Holster is made for all day wear… and owning <b>it is the #1 thing you can do to ensure you're always ready to defend yourself</b> and your family.</p>
          
          <p className="mb-4">The VNSH holster is <b>superior</b> to leather and kydex.</p>
          
          <p className="mb-4">Where kydex can be rigid and uncomfortable… and leather is sweaty and sticky, the VNSH holster is ultra-comfortable because it uses a custom blend of sweat-wicking fabrics that we call "yoga pant" fabric to help you stay cool and dry in the nastiest environments.</p>
          
          <p className="mb-4">Not to mention the waist band is made from a crazy comfy velcro <b>that will not</b> snag on shirts, waistbands and the like.</p>
          
          <p className="mb-4">And because of its unique no-clip, no hook design, <b>you can comfortably configure the holster any which way you want.</b></p>
          
          <p className="mb-4">Want to carry at 3 o’clock? Go for it.</p>
          
          <p className="mb-4">Like pure appendix carry? That’s easy.</p>

          <p className="mb-4">Does carrying in the small of your back suit you best? Well, it works there too.</p>
          
          <p className="mb-4">You can even carry it up high on your chest or side thanks to the adjustable strap (which extends up to 48 inches and 68 inches with our extension strap).</p>
          
          <p className="mb-4">Also, we combined that awesome "yoga pant" fabric with rugged 1000D Cordura so it will withstand years and years of abuse without showing a sign of distress..</p>
          
          <p className="mb-4">And best of all it features an <b>enhanced trigger guard.</b> Yes, it’s true, the VNSH holster is the only bellyband on the planet with a dedicated trigger guard built in. A solid but flexible piece of .7mm plastic resits in the custom-built holster to prevent <b>anything</b> from accidentally causing a negligent discharge.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <p className="mb-4 md:mb-0 md:flex-1">Not to mention the retention is rock-solid… <b>but still incredibly easy to draw.</b> Never fear that your gun will fall out, or that a criminal will be able to disarm you.</p>
          </div>

          <div className="w-full flex justify-center my-8">
            <div className="w-[90%] md:w-[90%] lg:w-[65%] mx-auto">
              <Image
                src="/images/holster/VNSH_Holster_Camo_4.webp"
                alt="VNSH Camo Holster - Secure Retention"
                width={1200}
                height={800}
                className="w-full h-auto rounded-none"
                priority
              />
            </div>
          </div>


          <div className="text-center mt-8 mb-12">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                Give Me This Buy 1, Get 1 FREE Deal Before It's Gone!
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center my-4">
            <span 
              className="font-bold text-center bg-[#ff0] text-[#ff0000] text-[22px]"
            >
              60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
            </span>
          </div><br></br>
          <hr></hr>

          <p 
            className="text-center my-6 text-[26px] lg:text-[36px] text-[#f16500] font-bold leading-[1.2]"
          >
            Crazy Holiday Deal!<br></br>
            <span className="font-bold text-[#ff0000]">Buy 1 Holster, Get 1 FREE!</span>
          </p>

          <div className="w-full mt-[30px] mb-8 md:mb-12 overflow-hidden flex justify-center">
          <div className="relative w-full max-w-[800px] mx-auto">
            <div className="relative w-full pb-[56.25%]">
              <Image
                src="/images/holster/VNSH_Camo_BOGO.webp"
                alt="VNSH Camo Holster - Limited Time BOGO Offer"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>


        <p className="mb-4">As you’ve seen… people <i className='font-bold'>love</i> the VNSH Holster.</p>
          
          <p className="mb-4">In fact, most people who buy one almost always <b>end up wanting at least one more</b> – either for themselves or to give to a friend or family member.</p>
          
          <p className="mb-4">So since the holidays are right around the corner…</p>
          
          <p className="mb-4">We’re giving you the <b>biggest deal we’ve EVER offered!</b></p>

          <p className="mb-4 font-bold underline " ><span className='bg-[#ff0]'>Buy 1 Holster, Get 1 Totally FREE!!</span></p>
          
          <p className="mb-4">Plus, when you grab this deal today, you’ll be doing so <b>100% Risk-Free, because…</b></p>
          
          <p 
            className="text-center my-6 text-[26px] lg:text-[36px] font-bold leading-[1.2] text-[#f16500]"
          >
            You’re Getting An 
            <br></br><span className='text-[#ff0000]'> Iron-Clad,
            Money-Back</span> Guarantee
          </p>

          <div className="w-full mt-[30px] mb-8 md:mb-12 overflow-hidden flex justify-center">
            <div className="relative w-full max-w-[250px] mx-auto">
              <Image
                src={images.guarantee.moneyBack}
                alt="60-Day Money Back Guarantee"
                width={250}
                height={220}
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
          
          <p className="mb-4">So if you want the <b className='italic'>comfiest holster on earth</b> … plus a second one <b className='italic'>totally FREE on the house</b>…</p>
          
          <p className="mb-4">Plus… get a FREE VNSH Holster with it…</p>
          
          <p className="mb-4">Then you owe it to yourself to grab this deal now!</p>




        <div className="text-center mt-8 mb-12">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                Give Me This Buy 1, Get 1 FREE Deal Before It's Gone!
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center my-4">
            <span 
              className="font-bold text-center bg-[#ff0] text-[#ff0000] text-[22px]"
            >
              60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
            </span>
          </div><br></br>
          <hr></hr>

          <p 
            className="text-center my-6 text-[26px] lg:text-[36px] font-bold leading-[1.2] text-[#f16500]"
          >
            Fair Warning… <br></br>
            Last Big Deal
            <span className='text-[#ff0000]'> Before prices go up…</span>
          </p>


          <p className="mb-4">Since we launched in late 2022, we’ve done everything in our power to keep the VNSH Holster <b className='italic'>as affordable as possible.</b></p>
          
          <p className="mb-4">But sadly, inflation is finally forcing us to raise prices on our holster.</p>
          
          <p className="mb-4">Now, as much of a bummer as that is… the <b>GOOD NEWS</b> is that…</p>
          
          <p className="mb-4">We’re running this huge <b className='font-extrabold underline bg-[#ff0]'>Buy 1, Get 1 FREE</b> deal to make sure everyone has a chance to get the VNSH Holster for an awesome price before it becomes more expensive in the weeks ahead.</p>

          <p className="mb-4">It won’t last forever though…</p>
          
          <p className="mb-4">Once this is over, you’ll never see a deal this good on VNSH Holsters again.</p>
          
          <p className="mb-4">So don’t wait!</p>
          
          <p className="mb-4 font-bold">Grab your VNSH Holster and <span className='bg-[#ff0]'>get a second one 100% FREE</span> while you still can!</p>




          <div className="text-center mt-8 mb-12">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-full mx-auto py-[39px] px-4 text-center font-bold animate-pulse-cta text-[1.125rem] md:text-[1.8rem] leading-[1.4] whitespace-normal break-words"
              >
                Give Me This Buy 1, Get 1 FREE Deal Before It's Gone!
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center my-4">
            <span 
              className="font-bold text-center bg-[#ff0] text-[#ff0000] text-[22px]"
            >
              60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
            </span>
          </div><br></br>

          <div className="w-full flex justify-center my-8">
            <div className="w-full max-w-[1200px] px-4">
              {/* Mobile/Tablet Image */}
              <div className="block md:hidden">
                <Image
                  src={images.testimonial.mobile}
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
                  src={images.testimonial.desktop}
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

          <div className="text-center mt-[2.1rem] mb-10">
            <Link href={checkoutUrl} className="w-full">
              <Button 
                variant="cta"
                size="lg"
                className="w-[90%] mx-auto py-[1.8rem] px-4 font-bold animate-pulse-cta text-[1.125rem] md:text-[2rem] whitespace-normal break-words"
              >
                Give Me This Buy 1, Get 1 FREE Deal Before It's Gone!
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center my-4 mb-[48px]">
            <span 
              className="font-bold text-center bg-[#ff0] text-[#ff0000] text-[22px] leading-none"
            >
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
                className: 'mb-[20px]'
              },
              title: '100% Secure Payment',
              description: 'All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy...'
            }
          ]} className="mb-[-8px]"/>
 
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
    <div className="w-full ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8"></h2>
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div key={index} className="overflow-hidden md:mx-[-12px]">
              <button
                className="w-full flex justify-between items-center py-[6.5px] px-[10px] bg-[#f2f2f2] hover:bg-gray-100 transition-colors text-left cursor-pointer text-[20px] font-bold text-[#007bff] md:mt-[2.1px]"
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
