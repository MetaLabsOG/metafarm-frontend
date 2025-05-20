const METEOR_ENABLED_KEY = 'cometa_meteor_enabled';
const METEOR_COUNT_OVERRIDE_KEY = 'cometa_meteor_count';

/**
 * Get user preference for meteor animation
 * @returns Boolean indicating if meteor animation is enabled
 */
export function getMeteorAnimationEnabled(): boolean {
  try {
    const stored = localStorage.getItem(METEOR_ENABLED_KEY);
    return stored === null ? true : stored === 'true';
  } catch (error) {
    return true; // Default to enabled if localStorage fails
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
 * Get user-defined meteor count override
 * @returns Number of meteors or null if not set
 */
export function getMeteorCountOverride(): number | null {
  try {
    const stored = localStorage.getItem(METEOR_COUNT_OVERRIDE_KEY);
    return stored === null ? null : parseInt(stored, 10);
  } catch (error) {
    return null; // Default to null if localStorage fails
  }
}

/**
 * Set user-defined meteor count override
 * @param count Number of meteors or null to use default
 */
export function setMeteorCountOverride(count: number | null): void {
  try {
    if (count === null) {
      localStorage.removeItem(METEOR_COUNT_OVERRIDE_KEY);
    } else {
      localStorage.setItem(METEOR_COUNT_OVERRIDE_KEY, count.toString());
    }
  } catch (error) {
    console.warn('Failed to save meteor count preference', error);
  }
}
