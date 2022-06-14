import styled from 'styled-components';

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
        font-size: 20px;
        color: #909090;
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
    width: 160px;

    @media (max-width: 1120px) {
        height: auto;
        padding: 0 0 30px 20px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: black;
`;

export const GetLpTokenButton = styled.div<{ isActive?: boolean }>`
    border-radius: 4px;
    width: 137px;
    height: 34px;
    background-color: 'inherit';
    color: ${({ theme, isActive }) => (isActive ? theme.green : theme.gray)};
    border: 1px solid;
    display: flex;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 20px;
    cursor: pointer;
    font-family: 'Korona One';
    :hover {
        background-color: ${({ theme, isActive }) => theme.green};
        color: black;
    }

    @media (max-width: 1120px) {
        margin-left: 0;
    }
`;

export const LPTokensIcon = styled.div<{ first?: boolean }>`
    position: absolute;
    left: ${({ first }) => (first ? '0' : '30px')};
    height: 40px;
    width: 40px;
    border: 0px solid;
    border-radius: 40px;
    // color: ${({ theme, first }) => (first ? theme.green : theme.white)};
    background-color: black;
`;

export const LpTokensIconsWrapper = styled.div`
    display: flex;
    position: relative;
    height: 40px;
    width: 85px;

    @media (max-width: 1120px) {
        margin: 10px auto 10px auto;
    }
`;

export const ArrowIconsWrapper = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
`;

export const PoolNameMobile = styled.div`
    font-size: 18px;
    color: #909090;
    margin-bottom: 10px;
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

export const ButtonBackMobile = styled.button`
    background-color: transparent;
    position: absolute;
    font-family: 'Krona One';
    font-size: 16px;
    margin-left: 210px;
    margin-bottom: 10px;
    color: #676767;
    border: 0;
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
    @media (max-width: 1120px) {
        font-size: 14px;
        color: #909090;
    }
`;
