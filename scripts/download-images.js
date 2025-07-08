const fs = require('fs');
const path = require('path');
const https = require('https');
const { promisify } = require('util');
const stream = require('stream');

const pipeline = promisify(stream.pipeline);

// Create necessary directories
const dirs = [
  'public/images/holster',
  'public/images/logo',
  'public/images/testimonials',
  'public/images/guarantee',
  'public/images/features'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// List of all images with their URLs and destination paths
const images = [
  // Holster images
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterMobile1.webp?v=1729176481',
    dest: 'public/images/holster/BlackHolsterMobile1.webp'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterMobile2.webp?v=1729176482',
    dest: 'public/images/holster/BlackHolsterMobile2.webp'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterMobile3.webp?v=1729176482',
    dest: 'public/images/holster/BlackHolsterMobile3.webp'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterMobile4.webp',
    dest: 'public/images/holster/BlackHolsterMobile4.webp'
  },
  
  // Logos
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/LogoMobile.webp?v=1729112354',
    dest: 'public/images/logo/LogoMobile.webp'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/LogoDesktop.webp?v=1729112354',
    dest: 'public/images/logo/LogoDesktop.webp'
  },
  
  // Testimonials
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/TestimoniesMobile.webp?v=1729117026',
    dest: 'public/images/testimonials/TestimoniesMobile.webp'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/TestimoniesDesktop.webp?v=1729117025',
    dest: 'public/images/testimonials/TestimoniesDesktop.webp'
  },
  
  // Guarantees
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/guaranteed_bannerMobile.webp?v=1729109678',
    dest: 'public/images/guarantee/guaranteed_bannerMobile.webp'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/guarantee-money-back-200.webp?v=1729100261',
    dest: 'public/images/guarantee/guarantee-money-back-200.webp'
  },
  
  // Features
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/money_back_guarantee_footer.webp?v=1728377935',
    dest: 'public/images/features/money_back_guarantee_footer.webp'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/small_business_footer.webp?v=1728377934',
    dest: 'public/images/features/small_business_footer.webp'
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/0670/4948/8684/files/secure_payment_footer.webp?v=1728377935',
    dest: 'public/images/features/secure_payment_footer.webp'
  }
];

// Function to download a single file
const downloadFile = async (url, dest) => {
  const file = fs.createWriteStream(dest);
  
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        pipeline(response, file)
          .then(() => resolve())
          .catch(err => reject(err));
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        downloadFile(response.headers.location, dest)
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete the file if it exists
      reject(err);
    });
  });
};

// Download all images
const downloadAll = async () => {
  console.log('Starting image downloads...');
  
  for (const [index, image] of images.entries()) {
    try {
      console.log(`Downloading image ${index + 1}/${images.length}: ${image.url}`);
      await downloadFile(image.url, image.dest);
      console.log(`✓ ${path.basename(image.dest)} downloaded successfully`);
    } catch (error) {
      console.error(`Error downloading ${image.url}:`, error.message);
    }
  }
  
  console.log('All downloads completed!');
};

// Run the downloader
downloadAll().catch(console.error);
