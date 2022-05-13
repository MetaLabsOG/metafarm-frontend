import algosdk from "algosdk";
import {Dispatch, SetStateAction, useContext, useEffect, useState} from "react";
import {AppContext, Context, reach} from '../AppContext';

import 'react-select-search/style.css';
import '../css/swap.css';
import {Token, Option, BestSwap, Transaction} from "./types";

import SelectSearch, {fuzzySearch} from "react-select-search";
import React from "react";
import {Account} from "@reach-sh/stdlib/ALGO";
import {logEvent} from "../logEvent";

const ASSETS_PATH = 'https://asa-list.tinyman.org/assets.json';
// @ts-ignore
// const API_PATH = ALGONET === MAINNET ? 'https://api.cometa.farm/' : 'https://testapi.cometa.farm/';
const API_PATH = 'https://api.cometa.farm/';


async function getBestSwap(account: Account | undefined, asset1_id: string | undefined, asset2_id: string | undefined,
                           asset1_amount: string, setIsLoading: Dispatch<SetStateAction<boolean>>,
                           setBestSwap: Dispatch<SetStateAction<BestSwap>>, setShopSwap: Dispatch<SetStateAction<boolean>>) {
    if (!asset1_id || !asset2_id) {
        alert('Please, choose tokens.');
        return;
    }

    setIsLoading(true);
    console.log(asset1_id, asset2_id, asset1_amount);

    try {
        const query = API_PATH + '/best_swap?asset1_id=' + asset1_id + '&asset2_id=' + asset2_id + '&asset1_amount=' + asset1_amount;
        const response = await fetch(query);
        const best_swap = await response.json();
        console.log(best_swap);

        logEvent(account ? account.networkAccount.addr : '', {
            message: '[FIND PRICE] ' + asset1_id + ' to ' + asset2_id,
            amount: asset1_amount,
            best_swap: best_swap.best_swap,
            direct_swap: best_swap.direct_swap,
            best_path: best_swap.best_path.map((t: { unit_name: any; }) => t.unit_name).join('-'),
            usdc_diff: best_swap.usdc_diff
        }, 'swap');

        setBestSwap(best_swap);
        setIsLoading(false);
        setShopSwap(true);
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        alert('Fail to find the best swap :(');
        logEvent(account ? account.networkAccount.addr : '', {
            message: '[ERROR FIND PRICE] Swap ' + asset1_id + ' to ' + asset2_id + ', amount: ' + asset1_amount,
            error: error_message
        }, 'swap');
        setIsLoading(false);
    }
}


async function getSwapTransactions(address: string, asset1_id: string, asset2_id: string, asset1_amount: string) {
    const query = API_PATH + '/routing_transactions?address=' + address + '&asset1_id=' + asset1_id + '&asset2_id='
        + asset2_id + '&asset1_amount=' + asset1_amount;
    const response = await fetch(query);
    return await response.json();
}


async function runRouting(algodClient: algosdk.Algodv2, address: string, asset1_id: string, asset2_id: string, asset1_amount: string) {
    const swap_transactions: Transaction = await getSwapTransactions(address, asset1_id, asset2_id, asset1_amount);
    console.log(swap_transactions);
    const transactions = swap_transactions.transactions;

    let unsigned_transactions: string[] = [];
    for (let key in transactions) {
        const current_unsigned = transactions[key].txns.filter((txn, idx) => transactions[key].signed_txns[idx].length === 0);
        // console.log(current_unsigned);
        unsigned_transactions = unsigned_transactions.concat(current_unsigned);
    }
    console.log(unsigned_transactions.length, unsigned_transactions);

    const reachTxns = unsigned_transactions.map(txn => ({txn: txn}));
    const signed_user_data = await window.algorand.signTxns(reachTxns);
    const signed_user_trans = signed_user_data.map(txn => Buffer.from(txn, 'base64'));
    console.log(signed_user_trans);

    let idx = 0;
    for (let key in transactions) {
        const signed_transactions = transactions[key].signed_txns.map(txn => Buffer.from(txn, 'base64'));
        for (let sidx = 0; sidx < signed_transactions.length; sidx += 1) {
            if (signed_transactions[sidx].length === 0) {
                signed_transactions[sidx] = signed_user_trans[idx];
                idx += 1;
            }
        }

        console.log('Sending', signed_transactions);
        await algodClient.sendRawTransaction(signed_transactions).do();
    }

    console.log('Waiting txID', swap_transactions.tx_id);
    return algosdk.waitForConfirmation(algodClient, swap_transactions.tx_id, 10);
}


async function swapTokens(account: Account | undefined,
                          bestSwap: BestSwap, token1Id: string, token2Id: string, token1Amount: string,
                          setIsLoading: Dispatch<SetStateAction<boolean>>) {
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

        const res = await runRouting(algodClient, address, token1Id, token2Id, token1Amount);
        const trx_grp = Buffer.from(res.txn.txn.grp).toString('base64');
        console.log('OK', trx_grp, res);
        alert('OK: https://algoexplorer.io/tx/group/' + encodeURIComponent(trx_grp));

        logEvent(account.networkAccount.addr, {
            message: '[SWAP OK] ' + token1Id + ' to ' + token2Id,
            amount: token1Amount,
            best_swap: bestSwap.best_swap,
            direct_swap: bestSwap.direct_swap,
            best_path: bestSwap.best_path.map((t: { unit_name: any; }) => t.unit_name).join('-'),
            usdc_diff: bestSwap.usdc_diff,
            txns: 'https://algoexplorer.io/tx/group/' + encodeURIComponent(trx_grp)
        }, 'swap');
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        if (error_message.includes('underflow')) {
            alert('Not enough tokens');
        } else if (error_message.includes('Transaction not confirmed')) {
            alert('Transaction not confirmed');
        } else{
            console.log(e);
            alert('Swap error :(');
        }
        logEvent(account.networkAccount.addr, {
            message: '[ERROR SWAP] ' + token1Id + ' to ' + token2Id + ', amount: ' + token1Amount,
            error: error_message
        }, 'swap');
    }
    setIsLoading(false);
}

async function getOptions(account?: Account): Promise<Option[]> {
    const asset_response = await fetch(ASSETS_PATH);
    const assets_res: Token[] = await asset_response.json();
    const assets: Option[] = Object.values(assets_res).map(token => ({
        value: `${token.id}`,
        name: token.name,
        unit_name: token.unit_name,
        logo: token.logo.png,
        amount: 0
    }))

    if (!account) {
        return assets;
    }

    const query = API_PATH + '/wallet_assets2/' + account.networkAccount.addr;
    const wallet_response = await fetch(query);
    const wallet_assets = await wallet_response.json();
    console.log(wallet_assets);

    assets.forEach(asset => asset.amount = wallet_assets[asset.value] ? wallet_assets[asset.value].amount : 0);
    assets.sort((a, b) => (a.amount < b.amount) ? 1 : -1);

    return assets;
}

// @ts-ignore
function renderToken(props, option) {
    const imgStyle = {
        borderRadius: '50%',
        verticalAlign: 'middle',
        margin: 10,
    };

    return (
        <button {...props} className="search_option" type="button">
            <div style={{display: "flex", alignItems: "center", whiteSpace: "nowrap"}}>
                <img alt="" style={imgStyle} width="32" height="32" src={option.logo} />
                <div>
                    <div style={{fontSize: "14px", textAlign: "left"}}>{option.name}</div>
                    <div style={{fontSize: "10px", textAlign: "left"}}>{option.unit_name}</div>
                </div>
                {option.amount > 0 && <div style={{ marginLeft: 'auto', marginRight: "10px", fontSize: "14px",
                    color: "#8b8b8b" }}>bal: {formatNumber(option.amount)}</div>}
            </div>
        </button>
    );
}

// @ts-ignore
function renderValue(valueProps, snapshot) {
    const { option } = snapshot;

    const imgStyle = {
        borderRadius: '50%',
        verticalAlign: 'middle',
        margin: 10,
    };

    return (
        <div style={{ position: 'relative' }}>
            {option && !snapshot.focus &&
                <div style={{ pointerEvents: 'none', position: 'absolute', left: 0, top: 0, right: 0, bottom: 0,
                    display: 'flex', marginTop: "10px", fontFamily: "Krona One", color: "white", alignItems: "center" }}>
                    <img alt="" style={imgStyle} width="32" height="32" src={option.logo} />
                    <div>
                        <div style={{fontSize: "14px", textAlign: "left"}}>{option.name}</div>
                        <div style={{fontSize: "10px", textAlign: "left"}}>{option.unit_name}</div>
                    </div>
                    {option.amount > 0 && <div style={{ marginLeft: 'auto', marginRight: "40px",
                        fontSize: "14px", color: "#8b8b8b" }}>bal: {formatNumber(option.amount)}</div>}
                </div>
            }
            <input {...valueProps} placeholder={snapshot.focus || !snapshot.displayValue ? 'Choose token' : ''}
                   className="search_value" value={snapshot.search} />
        </div>
    );
}

function formatNumber(x: number) {
    if (x < 0.01) {
        return Math.round(x * 1000) / 1000;
    }
    return (x > 100) ? Math.round(x) : Math.round(x * 100) / 100;
}


function BestTokenPrice({token1Amount, bestSwap, token1, token2}:
                            {token1Amount: string; bestSwap: BestSwap; token1: Option, token2: Option}) {
    const pricePerToken = bestSwap.best_swap / Number.parseFloat(token1Amount);
    const best_algo = bestSwap.best_swap > bestSwap.direct_swap;

    return <div className='token_price'>
        {best_algo && <div style={{display: "flex", justifyContent: 'space-between', marginBottom: "15px", whiteSpace: "nowrap"}}>
            <h3 className="token_price_text">Direct swap:<br/>{token1.unit_name}-{token2.unit_name}</h3>
            <h3 className="token_price_value" style={{color: "white", padding: "10px"}}>{formatNumber(bestSwap.direct_swap)} {token2.unit_name}</h3>
        </div>}
        <div style={{display: "flex", justifyContent: 'space-between', marginBottom: "15px", whiteSpace: "nowrap"}}>
            <h3 className="token_price_text">Best swap:
                <br/>{bestSwap.best_path.map((t: { unit_name: any; }) => t.unit_name).join('-')}
            </h3>
            {/*<div>*/}
                <h3 className="token_price_value" style={{backgroundColor: "#00ff00", color: "black", padding: "10px", fontSize: '15px'}}>
                    {formatNumber(bestSwap.best_swap)} {token2.unit_name}</h3>
                {/*{best_algo && <h3 style={{ color: "#8b8b8b", fontSize: "10px", textAlign: "center", marginTop: '2px'}}>including fee: 1%</h3>}*/}
            {/*</div>*/}
        </div>
        {best_algo && <div style={{display: "flex", justifyContent: 'space-between', marginBottom: "15px", whiteSpace: "nowrap"}}>
            <h3 className="token_price_text"> </h3>
            <h3 className="token_price_value">+{formatNumber(bestSwap.best_swap - bestSwap.direct_swap)} {token2.unit_name}
                ({formatNumber(bestSwap.usdc_diff)}$)</h3>
        </div>}
        <div style={{display: "flex", justifyContent: 'space-between', whiteSpace: "nowrap"}}>
            <h3 className="token_price_text">Price</h3>
            <h3 className="token_price_text">{formatNumber(pricePerToken)} {token2.unit_name} per {token1.unit_name}</h3>
        </div>
    </div>
}


export function Swap() {
    const { account } = useContext(AppContext) as Context;

    const [token1, setToken1] = useState<Option>({value: '', name: '', unit_name: '', logo: '', amount: 0});
    const [token2, setToken2] = useState<Option>({value: '', name: '', unit_name: '', logo: '', amount: 0});
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [bestSwap, setBestSwap] = useState<BestSwap>({best_swap: 0, direct_swap: 0, best_path: [], usdc_diff: 0});

    const [options, setOptions] = useState<Option[]>([]);

    const [showSwap, setShowSwap] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoading2, setIsLoading2] = useState<boolean>(false);

    useEffect(() => {
        getOptions(account).then((res) => {
            setOptions(res);
        })
    }, [account]);

    return <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{marginTop: "10px", fontSize: "27px"}}>BEST SWAP EVER</h1>
        <h3 className="swap_descr">we find the optimal path to swap your token</h3>
        <h3 className="swap_text">FROM</h3>
        <SelectSearch className="select-search"
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
                      placeholder="Choose token" />
        <input className="token_input" placeholder={'10'} onChange={(e) => setToken1Amount(e.target.value)} value={token1Amount} />
        <h3 className="swap_text">TO</h3>
        <SelectSearch className="select-search"
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
                      placeholder="Choose token" />

        <button
            className={!isLoading ? 'price_button' : 'button_loading'}
            onClick={!isLoading ? () => getBestSwap(account, token1?.value, token2?.value, token1Amount, setIsLoading, setBestSwap, setShowSwap) : undefined}
        >
            FIND BEST PRICE
            {isLoading &&
                <span className="loading">
                    <img
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                        alt="loader"
                        src={require('../imgs/loader.gif')}
                    />
                </span>
            }
        </button>
        {showSwap &&
            <React.Fragment>
                <BestTokenPrice token1Amount={token1Amount} bestSwap={bestSwap} token1={token1} token2={token2}/>
                <button
                    className={!isLoading2 ? 'swap_button' : 'button_loading'}
                    onClick={!isLoading2 ? () => swapTokens(account, bestSwap, token1?.value, token2.value, token1Amount, setIsLoading2) : undefined}
                >
                    SWAP
                    {isLoading2 &&
                        <span className="loading">
                        <img
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                                alt="loader"
                                src={require('../imgs/loader.gif')}
                        />
                        </span>
                    }
                </button>
                <h3 className="dex_name">via tinyman</h3>
            </React.Fragment>
        }
    </div>
}