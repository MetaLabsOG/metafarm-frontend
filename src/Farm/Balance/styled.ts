import styled, { keyframes } from 'styled-components';
import { ColorThemed } from '../../theme';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

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
        left: 50%;
        width: 0;
        height: 2px;
        background: rgba(144, 238, 144, 0.5);
        transition: width 0.3s ease, left 0.3s ease;
    }

    &:hover::after {
        width: 60%;
        left: 20%;
    }

    @media (max-width: 1120px) {
        justify-content: space-between;
        perspective: 1000px;
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
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
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
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    font-feature-settings: "tnum" on, "lnum" on;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;

    ${AmountContainer}:hover & {
        text-shadow: 0 0 15px rgba(144, 238, 144, 0.5);
        transform: scale(1.05);
    }

    &.pulse {
        animation: ${pulseAnimation} 1s ease;
    }

    &.non-zero {
        color: rgba(144, 238, 144, 0.9);
        text-shadow: 0 0 10px rgba(144, 238, 144, 0.3);
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border-radius: 16px;
    border: none; /* Made border invisible */
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
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
        background: rgba(10, 10, 10, 0.15); /* Almost black and more transparent */
        backdrop-filter: blur(10px);
        perspective: 1000px;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        border-radius: 12px;
    }
`;
