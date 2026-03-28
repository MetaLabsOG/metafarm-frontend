import { useUnit, useStoreMap } from 'effector-react';
import { useLocation } from 'react-router-dom';
import logo from '../imgs/logo.png';
import meta_logo from '../imgs/meta_token.svg';
import algo_logo from '../imgs/algo_token.svg';
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
    AssetPriceWithLogo,
    MobileNavRow,
    SegmentedControl,
    NavPill,
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
                <Logo src={algo_logo} alt="Algorand" height="24px" />
                <ExchangeRate className={algoFormatted.isNonZero ? 'non-zero' : ''}>
                    ${algoFormatted.formatted}
                </ExchangeRate>
            </AssetPriceWithLogo>
            <AssetPriceWithLogo style={{ paddingRight: 30 }} href={getTokenLink(META_TOKEN_ID)}>
                <Logo src={meta_logo} alt="META token" height="24px" />
                <ExchangeRate className={metaFormatted.isNonZero ? 'non-zero' : ''}>
                    ${metaFormatted.formatted}
                </ExchangeRate>
            </AssetPriceWithLogo>
        </>
    );
}

function MobileNav(): JSX.Element {
    const path = useLocation().pathname;
    const isFarmActive = path === '/' || path === '/farm';
    const isStakeActive = path === '/stake';
    const isSwapActive = path === '/swap';

    return (
        <MobileNavRow>
            <SegmentedControl>
                <NavPill to="/farm" $active={isFarmActive} aria-current={isFarmActive ? 'page' : undefined}>
                    Farm
                </NavPill>
                <NavPill to="/stake" $active={isStakeActive} aria-current={isStakeActive ? 'page' : undefined}>
                    Stake
                </NavPill>
                <NavPill to="/swap" $active={isSwapActive} aria-current={isSwapActive ? 'page' : undefined}>
                    Swap
                </NavPill>
            </SegmentedControl>
        </MobileNavRow>
    );
}

export function Menu() {
    const ALGOPrice = useUnit($algoUsdPrice);
    const METAPrice = useStoreMap($pricedAssets, (as) => as.get(META_TOKEN_ID, null));

    return (
        <MenuContainer>
            <MainMenu>
                <MenuItem to="/">
                    <LogoWithMargin src={logo} alt="Cometa" height="40px" />
                </MenuItem>
                <MenuItemsContainer>
                    <MenuItems />
                </MenuItemsContainer>
                <ExchangeRatesContainer>
                    <ExchangeRates ALGOPrice={ALGOPrice} METAPrice={METAPrice} />
                </ExchangeRatesContainer>
                <ConnectWallet />
            </MainMenu>
            <MobileNav />
        </MenuContainer>
    );
}
