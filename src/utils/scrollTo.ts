/**
 * Smoothly scrolls to an element with an optional offset
 * @param elementId - The ID of the element to scroll to
 * @param offset - The offset in pixels from the top of the element (default: 0)
 * @param behavior - The scroll behavior ('smooth' or 'auto')
 */
export const scrollToElement = (
  elementId: string,
  offset: number = 0,
  behavior: ScrollBehavior = 'smooth'
): void => {
  if (typeof document === 'undefined') return;

  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior,
  });
};

/**
 * Smoothly scrolls to the top of the page
 * @param behavior - The scroll behavior ('smooth' or 'auto')
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  if (typeof window === 'undefined') return;
  
  window.scrollTo({
    top: 0,
    behavior,
  });
};

/**
 * Scrolls to a specific position on the page
 * @param position - The position to scroll to
 * @param behavior - The scroll behavior ('smooth' or 'auto')
 */
export const scrollToPosition = (
  position: number,
  behavior: ScrollBehavior = 'smooth'
): void => {
  if (typeof window === 'undefined') return;
  
  window.scrollTo({
    top: position,
    behavior,
  });
};

/**
 * Adds a smooth scroll behavior to all anchor links with the specified class
 * @param selector - The CSS selector for the anchor links (default: 'a[href^="#"]')
 * @param offset - The offset in pixels from the top of the target element
 */
export const initSmoothScroll = (
  selector: string = 'a[href^="#"]',
  offset: number = 0
): void => {
  if (typeof document === 'undefined') return;

  const links = document.querySelectorAll<HTMLAnchorElement>(selector);
  
  const handleClick = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    
    if (!href || !href.startsWith('#')) return;
    
    e.preventDefault();
    const targetId = href.substring(1);
    if (!targetId) return;
    
    scrollToElement(targetId, offset);
  };

  links.forEach((link) => {
    link.removeEventListener('click', handleClick);
    link.addEventListener('click', handleClick);
  });
};

/**
 * Removes all smooth scroll event listeners
 * @param selector - The CSS selector for the anchor links (default: 'a[href^="#"]')
 */
export const removeSmoothScroll = (selector: string = 'a[href^="#"]'): void => {
  if (typeof document === 'undefined') return;
  
  const links = document.querySelectorAll<HTMLAnchorElement>(selector);
  
  links.forEach((link) => {
    // Clone the element to remove all event listeners
    const clone = link.cloneNode(true);
    link.parentNode?.replaceChild(clone, link);
  });
};
