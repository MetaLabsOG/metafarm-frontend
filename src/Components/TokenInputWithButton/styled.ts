import styled from 'styled-components';

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

export const Balance = styled.div<{ isValid: boolean }>`
    margin-top: 7px;
    margin-left: 5px;
    font-size: 13px;
    color: ${({ isValid, theme }) => (isValid ? theme.gray : theme.red)};
`;

export const Action = styled.div<{ blueColor?: boolean; isActive?: boolean }>`
    display: flex;
    height: 34px;
    width: 100%;
    position: relative;
    color: ${({ isActive, theme, blueColor }) => {
        if (blueColor && isActive) {
            return theme.blue;
        }
        if (!blueColor && isActive) {
            return theme.green;
        }
        return theme.gray;
    }}};
`;

export const Input = styled.input<{ blueColor?: boolean; isActive?: boolean }>`
    border: 1px solid;
    background-color: inherit;
    color: ${({ theme, isActive }) => (isActive ? 'inherit' : theme.gray)};
    border-radius: 4px 0 0 4px;
    border-right: none;
    width: 60%;
    font-size: 14px;
    padding-left: 10px;
    font-family: 'Montserrat';
    ${Action}:hover & {
        color: inherit;
    }
    :focus {
        outline: none;
    }
`;

export const MaxButton = styled.div`
    position: absolute;
    left: 35%;
    top: 4px;
    padding: 6px;
    color: ${({ theme }) => theme.gray};
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    background-color: ${(props) => props.theme.darkGray};
    :hover {
        color: inherit;
    }
`;
