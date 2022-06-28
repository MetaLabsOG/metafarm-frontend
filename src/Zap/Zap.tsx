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
import { formatNumber, getData, getOptions, QueryType, runTransactions, TOKEN_INITIAL_STATE } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { Select, SelectType } from '../Components/Select/Select';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { Heading2, ModalContainer, ModalTitle, ModalSubtitle } from '../common/styled';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';

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

    if (!asset1_amount) {
        alert('Please, enter the token amount.');
        return;
    }

    setIsLoading(true);
    console.log('[ZAP] get data:', asset1_id, asset2_id, asset1_amount);

    try {
        const additionalParams = '&swap_half=true&slippage=0.01';
        const zap_data: ZapData = await getData(QueryType.zap, asset1_id, asset2_id, asset1_amount, additionalParams);

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[ZAP] get data',
                asset1_id: asset1_id,
                asset2_id: asset2_id,
                amount: asset1_amount,
                ...zap_data,
                additionalParams: additionalParams,
            },
            LogName.ZAP
        );

        setResult(zap_data);
        console.log('[ZAP] res', zap_data);
        setIsLoading(false);
        setShowResults(true);
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        alert(error_message);
        logEvent(
            account?.networkAccount.addr,
            {
                message: '[ZAP ERROR]',
                asset1_id: asset1_id,
                asset2_id: asset2_id,
                amount: asset1_amount,
                error: error_message,
            },
            LogName.ZAP
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
    const lpTokens =
        formatNumber(zap_data.asset1_amount ?? 0) +
        ' ' +
        token1.unit_name +
        ' ' +
        formatNumber(zap_data.asset2_amount ?? 0) +
        ' ' +
        token2.unit_name;

    return (
        <InfoPanel isLoading={isLoading}>
            <InfoRow
                title={token1.unit_name + '-' + token2.unit_name + ' LP'}
                value={formatNumber(zap_data.lp_amount ?? 0)}
                valueStyle={{ fontSize: '18px', color: 'white' }}
                style={{ marginBottom: '5px' }}
            />
            <InfoRow title=" " value={lpTokens} valueStyle={{ fontSize: '14px' }} />
            <InfoRow
                title="LP ASA ID"
                value={formatNumber(zap_data.pool_lp_id ?? 0)}
                valueStyle={{ fontSize: '14px' }}
            />
        </InfoPanel>
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
        if (!token1_id || !token2_id || !amount) {
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
        if (isNaN(Number(e.target.value))) {
            return;
        }
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
            '&swap_half=true&slippage=0.01'
        );
        if (result_tx_id) {
            alert('OK ' + result_tx_id);
        }
    };

    return (
        <ModalContainer>
            <ModalTitle style={{ textAlign: 'center', marginBottom: 0 }}>ZAP</ModalTitle>
            <ModalSubtitle>Add liquidity and get LP tokens in one click</ModalSubtitle>
            <Heading2>FIRST TOKEN</Heading2>
            <SelectInputGroup
                options={options}
                selectedOption={token1}
                inputData={token1Amount}
                selectOnChange={select1OnChange}
                inputOnChange={inputOnChange}
            />
            <Heading2>SECOND TOKEN</Heading2>
            <Select
                selectType={SelectType.tokenSelect}
                options={options}
                selectedOption={token2}
                selectOnChange={select2OnChange}
            />
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
        </ModalContainer>
    );
}
