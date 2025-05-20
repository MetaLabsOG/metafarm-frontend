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
import { MeteorToggle } from '../Components/ui/MeteorToggle';
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
            <AssetPriceWithLogo href={getTokenLink(0)}>
                <Logo src={algo_logo} alt="logo" height="24px" />
                <ExchangeRate>${formatPrice(ALGOPrice)}</ExchangeRate>
            </AssetPriceWithLogo>
            <AssetPriceWithLogo style={{ paddingRight: 30 }} href={getTokenLink(META_TOKEN_ID)}>
                <Logo src={meta_logo} alt="logo" height="24px" />
                <ExchangeRate>${(METAPrice?.price ?? 0).toFixed(3)}</ExchangeRate>
            </AssetPriceWithLogo>
        </>
    );
}

function BurgerMenu({ ALGOPrice, METAPrice }: { ALGOPrice: number | null; METAPrice: Priced<Asset> | null }) {
    // Handle meteor toggle change
    const handleMeteorToggleChange = (enabled: boolean) => {
        // The toggle component handles the state internally
        console.log('Meteor animation toggled:', enabled);
    };

    return (
        <BurgerMenuContainer>
            <MenuItemsBurger>
                <MenuItems />
                {/* Add Comet Rain toggle */}
                <MeteorToggle onChange={handleMeteorToggleChange} />
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
