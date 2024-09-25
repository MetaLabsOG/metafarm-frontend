import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { WalletActionButton } from '../common/styled';

export const MenuItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    text-transform: capitalize;
    font-family: 'Matadina';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.04em;

    :hover {
        color: var(--lightGreen);
        text-shadow: 0 4px 28px #b8368c, 0 2px 10px rgba(29, 247, 3, 0.3);
    }

    &.active {
        color: var(--lightGreen);
        text-shadow: 0 4px 28px #5cfc3c, 0 2px 10px rgba(29, 247, 3, 0.3);
    }
`;

export const MenuItemsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 370px;
    margin-left: 40px;
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
`;

export const Logo = styled.img`
    margin: auto;
    display: flex;
`;

export const Burger = styled.img`
    display: none;
    cursor: pointer;
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
    margin: auto;
    @media (max-width: 640px) {
        margin: auto;
    }

    @media (max-width: 490px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const MenuContainer = styled.div`
    left: 0;
    position: fixed;
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: 10;
    background: var(--backgroundCard);
`;

export const ExchangeRatesContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
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
`;

export const ExchangeRate = styled.a`
    font-family: 'Montserrat', serif;
    font-size: 13px;
    font-weight: 500;
    margin: auto;
    right: 0;
    padding-left: 5px;
    color: white;
`;

export const BurgerMenuContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    position: fixed;
    left: 0;
    background: var(--backgroundCard);
    padding-left: 20px;
    z-index: 10;
    padding-bottom: 20px;
`;

export const FooterContainer = styled.div`
    width: 100% !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 10px;
    padding: 15px 30px 15px 30px;
    font-family: 'Montserrat', serif;

    @media (max-width: 640px) {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 10px;
    }
`;

export const FooterItem = styled.div`
    text-align: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--newnewGray);
`;

export const FooterText = styled.div`
    display: flex;
    gap: 4px;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;
