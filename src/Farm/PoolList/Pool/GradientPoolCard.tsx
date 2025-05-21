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
    rgba(10, 10, 10, 0.01) 0%,
    rgba(10, 10, 10, 0.01) 50%
  ), rgba(10, 10, 10, 0.15)`, 'rgba(10, 10, 10, 0.2)')};

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
        rgba(10, 10, 10, 0.02) 0%,
        rgba(10, 10, 10, 0.02) 50%
      ), rgba(10, 10, 10, 0.1);

      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
                  0 0 30px rgba(0, 0, 0, 0.1);

      transform: translateY(-2px);
    }
  `}

  /* Mobile-specific styling */
  @media (max-width: 1120px) {
    background: ${getOptimizedGradient(`linear-gradient(
      135deg,
      rgba(10, 10, 10, 0.01) 0%,
      rgba(10, 10, 10, 0.01) 50%
    ), rgba(10, 10, 10, 0.15)`, 'rgba(10, 10, 10, 0.2)')};

    /* Hover effects disabled on mobile */
    &:hover {
      ${isMobileDevice() ? css`
        background: rgba(10, 10, 10, 0.2);
        transform: none;
        box-shadow: none;
      ` : css`
        background: linear-gradient(
          135deg,
          rgba(10, 10, 10, 0.02) 0%,
          rgba(10, 10, 10, 0.02) 50%
        ), rgba(10, 10, 10, 0.15);
      `}
    }
  }
`;

// Enhanced pool container for compact view (no staked/reward rows)
const CompactGradientPoolContainer = styled(GradientPoolContainer)`
  @media (max-width: 1120px) {
    min-height: 150px; /* Reduced height for compact view */
  }

  @media (max-width: 700px) {
    min-height: 110px; /* Further reduced height for mobile */
    padding: 8px 0; /* Reduced padding */
    width: calc(50% - 4px); /* Ensure width matches parent */
    max-width: 48%; /* Use percentage instead of fixed width */
  }
`;

// Enhanced grid cell with gradient background
const GradientGridCell = styled.div`
  background: ${getOptimizedGradient(`linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.01) 0%,
    rgba(10, 10, 10, 0.01) 50%
  ), rgba(0, 0, 0, 0.15)`, 'rgba(0, 0, 0, 0.2)')};

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
        rgba(10, 10, 10, 0.02) 0%,
        rgba(10, 10, 10, 0.02) 50%
      );
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
    }

    &:hover::before {
      opacity: 1;
    }
  `}

  @media (max-width: 700px) {
    padding: 3px 2px; /* Further reduced padding for mobile */
    min-height: 36px; /* Further reduced height for mobile */
    background: rgba(0, 0, 0, 0.15); /* Simplified background for performance */
    border-radius: 4px; /* Smaller border radius */
    font-size: 11px; /* Smaller font size for mobile */
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

  /* Mobile-specific styling */
  @media (max-width: 700px) {
    width: 60%; /* Adjusted width for mobile */
    height: 22px; /* Reduced height for mobile */
    font-size: 12px; /* Smaller font for mobile */
    margin: 3px auto 0; /* Reduced margin */
    padding: 0; /* Remove padding */
    background: rgba(144, 238, 144, 0.85); /* Simplified background */
    box-shadow: none; /* Remove shadow for performance */

    &:disabled {
      background: rgba(100, 100, 100, 0.5); /* Simplified disabled background */
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
