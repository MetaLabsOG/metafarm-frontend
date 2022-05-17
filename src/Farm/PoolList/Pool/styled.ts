import styled from 'styled-components';

export const PoolConainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 170px;
    border-bottom: 1px solid;
    margin-top: 10px;
    color: ${(props) => props.theme.gray};
    width: 100%;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 20px;
`;

export const PoolInfo = styled.div`
    display: flex;
    justify-content: space-around;
    color: ${(props) => props.theme.white};
    height: 78%;
`;

export const PoolInfoValue = styled.div<{ width?: number }>`
    margin-left: 6%;
    width: ${({ width }) => (width ? `${width}%` : '50%')};
`;

export const PoolActions = styled.div`
    display: flex;
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
    width: 140px;
    min-height: 40px;
    border-radius: 0 4px 4px 0px;
    cursor: pointer;
    font-family: 'Korona One';
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
    :hover {
        color: ${({ theme, isActive }) => (isActive ? theme.yellow : theme.gray)};
    }
`;

export const TokenInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    color: ${(props) => props.theme.green};
    justify-content: space-between;
    height: 77%;
    margin-left: 10px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: black;
`;

export const GetLpTokenButton = styled.div<{ isActive?: boolean }>`
    border-radius: 4px;
    width: 160px;
    height: 40px;
    background-color: 'inherit';
    color: ${({ theme, isActive }) => (isActive ? theme.green : theme.gray)};
    border: 1px solid;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
    :hover {
        background-color: ${({ theme, isActive }) => theme.green};
        color: black;
    }
`;
