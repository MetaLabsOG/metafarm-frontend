import { ChangeEvent, useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { SelectedOptionValue } from 'react-select-search';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import { backend as farmBackend } from '@metalabsog/farm';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useUnit, useStoreMap } from 'effector-react';
import { getTokens } from '../Swap/Swap';
import { Button } from '../Components/Button/Button';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { Select, POOL_OPTION, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { PoolOptionType, TokenOptionType } from '../Components/Select/types';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';

import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import {
    $account,
    $balances,
    $meanRoundDuration,
    $networkTime,
    $pricedAssets,
    ALGO_ASSET,
    Asset,
    Priced,
    Time,
} from '../common/store';
import { Heading2, ModalContainer, ModalTitle } from '../common/styled';
import { DAY, formatDecimalsMeaningful, getSmallestUnits } from '../common/lib';
import { deployContractToBackend, getTinymanPools } from '../providers/apiProvider';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { notify } from '../Components/Notification';
import { FARM_BENEFICIARY_ADDR, FARM_CREATION_FEE } from '../AppContext';
import { Backend } from '../types';
import { expBackoff } from '../common/store/utils';
import { DateInput, PoolCreateModalContainer } from './styled';
import { deployFarm, InitialState } from './utils';

const deltaBlocks = (startTime: Time, endTime: Time, meanRoundDuration: number) => {
    return Math.floor(Math.max(5, (endTime - startTime) / 1000) / meanRoundDuration);
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
    rewardTokenAmount: number,
    extraAlgoRewardPerBlock: number,
    lockPeriodBlocks: number
) => {
    if (!stakeToken.liquidityAsset) {
        notify('Please, choose LP pool.', 'warning');
        return false;
    }
    if (Number.isNaN(rewardToken.id)) {
        notify('Please, choose reward token.', 'warning');
        return false;
    }
    if (Number.isNaN(beginBlock) || beginBlock >= endBlock) {
        notify('Please, choose start time and farm duration.', 'warning');
        return false;
    }
    if (Number.isNaN(rewardPerBlock) || rewardPerBlock === 0) {
        notify('Please, enter reward amount.', 'warning');
        return false;
    }

    if (!Number.isNaN(rewardToken.balance) && rewardToken.balance < rewardTokenAmount) {
        notify('Reward tokens amount is less than the wallet balance.', 'warning');
        return false;
    }

    const microRewardPerBlock = getSmallestUnits(rewardToken, rewardPerBlock);
    const algoMicroRewardPerBlock = getSmallestUnits(ALGO_ASSET, extraAlgoRewardPerBlock);
    console.log(
        'Start create farm',
        stakeToken.liquidityAsset,
        rewardToken.id,
        beginBlock,
        endBlock,
        microRewardPerBlock
    );
    const contractParameters: InitialState = {
        beneficiary: FARM_BENEFICIARY_ADDR!,
        creationFee: FARM_CREATION_FEE!,
        stakeToken: stakeToken.liquidityAsset,
        rewardToken: rewardToken.id,
        beginBlock,
        endBlock,
        rewardPerBlock: microRewardPerBlock,
        extraAlgoRewardPerBlock: algoMicroRewardPerBlock,
        lockLengthBlocks: 0,
    };
    const ctc = account.contract(farmBackend as Backend);
    const contractId = await deployFarm(ctc, contractParameters);

    const deployToBackendWithBackoffFun = expBackoff(async () =>
        deployContractToBackend(Number(contractId), 'farm', stakeToken.name, stakeToken.poolDex)
    );

    const status = await deployToBackendWithBackoffFun(null);

    if (status) {
        notify(`Done! Contract id is ${Number(contractId)}. Please, update the page.`, 'success');
    } else {
        notify(`Something went wrong, please contact us!`, 'error');
    }

    return true;
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
    const rewardPerBlock: number = endBlock - beginBlock ? rewardAmount / (endBlock - beginBlock) : 0;

    return [beginBlock, endBlock, rewardPerBlock];
};

function PoolInfo({
    selectedPool,
    beginBlock,
    endBlock,
    rewardPerBlock,
    rewardAmount,
    pricedRewardToken,
}: {
    selectedPool: PoolOptionType;
    beginBlock: number;
    endBlock: number;
    rewardPerBlock: number;
    rewardAmount: number;
    pricedRewardToken: Priced<Asset> | null;
}) {
    const rewardUnitName = pricedRewardToken ? pricedRewardToken.unitName : '';
    const farmCreationFee = (rewardAmount * Number(FARM_CREATION_FEE)) / 10_000;

    return (
        <InfoPanel isLoading={false}>
            <InfoRow
                title="Current liquidity"
                value={'$' + formatDecimalsMeaningful(Number(selectedPool.totalLiquidity))}
            />
            <InfoRow
                style={{ color: '#676767', marginBottom: '20px' }}
                title="Current APR"
                value={`${selectedPool.dexFeeApr ? (selectedPool.dexFeeApr * 100).toFixed(2) : 0}%`}
            />
            {/* <InfoRow */}
            {/*    title={'Expected liquidity'} */}
            {/*    value={'$' + formatDecimalsMeaningful(minLiquidity) + '-$' + formatDecimalsMeaningful(maxLiquidity)} */}
            {/* /> */}
            {/* <InfoRow */}
            {/*    style={{ color: '#676767', marginBottom: '20px' }} */}
            {/*    title={'Expected APR'} */}
            {/*    value={minAPR + '%-' + maxAPR + '%'} */}
            {/* /> */}
            {/* <InfoRow title={'Current pool liquidity'} value={'110,000$'} /> */}
            <InfoRow title="Start block" value={!Number.isNaN(beginBlock) ? beginBlock : 0} />
            <InfoRow title="End block" value={!Number.isNaN(endBlock) ? endBlock : 0} />
            <InfoRow
                title="Reward per block"
                value={!Number.isNaN(rewardPerBlock) ? rewardPerBlock.toPrecision(6) + ' ' + rewardUnitName : 0}
            />
            <InfoRow title="Farm creation fee" value={farmCreationFee} />
        </InfoPanel>
    );
}

export function PoolCreateModal() {
    const account = useUnit($account);
    const balances = useUnit($balances);
    const currentBlock = useUnit($networkTime);
    const meanRoundDuration = useUnit($meanRoundDuration);

    const [PoolCreateModal, openPoolCreateModal, closePoolCreateModal] = useModal('root');
    const [poolOptions, setPoolOptions] = useState<PoolOptionType[]>([]);
    const [selectedPool, setSelectedPool] = useState<PoolOptionType>(POOL_OPTION);

    const [rewardTokenOptions, setRewardTokenOptions] = useState<TokenOptionType[]>([]);
    const [selectedRewardToken, setSelectedRewardToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [rewardTokenAmount, setRewardTokenAmount] = useState<string>('');

    const [startTime, setStartTime] = useState<string>('');
    const [daysDuration, setDaysDuration] = useState<string>('');
    const [lockPeriod, setLockPeriod] = useState<string>('0');

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
        getTinymanPools(50).then((pools) => {
            const options: PoolOptionType[] = pools.map((pool) => {
                return {
                    value: pool.liquidity_asset.id.toString(),
                    name: pool.asset_1.unit_name + '-' + pool.asset_2.unit_name + ' LP',
                    poolId: 0,
                    poolDex: 'T2',
                    asset1: pool.asset_1.id,
                    asset2: pool.asset_2.id,
                    liquidityAsset: pool.liquidity_asset.id,
                    asset1Reserve: BigInt(0),
                    asset2Reserve: BigInt(0),
                    totalLiquidity: BigInt(Math.round(pool.liquidity_in_usd)),
                    dexFeeApr: pool.annual_percentage_rate,
                };
            });
            setPoolOptions(options);
        });

        getTokens(account, balances).then((res) => {
            const filteredAssets = res.filter((asset) => asset.id !== 0);
            setRewardTokenOptions(filteredAssets);
            setSelectedRewardToken(filteredAssets[0]);
        });
    }, [account, balances]);

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

    const lockInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLockPeriod(e.target.value);
    };

    return (
        <PoolCreateModalContainer>
            <Button buttonText="ADD FARM" onClick={openPoolCreateModal} />
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
                            placeholder="Select start time"
                            type="datetime-local"
                            value={startTime}
                            onChange={dateInputOnChange}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
                        <Heading2>DURATION</Heading2>
                        <DateInput
                            style={{ width: '80px', textAlign: 'center', marginRight: '10px', marginLeft: '10px' }}
                            placeholder="1-999"
                            value={daysDuration}
                            onChange={durationInputOnChange}
                        />
                        <Heading2>DAYS</Heading2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
                        <Heading2>LOCK</Heading2>
                        <DateInput
                            style={{ width: '80px', textAlign: 'center', marginRight: '10px', marginLeft: '10px' }}
                            placeholder="1-999"
                            value={lockPeriod}
                            onChange={lockInputOnChange}
                        />
                        <Heading2>DAYS</Heading2>
                    </div>
                    <PoolInfo
                        selectedPool={selectedPool}
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
                                const res = await createFarm(
                                    account,
                                    selectedPool,
                                    selectedRewardToken,
                                    beginBlock,
                                    endBlock,
                                    rewardPerBlock,
                                    Number(rewardTokenAmount),
                                    0, // TODO: add extra algo rewards to the interface!!
                                    daysToBlocks(Number(lockPeriod), meanRoundDuration)
                                );
                                res && closePoolCreateModal();
                            }}
                        />
                    )}
                </ModalContainer>
            </PoolCreateModal>
        </PoolCreateModalContainer>
    );
}
