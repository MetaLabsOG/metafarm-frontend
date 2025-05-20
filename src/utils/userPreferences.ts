/**
 * User preferences utilities for storing user settings
 */

// Local storage key for meteor animation settings
const METEOR_ENABLED_KEY = 'cometa_meteor_enabled';

/**
 * Get user preference for meteor animation
 * @returns Boolean indicating if meteor animation is enabled
 */
export function getMeteorAnimationEnabled(): boolean {
  try {
    // For iOS and mobile devices, default to disabled
    const isIos = isIosDevice();
    const isMobile = isMobileDevice();
    
    // Check if there's a stored preference
    const stored = localStorage.getItem(METEOR_ENABLED_KEY);
    
    if (stored === null) {
      // If no preference is stored, default to disabled for iOS and mobile
      return !(isIos || isMobile);
    }
    
    // Otherwise, return the stored preference
    return stored === 'true';
  } catch (error) {
    // Default to disabled if localStorage fails
    return false;
  }
}

/**
 * Set user preference for meteor animation
 * @param enabled Boolean indicating if meteor animation should be enabled
 */
export function setMeteorAnimationEnabled(enabled: boolean): void {
  try {
    localStorage.setItem(METEOR_ENABLED_KEY, enabled.toString());
  } catch (error) {
    console.warn('Failed to save meteor animation preference', error);
  }
}

/**
 * Check if the current device is a mobile device
 * @returns Boolean indicating if the current device is mobile
 */
function isMobileDevice(): boolean {
  return window.innerWidth < 768;
}

/**
 * Check if the current device is an iOS device
 * @returns Boolean indicating if the current device is iOS
 */
function isIosDevice(): boolean {
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod');
  }
  return false;
}
