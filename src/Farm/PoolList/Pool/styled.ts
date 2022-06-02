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
`;

export const PoolInfoContainer = styled.div`
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
`;

export const PoolInfoValue = styled.div<{ width?: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 17px;
    width: ${({ width }) => (width ? `${width}%` : '12.5%')};
`;

export const PoolActionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 84%;
    margin-top: 38px;
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

export const Stake = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 100%;
    justify-content: space-around;
`;

export const WithDraw = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 100%;
    justify-content: space-around;
`;

export const ActionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Balance = styled.div<{ isValid: boolean }>`
    margin-top: 12px;
    font-size: 13px;
    color: ${({ isValid, theme }) => (isValid ? theme.gray : theme.red)};
`;

export const Action = styled.div<{ customColor?: boolean; isActive?: boolean }>`
    display: flex;
    height: 34px;
    width: 100%;
    position: relative;
    color: ${({ isActive, theme, customColor }) => {
        if (customColor && isActive) {
            return theme.blue;
        }
        if (!customColor && isActive) {
            return theme.green;
        }
        return theme.gray;
    }}};
`;

export const Button = styled.button<{ customColor?: boolean; isActive?: boolean }>`
    border: 1px solid;
    background-color: inherit;
    color: ${({ theme, isActive }) => (isActive ? 'inherit' : theme.gray)};
    width: 120px;
    min-height: 33px;
    border-radius: 0 4px 4px 0px;
    cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
    font-family: 'Korona One';
    font-size: 12px;
    ${Action}:hover & {
        color: 'inherit';
    }
`;

export const Input = styled.input<{ customColor?: boolean; isActive?: boolean }>`
    border: 1px solid;
    background-color: inherit;
    color: ${({ theme, isActive }) => (isActive ? 'inherit' : theme.gray)};
    border-radius: 4px 0 0 4px;
    border-right: none;
    width: 60%;
    font-size: 11px;
    padding-left: 10px;
    font-family: 'Korona One';
    ${Action}:hover & {
        color: 'inherit';
    }
    :focus {
        outline: none;
    }
`;

export const Pacman = styled.img`
    height: 28px;
`;

export const MaxButton = styled.div`
    position: absolute;
    left: 35%;
    top: 4px;
    padding: 6px;
    color: ${({ theme }) => theme.gray};
    font-size: 11px;
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    :hover {
        color: inherit;
    }
`;

export const Claim = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 137px;
    height: 80%;
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
`;

export const ArrowIconsWrapper = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
`;
