/**
 * Checks if the browser supports WebP format
 * @returns Promise that resolves to boolean indicating WebP support
 */
const checkWebPSupport = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    
    const img = new Image();
    img.onload = () => resolve(img.width > 0 && img.height > 0);
    img.onerror = () => resolve(false);
    img.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  });
};

// Cache the WebP support check
let webPSupported: boolean | null = null;

/**
 * Utility function to get the correct image path with WebP support
 * @param path Relative path to the image in the public/images directory
 * @param options Options for image handling
 * @returns Full path to the image
 */
export const getImagePath = async (
  path: string,
  options: { forceOriginal?: boolean } = {}
): Promise<string> => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we should try to use WebP
  if (!options.forceOriginal && cleanPath.match(/\.(jpg|jpeg|png)$/i)) {
    // Initialize WebP support check if not done yet
    if (webPSupported === null) {
      webPSupported = await checkWebPSupport();
    }
    
    // If WebP is supported, replace extension
    if (webPSupported) {
      const webpPath = cleanPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const fullPath = cleanPath.startsWith('images/') 
        ? `/${webpPath}`
        : `/images/${webpPath}`;
      
      // Verify the WebP file exists (in a real app, you'd want to check this at build time)
      return fullPath;
    }
  }
  
  // Return original path
  return cleanPath.startsWith('images/') 
    ? `/${cleanPath}`
    : `/images/${cleanPath}`;
};
