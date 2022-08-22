import React, { useEffect, useRef, useState } from 'react';

import 'react-select-search/style.css';
import '../css/swap.css';

import { SelectedOption, SelectedOptionValue } from 'react-select-search';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useUnit } from 'effector-react';
import Switch from 'react-switch';
import { logEvent, logFarmActionData, LogName } from '../logEvent';
import { $account, $balances, fetchAsset } from '../common/store';
import { formatNumber, getTokens, QueryType, runTransactions, SLIPPAGE } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { TOKEN_OPTION } from '../Components/Select/Select';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { ModalContainer, ModalSubtitle, ModalTitle, Plus, SwitchContainer, SwitchText } from '../common/styled';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { TokenOptionType } from '../Components/Select/types';
import { ZapQuote, Zap as ZapOperation, DexProvider, makeDex } from '../dexes';
import { makeDex, MintQuote } from '../providers/dexesProvider';
import { algoexplorerTxLink, fromSmallestUnits, getSmallestUnits } from '../common/lib';
import { notify } from '../Components/Notification';
import plus from '../imgs/plus.svg';
import { theme } from '../theme';
import { ZapData } from './types';

export function zapQuoteToData(quote: ZapQuote | null): ZapData {
    if (quote === null) {
        return {
            asset1_amount: 0,
            asset2_amount: 0,
            lp_amount: 0,
            pool_lp_id: 0,
            pool_lp_decimals: 0,
        };
    }

    const assetsAreSwapped = quote.swap.assetIn.id !== quote.mint.assetA.id;
    const amountA = fromSmallestUnits(quote.mint.assetA, quote.mint.amountA);
    const amountB = fromSmallestUnits(quote.mint.assetB, quote.mint.amountB);
    const asset2_id = assetsAreSwapped ? quote.assetA.id : quote.assetB.id;
    const asset1_amount = assetsAreSwapped ? amountB : amountA;
    const asset2_amount = assetsAreSwapped ? amountA : amountB;

    const lp_amount = fromSmallestUnits(quote.lpToken, quote.minimalLiquidityIssued);
    const pool_lp_id = quote.lpToken.id;
    const pool_lp_decimals = quote.lpToken.decimals;
    return { asset1_id, asset1_amount, asset2_id, asset2_amount, lp_amount, pool_lp_id, pool_lp_decimals };
}

export async function loadZapData(
    account: Account | null,
    dexProvider: DexProvider,
    asset1_id: string | undefined,
    asset2_id: string | undefined,
    asset1_amount: string,
    swapHalf: boolean
): Promise<ZapOperation | null> {
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

    const dex = makeDex(dexProvider);

    try {
        const asset1 = await fetchAsset(Number(asset1_id));
        const asset2 = await fetchAsset(Number(asset2_id));
        const amountIn = getSmallestUnits(asset1, Number(asset1_amount));
        const pool = await dex.getPoolByAssets(asset1, asset2);
        const zap = await pool.getZap(asset1, amountIn, SLIPPAGE);

        console.log(pool);
        const zap_data = zapQuoteToData(zap);

        let mintQuote;
        if (swapHalf) {
            const zapQuote = await tinyman.getZapQuote(asset1, asset2, amountIn, SLIPPAGE);
            mintQuote = zapQuote.mint;
        } else {
            mintQuote = await tinyman.getMintQuote(asset1, asset2, amountIn, SLIPPAGE);
        }
        const zap_data: ZapData = mintQuoteToData(Number(asset1_id), mintQuote);

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[ZAP] get data',
                asset1_id: zap_data.asset1_id.toString(), // FIXME: airtable has string
                asset1_amount: zap_data.asset1_amount,
                asset2_id: zap_data.asset2_id.toString(), // FIXME: airtable has string
                asset2_amount: zap_data.asset2_amount,
                lp_amount: zap_data.lp_amount,
                pool_lp_id: zap_data.pool_lp_id,
                // ...zap_data,
                swapHalf: Number(swapHalf),
            },
            LogName.ZAP
        );

        return zap;
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        if (error_message.includes('cancelled') || error_message.includes('The User has rejected')) {
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
                asset1_id,
                asset2_id,
                amount: asset1_amount,
                swapHalf: Number(swapHalf),
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
    lpMicroBalance,
}: {
    isLoading: boolean;
    zap_data: ZapData;
    token1: TokenOptionType;
    token2: TokenOptionType;
    lpMicroBalance: bigint;
}) {
    const [token1Amount, token2Amount] =
        token1.id === zap_data.asset1_id
            ? [zap_data.asset1_amount, zap_data.asset2_amount]
            : [zap_data.asset2_amount, zap_data.asset1_amount];
    const lpTokens =
        `${formatNumber(token1Amount ?? 0)} ${token1.unitName}` +
        ' + ' +
        `${formatNumber(token2Amount ?? 0)} ${token2.unitName}`;

    return (
        <InfoPanel isLoading={isLoading} minHeight={148}>
            <InfoRow
                title={token1.unitName + '-' + token2.unitName + ' LP'}
                value={formatNumber(zap_data.lp_amount ?? 0)}
                valueStyle={{ fontSize: '18px', color: 'white' }}
                style={{ marginBottom: '5px' }}
            />
            <InfoRow title=" " value={lpTokens} valueStyle={{ fontSize: '14px' }} />
            <InfoRow
                title="Current LP balance"
                value={fromSmallestUnits({ decimals: zap_data.pool_lp_decimals }, lpMicroBalance)}
            />
            <InfoRow title="LP ASA ID" value={formatNumber(zap_data.pool_lp_id ?? 0)} />
            <InfoRow title="Max slippage" value={`${SLIPPAGE * 100}%`} />
        </InfoPanel>
    );
}

export function Zap({
    filteredOptions,
    closeModal,
}: {
    title?: string;
    filteredOptions?: number[];
    closeModal?: () => void;
}) {
    const account = useUnit($account);
    const balances = useUnit($balances);

    const [token1, setToken1] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token2, setToken2] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [token2Amount, setToken2Amount] = useState<string>('');
    const [zapOp, setZapOp] = useState<ZapOperation | null>(null);

    const [options, setOptions] = useState<TokenOptionType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [halfSwap, setHalfSwap] = useState(false);
    const zapButtonText = !halfSwap ? 'GET LP' : 'CONVERT ' + token1.unitName + ' TO LP';

    useEffect(() => {
        getTokens(account, balances)
            .then((res) => {
                const filteredRes = res.filter((token) => !filteredOptions || filteredOptions.includes(token.id));
                setOptions(filteredRes);
                setToken1(filteredRes[0]);
                setToken2(filteredRes[1]);
            })
            .catch((error) => {
                logFarmActionData(
                    account,
                    'ZAP',
                    token1Amount,
                    null,
                    null,
                    `Failed to fetch options: ${String(error)}`
                );
            });
    }, [balances]);

    const getZapTimeout = useRef<NodeJS.Timeout>();

    function getZap(token1_id: string, token2_id: string, amount: string, swapHalf: boolean) {
        setIsLoading(true);

        // TODO: We need additional UI to support zap on Pact in the standalone zap page (dex selection?)
        loadZapData(account, 'T2', token1_id, token2_id, amount, swapHalf).then((res) => {
            if (res !== null) {
                setZapOp(res);
                if (!swapHalf) {
                    if (token1.id === Number(token1_id)) {
                        setToken2Amount(res.asset2_amount.toString());
                    } else {
                        setToken1Amount(res.asset2_amount.toString());
                    }
                }
                console.log('[ZAP] res', res);
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
        getZapTimeout.current = setTimeout(() => {
            getZap(token1_id, token2_id, amount, halfSwap);
        }, delay);
    }

    const select1OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setToken1(option);
        setToken1Amount('');
        getZapThrottled(option.value, token2.value, token1Amount, 50);
    };

    const select2OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setToken2(option);

        getZapThrottled(token1.value, option.value, token1Amount, 50);
    };

    const input1OnChange = (inputValue: string) => {
        getZapThrottled(token1.value, token2.value, inputValue, 1000);
    };

    const input2OnChange = (inputValue: string) => {
        getZapThrottled(token2.value, token1.value, inputValue, 1000);
    };

    const handleChangeHalfSwap = (newHalfSwap: boolean) => {
        setToken2Amount('');
        setHalfSwap(newHalfSwap);
        getZap(token1.value, token2.value, token1Amount, newHalfSwap);
    };

    const ZapButtonOnClick = async () => {
        if (token2.balance !== undefined && (Number.isNaN(token2.balance) || Number(token2Amount) > token2.balance)) {
            console.log(Number(token2Amount), token2.balance);
            notify(token2.unitName + ' amount is higher than the wallet balance.', 'warning');
            return;
        }
        // TODO halfSwap ? QueryType.zap : QueryType.mint,
        if (zapOp !== null) {
            const res = await runTransactions(account, zapOp, token1.balance);
            if (res !== null) {
                const txIds = res;
                notify('Done!', 'success', algoexplorerTxLink(txIds[0]));
                closeModal && closeModal();
            }
        }
    };

    const zapData = zapQuoteToData(zapOp);

    return (
        <ModalContainer>
            <ModalTitle style={{ textAlign: 'center', marginBottom: 0 }}>ZAP</ModalTitle>
            <ModalSubtitle>Add liquidity and get LP tokens in one click</ModalSubtitle>
            <SelectInputGroup
                options={options}
                selectedOption={token1}
                inputData={token1Amount}
                setInputData={setToken1Amount}
                selectOnChange={select1OnChange}
                inputOnChange={input1OnChange}
            />
            <div style={{ marginBottom: '10px' }}>
                <Plus alt="plus" src={plus} />
            </div>
            <SelectInputGroup
                options={options}
                selectedOption={token2}
                inputData={token2Amount}
                setInputData={setToken2Amount}
                selectOnChange={select2OnChange}
                inputOnChange={input2OnChange}
                inputDisabled={halfSwap}
            />
            <SwitchContainer>
                <Switch
                    onChange={handleChangeHalfSwap}
                    checked={halfSwap}
                    className="react-switch"
                    onColor={theme.green}
                    offColor={theme.lightGray}
                    onHandleColor={theme.darkGray}
                    offHandleColor={theme.gray}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={20}
                    width={40}
                />
                <SwitchText style={halfSwap ? { color: theme.lightGray } : {}}>
                    auto-convert half {token1.unitName} to {token2.unitName}
                </SwitchText>
            </SwitchContainer>
            <ZapResult
                isLoading={isLoading}
                zap_data={zapData}
                token1={token1}
                token2={token2}
                lpMicroBalance={zapData.pool_lp_id ? balances[zapData.pool_lp_id] : BigInt(0)}
            />
            <PacmanButton buttonText={zapButtonText} buttonStyle="swap_button" onClickAction={ZapButtonOnClick} />
            <h3 className="dex_name">on tinyman</h3>
            <a
                target="_blank"
                href={`https://app.tinyman.org/#/pool/add-liquidity?asset_1=${token1.id}&asset_2=${token2.id}`}
                rel="noreferrer"
                style={{ color: theme.lightGray }}
            >
                <h3 className="dex_name">or do it manually</h3>
            </a>
        </ModalContainer>
    );
}
