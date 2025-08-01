// Image paths
export const images = {
  // Common images
  checkmark: '/images/check_30_30.webp',

  // vnsmp1 (Magazine Pouch) images
  vnsmp1: {
    hero: '/images/vnsmp1/MagPouchDesktop.webp',
    frontView: '/images/vnsmp1/MagPouch2Mobile.webp',
    sideView: '/images/vnsmp1/MagPouch3Mobile.webp',
    wornView: '/images/vnsmp1/MagPouch4Mobile.webp',
  },
  
  // Holster images
  holster: {
    blackHolsterMobile1: '/images/holster/BlackHolsterMobile1.webp',
    blackHolsterMobile2: '/images/holster/BlackHolsterMobile2.webp',
    blackHolsterMobile3: '/images/holster/BlackHolsterMobile3.webp',
    blackHolsterMobile4: '/images/holster/BlackHolsterMobile4.webp',
    blackHolsterMobile5: '/images/holster/VNSH_Black_Holster_LS_435_290.webp',
    blackHolsterMobile6: '/images/holster/BlackHolsterMobile3.webp',
    freeholster: '/images/holster/freeholster1-desktop.webp',
  },


  magmate:{
    image1: '/images/magmate/MagMate1.webp',
    image2: '/images/magmate/1697434951532_MagMate_Image1.png',
    free: '/images/magmate/FREE_Magmate.webp',
    free1: '/images/magmate/1705299324898_ddd.png'
  },

  holsterlite:{
    lite1: '/images/holster/1726060001334_image6.jpg',
    lite2: '/images/holster/holster_lite.jpg',
    lite3: '/images/holster/1726064237805_image15.jpg'
  },

  // Laser Strike images
  laserStrike: {
    laser2: '/images/laserStrike/VNS-laser2.webp',
    laser3: '/images/laserStrike/VNSH-laser3.webp',
    laser1: '/images/laserStrike/vnsh-laser4-desktop.jpeg',
    demo: '/images/laserStrike/LaserStrikeDemoV2SNoGlitch.webp',
  },
  
  // Logos
  logo: {
    mobile: '/images/logo/LogoMobile.webp',
    desktop: '/images/logo/LogoDesktop.webp',
  },
  
  // Testimonials
  testimonial: {
    mobile: '/images/testimonials/TestimoniesMobile.webp',
    desktop: '/images/testimonials/TestimoniesDesktop.webp',
  },
  
  // Guarantees and features
  guarantee: {
    bannerMobile: '/images/guarantee/guaranteed_bannerMobile.webp',
    moneyBack: '/images/guarantee/guarantee-money-back-200.webp',
  },
  
  // ggg images
  ggg: {
    hero: '/images/ggg/guerrillabookDesktop.webp',
    hero1: '/images/ggg/Guerrilla_Gun_Guide_book.webp',
    gungirldesktop: '/images/ggg/GunGirlDesktop.webp',
  },
  
  // Footer features
  features: {
    moneyBack: '/images/features/money_back_guarantee_footer.webp',
    moneyBack2: '/images/features/seal-min.jpg',
    smallBusiness: '/images/features/small_business_footer.webp',
    smallBusiness2: '/images/features/1673961033090_Support_American_SMB_500x500.png',
    securePayment: '/images/features/secure_payment_footer.webp',
  },

  swt:{
    hero: '/images/swt/1709980810708_SW2K_Lightening_1920x1080_5813cf84-ebe1-4cd1-af9a-90fc95ea3aee.webp',
    news: '/images/swt/vnshswtbogo1_article_1.webp',
    image1: '/images/swt/vnsh_shocwave_torch.webp',
    gunfreedefense: '/images/swt/gun_free_self_defense.webp',
    perfectlighting: '/images/swt/perfect_lighting_up.webp',
    easytouse: '/images/swt/vnsh_shocwave_torch_7a4f09ad-7b8b-4e6b-a2b9-e10d9a94f000.webp',
    review1: '/images/swt/reviews/stuart_testimony_shocwave_torch.webp',
  }
};

// For backward compatibility
export const getImagePath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return cleanPath.startsWith('images/') 
    ? `/${cleanPath}` 
    : `/images/${cleanPath}`;
};
