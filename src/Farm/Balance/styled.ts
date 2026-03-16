import styled from 'styled-components';
import { ColorThemed } from '../../theme';

export const AmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
    min-width: 82px;
    position: relative;
    padding: 12px 8px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
        transform: translateY(-2px);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 20%;
        width: 60%;
        height: 2px;
        background: rgba(144, 238, 144, 0.5);
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: scaleX(1);
    }

    @media (max-width: 1120px) {
        justify-content: space-between;
        width: 30%;
    }
`;

export const AmountTitle = styled.div`
    color: var(--gray);
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.02em;
    transition: color 0.3s ease;
    font-family: var(--font-body);
    text-transform: uppercase;
    font-size: 14px;

    ${AmountContainer}:hover & {
        color: rgba(255, 255, 255, 0.8);
    }

    @media (max-width: 1120px) {
        font-size: 13px;
    }
`;

export const AmountValue = styled.div`
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.04em;
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
    transition: transform 0.3s ease, text-shadow 0.3s ease;
    font-feature-settings: "tnum" on, "lnum" on;
    font-family: var(--font-body);
    ${AmountContainer}:hover & {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
        transform: scale(1.05);
    }

    &.non-zero {
        color: white;
        text-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
    }
`;

export const BalanceList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background: rgba(10, 10, 10, 0.15); /* Almost black and more transparent */
    backdrop-filter: blur(10px);
    backdrop-saturate: 150%;
    height: 91px;
    align-items: center;
    font-family: var(--font-body);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border-radius: 16px;
    border: none; /* Made border invisible */
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(255, 255, 255, 0) 100%);
    }

    &:hover {
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    @media (max-width: 700px) {
        width: 325px;
        height: 80px;
        justify-content: center;
        line-height: 18px;
        background: rgba(10, 10, 10, 0.4);
        backdrop-filter: none;
        border-radius: 12px;
    }
`;
