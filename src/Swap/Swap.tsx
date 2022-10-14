import React, { useEffect, useRef, useState } from 'react';
import { useUnit } from 'effector-react';
import { SelectedOption, SelectedOptionValue } from 'react-select-search';
import 'react-select-search/style.css';
import { Account } from '@reach-sh/stdlib/ALGO';
import { theme } from '../theme';
import { alammexClient, ALGONET, FARM_BENEFICIARY_ADDR, MAINNET, META_TOKEN_ID, reach, TESTNET } from '../AppContext';
import {
    $account,
    $balances,
    Amount,
    Asset,
    AssetId,
    fetchAsset,
    fetchAssetPriceFx,
    refreshAccountInfo,
} from '../common/store';

import { logEvent, LogName } from '../logEvent';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import {
    algoexplorerTxLink,
    fromSmallestUnits,
    getSmallestUnits,
    parseTxs,
    SentTxError,
    signAndPostTxnGroups,
} from '../common/lib';
import { TOKEN_OPTION } from '../Components/Select/Select';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { DexName, ModalContainer, ModalSubtitle, ModalTitle, SwapArrow } from '../common/styled';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { TokenOptionType } from '../Components/Select/types';
import { BestSwap, Mint, tinymanDex, Zap } from '../dexes';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { notify } from '../Components/Notification';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import swapArrow from '../imgs/swapArrow.svg';
import { BestSwapInfo, Token } from './types';

export const ASSETS_PATH = 'https://asa-list.tinyman.org/assets.json';

const MAINNET_TO_TESTNET_ASA_ID: Record<string, number> = {
    0: 0, // ALGO
    712012773: 85951079, // META
    386192725: 19386116, // GoBTC
    31566704: 10458941, // USDC
    463554836: 70283957, // ALGF
    792313023: 96690352, // XSOL
    342889824: 27963203, // BOARD
};

export const SLIPPAGE = 0.01;

export enum QueryType {
    swap,
    zap,
    mint,
}

export const getNetworkAssetId = (asset_id: number) => {
    if (ALGONET === MAINNET) {
        return asset_id;
    }

    return MAINNET_TO_TESTNET_ASA_ID[asset_id] ?? -1;
};

type BestSwapPriced = BestSwap & { outTokenPrice: number };

function quoteToBestSwap(q: BestSwapPriced | null): BestSwapInfo {
    if (q === null) {
        return {
            best_swap: 0,
            direct_swap: 0,
            best_path: [],
            usdc_diff: 0,
            priceImpact: 0,
        };
    }

    const best_swap = fromSmallestUnits(q.best.assetOut, q.best.minimalAmountOut);
    const direct_swap = q.direct ? fromSmallestUnits(q.direct.assetOut, q.direct.minimalAmountOut) : best_swap;
    const usdc_diff = q.outTokenPrice * (best_swap - direct_swap);

    const best_path = q.path.map((q) => ({ unit_name: q.assetIn.unitName }));
    best_path.push({ unit_name: q.path[q.path.length - 1].assetOut.unitName });

    const priceImpact = q.best.priceImpact;

    return {
        best_swap,
        direct_swap,
        best_path,
        usdc_diff,
        priceImpact,
    };
}

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
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string
): Promise<BestSwapPriced | null> {
    if (!isSwapZapDataValid(asset1_id, asset2_id, asset1_amount)) {
        return null;
    }

    if (!asset1_id || !asset2_id) {
        return null;
    }

    console.log('[SWAP] get data:', asset1_id, asset2_id, asset1_amount);

    try {
        const asset1 = await fetchAsset(Number.parseInt(asset1_id));
        const asset2 = await fetchAsset(Number.parseInt(asset2_id));
        const amountIn = getSmallestUnits(asset1, Number.parseFloat(asset1_amount));

        const alammexQuote = await alammexClient.getFixedInputSwapQuote(asset1_id, asset2_id, Number(amountIn));
        console.log('AAA', alammexQuote);

        const bestSwap = (await tinymanDex.getBestSwapQuote(asset1, asset2, amountIn, SLIPPAGE)) as BestSwapPriced;
        bestSwap.outTokenPrice = await fetchAssetPriceFx(asset2);
        const swapInfo = quoteToBestSwap(bestSwap);

        console.log(bestSwap);
        console.log(swapInfo);

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[SWAP] get data',
                asset1_id,
                asset2_id,
                asset1: asset1.unitName,
                asset2: asset2.unitName,
                amount: asset1_amount,
                best_swap: swapInfo.best_swap,
                direct_swap: swapInfo.direct_swap,
                best_path: swapInfo.best_path.map((t: { unit_name: any }) => t.unit_name).join('-'),
                usdc_diff: swapInfo.usdc_diff,
            },
            LogName.SWAP
        );

        return bestSwap;
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        console.error(error);
        notify('Fail to find the best swap.', 'error');
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
    operation: BestSwap | Zap | Mint,
    token1Balance?: number
): Promise<string[] | null> {
    if (!account) {
        notify('Please, connect the wallet.', 'warning');
        return null;
    }

    // const txnGroup = await alammexClient.getSwapQuoteTransactions(addr, quote, slippage, FARM_BENEFICIARY_ADDR);

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
    } else {
        [type, token1, token2, token1AmountBig] = [
            QueryType.mint,
            operation.assetA,
            operation.assetB,
            operation.amountA,
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
        console.log(parseTxs(txns));
        let txIds = await signAndPostTxnGroups(txns);
        console.log(QueryType[type].toUpperCase() + ' OK', txIds);

        if (operation.dex == 'T2') {
            notify('Redeeming excess amounts on Tinyman...', 'info');
            const redeemTxns = await tinymanDex.getAllRedeemTxs(address);
            const redeemTxIds = await signAndPostTxnGroups(redeemTxns, { inParallel: true });
            txIds = [...txIds, ...redeemTxIds];
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
            type === QueryType.swap ? LogName.SWAP : LogName.ZAP
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
            type === QueryType.swap ? LogName.SWAP : LogName.ZAP
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

function BestTokenPrice({
    isLoading,
    token1Amount,
    bestSwap,
    token1,
    token2,
}: {
    isLoading: boolean;
    token1Amount: string;
    bestSwap: BestSwapInfo;
    token1: TokenOptionType;
    token2: TokenOptionType;
}) {
    const pricePerToken =
        Number.parseFloat(token1Amount) > 0 ? bestSwap.best_swap / Number.parseFloat(token1Amount) : 0;

    return (
        <InfoPanel isLoading={isLoading} minHeight={180}>
            <InfoRow
                title="Minimum received"
                value={numberRound(bestSwap.best_swap) + ' ' + token2.unitName}
                valueStyle={{ fontSize: '16px', color: theme.newWhite, fontWeight: 600 }}
            />
            <InfoRow title="Route" value={bestSwap.best_path.map((t: { unit_name: any }) => t.unit_name).join('-')} />
            <InfoRow title="Price" value={`${numberRound(pricePerToken)} ${token2.unitName} per ${token1.unitName}`} />
            <InfoRow title="Max slippage" value={`${SLIPPAGE * 100}%`} valueStyle={{ fontSize: '14px' }} />
            <InfoRow title="Price impact" value={`${numberRound(bestSwap.priceImpact * 100)}%`} />
        </InfoPanel>
    );
}

export function Swap() {
    const account = useUnit($account);
    const balances = useUnit($balances);

    const [token1, setToken1] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token2, setToken2] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [token2Amount, setToken2Amount] = useState<string>('');
    const [bestSwap, setBestSwap] = useState<BestSwapPriced | null>(null);
    const [options, setOptions] = useState<TokenOptionType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getTokens(account, balances).then((res) => {
            setOptions(res);
            setToken1(res[0]);
            setToken2(res[1]);
        });
    }, [balances, account]);

    const getSwapTimeout = useRef<any>();

    function getBestSwapThrottled(token1_id: string, token2_id: string, amount: string, delay: number) {
        if (!token1_id || !token2_id || !amount) {
            setToken2Amount('');
            setBestSwap(null);
            return;
        }
        clearTimeout(getSwapTimeout.current);
        getSwapTimeout.current = setTimeout(() => {
            setIsLoading(true);
            getBestSwap(account, token1_id, token2_id, amount).then((res) => {
                setBestSwap(res);
                const swapData = quoteToBestSwap(res);
                setToken2Amount(swapData.best_swap.toString());
                setIsLoading(false);
            });
        }, delay);
    }

    const select1OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setToken1(option);
        setToken1Amount('');
        getBestSwapThrottled(option.value, token2.value, token1Amount, 50);
    };

    const select2OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
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

    const SwapButtonOnClick = async () => {
        if (!isSwapZapDataValid(token1.value, token2.value, token1Amount)) {
            return;
        }
        if (bestSwap !== null) {
            const res = await runTransactions(account, bestSwap, token1.balance);
            if (res !== null) {
                notify('Done!', 'success', algoexplorerTxLink(res[0]));
            }
        }
    };

    return (
        <ModalContainer style={{ background: 'transparent' }}>
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
            <div style={{ marginBottom: '15px' }}>
                <SwapArrow alt="arrow" src={swapArrow} onClick={swapTokens} />
            </div>
            <SelectInputGroup
                options={options}
                selectedOption={token2}
                inputData={token2Amount}
                setInputData={setToken2Amount}
                selectOnChange={select2OnChange}
                inputOnChange={() => {}}
                inputDisabled={true}
            />
            <BestTokenPrice
                isLoading={isLoading}
                token1Amount={token1Amount}
                bestSwap={quoteToBestSwap(bestSwap)}
                token1={token1}
                token2={token2}
            />
            <PacmanButton buttonText="SWAP" buttonStyle="swap_button" onClickAction={SwapButtonOnClick} />
            <DexName>via tinyman</DexName>
        </ModalContainer>
    );
}
