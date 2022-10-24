/**
 * Get dynamic image path
 */
export function getImagePath(image: string) {
  return new URL(`../assets/${image}`, import.meta.url).href;
}
