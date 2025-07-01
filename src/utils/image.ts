import { StaticImageData } from 'next/image';

export interface ImageProps {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  style?: React.CSSProperties;
  onLoadingComplete?: () => void;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * Generates optimized image props for Next.js Image component
 * @param src - The image source path
 * @param alt - The alt text for the image
 * @param options - Additional options for the image
 * @returns Optimized image props
 */
// Helper function to convert string numbers to numbers
type StringNumber = string | number | undefined;
const toNumber = (value: StringNumber): number | undefined => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
};

export const getOptimizedImageProps = (
  src: string,
  alt: string = '',
  options: Partial<Omit<ImageProps, 'src' | 'alt'>> = {}
): ImageProps => {
  // Default options
  const defaultOptions: Partial<ImageProps> = {
    alt,
    width: 1200,
    height: 630,
    priority: false,
    quality: 75,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    placeholder: 'empty',
  };

  // Ensure width and height are numbers
  const sanitizedOptions = { ...options };
  
  // Convert string numbers to actual numbers
  if (sanitizedOptions.width !== undefined) {
    sanitizedOptions.width = toNumber(sanitizedOptions.width);
  }
  
  if (sanitizedOptions.height !== undefined) {
    sanitizedOptions.height = toNumber(sanitizedOptions.height);
  }
  
  return {
    src,
    ...defaultOptions,
    ...sanitizedOptions,
  };
};

/**
 * Generates responsive image sources for the picture element
 * @param src - The base image source
 * @param breakpoints - Array of breakpoints and their corresponding image sizes
 * @returns Object containing srcSet and sizes attributes
 */
export const getResponsiveImageProps = (
  src: string,
  breakpoints: Array<{ width: number; size: string }>
) => {
  const srcSet = breakpoints
    .map(({ width, size }) => `${src}?w=${width} ${size}`)
    .join(', ');

  const sizes = breakpoints
    .map(({ size, width }) => `(max-width: ${width}px) ${size}`)
    .join(', ');

  return { srcSet, sizes };
};

/**
 * Gets the appropriate image source based on the device size
 * @param mobileSrc - Source for mobile devices
 * @param desktopSrc - Source for desktop devices
 * @returns The appropriate image source
 */
export const getResponsiveImageSource = (mobileSrc: string, desktopSrc: string) => {
  if (typeof window === 'undefined') {
    return desktopSrc; // Default to desktop on server-side
  }
  return window.innerWidth < 768 ? mobileSrc : desktopSrc;
};
