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
      /* Completely disable backdrop filters on mobile */
      * {
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }

      /* Simplify box shadows */
      * {
        box-shadow: none !important;
      }

      /* Optimize animations and transitions */
      * {
        transition-duration: 0.1s !important;
        transition-property: opacity, visibility !important;
        will-change: auto !important;
        animation-duration: 0s !important;
      }

      /* Disable animations on hover */
      *:hover {
        transform: none !important;
        transition: none !important;
      }

      /* Disable complex CSS properties */
      * {
        filter: none !important;
        text-shadow: none !important;
      }

      /* Disable all transforms to prevent GPU layer creation */
      * {
        transform: none !important;
        -webkit-transform: none !important;
      }

      /* Use solid colors instead of gradients */
      [style*="gradient"] {
        background: rgba(20, 20, 20, 0.5) !important;
      }

      /* Disable ALL keyframe animations */
      * {
        animation: none !important;
        -webkit-animation: none !important;
      }

      /* Reduce paint areas by disabling overflow hidden where not needed */
      .pool-container {
        overflow: visible !important;
      }

      /* Force hardware acceleration off for problematic elements */
      .pool-container > div {
        transform: translateZ(0) !important;
        will-change: auto !important;
      }

      /* Disable perspective and 3D transforms completely */
      * {
        perspective: none !important;
        transform-style: flat !important;
        backface-visibility: visible !important;
      }
    }

    /* iOS-specific optimizations */
    @supports (-webkit-touch-callout: none) {
      * {
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        -webkit-perspective: 1000;
      }
    }
  `;

  // Append to document head
  document.head.appendChild(style);
}
