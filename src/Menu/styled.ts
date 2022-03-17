import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuItem = styled(Link)`
    color: #05ff00;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
    margin-left: 21px;
    text-transform: uppercase;
    font-family: 'Korona One';
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
`;

export const MenuItems = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img``;

export const MainMenu = styled.div`
    display: flex;
    border-top: 1px solid #5cfc3c;
    width: 100%;
    height: 75px;
    align-items: flex-start;
    justify-content: space-between;
    padding-right: 11px;
`;

export const MenuConteiner = styled.div`
    left: 0;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: 5;
`;

export const ExchangeRates = styled.div`
    height: 87px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000000;
    color: #027a00;
    font-size: 14px;
`;

export const ExchangeRate = styled.div`
    margin-left: 20px;
`;
