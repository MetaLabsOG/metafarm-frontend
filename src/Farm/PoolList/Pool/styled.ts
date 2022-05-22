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
    padding-top: 10px;
    border-radius: 10px;
    padding-bottom: 20px;
`;

export const PoolInfoContainer = styled.div`
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
    margin-left: 10px;
    width: ${({ width }) => (width ? `${width}%` : '50%')};
`;

export const PoolActionsWrapper = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const HighlightedInfo = styled.div`
    color: ${(props) => props.theme.green};
`;

export const BasicInfo = styled.div`
    color: ${(props) => props.theme.white};
`;

export const Stake = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    justify-content: space-around;
    margin-right: 20px;
`;

export const WithDraw = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
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

export const Button = styled.button<{ customColor?: boolean; isActive?: boolean }>`
    border: 1px solid;
    background-color: inherit;
    color: ${({ theme, isActive }) => (isActive ? 'inherit' : theme.gray)};
    width: 120px;
    min-height: 40px;
    border-radius: 0 4px 4px 0px;
    cursor: pointer;
    font-family: 'Korona One';
    font-size: 14px;
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
    padding-left: 10px;
    font-family: 'Korona One';
    ${Action}:hover & {
        color: 'inherit';
    }
    :focus {
        outline: none;
    }
`;

export const MaxButton = styled.div`
    position: absolute;
    left: 43%;
    top: 12%;
    border: 1px solid;
    padding: 6px;
    border-radius: 10px;
    color: inherit;
    font-size: 11px;
    cursor: pointer;
`;

export const Claim = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 20%;
    height: 80%;
    margin-right: 10px;
`;

export const ClaimButton = styled.div<{ isActive?: boolean }>`
    width: 127px;
    height: 40px;
    min-height: 40px;
    background-color: inherit;
    color: ${({ theme, isActive }) => (isActive ? theme.yellow : theme.gray)};
    border: 1px solid;
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
    width: 17%;
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
