import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuItem = styled(NavLink)`
    color: var(--white);
    cursor: pointer;
    position: relative;
    //font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Korona One';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 12px;
    letter-spacing: 0.08em;
    text-align: center;
    :hover {
        color: var(--lightGreen);
        text-shadow: 0 4px 28px #5cfc3c, 0 2px 10px rgba(29, 247, 3, 0.3);
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
    width: 400px;
    margin-left: 20px;
    margin-top: 3px;
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
    padding-left: 40px;
    padding-right: 40px;
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
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: 10;
    background: var(--newDarkGray); //#1d1f23;
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

export const ExchangeRate = styled.div`
    font-family: 'Montserrat', serif;
    font-size: 12px;
    width: 60px;
    text-align: left;
    margin: auto;
    padding-left: 10px;
    color: var(--white); //#009427;
`;

export const BurgerMenuContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    position: fixed;
    left: 0;
    background: var(--newDarkGray);
    padding-left: 20px;
    z-index: 10;
    padding-bottom: 20px;
`;

export const FooterContainer = styled.div`
    width: 100% !important;
    height: 70px;
    margin-top: 100px;
    background: var(--newDarkGray);
    padding: 15px 30px 15px 30px;
    font-family: 'Montserrat', serif;
    color: var(--lightGreen);
`;

export const FooterItem = styled.div`
    font-family: 'Montserrat', serif;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    color: var(--lightGreen);

    @media (max-width: 640px) {
        font-size: 10px;
    }
`;

export const FooterLink = styled.a`
    color: var(--lightGreen);
    text-decoration: none;
    :hover {
        cursor: pointer;
        color: var(--green);
    }
`;
