/**
 * Smoothly scrolls to the specified element
 * @param id The ID of the element to scroll to
 * @param offset Optional offset from the top of the element
 */
export const scrollToElement = (id: string, offset = 0): void => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

/**
 * Handles click events on anchor links for smooth scrolling
 * @param e The click event
 */
export const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
  const href = e.currentTarget.getAttribute('href');
  
  // Only handle anchor links that start with #
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const id = href.replace('#', '');
    scrollToElement(id, 80); // 80px offset for fixed header
  }
};

/**
 * Adds smooth scrolling behavior to all anchor links on the page
 */
export const initSmoothScrolling = (): (() => void) => {
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (anchor) {
      e.preventDefault();
      const id = anchor.getAttribute('href')?.replace('#', '');
      if (id) {
        scrollToElement(id, 80); // 80px offset for fixed header
      }
    }
  };

  // Add event listener to document
  document.addEventListener('click', handleClick);

  // Return cleanup function
  return () => {
    document.removeEventListener('click', handleClick);
  };
};
