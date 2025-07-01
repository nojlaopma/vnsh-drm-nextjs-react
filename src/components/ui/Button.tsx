import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'primary'
  | 'primary-outline'
  | 'secondary-outline'
  | 'cta';

type ButtonSize = 'default' | 'sm' | 'lg' | 'xl' | 'icon';

const buttonVariants: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'underline-offset-4 hover:underline text-primary',
  primary: 'bg-red-600 text-white hover:bg-red-700',
  'primary-outline': 'border border-red-600 text-red-600 hover:bg-red-50',
  'secondary-outline': 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  cta: 'bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse',
};

const buttonSizes: Record<ButtonSize, string> = {
  default: 'h-10 py-2 px-4',
  sm: 'h-9 px-3 rounded-md text-sm',
  lg: 'h-12 px-8 rounded-lg text-lg',
  xl: 'h-14 px-10 rounded-lg text-xl',
  icon: 'h-10 w-10',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'default',
    size = 'default',
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    asChild = false,
    ...props
  }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    
    const buttonContent = (
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={isLoading || disabled}
        ref={ref as any}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </Comp>
    );

    if (asChild) {
      return buttonContent;
    }
    
    return buttonContent;
  }
);

Button.displayName = 'Button';

export { buttonVariants };
export default Button;
