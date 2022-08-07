import React, { useEffect, useRef, useState } from 'react';

import 'react-select-search/style.css';
import '../css/swap.css';

import { SelectedOption, SelectedOptionValue } from 'react-select-search';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useUnit } from 'effector-react';
import { logEvent, logFarmActionData, LogName } from '../logEvent';
import { $account, $balances, fetchAsset } from '../common/store';
import { formatNumber, getOptions, QueryType, runTransactions, SLIPPAGE } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { Select, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { Heading2, ModalContainer, ModalTitle, ModalSubtitle } from '../common/styled';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { TokenOptionType } from '../Components/Select/types';
import { makeDex, ZapQuote } from '../providers/dexesProvider';
import { algoexplorerTxLink, fromSmallestUnits, getSmallestUnits } from '../common/lib';
import { notify } from '../Components/Notification';
import { ZapData } from './types';

const tinyman = makeDex('T2');

function zapQuoteToData(asset1_id: number, quote: ZapQuote): ZapData {
    const assetsAreSwapped = asset1_id !== quote.mint.assetA.id;
    const amountA = fromSmallestUnits(quote.mint.assetA, quote.mint.amountA);
    const amountB = fromSmallestUnits(quote.mint.assetB, quote.mint.amountB);

    const asset1_amount = assetsAreSwapped ? amountB : amountA;
    const asset2_amount = assetsAreSwapped ? amountA : amountB;
    const lp_amount = fromSmallestUnits(quote.mint.lpToken, quote.mint.minimalLiquidityIssued);
    const pool_lp_id = quote.mint.lpToken.id;
    return { asset1_amount, asset2_amount, lp_amount, pool_lp_id };
}

export async function loadZapData(
    account: Account | null,
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string
): Promise<ZapData | null> {
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

    console.log('[ZAP] get data:', asset1_id, asset2_id, asset1_amount);

    try {
        const asset1 = await fetchAsset(Number(asset1_id));
        const asset2 = await fetchAsset(Number(asset2_id));
        const amountIn = getSmallestUnits(asset1, Number(asset1_amount));
        const zapQuote = await tinyman.getZapQuote(asset1, asset2, amountIn, SLIPPAGE);

        const zap_data = zapQuoteToData(Number(asset1_id), zapQuote);

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[ZAP] get data',
                asset1_id: asset1_id,
                asset2_id: asset2_id,
                amount: asset1_amount,
                ...zap_data,
            },
            LogName.ZAP
        );

        return zap_data;
    } catch (e) {
        const error_message = e instanceof Error ? e.message : String(e);
        if (error_message.includes('cancelled')) {
            notify('Operation is cancelled.', 'warning');
        } else if (error_message.includes('pool for address')) {
            notify('There is no pool for tokens pair.', 'warning');
        } else {
            notify(error_message, 'error');
        }
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
        return null;
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
    token1: TokenOptionType;
    token2: TokenOptionType;
}) {
    const lpTokens =
        `${formatNumber(zap_data.asset1_amount ?? 0)} ${token1.unitName}` +
        ' + ' +
        `${formatNumber(zap_data.asset2_amount ?? 0)} ${token2.unitName}`;

    return (
        <InfoPanel isLoading={isLoading}>
            <InfoRow
                title={token1.unitName + '-' + token2.unitName + ' LP'}
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
            <InfoRow title="Slippage" value={`${SLIPPAGE * 100}%`} valueStyle={{ fontSize: '14px' }} />
        </InfoPanel>
    );
}

export function Zap() {
    const account = useUnit($account);
    const balances = useUnit($balances);

    const [token1, setToken1] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token2, setToken2] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [zapData, setZapData] = useState<ZapData>({
        asset1_amount: 0,
        asset2_amount: 0,
        lp_amount: 0,
        pool_lp_id: 0,
    });

    const [options, setOptions] = useState<TokenOptionType[]>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getOptions(account, balances)
            .then((res) => {
                setOptions(res);
                setToken1(res[0]);
            })
            .catch((err) => {
                logFarmActionData(account, 'ZAP', token1Amount, null, null, `Failed to fetch options: ${String(err)}`);
            });
    }, [balances]);

    const getZapTimeout = useRef<NodeJS.Timeout>();

    function getZap(token1_id: string, token2_id: string, amount: string) {
        setIsLoading(true);
        loadZapData(account, token1_id, token2_id, amount).then((res) => {
            if (res !== null) {
                setZapData(res);
                console.log('[ZAP] res', res);
                setShowResult(true);
            }
            setIsLoading(false);
        });
    }

    function getZapThrottled(token1_id: string, token2_id: string, amount: string, delay: number) {
        if (!token1_id || !token2_id || !amount) {
            return;
        }
        if (getZapTimeout.current) {
            clearTimeout(getZapTimeout.current);
        }
        getZapTimeout.current = setTimeout(() => getZap(token1_id, token2_id, amount), delay);
    }

    const select1OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setToken1(option);
        setToken1Amount('');
        setShowResult(false);
        getZapThrottled(option.value, token2.value, token1Amount, 50);
    };

    const select2OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setToken2(option);
        setShowResult(false);

        getZapThrottled(token1.value, option.value, token1Amount, 50);
    };

    const inputOnChange = (inputValue: string) => {
        setShowResult(false);
        getZapThrottled(token1.value, token2.value, inputValue, 1000);
    };

    const LoadZapButtonOnClick = () => {
        return Promise.resolve(getZap(token1.value, token2.value, token1Amount));
    };

    const ZapButtonOnClick = async () => {
        const res = await runTransactions(
            QueryType.zap,
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
            <ModalTitle style={{ textAlign: 'center', marginBottom: 0 }}>ZAP</ModalTitle>
            <ModalSubtitle>Add liquidity and get LP tokens in one click</ModalSubtitle>
            <Heading2>FIRST TOKEN</Heading2>
            <SelectInputGroup
                options={options}
                selectedOption={token1}
                inputData={token1Amount}
                setInputData={setToken1Amount}
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
