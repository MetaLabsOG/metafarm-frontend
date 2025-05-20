// Performance utilities for optimizing animations and effects

// Configuration for debouncing events
export const DEBOUNCE_TIMES = {
  resize: 150, // ms
  scroll: 100, // ms
  search: 300  // ms
};

// Performance thresholds for adaptive rendering
export const PERFORMANCE_THRESHOLDS = {
  // If FPS drops below this value, reduce effects
  fpsThreshold: 30,
  
  // If memory usage is above this percentage, reduce effects
  memoryThreshold: 80
};

// Animation frame throttling configuration
export const ANIMATION_THROTTLE = {
  desktop: 1, // Run at full frame rate
  mobile: 2,  // Run at half frame rate
  lowEnd: 3   // Run at one-third frame rate
};

/**
 * Debounce function to limit how often a function can be called
 * @param func The function to debounce
 * @param wait Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit how often a function can be called
 * @param func The function to throttle
 * @param limit Limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return function(...args: Parameters<T>): void {
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
 * Detect if the device is likely a low-end device
 * @returns Boolean indicating if the device is likely low-end
 */
export function isLowEndDevice(): boolean {
  // Check for navigator.hardwareConcurrency (number of logical processors)
  if (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) {
    if (navigator.hardwareConcurrency <= 2) {
      return true;
    }
  }
  
  // Check for device memory API
  if (typeof navigator !== 'undefined' && (navigator as any).deviceMemory) {
    if ((navigator as any).deviceMemory <= 2) {
      return true;
    }
  }
  
  // Check for iOS devices (which can struggle with many animations)
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    const ua = navigator.userAgent.toLowerCase();
    if (
      ua.includes('iphone') || 
      ua.includes('ipad') || 
      ua.includes('ipod')
    ) {
      return true;
    }
  }
  
  // Fallback to user agent sniffing for older/budget mobile devices
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    const ua = navigator.userAgent.toLowerCase();
    if (
      ua.includes('android 4') || 
      ua.includes('android 5') || 
      ua.includes('mobile') && !ua.includes('chrome')
    ) {
      return true;
    }
  }
  
  return false;
}

/**
 * Get the appropriate performance mode based on device capabilities
 * @returns Performance mode string: 'high', 'medium', or 'low'
 */
export function getPerformanceMode(): 'high' | 'medium' | 'low' {
  if (isLowEndDevice()) {
    return 'low';
  }
  
  // Check if it's a mobile device
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return 'medium';
  }
  
  return 'high';
}

/**
 * Get the appropriate animation throttle factor based on performance mode
 * @returns Throttle factor (1 = full speed, higher = more throttling)
 */
export function getAnimationThrottleFactor(): number {
  const mode = getPerformanceMode();
  
  switch (mode) {
    case 'low':
      return ANIMATION_THROTTLE.lowEnd;
    case 'medium':
      return ANIMATION_THROTTLE.mobile;
    case 'high':
    default:
      return ANIMATION_THROTTLE.desktop;
  }
}
