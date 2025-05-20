import React from "react";
import styled from "styled-components";
import { getMeteorAnimationEnabled, setMeteorAnimationEnabled } from "../../utils/userPreferences";

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: 0.3;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ToggleText = styled.span`
  color: rgba(5, 255, 0, 0.8);
  font-size: 12px;
  margin-right: 8px;
  font-weight: 500;
  text-shadow: 0 0 5px rgba(5, 255, 0, 0.5);
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
  
  const handleToggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    setMeteorAnimationEnabled(newState);
    if (onChange) {
      onChange(newState);
    }
  };
  
  return (
    <ToggleContainer onClick={handleToggle}>
      <ToggleText>Comet Rain</ToggleText>
      <ToggleSwitch enabled={enabled} />
    </ToggleContainer>
  );
};
