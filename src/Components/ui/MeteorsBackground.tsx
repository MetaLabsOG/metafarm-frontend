import React from "react";
import styled from "styled-components";
import { Meteors } from "./meteors-styled";

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
  return (
    <BackgroundContainer>
      {/* Meteors background */}
      <MeteorsContainer>
        <Meteors number={100} />
      </MeteorsContainer>

      {/* Content with transparency */}
      <ContentContainer>
        {children}
      </ContentContainer>
    </BackgroundContainer>
  );
};
