import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

export interface WindowSize {
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const DEFAULT_SIZE: WindowSize = {
  width: undefined,
  height: undefined,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};

function computeSize(): WindowSize {
  if (typeof window === 'undefined') return DEFAULT_SIZE;
  const width = window.innerWidth;
  const height = window.innerHeight;
  return {
    width,
    height,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1120,
    isDesktop: width >= 1120,
  };
}

export const WindowSizeContext = createContext<WindowSize>(DEFAULT_SIZE);

/**
 * Hook for WindowSizeProvider — manages the single resize listener with debounce.
 * Use this inside WindowSizeProvider only.
 */
export function useWindowSizeProvider(debounceMs = 200): WindowSize {
  const [size, setSize] = useState<WindowSize>(computeSize);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleResize = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setSize(computeSize());
    }, debounceMs);
  }, [debounceMs]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleResize]);

  return size;
}

/**
 * Reads window size from Context (single listener, debounced).
 * Requires WindowSizeContext.Provider — returns DEFAULT_SIZE without one.
 */
export function useWindowSize(): WindowSize {
  return useContext(WindowSizeContext);
}
