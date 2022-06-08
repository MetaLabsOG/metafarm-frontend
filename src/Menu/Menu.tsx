import { useStore } from 'effector-react';
import logo from '../imgs/logo.png';
import algo_logo from '../imgs/algo_token.svg';
import meta_logo from '../imgs/meta_token.svg';
import burger from '../imgs/burger.svg';
import {
    MenuItem,
    MenuContainer,
    MenuItemsContainer,
    ExchangeRatesContainer,
    ExchangeRate,
    MainMenu,
    Logo,
    Burger,
    BurgerMenuContainer,
    MenuItemsBurger,
    ExchangeRatesBurger,
} from './styled';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { $algoUsdPrice } from '../common/store';
import { useState } from 'react';

const formatPrice = (price: number | null): string => (price === null ? '0' : price.toFixed(2));

const MenuItems = () => {
    return (
        <>
            <MenuItem to="/swap">swap</MenuItem>
            <MenuItem to="/zap">zap</MenuItem>
            <MenuItem to="/farm">farm</MenuItem>
            <MenuItem to="/stake">stake</MenuItem>
            {/*<MenuItem to="/fomo">fomo3d</MenuItem>*/}
            <MenuItem to="/meta-dao">metadao</MenuItem>
            <MenuItem to="/tokensale">tokensale</MenuItem>
        </>
    );
};

const ExchangeRates = ({ ALGOPrice }: { ALGOPrice: number | null }) => {
    return (
        <>
            <Logo src={algo_logo} alt="logo" height="24px" />
            <ExchangeRate>{formatPrice(ALGOPrice)}$</ExchangeRate>
            <Logo src={meta_logo} alt="logo" height="24px" />
            <ExchangeRate>${formatPrice(ALGOPrice)}</ExchangeRate>
        </>
    );
};

const BurgerMenu = ({ ALGOPrice }: { ALGOPrice: number | null }) => {
    return (
        <BurgerMenuContainer>
            <MenuItemsBurger>
                <MenuItems />
            </MenuItemsBurger>
            <ExchangeRatesBurger>
                <ExchangeRates ALGOPrice={ALGOPrice} />
            </ExchangeRatesBurger>
        </BurgerMenuContainer>
    );
};

export const Menu = () => {
    const ALGOPrice = useStore($algoUsdPrice);

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    return (
        <>
            <MenuContainer>
                <MainMenu>
                    <MenuItem to="/">
                        <Logo src={logo} alt="logo" height="40px" />
                    </MenuItem>
                    <Burger onClick={() => setIsBurgerOpen(!isBurgerOpen)} src={burger} alt="logo" height="20px" />
                    <MenuItemsContainer>
                        <MenuItems />
                    </MenuItemsContainer>
                    <ExchangeRatesContainer>
                        <ExchangeRates ALGOPrice={ALGOPrice} />
                    </ExchangeRatesContainer>
                    <ConnectWallet />
                </MainMenu>
            </MenuContainer>
            {isBurgerOpen && <BurgerMenu ALGOPrice={ALGOPrice} />}
        </>
    );
};
