import styled, { css, keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { WalletActionButton } from '../common/styled';
import {
  getOptimizedBackdropFilter,
  getOptimizedBoxShadow,
  getOptimizedGradient,
  isMobileDevice,
  isTouchDevice
} from '../utils/mobileOptimizations';

// Add global keyframes for wobble animation
const wobble = keyframes`
  0% { transform: none; }
  15% { transform: translateX(-2px) rotate(-2deg); }
  30% { transform: translateX(3px) rotate(2deg); }
  45% { transform: translateX(-3px) rotate(-1deg); }
  60% { transform: translateX(2px) rotate(1deg); }
  75% { transform: translateX(-1px) rotate(-1deg); }
  100% { transform: none; }
`;

export const MenuItem = styled(NavLink as any)`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-family: var(--font-body);
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 0.06em;
    position: relative;
    padding: 5px 0;
    transition: color 0.3s ease, text-shadow 0.3s ease;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 10%;
        width: 80%;
        height: 2px;
        background: rgba(144, 238, 144, 0.7);
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    /* Hover effects only on non-touch devices */
    ${!isTouchDevice() && css`
        :hover {
            color: var(--lightGreen);
            text-shadow: 0 4px 28px var(--text-primary), 0 2px 10px rgba(29, 247, 3, 0.3);
            animation: ${wobble} 0.5s;

            &::after {
                transform: scaleX(1);
            }
        }
    `}

    /* Always show active state */
    &.active {
        color: var(--lightGreen);
        text-shadow: 0 4px 28px var(--text-primary), 0 2px 10px rgba(29, 247, 3, 0.3);

        &::after {
            transform: scaleX(1);
        }
    }
`;

export const MenuItemsContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    margin-left: 20px;
    @media (max-width: 979px) {
        display: none;
    }
`;

export const MenuItemsBurger = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 500px;
    padding: 20px;
    gap: 30px;
`;

export const LogoWithMargin = styled.img`
    margin: auto;
    display: flex;
    margin-bottom: 3px;
    height: 28px; /* Further reduced from 32px */
`;

export const Logo = styled.img`
    margin: auto;
    display: flex;
    height: 20px; /* Reduced from 24px */
`;

export const Burger = styled.img`
    display: none;
    cursor: pointer;

    &:focus {
        outline: 2px solid var(--lightGreen);
        border-radius: 4px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    @media (max-width: 970px) {
        display: flex;
        margin-left: 20px;
    }
    @media (max-width: 490px) {
        order: 3;
    }
`;

export const MainMenu = styled.div`
    display: flex;
    padding-left: 30px;
    padding-right: 0;
    width: 100%;
    align-items: center;
    height: 100%;
    margin: 0;

    @media (max-width: 640px) {
        margin: auto;
    }

    @media (max-width: 490px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const MenuContainer = styled.header`
    left: 0;
    position: fixed;
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: 10;
    background: ${getOptimizedGradient('rgba(10, 10, 10, 0.3)', 'rgba(10, 10, 10, 0.4)')}; /* Less transparent for better visibility */
    backdrop-filter: ${getOptimizedBackdropFilter('blur(10px)')};
    border-bottom: none; /* Made border invisible */
    box-shadow: ${getOptimizedBoxShadow('0 8px 24px rgba(0, 0, 0, 0.15)')};
    transition: background 0.3s ease, box-shadow 0.3s ease;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(255, 255, 255, 0) 100%);
    }
`;

export const ExchangeRatesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    height: 100%;
    @media (max-width: 490px) {
        display: none;
    }
`;

export const ExchangeRatesBurger = styled.div`
    width: 200px;
    padding: 20px;
    display: flex;
    justify-content: left;

    @media (min-width: 490px) {
        display: none;
    }
`;

export const AssetPriceWithLogo = styled(WalletActionButton)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    height: 32px;
    margin: 0 5px;

    /* Hover animation only on non-touch devices */
    ${!isTouchDevice() && css`
        :hover {
            animation: ${wobble} 0.5s;
        }
    `}
`;

export const ExchangeRate = styled.span`
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 600;
    margin: auto;
    right: 0;
    padding-left: 5px;
    color: white;
    letter-spacing: 0.02em;
    font-feature-settings: "tnum" on, "lnum" on;
    transition: color 0.3s ease, text-shadow 0.3s ease;

    /* White color for all values with subtle text shadow */
    &.non-zero {
        color: white;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
`;

export const BurgerMenuContainer = styled.nav`
    margin-top: 50px;
    width: 100%;
    position: fixed;
    left: 0;
    background: ${getOptimizedGradient('rgba(30, 30, 30, 0.5)', 'rgba(30, 30, 30, 0.6)')}; /* Less transparent for better visibility */
    backdrop-filter: ${getOptimizedBackdropFilter('blur(10px)')};
    padding-left: 20px;
    z-index: 10;
    padding-bottom: 20px;
    border-bottom: none; /* Made border invisible */
    box-shadow: ${getOptimizedBoxShadow('0 8px 24px rgba(0, 0, 0, 0.15)')};

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0) 100%);
    }
`;

export const FooterContainer = styled.footer`
    width: 100% !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 10px;
    padding: 15px 30px 15px 30px;
    font-family: var(--font-body);
    background: ${getOptimizedGradient('rgba(30, 30, 30, 0.5)', 'rgba(30, 30, 30, 0.8)')};
    backdrop-filter: ${getOptimizedBackdropFilter('blur(8px)')};
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    z-index: 5;
    position: relative;

    .footer-social {
        opacity: 0.55;
        transition: opacity 0.2s ease;
        &:hover {
            opacity: 1;
        }
    }

    @media (max-width: 640px) {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 10px;
    }
`;

export const FooterItem = styled.div`
    text-align: center;
    font-family: var(--font-body);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--newnewGray);
`;

export const FooterText = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const FooterPoweredBy = styled.div`
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 400;
    color: var(--gray);
    opacity: 0.6;
    letter-spacing: 0.02em;
`;
