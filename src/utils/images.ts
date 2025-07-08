// Image paths
export const images = {
  // Holster images
  holster: {
    blackHolsterMobile1: '/images/holster/BlackHolsterMobile1.webp',
    blackHolsterMobile2: '/images/holster/BlackHolsterMobile2.webp',
    blackHolsterMobile3: '/images/holster/BlackHolsterMobile3.webp',
    blackHolsterMobile4: '/images/holster/BlackHolsterMobile4.webp',
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
  
  // Footer features
  features: {
    moneyBack: '/images/features/money_back_guarantee_footer.webp',
    smallBusiness: '/images/features/small_business_footer.webp',
    securePayment: '/images/features/secure_payment_footer.webp',
  },
};

// For backward compatibility
export const getImagePath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return cleanPath.startsWith('images/') 
    ? `/${cleanPath}` 
    : `/images/${cleanPath}`;
};
