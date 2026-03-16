import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// Import Meteors component but only use it for desktop
import { Meteors } from "./meteors-styled";
import {
  DEFAULT_METEOR_COUNT,
  DESKTOP_METEOR_COUNT
} from "../../constants/meteors";
import { isLowEndDevice } from "../../utils/performance";

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: visible; /* Changed from hidden to allow background to repeat when scrolling */
  background-color: var(--background);

  @media (max-width: 768px) {
    background-image: url('/assets/background_2.png');
    background-repeat: repeat-y; /* Ensure vertical repetition */
    background-size: 100% auto;
    background-position: center top;
    background-attachment: scroll; /* Allow background to scroll with content */
    min-height: 100vh; /* Ensure minimum viewport height */
    height: auto; /* Allow container to expand with content */
    will-change: auto; /* Reset will-change to avoid memory issues */
    transform: translateZ(0); /* Use hardware acceleration but in a simple way */
    
    /* Ensure the background covers the entire scrollable area */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('/assets/background_2.png');
      background-repeat: repeat-y;
      background-size: 100% auto;
      background-position: center top;
      z-index: -1;
      min-height: 100vh;
    }
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
  const resizeTimeoutRef = useRef<number | null>(null);
  const [meteorCount, setMeteorCount] = useState(DEFAULT_METEOR_COUNT);
  const [meteorsEnabled, setMeteorsEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(!document.hidden);

  const isIosDevice = (): boolean => {
    if (typeof navigator !== 'undefined' && navigator.userAgent) {
      const ua = navigator.userAgent.toLowerCase();
      return ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod');
    }
    return false;
  };

  // Consolidated resize handler: device type + meteor count
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current !== null) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = window.setTimeout(() => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);

        const enabled = !mobile && !isIosDevice();
        setMeteorsEnabled(enabled);
        localStorage.setItem('cometa_meteor_enabled', enabled.toString());

        if (enabled) {
          setMeteorCount(isLowEndDevice() ? DEFAULT_METEOR_COUNT : DESKTOP_METEOR_COUNT);
        }
      }, 250);
    };

    // Run immediately on mount (no debounce)
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    const enabled = !mobile && !isIosDevice();
    setMeteorsEnabled(enabled);
    localStorage.setItem('cometa_meteor_enabled', enabled.toString());
    if (enabled) {
      setMeteorCount(isLowEndDevice() ? DEFAULT_METEOR_COUNT : DESKTOP_METEOR_COUNT);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current !== null) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  // Pause meteors when tab is hidden
  useEffect(() => {
    const handleVisibility = () => setIsPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <BackgroundContainer>
      {/* Meteors background - only render if enabled, not mobile, and page visible */}
      {meteorsEnabled && !isMobile && isPageVisible && (
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
