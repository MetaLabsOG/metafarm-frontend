/**
 * Mobile optimization utilities to improve performance on mobile devices
 */

// Mobile optimizations are always enabled on mobile devices
// No toggle or localStorage needed

/**
 * Check if the current device is a mobile device
 * @returns Boolean indicating if the current device is mobile
 */
export function isMobileDevice(): boolean {
  return window.innerWidth < 768;
}

/**
 * Check if the current device is a touch device
 * @returns Boolean indicating if the current device is a touch device
 */
export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Get optimized backdrop filter value for current device
 * @param defaultValue Default backdrop-filter value
 * @returns Optimized backdrop-filter value
 */
export function getOptimizedBackdropFilter(defaultValue: string = 'blur(8px)'): string {
  if (isMobileDevice()) {
    return 'none'; // Disable backdrop-filter on mobile
  }

  return defaultValue;
}

/**
 * Get optimized box-shadow value for current device
 * @param defaultValue Default box-shadow value
 * @returns Optimized box-shadow value
 */
export function getOptimizedBoxShadow(defaultValue: string): string {
  if (isMobileDevice()) {
    return 'none'; // Disable box-shadow on mobile
  }

  return defaultValue;
}

/**
 * Get optimized gradient background for current device
 * @param defaultValue Default gradient background
 * @param fallbackColor Simple fallback color for mobile
 * @returns Optimized background value
 */
export function getOptimizedGradient(defaultValue: string, fallbackColor: string = 'rgba(20, 20, 20, 0.5)'): string {
  if (isMobileDevice()) {
    return fallbackColor; // Use simple background on mobile
  }

  return defaultValue;
}

/**
 * Get CSS for disabling hover effects on touch devices
 * @returns CSS string to disable hover effects
 */
export function getDisableHoverCSS(): string {
  if (!isTouchDevice()) {
    return '';
  }

  return `
    @media (hover: none) {
      /* Disable hover effects on touch devices */
      * {
        transition: none !important;
        transform: none !important;
        animation: none !important;
      }

      *:hover {
        transform: none !important;
        animation: none !important;
      }
    }
  `;
}

/**
 * Create a global style element to inject mobile optimizations
 */
export function injectMobileOptimizations(): void {
  // Remove any existing optimization styles
  const existingStyle = document.getElementById('mobile-optimizations-style');
  if (existingStyle) {
    existingStyle.remove();
  }

  // Create new style element
  const style = document.createElement('style');
  style.id = 'mobile-optimizations-style';
  style.innerHTML = `
    ${getDisableHoverCSS()}

    @media (max-width: 768px) {
      /* Disable backdrop filters */
      * {
        backdrop-filter: none !important;
      }

      /* Simplify box shadows */
      * {
        box-shadow: none !important;
      }

      /* Disable animations on hover */
      *:hover {
        transform: none !important;
        animation: none !important;
      }
    }
  `;

  // Append to document head
  document.head.appendChild(style);
}
