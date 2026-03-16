import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useUnit } from 'effector-react';
import { Account } from '@reach-sh/stdlib/ALGO';
import { theme } from '../theme';
import { ALGONET, MAINNET, META_TOKEN_ID, reach, TESTNET } from '../AppContext';
import { $account, $balances, Amount, Asset, AssetId, fetchAsset, refreshAccountInfo } from '../common/store';
import { LoadingSpinner } from '../Components/LoadingSpinner';

import { logEvent, LogName } from '../logEvent';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import {
    algoexplorerTxLink,
    fromSmallestUnits,
    getSmallestUnits,
    SentTxError,
    signAndPostTxnGroups,
} from '../common/lib';
import { TOKEN_OPTION } from '../Components/Select/Select';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import {
    DexName,
    ModalContainer,
    ModalSubtitle,
    ModalTitle,
    StyledVestigeChart,
    SwapArrow,
    SwapChartContainer,
    SwapContainer,
} from '../common/styled';
import { TokenOptionType } from '../Components/Select/types';
import { BestSwap, Mint, tinymanDex, Zap } from '../dexes';
import { notify } from '../Components/Notification';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import swap from '../imgs/swap.svg';
import { Token } from './types';
import { FolksSwap, fetchFolksQuote, FOLKS_SLIPPAGE_BPS } from './FolksSwap';
import {
    SwapDetailsPanel,
    SlippageSection,
    SlippageLabel,
    SlippageBtnGroup,
    SlippageBtn,
    CustomSlippageInput,
    RateValue,
    InvertIcon,
    PanelDivider,
    DetailsSection,
    DetailRow,
    DetailLabel,
    DetailValue,
    ImpactWarning,
    RefreshSection,
    PulseDot,
    RefreshText,
} from './styled';

export const ASSETS_PATH = 'https://asa-list.tinyman.org/assets.json';

const MAINNET_TO_TESTNET_ASA_ID: Record<string, number> = {
    0: 0, // ALGO
    712012773: 85951079, // META
    386192725: 19386116, // GoBTC
    31566704: 10458941, // USDC
    463554836: 70283957, // ALGF
    792313023: 96690352, // XSOL
    342889824: 27963203, // BOARD
    312769: 42279195, // USDT
    672913181: 144971339, // goUSD
};

const SLIPPAGE_PRESETS = [50, 100, 200] as const; // 0.5%, 1%, 2% in bps
const QUOTE_REFRESH_INTERVAL = 15_000; // 15 seconds

export const SLIPPAGE = FOLKS_SLIPPAGE_BPS / 10_000; // 1% as decimal for display (used by compound.tsx)

export enum QueryType {
    swap,
    zap,
    mint,
    folksSwap,
}

export const getNetworkAssetId = (asset_id: number) => {
    if (ALGONET === MAINNET) {
        return asset_id;
    }

    return MAINNET_TO_TESTNET_ASA_ID[asset_id] ?? -1;
};

export function isSwapZapDataValid(
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string
) {
    if (!asset1_id || !asset2_id) {
        notify('Please, choose tokens.', 'warning');
        return false;
    }

    if (!asset1_amount) {
        notify('Please, enter the token amount.', 'warning');
        return false;
    }

    if (asset1_id === asset2_id) {
        notify('Please, choose different tokens.', 'warning');
        return false;
    }
    return true;
}

export async function getBestSwap(
    account: Account | null,
    asset1_id: number | undefined,
    asset2_id: number | undefined,
    asset1_amount: string
): Promise<FolksSwap | null> {
    if (!isSwapZapDataValid(asset1_id?.toString(), asset2_id?.toString(), asset1_amount)) {
        return null;
    }

    if (asset1_id === undefined || asset2_id === undefined) {
        return null;
    }

    try {
        const asset1 = await fetchAsset(asset1_id);
        const asset2 = await fetchAsset(asset2_id);
        const amountIn = getSmallestUnits(asset1, Number.parseFloat(asset1_amount));

        if (amountIn <= 0n) {
            notify('Please enter a valid amount.', 'warning');
            return null;
        }

        const bestSwap = await fetchFolksQuote(asset1, asset2, amountIn);

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[SWAP] get data',
                asset1_id,
                asset2_id,
                asset1: asset1.unitName,
                asset2: asset2.unitName,
                amount: asset1_amount,
                best_swap: bestSwap.amountOut,
                best_path: bestSwap.pathString,
            },
            LogName.SWAP
        );

        return bestSwap;
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        console.error(error);

        if (error_message.includes('No liquidity')) {
            notify('No liquidity available for this pair.', 'error');
        } else {
            notify('Failed to get swap quote. Please try again.', 'error');
        }

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[SWAP ERROR] get data',
                asset1_id,
                asset2_id,
                amount: asset1_amount,
                error: error_message,
            },
            LogName.SWAP
        );
        return null;
    }
}

export async function runTransactions(
    account: Account | null,
    operation: BestSwap | Zap | Mint | FolksSwap,
    token1Balance?: number
): Promise<string[] | null> {
    if (!account) {
        notify('Please, connect the wallet.', 'warning');
        return null;
    }

    let type: QueryType, token1: Asset, token2: Asset, token1AmountBig: Amount;
    if ('best' in operation) {
        [type, token1, token2, token1AmountBig] = [
            QueryType.swap,
            operation.best.assetIn,
            operation.best.assetOut,
            operation.best.amountIn,
        ];
    } else if ('swap' in operation) {
        const curToken1AmountBig =
            operation.swap.amountIn +
            (operation.mint.assetA.id === operation.swap.assetIn.id ? operation.mint.amountA : operation.mint.amountB);
        [type, token1, token2, token1AmountBig] = [
            QueryType.zap,
            operation.swap.assetIn,
            operation.swap.assetOut,
            curToken1AmountBig,
        ];
    } else if ('lpToken' in operation) {
        [type, token1, token2, token1AmountBig] = [
            QueryType.mint,
            operation.assetA,
            operation.assetB,
            operation.amountA,
        ];
    } else {
        [type, token1, token2, token1AmountBig] = [
            QueryType.folksSwap,
            operation.assetA,
            operation.assetB,
            operation.microAmountIn,
        ];
    }

    const token1Amount = fromSmallestUnits(token1, token1AmountBig);

    if (!token1Amount) {
        notify('Please, enter the token amount.', 'warning');
        return null;
    }

    if (token1Balance !== undefined && (Number.isNaN(token1Balance) || token1Amount > token1Balance)) {
        notify('Tokens amount is higher than the wallet balance.', 'warning');
        return null;
    }

    try {
        const address = account.networkAccount.addr;
        const txns = await operation.prepareTxs(address);
        // console.log(parseTxs(txns));
        let txIds = await signAndPostTxnGroups(txns);
        console.log(QueryType[type].toUpperCase() + ' OK', txIds);

        if (operation.dex == 'T2') {
            const redeemTxns = await tinymanDex.getAllRedeemTxs(address);
            if (redeemTxns.length > 0) {
                notify('Redeeming excess amounts on Tinyman...', 'info');
                const redeemTxIds = await signAndPostTxnGroups(redeemTxns, { inParallel: true });
                txIds = [...txIds, ...redeemTxIds];
            }
        }

        refreshAccountInfo();

        logEvent(
            account.networkAccount.addr,
            {
                message: '[' + QueryType[type].toUpperCase() + ' OK]',
                asset1_id: token1.id.toString(),
                asset2_id: token2.id.toString(),
                asset1: token1.unitName,
                asset2: token2.unitName,
                amount: token1Amount.toString(),
                txns: txIds.map(algoexplorerTxLink).join('\n'),
            },
            type === QueryType.zap ? LogName.ZAP : LogName.SWAP
        );

        return txIds;
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        const hasSwap = error instanceof SentTxError ? error.sendTxIds.length > 0 : false;

        if (type == QueryType.zap && hasSwap) {
            notify('We already swapped half of tokens. Please, check and try zap again.', 'warning');
        }

        const queryType = QueryType[type].toUpperCase();
        if (error_message.includes('underflow')) {
            notify(queryType + ': Not enough tokens.', 'error');
        } else if (error_message.includes('Transaction not confirmed')) {
            notify(queryType + ': Transaction not confirmed', 'error');
        } else if (error_message.includes('would result negative')) {
            notify(queryType + ': Result slippage is higher than expected.', 'error');
        } else if (error_message.includes('popup')) {
            notify(queryType + ': Popups are blocked. Please, allow popups in your browser.', 'error');
        } else if (error_message.includes('missing')) {
            notify(
                queryType + ": Your wallet doesn't have the input token. You can get the tokens in the swap tab.",
                'error'
            );
        } else if (error_message.includes('below min') || error_message.includes('overspend')) {
            notify(queryType + ': Not enough available algos.', 'error');
        } else if (error_message.includes('cancelled') || error_message.includes('The User has rejected')) {
            notify('Operation is cancelled.', 'warning');
        } else if (error_message.includes('exceeds schema integer count')) {
            notify('Please, redeem all tokens on tinyman.', 'warning');
        } else if (error_message.includes('the network is offline')) {
            notify(
                'There is a problem connecting to Pera wallet. Probably the swap is done, but please check.',
                'warning'
            );
        } else {
            notify(queryType + ' error. Please, contact us in twitter or discord.', 'error');
        }
        console.log(error_message);
        logEvent(
            account.networkAccount.addr,
            {
                message: '[' + QueryType[type].toUpperCase() + ' ERROR]',
                asset1_id: token1.id.toString(),
                asset2_id: token2.id.toString(),
                asset1: token1.unitName,
                asset2: token2.unitName,
                amount: token1Amount.toString(),
                error: error_message,
            },
            type === QueryType.zap ? LogName.ZAP : LogName.SWAP
        );
        return null;
    }
}

export async function getTokens(
    account: Account | null,
    balances: Record<AssetId, Amount> | null = null
): Promise<TokenOptionType[]> {
    const asset_response = await fetch(ASSETS_PATH);
    const assets_res: Token[] = await asset_response.json();
    const assets: TokenOptionType[] = Object.values(assets_res)
        .map((token) => ({
            value: ALGONET === MAINNET ? `${token.id}` : `${MAINNET_TO_TESTNET_ASA_ID[token.id] ?? ''}`,
            id: ALGONET === MAINNET ? Number(token.id) : MAINNET_TO_TESTNET_ASA_ID[token.id],
            name: token.name,
            unitName: token.unit_name,
            balance: 0,
            decimals: token.decimals,
            creator: '',
            reserve: '',
        }))
        .filter((token) => token.value)
        .sort((a, b) => (a.id === 0 ? -1 : a.id === META_TOKEN_ID && b.id !== 0 ? -1 : 0));

    if (!balances) {
        return assets;
    }

    const reservedAlgoBalance = account ? reach.bigNumberToNumber(await reach.minimumBalanceOf(account)) : 0;
    for (const asset of assets) {
        const asset_balance = Number(balances[asset.id] ?? 0) / 10 ** asset.decimals;
        asset.balance = asset_balance;

        if (asset.id === 0) {
            asset.balance -= reservedAlgoBalance / 10 ** asset.decimals;
            // TODO(DariaYakovleva): reach.minimumBalanceOf return wrong amount, ya hz.
            asset.balance = Math.max(0, asset.balance - 2);
        }

        // TODO: remove it
        if (ALGONET === TESTNET && asset.value === META_TOKEN_ID.toString()) {
            asset.balance /= 10 ** 2;
            asset.decimals += 2;
        }
    }
    assets
        .sort((a, b) => (a.balance < b.balance ? 1 : -1))
        .sort((a, b) => (a.id === 0 ? -1 : a.id === META_TOKEN_ID && b.id !== 0 ? -1 : 0));

    return assets;
}

export function formatNumber(x: number) {
    if (x < 0.01) {
        return Math.floor(x * 1000) / 1000;
    }
    return x > 100 ? Math.floor(x) : Math.floor(x * 100) / 100;
}

function getPriceImpactColor(impactPercent: number): string {
    if (impactPercent >= 5) return 'var(--red)';       // red — high impact
    if (impactPercent >= 3) return 'var(--warning)';   // yellow — moderate
    if (impactPercent < 1) return 'var(--success)';    // green — negligible
    return theme.lightGray;                       // 1-3% — neutral
}

function getPriceImpactWarning(impactPercent: number): string | null {
    if (impactPercent >= 10) return 'Very high price impact! You may lose significant value.';
    if (impactPercent >= 5) return 'High price impact. Consider reducing the amount.';
    return null;
}

function SlippageSelector({
    slippageBps,
    setSlippageBps,
}: {
    slippageBps: number;
    setSlippageBps: (bps: number) => void;
}) {
    const [customValue, setCustomValue] = useState('');
    const isCustom = !SLIPPAGE_PRESETS.includes(slippageBps as typeof SLIPPAGE_PRESETS[number]);

    const handleCustomChange = (value: string) => {
        setCustomValue(value);
        const parsed = Number.parseFloat(value);
        if (parsed > 0 && parsed <= 50) {
            setSlippageBps(Math.round(parsed * 100));
        }
    };

    return (
        <SlippageSection>
            <SlippageLabel>Slippage</SlippageLabel>
            <SlippageBtnGroup>
                {SLIPPAGE_PRESETS.map((bps) => (
                    <SlippageBtn
                        key={bps}
                        type="button"
                        $active={slippageBps === bps}
                        onClick={() => { setSlippageBps(bps); setCustomValue(''); }}
                    >
                        {bps / 100}%
                    </SlippageBtn>
                ))}
                <CustomSlippageInput
                    type="number"
                    placeholder="Custom"
                    aria-label="Custom slippage percentage"
                    $active={isCustom}
                    value={isCustom ? (customValue || (slippageBps / 100).toString()) : customValue}
                    onChange={(e) => handleCustomChange(e.target.value)}
                    onFocus={() => { if (!isCustom) setCustomValue(''); }}
                />
            </SlippageBtnGroup>
        </SlippageSection>
    );
}

function SwapDetails({
    isLoading,
    token1Amount,
    swapInfo,
    token1,
    token2,
    slippageBps,
}: {
    isLoading: boolean;
    token1Amount: string;
    swapInfo: FolksSwap | BestSwap | null;
    token1: TokenOptionType;
    token2: TokenOptionType;
    slippageBps: number;
}) {
    const [rateInverted, setRateInverted] = useState(false);

    const best_swap = swapInfo ? swapInfo.amountOut : 0;
    const priceImpact = swapInfo ? swapInfo.getPriceImpact() : 0;
    const priceImpactPercent = priceImpact * 100;
    const pricePerToken = Number.parseFloat(token1Amount) > 0 ? best_swap / Number.parseFloat(token1Amount) : 0;
    const networkFee = swapInfo instanceof FolksSwap ? swapInfo.networkFeeMicroAlgo / 1e6 : 0;
    const route = swapInfo ? swapInfo.pathString : '';
    const slippageDecimal = slippageBps / 10_000;
    const impactColor = getPriceImpactColor(priceImpactPercent);
    const impactWarning = getPriceImpactWarning(priceImpactPercent);

    const rateDisplay = pricePerToken > 0
        ? rateInverted
            ? `1 ${token2.unitName} = ${numberRound(1 / pricePerToken)} ${token1.unitName}`
            : `1 ${token1.unitName} = ${numberRound(pricePerToken)} ${token2.unitName}`
        : '—';

    return (
        <LoadingSpinner isLoading={isLoading} text="Finding best route..." size="small" overlay={true}>
            <DetailsSection>
                <DetailRow>
                    <DetailLabel>Rate</DetailLabel>
                    <RateValue onClick={() => setRateInverted((v) => !v)}>
                        {rateDisplay} <InvertIcon>⇄</InvertIcon>
                    </RateValue>
                </DetailRow>
                <DetailRow>
                    <DetailLabel>Price impact</DetailLabel>
                    <DetailValue $color={impactColor} $highlight={priceImpactPercent >= 3}>
                        {numberRound(priceImpactPercent)}%
                    </DetailValue>
                </DetailRow>
                {impactWarning && (
                    <ImpactWarning $critical={priceImpactPercent >= 10}>
                        {impactWarning}
                    </ImpactWarning>
                )}
                <DetailRow>
                    <DetailLabel>Min. received</DetailLabel>
                    <DetailValue $highlight $color={theme.white}>
                        {numberRound(best_swap * (1 - slippageDecimal))} {token2.unitName}
                    </DetailValue>
                </DetailRow>
                {networkFee > 0 && (
                    <DetailRow>
                        <DetailLabel>Network fee</DetailLabel>
                        <DetailValue>{numberRound(networkFee)} ALGO</DetailValue>
                    </DetailRow>
                )}
                {route && (
                    <DetailRow>
                        <DetailLabel>Route</DetailLabel>
                        <DetailValue>{route}</DetailValue>
                    </DetailRow>
                )}
            </DetailsSection>
        </LoadingSpinner>
    );
}

export function Swap() {
    const account = useUnit($account);
    const balances = useUnit($balances);

    const [token1, setToken1] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token2, setToken2] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [token2Amount, setToken2Amount] = useState<string>('');
    const [bestSwap, setBestSwap] = useState<FolksSwap | null>(null);
    const [options, setOptions] = useState<TokenOptionType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [slippageBps, setSlippageBps] = useState<number>(FOLKS_SLIPPAGE_BPS);
    const [refreshCountdown, setRefreshCountdown] = useState<number>(0);

    useEffect(() => {
        getTokens(account, balances).then((res) => {
            setOptions(res);
            setToken1(res[0]);
            setToken2(res[1]);
        });
    }, [balances, account]);

    const getSwapTimeout = useRef<any>();
    const refreshInterval = useRef<any>();
    const countdownInterval = useRef<any>();

    const startAutoRefresh = useCallback((token1Id: string, token2Id: string, amount: string) => {
        clearInterval(refreshInterval.current);
        clearInterval(countdownInterval.current);

        if (!token1Id || !token2Id || !amount) return;

        setRefreshCountdown(QUOTE_REFRESH_INTERVAL / 1000);
        countdownInterval.current = setInterval(() => {
            setRefreshCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        refreshInterval.current = setInterval(() => {
            setRefreshCountdown(QUOTE_REFRESH_INTERVAL / 1000);
            getBestSwap(account, Number.parseInt(token1Id), Number.parseInt(token2Id), amount).then((res) => {
                setBestSwap(res);
                if (res) setToken2Amount(numberRound(res.amountOut));
            }).catch((error) => {
                console.error('[SWAP] Auto-refresh failed:', error);
            });
        }, QUOTE_REFRESH_INTERVAL);
    }, [account]);

    useEffect(() => {
        return () => {
            clearInterval(refreshInterval.current);
            clearInterval(countdownInterval.current);
        };
    }, []);

    function getBestSwapThrottled(token1_id: string, token2_id: string, amount: string, delay: number) {
        if (!token1_id || !token2_id || !amount) {
            setToken2Amount('');
            setBestSwap(null);
            clearInterval(refreshInterval.current);
            clearInterval(countdownInterval.current);
            setRefreshCountdown(0);
            return;
        }
        clearTimeout(getSwapTimeout.current);
        getSwapTimeout.current = setTimeout(() => {
            setIsLoading(true);
            getBestSwap(account, Number.parseInt(token1_id), Number.parseInt(token2_id), amount).then((res) => {
                setBestSwap(res);
                const best_swap = res ? res.amountOut : 0;
                setToken2Amount(numberRound(best_swap));
                setIsLoading(false);
                startAutoRefresh(token1_id, token2_id, amount);
            }).catch((error) => {
                console.error('[SWAP] Failed to get best swap:', error);
                setIsLoading(false);
            });
        }, delay);
    }

    const select1OnChange = (option: TokenOptionType) => {
        setToken1(option);
        setToken1Amount('');
        getBestSwapThrottled(option.value, token2.value, '', 50);
    };

    const select2OnChange = (option: TokenOptionType) => {
        setToken2(option);
        getBestSwapThrottled(token1.value, option.value, token1Amount, 50);
    };

    const input1OnChange = (inputValue: string) => {
        getBestSwapThrottled(token1.value, token2.value, inputValue, 1000);
    };

    const swapTokens = () => {
        const newToken1 = token2;
        const newToken2 = token1;
        setToken1(newToken1);
        setToken2(newToken2);
        setToken1Amount(token2Amount);
        setToken2Amount('');
        getBestSwapThrottled(newToken1.value, newToken2.value, token2Amount, 50);
    };

    const parsedAmount = Number.parseFloat(token1Amount);
    const hasInsufficientBalance = parsedAmount > 0 && token1.balance < parsedAmount;
    const isSwapDisabled = !bestSwap || isLoading || !token1Amount || hasInsufficientBalance;

    const SwapButtonOnClick = async () => {
        if (!isSwapZapDataValid(token1.value, token2.value, token1Amount)) {
            return;
        }
        if (bestSwap !== null) {
            bestSwap.slippageBps = slippageBps;
            clearInterval(refreshInterval.current);
            clearInterval(countdownInterval.current);
            const res = await runTransactions(account, bestSwap, token1.balance);
            if (res !== null) {
                const txId = res[0];
                notify('Done!', 'success', algoexplorerTxLink(txId));
                setToken1Amount('');
                setToken2Amount('');
                setBestSwap(null);
            } else {
                startAutoRefresh(token1.value, token2.value, token1Amount);
            }
        }
    };

    const getButtonText = (): string => {
        if (isLoading) return 'SWAP';
        if (!token1Amount) return 'ENTER AMOUNT';
        if (hasInsufficientBalance) return 'INSUFFICIENT BALANCE';
        if (!bestSwap) return 'SWAP';
        return 'SWAP';
    };

    return (
        <SwapChartContainer>
            <ModalContainer>
                <ModalTitle style={{ textAlign: 'center', marginBottom: 0 }}>OPTIMAL SWAP</ModalTitle>
                <ModalSubtitle>we find the optimal route to swap your token</ModalSubtitle>
                <SelectInputGroup
                    options={options}
                    selectedOption={token1}
                    inputData={token1Amount}
                    setInputData={setToken1Amount}
                    selectOnChange={select1OnChange}
                    inputOnChange={input1OnChange}
                />
                <SwapContainer>
                    <SwapArrow alt="Swap token order" src={swap} role="button" tabIndex={0} aria-label="Swap token order" onClick={swapTokens} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); swapTokens(); } }} />
                </SwapContainer>
                <SelectInputGroup
                    options={options}
                    selectedOption={token2}
                    inputData={token2Amount}
                    setInputData={setToken2Amount}
                    selectOnChange={select2OnChange}
                    inputOnChange={() => {}}
                    inputDisabled={true}
                />
                <SwapDetailsPanel>
                    <SlippageSelector slippageBps={slippageBps} setSlippageBps={setSlippageBps} />
                    {(bestSwap || isLoading) && (
                        <>
                            <PanelDivider />
                            <SwapDetails
                                isLoading={isLoading}
                                token1Amount={token1Amount}
                                swapInfo={bestSwap}
                                token1={token1}
                                token2={token2}
                                slippageBps={slippageBps}
                            />
                        </>
                    )}
                    {refreshCountdown > 0 && bestSwap && !isLoading && (
                        <RefreshSection>
                            <PulseDot />
                            <RefreshText>Refreshes in {refreshCountdown}s</RefreshText>
                        </RefreshSection>
                    )}
                </SwapDetailsPanel>
                <PacmanButton
                    buttonText={getButtonText()}
                    buttonStyle="swap_button"
                    onClickAction={SwapButtonOnClick}
                    isInactive={isSwapDisabled}
                    style={{ marginTop: 12 }}
                />
                <a target="_blank" href="https://folksrouter.io/" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <DexName>Powered by Folks Router</DexName>
                </a>
            </ModalContainer>
            <StyledVestigeChart
                assetId={token2.id != 0 ? token2.id : token1.id}
                currency={'USD'}
                interval={'1h'}
                width={600}
                height={450}
            />
        </SwapChartContainer>
    );
}
