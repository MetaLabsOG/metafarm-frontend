import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import 'react-select-search/style.css';
import '../css/swap.css';
import { TokenSelectOption } from '../Swap/types';
import { ZapData } from './types';
import { $account, $balances } from '../common/store';

import { SelectedOption, SelectedOptionValue } from 'react-select-search';
import { Account } from '@reach-sh/stdlib/ALGO';
import { logEvent, LogName } from '../logEvent';
import { useStore } from 'effector-react';
import {
    formatNumber,
    getData,
    getOptions,
    QueryType,
    runTransactions,
    TOKEN_INITIAL_STATE,
    TokenSelect,
    TokenSelectWithAmount,
} from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';

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
    console.log('[ZAP] get data:', asset1_id, asset2_id, asset1_amount);

    try {
        const additionalParams = '&swap_half=true&slippage=0.1';
        const zap_data: ZapData = await getData(QueryType.zap, asset1_id, asset2_id, asset1_amount, additionalParams);

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[ZAP] get data: ' + asset1_id + ' to ' + asset2_id,
                amount: asset1_amount,
                asset2_amount: zap_data.asset2_amount,
                lp_amount: zap_data.lp_amount,
                pool_lp_id: zap_data.pool_lp_id,
                additionalParams: additionalParams,
            },
            LogName.zap
        );

        setResult(zap_data);
        setIsLoading(false);
        setShowResults(true);
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        alert(error_message);
        logEvent(
            account?.networkAccount.addr,
            {
                message: '[ZAP ERROR] ' + asset1_id + ' to ' + asset2_id + ', amount: ' + asset1_amount,
                error: error_message,
            },
            LogName.zap
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
                <h3 className="token_price_zap_value">{formatNumber(zap_data.lp_amount ?? 0)}</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                <h3 className="token_price_text">
                    {formatNumber(zap_data.asset1_amount ?? 0)} {token1.unit_name} +{' '}
                    {formatNumber(zap_data.asset2_amount ?? 0)} {token2.unit_name}
                </h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', whiteSpace: 'nowrap', marginTop: '10px' }}>
                <h3 className="token_price_text">LP ASA ID</h3>
                <h3 className="token_price_text">{formatNumber(zap_data.pool_lp_id ?? 0)}</h3>
            </div>
        </div>
    );
}

export function Zap() {
    const account = useStore($account);
    const balances = useStore($balances);

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
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getOptions(balances).then((res) => {
            setOptions(res);
            setToken1(res[0]);
        });
    }, [balances]);

    const getZapTimeout = useRef<any>();

    function getZapThrottled(token1_id: string, token2_id: string, amount: string, delay: number) {
        if (!token1_id || !token2_id) {
            return;
        }
        clearTimeout(getZapTimeout.current);
        getZapTimeout.current = setTimeout(() => {
            loadZapData(account, token1_id, token2_id, amount, setIsLoading, setZapData, setShowResult);
        }, delay);
    }

    const select1OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // @ts-ignore
        setToken1(option);
        setShowResult(false);
        getZapThrottled(option.value, token2.value, token1Amount, 50);
    };

    const select2OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // @ts-ignore
        setToken2(option);
        setShowResult(false);

        getZapThrottled(token1.value, option.value, token1Amount, 50);
    };

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setShowResult(false);
        setToken1Amount(e.target.value);
        getZapThrottled(token1.value, token2.value, e.target.value, 1000);
    };

    const LoadZapButtonOnClick = async () => {
        return loadZapData(account, token1.value, token2.value, token1Amount, setIsLoading, setZapData, setShowResult);
    };

    const ZapButtonOnClick = async () => {
        const result_tx_id = await runTransactions(
            QueryType.zap,
            account,
            token1.value,
            token2.value,
            token1Amount,
            '&swap_half=true&slippage=0.1'
        );
        if (result_tx_id) {
            alert('OK ' + result_tx_id);
        }
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
            {!isLoading && !showResult && (
                <PacmanButton
                    buttonText="FIND LIQUIDITY POOL"
                    buttonStyle="price_button"
                    onClickAction={LoadZapButtonOnClick}
                />
            )}
            {(isLoading || showResult) && (
                <ZapResult isLoading={isLoading} zap_data={zapData} token1={token1} token2={token2} />
            )}
            {showResult && (
                <React.Fragment>
                    <PacmanButton buttonText="GET LP" buttonStyle="swap_button" onClickAction={ZapButtonOnClick} />
                    <h3 className="dex_name">on tinyman</h3>
                </React.Fragment>
            )}
        </div>
    );
}
