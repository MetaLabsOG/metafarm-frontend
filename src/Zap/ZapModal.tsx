import { loadZapData, ZapResult } from './Zap';
import { useStore } from 'effector-react';
import { $account, refreshAccountInfo } from '../common/store';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TokenSelectOption } from '../Swap/types';
import { getOptions, QueryType, runTransactions, TOKEN_INITIAL_STATE, TokenSelectWithAmount } from '../Swap/Swap';
import { ZapData } from './types';
import { SelectedOption, SelectedOptionValue } from 'react-select-search';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';

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
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        getOptions(account).then((res) => {
            const filtered_res = res.filter(
                (token) => token.value === asset1_id.toString() || token.value === asset2_id.toString()
            );
            setOptions(filtered_res);
            console.log(filtered_res);
            setToken1(filtered_res[0]);
            setToken2(filtered_res[1]);
            setIsLoading(false);
        });
    }, [account]);

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
        const token2Upd = options[0].value === option.value ? options[1] : options[0];
        setToken2(token2Upd);
        setShowResult(false);
        // @ts-ignore
        getZapThrottled(option.value, token2Upd.value, token1Amount, 50);
    };

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setShowResult(false);
        setToken1Amount(e.target.value);
        getZapThrottled(token1.value, token2.value, e.target.value, 1000);
    };

    const ZapButtonOnClick = async () => {
        await runTransactions(QueryType.zap, account, token1.value, token2.value, token1Amount, '&swap_half=true');
        refreshAccountInfo();
        closeModal();
    };

    return (
        <div className="swap_container" style={{ height: '450px' }}>
            <h1
                className="swap_header"
                style={{ width: '100%', textAlign: 'left', fontSize: '22px', marginBottom: '20px' }}
            >
                GET {token1.unit_name}-{token2.unit_name} LP
            </h1>
            <h3 className="swap_text">FROM</h3>
            <TokenSelectWithAmount
                options={options}
                token={token1}
                tokenAmount={token1Amount}
                selectOnChange={select1OnChange}
                inputOnChange={inputOnChange}
            />
            <ZapResult isLoading={isLoading} zap_data={zapData} token1={token1} token2={token2} />
            <React.Fragment>
                <PacmanButton buttonText="GET LP" buttonStyle="swap_button" onClickAction={ZapButtonOnClick} />
                <h3 className="dex_name">on tinyman</h3>
            </React.Fragment>
        </div>
    );
}
