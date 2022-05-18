import React, { useEffect, useState } from 'react';
import logo from '../imgs/logo.png';
import { getCoinRate } from '../providers/binanceProvider';
import { MenuItem, MenuContainer, MenuItems, ExchangeRates, ExchangeRate, MainMenu, Logo } from './styled';
import { ConnectWallet } from '../wallet/ConnectWallet';

export const Menu = () => {
    const [toBTCRate, setToBTCRate] = useState<number | unknown>(0);
    const [toALGORate, setToALGORate] = useState<number | unknown>(0);

    useEffect(() => {
        const toBTC = async () => await getCoinRate('BTCUSDT');

        toBTC().then(({ price }) => {
            setToBTCRate(Number(price).toFixed(2));
        });

        const toALGO = async () => await getCoinRate('ALGOUSDT');
        toALGO().then(({ price }) => setToALGORate(Number(price).toFixed(2)));
    }, []);

    return (
        <MenuContainer>
            <ExchangeRates>
                <ExchangeRate>ALGO/USDT {toALGORate}$</ExchangeRate>
                <ExchangeRate>BTC/USDT {toBTCRate}$</ExchangeRate>
            </ExchangeRates>
            <MainMenu>
                <MenuItems>
                    <MenuItem to="/">
                        <Logo src={logo} alt="logo" height="40px" />
                    </MenuItem>
                    <MenuItem to="/swap">swap</MenuItem>
                    <MenuItem to="/farm">farm</MenuItem>
                    <MenuItem to="/fomo">fomo3d</MenuItem>
                    <MenuItem to="/meta-dao">metadao</MenuItem>
                    <MenuItem to="/tokensale">tokensale</MenuItem>
                </MenuItems>
                <ConnectWallet />
            </MainMenu>
        </MenuContainer>
    );
};
