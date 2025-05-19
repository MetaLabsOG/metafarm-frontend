import React from 'react';
import styled from 'styled-components';
import { PoolContainer, StakeButtonMobile } from './styled';

// Enhanced pool container with gradient background
const GradientPoolContainer = styled(PoolContainer)`
  /* Base gradient background */
  background: linear-gradient(
    135deg,
    rgba(81, 221, 78, 0.08) 0%,
    rgba(54, 54, 54, 0.08) 50%
  ), var(--backgroundModal);

  /* Add subtle glow effect */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2),
              0 0 20px rgba(81, 221, 78, 0.05);

  /* Smooth transition for hover effects */
  transition: all 0.3s ease;

  /* Enhanced hover effect */
  &:hover {
    background: linear-gradient(
      135deg,
      rgba(81, 221, 78, 0.12) 0%,
      rgba(54, 54, 54, 0.12) 50%
    ), var(--backgroundModal);

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25),
                0 0 30px rgba(81, 221, 78, 0.08);

    transform: translateY(-2px);
  }

  /* Mobile-specific styling */
  @media (max-width: 1120px) {
    background: linear-gradient(
      135deg,
      rgba(81, 221, 78, 0.08) 0%,
      rgba(54, 54, 54, 0.08) 50%
    ), var(--backgroundCard);

    &:hover {
      background: linear-gradient(
        135deg,
        rgba(81, 221, 78, 0.12) 0%,
        rgba(54, 54, 54, 0.12) 50%
      ), var(--backgroundCard);
    }
  }
`;

// Enhanced grid cell with gradient background
const GradientGridCell = styled.div`
  background: linear-gradient(
    135deg,
    rgba(81, 221, 78, 0.05) 0%,
    rgba(54, 54, 54, 0.05) 50%
  ), rgba(0, 0, 0, 0.3);

  border-radius: 6px;
  padding: 8px 6px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 60px;
  text-align: center;
  position: relative;
  overflow: hidden;

  /* Add subtle hover effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(81, 221, 78, 0.02) 0%,
      rgba(54, 54, 54, 0.02) 50%
    );
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }
`;

// Wrapper component that applies the gradient styling
const GradientPoolCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <GradientPoolContainer>{children}</GradientPoolContainer>;
};

// Enhanced stake button with gradient styling
const GradientStakeButton = styled(StakeButtonMobile)`
  /* Base gradient background */
  background: linear-gradient(
    135deg,
    rgba(139, 255, 116, 0.9) 0%,
    rgba(81, 221, 78, 0.9) 100%
  );

  /* Add subtle glow effect */
  box-shadow: 0 2px 8px rgba(81, 221, 78, 0.3);

  /* Smooth transition for hover effects */
  transition: all 0.3s ease;

  /* Enhanced hover effect */
  &:not(:disabled):hover {
    background: linear-gradient(
      135deg,
      rgba(81, 221, 78, 1) 0%,
      rgba(5, 255, 0, 1) 100%
    );

    box-shadow: 0 4px 12px rgba(81, 221, 78, 0.5);
    transform: translateY(-1px) scale(1.03);
    color: black;
  }

  /* Disabled state */
  &:disabled {
    background: linear-gradient(
      135deg,
      rgba(100, 100, 100, 0.5) 0%,
      rgba(80, 80, 80, 0.5) 100%
    );
    color: rgba(200, 200, 200, 0.7);
    box-shadow: none;
  }
`;

export { GradientPoolContainer, GradientGridCell, GradientPoolCard, GradientStakeButton };
