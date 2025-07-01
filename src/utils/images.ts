/**
 * Utility function to get the correct image path
 * @param path Relative path to the image in the public/images directory
 * @returns Full path to the image
 */
export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If the path already includes the images directory, return as is
  if (cleanPath.startsWith('images/')) {
    return `/${cleanPath}`;
  }
  
  // Otherwise, prepend the images directory
  return `/images/${cleanPath}`;
};
