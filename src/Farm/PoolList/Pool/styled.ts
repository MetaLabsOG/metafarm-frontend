import styled from 'styled-components';
import { theme } from '../../../theme';

export const PoolContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-bottom: 8px; /* Reduced from 16px */
    color: var(--gray);
    background-color: var(--backgroundModal);
    width: 95%;
    font-size: 14px;
    padding: 20px 0 20px 0;
    border-radius: 10px;

    :hover {
        background: linear-gradient(270deg, rgba(81, 221, 78, 0.06) 0%, rgba(54, 54, 54, 0.06) 30.46%), #363636;
    }

    @media (max-width: 1120px) {
        height: auto; /* Changed from fixed 420px to auto */
        min-height: 180px; /* Set minimum height for compact view */
        justify-content: center;
        perspective: 1000px;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        background-color: var(--backgroundCard);

        :hover {
            background: var(--backgroundCard);
        }
    }

    @media (max-width: 1120px) and (min-width: 701px) {
        flex: 1 1 calc(50% - 20px);
        margin-bottom: 8px; /* Reduced from 0 */
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
    padding-left: 8px;
    color: white;
    font-size: 14px;
`;

export const PoolPropertyValue = styled.div`
    padding-right: 4px;
    color: white;
    font-weight: 500;
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
    display: none; /* Hide by default, will be shown when needed */

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
    color: white;

    @media (max-width: 1120px) {
        text-align: right;
    }
`;

export const RewardTokenValue = styled.div`
    white-space: nowrap;
    font-size: 13px;
    color: #8bff74; // light green tODO: to constants
    display: flex;

    @media (max-width: 1120px) {
        text-align: right;
    }
`;

export const ZeroRewardTokenValue = styled.div`
    white-space: nowrap;
    font-size: 13px;
    color: var(--gray);
    display: flex;

    @media (max-width: 1120px) {
        text-align: right;
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
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    padding: 4px 4px; /* Reduced from 6px */
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 28px; /* Reduced from 32px */

    @media (max-width: 1120px) {
        margin-bottom: 0;
    }
`;

export const PoolInfoGridCellSmall = styled(PoolInfoGridCell)`
    font-size: 90%;
    color: #a1a1a1;
    background-color: rgba(0, 0, 0, 0.2);
    height: 26px; /* Reduced from 28px */
`;
