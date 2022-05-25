import { useStore } from 'effector-react';
import logo from '../imgs/logo.png';
import { MenuItem, MenuContainer, MenuItems, ExchangeRates, ExchangeRate, MainMenu, Logo } from './styled';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { $algoUsdPrice, $btcUsdPrice } from '../common/store';

const formatPrice = (price: number | null): string => price === null ? "0" : price.toFixed(2);

export const Menu = () => {
    const BTCPrice = useStore($btcUsdPrice);
    const ALGOPrice = useStore($algoUsdPrice);

    return (
        <MenuContainer>
            <ExchangeRates>
                <ExchangeRate>ALGO/USDT {formatPrice(ALGOPrice)}$</ExchangeRate>
                <ExchangeRate>BTC/USDT {formatPrice(BTCPrice)}$</ExchangeRate>
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
