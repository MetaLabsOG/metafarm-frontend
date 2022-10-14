import styled from 'styled-components';
import { ColorThemed, theme } from '../../../theme';

export const PoolContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-bottom: 16px;
    color: var(--gray);
    background-color: var(--newGray);
    width: 95%;
    font-size: 14px;
    padding: 20px 0 20px 0;
    border-radius: 10px;

    :hover {
        background: linear-gradient(270deg, rgba(92, 252, 60, 0.03) 0%, rgba(24, 24, 24, 0.03) 30.46%), #1c1c1c;
    }

    @media (max-width: 1120px) {
        width: 320px;
        height: 420px;
        margin-bottom: 30px;
        justify-content: center;

        perspective: 1000px;
        transition: transform 0.6s;
        transform-style: preserve-3d;
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
    padding-left: 40px;
    padding-right: 40px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    line-height: 22px;
    font-size: 17px;
    text-align: center;

    @media (min-width: 1120px) {
        display: none;
    }
`;

export const PoolInfoValue = styled.div<{ width?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 20px;
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
    width: 100%;
    height: 44px;
    margin: auto;
    background: linear-gradient(270deg, #06a903 1.29%, #00ff29 100%);
    font-family: 'Korona One';
    font-size: 16px;
    text-transform: uppercase;
    color: black;
    border: 1px solid #03a100;
    border-radius: 4px;
    cursor: pointer;

    :disabled {
        background: grey;
        border: 0;
    }

    :not(:disabled):hover {
        color: green;
        background: black;
    }
`;

export const PoolActionsMobileContainer = styled.div`
    justify-content: left;
    width: 100%;
    margin-top: 0;
    padding-right: 15px;
    padding-left: 15px;

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
    @media (max-width: 1120px) {
        text-align: right;
    }
`;

export const RewardTokenValue = styled.div`
    white-space: nowrap;
    //font-size: 14px;
    color: var(--gray);
    @media (max-width: 1120px) {
        font-size: 14px;
        text-align: right;
    }
`;

export const TimingMobile = styled.div`
    color: ${theme.gray};
    display: flex;
    justify-content: center;
    gap: 3px;
    font-size: 15px;
    margin-top: 10px;
`;

export const ContractLink = styled.div`
    margin-top: 7px;
    font-size: 13px;
    text-decoration: underline;
    color: var(--gray);
`;
