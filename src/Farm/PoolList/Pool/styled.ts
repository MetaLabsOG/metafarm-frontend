import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { getPerformanceManager } from '../../../utils/performanceCache';

// Compute performance settings once at module load (avoids recalculation in every styled-component)
const PERF = (() => {
  try {
    return getPerformanceManager().getSettings();
  } catch {
    return {
      animationsEnabled: false,
      transitionsEnabled: false,
      shadowsEnabled: false,
      blurEnabled: false,
    };
  }
})();

const BLUR = PERF.blurEnabled ? 'blur(8px)' : 'none';
const SHADOW = PERF.shadowsEnabled ? '0 8px 16px rgba(0, 0, 0, 0.1)' : 'none';
const SHADOW_HOVER = PERF.shadowsEnabled ? '0 12px 20px rgba(0, 255, 41, 0.1)' : 'none';
const TRANSITION = PERF.transitionsEnabled ? 'all 0.3s ease' : 'none';
const HOVER_TRANSFORM = PERF.animationsEnabled ? 'translateY(-2px)' : 'none';

export const PoolContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-bottom: 16px; /* Increased spacing between cards */
    color: var(--gray);
    width: 98%; /* Increased from 95% */
    font-size: 14px;
    padding: 15px 0 15px 0; /* Reduced vertical padding from 20px to 15px */
    border-radius: 10px;
    background: linear-gradient(270deg, rgba(10, 10, 10, 0.01) 0%, rgba(10, 10, 10, 0.01) 30.46%), rgba(10, 10, 10, 0.05);
    backdrop-filter: ${BLUR};
    backdrop-saturate: 150%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: ${SHADOW};
    /* Removed will-change to prevent GPU layer creation */
    transition: ${TRANSITION};
    translate: z-0;

    &:hover {
        transform: ${HOVER_TRANSFORM};
        box-shadow: ${SHADOW_HOVER};
        border: 1px solid rgba(66, 201, 63, 0.2);
        background: linear-gradient(270deg, rgba(10, 10, 10, 0.02) 0%, rgba(10, 10, 10, 0.02) 30.46%), rgba(10, 10, 10, 0.1);
    }

    @media (max-width: 1120px) {
        height: auto; /* Changed from fixed 420px to auto */
        min-height: 180px; /* Set minimum height for compact view */
        justify-content: center;
        /* Removed perspective and transform-style for better performance */
        transition: none;
        background: rgba(10, 10, 10, 0.2); /* Simplified to solid color */

        /* Compact view for pools with no staked/reward values */
        &.compact {
            min-height: 150px; /* Reduced height for compact view */
            padding-bottom: 15px; /* Reduced padding for compact view */
        }

        :hover {
            background: rgba(10, 10, 10, 0.25); /* Simplified hover background */
            transform: none; /* Disabled transform on mobile */
        }
    }

    @media (max-width: 1120px) and (min-width: 701px) {
        flex: 1 1 calc(50% - 20px);
        margin-bottom: 16px; /* Increased spacing between cards */
    }

    @media (max-width: 700px) {
        width: calc(50% - 2px); /* Further adjusted to fit two cards per row with a smaller gap */
        max-width: 49.5%; /* Slightly increased percentage */
        margin: 0 0 8px; /* Reduced bottom margin */
        flex: 0 0 calc(50% - 2px); /* Force two cards per row with smaller gap */
        box-sizing: border-box; /* Include padding in width calculation */
        padding: 10px 0 10px 0; /* Further reduced padding for mobile */
        min-width: 0; /* Prevent overflow */
        /* Force disable expensive effects on mobile */
        backdrop-filter: none !important;
        box-shadow: none !important;
        transition: none !important;
        animation: none !important;
    }
`;

export const PoolInfoDesktopContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    color: ${(props) => props.theme.white};
    height: 78%;
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    line-height: 22px;
    font-size: 17px;
    padding-left: 20px;

    @media (max-width: 1120px) {
        display: none;
    }
`;

export const PoolInfoMobileContainer = styled.div`
    color: ${(props) => props.theme.white};
    width: 100%;
    padding-left: 2px; /* Reduced from 5px */
    padding-right: 2px; /* Reduced from 5px */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    font-size: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1120px) {
        display: none;
    }

    @media (max-width: 700px) {
        padding-left: 1px; /* Reduced from 2px */
        padding-right: 1px; /* Reduced from 2px */
        font-size: 11px;
        line-height: 13px;
        width: 100%;
        box-sizing: border-box;
    }
`;

export const PoolPropertyName = styled.div`
    color: rgba(200, 200, 200, 0.9);
    font-size: 10px;
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    font-weight: 500;
    text-shadow: 0 0 8px rgba(200, 200, 200, 0.15);
    position: relative;
    text-align: center; /* Center the label text */

    /* Add subtle underline */
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 25px;
        height: 1px;
        background: rgba(150, 150, 150, 0.3);
    }

    @media (max-width: 700px) {
        font-size: 8px;
        margin-bottom: 2px;
        letter-spacing: 0.5px;
        text-align: center; /* Ensure center alignment on mobile */

        &::after {
            width: 18px;
            bottom: -1px;
        }
    }
`;

export const PoolPropertyValue = styled.div<{ isDollarValue?: boolean }>`
    color: ${props => props.isDollarValue ? 'white' : 'white'}; /* Make TVL values white */
    font-weight: 700;
    font-size: 18px; /* Make all values the same size - 18px for desktop */
    text-shadow: ${props => {
        if (!PERF.shadowsEnabled) return 'none';
        return props.isDollarValue ? 'none' : '0 0 12px rgba(255, 255, 255, 0.3)';
    }};
    transition: ${TRANSITION};
    margin-top: 3px;
    letter-spacing: 0.3px;
    text-align: center; /* Center the value text */
    display: flex;
    justify-content: center; /* Ensure proper centering */
    align-items: center;
    width: 100%;
    @media (prefers-reduced-motion: reduce) {
        transition: none !important;
    }

    @media (max-width: 1120px) {
        font-size: 16px; /* Slightly smaller for tablet */
        text-align: center;
        justify-content: center;
    }

    @media (max-width: 700px) {
        transition: none !important;
        text-shadow: none !important;
        font-size: ${props => props.isDollarValue ? '12px' : '14px'};
        text-align: center;
    }
`;

export const PoolInfoValue = styled.div<{ width?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center align content */
    width: ${({ width }) => width};
    white-space: nowrap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: var(--lightGray);
    text-align: center; /* Ensure text is centered */

    @media (max-width: 1120px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center; /* Keep center alignment for tablet */
        width: 100%;
        font-size: 18px;
        color: ${theme.gray};
        padding-right: 0;
        margin-bottom: 15px;
    }
`;

export const PoolActionsDesktopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding: 16px 24px 24px;

    @media (max-width: 1120px) {
        display: none;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px 0;
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.3px;
`;

export const ModalCloseButton = styled.button`
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.4);
    font-size: 22px;
    cursor: pointer;
    padding: 4px 8px;
    line-height: 1;
    transition: color 0.2s;
    &:hover {
        color: rgba(255, 255, 255, 0.8);
    }
`;

export const ModalDivider = styled.div`
    height: 1px;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%);
    margin: 4px 0;
`;

export const ActionSectionLabel = styled.div`
    font-family: 'Montserrat';
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 8px;
`;

export const ActionButtonsRow = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
`;

export const BasicInfo = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.white};
`;

export const Pacman = styled.img`
    height: 28px;
`;

export const TokenInfo = styled.div`
    min-width: 135px;
    margin-left: 25px;
    @media (max-width: 1120px) {
        margin-right: 20px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: black;
`;

export const ArrowIconsWrapper = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 0;
    padding-right: 20px;
`;

export const StakeButtonMobile = styled.button<{ disabled?: boolean }>`
    width: 50%; /* Reduced from 60% */
    height: 30px; /* Reduced from 34px */
    margin: 6px auto 0; /* Reduced from 8px */
    background: #90ee90; /* Match filter color */
    font-family: 'Korona One';
    font-weight: 500;
    font-size: 16px; /* Reduced from 18px */
    color: #1e1e1e; /* Dark text for better contrast */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    :disabled {
        background: grey;
        border: 0;
    }

    :not(:disabled):hover {
        color: #1e1e1e;
        background: rgba(144, 238, 144, 0.8);
        transform: scale(1.03);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 700px) {
        width: 70%; /* Wider button for better tap target */
        height: 24px; /* Reduced height for mobile */
        font-size: 13px; /* Smaller font for mobile */
        margin: 4px auto 0; /* Reduced margin */
        border-radius: 6px; /* Smaller border radius */
        box-shadow: none; /* Remove shadow for performance */

        :not(:disabled):hover {
            transform: none; /* Disable hover effect on mobile */
            box-shadow: none;
        }
    }
`;

export const PoolActionsMobileContainer = styled.div`
    justify-content: left;
    width: 100%;
    margin-top: 0;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
    /* Removed display: none to allow inline style to work properly */

    @media (min-width: 1120px) {
        display: none;
    }
`;

export const RewardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
    gap: 15px;
`;

export const ButtonBackMobile = styled.img`
    background-color: transparent;
    margin-left: 25px;
    cursor: pointer;
`;

export const PoolLoadingAnimation = styled.img`
    margin-left: 0;
    animation: run 3s infinite;
    @keyframes run {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: 90%;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none !important;
        margin-left: 45%; /* Center it statically */
    }

    @media (max-width: 700px) {
        animation: none !important; /* Disable animation on mobile */
        margin-left: 45%; /* Center it statically */
    }
`;

export const RewardUSDValue = styled.div`
    color: var(--accent-muted);
    font-weight: 600;
    font-size: 18px; /* Match other desktop values */
    text-shadow: 0 0 12px rgba(139, 255, 116, 0.4);
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        text-shadow: 0 0 20px rgba(139, 255, 116, 0.7);
    }

    @media (max-width: 1120px) {
        text-align: center;
        font-size: 16px; /* Slightly smaller for tablet */
    }

    @media (max-width: 700px) {
        animation: none !important; /* Disable animation on mobile */
        text-shadow: 0 0 10px rgba(139, 255, 116, 0.4); /* Static shadow */
        font-size: 14px; /* Smaller for mobile */
        
        &:hover {
            text-shadow: 0 0 10px rgba(139, 255, 116, 0.4); /* No hover change */
        }
    }
`;

export const RewardTokenValue = styled.div`
    white-space: nowrap;
    font-size: 13px;
    color: var(--accent-muted);
    display: flex;
    font-weight: 500;
    text-shadow: 0 0 10px rgba(139, 255, 116, 0.3);
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    &:hover {
        text-shadow: 0 0 18px rgba(139, 255, 116, 0.6);
    }

    @media (max-width: 1120px) {
        text-align: center;
        justify-content: center;
    }

    @media (max-width: 700px) {
        animation: none !important; /* Disable animation on mobile */
        text-shadow: 0 0 8px rgba(139, 255, 116, 0.3); /* Lighter static shadow */
        
        &:hover {
            text-shadow: 0 0 8px rgba(139, 255, 116, 0.3); /* No hover change */
        }
    }
`;

export const ZeroRewardTokenValue = styled.div`
    white-space: nowrap;
    font-size: 13px;
    color: var(--gray);
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 1120px) {
        text-align: center;
        justify-content: center;
    }
`;

export const TimingMobile = styled.div`
    color: ${theme.gray};
    display: flex;
    justify-content: center;
    gap: 3px;
    font-size: 12px; /* Reduced from 13px */
    margin-top: 4px; /* Reduced from 6px */
    opacity: 0.8;

    @media (max-width: 700px) {
        font-size: 10px; /* Smaller font for mobile */
        margin-top: 2px; /* Reduced margin */
        opacity: 0.7; /* Slightly more transparent */
    }
`;

export const ContractLink = styled.div`
    margin-top: 7px;
    font-size: 13px;
    text-decoration: underline;
    color: var(--gray);
`;

export const PoolInfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 8px;
    width: 95%; /* Increased from 90% */
    margin: 12px auto;
    box-sizing: border-box;
    position: relative;

    /* Add subtle divider between rows */
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 5%;
        right: 5%;
        height: 1px;
        background: linear-gradient(
            90deg,
            rgba(40, 40, 40, 0) 0%,
            rgba(60, 60, 60, 0.3) 50%,
            rgba(40, 40, 40, 0) 100%
        );
        z-index: 0;
        pointer-events: none;
    }

    @media (max-width: 700px) {
        gap: 6px;
        margin: 8px auto;
        width: 98%; /* Increased from 94% */

        &::after {
            left: 3%;
            right: 3%;
        }
    }
`;

export const PoolInfoGridCell = styled(PoolInfoValue)`
    background: linear-gradient(270deg, rgba(81, 221, 78, 0.03) 0%, rgba(10, 10, 10, 0.03) 30.46%), rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    padding: 8px 6px;
    margin: 0;
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
        background: linear-gradient(270deg, rgba(81, 221, 78, 0.02) 0%, rgba(54, 54, 54, 0.02) 30.46%);
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
    }

    &:hover::before {
        opacity: 1;
    }

    @media (max-width: 1120px) {
        margin-bottom: 0;
    }

    @media (max-width: 700px) {
        padding: 4px 2px; /* Further reduced padding for mobile */
        min-height: 40px; /* Further reduced height for mobile */
        background: rgba(0, 0, 0, 0.15); /* Simplified background for performance */
        font-size: 11px; /* Smaller font size for mobile */

        /* Disable hover effect on mobile */
        &::before {
            display: none;
        }
    }
`;

export const PoolInfoGridCellSmall = styled(PoolInfoGridCell)`
    font-size: 90%;
    color: var(--newLightGray);
    background: linear-gradient(270deg, rgba(81, 221, 78, 0.02) 0%, rgba(10, 10, 10, 0.02) 30.46%), rgba(0, 0, 0, 0.1);
    min-height: 55px;
`;

// Add new styled component for pool titles
export const PoolTitle = styled.div`
    font-weight: 700; /* Make pool titles bold */
    font-size: 16px;
    color: white;
    text-align: center;
    margin-bottom: 4px;

    @media (max-width: 700px) {
        font-size: 14px;
        font-weight: 700; /* Keep bold on mobile */
        margin-bottom: 3px;
    }
`;

// Update the APR percentage styling
export const APRPercentage = styled.span`
    font-size: 14px;
    font-weight: 600;

    @media (max-width: 700px) {
        font-size: 12px;
    }
`;

const skeletonPulse = css`
    @keyframes skeleton-pulse {
        0% { opacity: 0.15; }
        50% { opacity: 0.25; }
        100% { opacity: 0.15; }
    }
    animation: skeleton-pulse 1.5s ease-in-out infinite;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
`;

export const SkeletonLine = styled.div`
    ${skeletonPulse}
    width: 100%;
    height: 14px;
`;

export const SkeletonBlock = styled.div`
    ${skeletonPulse}
    width: 100%;
    height: 24px;
`;

