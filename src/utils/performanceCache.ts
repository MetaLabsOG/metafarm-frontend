interface PerformanceSettings {
  batchSize: number;
  animationsEnabled: boolean;
  transitionsEnabled: boolean;
  shadowsEnabled: boolean;
  blurEnabled: boolean;
  imageQuality: 'low' | 'medium' | 'high';
  virtualScrollThreshold: number;
  debounceDelay: number;
}

interface DeviceCapability {
  isFirstVisit: boolean;
  performanceScore: number;
  memoryEstimate: number;
  connectionSpeed: 'slow' | 'medium' | 'fast';
  lastSuccessfulLoad: number;
  crashCount: number;
}

const PERFORMANCE_CACHE_KEY = 'cometa_performance_cache';
const DEVICE_CAPABILITY_KEY = 'cometa_device_capability';

// Conservative settings for first-time visitors or struggling devices
const CONSERVATIVE_SETTINGS: PerformanceSettings = {
  batchSize: 5,
  animationsEnabled: false,
  transitionsEnabled: false,
  shadowsEnabled: false,
  blurEnabled: false,
  imageQuality: 'low',
  virtualScrollThreshold: 10,
  debounceDelay: 500,
};

// Balanced settings for proven devices
const BALANCED_SETTINGS: PerformanceSettings = {
  batchSize: 10,
  animationsEnabled: true,
  transitionsEnabled: true,
  shadowsEnabled: false,
  blurEnabled: false,
  imageQuality: 'medium',
  virtualScrollThreshold: 20,
  debounceDelay: 300,
};

// High-performance settings for capable devices
const HIGH_PERFORMANCE_SETTINGS: PerformanceSettings = {
  batchSize: 20,
  animationsEnabled: true,
  transitionsEnabled: true,
  shadowsEnabled: true,
  blurEnabled: true,
  imageQuality: 'high',
  virtualScrollThreshold: 50,
  debounceDelay: 150,
};

class PerformanceManager {
  private settings: PerformanceSettings;
  private capability: DeviceCapability;
  private performanceObserver: PerformanceObserver | null = null;
  private loadStartTime: number = 0;

  constructor() {
    this.capability = this.loadDeviceCapability();
    this.settings = this.determineInitialSettings();
    this.loadStartTime = performance.now();
    this.setupPerformanceMonitoring();
  }

  private loadDeviceCapability(): DeviceCapability {
    if (typeof window === 'undefined') {
      return this.getDefaultCapability();
    }

    const stored = localStorage.getItem(DEVICE_CAPABILITY_KEY);
    if (stored) {
      try {
        return { ...this.getDefaultCapability(), ...JSON.parse(stored) };
      } catch {
        return this.getDefaultCapability();
      }
    }
    return this.getDefaultCapability();
  }

  private getDefaultCapability(): DeviceCapability {
    return {
      isFirstVisit: true,
      performanceScore: 0,
      memoryEstimate: this.estimateMemory(),
      connectionSpeed: this.estimateConnection(),
      lastSuccessfulLoad: 0,
      crashCount: 0,
    };
  }

  private estimateMemory(): number {
    if (typeof window === 'undefined') return 1000;
    
    // @ts-ignore - navigator.deviceMemory is experimental
    if (navigator.deviceMemory) {
      // @ts-ignore
      return navigator.deviceMemory * 1024; // Convert GB to MB
    }
    
    // Fallback estimation based on user agent
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('mobile') || userAgent.includes('android')) {
      return 2048; // Assume 2GB for mobile
    }
    return 4096; // Assume 4GB for desktop
  }

  private estimateConnection(): 'slow' | 'medium' | 'fast' {
    if (typeof window === 'undefined') return 'medium';
    
    // @ts-ignore - navigator.connection is experimental
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === 'slow-2g' || effectiveType === '2g') return 'slow';
      if (effectiveType === '3g') return 'medium';
      return 'fast';
    }
    
    return 'medium'; // Default assumption
  }

  private determineInitialSettings(): PerformanceSettings {
    // Always start conservative for first-time visitors
    if (this.capability.isFirstVisit) {
      return { ...CONSERVATIVE_SETTINGS };
    }

    // If device has crashed before, be extra conservative
    if (this.capability.crashCount > 2) {
      return { ...CONSERVATIVE_SETTINGS };
    }

    // Use performance score to determine settings
    if (this.capability.performanceScore > 80) {
      return { ...HIGH_PERFORMANCE_SETTINGS };
    } else if (this.capability.performanceScore > 50) {
      return { ...BALANCED_SETTINGS };
    }

    return { ...CONSERVATIVE_SETTINGS };
  }

  private setupPerformanceMonitoring(): void {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return;

    try {
      this.performanceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        this.analyzePerformanceEntries(entries);
      });

      this.performanceObserver.observe({ 
        entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] 
      });
    } catch (error) {
      console.warn('Performance monitoring not available:', error);
    }
  }

  private analyzePerformanceEntries(entries: PerformanceEntry[]): void {
    let score = this.capability.performanceScore;

    entries.forEach(entry => {
      if (entry.entryType === 'navigation') {
        const navEntry = entry as PerformanceNavigationTiming;
        const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
        
        // Score based on load time (lower is better)
        if (loadTime < 1000) score += 10;
        else if (loadTime < 3000) score += 5;
        else if (loadTime > 5000) score -= 10;
      }

      if (entry.entryType === 'largest-contentful-paint') {
        const lcp = entry.startTime;
        
        // Score based on LCP (lower is better)
        if (lcp < 1500) score += 15;
        else if (lcp < 2500) score += 10;
        else if (lcp > 4000) score -= 15;
      }
    });

    this.capability.performanceScore = Math.max(0, Math.min(100, score));
    this.saveCapability();
  }

  public reportSuccessfulLoad(): void {
    const loadTime = performance.now() - this.loadStartTime;
    
    this.capability.isFirstVisit = false;
    this.capability.lastSuccessfulLoad = Date.now();
    
    // Improve performance score based on successful load
    if (loadTime < 2000) {
      this.capability.performanceScore += 5;
    } else if (loadTime > 5000) {
      this.capability.performanceScore -= 2;
    }

    this.capability.performanceScore = Math.max(0, Math.min(100, this.capability.performanceScore));
    this.saveCapability();
    
    // Potentially upgrade settings after successful load
    this.maybeUpgradeSettings();
  }

  public reportCrash(): void {
    this.capability.crashCount += 1;
    this.capability.performanceScore = Math.max(0, this.capability.performanceScore - 20);
    this.saveCapability();
    
    // Downgrade to conservative settings
    this.settings = { ...CONSERVATIVE_SETTINGS };
    this.saveSettings();
  }

  private maybeUpgradeSettings(): void {
    const currentLevel = this.getSettingsLevel();
    const targetLevel = this.getTargetSettingsLevel();
    
    if (targetLevel > currentLevel) {
      this.upgradeSettings(targetLevel);
    }
  }

  private getSettingsLevel(): number {
    if (this.settings.batchSize <= 5) return 0; // Conservative
    if (this.settings.batchSize <= 10) return 1; // Balanced
    return 2; // High performance
  }

  private getTargetSettingsLevel(): number {
    if (this.capability.performanceScore > 80 && this.capability.crashCount === 0) return 2;
    if (this.capability.performanceScore > 50 && this.capability.crashCount < 2) return 1;
    return 0;
  }

  private upgradeSettings(level: number): void {
    switch (level) {
      case 2:
        this.settings = { ...HIGH_PERFORMANCE_SETTINGS };
        break;
      case 1:
        this.settings = { ...BALANCED_SETTINGS };
        break;
      default:
        this.settings = { ...CONSERVATIVE_SETTINGS };
    }
    this.saveSettings();
  }

  private saveCapability(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(DEVICE_CAPABILITY_KEY, JSON.stringify(this.capability));
    }
  }

  private saveSettings(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PERFORMANCE_CACHE_KEY, JSON.stringify(this.settings));
    }
  }

  // Public API
  public getSettings(): PerformanceSettings {
    return { ...this.settings };
  }

  public isFirstVisit(): boolean {
    return this.capability.isFirstVisit;
  }

  public getPerformanceScore(): number {
    return this.capability.performanceScore;
  }

  public shouldUseConservativeMode(): boolean {
    return this.capability.crashCount > 1 || this.capability.performanceScore < 30;
  }

  public cleanup(): void {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
  }
}

// Singleton instance
let performanceManager: PerformanceManager | null = null;

function getPerformanceManager(): PerformanceManager {
  if (!performanceManager) {
    performanceManager = new PerformanceManager();
  }
  return performanceManager;
}

function usePerformanceSettings(): PerformanceSettings {
  return getPerformanceManager().getSettings();
}

export { getPerformanceManager, usePerformanceSettings };
export type { PerformanceSettings, DeviceCapability }; 