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
import { algoexplorerTxLink, fromSmallestUnits, getSmallestUnits, parseTxs, signAndPostTxnGroups } from '../common/lib';
import { WalletTransactionGroup } from '../types';
import { Select, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { Heading2, ModalContainer, ModalTitle, ModalSubtitle } from '../common/styled';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { TokenOptionType } from '../Components/Select/types';
import { BestSwap, tinymanDex, Zap } from '../dexes';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { notify } from '../Components/Notification';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { BestSwapInfo, Token } from './types';

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
    342889824: 27963203, // BOARD
};

export const SLIPPAGE = 0.01;

export enum QueryType {
    swap,
    zap,
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
        };
    }

    const best_swap = fromSmallestUnits(q.best.assetOut, q.best.minimalAmountOut);
    const direct_swap = q.direct ? fromSmallestUnits(q.direct.assetOut, q.direct.minimalAmountOut) : best_swap;
    const usdc_diff = q.outTokenPrice * (best_swap - direct_swap);

    const best_path = q.path.map((q) => ({ unit_name: q.assetIn.unitName }));
    best_path.push({ unit_name: q.path[q.path.length - 1].assetOut.unitName });

    return {
        best_swap,
        direct_swap,
        best_path,
        usdc_diff,
    };
}

async function getBestSwap(
    account: Account | null,
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string
): Promise<BestSwapPriced | null> {
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
    operation: BestSwap | Zap,
    token1Balance?: number
): Promise<string[] | null> {
    if (!account) {
        notify('Please, connect the wallet.', 'warning');
        return null;
    }

    // this is kostyli basically only to not change the logging
    const [type, token1, token2, token1AmountBig] =
        'best' in operation
            ? [QueryType.swap, operation.best.assetIn, operation.best.assetOut, operation.best.amountIn]
            : [
                  QueryType.zap,
                  operation.swap.assetIn,
                  operation.swap.assetOut,
                  operation.swap.amountIn +
                      (operation.mint.assetA.id === operation.swap.assetIn.id
                          ? operation.mint.amountA
                          : operation.mint.amountB),
              ];

    const token1Amount = fromSmallestUnits(token1, token1AmountBig);

    if (token1Balance !== undefined && (Number.isNaN(token1Balance) || token1Amount > token1Balance)) {
        notify('Tokens amount below the wallet balance.', 'warning');
        return null;
    }

    try {
        const address = account.networkAccount.addr;
        const txns = await operation.prepareTxs(address);
        console.log(parseTxs(txns));
        let txIds = await signAndPostTxnGroups(txns);
        console.log('SWAP/ZAP OK', txIds);

        if (operation.dex == 'T2') {
            const redeemTxns = await tinymanDex.getAllRedeemTxs(address);
            const redeemTxIds = await signAndPostTxnGroups(redeemTxns);
            txIds = [...txIds, ...redeemTxIds];
        }

        refreshAccountInfo();

        logEvent(
            account.networkAccount.addr,
            {
                message: '[' + QueryType[type].toUpperCase() + ' OK]',
                asset1_id: token1.id,
                asset2_id: token2.id,
                amount: token1Amount,
                txns: txIds.map(algoexplorerTxLink).join('\n'),
            },
            type === QueryType.swap ? LogName.SWAP : LogName.ZAP
        );

        return txIds;
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
                asset1_id: token1.id,
                asset2_id: token2.id,
                amount: token1Amount,
                error: error_message,
            },
            type === QueryType.swap ? LogName.SWAP : LogName.ZAP
        );
        return null;
    }
}

export async function getOptions(
    account: Account | null,
    balances: Record<AssetId, Amount> | null = null
): Promise<TokenOptionType[]> {
    const asset_response = await fetch(ASSETS_PATH);
    const assets_res: Token[] = await asset_response.json();
    const assets: TokenOptionType[] = Object.values(assets_res)
        .map((token) => ({
            value: ALGONET === MAINNET ? `${token.id}` : `${MAINNET_TO_TESTNET_ASA_ID[token.id] ?? ''}`,
            id: ALGONET === MAINNET ? token.id : MAINNET_TO_TESTNET_ASA_ID[token.id],
            name: token.name,
            unitName: token.unit_name,
            balance: 0,
            decimals: token.decimals,
            creator: '',
        }))
        .filter((token) => token.value);

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
    assets.sort((a, b) => (a.balance < b.balance ? 1 : -1));

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
    const best_algo = bestSwap.best_swap > bestSwap.direct_swap;

    return (
        <InfoPanel isLoading={isLoading}>
            {best_algo && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <div className="token_price_text">
                        Direct swap:
                        <br />
                        {token1.unitName}-{token2.unitName}
                    </div>
                    <h3 className="token_price_value" style={{ color: 'white', padding: '10px' }}>
                        {numberRound(bestSwap.direct_swap)} {token2.unitName}
                    </h3>
                </div>
            )}
            <div
                style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', whiteSpace: 'nowrap' }}
            >
                <div className="token_price_text">
                    Best swap:
                    <br />
                    {bestSwap.best_path.map((t: { unit_name: any }) => t.unit_name).join('-')}
                </div>
                <h3
                    className="token_price_value"
                    style={{ backgroundColor: '#00ff00', color: 'black', padding: '7px', fontSize: '18px' }}
                >
                    {numberRound(bestSwap.best_swap)} {token2.unitName}
                </h3>
            </div>
            {best_algo && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '15px',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <div className="token_price_text"> </div>
                    <div className="token_price_delta">
                        +{numberRound(bestSwap.best_swap - bestSwap.direct_swap)} {token2.unitName}(
                        {numberRound(bestSwap.usdc_diff)}$)
                    </div>
                </div>
            )}
            <InfoRow
                title="Price"
                value={`${numberRound(pricePerToken)} ${token2.unitName} per ${token1.unitName}`}
                valueStyle={{ fontSize: '14px' }}
            />
            <InfoRow title="Max slippage" value={`${SLIPPAGE * 100}%`} valueStyle={{ fontSize: '14px' }} />
        </InfoPanel>
    );
}

export function Swap() {
    const account = useUnit($account);
    const balances = useUnit($balances);

    const [token1, setToken1] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token2, setToken2] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [bestSwap, setBestSwap] = useState<BestSwapPriced | null>(null);
    const [options, setOptions] = useState<TokenOptionType[]>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getOptions(account, balances).then((res) => {
            setOptions(res);
            setToken1(res[0]);
        });
    }, [balances, account]);

    const getSwapTimeout = useRef<any>();

    function getBestSwapThrottled(token1_id: string, token2_id: string, amount: string, delay: number) {
        if (!token1_id || !token2_id || !amount) {
            return;
        }
        clearTimeout(getSwapTimeout.current);
        getSwapTimeout.current = setTimeout(() => {
            setIsLoading(true);
            getBestSwap(account, token1_id, token2_id, amount).then((res) => {
                if (res !== null) {
                    setBestSwap(res);
                    setShowResult(true);
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
        setShowResult(false);
        getBestSwapThrottled(option.value, token2.value, token1Amount, 50);
    };

    const select2OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setToken2(option);
        setShowResult(false);
        getBestSwapThrottled(token1.value, option.value, token1Amount, 50);
    };

    const inputOnChange = (inputValue: string) => {
        setShowResult(false);
        getBestSwapThrottled(token1.value, token2.value, inputValue, 1000);
    };

    const FindPriceButtonOnClick = async () => {
        return getBestSwap(account, token1?.value, token2?.value, token1Amount).then((res) => {
            if (res !== null) {
                setBestSwap(res);
                setShowResult(true);
            }
        });
    };

    const SwapButtonOnClick = async () => {
        if (bestSwap !== null) {
            const res = await runTransactions(account, bestSwap, token1.balance);
            if (res !== null) {
                const txIds = res;
                notify('Done!', 'success', algoexplorerTxLink(txIds[0]));
            }
        }
    };

    return (
        <ModalContainer>
            <ModalTitle style={{ textAlign: 'center', marginBottom: 0 }}>OPTIMAL SWAP</ModalTitle>
            <ModalSubtitle>we find the optimal path to swap your token</ModalSubtitle>
            <Heading2>FROM</Heading2>
            <SelectInputGroup
                options={options}
                selectedOption={token1}
                inputData={token1Amount}
                setInputData={setToken1Amount}
                selectOnChange={select1OnChange}
                inputOnChange={inputOnChange}
            />
            <Heading2>TO</Heading2>
            <Select
                selectType={SelectType.tokenSelect}
                options={options}
                selectedOption={token2}
                selectOnChange={select2OnChange}
            />
            {!isLoading && !showResult && (
                <PacmanButton
                    buttonText="FIND BEST PRICE"
                    buttonStyle="price_button"
                    onClickAction={FindPriceButtonOnClick}
                />
            )}
            {(isLoading || showResult) && (
                <BestTokenPrice
                    isLoading={isLoading}
                    token1Amount={token1Amount}
                    bestSwap={quoteToBestSwap(bestSwap)}
                    token1={token1}
                    token2={token2}
                />
            )}
            {showResult && bestSwap && (
                <>
                    <PacmanButton buttonText="SWAP" buttonStyle="swap_button" onClickAction={SwapButtonOnClick} />
                    <h3 className="dex_name">via {bestSwap.dex == 'PT' ? 'pact' : 'tinyman'}</h3>
                </>
            )}
        </ModalContainer>
    );
}
