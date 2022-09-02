import styled from 'styled-components';
import { theme } from '../../theme';

export const InfoRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${theme.lightGray};
    margin-bottom: 10px;
    white-space: nowrap;
    width: 100%;
`;

export const InfoKey = styled.h3`
    color: inherit;
    font-family: 'Montserrat', serif;
    font-weight: normal;
    font-size: 14px;
`;

export const InfoValue = styled.h3`
    color: inherit;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 14px;
`;
