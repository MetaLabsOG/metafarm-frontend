import { useUnit, useStoreMap } from 'effector-react';
import { useEffect, useState } from 'react';
import logo from '../imgs/logo.png';
import meta_logo from '../imgs/meta_token.svg';
import algo_logo from '../imgs/algo_token.svg';
import burger from '../imgs/burger.svg';
import { $algoUsdPrice, $pricedAssets, Asset, Priced } from '../common/store';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { ALGONET, isMobile, META_TOKEN_ID, TESTNET } from '../AppContext';
import { getTokenLink } from '../Farm/PoolList/Pool/utils';
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

const formatPrice = (price: number | null): string => (price === null ? '0.00' : price.toFixed(2));

function MenuItems() {
    const leftPadding = isMobile() ? 0 : 15;
    return (
        <>
            <MenuItem to="/swap" style={{ paddingLeft: leftPadding }}>
                swap
            </MenuItem>
            <MenuItem to="/farm">farm</MenuItem>
            <MenuItem to="/stake">stake</MenuItem>
            {ALGONET === TESTNET && <MenuItem to="/laas">laas</MenuItem>}
            <MenuItem to="/metapunks">NFTs</MenuItem>
        </>
    );
}

function ExchangeRates({ ALGOPrice, METAPrice }: { ALGOPrice: number | null; METAPrice: Priced<Asset> | null }) {
    return (
        <>
            <a target="_blank" href={getTokenLink(0)} rel="noreferrer">
                <Logo src={algo_logo} alt="logo" height="24px" />
            </a>
            <ExchangeRate>${formatPrice(ALGOPrice)}</ExchangeRate>
            <a target="_blank" href={getTokenLink(META_TOKEN_ID)} rel="noreferrer">
                <Logo src={meta_logo} alt="logo" height="24px" />
            </a>
            <ExchangeRate>${formatPrice(METAPrice?.price ?? 0)}</ExchangeRate>
        </>
    );
}

function BurgerMenu({ ALGOPrice, METAPrice }: { ALGOPrice: number | null; METAPrice: Priced<Asset> | null }) {
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
}

export function Menu() {
    const ALGOPrice = useUnit($algoUsdPrice);
    const METAPrice = useStoreMap($pricedAssets, (as) => as.get(META_TOKEN_ID, null));
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    useEffect(() => {
        const clickHandler = () => {
            isBurgerOpen && setIsBurgerOpen(!isBurgerOpen);
        };

        const keydownHandler = (e: KeyboardEvent) => {
            e.key === 'Escape' && isBurgerOpen && setIsBurgerOpen(!isBurgerOpen);
        };
        window.addEventListener('click', clickHandler);
        window.addEventListener('keydown', keydownHandler);

        return () => {
            window.removeEventListener('click', clickHandler);
            window.removeEventListener('keydown', keydownHandler);
        };
    }, [isBurgerOpen]);

    return (
        <>
            <MenuContainer>
                <MainMenu>
                    <MenuItem to="/">
                        <Logo src={logo} alt="logo" height="40px" />
                    </MenuItem>
                    <Burger
                        src={burger}
                        alt="logo"
                        height="20px"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsBurgerOpen(!isBurgerOpen);
                        }}
                    />
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
}
