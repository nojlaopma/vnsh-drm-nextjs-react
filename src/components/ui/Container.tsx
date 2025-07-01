import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padded?: boolean;
  className?: string;
}

const maxWidths = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-[1536px]',
  full: 'max-w-full',
} as const;

/**
 * A container component that provides consistent width and padding
 * for content across different screen sizes
 */
const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  size = 'xl',
  padded = true,
  className = '',
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'w-full mx-auto',
        maxWidths[size] || maxWidths.xl,
        padded ? 'px-4 sm:px-6 lg:px-8' : 'px-0',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
