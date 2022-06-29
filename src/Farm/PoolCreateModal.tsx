import React, { ChangeEvent, useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { SelectedOptionValue } from 'react-select-search';
import { API_PATH, getOptions } from '../Swap/Swap';
import { Button } from '../Components/Button/Button';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { Select, POOL_OPTION, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { PoolOptionType, TokenOptionType } from '../Components/Select/types';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { DateInput, PoolCreateModalContainer } from './styled';
import { Heading2, ModalContainer, ModalTitle } from '../common/styled';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
// @ts-ignore
import { deployStandardContract } from '@metalabsog/common';
//@ts-ignore
import { backend as farmBackend } from '@metalabsog/farm';

import testnetPools from '../testnet_pools.json';
import { getAssetLogoUrl } from './PoolList/Pool/utils';
import { Account } from '@reach-sh/stdlib/ALGO';
import { $account, $balances, $networkTime, $pricedAssets, Asset, Priced, Time } from '../common/store';
import { useStore } from 'effector-react';
import { BLOCK_SECS, DAY, formatDecimalsMeaningful, MINUTE } from '../common/lib';

const deltaBlocks = (startTime: Time, endTime: Time) => {
    return Math.floor(Math.max(0, endTime - startTime) / BLOCK_SECS);
};

const daysToBlocks = (days: number) => {
    return Math.floor((days * DAY) / BLOCK_SECS);
};

const deployContractToBackend = async (contractId: number, farmName: string) => {
    const query = API_PATH + 'contract/add?password=%24C0metaT0TheM00n%24';
    const data = {
        type: 'farm',
        id: contractId,
        version: '17.0.2',
        description: farmName,
        metadata: {
            dex: 'Tinyman',
        },
    };

    const response = await fetch(query, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

const createFarm = async (
    account: Account | null,
    stakeToken: PoolOptionType,
    rewardToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    rewardPerBlock: number
) => {
    const rewardTokenId = Number(rewardToken.value);
    if (!account) {
        alert('Please, connect your wallet');
        return;
    }
    if (!stakeToken.asaId) {
        alert('Please, choose LP pool');
        return;
    }
    if (isNaN(rewardTokenId)) {
        alert('Please, choose reward token');
        return;
    }
    if (isNaN(beginBlock) || beginBlock === endBlock) {
        alert('Please, choose start time and farm duration');
        return;
    }
    if (isNaN(rewardPerBlock) || rewardPerBlock === 0) {
        alert('Please, enter reward amount');
        return;
    }

    const contractParams = {
        stakeToken: Number(stakeToken.asaId),
        rewardToken: rewardTokenId,
        beginBlock: beginBlock,
        endBlock: endBlock,
        rewardPerBlock: Math.floor(rewardPerBlock * 10 ** rewardToken.decimals),
        lockLengthBlocks: 0,
        stakeFee: 0,
        unstakeFee: 0,
        isDevEnv: false,
    };
    const ctc = account.contract(farmBackend);
    const contractId = await deployStandardContract(ctc, contractParams);
    console.log('ContractID', contractId);
    const res = await deployContractToBackend(contractId, stakeToken.name);
    console.log('Backend res', res);

    alert('Done! Contract id is ' + contractId + '. Please, update the page.');
};

const calculateFarmData = (currentBlock: number, rewardAmount: number, startTimestamp: Time, daysDuration: number) => {
    const beginBlock: number = currentBlock + deltaBlocks(Date.now(), startTimestamp);
    const endBlock: number = beginBlock + daysToBlocks(daysDuration);
    const rewardPerBlock: number = rewardAmount / (endBlock - beginBlock);

    return [beginBlock, endBlock, rewardPerBlock];
};

const calculateAPR = (liquidity: number, rewards: number, rewardTokenPrice: Priced<Asset> | null) => {
    if (isNaN(rewards) || !rewardTokenPrice) {
        return 0;
    }

    return Math.floor(((rewards * rewardTokenPrice.price) / liquidity) * 100);
};

const PoolInfo = ({
    beginBlock,
    endBlock,
    rewardPerBlock,
    rewardToken,
    rewardAmount,
    rewardTokenPrice,
}: {
    beginBlock: number;
    endBlock: number;
    rewardPerBlock: number;
    rewardToken: TokenOptionType;
    rewardAmount: number;
    rewardTokenPrice: Priced<Asset> | null;
}) => {
    const [minLiquidity, maxLiquidity] = [1000, 10000];
    const [minAPR, maxAPR] = [
        calculateAPR(minLiquidity, rewardAmount, rewardTokenPrice),
        calculateAPR(maxLiquidity, rewardAmount, rewardTokenPrice),
    ];

    return (
        <InfoPanel isLoading={false}>
            <InfoRow
                title={'Expected liquidity'}
                value={'$' + formatDecimalsMeaningful(minLiquidity) + '-$' + formatDecimalsMeaningful(maxLiquidity)}
            />
            <InfoRow
                style={{ color: '#676767', marginBottom: '20px' }}
                title={'Expected APR'}
                value={minAPR + '%-' + maxAPR + '%'}
            />
            {/*<InfoRow title={'Current pool liquidity'} value={'110,000$'} />*/}
            <InfoRow title={'Start block'} value={!isNaN(beginBlock) ? beginBlock : 0} />
            <InfoRow title={'End block'} value={!isNaN(endBlock) ? endBlock : 0} />
            <InfoRow
                title={'Reward per block'}
                value={!isNaN(rewardPerBlock) ? rewardPerBlock.toPrecision(6) + ' ' + rewardToken.unit_name : 0}
            />
        </InfoPanel>
    );
};

export const PoolCreateModal = () => {
    const account = useStore($account);
    const balances = useStore($balances);
    const currentBlock = useStore($networkTime);

    const [PoolCreateModal, openPoolCreateModal, closePoolCreateModal] = useModal('root', { preventScroll: true });
    const [poolOptions, setPoolOptions] = useState<PoolOptionType[]>([]);
    const [selectedPool, setSelectedPool] = useState<PoolOptionType>(POOL_OPTION);

    const [rewardTokenOptions, setRewardTokenOptions] = useState<TokenOptionType[]>([]);
    const [selectedRewardToken, setSelectedRewardToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [rewardTokenAmount, setRewardTokenAmount] = useState<string>('');

    const [startTime, setStartTime] = useState<string>('');
    const [daysDuration, setDaysDuration] = useState<string>('');

    const pricedRewardTokenPrice = useStore($pricedAssets);
    const rewardTokenPrice = pricedRewardTokenPrice.get(Number(selectedRewardToken.value), null);

    const startTimestamp = Date.parse(startTime);
    const [beginBlock, endBlock, rewardPerBlock] = calculateFarmData(
        currentBlock,
        Number(rewardTokenAmount),
        startTimestamp,
        Number(daysDuration)
    );

    useEffect(() => {
        const options: PoolOptionType[] = testnetPools.map((pool) => {
            return {
                value: pool.asaId.toString(),
                name: pool.asset1_unitname + '-' + pool.asset2_unitname + ' LP',
                dex: pool.dex,
                logo1: getAssetLogoUrl(pool.asset1_id),
                logo2: getAssetLogoUrl(pool.asset2_id),
                asaId: pool.asaId,
            };
        });
        setPoolOptions(options);

        getOptions(balances).then((res) => {
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

    const rewardTokenAmountOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number(e.target.value))) {
            return;
        }
        setRewardTokenAmount(e.target.value);
    };

    const dateInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (Date.parse(e.target.value) < Date.now()) {
            return;
        }
        setStartTime(e.target.value);
    };

    const durationInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDaysDuration(e.target.value);
    };

    return (
        <PoolCreateModalContainer>
            <Button onClick={openPoolCreateModal}>ADD FARM</Button>
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
                        inputOnChange={rewardTokenAmountOnChange}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Heading2>START</Heading2>
                        <DateInput
                            placeholder={'Select start time'}
                            type="datetime-local"
                            onChange={dateInputOnChange}
                            value={startTime}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
                        <Heading2>DURATION</Heading2>
                        <DateInput
                            style={{ width: '80px', textAlign: 'center', marginRight: '10px', marginLeft: '10px' }}
                            placeholder={'10-90'}
                            onChange={durationInputOnChange}
                            value={daysDuration}
                        />
                        <Heading2>DAYS</Heading2>
                    </div>
                    <PoolInfo
                        beginBlock={beginBlock}
                        endBlock={endBlock}
                        rewardPerBlock={rewardPerBlock}
                        rewardToken={selectedRewardToken}
                        rewardAmount={Number(rewardTokenAmount)}
                        rewardTokenPrice={rewardTokenPrice}
                    />
                    <PacmanButton
                        buttonText="CREATE FARM"
                        buttonStyle="swap_button"
                        onClickAction={async () => {
                            await createFarm(
                                account,
                                selectedPool,
                                selectedRewardToken,
                                beginBlock,
                                endBlock,
                                rewardPerBlock
                            );
                            closePoolCreateModal();
                        }}
                    />
                </ModalContainer>
            </PoolCreateModal>
        </PoolCreateModalContainer>
    );
};
