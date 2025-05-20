import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Meteors } from "./meteors-styled";
import {
  DEFAULT_METEOR_COUNT,
  DESKTOP_METEOR_COUNT,
  MOBILE_METEOR_COUNT,
  LOW_END_METEOR_COUNT,
  IOS_METEOR_COUNT
} from "../../constants/meteors";
import { isLowEndDevice } from "../../utils/performance";
import { getMeteorAnimationEnabled } from "../../utils/userPreferences";

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #121212;
`;

const MeteorsContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

interface MeteorsBackgroundProps {
  children: React.ReactNode;
}

export const MeteorsBackground: React.FC<MeteorsBackgroundProps> = ({ children }) => {
  // Use a ref for the timeout to avoid TypeScript errors with window properties
  const resizeTimeoutRef = useRef<number | null>(null);
  const [meteorCount, setMeteorCount] = useState(DEFAULT_METEOR_COUNT);
  const [meteorsEnabled, setMeteorsEnabled] = useState(() => getMeteorAnimationEnabled());

  // Function to check if device is iOS
  const isIosDevice = (): boolean => {
    if (typeof navigator !== 'undefined' && navigator.userAgent) {
      const ua = navigator.userAgent.toLowerCase();
      return ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod');
    }
    return false;
  };

  // Listen for changes to meteor animation preference
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cometa_meteor_enabled') {
        setMeteorsEnabled(e.newValue === 'true');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Function to determine device type and set appropriate meteor count
    const checkDeviceCapabilities = () => {
      // Check if it's an iOS device
      if (isIosDevice()) {
        setMeteorCount(IOS_METEOR_COUNT);
        return;
      }

      // Check if it's a low-end device
      if (isLowEndDevice()) {
        setMeteorCount(LOW_END_METEOR_COUNT);
        return;
      }

      // Then check if it's mobile based on screen width
      const isMobileDevice = window.innerWidth < 768;
      if (isMobileDevice) {
        setMeteorCount(MOBILE_METEOR_COUNT);
      } else {
        setMeteorCount(DESKTOP_METEOR_COUNT);
      }
    };

    // Initial check
    checkDeviceCapabilities();

    // Add event listener for window resize with debounce
    const handleResize = () => {
      // Clear any existing timeout
      if (resizeTimeoutRef.current !== null) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
      // Set new timeout
      resizeTimeoutRef.current = window.setTimeout(checkDeviceCapabilities, 250);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current !== null) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  // Check for meteor animation preference changes
  useEffect(() => {
    const checkMeteorPreference = () => {
      setMeteorsEnabled(getMeteorAnimationEnabled());
    };

    // Check every second for changes
    const intervalId = setInterval(checkMeteorPreference, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <BackgroundContainer>
      {/* Meteors background - only render if enabled */}
      {meteorsEnabled && (
        <MeteorsContainer>
          <Meteors number={meteorCount} />
        </MeteorsContainer>
      )}

      {/* Content with transparency */}
      <ContentContainer>
        {children}
      </ContentContainer>
    </BackgroundContainer>
  );
};
