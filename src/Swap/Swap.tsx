import React, { useEffect, useRef, useState } from 'react';
import { useUnit } from 'effector-react';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useModal } from 'react-hooks-use-modal';
import { func } from 'prop-types';
import AlammexQuote from 'alammex-sdk-js/dist/v0/AlammexQuote';
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
import { DexName, ModalContainer, ModalSubtitle, ModalTitle, SwapArrow, SwapContainer } from '../common/styled';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { TokenOptionType } from '../Components/Select/types';
import { BestSwap, Mint, tinymanDex, Zap } from '../dexes';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { notify } from '../Components/Notification';
import { getTokenLink, numberRound } from '../Farm/PoolList/Pool/utils';
import swap from '../imgs/swap.svg';
import { checkNftLottery } from '../providers/apiProvider';
import { Token } from './types';
import { NftLottery, NftWinModal } from './NftWinModal';
import { AlammexSwap } from './AlammexSwap';

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

export const SLIPPAGE = 0.01;

export enum QueryType {
    swap,
    zap,
    mint,
    alammexSwap,
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
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string
): Promise<AlammexSwap | null> {
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

        const alammexQuote: AlammexQuote = await alammexClient.getFixedInputSwapQuote(
            asset1_id,
            asset2_id,
            Number(amountIn)
        );
        // const bestSwap = await tinymanDex.getBestSwapQuote(asset1, asset2, amountIn, SLIPPAGE);
        const bestSwap = new AlammexSwap(alammexQuote, asset1, asset2, amountIn);

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
    operation: BestSwap | Zap | Mint | AlammexSwap,
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
            QueryType.alammexSwap,
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

function BestTokenPrice({
    isLoading,
    token1Amount,
    swapInfo,
    token1,
    token2,
}: {
    isLoading: boolean;
    token1Amount: string;
    swapInfo: AlammexSwap | BestSwap | null;
    token1: TokenOptionType;
    token2: TokenOptionType;
}) {
    const best_swap = swapInfo ? swapInfo.amountOut : 0;
    // const best_path = swapInfo ? swapInfo.pathString : '';
    const priceImpact = swapInfo ? swapInfo.getPriceImpact() : 0;
    const pricePerToken = Number.parseFloat(token1Amount) > 0 ? best_swap / Number.parseFloat(token1Amount) : 0;

    return (
        <InfoPanel isLoading={isLoading} minHeight={152}>
            <InfoRow
                title="Minimum received"
                value={numberRound(best_swap * (1 - SLIPPAGE)) + ' ' + token2.unitName}
                valueStyle={{ fontSize: '16px', color: theme.newWhite, fontWeight: 600 }}
            />
            <InfoRow title="Price" value={`${numberRound(pricePerToken)} ${token2.unitName} per ${token1.unitName}`} />
            <InfoRow title="Max slippage" value={`${SLIPPAGE * 100}%`} valueStyle={{ fontSize: '14px' }} />
            <InfoRow title="Price impact" value={`${numberRound(priceImpact * 100)}%`} />
            {/*<InfoRow title="Route" value={best_path} />*/}
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
    const [bestSwap, setBestSwap] = useState<AlammexSwap | null>(null);
    const [options, setOptions] = useState<TokenOptionType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [nft, setNft] = useState<NftLottery | null>(null);

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
                const best_swap = res ? res.amountOut : 0;
                setToken2Amount(numberRound(best_swap));
                setIsLoading(false);
            });
        }, delay);
    }

    const select1OnChange = (option: TokenOptionType) => {
        setToken1(option);
        setToken1Amount('');
        getBestSwapThrottled(option.value, token2.value, token1Amount, 50);
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

    const SwapButtonOnClick = async () => {
        if (!isSwapZapDataValid(token1.value, token2.value, token1Amount)) {
            return;
        }
        if (bestSwap !== null) {
            const res = await runTransactions(account, bestSwap, token1.balance);
            if (res !== null) {
                const txId = res[0];
                notify('Done!', 'success', algoexplorerTxLink(txId));

                // Check NFT winning
                const nft = await checkNftLottery(
                    res,
                    account?.networkAccount.addr ?? '',
                    bestSwap.assetA.id,
                    bestSwap.assetB.id,
                    Number(token1Amount),
                    Number(token2Amount)
                );
                if (nft) {
                    setNft(nft);
                }
            }
        }
    };

    if (nft) {
        return <NftWinModal nft={nft} />;
    }

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
            <SwapContainer>
                <SwapArrow alt="arrow" src={swap} onClick={swapTokens} />
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
            <BestTokenPrice
                isLoading={isLoading}
                token1Amount={token1Amount}
                swapInfo={bestSwap}
                token1={token1}
                token2={token2}
            />
            <PacmanButton
                buttonText="SWAP"
                buttonStyle="swap_button"
                onClickAction={SwapButtonOnClick}
                style={{ marginTop: 20 }}
            />
            <a target="_blank" href="https://www.alammex.com/" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <DexName>via Deflex</DexName>
            </a>
        </ModalContainer>
    );
}
