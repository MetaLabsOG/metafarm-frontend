import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(5, 255, 0, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(5, 255, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(5, 255, 0, 0);
  }
`;

export const LoadingSpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const SpinnerOverlay = styled.div<{ fullScreen?: boolean }>`
  position: ${props => props.fullScreen ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(18, 18, 18, 0.7); /* ~var(--background) with opacity */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div<{ size: 'small' | 'medium' | 'large' }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '20px';
      case 'large': return '60px';
      default: return '40px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '20px';
      case 'large': return '60px';
      default: return '40px';
    }
  }};
  border: 3px solid rgba(5, 255, 0, 0.1);
  border-top: 3px solid rgba(5, 255, 0, 0.8);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite, ${pulse} 2s infinite;
  will-change: transform;
`;

export const SpinnerText = styled.div`
  margin-top: 10px;
  color: var(--green);
  font-size: 14px;
  font-weight: 500;
`;
