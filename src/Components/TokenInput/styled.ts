import styled from 'styled-components';
import { ColorThemed } from '../../theme';

export const TokenInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`;

type InputProps = ColorThemed<{ isActive: boolean }>;

export const Input = styled.input<{ isActive: boolean }>`
    width: 100%;
    height: 46px;
    background-color: inherit;
    color: ${({ theme, isActive }: InputProps) => (isActive ? theme.white : theme.gray)};
    border: 1px solid ${({ theme, isActive }: InputProps) => (isActive ? theme.lightGray : theme.gray)};
    border-radius: 4px;
    padding-left: 10px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    :focus {
        outline: none;
    }
`;

export const MaxButton = styled.div`
    position: absolute;
    right: 3%;
    top: 7px;
    padding: 6px;
    color: var(--lightGray);
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    background-color: inherit;
    :hover {
        color: var(--white);
    }
`;

type BalanceProps = ColorThemed<{ isValid: boolean }>;

export const Balance = styled.div<{ isValid: boolean }>`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    margin-top: 7px;
    margin-left: 5px;
    white-space: nowrap;
    color: ${({ isValid, theme }: BalanceProps) => (isValid ? theme.gray : theme.red)};
`;
