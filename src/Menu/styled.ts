import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuItem = styled(Link)`
    color: #05ff00;
    cursor: pointer;
    position: relative;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Korona One';
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    :hover {
        color: white;
    }
`;

export const MenuItems = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    justify-content: space-between;
    width: 40%;
`;

export const Logo = styled.img``;

export const MainMenu = styled.div`
    display: flex;
    margin-left: 40px;
    margin-right: 40px;
    border-top: 1px solid #5cfc3c;
    width: 95%;
    height: 51px;
    background: black;
    align-items: flex-start;
    justify-content: space-between;
`;

export const MenuContainer = styled.div`
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: 20;
`;

export const ExchangeRates = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000000;
    color: #027a00;
    font-size: 14px;
`;

export const ExchangeRate = styled.div`
    margin-left: 20px;
    animation: count 10s ease-in-out infinite alternate;
`;
