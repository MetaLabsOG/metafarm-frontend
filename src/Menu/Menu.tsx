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
    if (price === null) return { formatted: '—', isNonZero: false };
    if (price === 0) return { formatted: '0.00', isNonZero: false };

    // Dynamic precision: enough significant digits for micro-cap tokens
    let decimals: number;
    if (price < 0.0001) {
        decimals = Math.min(Math.abs(Math.floor(Math.log10(price))) + 2, 10);
    } else if (price < 0.01) {
        decimals = 5;
    } else if (price < 1) {
        decimals = 4;
    } else {
        decimals = 2;
    }

    return { formatted: price.toFixed(decimals), isNonZero: true };
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
    const metaPrice = METAPrice?.price ?? null;
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
                        alt="Open menu"
                        height="20px"
                        role="button"
                        tabIndex={0}
                        aria-expanded={isBurgerOpen}
                        aria-label="Toggle navigation menu"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsBurgerOpen(!isBurgerOpen);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsBurgerOpen(!isBurgerOpen);
                            }
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
            {isBurgerOpen && <BurgerMenu ALGOPrice={ALGOPrice} METAPrice={METAPrice} aria-label="Navigation menu" />}
        </>
    );
}
