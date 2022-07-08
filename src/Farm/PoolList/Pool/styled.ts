import styled from 'styled-components';
import { theme } from '../../../theme';

export const PoolContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-bottom: 16px;
    color: ${(props) => props.theme.gray};
    background-color: ${(props) => props.theme.darkGray};
    width: 95%;
    font-size: 14px;
    padding: 20px 0 20px 0;
    border-radius: 10px;

    @media (max-width: 1120px) {
        width: 320px;
        height: 420px;
        margin-bottom: 30px;
        justify-content: center;
    }
`;

export const PoolInfoDesktopContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    color: ${(props) => props.theme.white};
    height: 78%;
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    font-size: 17px;

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
    font-weight: 500;
    line-height: 22px;
    font-size: 17px;
    text-align: center;

    @media (min-width: 1120px) {
        display: none;
    }
`;

export const PoolInfoValue = styled.div<{ width?: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 17px;
    width: ${({ width }) => (width ? `${width}%` : '12.5%')};

    @media (max-width: 1120px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        font-size: 18px;
        color: ${theme.gray};
        margin-left: 0;
        margin-bottom: 15px;
    }
`;

export const PoolActionsDesktopContainer = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 38px;

    @media (max-width: 1120px) {
        display: none;
    }
`;

export const BasicInfo = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
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
    margin-left: 25px;
    @media (max-width: 1120px) {
        margin-bottom: 30px;
        margin-left: 133px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: black;
`;

export const LPTokensIcon = styled.div<{ first?: boolean }>`
    position: absolute;
    left: ${({ first }) => (first ? '0' : '30px')};
    height: 100%;
    //width: 40px;
    border: 0 solid;
    border-radius: 40px;
    background-color: black;
`;

export const LpTokensIconsWrapper = styled.div`
    display: flex;
    position: relative;
    height: 40px;
    width: 85px;
`;

export const ArrowIconsWrapper = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
`;

export const PoolNameMobile = styled.div`
    font-family: 'Krona One';
    font-size: 17px;
    color: white;
    text-align: left;
    white-space: nowrap;
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
    position: absolute;
    margin-left: 25px;
    margin-top: 5px;
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
    @media (max-width: 1120px) {
        font-size: 14px;
        color: #909090;
        text-align: right;
    }
`;

export const ContractLockSuffix = styled.div`
    font-size: 12px;
    color: #838383;
    @media (max-width: 1120px) {
        margin-bottom: 15px;
        text-align: left;
        color: white;
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
