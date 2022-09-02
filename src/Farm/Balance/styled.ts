import styled from 'styled-components';
import { ColorThemed } from '../../theme';

export const AmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;

    @media (max-width: 1120px) {
        width: 320px;
        justify-content: center;

        perspective: 1000px;
    }
`;

export const AmountTitle = styled.div`
    color: var(--gray);
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.02em;

    @media (max-width: 1120px) {
        font-size: 14px;
    }
`;

export const AmountValue = styled.div`
    color: var(--white);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.08em;
`;

export const BalanceList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: var(--newDarkGray);
    height: 91px;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 20px;

    &:first-child {
    }

    @media (max-width: 1120px) {
        width: 320px;
        height: 80px;
        justify-content: center;
        line-height: 18px;

        perspective: 1000px;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
`;
