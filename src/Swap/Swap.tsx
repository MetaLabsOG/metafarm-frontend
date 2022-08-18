import React, { useEffect, useRef, useState } from 'react';
import { useUnit } from 'effector-react';
import { SelectedOption, SelectedOptionValue } from 'react-select-search';
import 'react-select-search/style.css';
import { Account } from '@reach-sh/stdlib/ALGO';
import { ALGONET, MAINNET, META_TOKEN_ID, reach, TESTNET } from '../AppContext';
import '../css/swap.css';
import {
    $account,
    $balances,
    Amount,
    AssetId,
    fetchAsset,
    fetchAssetPriceFx,
    refreshAccountInfo,
} from '../common/store';

import { logEvent, LogName } from '../logEvent';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { algoexplorerTxLink, fromSmallestUnits, getSmallestUnits, signAndPostTxnGroups } from '../common/lib';
import { WalletTransactionGroup } from '../types';
import { Select, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { Heading2, ModalContainer, ModalTitle, ModalSubtitle, Plus, SwapArrow } from '../common/styled';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { TokenOptionType } from '../Components/Select/types';
import { BestSwapQuote, makeDex, MintQuote, ZapQuote } from '../providers/dexesProvider';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { notify } from '../Components/Notification';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import swapArrow from '../imgs/swapArrow.svg';
import { BestSwap, Token } from './types';

export const ASSETS_PATH = 'https://asa-list.tinyman.org/assets.json';
export const API_PATH = ALGONET === MAINNET ? 'https://api.cometa.farm/' : 'https://api.testnet.cometa.farm/';
// Export const API_PATH = 'http://0.0.0.0:5000/';

const MAINNET_TO_TESTNET_ASA_ID: Record<string, number> = {
    0: 0, // ALGO
    712012773: 85951079, // META
    386192725: 19386116, // GoBTC
    31566704: 10458941, // USDC
    463554836: 70283957, // ALGF
    792313023: 96690352, // XSOL
};

export const SLIPPAGE = 0.01;

const tinyman = makeDex('T2');

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

function quoteToBestSwap(q: BestSwapQuote, outTokenPrice: number): BestSwap {
    const best_swap = fromSmallestUnits(q.best.assetOut, q.best.minimalAmountOut);
    const direct_swap = q.direct ? fromSmallestUnits(q.direct.assetOut, q.direct.minimalAmountOut) : best_swap;
    const usdc_diff = outTokenPrice * (best_swap - direct_swap);

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

async function getBestSwap(
    account: Account | null,
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string
): Promise<BestSwap | null> {
    if (!asset1_id || !asset2_id) {
        notify('Please, choose tokens.', 'warning');
        return null;
    }

    if (!asset1_amount) {
        notify('Please, enter the token amount.', 'warning');
        return null;
    }

    if (asset1_id === asset2_id) {
        notify('Please, choose different tokens.', 'warning');
        return null;
    }

    console.log('[SWAP] get data:', asset1_id, asset2_id, asset1_amount);

    try {
        const asset1 = await fetchAsset(Number.parseInt(asset1_id));
        const asset2 = await fetchAsset(Number.parseInt(asset2_id));
        const amountIn = getSmallestUnits(asset1, Number.parseFloat(asset1_amount));
        const bestSwapQuote = await tinyman.getBestSwapQuote(asset1, asset2, amountIn, SLIPPAGE);
        const asset2Price = await fetchAssetPriceFx(asset2);
        const best_swap = quoteToBestSwap(bestSwapQuote, asset2Price);

        console.log(bestSwapQuote);
        console.log(best_swap);

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[SWAP] get data',
                asset1_id,
                asset2_id,
                amount: asset1_amount,
                best_swap: best_swap.best_swap,
                direct_swap: best_swap.direct_swap,
                best_path: best_swap.best_path.map((t: { unit_name: any }) => t.unit_name).join('-'),
                usdc_diff: best_swap.usdc_diff,
            },
            LogName.SWAP
        );

        return best_swap;
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

export async function getTransactions(
    type: QueryType,
    address: string,
    asset1_id: string,
    asset2_id: string,
    asset1_amount: string
): Promise<{ quote: BestSwapQuote | ZapQuote | MintQuote; txns: WalletTransactionGroup[] }> {
    const asset1 = await fetchAsset(Number(asset1_id));
    const asset2 = await fetchAsset(Number(asset2_id));
    const amountIn = getSmallestUnits(asset1, Number(asset1_amount));

    if (type === QueryType.swap) {
        const quote = await tinyman.getBestSwapQuote(asset1, asset2, amountIn, SLIPPAGE);
        const txns = await tinyman.getBestSwapTxsFromQuote(address, quote);
        return { quote, txns };
    }

    if (type === QueryType.mint) {
        const quote = await tinyman.getMintQuote(asset1, asset2, amountIn, SLIPPAGE);
        const txns = await tinyman.getMintTxsFromQuote(address, quote);
        return { quote, txns };
    }

    const quote = await tinyman.getZapQuote(asset1, asset2, amountIn, SLIPPAGE);
    const txns = await tinyman.getZapTxsFromQuote(address, quote);
    return { quote, txns };
}

export async function runTransactions(
    type: QueryType,
    account: Account | null,
    token1Id: string,
    token2Id: string,
    token1Amount: string,
    token1Balance?: number
): Promise<{ quote: BestSwapQuote | ZapQuote | MintQuote; txIds: string[] } | null> {
    if (!account) {
        notify('Please, connect the wallet.', 'warning');
        return null;
    }

    if (!token1Amount) {
        notify('Please, enter the token amount.', 'warning');
        return null;
    }

    if (token1Balance !== undefined && (Number.isNaN(token1Balance) || Number(token1Amount) > token1Balance)) {
        notify('Tokens amount is higher than the wallet balance.', 'warning');
        return null;
    }

    try {
        const address = account.networkAccount.addr;
        const { quote, txns } = await getTransactions(type, address, token1Id, token2Id, token1Amount);
        const txIds = await signAndPostTxnGroups(txns);
        console.log('OK', txIds);
        refreshAccountInfo();

        logEvent(
            account.networkAccount.addr,
            {
                message: '[' + QueryType[type].toUpperCase() + ' OK]',
                asset1_id: token1Id,
                asset2_id: token2Id,
                amount: token1Amount,
                txns: txIds.map(algoexplorerTxLink).join('\n'),
            },
            type === QueryType.swap ? LogName.SWAP : LogName.ZAP
        );

        return { quote, txIds };
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
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
                asset1_id: token1Id,
                asset2_id: token2Id,
                amount: token1Amount,
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
    bestSwap: BestSwap;
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
                valueStyle={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}
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
    const [bestSwap, setBestSwap] = useState<BestSwap>({
        best_swap: 0,
        direct_swap: 0,
        best_path: [],
        usdc_diff: 0,
        priceImpact: 0,
    });
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
            return;
        }
        clearTimeout(getSwapTimeout.current);
        getSwapTimeout.current = setTimeout(() => {
            setIsLoading(true);
            getBestSwap(account, token1_id, token2_id, amount).then((res) => {
                if (res !== null) {
                    setBestSwap(res);
                    setToken2Amount(res.best_swap.toString());
                }
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
        const newToken2 = token1;
        setToken1(token2);
        setToken2(newToken2);
        setToken1Amount(token2Amount);
        setToken2Amount('');
        getBestSwapThrottled(token2.value, token1.value, token2Amount, 50);
    };

    const SwapButtonOnClick = async () => {
        const res = await runTransactions(
            QueryType.swap,
            account,
            token1.value,
            token2.value,
            token1Amount,
            token1.balance
        );
        if (res !== null) {
            const { txIds } = res;
            notify('Done!', 'success', algoexplorerTxLink(txIds[0]));
        }
    };

    return (
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
                bestSwap={bestSwap}
                token1={token1}
                token2={token2}
            />
            <PacmanButton buttonText="SWAP" buttonStyle="swap_button" onClickAction={SwapButtonOnClick} />
            <h3 className="dex_name">via tinyman</h3>
        </ModalContainer>
    );
}
