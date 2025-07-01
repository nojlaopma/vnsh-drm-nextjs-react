import { useEffect } from 'react';
import { initSmoothScrolling } from '@/utils/scroll';

/**
 * Custom hook that enables smooth scrolling for anchor links
 */
const useSmoothScroll = (): void => {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    // Initialize smooth scrolling
    let cleanup: (() => void) | undefined;
    
    // Use requestAnimationFrame to ensure DOM is ready
    const rafId = requestAnimationFrame(() => {
      cleanup = initSmoothScrolling();
      
      // Handle initial hash in URL
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        if (id) {
          // Small timeout to ensure the DOM is fully loaded
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    });
    
    // Cleanup function
    return () => {
      cancelAnimationFrame(rafId);
      if (cleanup) {
        cleanup();
      }
    };
  }, []);
};

export default useSmoothScroll;
