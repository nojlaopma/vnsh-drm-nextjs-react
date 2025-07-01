import React from 'react';
import NextImage, { ImageProps as NextImageProps, StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

export interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string | StaticImageData;
  mobileSrc?: string | StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  sizes?: string;
}

/**
 * A responsive image component that handles both mobile and desktop sources
 * with proper loading and error states
 */
const Image: React.FC<ImageProps> = ({
  src,
  mobileSrc,
  alt,
  priority = false,
  className = '',
  imgClassName = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  ...props
}) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  // Determine if we're on mobile
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Determine which image source to use
  const imageSrc = React.useMemo(() => {
    if (hasError) return '/images/placeholder.jpg';
    return isMobile && mobileSrc ? mobileSrc : src;
  }, [isMobile, mobileSrc, src, hasError]);

  // Handle image load
  const handleLoad = () => {
    setIsLoading(false);
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="flex h-full w-full items-center justify-center bg-gray-100">
          <span className="text-sm text-gray-500">Image not available</span>
        </div>
      )}

      {/* Image */}
      <NextImage
        src={imageSrc}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className={cn(
          'h-auto w-full object-cover transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          imgClassName
        )}
        onLoadingComplete={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default Image;
