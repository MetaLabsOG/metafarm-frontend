// UA-based mobile detection for wallet deep-linking decisions.
// Screen width is NOT a reliable signal here: narrow desktop browsers and
// tablets both need the desktop WC flow. iPadOS 13+ reports desktop Safari
// UA, so we also check maxTouchPoints on Macintosh.
export function isMobileWalletDevice(): boolean {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent;
    if (/iPhone|iPod|iPad|Android/i.test(ua)) return true;
    return ua.includes('Macintosh') && (navigator.maxTouchPoints ?? 0) > 1;
}

export function isAndroidDevice(): boolean {
    return typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
}
