import React, { ChangeEvent, useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { SelectedOptionValue } from 'react-select-search';
import { getOptions } from '../Swap/Swap';
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
import { Account } from '@reach-sh/stdlib/ALGO';
import {
    $account,
    $balances,
    $meanRoundDuration,
    $networkTime,
    $pricedAssets,
    Asset,
    Priced,
    Time,
} from '../common/store';
import { useStore, useStoreMap } from 'effector-react';
import { DAY, formatDecimalsMeaningful } from '../common/lib';
import { deployContractToBackend } from '../providers/apiProvider';
import { ConnectWallet } from '../wallet/ConnectWallet';

const deltaBlocks = (startTime: Time, endTime: Time, meanRoundDuration: number) => {
    return Math.floor(Math.max(0, endTime - startTime) / meanRoundDuration);
};

const daysToBlocks = (days: number, meanRoundDuration: number) => {
    return Math.floor((days * DAY) / meanRoundDuration);
};

const createFarm = async (
    account: Account,
    stakeToken: PoolOptionType,
    rewardToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    rewardPerBlock: number,
    rewardTokenAmount: number
) => {
    if (!stakeToken.liquidityAsset) {
        alert('Please, choose LP pool');
        return;
    }
    if (isNaN(rewardToken.id)) {
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

    if (!isNaN(rewardToken.balance) && rewardToken.balance < rewardTokenAmount) {
        alert('Reward tokens amount is less than the wallet balance.');
        return;
    }

    const microRewardPerBlock = Math.floor(rewardPerBlock * 10 ** rewardToken.decimals);
    console.log(
        'Start create farm',
        stakeToken.liquidityAsset,
        rewardToken.id,
        beginBlock,
        endBlock,
        microRewardPerBlock
    );
    const contractParams = {
        stakeToken: stakeToken.liquidityAsset,
        rewardToken: rewardToken.id,
        beginBlock: beginBlock,
        endBlock: endBlock,
        rewardPerBlock: microRewardPerBlock,
        lockLengthBlocks: 0,
        stakeFee: 0,
        unstakeFee: 0,
        isDevEnv: false,
    };
    const ctc = account.contract(farmBackend);
    const contractId = await deployStandardContract(ctc, contractParams);
    console.log('ContractID', contractId);
    const res = await deployContractToBackend(contractId, 'farm', stakeToken.name, stakeToken.poolDex);
    console.log('Backend res', res);

    alert('Done! Contract id is ' + contractId + '. Please, update the page.');
};

const calculateFarmData = (
    currentBlock: number,
    rewardAmount: number,
    startTimestamp: Time,
    daysDuration: number,
    meanRoundDuration: number
) => {
    const beginBlock: number = currentBlock + deltaBlocks(Date.now(), startTimestamp, meanRoundDuration);
    const endBlock: number = beginBlock + daysToBlocks(daysDuration, meanRoundDuration);
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
    rewardAmount,
    pricedRewardToken,
}: {
    beginBlock: number;
    endBlock: number;
    rewardPerBlock: number;
    rewardAmount: number;
    pricedRewardToken: Priced<Asset> | null;
}) => {
    const [minLiquidity, maxLiquidity] = [1000, 10000];
    const [minAPR, maxAPR] = [
        calculateAPR(minLiquidity, rewardAmount, pricedRewardToken),
        calculateAPR(maxLiquidity, rewardAmount, pricedRewardToken),
    ];

    const rewardUnitName = pricedRewardToken ? pricedRewardToken.unitName : '';

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
                value={!isNaN(rewardPerBlock) ? rewardPerBlock.toPrecision(6) + ' ' + rewardUnitName : 0}
            />
        </InfoPanel>
    );
};

export const PoolCreateModal = () => {
    const account = useStore($account);
    const balances = useStore($balances);
    const currentBlock = useStore($networkTime);
    const meanRoundDuration = useStore($meanRoundDuration);

    const [PoolCreateModal, openPoolCreateModal, closePoolCreateModal] = useModal('root', { preventScroll: true });
    const [poolOptions, setPoolOptions] = useState<PoolOptionType[]>([]);
    const [selectedPool, setSelectedPool] = useState<PoolOptionType>(POOL_OPTION);

    const [rewardTokenOptions, setRewardTokenOptions] = useState<TokenOptionType[]>([]);
    const [selectedRewardToken, setSelectedRewardToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [rewardTokenAmount, setRewardTokenAmount] = useState<string>('');

    const [startTime, setStartTime] = useState<string>('');
    const [daysDuration, setDaysDuration] = useState<string>('');

    const pricedRewardToken = useStoreMap({
        store: $pricedAssets,
        keys: [selectedRewardToken.id],
        fn: (assets) => assets.get(selectedRewardToken.id, null),
    });

    const startTimestamp = Date.parse(startTime);
    const [beginBlock, endBlock, rewardPerBlock] = calculateFarmData(
        currentBlock,
        Number(rewardTokenAmount),
        startTimestamp,
        Number(daysDuration),
        meanRoundDuration
    );

    useEffect(() => {
        // TODO: use https://{mainnet|testnet}.analytics.tinyman.org/api/v1/pools/
        const options: PoolOptionType[] = testnetPools.map((pool) => {
            return {
                value: pool.asaId.toString(),
                name: pool.asset1_unitname + '-' + pool.asset2_unitname + ' LP',
                poolId: 0, // this is bad but whatever for now...
                poolDex: 'T2',
                asset1: pool.asset1_id,
                asset2: pool.asset2_id,
                liquidityAsset: pool.asaId,
                asset1Reserve: BigInt(0),
                asset2Reserve: BigInt(0),
                totalLiquidity: BigInt(0),
            };
        });
        setPoolOptions(options);

        getOptions(account, balances).then((res) => {
            // TODO: registerPricedAsset
            const filteredAssets = res.filter((asset) => asset.id !== 0);
            setRewardTokenOptions(filteredAssets);
            setSelectedRewardToken(filteredAssets[0]);
        });
    }, []);

    const selectPoolOnChange = (value: SelectedOptionValue, option: PoolOptionType) => {
        setSelectedPool(option);
    };

    const selectRewardTokenOnChange = (value: SelectedOptionValue, option: TokenOptionType) => {
        setSelectedRewardToken(option);
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
            <Button onClick={openPoolCreateModal} buttonText="ADD FARM" />
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
                        setInputData={setRewardTokenAmount}
                        selectOnChange={selectRewardTokenOnChange}
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
                        rewardAmount={Number(rewardTokenAmount)}
                        pricedRewardToken={pricedRewardToken}
                    />
                    {!account ? (
                        <ConnectWallet buttonClassName="swap_button" />
                    ) : (
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
                                    rewardPerBlock,
                                    Number(rewardTokenAmount)
                                );
                                closePoolCreateModal();
                            }}
                        />
                    )}
                </ModalContainer>
            </PoolCreateModal>
        </PoolCreateModalContainer>
    );
};
