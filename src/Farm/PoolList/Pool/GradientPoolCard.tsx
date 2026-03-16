import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PoolContainer, StakeButtonMobile } from './styled';

// Enhanced pool container with gradient background
const GradientPoolContainer = styled(PoolContainer)`
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.01) 0%,
    rgba(10, 10, 10, 0.01) 50%
  ), rgba(10, 10, 10, 0.15);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(10, 10, 10, 0.02) 0%,
      rgba(10, 10, 10, 0.02) 50%
    ), rgba(10, 10, 10, 0.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 0 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  /* Tablet */
  @media (max-width: 1120px) {
    background: rgba(10, 10, 10, 0.15);
    backdrop-filter: none;
    box-shadow: none;
    transition: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  /* Mobile — two cards per row */
  @media (max-width: 700px) {
    background: rgba(10, 10, 10, 0.2);
    backdrop-filter: none;
    box-shadow: none;
    transition: none;
    width: calc(50% - 4px) !important;
    max-width: 49% !important;
    margin: 0 0 8px 0 !important;
    box-sizing: border-box !important;
    flex: 0 0 calc(50% - 4px) !important;

    &:hover {
      background: rgba(10, 10, 10, 0.2);
      transform: none;
      box-shadow: none;
    }
  }
`;

// Enhanced pool container for compact view (no staked/reward rows)
const CompactGradientPoolContainer = styled(GradientPoolContainer)`
  @media (max-width: 1120px) {
    min-height: 140px; /* Reduced height for compact view */
  }

  @media (max-width: 700px) {
    min-height: 100px; /* Further reduced height for mobile */
    padding: 6px 0; /* Reduced padding */
    width: calc(50% - 2px); /* Ensure width matches parent */
    max-width: 49.5%; /* Use percentage instead of fixed width */
  }
`;

// Enhanced grid cell with gradient background
const GradientGridCell = styled.div`
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.01) 0%,
    rgba(10, 10, 10, 0.01) 50%
  ), rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 8px 3px;
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

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(10, 10, 10, 0.02) 0%, rgba(10, 10, 10, 0.02) 50%);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 1120px) {
    &::before { display: none; }
  }

  @media (max-width: 700px) {
    padding: 3px 1px;
    min-height: 36px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    font-size: 11px;
    &::before { display: none; }
  }
`;

// Wrapper component that applies the gradient styling
const GradientPoolCard: React.FC<{
  children: React.ReactNode;
  isCompact?: boolean;
}> = ({ children, isCompact = false }) => {
  return isCompact
    ? <CompactGradientPoolContainer>{children}</CompactGradientPoolContainer>
    : <GradientPoolContainer>{children}</GradientPoolContainer>;
};

const wobble = keyframes`
  0% { transform: translateX(0); }
  15% { transform: translateX(-5px) rotate(-1deg); }
  30% { transform: translateX(4px) rotate(1deg); }
  45% { transform: translateX(-3px) rotate(-0.5deg); }
  60% { transform: translateX(2px) rotate(0.5deg); }
  75% { transform: translateX(-1px) rotate(-0.25deg); }
  100% { transform: translateX(0); }
`;

// Enhanced stake button with gradient styling
const GradientStakeButton = styled(StakeButtonMobile)`
  background: linear-gradient(135deg, rgba(144, 238, 144, 0.9) 0%, rgba(144, 238, 144, 0.8) 100%);
  box-shadow: 0 2px 8px rgba(144, 238, 144, 0.3);
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:not(:disabled):hover {
    background: linear-gradient(135deg, rgba(144, 238, 144, 1) 0%, rgba(144, 238, 144, 0.9) 100%);
    box-shadow: 0 4px 12px rgba(144, 238, 144, 0.5);
    transform: translateY(-1px) scale(1.03);
    color: #1e1e1e;
    animation: ${wobble} 1s ease;
  }

  &:disabled {
    background: linear-gradient(135deg, rgba(100, 100, 100, 0.5) 0%, rgba(80, 80, 80, 0.5) 100%);
    color: rgba(200, 200, 200, 0.7);
    box-shadow: none;
  }

  @media (max-width: 1120px) {
    transition: none;
    &:not(:disabled):hover {
      animation: none;
      transform: none;
    }
  }

  @media (max-width: 700px) {
    width: 60%;
    height: 22px;
    font-size: 12px;
    margin: 3px auto 0;
    padding: 0;
    background: rgba(144, 238, 144, 0.85);
    box-shadow: none;
    transition: none;

    &:disabled {
      background: rgba(100, 100, 100, 0.5);
    }

    &:not(:disabled):hover {
      animation: none;
      transform: none;
      box-shadow: none;
    }
  }
`;

export {
  GradientPoolContainer,
  CompactGradientPoolContainer,
  GradientGridCell,
  GradientPoolCard,
  GradientStakeButton
};
