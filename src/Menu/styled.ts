import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuItem = styled(Link)`
    color: #05ff00;
    cursor: pointer;
    position: relative;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Korona One';
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;
    :hover {
        color: white;
    }
`;

export const MenuItemsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
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
    background: #1d1f23;
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
    color: #009427;
`;

export const BurgerMenuContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    position: fixed;
    left: 0;
    background: #1d1f23;
    padding-left: 20px;
    z-index: 10;
    padding-bottom: 20px;
`;

export const FooterContainer = styled.div`
    width: 100% !important;
    height: 70px;
    display: flex;
    margin-top: 100px;
    justify-content: space-between;
    background: #1d1f23;
    padding: 15px 30px 15px 30px;
`;

export const FooterItem = styled.div`
    font-family: 'Montserrat', serif;
    margin-top: auto;
    margin-bottom: auto;
`;
