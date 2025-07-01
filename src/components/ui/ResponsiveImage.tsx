import React from 'react';
import Image, { ImageProps as NextImageProps, StaticImageData } from 'next/image';
import useViewport from '@/hooks/useViewport';
import { getOptimizedImageProps } from '@/utils/image';
import { normalizeImageProps } from '@/utils/image-utils';

// Extend NextImageProps to include our custom props
interface ResponsiveImageProps extends Omit<NextImageProps, 'src' | 'alt'> {
  mobileSrc: string | StaticImageData;
  desktopSrc: string | StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}



/**
 * A responsive image component that switches between mobile and desktop sources
 * based on the viewport width
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  mobileSrc,
  desktopSrc,
  alt,
  priority = false,
  className = '',
  imgClassName = '',
  ...props
}) => {
  const { isMobile } = useViewport();
  const src = isMobile ? mobileSrc : desktopSrc;
  
  // Ensure alt is always a string
  const safeAlt = alt || '';
  
  // Create normalized props for the image
  const normalizedProps = normalizeImageProps({
    ...props,
    src,
    alt: safeAlt,
    className: imgClassName,
    priority,
  });
  
  // Get optimized image props if source is a string
  const imageProps = typeof src === 'string' 
    ? getOptimizedImageProps(src, safeAlt, normalizedProps)
    : normalizedProps;

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        {...imageProps}
        src={src}
        alt={alt}
        fill
        sizes={props.sizes || '(max-width: 768px) 100vw, 50vw'}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
};

export default ResponsiveImage;
