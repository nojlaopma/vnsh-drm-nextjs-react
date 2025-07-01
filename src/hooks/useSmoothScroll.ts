import { useEffect } from 'react';
import { initSmoothScrolling } from '@/utils/scroll';

/**
 * Custom hook that enables smooth scrolling for anchor links
 */
const useSmoothScroll = (): void => {
  useEffect(() => {
    // Initialize smooth scrolling
    const cleanup = initSmoothScrolling();
    
    // Handle initial hash in URL
    const handleInitialHash = () => {
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
    };
    
    // Run initial hash check
    handleInitialHash();
    
    // Cleanup function
    return () => {
      cleanup();
    };
  }, []);
};

export default useSmoothScroll;
