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
    @media (max-width: 640px) {
        display: none;
    }
`;

export const MenuItems = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    justify-content: space-between;
    width: 60%;
    @media (max-width: 640px) {
        > * {
            &:first-child {
                margin-bottom: 20px;
                display: block;
            }
        }
    }
`;

export const Logo = styled.img``;

export const MainMenu = styled.div`
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    width: 100%;
    height: 51px;
    background: black;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 640px) {
        margin: auto;
    }
`;

export const MenuContainer = styled.div`
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: 10;
    background-color: black;

    @media (max-width: 640px) {
        justify-content: space-around;
    }
`;

export const ExchangeRates = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000000;
    color: #027a00;
    font-size: 14px;
    margin-left: 40px;
    margin-right: 40px;
    border-bottom: 1px solid #5cfc3c;

    @media (max-width: 640px) {
        display: none;
    }
`;

export const ExchangeRate = styled.div`
    margin-left: 20px;
    animation: count 10s ease-in-out infinite alternate;
`;
