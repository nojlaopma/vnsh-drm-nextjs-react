import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

// Supported image formats
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
const CONVERT_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif'];

// Image optimization settings
const IMAGE_QUALITY = {
  webp: 85, // Quality for WebP (0-100)
  jpeg: 80, // Quality for JPEG (0-100)
  png: 80,  // Quality for PNG (0-100)
};

// Image dimensions to generate
const IMAGE_SIZES = [
  { suffix: '@2x', width: 1600 },
  { suffix: '@1x', width: 800 },
  { suffix: '@0.5x', width: 400 },
];

async function optimizeImage(filePath: string): Promise<void> {
  const ext = path.extname(filePath).toLowerCase();
  const basePath = filePath.substring(0, filePath.lastIndexOf('.'));
  
  // Skip unsupported formats
  if (!SUPPORTED_EXTENSIONS.includes(ext)) {
    console.log(`Skipping unsupported format: ${filePath}`);
    return;
  }

  try {
    // Process the image
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Skip if not an image or if it's an SVG
    if (!metadata || ext === '.svg') {
      return;
    }

    // Create different sizes for WebP
    for (const size of IMAGE_SIZES) {
      const outputPath = `${basePath}${size.suffix}.webp`;
      let resized = image.clone().resize({
        width: Math.min(size.width, metadata.width || size.width),
        fit: 'inside',
        withoutEnlargement: true,
      });

      await resized
        .webp({ 
          quality: IMAGE_QUALITY.webp,
          effort: 6, // Slower but better compression
          smartSubsample: true,
          alphaQuality: 100,
          nearLossless: false
        })
        .toFile(outputPath);

      const originalSize = (await fs.stat(filePath)).size;
      const optimizedSize = (await fs.stat(outputPath)).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
      
      console.log(`✅ Created ${path.basename(outputPath)} - ${savings}% smaller`);
    }

    // Also create a high-quality WebP version
    const webpPath = `${basePath}.webp`;
    await image
      .webp({ 
        quality: IMAGE_QUALITY.webp * 1.1, // Slightly higher quality for original
        effort: 6,
        smartSubsample: true,
      })
      .toFile(webpPath);

    console.log(`✅ Created ${path.basename(webpPath)}`);

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function processDirectory(directory: string): Promise<void> {
  try {
    const files = await fs.readdir(directory, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = path.join(directory, file.name);
      
      if (file.isDirectory()) {
        await processDirectory(filePath);
      } else if (CONVERT_EXTENSIONS.includes(path.extname(file.name).toLowerCase())) {
        await optimizeImage(filePath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
  }
}

async function convertImagesToWebP() {
  console.log('🚀 Starting image optimization...\n');
  
  try {
    await processDirectory(publicDir);
    console.log('\n🎉 All images optimized successfully!');
  } catch (error) {
    console.error('\n❌ Error during image optimization:', error);
    process.exit(1);
  }
}


// Run the conversion
convertImagesToWebP();
