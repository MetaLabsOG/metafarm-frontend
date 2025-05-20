import styled from 'styled-components';
import { ColorThemed } from '../../theme';

export const AmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
    min-width: 82px;

    @media (max-width: 1120px) {
        //width: 320px;
        justify-content: space-between;
        perspective: 1000px;
        width: 30%;
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
    color: white; /* Changed from #8bff74 to white */
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.08em;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

export const BalanceList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background: linear-gradient(270deg, rgba(54, 54, 54, 0.01) 0%, rgba(54, 54, 54, 0.01) 30.46%), rgba(20, 20, 20, 0.1);
    backdrop-filter: blur(8px);
    backdrop-saturate: 150%;
    height: 91px;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:first-child {
    }

    @media (max-width: 700px) {
        width: 325px;
        height: 80px;
        justify-content: center;
        line-height: 18px;
        background: linear-gradient(270deg, rgba(54, 54, 54, 0.01) 0%, rgba(54, 54, 54, 0.01) 30.46%), rgba(20, 20, 20, 0.1);
        perspective: 1000px;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
`;
