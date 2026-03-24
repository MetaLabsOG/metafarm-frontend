import React, { useEffect, useRef, useState } from 'react';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useUnit } from 'effector-react';
import Switch from 'react-switch';
import { logEvent, logFarmActionData, LogName } from '../logEvent';
import { $account, $balances, fetchAsset } from '../common/store';
import { $pricedAssets } from '../common/store/prices';
import { algod } from '../AppContext';
import { formatNumber, getTokens, isSwapZapDataValid, runTransactions, SLIPPAGE } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { TOKEN_OPTION } from '../Components/Select/Select';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import {
    DexButton,
    DexSwitchContainer,
    Heading2,
} from '../common/styled';
import { TokenOptionType } from '../Components/Select/types';
import { Zap as ZapOperation, DexProvider, makeDex, Mint, MintQuote, DexPool } from '../dexes';
import { algoexplorerTxLink, fromSmallestUnits, getSmallestUnits } from '../common/lib';
import { notify } from '../Components/Notification';
import pact from '../imgs/dexes/pact.png';
import tinyman from '../imgs/dexes/tinyman.png';
import tinymanOld from '../imgs/dexes/tinymanOld.png';
import humble from '../imgs/dexes/humble.png';
import pacman from '../imgs/loader.gif';
import { theme } from '../theme';
import { getLPTokenPoolLink } from '../Farm/PoolList/Pool/utils';
import { getDexName } from '../Farm/utils';
import { ZapData } from './types';
import {
    ZapContainer,
    ZapTitle,
    ZapSubtitle,
    FlowSeparator,
    FlowLine,
    FlowIcon,
    FeatureToggles,
    FeatureCard,
    FeatureLabel,
    FeatureTitle,
    FeatureHint,
    OutputPanel,
    OutputLabel,
    OutputHero,
    OutputBreakdown,
    OutputMeta,
    OutputMetaItem,
    OutputMetaLabel,
    OutputMetaValue,
    DetailsButton,
    DetailsContent,
    DetailItem,
    DetailKey,
    DetailVal,
    ManualLink,
    OutputSkeleton,
    UsdHint,
    PriceImpact,
} from './styled';

export function quoteToZapData(asset1Id: number, inputQuote: ZapOperation | MintQuote | null): ZapData {
    if (inputQuote === null) {
        return {
            asset1_id: 0,
            asset1_amount: 0,
            asset2_id: 0,
            asset2_amount: 0,
            lp_amount: 0,
            pool_lp_id: 0,
            pool_lp_decimals: 0,
        };
    }

    const quote = 'mint' in inputQuote ? inputQuote.mint : inputQuote;

    const assetsAreSwapped = asset1Id !== quote.assetA.id;
    const amountA = fromSmallestUnits(quote.assetA, quote.amountA);
    const amountB = fromSmallestUnits(quote.assetB, quote.amountB);
    const asset1_id = assetsAreSwapped ? quote.assetB.id : quote.assetA.id;
    const asset2_id = assetsAreSwapped ? quote.assetA.id : quote.assetB.id;
    const asset1_amount = assetsAreSwapped ? amountB : amountA;
    const asset2_amount = assetsAreSwapped ? amountA : amountB;

    const lp_amount = fromSmallestUnits(quote.lpToken, quote.minimalLiquidityIssued);
    const pool_lp_id = quote.lpToken.id;
    const pool_lp_decimals = quote.lpToken.decimals;
    return { asset1_id, asset1_amount, asset2_id, asset2_amount, lp_amount, pool_lp_id, pool_lp_decimals };
}

export async function loadZapData(
    account: Account | null,
    dexProvider: DexProvider,
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string,
    swapHalf: boolean
): Promise<ZapOperation | Mint | null> {
    if (!isSwapZapDataValid(asset1_id, asset2_id, asset1_amount)) {
        return null;
    }

    console.log('[ZAP] get data:', asset1_id, asset2_id, asset1_amount);

    const dex = makeDex(dexProvider);

    try {
        const asset1 = await fetchAsset(Number(asset1_id));
        const asset2 = await fetchAsset(Number(asset2_id));
        const amountIn = getSmallestUnits(asset1, Number(asset1_amount));
        const pool = await dex.getPoolByAssets(asset1, asset2);
        const zap = swapHalf
            ? await pool.getZap(asset1, amountIn, SLIPPAGE)
            : await pool.getMint(asset1, amountIn, SLIPPAGE);

        const zapData = quoteToZapData(Number(asset1_id), zap);

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[ZAP] get data',
                asset1_id: zapData.asset1_id.toString(),
                asset1_amount: zapData.asset1_amount,
                asset2_id: zapData.asset2_id.toString(),
                asset2_amount: zapData.asset2_amount,
                lp_amount: zapData.lp_amount,
                pool_lp_id: zapData.pool_lp_id,
                asset1: asset1.unitName,
                asset2: asset2.unitName,
                swapHalf: Number(swapHalf),
                dex: dexProvider,
            },
            LogName.ZAP
        );

        return zap;
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        if (error_message.includes('cancelled') || error_message.includes('The User has rejected')) {
            notify('Operation is cancelled.', 'warning');
        } else if (error_message.includes('pool for address') || error_message.includes('No Pact pool')) {
            notify('There is no pool for tokens pair.', 'warning');
        } else {
            notify(error_message, 'error');
        }
        logEvent(
            account?.networkAccount.addr,
            {
                message: '[ZAP ERROR]',
                asset1_id,
                asset2_id,
                amount: asset1_amount,
                swapHalf: Number(swapHalf),
                error: error_message,
                dex: dexProvider,
            },
            LogName.ZAP
        );
        return null;
    }
}

export function DexSwitch({
    dexes,
    currentDex,
    dexOnChange,
    style,
}: {
    dexes: DexProvider[];
    currentDex: DexProvider;
    dexOnChange: (dex: DexProvider) => void;
    style?: React.CSSProperties;
}) {
    return (
        <DexSwitchContainer style={style}>
            <Heading2>DEX</Heading2>
            {dexes.includes('T3') && (
                <DexButton
                    isActive={currentDex === 'T3'}
                    alt="tinyman 2.0"
                    src={tinyman}
                    onClick={() => dexOnChange('T3')}
                />
            )}
            {dexes.includes('T2') && (
                <DexButton
                    isActive={currentDex === 'T2'}
                    alt="tinyman 1.1"
                    src={tinymanOld}
                    onClick={() => dexOnChange('T2')}
                />
            )}
            {dexes.includes('PT') && (
                <DexButton isActive={currentDex === 'PT'} alt="pact" src={pact} onClick={() => dexOnChange('PT')} />
            )}
            {dexes.includes('H2') && (
                <DexButton isActive={currentDex === 'H2'} alt="humble" src={humble} onClick={() => dexOnChange('H2')} />
            )}
        </DexSwitchContainer>
    );
}

export function Zap({
    inputDexProvider,
    filteredOptions,
    closeModal,
    onAutoStake,
}: {
    inputDexProvider: DexProvider;
    filteredOptions?: number[];
    closeModal?: () => void;
    onAutoStake?: (lpTokenId: number, mintedAmount: bigint) => Promise<void>;
}) {
    const account = useUnit($account);
    const balances = useUnit($balances);
    const pricedAssets = useUnit($pricedAssets);

    const [token1, setToken1] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token2, setToken2] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [token2Amount, setToken2Amount] = useState<string>('');
    const [zapOp, setZapOp] = useState<ZapOperation | Mint | null>(null);

    const [options, setOptions] = useState<TokenOptionType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [halfSwap, setHalfSwap] = useState(false);
    const [autoStake, setAutoStake] = useState(Boolean(onAutoStake));
    const [showDetails, setShowDetails] = useState(false);

    const [dexProvider, setDexProvider] = useState<DexProvider>(inputDexProvider);
    const [pool, setPool] = useState<DexPool | null>(null);

    useEffect(() => {
        if (!token1.value || !token2.value) {
            return;
        }
        makeDex(dexProvider)
            .getPoolByAssets(token1.id, token2.id)
            .then((pool) => setPool(pool))
            .catch(() => setPool(null));
    }, [dexProvider, token1, token2]);

    useEffect(() => {
        getTokens(account, balances)
            .then(async (res) => {
                const filteredRes = res.filter((token) => !filteredOptions || filteredOptions.includes(token.id));
                for (const assetId of filteredOptions ?? []) {
                    if (!filteredRes.filter((option) => option.id === assetId).length) {
                        const asset = await fetchAsset(assetId);
                        filteredRes.push({ ...asset, value: asset.id.toString(), balance: 0 });
                    }
                }
                setOptions(filteredRes);
                filteredRes[0] && setToken1(filteredRes[0]);
                filteredRes[1] && setToken2(filteredRes[1]);
            })
            .catch((error) => {
                logFarmActionData(
                    account,
                    'ZAP',
                    token1Amount,
                    null,
                    null,
                    `Failed to fetch options: ${String(error)}`
                );
            });
    }, [account, balances]);

    const getZapTimeout = useRef<NodeJS.Timeout>();

    function getZap(token1_id: string, token2_id: string, amount: string, dex: DexProvider, swapHalf: boolean) {
        setIsLoading(true);

        loadZapData(account, dex, token1_id, token2_id, amount, swapHalf).then((res) => {
            setZapOp(res);
            if (!swapHalf) {
                const zapData = quoteToZapData(Number(token1_id), res);
                if (token1.id === Number(token1_id)) {
                    setToken2Amount(zapData.asset2_amount.toString());
                } else {
                    setToken1Amount(zapData.asset2_amount.toString());
                }
            }
            console.log('[ZAP] res', res);
            setIsLoading(false);
        }).catch((error) => {
            console.error('[ZAP] Failed to load zap data:', error);
            setIsLoading(false);
        });
    }

    function getZapThrottled(
        token1_id: string,
        token2_id: string,
        amount: string,
        dex: DexProvider,
        swapHalf: boolean,
        delay: number
    ) {
        if (!token1_id || !token2_id || !amount) {
            setZapOp(null);
            return;
        }
        if (getZapTimeout.current) {
            clearTimeout(getZapTimeout.current);
        }
        getZapTimeout.current = setTimeout(() => {
            getZap(token1_id, token2_id, amount, dex, swapHalf);
        }, delay);
    }

    const select1OnChange = (option: TokenOptionType) => {
        setToken1(option);
        setToken1Amount('');

        if (closeModal !== undefined) {
            const anotherOption = options.filter((o) => o.value !== option.value)[0];
            setToken2(anotherOption);
            getZapThrottled(option.value, anotherOption.value, token1Amount, dexProvider, halfSwap, 50);
        } else {
            getZapThrottled(option.value, token2.value, token1Amount, dexProvider, halfSwap, 50);
        }
    };

    const select2OnChange = (option: TokenOptionType) => {
        setToken2(option);

        if (closeModal !== undefined) {
            const anotherOption = options.filter((o) => o.value !== option.value)[0];
            setToken1(anotherOption);
            getZapThrottled(anotherOption.value, option.value, token1Amount, dexProvider, halfSwap, 50);
        } else {
            getZapThrottled(token1.value, option.value, token1Amount, dexProvider, halfSwap, 50);
        }
    };

    const input1OnChange = (inputValue: string) => {
        getZapThrottled(token1.value, token2.value, inputValue, dexProvider, halfSwap, 1000);
    };

    const input2OnChange = (inputValue: string) => {
        getZapThrottled(token2.value, token1.value, inputValue, dexProvider, halfSwap, 1000);
    };

    const handleChangeHalfSwap = (newHalfSwap: boolean) => {
        setToken2Amount('');
        setHalfSwap(newHalfSwap);
        getZapThrottled(token1.value, token2.value, token1Amount, dexProvider, newHalfSwap, 50);
    };

    const dexOnChange = (dex: DexProvider) => {
        setDexProvider(dex);
        getZapThrottled(token1.value, token2.value, token1Amount, dex, halfSwap, 50);
    };

    const zapData = quoteToZapData(token1.id, zapOp);

    // USD prices
    const token1Price = pricedAssets.get(token1.id)?.price ?? 0;
    const token2Price = pricedAssets.get(token2.id)?.price ?? 0;
    const token1UsdValue = Number(token1Amount) * token1Price;
    const token2UsdValue = Number(token2Amount) * token2Price;
    const formatUsd = (value: number): string =>
        value > 0 ? `≈ $${value < 0.01 ? value.toFixed(4) : value.toFixed(2)}` : '';

    // Progressive CTA button text
    const hasInput = token1Amount !== '' && Number(token1Amount) > 0;
    const hasQuote = zapData.pool_lp_id > 0;
    let zapButtonText: string;
    if (!hasInput) {
        zapButtonText = 'Enter Amount';
    } else if (isLoading) {
        zapButtonText = 'Getting Quote...';
    } else if (hasQuote) {
        zapButtonText = autoStake && onAutoStake ? 'ZAP & Stake' : 'ZAP — Get LP';
    } else {
        zapButtonText = halfSwap ? 'CONVERT ' + token1.unitName + ' TO LP' : 'GET LP';
    }

    // Compute display values for output panel
    const [token1DisplayAmount, token2DisplayAmount] =
        token1.id === zapData.asset1_id
            ? [zapData.asset1_amount, zapData.asset2_amount]
            : [zapData.asset2_amount, zapData.asset1_amount];
    const lpTokensBreakdown =
        `${formatNumber(token1DisplayAmount ?? 0)} ${token1.unitName}` +
        ' + ' +
        `${formatNumber(token2DisplayAmount ?? 0)} ${token2.unitName}`;
    const currentLpBalance = fromSmallestUnits(
        { decimals: zapData.pool_lp_decimals },
        zapData.pool_lp_id ? balances[zapData.pool_lp_id] : BigInt(0)
    );

    // Price impact calculation
    const inputUsd = halfSwap
        ? token1UsdValue
        : token1UsdValue + token2UsdValue;
    const outputUsd =
        (token1DisplayAmount ?? 0) * token1Price + (token2DisplayAmount ?? 0) * token2Price;
    const priceImpact = inputUsd > 0 ? ((inputUsd - outputUsd) / inputUsd) * 100 : 0;
    const priceImpactSeverity: 'low' | 'medium' | 'high' =
        priceImpact < 0.5 ? 'low' : priceImpact < 2 ? 'medium' : 'high';

    const ZapButtonOnClick = async () => {
        if (!isSwapZapDataValid(token1.value, token2.value, token1Amount)) {
            return;
        }
        if (token2.balance !== undefined && (Number.isNaN(token2.balance) || Number(token2Amount) > token2.balance)) {
            console.log(Number(token2Amount), token2.balance);
            notify(token2.unitName + ' amount is higher than the wallet balance.', 'warning');
            return;
        }

        if (zapOp !== null) {
            const lpTokenId = zapData.pool_lp_id;
            const lpBalanceBefore = lpTokenId ? BigInt(balances[lpTokenId] ?? 0) : BigInt(0);

            notify('Please sign the transaction in your wallet...', 'info');
            const res = await runTransactions(account, zapOp, token1.balance);
            if (res !== null) {
                const txIds = res;

                if (autoStake && onAutoStake && lpTokenId && account) {
                    notify('LP tokens minted! Signing stake...', 'info', algoexplorerTxLink(txIds[0]));
                    try {
                        const accountInfo = await algod.accountInformation(account.networkAccount.addr).do();
                        const lpAsset = (accountInfo.assets as Array<Record<string, unknown>>)?.find(
                            (a) => a['asset-id'] === lpTokenId
                        );
                        const balanceAfter = BigInt((lpAsset?.amount as number) ?? 0);
                        const mintedAmount = balanceAfter - lpBalanceBefore;

                        if (mintedAmount > BigInt(0)) {
                            await onAutoStake(lpTokenId, mintedAmount);
                            notify('LP minted and staked!', 'success', algoexplorerTxLink(txIds[0]));
                        } else {
                            notify('Done!', 'success', algoexplorerTxLink(txIds[0]));
                        }
                    } catch (error) {
                        const msg = error instanceof Error ? error.message : String(error);
                        if (msg.includes('cancelled') || msg.includes('rejected')) {
                            notify('Auto-stake cancelled. LP tokens are in your wallet.', 'warning');
                        } else {
                            notify('Auto-stake failed. You can stake manually.', 'warning');
                            console.error('[ZAP] Auto-stake error:', msg);
                        }
                    }
                } else {
                    notify('Done!', 'success', algoexplorerTxLink(txIds[0]));
                }

                closeModal && closeModal();
            }
        }
    };

    return (
        <ZapContainer>
            <ZapTitle>ZAP</ZapTitle>
            <ZapSubtitle>Add liquidity and get LP tokens in one click</ZapSubtitle>

            <SelectInputGroup
                options={options}
                selectedOption={token1}
                inputData={token1Amount}
                setInputData={setToken1Amount}
                selectOnChange={select1OnChange}
                inputOnChange={input1OnChange}
            />
            <UsdHint>{formatUsd(token1UsdValue)}</UsdHint>

            <FlowSeparator>
                <FlowLine />
                <FlowIcon>+</FlowIcon>
                <FlowLine />
            </FlowSeparator>

            <SelectInputGroup
                options={options}
                selectedOption={token2}
                inputData={token2Amount}
                setInputData={setToken2Amount}
                selectOnChange={select2OnChange}
                inputOnChange={input2OnChange}
                inputDisabled={halfSwap}
            />
            <UsdHint>{formatUsd(token2UsdValue)}</UsdHint>

            <FeatureToggles>
                <FeatureCard $isActive={halfSwap} onClick={() => handleChangeHalfSwap(!halfSwap)}>
                    <FeatureLabel>
                        <FeatureTitle>Auto-convert</FeatureTitle>
                        <FeatureHint>Swap half {token1.unitName}</FeatureHint>
                    </FeatureLabel>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Switch
                            onChange={handleChangeHalfSwap}
                            checked={halfSwap}
                            onColor={theme.green}
                            offColor={theme.gray}
                            onHandleColor={theme.darkGray}
                            offHandleColor={theme.darkGray}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            height={18}
                            width={34}
                        />
                    </div>
                </FeatureCard>
                {onAutoStake && (
                    <FeatureCard $isActive={autoStake} onClick={() => setAutoStake(!autoStake)}>
                        <FeatureLabel>
                            <FeatureTitle>Auto-stake</FeatureTitle>
                            <FeatureHint>Stake LP into farm</FeatureHint>
                        </FeatureLabel>
                        <div onClick={(e) => e.stopPropagation()}>
                            <Switch
                                onChange={setAutoStake}
                                checked={autoStake}
                                onColor={theme.green}
                                offColor={theme.gray}
                                onHandleColor={theme.darkGray}
                                offHandleColor={theme.darkGray}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={18}
                                width={34}
                            />
                        </div>
                    </FeatureCard>
                )}
            </FeatureToggles>

            {isLoading && (
                <OutputSkeleton>
                    <img style={{ width: 40, height: 40 }} alt="loading" src={pacman} />
                </OutputSkeleton>
            )}

            {!isLoading && hasQuote && (
                <OutputPanel>
                    <OutputLabel>You will receive</OutputLabel>
                    <OutputHero>{formatNumber(zapData.lp_amount ?? 0)} LP</OutputHero>
                    <OutputBreakdown>{lpTokensBreakdown}</OutputBreakdown>
                    <OutputMeta>
                        <OutputMetaItem>
                            <OutputMetaLabel>Price Impact</OutputMetaLabel>
                            <OutputMetaValue>
                                <PriceImpact $severity={priceImpactSeverity}>
                                    {priceImpact > 0 ? `${priceImpact.toFixed(2)}%` : '—'}
                                    {priceImpactSeverity === 'high' && ' ⚠'}
                                </PriceImpact>
                            </OutputMetaValue>
                        </OutputMetaItem>
                        <OutputMetaItem>
                            <OutputMetaLabel>Slippage</OutputMetaLabel>
                            <OutputMetaValue>{SLIPPAGE * 100}%</OutputMetaValue>
                        </OutputMetaItem>
                        <OutputMetaItem>
                            <OutputMetaLabel>Current LP</OutputMetaLabel>
                            <OutputMetaValue>{formatNumber(currentLpBalance)}</OutputMetaValue>
                        </OutputMetaItem>
                        <OutputMetaItem>
                            <OutputMetaLabel>DEX</OutputMetaLabel>
                            <OutputMetaValue>{getDexName(dexProvider)}</OutputMetaValue>
                        </OutputMetaItem>
                    </OutputMeta>
                    <DetailsButton onClick={() => setShowDetails(!showDetails)}>
                        {showDetails ? '- Hide details' : '+ Details'}
                    </DetailsButton>
                    {showDetails && (
                        <DetailsContent>
                            <DetailItem>
                                <DetailKey>LP ASA ID </DetailKey>
                                <DetailVal>{formatNumber(zapData.pool_lp_id)}</DetailVal>
                            </DetailItem>
                        </DetailsContent>
                    )}
                </OutputPanel>
            )}

            {!closeModal && (
                <DexSwitch
                    dexes={['T2', 'PT']}
                    currentDex={dexProvider}
                    style={{ paddingLeft: '10px', paddingRight: '10px' }}
                    dexOnChange={dexOnChange}
                />
            )}

            <PacmanButton
                buttonText={zapButtonText}
                buttonStyle="swap_button"
                onClickAction={ZapButtonOnClick}
                isInactive={!hasInput || isLoading}
                style={{ marginTop: 20, width: '100%' }}
            />

            {pool && (
                <ManualLink
                    target="_blank"
                    href={getLPTokenPoolLink(dexProvider, pool.poolId, token1.id, token2.id)}
                    rel="noreferrer"
                >
                    or do it manually
                </ManualLink>
            )}
        </ZapContainer>
    );
}
