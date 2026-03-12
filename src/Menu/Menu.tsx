import { useUnit, useStoreMap } from 'effector-react';
import { useEffect, useState } from 'react';
import logo from '../imgs/logo.png';
import meta_logo from '../imgs/meta_token.svg';
import algo_logo from '../imgs/algo_token.svg';
import burger from '../imgs/burger.svg';
import { $algoUsdPrice, $pricedAssets, Asset, Priced } from '../common/store';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { isMobile, META_TOKEN_ID } from '../AppContext';
import { getTokenLink } from '../Farm/PoolList/Pool/utils';


import {
    MenuItem,
    MenuContainer,
    MenuItemsContainer,
    ExchangeRatesContainer,
    ExchangeRate,
    MainMenu,
    Logo,
    LogoWithMargin,
    Burger,
    BurgerMenuContainer,
    MenuItemsBurger,
    ExchangeRatesBurger,
    AssetPriceWithLogo,
} from './styled';

const formatPrice = (price: number | null): { formatted: string; isNonZero: boolean } => {
    if (price === null) return { formatted: '0.00', isNonZero: false };

    // For values less than 1, show 3 decimal places, otherwise 2
    const decimalPlaces = price < 1 ? 3 : 2;
    const formatted = price.toFixed(decimalPlaces);
    const isNonZero = price > 0;

    return { formatted, isNonZero };
};

function MenuItems() {
    const leftPadding = isMobile() ? 0 : 15;
    return (
        <>
            <MenuItem to="/swap" style={{ paddingLeft: leftPadding }}>
                swap
            </MenuItem>
            <MenuItem to="/farm">farm</MenuItem>
            <MenuItem to="/stake">stake</MenuItem>
            <MenuItem to="/metapunks">NFTs</MenuItem>
        </>
    );
}

function ExchangeRates({ ALGOPrice, METAPrice }: { ALGOPrice: number | null; METAPrice: Priced<Asset> | null }) {
    const algoFormatted = formatPrice(ALGOPrice);
    const metaPrice = METAPrice?.price ?? 0;
    const metaFormatted = formatPrice(metaPrice);

    return (
        <>
            <AssetPriceWithLogo href={getTokenLink(0)}>
                <Logo src={algo_logo} alt="logo" height="24px" />
                <ExchangeRate className={algoFormatted.isNonZero ? 'non-zero' : ''}>
                    ${algoFormatted.formatted}
                </ExchangeRate>
            </AssetPriceWithLogo>
            <AssetPriceWithLogo style={{ paddingRight: 30 }} href={getTokenLink(META_TOKEN_ID)}>
                <Logo src={meta_logo} alt="logo" height="24px" />
                <ExchangeRate className={metaFormatted.isNonZero ? 'non-zero' : ''}>
                    ${metaFormatted.formatted}
                </ExchangeRate>
            </AssetPriceWithLogo>
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
                        <LogoWithMargin src={logo} alt="logo" height="40px" />
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
