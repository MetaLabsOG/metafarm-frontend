/**
 * Mobile optimization utilities to improve performance on mobile devices
 */

export function isMobileDevice(): boolean {
  return window.innerWidth < 768;
}

export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function getOptimizedBackdropFilter(defaultValue: string = 'blur(8px)'): string {
  if (isMobileDevice()) {
    return 'none';
  }
  return defaultValue;
}

export function getOptimizedBoxShadow(defaultValue: string): string {
  if (isMobileDevice()) {
    return 'none';
  }
  return defaultValue;
}

export function getOptimizedGradient(defaultValue: string, fallbackColor: string = 'rgba(20, 20, 20, 0.5)'): string {
  if (isMobileDevice()) {
    return fallbackColor;
  }
  return defaultValue;
}

export function getDisableHoverCSS(): string {
  if (!isTouchDevice()) {
    return '';
  }

  return `
    @media (hover: none) {
      *:hover {
        transition: none !important;
      }
    }
  `;
}

// Static CSS content for mobile optimizations — safe, no user input
const MOBILE_OPTIMIZATION_CSS = `
    @media (hover: none) {
      *:hover {
        transition: none !important;
      }
    }

    @media (max-width: 768px) {
      .pool-container,
      .pool-container > div,
      [class*="BalanceList"],
      [class*="GradientPool"],
      [class*="MobileFilter"] {
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }

      [class*="BalanceList"],
      [class*="AmountContainer"] {
        perspective: none !important;
        transform-style: flat !important;
      }

      .pool-container,
      .pool-container > div {
        box-shadow: none !important;
      }

      .pool-container,
      .pool-container > div {
        transition-duration: 0.1s !important;
      }
    }
`;

/**
 * Inject scoped mobile optimizations. Only targets specific selectors
 * instead of using destructive global `*` overrides.
 */
export function injectMobileOptimizations(): void {
  const existingStyle = document.getElementById('mobile-optimizations-style');
  if (existingStyle) {
    existingStyle.remove();
  }

  const style = document.createElement('style');
  style.id = 'mobile-optimizations-style';
  style.textContent = isTouchDevice() ? MOBILE_OPTIMIZATION_CSS : MOBILE_OPTIMIZATION_CSS.replace(/@media \(hover: none\)[^}]*\{[^}]*\}/g, '');

  document.head.appendChild(style);
}
