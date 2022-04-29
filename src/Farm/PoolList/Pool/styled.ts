import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const PoolConainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 137px;
    border-bottom: 1px solid;
    margin-top: 10px;
    color: ${(props) => props.theme.gray};
    width: 100%;
    font-size: 14px;
`;

export const PoolInfo = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.white};
    width: 65%;
`;

export const HighlightedInfo = styled.div`
    color: ${(props) => props.theme.green};
`;

export const Stake = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    justify-content: space-around;
`;

export const WithDraw = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    justify-content: space-around;
`;

export const Action = styled.div<{ customColor?: boolean }>`
    display: flex;
    height: 40px;
    width: 100%;
    color: ${(props) => (props.customColor ? props.theme.blue : props.theme.green)};
`;

export const Button = styled.button<{ customColor?: boolean }>`
    border: 1px solid;
    background-color: inherit;
    color: ${(props) => props.theme.gray};
    width: 140px;
    border-radius: 0 4px 4px 0px;
    cursor: pointer;
    font-family: 'Korona One';
    ${Action}:hover & {
        color: inherit;
    }
`;

export const Input = styled(InputMask)<{ customColor?: boolean }>`
    border: 1px solid;
    background-color: inherit;
    color: ${(props) => props.theme.gray};
    border-radius: 4px 0 0 4px;
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
    margin-right: 10px;
`;

export const ClaimButton = styled.div`
    width: 127px;
    height: 40px;
    background-color: inherit;
    color: ${(props) => props.theme.gray};
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
    justify-content: space-evenly;
    margin-left: 10px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: black;
`;

export const GetLpTokenButton = styled.div`
    border-radius: 4px;
    width: 160px;
    height: 40px;
    background-color: ${(props) => props.theme.green};
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
`;
