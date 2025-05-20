import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Meteors } from "./meteors-styled";
import { MeteorToggle } from "./MeteorToggle";
import {
  DEFAULT_METEOR_COUNT,
  DESKTOP_METEOR_COUNT,
  MOBILE_METEOR_COUNT,
  LOW_END_METEOR_COUNT,
  IOS_METEOR_COUNT
} from "../../constants/meteors";
import { isLowEndDevice } from "../../utils/performance";
import {
  getMeteorAnimationEnabled,
  getMeteorCountOverride,
  setMeteorCountOverride
} from "../../utils/userPreferences";

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

  useEffect(() => {
    // Function to determine device type and set appropriate meteor count
    const checkDeviceCapabilities = () => {
      // Check for user override first
      const userOverride = getMeteorCountOverride();
      if (userOverride !== null) {
        setMeteorCount(userOverride);
        return;
      }

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

  // Handle toggle change
  const handleToggleChange = (enabled: boolean) => {
    setMeteorsEnabled(enabled);
  };

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

      {/* Toggle for meteor animation */}
      <MeteorToggle onChange={handleToggleChange} />
    </BackgroundContainer>
  );
};
