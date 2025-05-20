import React from "react";
import styled from "styled-components";
import { getMeteorAnimationEnabled, setMeteorAnimationEnabled } from "../../utils/userPreferences";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  cursor: pointer;
  width: 70%;
`;

const ToggleText = styled.span`
  color: white;
  font-size: 17px;
  font-weight: 600;
  font-family: 'Montserrat';
  letter-spacing: 0.08em;
  text-transform: capitalize;
`;

const ToggleSwitch = styled.div<{ enabled: boolean }>`
  width: 36px;
  height: 18px;
  background-color: ${props => props.enabled ? 'rgba(5, 255, 0, 0.5)' : 'rgba(100, 100, 100, 0.5)'};
  border-radius: 10px;
  position: relative;
  transition: background-color 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.enabled ? '18px' : '2px'};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.3s ease;
  }
`;

interface MeteorToggleProps {
  onChange?: (enabled: boolean) => void;
}

export const MeteorToggle: React.FC<MeteorToggleProps> = ({ onChange }) => {
  const [enabled, setEnabled] = React.useState(() => getMeteorAnimationEnabled());
  
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing the burger menu
    const newState = !enabled;
    setEnabled(newState);
    setMeteorAnimationEnabled(newState);
    if (onChange) {
      onChange(newState);
    }
  };
  
  return (
    <ToggleContainer onClick={handleToggle}>
      <ToggleSwitch enabled={enabled} />
      <ToggleText>Comets FANCY Effect</ToggleText>
    </ToggleContainer>
  );
};
