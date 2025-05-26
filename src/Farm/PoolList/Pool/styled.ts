import styled from 'styled-components';
import { theme } from '../../../theme';

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
    backdrop-filter: blur(8px);
    backdrop-saturate: 150%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    will-change: transform;
    transition: all 0.3s ease;
    translate: z-0;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 20px rgba(0, 255, 41, 0.1);
        border: 1px solid rgba(66, 201, 63, 0.2);
        background: linear-gradient(270deg, rgba(10, 10, 10, 0.02) 0%, rgba(10, 10, 10, 0.02) 30.46%), rgba(10, 10, 10, 0.1);
    }

    @media (max-width: 1120px) {
        height: auto; /* Changed from fixed 420px to auto */
        min-height: 180px; /* Set minimum height for compact view */
        justify-content: center;
        perspective: 1000px;
        transition: all 0.3s ease;
        transform-style: preserve-3d;
        background: linear-gradient(270deg, rgba(10, 10, 10, 0.01) 0%, rgba(10, 10, 10, 0.01) 30.46%), rgba(10, 10, 10, 0.2);

        /* Compact view for pools with no staked/reward values */
        &.compact {
            min-height: 150px; /* Reduced height for compact view */
            padding-bottom: 15px; /* Reduced padding for compact view */
        }

        :hover {
            background: linear-gradient(270deg, rgba(10, 10, 10, 0.02) 0%, rgba(10, 10, 10, 0.02) 30.46%), rgba(10, 10, 10, 0.25);
            transform: translateY(-2px);
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

        &::after {
            width: 18px;
            bottom: -1px;
        }
    }
`;

export const PoolPropertyValue = styled.div<{ isDollarValue?: boolean }>`
    color: ${props => props.isDollarValue ? '#8bff74' : 'white'};
    font-weight: 700;
    font-size: 16px;
    text-shadow: ${props => props.isDollarValue 
        ? '0 0 12px rgba(139, 255, 116, 0.4)' 
        : '0 0 12px rgba(255, 255, 255, 0.3)'};
    transition: all 0.3s ease;
    margin-top: 3px;
    letter-spacing: 0.3px;
    animation: ${props => props.isDollarValue ? 'green-glow' : 'subtle-glow'} 3s infinite alternate;

    @keyframes subtle-glow {
        0% {
            text-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
        }
        100% {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.5);
        }
    }

    @keyframes green-glow {
        0% {
            text-shadow: 0 0 12px rgba(139, 255, 116, 0.4);
        }
        100% {
            text-shadow: 0 0 18px rgba(139, 255, 116, 0.6);
        }
    }

    /* Add subtle animation on hover */
    &:hover {
        transform: translateY(-1px);
        text-shadow: ${props => props.isDollarValue 
            ? '0 0 20px rgba(139, 255, 116, 0.7)' 
            : '0 0 20px rgba(255, 255, 255, 0.6)'};
    }

    /* Respect user's motion preferences */
    @media (prefers-reduced-motion: reduce) {
        animation: none !important;
        transition: none !important;
        
        &:hover {
            transform: none;
        }
    }

    @media (max-width: 700px) {
        font-size: 12px;
        font-weight: 600;
        margin-top: 2px;
        text-shadow: ${props => props.isDollarValue 
            ? '0 0 10px rgba(139, 255, 116, 0.4)' 
            : '0 0 10px rgba(255, 255, 255, 0.3)'};
        animation: none !important; /* Disable all animations on mobile */
        transition: none !important; /* Disable transitions */

        /* Simplified hover for mobile */
        &:hover {
            transform: none; /* Disable transform */
            text-shadow: ${props => props.isDollarValue 
                ? '0 0 10px rgba(139, 255, 116, 0.4)' 
                : '0 0 10px rgba(255, 255, 255, 0.3)'}; /* Keep static shadow */
        }
    }
`;

export const PoolInfoValue = styled.div<{ width?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${({ width }) => width};
    white-space: nowrap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: var(--lightGray);

    @media (max-width: 1120px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        font-size: 18px;
        color: ${theme.gray};
        padding-right: 0;
        margin-bottom: 15px;
    }
`;

export const PoolActionsDesktopContainer = styled.div`
    display: flex;
    margin-top: 38px;
    gap: 25px;
    width: 100%;
    padding: 0 20px;

    @media (max-width: 1120px) {
        display: none;
    }
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
    color: #8bff74;
    font-weight: 600;
    text-shadow: 0 0 12px rgba(139, 255, 116, 0.4);
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: reward-glow 3s infinite alternate;

    @keyframes reward-glow {
        0% {
            text-shadow: 0 0 12px rgba(139, 255, 116, 0.4);
        }
        100% {
            text-shadow: 0 0 18px rgba(139, 255, 116, 0.6);
        }
    }

    &:hover {
        text-shadow: 0 0 20px rgba(139, 255, 116, 0.7);
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none !important;
        
        &:hover {
            text-shadow: 0 0 12px rgba(139, 255, 116, 0.4); /* Keep static shadow */
        }
    }

    @media (max-width: 1120px) {
        text-align: center;
    }

    @media (max-width: 700px) {
        animation: none !important; /* Disable animation on mobile */
        text-shadow: 0 0 10px rgba(139, 255, 116, 0.4); /* Static shadow */
        
        &:hover {
            text-shadow: 0 0 10px rgba(139, 255, 116, 0.4); /* No hover change */
        }
    }
`;

export const RewardTokenValue = styled.div`
    white-space: nowrap;
    font-size: 13px;
    color: #8bff74; // light green tODO: to constants
    display: flex;
    font-weight: 500;
    text-shadow: 0 0 10px rgba(139, 255, 116, 0.3);
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    animation: token-glow 3s infinite alternate;

    @keyframes token-glow {
        0% {
            text-shadow: 0 0 10px rgba(139, 255, 116, 0.3);
        }
        100% {
            text-shadow: 0 0 15px rgba(139, 255, 116, 0.5);
        }
    }

    &:hover {
        text-shadow: 0 0 18px rgba(139, 255, 116, 0.6);
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none !important;
        
        &:hover {
            text-shadow: 0 0 10px rgba(139, 255, 116, 0.3); /* Keep static shadow */
        }
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
    color: #a1a1a1;
    background: linear-gradient(270deg, rgba(81, 221, 78, 0.02) 0%, rgba(10, 10, 10, 0.02) 30.46%), rgba(0, 0, 0, 0.1);
    min-height: 55px;
`;
