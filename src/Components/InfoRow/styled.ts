import styled from 'styled-components';
import { theme } from '../../theme';

export const InfoRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--newLightGray);
    font-weight: 400;
    line-height: 17px;
    margin-bottom: 10px;
    white-space: nowrap;
    width: 100%;
`;

export const InfoKey = styled.h3`
    color: var(--gray);
    font-family: var(--font-body);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
`;

export const InfoValue = styled.h3`
    color: inherit;
    font-family: var(--font-body);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
`;
