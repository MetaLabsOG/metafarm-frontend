import React, { useEffect, useRef, useState } from 'react';

import 'react-select-search/style.css';
import '../css/swap.css';

import { SelectedOption, SelectedOptionValue } from 'react-select-search';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useUnit } from 'effector-react';
import { logEvent, logFarmActionData, LogName } from '../logEvent';
import { $account, $balances, fetchAsset } from '../common/store';
import { formatNumber, getTokens, isSwapZapDataValid, runTransactions, SLIPPAGE } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { TOKEN_OPTION } from '../Components/Select/Select';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import {
    DexButton,
    DexSwitchContainer,
    Heading2,
    ModalContainer,
    ModalSubtitle,
    ModalTitle,
    Plus,
} from '../common/styled';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { TokenOptionType } from '../Components/Select/types';
import { Zap as ZapOperation, DexProvider, makeDex, Mint, MintQuote, DexPool, Dex } from '../dexes';
import { algoexplorerTxLink, fromSmallestUnits, getSmallestUnits } from '../common/lib';
import { notify } from '../Components/Notification';
import plus from '../imgs/plus.svg';
import pact from '../imgs/dexes/pact.png';
import tinyman from '../imgs/dexes/tinyman.png';
import humble from '../imgs/dexes/humble.png';
import { theme } from '../theme';
import { SwitchSelect } from '../Components/SwitchSelect/SwitchSelect';
import { getLPTokenPoolLink } from '../Farm/PoolList/Pool/utils';
import { getDexName } from '../Farm/utils';
import { ZapData } from './types';

export function quoteToZapData(asset1Id: number, inputQuote: ZapOperation | MintQuote | null): ZapData {
    if (inputQuote === null) {
        return {
            asset1_id: 0,
            asset1_amount: 0,
            asset2_id: 0,
            asset2_amount: 0,
            lp_amount: 0,
            pool_lp_id: 0,
            pool_lp_decimals: 0,
        };
    }

    const quote = 'mint' in inputQuote ? inputQuote.mint : inputQuote;

    const assetsAreSwapped = asset1Id !== quote.assetA.id;
    const amountA = fromSmallestUnits(quote.assetA, quote.amountA);
    const amountB = fromSmallestUnits(quote.assetB, quote.amountB);
    const asset1_id = assetsAreSwapped ? quote.assetB.id : quote.assetA.id;
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
): Promise<ZapOperation | Mint | null> {
    if (!isSwapZapDataValid(asset1_id, asset2_id, asset1_amount)) {
        return null;
    }

    console.log('[ZAP] get data:', asset1_id, asset2_id, asset1_amount);

    const dex = makeDex(dexProvider);

    try {
        const asset1 = await fetchAsset(Number(asset1_id));
        const asset2 = await fetchAsset(Number(asset2_id));
        const amountIn = getSmallestUnits(asset1, Number(asset1_amount));
        const pool = await dex.getPoolByAssets(asset1, asset2);
        const zap = swapHalf
            ? await pool.getZap(asset1, amountIn, SLIPPAGE)
            : await pool.getMint(asset1, amountIn, SLIPPAGE);

        const zapData = quoteToZapData(Number(asset1_id), zap);

        logEvent(
            account?.networkAccount.addr,
            {
                message: '[ZAP] get data',
                asset1_id: zapData.asset1_id.toString(), // FIXME: airtable has string
                asset1_amount: zapData.asset1_amount,
                asset2_id: zapData.asset2_id.toString(), // FIXME: airtable has string
                asset2_amount: zapData.asset2_amount,
                lp_amount: zapData.lp_amount,
                pool_lp_id: zapData.pool_lp_id,
                // ...zap_data,
                swapHalf: Number(swapHalf),
                dex: dexProvider,
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
                dex: dexProvider,
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
    dexProvider,
    lpMicroBalance,
}: {
    isLoading: boolean;
    zap_data: ZapData;
    token1: TokenOptionType;
    token2: TokenOptionType;
    dexProvider: DexProvider;
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
        <InfoPanel isLoading={isLoading} minHeight={175}>
            <InfoRow
                title={'Minimum received'}
                value={formatNumber(zap_data.lp_amount ?? 0) + ' LP'}
                valueStyle={{ fontSize: '18px', color: 'white' }}
                style={{ marginBottom: '5px' }}
            />
            <InfoRow title=" " value={lpTokens} valueStyle={{ fontSize: '14px' }} />
            <InfoRow
                title="Current LP balance"
                value={fromSmallestUnits({ decimals: zap_data.pool_lp_decimals }, lpMicroBalance)}
            />
            <InfoRow
                title="LP ASA ID"
                value={formatNumber(zap_data.pool_lp_id ?? 0) + ` (${getDexName(dexProvider)})`}
            />
            <InfoRow title="Max slippage" value={`${SLIPPAGE * 100}%`} />
        </InfoPanel>
    );
}

function DexSwitch({
    dexProvider,
    dexOnChange,
}: {
    dexProvider: DexProvider;
    dexOnChange: (dex: DexProvider) => void;
}) {
    return (
        <DexSwitchContainer>
            <Heading2>DEX</Heading2>
            <DexButton isActive={dexProvider === 'T2'} alt="tinyman" src={tinyman} onClick={() => dexOnChange('T2')} />
            <DexButton isActive={dexProvider === 'PT'} alt="pact" src={pact} onClick={() => dexOnChange('PT')} />
        </DexSwitchContainer>
    );
}

export function Zap({
    inputDexProvider,
    filteredOptions,
    closeModal,
}: {
    inputDexProvider: DexProvider;
    filteredOptions?: number[];
    closeModal?: () => void;
}) {
    const account = useUnit($account);
    const balances = useUnit($balances);

    const [token1, setToken1] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token2, setToken2] = useState<TokenOptionType>(TOKEN_OPTION);
    const [token1Amount, setToken1Amount] = useState<string>('');
    const [token2Amount, setToken2Amount] = useState<string>('');
    const [zapOp, setZapOp] = useState<ZapOperation | Mint | null>(null);

    const [options, setOptions] = useState<TokenOptionType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [halfSwap, setHalfSwap] = useState(false);
    const zapButtonText = !halfSwap ? 'GET LP' : 'CONVERT ' + token1.unitName + ' TO LP';

    const [dexProvider, setDexProvider] = useState<DexProvider>(inputDexProvider);
    const [pool, setPool] = useState<DexPool | null>(null);

    useEffect(() => {
        makeDex(dexProvider)
            .getPoolByAssets(token1.id, token2.id)
            .then((pool) => setPool(pool));
    }, [dexProvider, token1, token2]);

    useEffect(() => {
        getTokens(account, balances)
            .then(async (res) => {
                const filteredRes = res.filter((token) => !filteredOptions || filteredOptions.includes(token.id));
                for (const assetId of filteredOptions ?? []) {
                    if (!filteredRes.filter((option) => option.id === assetId).length) {
                        const asset = await fetchAsset(assetId);
                        filteredRes.push({ ...asset, value: asset.id.toString(), balance: 0 });
                    }
                }
                setOptions(filteredRes);
                console.log(filteredRes);
                filteredRes[0] && setToken1(filteredRes[0]);
                filteredRes[1] && setToken2(filteredRes[1]);
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

    function getZap(token1_id: string, token2_id: string, amount: string, dex: DexProvider, swapHalf: boolean) {
        setIsLoading(true);

        loadZapData(account, dex, token1_id, token2_id, amount, swapHalf).then((res) => {
            setZapOp(res);
            if (!swapHalf) {
                const zapData = quoteToZapData(Number(token1_id), res);
                if (token1.id === Number(token1_id)) {
                    setToken2Amount(zapData.asset2_amount.toString());
                } else {
                    setToken1Amount(zapData.asset2_amount.toString());
                }
            }
            console.log('[ZAP] res', res);
            setIsLoading(false);
        });
    }

    function getZapThrottled(
        token1_id: string,
        token2_id: string,
        amount: string,
        dex: DexProvider,
        swapHalf: boolean,
        delay: number
    ) {
        if (!token1_id || !token2_id || !amount) {
            setZapOp(null);
            return;
        }
        if (getZapTimeout.current) {
            clearTimeout(getZapTimeout.current);
        }
        getZapTimeout.current = setTimeout(() => {
            getZap(token1_id, token2_id, amount, dex, swapHalf);
        }, delay);
    }

    const select1OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setToken1(option);
        setToken1Amount('');

        if (closeModal !== undefined) {
            const anotherOption = options.filter((o) => o.value !== option.value)[0];
            setToken2(anotherOption);
            getZapThrottled(option.value, anotherOption.value, token1Amount, dexProvider, halfSwap, 50);
        } else {
            getZapThrottled(option.value, token2.value, token1Amount, dexProvider, halfSwap, 50);
        }
    };

    const select2OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setToken2(option);

        if (closeModal !== undefined) {
            const anotherOption = options.filter((o) => o.value !== option.value)[0];
            setToken1(anotherOption);
            getZapThrottled(anotherOption.value, option.value, token1Amount, dexProvider, halfSwap, 50);
        } else {
            getZapThrottled(token1.value, option.value, token1Amount, dexProvider, halfSwap, 50);
        }
    };

    const input1OnChange = (inputValue: string) => {
        getZapThrottled(token1.value, token2.value, inputValue, dexProvider, halfSwap, 1000);
    };

    const input2OnChange = (inputValue: string) => {
        getZapThrottled(token2.value, token1.value, inputValue, dexProvider, halfSwap, 1000);
    };

    const handleChangeHalfSwap = (newHalfSwap: boolean) => {
        setToken2Amount('');
        setHalfSwap(newHalfSwap);
        getZapThrottled(token1.value, token2.value, token1Amount, dexProvider, newHalfSwap, 50);
    };

    const dexOnChange = (dex: DexProvider) => {
        setDexProvider(dex);
        getZapThrottled(token1.value, token2.value, token1Amount, dex, halfSwap, 50);
    };

    const ZapButtonOnClick = async () => {
        if (!isSwapZapDataValid(token1.value, token2.value, token1Amount)) {
            return;
        }
        if (token2.balance !== undefined && (Number.isNaN(token2.balance) || Number(token2Amount) > token2.balance)) {
            console.log(Number(token2Amount), token2.balance);
            notify(token2.unitName + ' amount is higher than the wallet balance.', 'warning');
            return;
        }

        if (zapOp !== null) {
            const res = await runTransactions(account, zapOp, token1.balance);
            if (res !== null) {
                const txIds = res;
                notify('Done!', 'success', algoexplorerTxLink(txIds[0]));
                closeModal && closeModal();
            }
        }
    };

    const zapData = quoteToZapData(token1.id, zapOp);

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
            <SwitchSelect
                switchStatus={halfSwap}
                onChange={handleChangeHalfSwap}
                switchText={'auto-convert half ' + token1.unitName + ' to ' + token2.unitName}
            />
            <ZapResult
                isLoading={isLoading}
                zap_data={zapData}
                token1={token1}
                token2={token2}
                dexProvider={dexProvider}
                lpMicroBalance={zapData.pool_lp_id ? balances[zapData.pool_lp_id] : BigInt(0)}
            />
            {!closeModal && <DexSwitch dexProvider={dexProvider} dexOnChange={dexOnChange} />}
            <PacmanButton buttonText={zapButtonText} buttonStyle="swap_button" onClickAction={ZapButtonOnClick} />
            {pool && (
                <a
                    target="_blank"
                    href={getLPTokenPoolLink(dexProvider, pool.poolId, token1.id, token2.id)}
                    rel="noreferrer"
                    style={{ color: theme.lightGray }}
                >
                    <h3 className="dex_name">or do it manually</h3>
                </a>
            )}
        </ModalContainer>
    );
}
