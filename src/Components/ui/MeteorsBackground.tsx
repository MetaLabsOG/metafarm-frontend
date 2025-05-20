import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Meteors } from "./meteors-styled";
import {
  DEFAULT_METEOR_COUNT,
  DESKTOP_METEOR_COUNT,
  MOBILE_METEOR_COUNT,
  LOW_END_METEOR_COUNT
} from "../../constants/meteors";
import { isLowEndDevice } from "../../utils/performance";

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

  useEffect(() => {
    // Function to determine device type and set appropriate meteor count
    const checkDeviceCapabilities = () => {
      // Check if it's a low-end device first
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
      {/* Meteors background */}
      <MeteorsContainer>
        <Meteors number={meteorCount} />
      </MeteorsContainer>

      {/* Content with transparency */}
      <ContentContainer>
        {children}
      </ContentContainer>
    </BackgroundContainer>
  );
};
