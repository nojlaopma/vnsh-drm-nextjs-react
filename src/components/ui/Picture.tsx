import React from 'react';
import Image, { ImageProps } from './Image';
import { cn } from '@/lib/utils';

interface SourceProps {
  srcSet: string;
  media: string;
  type?: string;
}

interface PictureProps extends Omit<ImageProps, 'src' | 'sizes'> {
  sources: SourceProps[];
  defaultSrc: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: 'eager' | 'lazy';
  sizes?: string;
}

/**
 * A responsive picture component that uses the HTML5 <picture> element
 * to serve different images based on viewport size and device pixel ratio
 */
const Picture: React.FC<PictureProps> = ({
  sources,
  defaultSrc,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  sizes = '100vw',
  ...props
}) => {
  const [isMounted, setIsMounted] = React.useState(false);

  // Set mounted state to handle SSR
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div className={cn('relative overflow-hidden', className)}>
        <Image
          src={defaultSrc}
          alt={alt}
          className={imgClassName}
          loading={loading}
          sizes={sizes}
          {...props}
        />
      </div>
    );
  }

  return (
    <picture className={cn('block', className)}>
      {/* Source elements for different viewport sizes and formats */}
      {sources.map((source, index) => (
        <source
          key={index}
          srcSet={source.srcSet}
          media={source.media}
          type={source.type}
        />
      ))}
      
      {/* Fallback image */}
      <Image
        src={defaultSrc}
        alt={alt}
        className={imgClassName}
        loading={loading}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
};

export default Picture;
