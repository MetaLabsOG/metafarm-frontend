import { useEffect, useState, useCallback } from 'react';
import { getPerformanceManager, PerformanceSettings } from '../utils/performanceCache';

export function usePerformanceOptimization() {
  const [settings, setSettings] = useState<PerformanceSettings>(() => {
    try {
      return getPerformanceManager().getSettings();
    } catch {
      // Fallback conservative settings
      return {
        batchSize: 5,
        animationsEnabled: false,
        transitionsEnabled: false,
        shadowsEnabled: false,
        blurEnabled: false,
        imageQuality: 'low',
        virtualScrollThreshold: 10,
        debounceDelay: 500,
      };
    }
  });

  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [performanceScore, setPerformanceScore] = useState(0);

  useEffect(() => {
    try {
      const perfManager = getPerformanceManager();
      setIsFirstVisit(perfManager.isFirstVisit());
      setPerformanceScore(perfManager.getPerformanceScore());
      
      // Update settings if they change
      const currentSettings = perfManager.getSettings();
      setSettings(currentSettings);
    } catch (error) {
      console.warn('Performance manager not available:', error);
    }
  }, []);

  const reportSuccessfulLoad = useCallback(() => {
    try {
      const perfManager = getPerformanceManager();
      perfManager.reportSuccessfulLoad();
      
      // Update local state
      setIsFirstVisit(false);
      setPerformanceScore(perfManager.getPerformanceScore());
      setSettings(perfManager.getSettings());
    } catch (error) {
      console.warn('Failed to report successful load:', error);
    }
  }, []);

  const reportCrash = useCallback(() => {
    try {
      const perfManager = getPerformanceManager();
      perfManager.reportCrash();
      
      // Update local state
      setPerformanceScore(perfManager.getPerformanceScore());
      setSettings(perfManager.getSettings());
    } catch (error) {
      console.warn('Failed to report crash:', error);
    }
  }, []);

  const shouldUseConservativeMode = useCallback(() => {
    try {
      return getPerformanceManager().shouldUseConservativeMode();
    } catch {
      return true; // Default to conservative mode if manager fails
    }
  }, []);

  return {
    settings,
    isFirstVisit,
    performanceScore,
    reportSuccessfulLoad,
    reportCrash,
    shouldUseConservativeMode,
  };
} 