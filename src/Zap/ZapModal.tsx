import { useUnit } from 'effector-react';
import React, { useEffect, useRef, useState } from 'react';
import { SelectedOption, SelectedOptionValue } from 'react-select-search';
import { getOptions, QueryType, runTransactions } from '../Swap/Swap';
import { $account, $balances, refreshAccountInfo } from '../common/store';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { Heading2, ModalContainer, ModalTitle } from '../common/styled';
import { TokenOptionType } from '../Components/Select/types';
import { TOKEN_OPTION } from '../Components/Select/Select';
import { notify } from '../Components/Notification';
import { algoexplorerTxLink } from '../common/lib';
import { theme } from '../theme';
import { loadZapData, ZapResult } from './Zap';
import { ZapData } from './types';

export function ZapModal({
    asset1_id,
    asset2_id,
    closeModal,
}: {
    asset1_id: number;
    asset2_id: number;
    closeModal: () => void;
}) {
    console.log('ZAP', asset1_id, asset2_id);
    const account = useUnit($account);
    const balances = useUnit($balances);
    const refreshAccountInfoEvent = useUnit(refreshAccountInfo);

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
        setIsLoading(true);
        getOptions(account, balances).then((res) => {
            const filtered_res = res.filter(
                (token) => token.value === asset1_id.toString() || token.value === asset2_id.toString()
            );
            setOptions(filtered_res);
            console.log(filtered_res);
            setToken1(filtered_res[0]);
            setToken2(filtered_res[1]);
            setIsLoading(false);
        });
    }, [balances, asset1_id, asset2_id, account]);

    const getZapTimeout = useRef<NodeJS.Timeout | null>(null);

    function getZapThrottled(token1_id: string, token2_id: string, amount: string, delay: number) {
        if (!token1_id || !token2_id || !amount) {
            return;
        }
        if (getZapTimeout.current) {
            clearTimeout(getZapTimeout.current);
        }
        getZapTimeout.current = setTimeout(() => {
            setIsLoading(true);
            loadZapData(account, token1_id, token2_id, amount).then((res) => {
                if (res !== null) {
                    setZapData(res);
                    console.log('[ZAP] res', res);
                    setShowResult(true);
                }
                setIsLoading(false);
            });
        }, delay);
    }

    const select1OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setToken1(option);
        const token2Upd = options[0].value === option.value ? options[1] : options[0];
        setToken2(token2Upd);
        setToken1Amount('');
        setShowResult(false);
        getZapThrottled(option.value, token2Upd.value, token1Amount, 50);
    };

    const inputOnChange = (inputValue: string) => {
        setShowResult(false);
        getZapThrottled(token1.value, token2.value, inputValue, 1000);
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
            refreshAccountInfoEvent();
            closeModal();
        }
    };

    return (
        <ModalContainer>
            <ModalTitle>
                GET {token1.unitName}-{token2.unitName} LP
            </ModalTitle>
            <Heading2>FROM</Heading2>
            <SelectInputGroup
                options={options}
                selectedOption={token1}
                inputData={token1Amount}
                setInputData={setToken1Amount}
                selectOnChange={select1OnChange}
                inputOnChange={inputOnChange}
            />
            <ZapResult isLoading={isLoading} zap_data={zapData} token1={token1} token2={token2} />
            <>
                <PacmanButton buttonText="GET LP" buttonStyle="swap_button" onClickAction={ZapButtonOnClick} />
                <h3 className="dex_name">on tinyman</h3>
                <a
                    target="_blank"
                    href={`https://app.tinyman.org/#/pool/add-liquidity?asset_1=${asset1_id}&asset_2=${asset2_id}`}
                    rel="noreferrer"
                    style={{ color: theme.lightGray }}
                >
                    <h3 className="dex_name">or do it manually</h3>
                </a>
            </>
        </ModalContainer>
    );
}
