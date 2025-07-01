import { ImageProps as NextImageProps, StaticImageData } from 'next/image';
import { ImageProps } from './image';

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

// List of properties that should be converted to numbers
const NUMBER_PROPS: (keyof NextImageProps)[] = [
  'width',
  'height',
  'quality',
  'sizes',
  // Only include properties that exist in NextImageProps
  // Removed non-existent properties: blurWidth, blurHeight, loaderWidth, loaderHeight, loaderQuality
];

/**
 * Normalizes image props to ensure they match our ImageProps interface
 */
export const normalizeImageProps = (
  props: Partial<NextImageProps> & { src: string | StaticImageData; alt?: string }
): ImageProps => {
  const normalized: any = { ...props };
  
  // Convert all number props from string to number if needed
  for (const prop of NUMBER_PROPS) {
    if (prop in normalized && normalized[prop] !== undefined) {
      normalized[prop] = toNumber(normalized[prop]);
    }
  }
  
  return normalized as ImageProps;
};
