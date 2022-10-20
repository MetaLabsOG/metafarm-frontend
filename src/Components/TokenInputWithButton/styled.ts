import styled from 'styled-components';
import { ColorThemed } from '../../theme';

export const TokenInputWithButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 100%;
    justify-content: space-around;

    @media (max-width: 1120px) {
        justify-content: center;
        height: auto;
        width: auto;
        margin: 0 20px 20px 20px;
    }
`;

type BalanceProps = ColorThemed<{ isValid: boolean }>;

export const Balance = styled.div<{ isValid: boolean }>`
    margin-top: 7px;
    margin-left: 5px;
    font-size: 13px;
    white-space: nowrap;
    color: ${({ isValid, theme }: BalanceProps) => (isValid ? theme.gray : theme.red)};
`;

type ActionProps = ColorThemed<{ isActive: boolean }>;

export const Action = styled.div<{ isActive: boolean }>`
    display: flex;
    height: 34px;
    width: 100%;
    position: relative;
    color: ${({ isActive, theme }: ActionProps) => {
        if (isActive) {
            return theme.lightGray;
        }
        return theme.gray;
    }}};
`;

type InputProps = ColorThemed<{ isActive: boolean }>;

export const Input = styled.input<{ isActive: boolean }>`
    background-color: inherit;
    color: ${({ theme, isActive }: InputProps) => (isActive ? theme.white : theme.gray)};
    border: 1px solid ${({ theme, isActive }: InputProps) => (isActive ? theme.lightGray : theme.gray)};
    border-radius: 4px 0 0 4px;
    border-right: none;
    width: 60%;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 50px;
    font-family: 'Montserrat';
    :focus {
        outline: none;
    }
`;

type MaxButtonProps = ColorThemed<unknown>;

export const MaxButton = styled.div<{ isActive: boolean }>`
    position: absolute;
    left: 35%;
    top: 4px;
    padding: 6px;
    color: ${({ theme, isActive }: InputProps) => (isActive ? theme.lightGray : theme.gray)};
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    background-color: transparent;
    :hover {
        color: ${({ theme, isActive }: InputProps) => (isActive ? theme.white : theme.gray)};
    }
`;
