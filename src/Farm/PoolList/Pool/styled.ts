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
        width: 300px;
        height: 320px;
        margin-bottom: 30px;
    }
`;

export const PoolInfoContainer = styled.div``;

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
    height: 78%;
    width: 100%;
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
        margin-left: 0;
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
    }
`;

export const PoolActionsDesktopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
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

export const Claim = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 137px;
    height: 80%;

    @media (max-width: 1120px) {
        justify-content: center;
        height: auto;
        margin: 20px;
    }
`;

export const ClaimButton = styled.div<{ isActive?: boolean }>`
    width: 100%;
    height: 34px;
    background-color: inherit;
    color: ${({ theme, isActive }) => (isActive ? theme.yellow : theme.gray)};
    border: 1px solid;
    font-size: 12px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Korona One';
    :hover {
        color: ${({ theme, isActive }) => (isActive ? theme.yellow : theme.gray)};
    }
`;

export const TokenInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    justify-content: space-between;
    height: 80%;

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
    font-size: 14px;
    color: #909090;
`;

export const StakeButtonMobile = styled.button<{ disabled?: boolean }>`
    width: 200px;
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
    width: 95%;
    margin-top: 0;

    @media (min-width: 1120px) {
        display: none;
    }
`;
