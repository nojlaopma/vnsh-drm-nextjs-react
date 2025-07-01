import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  containerClassName?: string;
  innerClassName?: string;
  padded?: boolean;
  fullWidth?: boolean;
  id?: string;
}

/**
 * A section component that provides consistent vertical spacing and layout
 * for content sections across the application
 */
const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  containerSize = 'xl',
  containerClassName = '',
  innerClassName = '',
  className = '',
  padded = true,
  fullWidth = false,
  children,
  id,
  ...props
}) => {
  const content = (
    <div
      className={cn(
        'w-full',
        padded ? 'py-12 md:py-16 lg:py-20 xl:py-24' : '',
        innerClassName
      )}
    >
      {children}
    </div>
  );

  return (
    <Component
      className={cn(
        'relative overflow-hidden',
        className
      )}
      id={id}
      {...props}
    >
      {fullWidth ? (
        content
      ) : (
        <Container
          size={containerSize}
          className={containerClassName}
          padded={padded}
        >
          {content}
        </Container>
      )}
    </Component>
  );
};

export default Section;
