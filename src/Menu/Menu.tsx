import { useStore, useStoreMap } from 'effector-react';
import logo from '../imgs/logo.png';
import meta_logo from '../imgs/meta_token.svg';
import algo_logo from '../imgs/algo_token.svg';
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
import { $algoUsdPrice, $pricedAssets, Asset, Priced } from '../common/store';
import { useEffect, useState } from 'react';
import { META_TOKEN_ID } from '../AppContext';

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

const ExchangeRates = ({ ALGOPrice, METAPrice }: { ALGOPrice: number | null; METAPrice: Priced<Asset> | null }) => {
    return (
        <>
            <Logo src={algo_logo} alt="logo" height="24px" />
            <ExchangeRate>{formatPrice(ALGOPrice)}$</ExchangeRate>
            <Logo src={meta_logo} alt="logo" height="24px" />
            <ExchangeRate>${formatPrice(METAPrice?.price ?? 0)}</ExchangeRate>
        </>
    );
};

const BurgerMenu = ({ ALGOPrice, METAPrice }: { ALGOPrice: number | null; METAPrice: Priced<Asset> | null }) => {
    return (
        <BurgerMenuContainer>
            <MenuItemsBurger>
                <MenuItems />
            </MenuItemsBurger>
            <ExchangeRatesBurger>
                <ExchangeRates ALGOPrice={ALGOPrice} METAPrice={METAPrice} />
            </ExchangeRatesBurger>
        </BurgerMenuContainer>
    );
};

export const Menu = () => {
    const ALGOPrice = useStore($algoUsdPrice);
    const METAPrice = useStoreMap($pricedAssets, (as) => as.get(META_TOKEN_ID, null));
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('click', () => isBurgerOpen && setIsBurgerOpen(!isBurgerOpen), { once: true });
        window.addEventListener(
            'keydown',
            (e) => {
                if (e.key === 'Escape') {
                    isBurgerOpen && setIsBurgerOpen(!isBurgerOpen);
                }
            },
            { once: true }
        );
    }, [isBurgerOpen]);

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
                        <ExchangeRates ALGOPrice={ALGOPrice} METAPrice={METAPrice} />
                    </ExchangeRatesContainer>
                    <ConnectWallet />
                </MainMenu>
            </MenuContainer>
            {isBurgerOpen && <BurgerMenu ALGOPrice={ALGOPrice} METAPrice={METAPrice} />}
        </>
    );
};
