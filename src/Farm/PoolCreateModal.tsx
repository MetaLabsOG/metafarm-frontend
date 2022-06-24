import { Button } from '../Components/Button/Button';
import { useModal } from 'react-hooks-use-modal';
import React, { ChangeEvent, useState } from 'react';
import { TokenSelectWithAmount } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { SelectedOption, SelectedOptionValue } from 'react-select-search';
import { Select, SELECT_OPTION } from '../Components/Select/Select';
import { OptionType } from '../Components/Select/types';

export const PoolCreateModal = () => {
    const [PoolCreateModal, openPoolCreateModal, closePoolCreateModal] = useModal('root', { preventScroll: true });
    const [options, setOptions] = useState<OptionType[]>([]);
    const [token2, setToken2] = useState<OptionType>(SELECT_OPTION);
    const [token1Amount, setToken1Amount] = useState<string>('');

    const select2OnChange = (value: SelectedOptionValue, option: SelectedOption) => {
        // @ts-ignore
        setToken2(option);
    };

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number(e.target.value))) {
            return;
        }
        setToken1Amount(e.target.value);
    };

    return (
        <div style={{ display: 'flex', marginRight: 'auto' }}>
            <Button onClick={openPoolCreateModal}>ADD POOL</Button>
            <PoolCreateModal>
                <div className="swap_container" style={{ height: '450px' }}>
                    <h1
                        className="swap_header"
                        style={{ width: '100%', textAlign: 'left', fontSize: '22px', marginBottom: '20px' }}
                    >
                        ADD FARM
                    </h1>
                    <h3 className="swap_text">LP POOL</h3>
                    <Select
                        options={options}
                        selectedOption={token2}
                        selectOnChange={select2OnChange}
                        placeholder={'Choose pool'}
                    />
                    <h3 className="swap_text">REWARDS</h3>
                    {/*<TokenSelectWithAmount*/}
                    {/*    options={options}*/}
                    {/*    token={token2}*/}
                    {/*    tokenAmount={token1Amount}*/}
                    {/*    selectOnChange={select2OnChange}*/}
                    {/*    inputOnChange={inputOnChange}*/}
                    {/*/>*/}
                    {/*<ZapResult isLoading={isLoading} zap_data={zapData} token1={token1} token2={token2} />*/}
                    <PacmanButton
                        buttonText="CREATE FARM"
                        buttonStyle="swap_button"
                        onClickAction={() => alert('OK')}
                    />
                </div>
            </PoolCreateModal>
        </div>
    );
};
