import styled from 'styled-components';
import { theme } from '../../../theme';

export const PoolContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-bottom: 16px; /* Increased spacing between cards */
    color: var(--gray);
    width: 95%;
    font-size: 14px;
    padding: 20px 0 20px 0;
    border-radius: 10px;
    background: linear-gradient(270deg, rgba(81, 221, 78, 0.03) 0%, rgba(54, 54, 54, 0.03) 30.46%), rgba(44, 44, 44, 0.2);
    backdrop-filter: blur(8px);
    backdrop-saturate: 150%;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    will-change: transform;
    translate: z-0;
    transition: all 0.3s ease;

    :hover {
        background: linear-gradient(270deg, rgba(81, 221, 78, 0.05) 0%, rgba(54, 54, 54, 0.05) 30.46%), rgba(44, 44, 44, 0.2);
        transform: translateY(-2px);
    }

    @media (max-width: 1120px) {
        height: auto; /* Changed from fixed 420px to auto */
        min-height: 180px; /* Set minimum height for compact view */
        justify-content: center;
        perspective: 1000px;
        transition: all 0.3s ease;
        transform-style: preserve-3d;
        background: linear-gradient(270deg, rgba(81, 221, 78, 0.03) 0%, rgba(54, 54, 54, 0.03) 30.46%), rgba(30, 30, 30, 0.4);

        :hover {
            background: linear-gradient(270deg, rgba(81, 221, 78, 0.05) 0%, rgba(54, 54, 54, 0.05) 30.46%), rgba(30, 30, 30, 0.5);
            transform: translateY(-2px);
        }
    }

    @media (max-width: 1120px) and (min-width: 701px) {
        flex: 1 1 calc(50% - 20px);
        margin-bottom: 16px; /* Increased spacing between cards */
    }

    @media (max-width: 700px) {
        width: 325px;
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
    padding-left: 20px;
    padding-right: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    font-size: 16px;
    text-align: center;

    @media (min-width: 1120px) {
        display: none;
    }
`;

export const PoolPropertyName = styled.div`
    color: var(--lightGray);
    font-size: 13px;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 400;
`;

export const PoolPropertyValue = styled.div`
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

    /* Apply green color to dollar values */
    &:has(> span:first-child:contains('$')),
    &:has(> div:first-child:contains('$')) {
        color: #8bff74;
        text-shadow: 0 0 10px rgba(139, 255, 116, 0.3);
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
    background: ${theme.lightGreen};
    font-family: 'Korona One';
    font-weight: 500;
    font-size: 16px; /* Reduced from 18px */
    color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;

    :disabled {
        background: grey;
        border: 0;
    }

    :not(:disabled):hover {
        color: green;
        background: black;
        transform: scale(1.03);
    }
`;

export const PoolActionsMobileContainer = styled.div`
    justify-content: left;
    width: 100%;
    margin-top: 0;
    padding-right: 15px;
    padding-left: 15px;
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
`;

export const RewardUSDValue = styled.div`
    color: #8bff74;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(139, 255, 116, 0.3);

    @media (max-width: 1120px) {
        text-align: center;
    }
`;

export const RewardTokenValue = styled.div`
    white-space: nowrap;
    font-size: 13px;
    color: #8bff74; // light green tODO: to constants
    display: flex;
    font-weight: 500;
    text-shadow: 0 0 8px rgba(139, 255, 116, 0.2);

    @media (max-width: 1120px) {
        text-align: center;
        justify-content: center;
    }
`;

export const ZeroRewardTokenValue = styled.div`
    white-space: nowrap;
    font-size: 13px;
    color: var(--gray);
    display: flex;

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
    gap: 6px; /* Reduced from 8px */
    width: 100%;
    margin: 8px 0; /* Reduced from 10px */
`;

export const PoolInfoGridCell = styled(PoolInfoValue)`
    background: linear-gradient(270deg, rgba(81, 221, 78, 0.05) 0%, rgba(54, 54, 54, 0.05) 30.46%), rgba(0, 0, 0, 0.3);
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
`;

export const PoolInfoGridCellSmall = styled(PoolInfoGridCell)`
    font-size: 90%;
    color: #a1a1a1;
    background: linear-gradient(270deg, rgba(81, 221, 78, 0.03) 0%, rgba(54, 54, 54, 0.03) 30.46%), rgba(0, 0, 0, 0.2);
    min-height: 55px;
`;
