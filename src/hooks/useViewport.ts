import { useState, useEffect } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

interface ViewportState {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: Breakpoint;
  isLessThan: (breakpoint: Breakpoint) => boolean;
  isGreaterThan: (breakpoint: Breakpoint) => boolean;
  isBetween: (min: Breakpoint, max: Breakpoint) => boolean;
}

/**
 * Custom hook to get viewport dimensions and responsive breakpoints
 * @returns Viewport state with dimensions and responsive helpers
 */
const useViewport = (): ViewportState => {
  const [viewport, setViewport] = useState<Omit<ViewportState, 'isLessThan' | 'isGreaterThan' | 'isBetween'>>(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    breakpoint: 'md',
  }));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Determine breakpoint
      let breakpoint: Breakpoint = 'xs';
      if (width >= breakpoints['2xl']) breakpoint = '2xl';
      else if (width >= breakpoints.xl) breakpoint = 'xl';
      else if (width >= breakpoints.lg) breakpoint = 'lg';
      else if (width >= breakpoints.md) breakpoint = 'md';
      else if (width >= breakpoints.sm) breakpoint = 'sm';
      
      setViewport({
        width,
        height,
        isMobile: width < breakpoints.md,
        isTablet: width >= breakpoints.md && width < breakpoints.lg,
        isDesktop: width >= breakpoints.lg,
        breakpoint,
      });
    };

    // Initial call to set values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Helper functions
  const isLessThan = (breakpoint: Breakpoint): boolean => {
    return viewport.width < breakpoints[breakpoint];
  };

  const isGreaterThan = (breakpoint: Breakpoint): boolean => {
    return viewport.width >= breakpoints[breakpoint];
  };

  const isBetween = (min: Breakpoint, max: Breakpoint): boolean => {
    return viewport.width >= breakpoints[min] && viewport.width < breakpoints[max];
  };

  return {
    ...viewport,
    isLessThan,
    isGreaterThan,
    isBetween,
  };
};

export default useViewport;
