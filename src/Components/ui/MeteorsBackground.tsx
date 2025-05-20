import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Meteors } from "./meteors-styled";
import { DESKTOP_METEOR_COUNT, MOBILE_METEOR_COUNT } from "../../constants/meteors";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile (screen width less than 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use different meteor counts based on device type
  const meteorCount = isMobile ? MOBILE_METEOR_COUNT : DESKTOP_METEOR_COUNT;

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
