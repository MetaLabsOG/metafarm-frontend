import algosdk from 'algosdk';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { reach } from '../AppContext';

import 'react-select-search/style.css';
import '../css/swap.css';
import { Token, Option, BestSwap, Transaction } from './types';
import { $account } from '../common/store';

import SelectSearch, { fuzzySearch } from 'react-select-search';
import React from 'react';
import { Account } from '@reach-sh/stdlib/ALGO';
import { logEvent } from '../logEvent';
import { useStore } from 'effector-react';

export const ASSETS_PATH = 'https://asa-list.tinyman.org/assets.json';
// @ts-ignore
export const API_PATH = ALGONET === MAINNET ? 'https://api.cometa.farm/' : 'https://testapi.cometa.farm/';
// export const API_PATH = 'http://0.0.0.0:5000/';

async function getBestSwap(
    account: Account | null,
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setBestSwap: Dispatch<SetStateAction<BestSwap>>,
    setShopSwap: Dispatch<SetStateAction<boolean>>
) {
    if (!asset1_id || !asset2_id) {
        alert('Please, choose tokens.');
        return;
    }

    setIsLoading(true);
    console.log(asset1_id, asset2_id, asset1_amount);

    try {
        const best_swap = await getData('swap', asset1_id, asset2_id, asset1_amount);
        console.log(best_swap);

        logEvent(
            account ? account.networkAccount.addr : '',
            {
                message: '[FIND PRICE] ' + asset1_id + ' to ' + asset2_id,
                amount: asset1_amount,
                best_swap: best_swap.best_swap,
                direct_swap: best_swap.direct_swap,
                best_path: best_swap.best_path.map((t: { unit_name: any }) => t.unit_name).join('-'),
                usdc_diff: best_swap.usdc_diff,
            },
            'swap'
        );

        setBestSwap(best_swap);
        setIsLoading(false);
        setShopSwap(true);
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        console.log(error_message);
        alert('Fail to find the best swap :(');
        logEvent(
            account ? account.networkAccount.addr : '',
            {
                message: '[ERROR FIND PRICE] Swap ' + asset1_id + ' to ' + asset2_id + ', amount: ' + asset1_amount,
                error: error_message,
            },
            'swap'
        );
        setIsLoading(false);
    }
}

export async function getData(type: string, asset1_id: string, asset2_id: string, asset1_amount: string,
                              additional_params="") {
    const query =
        API_PATH +
        type +
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


export async function getTransactions(type:string, address: string, asset1_id: string, asset2_id: string, asset1_amount: string,
                                      additional_params="") {
    const query =
        API_PATH +
        type +
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

export async function signAndSubmitTransactions(
    algodClient: algosdk.Algodv2,
    input_transactions: Transaction
) {
    console.log(input_transactions);
    const transactions = input_transactions.transactions;

    let unsigned_transactions: string[] = [];
    for (let key in transactions) {
        const current_unsigned = transactions[key].txns.filter(
            (txn, idx) => transactions[key].signed_txns[idx].length === 0
        );
        // console.log(current_unsigned);
        unsigned_transactions = unsigned_transactions.concat(current_unsigned);
    }
    console.log(unsigned_transactions.length, unsigned_transactions);

    const reachTxns = unsigned_transactions.map((txn) => ({ txn: txn }));
    const signed_user_data = await window.algorand.signTxns(reachTxns);
    const signed_user_trans = signed_user_data.map((txn) => Buffer.from(txn, 'base64'));
    console.log(signed_user_trans);

    let idx = 0;
    for (let key in transactions) {
        const signed_transactions = transactions[key].signed_txns.map((txn) => Buffer.from(txn, 'base64'));
        for (let sidx = 0; sidx < signed_transactions.length; sidx += 1) {
            if (signed_transactions[sidx].length === 0) {
                signed_transactions[sidx] = signed_user_trans[idx];
                idx += 1;
            }
        }

        console.log('Sending', signed_transactions);
        await algodClient.sendRawTransaction(signed_transactions).do();
        const tx_id = transactions[key].tx_id;
        if (tx_id) {
            console.log('Waiting txID', tx_id);
            await algosdk.waitForConfirmation(algodClient, tx_id, 5);
        }
    }

    console.log('Waiting txID', input_transactions.tx_id);
    return algosdk.waitForConfirmation(algodClient, input_transactions.tx_id, 5);
}

export async function runTransactions(
    type: string,
    account: Account | null,
    token1Id: string,
    token2Id: string,
    token1Amount: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    additional_params=""
) {
    if (!account) {
        alert('Please, connect the wallet');
        return;
    }

    setIsLoading(true);
    try {
        const provider = await reach.getProvider();
        const algodClient = provider.algodClient;

        const address = account.networkAccount.addr;
        console.log(address);

        const transactions: Transaction = await getTransactions(
            type, address, token1Id, token2Id, token1Amount, additional_params);
        console.log(transactions);
        const res = await signAndSubmitTransactions(algodClient, transactions);
        const trx_grp = Buffer.from(res.txn.txn.grp).toString('base64');
        console.log('OK', trx_grp, res);
        alert('OK: https://algoexplorer.io/tx/group/' + encodeURIComponent(trx_grp));

        logEvent(
            account.networkAccount.addr,
            {
                message: '[' + type +  ' OK] ' + token1Id + ' to ' + token2Id,
                amount: token1Amount,
                txns: 'https://algoexplorer.io/tx/group/' + encodeURIComponent(trx_grp),
            },
            type
        );
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        if (error_message.includes('underflow')) {
            alert('Not enough tokens');
        } else if (error_message.includes('Transaction not confirmed')) {
            alert('Transaction not confirmed');
        } else {
            console.log(e);
            alert(type + ' error :(');
        }
        logEvent(
            account.networkAccount.addr,
            {
                message: '[ERROR ' + type + '] ' + token1Id + ' to ' + token2Id + ', amount: ' + token1Amount,
                error: error_message,
            },
            type
        );
    }
    setIsLoading(false);
}

export async function getOptions(account: Account | null): Promise<Option[]> {
    const asset_response = await fetch(ASSETS_PATH);
    const assets_res: Token[] = await asset_response.json();
    const assets: Option[] = Object.values(assets_res).map((token) => ({
        value: `${token.id}`,
        name: token.name,
        unit_name: token.unit_name,
        logo: token.logo.png,
        amount: 0,
    }));

    if (!account) {
        return assets;
    }

    const query = API_PATH + 'wallet_assets2/' + account.networkAccount.addr;
    const wallet_response = await fetch(query);
    const wallet_assets = await wallet_response.json();
    console.log(wallet_assets);

    assets.forEach((asset) => (asset.amount = wallet_assets[asset.value] ? wallet_assets[asset.value].amount : 0));
    assets.sort((a, b) => (a.amount < b.amount ? 1 : -1));

    return assets;
}

// @ts-ignore
function TokenDescr({option}) {
    return <React.Fragment>
        <img alt="" className="token_icon" width="32" height="32" src={option.logo} />
        <div>
            <div style={{ fontSize: '16px', textAlign: 'left' }}>{option.name}</div>
            <div style={{ fontSize: '12px', textAlign: 'left' }}>{option.unit_name}</div>
        </div>
        {option.amount > 0 && (
            <div style={{ marginLeft: 'auto', marginRight: '50px', fontFamily: 'Montserrat', fontSize: '14px', color: '#8b8b8b' }}>
                bal: {formatNumber(option.amount)}
            </div>
        )}
    </React.Fragment>
}

// @ts-ignore
export function renderToken(props, option) {
    return <button {...props} className="search_option" type="button">
            <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Montserrat', whiteSpace: 'nowrap' }}>
                <TokenDescr option={option}/>
            </div>
        </button>
}

// @ts-ignore
export function renderValue(valueProps, snapshot) {
    const { option } = snapshot;

    return <div style={{ position: 'relative' }}>
        {option && !snapshot.focus && (
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    marginTop: '10px',
                    fontFamily: 'Montserrat',
                    color: 'white',
                    alignItems: 'center',
                }}
            >
                <TokenDescr option={option}/>
            </div>
        )}
        <input
            {...valueProps}
            placeholder={snapshot.focus || !snapshot.displayValue ? 'Choose token' : ''}
            className="search_value"
            value={snapshot.search}
        />
    </div>
}

export function formatNumber(x: number) {
    if (x < 0.01) {
        return Math.round(x * 1000) / 1000;
    }
    return x > 100 ? Math.round(x) : Math.round(x * 100) / 100;
}

function BestTokenPrice({
    token1Amount,
    bestSwap,
    token1,
    token2,
}: {
    token1Amount: string;
    bestSwap: BestSwap;
    token1: Option;
    token2: Option;
}) {
    const pricePerToken = bestSwap.best_swap / Number.parseFloat(token1Amount);
    const best_algo = bestSwap.best_swap > bestSwap.direct_swap;

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
                {/*<div>*/}
                <h3
                    className="token_price_value"
                    style={{ backgroundColor: '#00ff00', color: 'black', padding: '7px', fontSize: '18px' }}
                >
                    {formatNumber(bestSwap.best_swap)} {token2.unit_name}
                </h3>
                {/*{best_algo && <h3 style={{ color: "#8b8b8b", fontSize: "10px", textAlign: "center", marginTop: '2px'}}>including fee: 1%</h3>}*/}
                {/*</div>*/}
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

export function Swap() {
    const account = useStore($account);

    const [token1, setToken1] = useState<Option>({ value: '', name: '', unit_name: '', logo: '', amount: 0 });
    const [token2, setToken2] = useState<Option>({ value: '', name: '', unit_name: '', logo: '', amount: 0 });
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [bestSwap, setBestSwap] = useState<BestSwap>({ best_swap: 0, direct_swap: 0, best_path: [], usdc_diff: 0 });

    const [options, setOptions] = useState<Option[]>([]);

    const [showSwap, setShowSwap] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoading2, setIsLoading2] = useState<boolean>(false);

    useEffect(() => {
        getOptions(account).then((res) => {
            setOptions(res);
        });
    }, [account]);

    return (
        <div className="swap_container">
            <h1 className="swap_header">OPTIMAL SWAP</h1>
            <h3 className="swap_descr">we find the optimal path to swap your token</h3>
            <h3 className="swap_text">FROM</h3>
            <SelectSearch
                className="select-search"
                options={options}
                filterOptions={fuzzySearch}
                renderOption={renderToken}
                renderValue={renderValue}
                search={true}
                value={token1?.value}
                onChange={(_, option) => {
                    // @ts-ignore
                    setToken1(option);
                    setShowSwap(false);
                }}
                placeholder="Choose token"
            />
            <input
                className="token_input"
                placeholder={'10'}
                onChange={(e) => setToken1Amount(e.target.value)}
                value={token1Amount}
            />
            <h3 className="swap_text">TO</h3>
            <SelectSearch
                className="select-search"
                options={options}
                filterOptions={fuzzySearch}
                renderOption={renderToken}
                renderValue={renderValue}
                search={true}
                value={token2?.value}
                onChange={(_, options) => {
                    // @ts-ignore
                    setToken2(options);
                    setShowSwap(false);
                }}
                placeholder="Choose token"
            />

            <button
                className={!isLoading ? 'price_button' : 'button_loading'}
                onClick={
                    !isLoading
                        ? () =>
                              getBestSwap(
                                  account,
                                  token1?.value,
                                  token2?.value,
                                  token1Amount,
                                  setIsLoading,
                                  setBestSwap,
                                  setShowSwap
                              )
                        : undefined
                }
            >
                FIND BEST PRICE
                {isLoading && (
                    <span className="loading">
                        <img
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                            alt="loader"
                            src={require('../imgs/loader.gif')}
                        />
                    </span>
                )}
            </button>
            {showSwap && (
                <React.Fragment>
                    <BestTokenPrice token1Amount={token1Amount} bestSwap={bestSwap} token1={token1} token2={token2} />
                    <button
                        className={!isLoading2 ? 'swap_button' : 'button_loading'}
                        onClick={
                            !isLoading2
                                ? () =>
                                    runTransactions(
                                        'swap',
                                          account,
                                          token1?.value,
                                          token2.value,
                                          token1Amount,
                                          setIsLoading2
                                      )
                                : undefined
                        }
                    >
                        SWAP
                        {isLoading2 && (
                            <span className="loading">
                                <img
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    alt="loader"
                                    src={require('../imgs/loader.gif')}
                                />
                            </span>
                        )}
                    </button>
                    <h3 className="dex_name">via tinyman</h3>
                </React.Fragment>
            )}
        </div>
    );
}
