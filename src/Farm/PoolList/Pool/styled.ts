import styled from 'styled-components';

export const PoolConainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 150px;
    border-bottom: 1px solid;
    margin-top: 10px;
    color: ${(props) => props.theme.gray};
    width: 100%;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const PoolInfo = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.white};
    height: 75%;
    width: 65%;
`;

export const HighlightedInfo = styled.div`
    color: ${(props) => props.theme.green};
`;

export const Stake = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    justify-content: space-around;
`;

export const WithDraw = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    justify-content: space-around;
`;

export const ActionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Balance = styled.div`
    margin-top: 12px;
    font-size: 14px;
`;

export const Action = styled.div<{ customColor?: boolean }>`
    display: flex;
    height: 40px;
    width: 100%;
    color: ${(props) => (props.customColor ? props.theme.blue : props.theme.green)};
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
        color: inherit;
    }
`;

export const Input = styled.input<{ customColor?: boolean; isActive?: boolean }>`
    border: 1px solid;
    background-color: inherit;
    color: ${({ theme, isActive }) => (isActive ? 'inherit' : theme.gray)};
    border-radius: 4px 0 0 4px;
    border-right: none;
    width: 50%;
    padding-left: 10px;
    font-family: 'Korona One';
    ${Action}:hover & {
        color: inherit;
    }
    :focus {
        outline: none;
    }
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
        color: ${(props) => props.theme.yellow};
    }
`;

export const TokenInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
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
