import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names using clsx and tailwind-merge
 * @param inputs - Class names to be combined
 * @returns Combined class names string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as a price in USD
 * @param price - The price to format
 * @returns Formatted price string
 */
export function formatPrice(price: number | string): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numPrice);
}

/**
 * Generates a unique ID
 * @param length - Length of the ID (default: 16)
 * @returns A unique ID string
 */
export function generateId(length = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  if (typeof window !== 'undefined' && window.crypto) {
    const values = new Uint32Array(length);
    window.crypto.getRandomValues(values);
    
    for (let i = 0; i < length; i++) {
      result += chars[values[i] % chars.length];
    }
  } else {
    // Fallback for environments without crypto API
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  
  return result;
}

/**
 * Debounces a function
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns A debounced function
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttles a function
 * @param func - The function to throttle
 * @param limit - The time limit in milliseconds
 * @returns A throttled function
 */
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Checks if the current device is a mobile device
 * @returns Boolean indicating if the device is mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Copies text to the clipboard
 * @param text - The text to copy
 * @returns A promise that resolves when the text is copied
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!navigator.clipboard) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
  
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
}

/**
 * Truncates a string to a specified length
 * @param str - The string to truncate
 * @param length - The maximum length of the string
 * @param ellipsis - The ellipsis string to append (default: '...')
 * @returns The truncated string
 */
export function truncateString(
  str: string,
  length: number,
  ellipsis: string = '...'
): string {
  if (!str || str.length <= length) return str;
  return `${str.substring(0, length)}${ellipsis}`;
}

/**
 * Converts a string to kebab-case
 * @param str - The string to convert
 * @returns The kebab-cased string
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts a string to camelCase
 * @param str - The string to convert
 * @returns The camelCased string
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/[\s-]+/g, '');
}

/**
 * Converts a string to Title Case
 * @param str - The string to convert
 * @returns The title-cased string
 */
export function toTitleCase(str: string): string {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}
