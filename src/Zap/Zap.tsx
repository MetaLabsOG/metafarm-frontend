import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import 'react-select-search/style.css';
import '../css/swap.css';
import { TokenSelectOption } from '../Swap/types';
import { ZapData } from './types';
import { $account } from '../common/store';

import SelectSearch, { fuzzySearch } from 'react-select-search';
import { Account } from '@reach-sh/stdlib/ALGO';
import { logEvent } from '../logEvent';
import { useStore } from 'effector-react';
import { formatNumber, getData, getOptions, QueryType, renderToken, renderValue, runTransactions } from '../Swap/Swap';

async function loadZapData(
    account: Account | null,
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setResult: Dispatch<SetStateAction<ZapData>>,
    setShowResults: Dispatch<SetStateAction<boolean>>
) {
    if (!asset1_id || !asset2_id) {
        alert('Please, choose tokens.');
        return;
    }

    setIsLoading(true);
    console.log(asset1_id, asset2_id, asset1_amount);

    try {
        const zap_data: ZapData = await getData(QueryType.zap, asset1_id, asset2_id, asset1_amount, '&swap_half=true');

        logEvent(
            account ? account.networkAccount.addr : '',
            {
                message: '[ZAP] ' + asset1_id + ' to ' + asset2_id,
                amount: asset1_amount,
                asset2_amount: zap_data.asset2_amount,
                lp_amount: zap_data.lp_amount,
            },
            'zap'
        );

        setResult(zap_data);
        setIsLoading(false);
        setShowResults(true);
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        alert(error_message);
        logEvent(
            account ? account.networkAccount.addr : '',
            {
                message: '[ERROR ZAP] Swap ' + asset1_id + ' to ' + asset2_id + ', amount: ' + asset1_amount,
                error: error_message,
            },
            'zap'
        );
        setIsLoading(false);
    }
}

function ZapResult({
    zap_data,
    token1,
    token2,
}: {
    zap_data: ZapData;
    token1: TokenSelectOption;
    token2: TokenSelectOption;
}) {
    return (
        <div className="token_price">
            <div style={{ display: 'flex', justifyContent: 'space-between', whiteSpace: 'nowrap' }}>
                <h3 className="token_price_text">
                    {token1.unit_name}-{token2.unit_name} LP
                </h3>
                <h3 className="token_price_zap_value">{formatNumber(zap_data.lp_amount)}</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', whiteSpace: 'nowrap', marginTop: '10px' }}>
                <h3 className="token_price_text"></h3>
                <h3 className="token_price_text">
                    {zap_data.asset1_amount} {token1.unit_name} + {formatNumber(zap_data.asset2_amount)}{' '}
                    {token2.unit_name}
                </h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', whiteSpace: 'nowrap', marginTop: '10px' }}>
                <h3 className="token_price_text">LP ASA ID</h3>
                <h3 className="token_price_text">{formatNumber(zap_data.pool_lp_id)}</h3>
            </div>
        </div>
    );
}

export function Zap() {
    const account = useStore($account);

    const [token1, setToken1] = useState<TokenSelectOption>({
        value: '',
        name: '',
        unit_name: '',
        logo: '',
        amount: 0,
    });
    const [token2, setToken2] = useState<TokenSelectOption>({
        value: '',
        name: '',
        unit_name: '',
        logo: '',
        amount: 0,
    });
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [zapData, setZapData] = useState<ZapData>({
        asset1_amount: 0,
        asset2_amount: 0,
        lp_amount: 0,
        pool_lp_id: 0,
    });

    const [options, setOptions] = useState<TokenSelectOption[]>([]);

    const [showResult, setShowResult] = useState<boolean>(false);
    const [isLoading1, setIsLoading1] = useState<boolean>(false);
    const [isLoading2, setIsLoading2] = useState<boolean>(false);

    useEffect(() => {
        getOptions(account).then((res) => {
            setOptions(res);
        });
    }, [account]);

    return (
        <div className="swap_container">
            <h1 className="swap_header">ZAP</h1>
            <h3 className="swap_descr">Add liquidity and get LP tokens in one click</h3>
            <h3 className="swap_text">FIRST TOKEN</h3>
            <SelectSearch
                className="select-search"
                options={options}
                filterOptions={fuzzySearch}
                renderOption={renderToken}
                renderValue={renderValue}
                search={true}
                value={token1.value}
                onChange={(_, option) => {
                    // @ts-ignore
                    setToken1(option);
                    setShowResult(false);
                }}
                placeholder="Choose token"
            />
            <input
                className="token_input"
                placeholder={'10'}
                onChange={(e) => setToken1Amount(e.target.value)}
                value={token1Amount}
            />
            <h3 className="swap_text">SECOND TOKEN</h3>
            <SelectSearch
                className="select-search"
                options={options}
                filterOptions={fuzzySearch}
                renderOption={renderToken}
                renderValue={renderValue}
                search={true}
                value={token2.value}
                onChange={(_, options) => {
                    // @ts-ignore
                    setToken2(options);
                    setShowResult(false);
                }}
                placeholder="Choose token"
            />

            <button
                className={!isLoading1 ? 'price_button' : 'button_loading'}
                onClick={
                    !isLoading1
                        ? () =>
                              loadZapData(
                                  account,
                                  token1.value,
                                  token2.value,
                                  token1Amount,
                                  setIsLoading1,
                                  setZapData,
                                  setShowResult
                              )
                        : undefined
                }
            >
                FIND LIQUIDITY POOL
                {isLoading1 && (
                    <span className="loading">
                        <img
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                            alt="loader"
                            src={require('../imgs/loader.gif')}
                        />
                    </span>
                )}
            </button>
            {showResult && (
                <React.Fragment>
                    <ZapResult zap_data={zapData} token1={token1} token2={token2} />
                    <button
                        className={!isLoading2 ? 'swap_button' : 'button_loading'}
                        onClick={
                            !isLoading2
                                ? () =>
                                      runTransactions(
                                          QueryType.zap,
                                          account,
                                          token1.value,
                                          token2.value,
                                          token1Amount,
                                          setIsLoading2,
                                          '&swap_half=true'
                                      )
                                : undefined
                        }
                    >
                        GET LP
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
                    <h3 className="dex_name">on tinyman</h3>
                </React.Fragment>
            )}
        </div>
    );
}
