/**
 * Cache migration: clears stale localStorage caches on app version change.
 * Preserves wallet credentials and user preferences.
 * Must run synchronously before React mounts.
 */

// Bump this whenever a deploy needs a cache reset
const CACHE_VERSION = '4';
const CACHE_VERSION_KEY = 'cometa_cache_version';

// Keys to preserve across cache resets (wallet state + user prefs)
const PRESERVED_PREFIXES = [
    'walletAddress',
    'connectedWalletType',
    'walletNfdName',
    'wc@2:',
    'cometa_meteor_enabled',
    'cometa_device_capability',
    'cometa_performance_cache',
    'welcome_',
];

function shouldPreserve(key: string): boolean {
    return PRESERVED_PREFIXES.some(prefix => key.startsWith(prefix));
}

export function runCacheMigration(): void {
    try {
        const currentVersion = localStorage.getItem(CACHE_VERSION_KEY);

        if (currentVersion === CACHE_VERSION) {
            return; // Already on current version
        }

        console.log(`Cache migration: ${currentVersion ?? 'none'} → ${CACHE_VERSION}`);

        // Collect keys to remove (don't mutate while iterating)
        const keysToRemove: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && !shouldPreserve(key) && key !== CACHE_VERSION_KEY) {
                keysToRemove.push(key);
            }
        }

        keysToRemove.forEach(key => localStorage.removeItem(key));
        localStorage.setItem(CACHE_VERSION_KEY, CACHE_VERSION);

        console.log(`Cache migration complete: cleared ${keysToRemove.length} stale entries`);
    } catch (error) {
        console.error('Cache migration failed:', error);
        // Non-fatal — app can still work with stale cache
    }
}
