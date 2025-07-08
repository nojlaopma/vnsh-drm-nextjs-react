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
      <div className="max-w-[1100px] mx-auto px-4" style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Responsive Image */}
        <div className="w-full mt-[30px] mb-8 md:mb-12 overflow-hidden shadow-lg flex justify-center">
          <div className="relative w-full max-w-[800px] mx-auto">
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterMobile4.webp"
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="text-left mb-12 text-[18px] md:text-[22px] text-black">

          <h2 className="text-[20px] md:text-[38px] font-bold text-center my-0 mx-5 leading-[45px] py-4 px-6 rounded-lg">
          <span className="bg-[#ffa500]">175,232 Americans Have Trusted Us to Give Them The MOST Comfortable Holster They've Ever Worn</span>
          </h2>
          
          <p className='mb-4'>The VNSH Holster is rapidly becoming one of America’s best-selling holsters… <b > and for good reason too!</b></p>
          
          <p className="mb-4">It's GUARANTEED to be <b>the most comfortable holster</b> you'll ever wear - or you get 100% of your money back! Try it for 60 days, and if you don't like it for any reason, let us know and we'll give you every penny back.</p>
          
          <div className="w-full my-6 flex justify-center">
            <Image
              src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/guaranteed_bannerMobile.webp?v=1729109678"
              alt="60 Day Money Back Guarantee"
              width={375}
              height={100}
              className="max-w-full h-auto"
              priority
            />
          </div>
          
          <p className="mb-4">The reason for it’s insane comfort? The materials. We combined the rugged 1000D <b>Cordura</b> with a stretchy <b>‘yoga pant’ fabric</b> that is not only built to last for years, but also feels like silk boxers on your skin.</p>
          
          <p className="mb-4">Even better, these sweat-wicking materials do NOT retain sweat or odor, so you can carry comfortably all day without getting sticky or slimy.</p>
          
          <p className="mb-4">You can wear this holster with ANY clothing. That’s because our specially designed, built in waistband simply goes around your torso like a belt, and doesn’t need hooks, clips, or a tactical belt to wear.</p>
          
          <p className="mb-4">This means you can wear this holster with a business suit, sweat suit, or swim suit… or even just your birthday suit.</p>
          
          <p className="mb-4">But where it really excels (and where most other holsters fail miserably) is that it helps you carry anywhere while having the ability to carry 2 additional mags.</p>
          
          <p className="mb-4">Perhaps the best thing of all is this holster will fit 99% of all brands, types, and styles of semi autos.</p>
          
          <p className="mb-4">And our unique design ensures your concealed carry device “Vanishes” against your body, making it virtually invisible to others.</p>
          
          <p className="mb-4">It’s why we named it the VNSH Holster!</p>
          
          <p className="mb-4">How many other holsters can do all that? The answer is ZERO.</p>
          
          <div className="w-full my-6 flex justify-center">
            <Image
              src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterMobile3.webp?v=1729176482"
              alt="VNSH Holster - Comfortable and Concealable"
              width={375}
              height={250}
              className="h-full w-[60%] object-cover"
              priority
            />
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
              data-yotpo-product-id=""
              data-yotpo-cart-product-id="" 
              data-secondsdelay="" 
              className="yotpo-widget-instance"
            ></div>
          </div>

          {/* <div id="yotpo-testimonials-custom-tab" className="my-8"></div> */}

          <div className="text-center mt-8 mb-12">
            <Link href="#pricing" className="w-full">
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
            <p 
              className="font-bold px-4 py-2 text-center" 
              style={{
                backgroundColor: '#ff0',
                color: 'red',
                fontSize: '22px',
                lineHeight: '33px',
                display: 'inline-block'
              }}
            >
              60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
            </p>
          </div><br></br>
          <hr></hr>
          
          <p 
            className="text-center my-6"
            style={{
              color: '#f16500',
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            Seriously, This Holster Works With 99.9% of Single Semi-Automatic Pistols On the Planet
          </p>
          
          <div className="w-full flex justify-center my-6">
            <div style={{ width: '60%' }}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterMobile1.webp?v=1729176481"
                alt="VNSH Holster - Fits Most Pistols"
                width={375}
                height={211}
                className="w-full h-auto object-contain"
                style={{ borderRadius: 0 }}
                priority
              />
            </div>
          </div>

          <p className="mb-4">Our holster design means that regardless of what pistol you own it will help you safely and comfortably carry it.</p>
          
          <p className="mb-4">No more needing to buy multiple holsters for all your pistols.</p>
          
          <p className="mb-4">Plus, since it has 2-built in mag pouches, now you don't need to spend extra money on mag pouches to guarantee you’re never out of the fight.</p>

          <p className="mb-4">Take a look at the list of brands our holster works with and then grab yours before the price goes up!</p>

          <div className="w-full flex justify-center my-8">
            <div className="w-[90%] md:w-full max-w-[1200px]">
              <div className="relative" style={{ height: '300px' }}>
                {/* Mobile/Tablet Image */}
                <div className="md:hidden w-full h-full">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/LogoMobile.webp?v=1729112354"
                    alt="VNSH Holster - Compatible Brands"
                    fill
                    sizes="90vw"
                    className="object-contain"
                    priority
                  />
                </div>
                {/* Desktop Image */}
                <div className="hidden md:block w-full h-full">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/LogoDesktop.webp?v=1729112354"
                    alt="VNSH Holster - Compatible Brands"
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 mb-12">
            <Link href="#pricing" className="w-full">
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
            <p 
              className="font-bold px-4 py-2 text-center" 
              style={{
                backgroundColor: '#ff0',
                color: 'red',
                fontSize: '22px',
                lineHeight: '33px',
                display: 'inline-block'
              }}
            >
              60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
            </p>
          </div><br></br>
          <hr></hr>

          <p 
            className="text-center my-6"
            style={{
              color: '#f16500',
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            Don’t Let An Uncomfortable Holster Be The Reason You’re Unarmed When Bad Guys Attack
          </p>

          <p className="mb-4">The vast majority of gun owners don’t carry their gun daily for 1 simple reason.</p>
          
          <p className="mb-4">They don’t like how their holster feels.</p>
          
          <p className="mb-4">The good news is that the VNSH Holster is made for all day wear… and owning it is the #1 thing you can do to ensure you're always ready to defend yourself and your family.</p>
          
          <p className="mb-4">The VNSH holster is superior to leather and kydex.</p>
          
          <p className="mb-4">Where kydex can be rigid and uncomfortable… and leather is sweaty and sticky, the VNSH holster is ultra-comfortable because it uses a custom blend of sweat-wicking fabrics that we call "yoga pant" fabric to help you stay cool and dry in the nastiest environments.</p>
          
          <p className="mb-4">Not to mention the waist band is made from a crazy comfy velcro that will not snag on shirts, waistbands and the like.</p>
          
          <p className="mb-4">And because of its unique no-clip, no hook design, you can comfortably configure the holster any which way you want.</p>
          
          <p className="mb-4">Want to carry at 3 o’clock? Go for it.</p>
          
          <p className="mb-4">Like pure appendix carry? That’s easy.</p>

          <p className="mb-4">Does carrying in the small of your back suit you best? Well, it works there too.</p>
          
          <p className="mb-4">You can even carry it up high on your chest or side thanks to the adjustable strap (which extends up to 48 inches and 68 inches with our extension strap).</p>
          
          <p className="mb-4">Also, we combined that awesome "yoga pant" fabric with rugged 1000D Cordura so it will withstand years and years of abuse without showing a sign of distress..</p>
          
          <p className="mb-4">And best of all it features an enhanced trigger guard. Yes, it’s true, the VNSH holster is the only bellyband on the planet with a dedicated trigger guard built in. A solid but flexible piece of .7mm plastic resits in the custom-built holster to prevent anything from accidentally causing a negligent discharge.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <p className="mb-4 md:mb-0 md:flex-1">Not to mention the retention is rock-solid… but still incredibly easy to draw. Never fear that your gun will fall out, or that a criminal will be able to disarm you.</p>
          </div>

          <div className="w-full flex justify-center my-8">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <Image
                src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterMobile2.webp?v=1729176482"
                alt="VNSH Holster - Secure Retention"
                width={375}
                height={250}
                className="w-full h-auto rounded-none"
                priority
              />
            </div>
          </div>


          <div className="text-center mt-8 mb-12">
            <Link href="#pricing" className="w-full">
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
            <p 
              className="font-bold px-4 py-2 text-center" 
              style={{
                backgroundColor: '#ff0',
                color: 'red',
                fontSize: '22px',
                lineHeight: '33px',
                display: 'inline-block'
              }}
            >
              60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
            </p>
          </div><br></br>
          <hr></hr>

          <p 
            className="text-center my-6"
            style={{
              color: '#f16500',
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            Crazy Holiday Deal!
            <p style={{ color: '#ff0000' }}>Buy 1 Holster, Get 1 FREE!</p>
          </p>

          <div className="w-full mt-[30px] mb-8 md:mb-12 overflow-hidden shadow-lg flex justify-center">
          <div className="relative w-full max-w-[800px] mx-auto">
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterMobile4.webp"
                alt="VNSH Holster - Comfortable and Secure Concealed Carry"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>


        <p className="mb-4">As you’ve seen… people love the VNSH Holster.</p>
          
          <p className="mb-4">In fact, most people who buy one almost always end up wanting at least one more – either for themselves or to give to a friend or family member.</p>
          
          <p className="mb-4">So since the holidays are right around the corner…</p>
          
          <p className="mb-4">We’re giving you the biggest deal we’ve EVER offered!</p>

          <p className="mb-4">Buy 1 Holster, Get 1 Totally FREE!!</p>
          
          <p className="mb-4">Plus, when you grab this deal today, you’ll be doing so 100% Risk-Free, because…</p>
          
          <p 
            className="text-center my-6"
            style={{
              color: '#f16500',
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            You’re Getting An 
            <span style={{ color: '#ff0000' }}> Iron-Clad,
            Money-Back</span>Guarantee
          </p>

          <div className="w-full mt-[30px] mb-8 md:mb-12 overflow-hidden flex justify-center">
            <div className="relative w-full max-w-[250px] mx-auto">
              <Image
                src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/guarantee-money-back-200.webp?v=1729100261"
                alt="60-Day Money Back Guarantee"
                width={250}
                height={220}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>



          <p className="mb-4">Love everything about your order, or we’ll refund you every penny.</p>
          
          <p className="mb-4">It’s that simple.</p>
          
          <p className="mb-4">If you aren’t totally thrilled, all you have to do is contact our US-Based Support Team within 60 days to get a full refund.</p>
          
          <p className="mb-4">Plus, we also give you a 2-year workmanship guarantee as well!</p>

          <p className="mb-4">We know you’ll love your VNSH gear, which is why we’re happy to extend you these iron-clad guarantees.</p>
          
          <p className="mb-4">So if you want the comfiest holster on earth … plus a second one totally FREE on the house …</p>
          
          <p className="mb-4">Plus… get a FREE VNSH Holster with it…</p>
          
          <p className="mb-4">Then you owe it to yourself to grab this deal now!</p>




        <div className="text-center mt-8 mb-12">
            <Link href="#pricing" className="w-full">
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
            <p 
              className="font-bold px-4 py-2 text-center" 
              style={{
                backgroundColor: '#ff0',
                color: 'red',
                fontSize: '22px',
                lineHeight: '33px',
                display: 'inline-block'
              }}
            >
              60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
            </p>
          </div><br></br>
          <hr></hr>

          <p 
            className="text-center my-6"
            style={{
              color: '#f16500',
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            Fair Warning… <br></br>
            Last Big Deal
            <span style={{ color: '#ff0000' }}> Before prices go up…</span>
          </p>


          <p className="mb-4">Since we launched in late 2022, we’ve done everything in our power to keep the VNSH Holster as affordable as possible.</p>
          
          <p className="mb-4">But sadly, inflation is finally forcing us to raise prices on our holster.</p>
          
          <p className="mb-4">Now, as much of a bummer as that is… the GOOD NEWS is that…</p>
          
          <p className="mb-4">We’re running this huge Buy 1, Get 1 FREE deal to make sure everyone has a chance to get the VNSH Holster for an awesome price before it becomes more expensive in the weeks ahead.</p>

          <p className="mb-4">It won’t last forever though…</p>
          
          <p className="mb-4">Once this is over, you’ll never see a deal this good on VNSH Holsters again.</p>
          
          <p className="mb-4">So don’t wait!</p>
          
          <p className="mb-4">Grab your VNSH Holster and get a second one 100% FREE while you still can!</p>

        </div>
        {/* Rest of the Features component content would go here */}
        {/* I've included the main content structure, but you might want to add the remaining features sections */}
      </div>
    </section>
  );
};

export default BogoFeatures;
