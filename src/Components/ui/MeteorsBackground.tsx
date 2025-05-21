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

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: visible; /* Changed from hidden to allow background to repeat when scrolling */
  background-color: #121212;

  @media (max-width: 768px) {
    background-image: url('/assets/background_2.png');
    background-repeat: repeat-y; /* Ensure vertical repetition */
    background-size: 100% auto;
    background-position: center top;
    background-attachment: scroll; /* Allow background to scroll with content */
    min-height: 100%;
    height: auto; /* Allow container to expand with content */
    will-change: auto; /* Reset will-change to avoid memory issues */
    transform: translateZ(0); /* Use hardware acceleration but in a simple way */
  }
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

  @media (max-width: 768px) {
    /* Ensure content doesn't hide the repeating background */
    background-color: transparent;
  }
`;

interface MeteorsBackgroundProps {
  children: React.ReactNode;
}

export const MeteorsBackground: React.FC<MeteorsBackgroundProps> = ({ children }) => {
  // Use a ref for the timeout to avoid TypeScript errors with window properties
  const resizeTimeoutRef = useRef<number | null>(null);
  const [meteorCount, setMeteorCount] = useState(DEFAULT_METEOR_COUNT);
  const [meteorsEnabled, setMeteorsEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if device is iOS
  const isIosDevice = (): boolean => {
    if (typeof navigator !== 'undefined' && navigator.userAgent) {
      const ua = navigator.userAgent.toLowerCase();
      return ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod');
    }
    return false;
  };

  // Initialize device type and meteor settings
  useEffect(() => {
    const checkDeviceType = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Set meteors enabled based on device type
      // Enable for all devices except iOS
      const enabled = !isIosDevice();
      setMeteorsEnabled(enabled);

      // Also update localStorage to match current state
      localStorage.setItem('cometa_meteor_enabled', enabled.toString());
    };

    // Initial check
    checkDeviceType();

    // Add resize listener
    window.addEventListener('resize', checkDeviceType);
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  // Listen for changes to meteor animation preference
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cometa_meteor_enabled') {
        // Only apply preference on desktop
        if (!isMobile && !isIosDevice()) {
          setMeteorsEnabled(e.newValue === 'true');
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isMobile]);

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
