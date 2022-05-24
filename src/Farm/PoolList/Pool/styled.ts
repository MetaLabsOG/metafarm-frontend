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
    padding-top: 16px;
    
    border-radius: 10px;
    padding-bottom: 20px;
`;

export const PoolInfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    color: ${(props) => props.theme.white};
    height: 76px;
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    font-size: 17px;
    margin-left: 20px;
`;

export const PoolInfoValue = styled.div<{ width?: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    width: ${({ width }) => (width ? `${width}%` : '50%')};
`;

export const PoolActionsWrapper = styled.div`
    display: flex;
    margin-top: 28px;
    margin-left: 20px;
`;

export const BasicInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${(props) => props.theme.white};
`;

export const Stake = styled.div`
    display: flex;
    flex-direction: column;
    width: 24%;
    height: 100%;
    justify-content: space-around;
    margin-right: 20px;
`;

export const WithDraw = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 100%;
    justify-content: space-around;
    margin-right: 20px;
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

export const Animation = styled.div`
    position: absolute;
    left: 1px;
    width: 100%;
    background: inherit;
    height: 40px;

    span {
        position: absolute;
        display: block;

        &:first-child {
            top: 0;
            left: 0;
            width: 40%;
            height: 39px;
            border-radius: 4px;
            background: linear-gradient(90deg, transparent, #55D6FF);
            animation: animate1 2s linear infinite;
            filter: hue-rotate(270deg);
        }

        @keyframes animate1{
        0%{
        left: -5%;
        }
        50%,100%{
        left: 60%;
        }
}
    }
`

export const Action = styled.div<{ customColor?: boolean; isActive?: boolean }>`
    display: flex;
    height: 40px;
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

export const Button = styled.button<{ customColor?: boolean; isActive?: boolean, isLoading: boolean }>`
    border: 1px solid;
    background-color: inherit;
    color: ${({ theme, isActive }) => (isActive ? 'inherit' : theme.gray)};
    width: 120px;
    min-height: 40px;
    border-radius: 0 4px 4px 0px;
    cursor: pointer;
    font-family: 'Korona One';
    font-size: 12px;
    ${Action}:hover & {
        color: 'inherit';
    }
    ::before {
        position: absolute;
        top: 5px;
        left: 70%;
        content: ' ';
        background-image: ${({ isLoading }) => (isLoading ? `url(${require('../../../imgs/packman.gif')})` : null)};
        background-position: center center;
        background-size: cover;
        width: 40px;
        height: 70%;
    }
`;

export const Input = styled.input<{ customColor?: boolean; isActive?: boolean }>`
    border: 1px solid;
    background-color: inherit;
    color: ${({ theme, isActive }) => (isActive ? 'inherit' : theme.gray)};
    border-radius: 4px 0 0 4px;
    border-right: none;
    width: 60%;
    padding-left: 10px;
    font-family: 'Korona One';
    ${Action}:hover & {
        color: 'inherit';
    }
    :focus {
        outline: none;
    }
`;

export const MaxButton = styled.div<{hoverColor: string}>`
    position: absolute;
    left: 37%;
    top: 8px;
    padding: 6px;
    color: inherit;
    font-size: 11px;
    color: ${({ theme }) => theme.gray};
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    :hover {
        color: ${({ theme, hoverColor }) => theme[hoverColor]};
    }
`;

export const Claim = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 10%;
    height: 80%;
    margin-right: 10px;
`;

export const ClaimButton = styled.div<{ isActive?: boolean, isLoading: boolean }>`
    width: 95px;
    height: 34px;
    min-height: 40px;
    background-color: inherit;
    position: relative;
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
    ::before {
        position: absolute;
        top:  5px;
        left: 35%;
        content: ' ';
        background-image: ${({ isLoading }) => (isLoading ? `url(${require('../../../imgs/packman.gif')})` : null)};
        background-position: center center;
        background-size: cover;
        width: 40px;
        height: 70%;
    }
`;

export const TokenInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    justify-content: space-between;
    height: 80%;
    margin-left: 10px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: black;
`;

export const GetLpTokenButton = styled.div<{ isActive?: boolean }>`
    border-radius: 4px;
    width: 140px;
    height: 40px;
    background-color: 'inherit';
    color: ${({ theme, isActive }) => (isActive ? theme.green : theme.gray)};
    border: 1px solid;
    display: flex;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
    font-family: 'Korona One';
    :hover {
        background-color: ${({ theme, isActive }) => theme.green};
        color: black;
    }
`;

export const LPTokensIcon = styled.div<{ first?: boolean }>`
    position: absolute;
    left: ${({ first }) => (first ? '5px' : '30px')};
    height: 40px;
    width: 40px;
    border: 1px solid;
    border-radius: 40px;
    color: ${({ theme, first }) => (first ? theme.green : theme.white)};
    background-color: black;
`;

export const LpTokensIconsWrapper = styled.div`
    display: flex;
    position: relative;
    height: 40px;
    width: 85px;
`;
