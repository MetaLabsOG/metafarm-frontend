import React, { ChangeEvent, useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { SelectedOptionValue } from 'react-select-search';
import { getOptions } from '../Swap/Swap';
import { Button } from '../Components/Button/Button';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { Select, POOL_OPTION, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { PoolOptionType, TokenOptionType } from '../Components/Select/types';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { DateInput } from './styled';
import { Heading2, ModalContainer, ModalTitle } from '../common/styled';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';

const PoolInfo = () => {
    return (
        <InfoPanel isLoading={false}>
            <InfoRow title={'Expected liquidity'} value={'1,000-10,000$'} />
            <InfoRow style={{ color: '#676767', marginBottom: '20px' }} title={'Expected APR'} value={'1000%-500%'} />
            <InfoRow title={'Current pool liquidity'} value={'110,000$'} />
            <InfoRow title={'Start block'} value={'170432456'} />
            <InfoRow title={'Total blocks'} value={'32459'} />
            <InfoRow title={'Reward per block'} value={'3 META'} />
        </InfoPanel>
    );
};

export const PoolCreateModal = () => {
    const [PoolCreateModal, openPoolCreateModal] = useModal('root', { preventScroll: true });
    const [poolOptions, setPoolOptions] = useState<PoolOptionType[]>([]);
    const [selectedPool, setSelectedPool] = useState<PoolOptionType>(POOL_OPTION);

    const [rewardTokenOptions, setRewardTokenOptions] = useState<TokenOptionType[]>([]);
    const [selectedRewardToken, setSelectedRewardToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [rewardTokenAmount, setRewardTokenAmount] = useState<string>('');

    const [startDate, setStartDate] = useState<string>('');
    const [duration, setDuration] = useState<string>('');

    useEffect(() => {
        const options: PoolOptionType[] = [
            {
                value: '93085031',
                name: 'META-ALGO LP',
                dex: 'tinyman',
                logo1: 'https://asa-list.tinyman.org/assets/712012773/icon.png',
                logo2: 'https://asa-list.tinyman.org/assets/712012773/icon.png',
                asaId: 93085031,
            },
            {
                value: '62401500',
                name: 'USDC-ALGO LP',
                dex: 'tinyman',
                logo1: 'https://asa-list.tinyman.org/assets/31566704/icon.png',
                logo2: 'https://asa-list.tinyman.org/assets/31566704/icon.png',
                asaId: 62401500,
            },
        ];
        setPoolOptions(options);

        getOptions().then((res) => {
            setRewardTokenOptions(res);
            setSelectedRewardToken(res[0]);
        });
    }, []);

    const selectPoolOnChange = (value: SelectedOptionValue, option: PoolOptionType) => {
        setSelectedPool(option);
    };

    const selectRewardTokenOnChange = (value: SelectedOptionValue, option: TokenOptionType) => {
        setSelectedRewardToken(option);
    };

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number(e.target.value))) {
            return;
        }
        setRewardTokenAmount(e.target.value);
    };

    const dateInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
    };

    const durationInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDuration(e.target.value);
    };

    return (
        <div style={{ display: 'flex', marginRight: 'auto' }}>
            <Button onClick={openPoolCreateModal}>ADD POOL</Button>
            <PoolCreateModal>
                <ModalContainer>
                    <ModalTitle>ADD FARM</ModalTitle>
                    <Heading2>LP POOL</Heading2>
                    <Select
                        selectType={SelectType.poolSelect}
                        options={poolOptions}
                        selectedOption={selectedPool}
                        selectOnChange={selectPoolOnChange}
                    />
                    <Heading2>REWARDS</Heading2>
                    <SelectInputGroup
                        options={rewardTokenOptions}
                        selectedOption={selectedRewardToken}
                        inputData={rewardTokenAmount}
                        selectOnChange={selectRewardTokenOnChange}
                        inputOnChange={inputOnChange}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Heading2>START</Heading2>
                        <DateInput
                            placeholder={'Select start time'}
                            type="datetime-local"
                            onChange={dateInputOnChange}
                            value={startDate}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
                        <Heading2>DURATION</Heading2>
                        <DateInput
                            style={{ width: '80px', textAlign: 'center', marginRight: '10px', marginLeft: '10px' }}
                            placeholder={'10-90'}
                            onChange={durationInputOnChange}
                            value={duration}
                        />
                        <Heading2>DAYS</Heading2>
                    </div>
                    <PoolInfo />
                    <PacmanButton
                        buttonText="CREATE FARM"
                        buttonStyle="swap_button"
                        onClickAction={() => alert('OK')}
                    />
                </ModalContainer>
            </PoolCreateModal>
        </div>
    );
};
