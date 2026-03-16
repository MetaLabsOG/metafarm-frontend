import { useState, useEffect, useRef } from 'react';

/**
 * Returns true briefly when `value` changes, enabling a CSS flash highlight.
 * Usage: `className={isFlashing ? 'flash-update' : ''}`
 */
export function useFlashOnChange<T>(value: T): boolean {
    const [isFlashing, setIsFlashing] = useState(false);
    const prevRef = useRef(value);
    const initialRef = useRef(true);

    useEffect(() => {
        // Skip the initial render — don't flash on mount
        if (initialRef.current) {
            initialRef.current = false;
            prevRef.current = value;
            return;
        }

        if (prevRef.current !== value) {
            setIsFlashing(true);
            prevRef.current = value;
            const id = setTimeout(() => setIsFlashing(false), 600);
            return () => clearTimeout(id);
        }
    }, [value]);

    return isFlashing;
}
