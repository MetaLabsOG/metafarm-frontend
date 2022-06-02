import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import 'react-select-search/style.css';
import '../css/swap.css';
import { TokenSelectOption } from '../Swap/types';
import { ZapData } from './types';
import { $account } from '../common/store';

import { SelectedOption, SelectedOptionValue } from 'react-select-search';
import { Account } from '@reach-sh/stdlib/ALGO';
import { logEvent } from '../logEvent';
import { useStore } from 'effector-react';
import {
    ButtonWithPackman,
    formatNumber,
    getData,
    getOptions,
    QueryType,
    runTransactions,
    TOKEN_INITIAL_STATE,
    TokenSelect,
    TokenSelectWithAmount,
} from '../Swap/Swap';

export async function loadZapData(
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

export function ZapResult({
    isLoading,
    zap_data,
    token1,
    token2,
}: {
    isLoading: boolean;
    zap_data: ZapData;
    token1: TokenSelectOption;
    token2: TokenSelectOption;
}) {
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
            <div style={{ display: 'flex', justifyContent: 'space-between', whiteSpace: 'nowrap' }}>
                <h3 className="token_price_text">
                    {token1.unit_name}-{token2.unit_name} LP
                </h3>
                <h3 className="token_price_zap_value">{formatNumber(zap_data.lp_amount)}</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
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

    const [token1, setToken1] = useState<TokenSelectOption>(TOKEN_INITIAL_STATE);
    const [token2, setToken2] = useState<TokenSelectOption>(TOKEN_INITIAL_STATE);
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
            setToken1(res[0]);
        });
    }, [account]);

    const getZapTimeout = useRef<any>();

    function getZapThrottled(token1: TokenSelectOption, token2: TokenSelectOption, amount: string, delay: number) {
        if (!token1.value || !token2.value) {
            return;
        }
        clearTimeout(getZapTimeout.current);
        getZapTimeout.current = setTimeout(() => {
            loadZapData(account, token1.value, token2.value, amount, setIsLoading1, setZapData, setShowResult);
        }, delay);
    }

    const select1OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // @ts-ignore
        setToken1(option);
        setShowResult(false);
        // @ts-ignore
        getZapThrottled(option, token2, token1Amount, 50);
    };

    const select2OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // @ts-ignore
        setToken2(option);
        setShowResult(false);
        // @ts-ignore
        getZapThrottled(token1, option, token1Amount, 50);
    };

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setShowResult(false);
        setToken1Amount(e.target.value);
        getZapThrottled(token1, token2, e.target.value, 1000);
    };

    const LoadZapButtonOnClick = () => {
        loadZapData(account, token1.value, token2.value, token1Amount, setIsLoading1, setZapData, setShowResult);
    };

    const ZapButtonOnClick = () => {
        runTransactions(
            QueryType.zap,
            account,
            token1.value,
            token2.value,
            token1Amount,
            setIsLoading2,
            '&swap_half=true'
        );
    };

    return (
        <div className="swap_container">
            <h1 className="swap_header">ZAP</h1>
            <h3 className="swap_descr">Add liquidity and get LP tokens in one click</h3>
            <h3 className="swap_text">FIRST TOKEN</h3>
            <TokenSelectWithAmount
                options={options}
                token={token1}
                tokenAmount={token1Amount}
                selectOnChange={select1OnChange}
                inputOnChange={inputOnChange}
            />
            <h3 className="swap_text">SECOND TOKEN</h3>
            <TokenSelect options={options} token={token2} selectOnChange={select2OnChange} />
            {!isLoading1 && !showResult && (
                <ButtonWithPackman
                    button_text="FIND LIQUIDITY POOL"
                    button_style="price_button"
                    isLoading={isLoading1}
                    onClick={LoadZapButtonOnClick}
                />
            )}
            {(isLoading1 || showResult) && (
                <ZapResult isLoading={isLoading1} zap_data={zapData} token1={token1} token2={token2} />
            )}
            {showResult && (
                <React.Fragment>
                    <ButtonWithPackman
                        button_text="GET LP"
                        button_style="swap_button"
                        isLoading={isLoading2}
                        onClick={ZapButtonOnClick}
                    />
                    <h3 className="dex_name">on tinyman</h3>
                </React.Fragment>
            )}
        </div>
    );
}
