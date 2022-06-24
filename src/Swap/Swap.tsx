import algosdk, { IntDecoding, waitForConfirmation } from 'algosdk';
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ALGONET, MAINNET, META_TOKEN_ID, reach } from '../AppContext';

import 'react-select-search/style.css';
import '../css/swap.css';
import { BestSwap, Token, TokenSelectOption, Transaction } from './types';
import { $account, $balances, Amount, AssetId, refreshAccountInfo } from '../common/store';

import SelectSearch, { fuzzySearch, SelectedOption, SelectedOptionValue } from 'react-select-search';
import { Account } from '@reach-sh/stdlib/ALGO';
import { logEvent, LogName } from '../logEvent';
import { useStore } from 'effector-react';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { withAlgodEncoding } from '../common/lib';
import { WalletTransaction } from '../types';
import { zip } from 'ramda';

export const ASSETS_PATH = 'https://asa-list.tinyman.org/assets.json';
export const API_PATH = ALGONET === MAINNET ? 'https://api.cometa.farm/' : 'https://api.testnet.cometa.farm/';
// export const API_PATH = 'http://0.0.0.0:5000/';

const MAINNET_TO_TESTNET_ASA_ID: Record<string, number> = {
    0: 0, // ALGO
    712012773: 85951079, // META
    386192725: 19386116, // goBTC
    31566704: 10458941, // USDC
    463554836: 70283957, // ALGF
};

export const TOKEN_INITIAL_STATE = {
    value: '',
    name: '',
    unit_name: '',
    logo: '',
    balance: 0,
    decimals: 0,
};

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

async function getBestSwap(
    account: Account | null,
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string,
    setBestSwap: Dispatch<SetStateAction<BestSwap>>,
    setShopSwap: Dispatch<SetStateAction<boolean>>
) {
    if (!asset1_id || !asset2_id) {
        alert('Please, choose tokens.');
        return;
    }

    if (!asset1_amount) {
        alert('Please, enter the token amount.');
        return;
    }

    console.log('[SWAP] get data:', asset1_id, asset2_id, asset1_amount);

    try {
        const best_swap = await getData(QueryType.swap, asset1_id, asset2_id, asset1_amount);
        console.log(best_swap);

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[SWAP] get data',
                asset1_id: asset1_id,
                asset2_id: asset2_id,
                amount: asset1_amount,
                best_swap: best_swap.best_swap,
                direct_swap: best_swap.direct_swap,
                best_path: best_swap.best_path.map((t: { unit_name: any }) => t.unit_name).join('-'),
                usdc_diff: best_swap.usdc_diff,
            },
            LogName.SWAP
        );

        setBestSwap(best_swap);
        setShopSwap(true);
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        console.log(error_message);
        alert('Fail to find the best swap :(');
        logEvent(
            account?.networkAccount.addr,
            {
                message: '[SWAP ERROR] get data',
                asset1_id: asset1_id,
                asset2_id: asset2_id,
                amount: asset1_amount,
                error: error_message,
            },
            LogName.SWAP
        );
    }
}

export async function getData(
    type: QueryType,
    asset1_id: string,
    asset2_id: string,
    asset1_amount: string,
    additional_params = ''
) {
    const query =
        API_PATH +
        QueryType[type] +
        '_data?asset1_id=' +
        asset1_id +
        '&asset2_id=' +
        asset2_id +
        '&asset1_amount=' +
        asset1_amount +
        additional_params;
    const response = await fetch(query);
    return await response.json();
}

export async function getTransactions(
    type: QueryType,
    address: string,
    asset1_id: string,
    asset2_id: string,
    asset1_amount: string,
    additional_params = ''
) {
    const query =
        API_PATH +
        QueryType[type] +
        '_transactions?address=' +
        address +
        '&asset1_id=' +
        asset1_id +
        '&asset2_id=' +
        asset2_id +
        '&asset1_amount=' +
        asset1_amount +
        additional_params;
    const response = await fetch(query);
    return await response.json();
}

export async function signAndSubmitTransactions(algodClient: algosdk.Algodv2, input_transactions: Transaction) {
    const transactions = input_transactions.transactions;

    console.log('TRANSACTIONS', transactions);

    let reachTxns: WalletTransaction[] = [];
    for (let key in transactions) {
        const cur = transactions[key];
        reachTxns = reachTxns.concat(
            zip(cur.txns, cur.signed_txns).map(([txn, stxn]) =>
                typeof stxn === 'string' && stxn.length > 0 ? { txn, stxn } : { txn }
            )
        );
    }

    const signed_user_data = await window.algorand.signTxns(reachTxns);
    const signed_user_trans = signed_user_data.map((txn) => Buffer.from(txn, 'base64'));

    let idx = 0;
    for (let key in transactions) {
        const signed_transactions = transactions[key].signed_txns.map((txn) => Buffer.from(txn as string, 'base64'));
        for (let sidx = 0; sidx < signed_transactions.length; sidx += 1) {
            if (signed_transactions[sidx].length === 0) {
                signed_transactions[sidx] = signed_user_trans[idx];
            }
            idx += 1;
        }

        console.log('Sending', signed_transactions);
        await algodClient.sendRawTransaction(signed_transactions).do();
        const tx_id = transactions[key].tx_id;
        if (tx_id) {
            console.log('Waiting txID', tx_id);
            await withAlgodEncoding(algodClient, IntDecoding.DEFAULT, (algod) => {
                return waitForConfirmation(algod, tx_id, 5);
            });
        }
    }

    return 'https://testnet.algoexplorer.io/tx/' + input_transactions.tx_id;

    // const trx = await algosdk.waitForConfirmation(algodClient, input_transactions.tx_id, 5);
    // const trx_grp = Buffer.from(trx.txn.txn.grp).toString('base64');
    // return 'https://algoexplorer.io/tx/group/' + encodeURIComponent(trx_grp);
}

export async function runTransactions(
    type: QueryType,
    account: Account | null,
    token1Id: string,
    token2Id: string,
    token1Amount: string,
    additional_params = ''
) {
    if (!account) {
        alert('Please, connect the wallet');
        return;
    }

    if (!token1Amount) {
        alert('Please, enter the token amount.');
        return;
    }

    try {
        const provider = await reach.getProvider();
        const algodClient = provider.algodClient;

        const address = account.networkAccount.addr;

        const transactions: Transaction = await getTransactions(
            type,
            address,
            token1Id,
            token2Id,
            token1Amount,
            additional_params
        );
        // console.log(transactions);
        const result_tx_id = await signAndSubmitTransactions(algodClient, transactions);
        console.log('OK', result_tx_id);
        refreshAccountInfo();

        logEvent(
            account.networkAccount.addr,
            {
                message: '[' + QueryType[type].toUpperCase() + ' OK]',
                asset1_id: token1Id,
                asset2_id: token2Id,
                amount: token1Amount,
                txns: result_tx_id,
            },
            type === QueryType.swap ? LogName.SWAP : LogName.ZAP
        );

        return result_tx_id;
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        const queryType = QueryType[type].toUpperCase();
        if (error_message.includes('underflow')) {
            alert(queryType + ': Not enough tokens');
        } else if (error_message.includes('Transaction not confirmed')) {
            alert(queryType + ': Transaction not confirmed');
        } else if (error_message.includes('would result negative')) {
            alert(queryType + ': Result slippage is higher than expected.');
        } else if (error_message.includes('popup')) {
            alert(queryType + ': Popups are blocked. Please, allow popups in your browser.');
        } else if (error_message.includes('missing')) {
            alert(queryType + ": Your wallet doesn't have the input token.");
        } else if (error_message.includes('below min') || error_message.includes('overspend')) {
            alert(queryType + ': Not enough available algos.');
        } else {
            alert(queryType + ' error. Please, contact us in twitter or discord.');
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
    }
}

export async function getOptions(balances: Record<AssetId, Amount> | null = null): Promise<TokenSelectOption[]> {
    const asset_response = await fetch(ASSETS_PATH);
    const assets_res: Token[] = await asset_response.json();
    const assets: TokenSelectOption[] = Object.values(assets_res)
        .map((token) => ({
            value: ALGONET === MAINNET ? `${token.id}` : `${MAINNET_TO_TESTNET_ASA_ID[token.id] ?? ''}`,
            name: token.name,
            unit_name: token.unit_name,
            logo: token.logo.png,
            balance: 0,
            decimals: token.decimals,
        }))
        .filter((token) => token.value);

    // TODO hack for glitter
    assets.push({
        value: '96690352',
        name: 'goSOL',
        unit_name: 'goSOL',
        logo: 'https://gateway.pinata.cloud/ipfs/QmXhUDU7QNxWg27JipSvLxc3wcsEL23RJW5fjDvEGzbZSb',
        balance: 0,
        decimals: 8,
    });

    if (!balances) {
        return assets;
    }

    assets.forEach((asset) => {
        const asset_balance = Number(balances[Number(asset.value)]) / 10 ** asset.decimals;
        asset.balance = asset_balance ?? 0;

        // TODO: remove it
        if (asset.value === META_TOKEN_ID.toString()) {
            asset.balance /= 10 ** 2;
        }
    });
    assets.sort((a, b) => (a.balance < b.balance ? 1 : -1));

    return assets;
}

// @ts-ignore
function TokenDescrShort({ option }) {
    return (
        <React.Fragment>
            <img alt="" className="token_icon" width="32" height="32" src={option.logo} />
            <div style={{ fontSize: '16px', textAlign: 'left' }}>{option.unit_name}</div>
        </React.Fragment>
    );
}

// @ts-ignore
function TokenDescrLong({ option }) {
    return (
        <React.Fragment>
            <img alt="" className="token_icon" width="32" height="32" src={option.logo} />
            <div>
                <div style={{ fontSize: '16px', textAlign: 'left' }}>{option.name}</div>
                <div style={{ fontSize: '12px', textAlign: 'left' }}>{option.unit_name}</div>
            </div>
            {option.amount > 0 && (
                <div
                    style={{
                        marginLeft: 'auto',
                        marginRight: '50px',
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        color: '#8b8b8b',
                    }}
                >
                    bal: {formatNumber(option.amount)}
                </div>
            )}
        </React.Fragment>
    );
}

// @ts-ignore
export function renderToken(props, option) {
    return (
        <button {...props} className="search_option" type="button">
            <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Montserrat', whiteSpace: 'nowrap' }}>
                <TokenDescrLong option={option} />
            </div>
        </button>
    );
}

// @ts-ignore
export function renderValueShort(valueProps, snapshot) {
    const { option } = snapshot;

    return (
        <div style={{ position: 'relative' }}>
            {option && !snapshot.focus && (
                <div className="token_descr">
                    <TokenDescrShort option={option} />
                </div>
            )}
            <input
                {...valueProps}
                placeholder={snapshot.focus || !snapshot.displayValue ? 'Choose token' : ''}
                className="search_value"
                value={snapshot.search}
            />
        </div>
    );
}

// @ts-ignore
export function renderValue(valueProps, snapshot) {
    const { option } = snapshot;

    return (
        <div style={{ position: 'relative' }}>
            {option && !snapshot.focus && (
                <div className="token_descr">
                    <TokenDescrLong option={option} />
                </div>
            )}
            <input
                {...valueProps}
                placeholder={snapshot.focus || !snapshot.displayValue ? 'Choose token' : ''}
                className="search_value search_value_basic"
                value={snapshot.search}
            />
        </div>
    );
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
    token1: TokenSelectOption;
    token2: TokenSelectOption;
}) {
    const pricePerToken =
        Number.parseFloat(token1Amount) > 0 ? bestSwap.best_swap / Number.parseFloat(token1Amount) : 0;
    const best_algo = bestSwap.best_swap > bestSwap.direct_swap;

    if (isLoading) {
        return (
            <div className="token_price" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    style={{ width: '50px', height: '50px', margin: 'auto' }}
                    alt="loader"
                    src={require('../imgs/loader.gif')}
                />
            </div>
        );
    }

    return (
        <div className="token_price">
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
                        {token1.unit_name}-{token2.unit_name}
                    </div>
                    <h3 className="token_price_value" style={{ color: 'white', padding: '10px' }}>
                        {formatNumber(bestSwap.direct_swap)} {token2.unit_name}
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
                    {formatNumber(bestSwap.best_swap)} {token2.unit_name}
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
                        +{formatNumber(bestSwap.best_swap - bestSwap.direct_swap)} {token2.unit_name}(
                        {formatNumber(bestSwap.usdc_diff)}$)
                    </div>
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', whiteSpace: 'nowrap' }}>
                <div className="token_price_text">Price</div>
                <div className="token_price_text">
                    {formatNumber(pricePerToken)} {token2.unit_name} per {token1.unit_name}
                </div>
            </div>
        </div>
    );
}

export function TokenSelectWithAmount({
    options,
    token,
    tokenAmount,
    selectOnChange,
    inputOnChange,
}: {
    options: any;
    token: TokenSelectOption;
    tokenAmount: string;
    selectOnChange: any;
    inputOnChange: any;
}) {
    return (
        <div
            style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                width: '350px',
            }}
        >
            <SelectSearch
                className="select-search"
                options={options}
                filterOptions={fuzzySearch}
                renderOption={renderToken}
                renderValue={renderValueShort}
                search={true}
                value={token.value}
                onChange={selectOnChange}
                placeholder=""
            />
            <div style={{ width: '100%' }}>
                <input
                    className="token_input"
                    placeholder={'Enter amount'}
                    onChange={inputOnChange}
                    value={tokenAmount}
                />
                {token.balance > 0 && <div className="token_balance">Balance: {formatNumber(token.balance)}</div>}
            </div>
        </div>
    );
}

export function TokenSelect({
    options,
    token,
    selectOnChange,
}: {
    options: any;
    token: TokenSelectOption;
    selectOnChange: any;
}) {
    return (
        <SelectSearch
            className="select-search select-search-basic"
            options={options}
            filterOptions={fuzzySearch}
            renderOption={renderToken}
            renderValue={renderValue}
            search={true}
            value={token.value}
            onChange={selectOnChange}
            placeholder="Choose token"
        />
    );
}

export function Swap() {
    const account = useStore($account);
    const balances = useStore($balances);

    const [token1, setToken1] = useState<TokenSelectOption>(TOKEN_INITIAL_STATE);
    const [token2, setToken2] = useState<TokenSelectOption>(TOKEN_INITIAL_STATE);
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [bestSwap, setBestSwap] = useState<BestSwap>({ best_swap: 0, direct_swap: 0, best_path: [], usdc_diff: 0 });
    const [options, setOptions] = useState<TokenSelectOption[]>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getOptions(balances).then((res) => {
            setOptions(res);
            setToken1(res[0]);
        });
    }, [balances]);

    const getSwapTimeout = useRef<any>();

    function getBestSwapThrottled(token1_id: string, token2_id: string, amount: string, delay: number) {
        if (!token1_id || !token2_id || !amount) {
            return;
        }
        clearTimeout(getSwapTimeout.current);
        getSwapTimeout.current = setTimeout(() => {
            setIsLoading(true);
            getBestSwap(account, token1_id, token2_id, amount, setBestSwap, setShowResult).then(() =>
                setIsLoading(false)
            );
        }, delay);
    }

    const select1OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // @ts-ignore
        setToken1(option);
        setShowResult(false);
        getBestSwapThrottled(option.value, token2.value, token1Amount, 50);
    };

    const select2OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // @ts-ignore
        setToken2(option);
        setShowResult(false);
        getBestSwapThrottled(token1.value, option.value, token1Amount, 50);
    };

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number(e.target.value))) {
            return;
        }
        setShowResult(false);
        setToken1Amount(e.target.value);
        getBestSwapThrottled(token1.value, token2.value, e.target.value, 1000);
    };

    const FindPriceButtonOnClick = async () => {
        return getBestSwap(account, token1?.value, token2?.value, token1Amount, setBestSwap, setShowResult);
    };

    const SwapButtonOnClick = async () => {
        const result_tx_id = await runTransactions(QueryType.swap, account, token1?.value, token2.value, token1Amount);
        if (result_tx_id) {
            alert('OK ' + result_tx_id);
        }
    };

    return (
        <div className="swap_container">
            <h1 className="swap_header">OPTIMAL SWAP</h1>
            <h3 className="swap_descr">we find the optimal path to swap your token</h3>
            <h3 className="swap_text">FROM</h3>
            <TokenSelectWithAmount
                options={options}
                token={token1}
                tokenAmount={token1Amount}
                selectOnChange={select1OnChange}
                inputOnChange={inputOnChange}
            />
            <h3 className="swap_text">TO</h3>
            <TokenSelect options={options} token={token2} selectOnChange={select2OnChange} />
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
                    bestSwap={bestSwap}
                    token1={token1}
                    token2={token2}
                />
            )}
            {showResult && (
                <React.Fragment>
                    <PacmanButton buttonText="SWAP" buttonStyle="swap_button" onClickAction={SwapButtonOnClick} />
                    <h3 className="dex_name">via tinyman</h3>
                </React.Fragment>
            )}
        </div>
    );
}
