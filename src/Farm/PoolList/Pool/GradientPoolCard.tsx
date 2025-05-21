import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { PoolContainer, StakeButtonMobile } from './styled';
import {
  getOptimizedBackdropFilter,
  getOptimizedBoxShadow,
  getOptimizedGradient,
  isMobileDevice
} from '../../../utils/mobileOptimizations';

// Enhanced pool container with gradient background
const GradientPoolContainer = styled(PoolContainer)`
  /* Base gradient background */
  background: ${getOptimizedGradient(`linear-gradient(
    135deg,
    rgba(54, 54, 54, 0.01) 0%,
    rgba(54, 54, 54, 0.01) 50%
  ), rgba(20, 20, 20, 0.3)`, 'rgba(20, 20, 20, 0.5)')};

  /* Add backdrop blur for transparency effect */
  backdrop-filter: ${getOptimizedBackdropFilter('blur(8px)')};

  /* Add subtle glow effect */
  box-shadow: ${getOptimizedBoxShadow('0 8px 16px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.05)')};

  /* Smooth transition for hover effects - disabled on mobile */
  transition: ${isMobileDevice() ? 'none' : 'all 0.3s ease'};

  /* Enhanced hover effect - only on desktop */
  ${!isMobileDevice() && css`
    &:hover {
      background: linear-gradient(
        135deg,
        rgba(54, 54, 54, 0.02) 0%,
        rgba(54, 54, 54, 0.02) 50%
      ), rgba(20, 20, 20, 0.1);

      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
                  0 0 30px rgba(0, 0, 0, 0.1);

      transform: translateY(-2px);
    }
  `}

  /* Mobile-specific styling */
  @media (max-width: 1120px) {
    background: ${getOptimizedGradient(`linear-gradient(
      135deg,
      rgba(54, 54, 54, 0.01) 0%,
      rgba(54, 54, 54, 0.01) 50%
    ), rgba(20, 20, 20, 0.3)`, 'rgba(20, 20, 20, 0.5)')};

    /* Hover effects disabled on mobile */
    &:hover {
      ${isMobileDevice() ? css`
        background: rgba(20, 20, 20, 0.5);
        transform: none;
        box-shadow: none;
      ` : css`
        background: linear-gradient(
          135deg,
          rgba(54, 54, 54, 0.02) 0%,
          rgba(54, 54, 54, 0.02) 50%
        ), rgba(20, 20, 20, 0.4);
      `}
    }
  }
`;

// Enhanced pool container for compact view (no staked/reward rows)
const CompactGradientPoolContainer = styled(GradientPoolContainer)`
  @media (max-width: 1120px) {
    min-height: 150px; /* Reduced height for compact view */
  }
`;

// Enhanced grid cell with gradient background
const GradientGridCell = styled.div`
  background: ${getOptimizedGradient(`linear-gradient(
    135deg,
    rgba(54, 54, 54, 0.01) 0%,
    rgba(54, 54, 54, 0.01) 50%
  ), rgba(0, 0, 0, 0.25)`, 'rgba(0, 0, 0, 0.3)')};

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

  /* Add subtle hover effect - only on desktop */
  ${!isMobileDevice() && css`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(54, 54, 54, 0.02) 0%,
        rgba(54, 54, 54, 0.02) 50%
      );
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
    }

    &:hover::before {
      opacity: 1;
    }
  `}
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

// Enhanced stake button with gradient styling
const GradientStakeButton = styled(StakeButtonMobile)`
  /* Base gradient background - match filter color #90ee90 */
  background: ${getOptimizedGradient(`linear-gradient(
    135deg,
    rgba(144, 238, 144, 0.9) 0%,
    rgba(144, 238, 144, 0.8) 100%
  )`, 'rgba(144, 238, 144, 0.85)')};

  /* Add subtle glow effect */
  box-shadow: ${getOptimizedBoxShadow('0 2px 8px rgba(144, 238, 144, 0.3)')};

  /* Smooth transition for hover effects - disabled on mobile */
  transition: ${isMobileDevice() ? 'none' : 'all 0.3s ease'};

  /* Wobble animation for hover - only on desktop */
  ${!isMobileDevice() && css`
    @keyframes wobble {
      0% { transform: translateX(0); }
      15% { transform: translateX(-5px) rotate(-1deg); }
      30% { transform: translateX(4px) rotate(1deg); }
      45% { transform: translateX(-3px) rotate(-0.5deg); }
      60% { transform: translateX(2px) rotate(0.5deg); }
      75% { transform: translateX(-1px) rotate(-0.25deg); }
      100% { transform: translateX(0); }
    }
  `}

  /* Enhanced hover effect - only on desktop */
  &:not(:disabled):hover {
    ${isMobileDevice() ? css`
      background: rgba(144, 238, 144, 0.8);
    ` : css`
      background: linear-gradient(
        135deg,
        rgba(144, 238, 144, 1) 0%,
        rgba(144, 238, 144, 0.9) 100%
      );

      box-shadow: 0 4px 12px rgba(144, 238, 144, 0.5);
      transform: translateY(-1px) scale(1.03);
      color: #1e1e1e;
      animation: wobble 1s ease;
    `}
  }

  /* Disabled state */
  &:disabled {
    background: ${getOptimizedGradient(`linear-gradient(
      135deg,
      rgba(100, 100, 100, 0.5) 0%,
      rgba(80, 80, 80, 0.5) 100%
    )`, 'rgba(100, 100, 100, 0.5)')};
    color: rgba(200, 200, 200, 0.7);
    box-shadow: none;
  }
`;

export {
  GradientPoolContainer,
  CompactGradientPoolContainer,
  GradientGridCell,
  GradientPoolCard,
  GradientStakeButton
};
