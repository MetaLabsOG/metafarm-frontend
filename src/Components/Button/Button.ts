import styled from 'styled-components';
import { theme } from '../../theme';

export const Button = styled.button`
    border-radius: 4px;
    width: 137px;
    height: 34px;
    background-color: inherit;
    color: ${theme.green};
    border: 1px solid;
    display: flex;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Korona One';
    :hover {
        background: linear-gradient(270deg, #06a903 1.29%, #00ff29 100%);
        border: 1px solid #009427;
        color: black;
    }

    @media (max-width: 1120px) {
        //margin-left: 0;
    }
`;
