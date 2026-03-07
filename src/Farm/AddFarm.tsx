import React, { ChangeEvent, useEffect, useState } from 'react';
import { Account } from '@reach-sh/stdlib/ALGO';
import { AxiosError } from 'axios';
import { useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import pactsdk from '@pactfi/pactsdk';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { backend as farmBackend } from '../vendor/metalabs-farm-17_2_5';
// @ts-ignore
import { backend as distributionBackend } from '../vendor/metalabs-distribution-17_0_5';

import { getTokens } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { POOL_OPTION, Select, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { PoolOptionType, SelectOptionType, TokenOptionType } from '../Components/Select/types';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';

import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import {
    $account,
    $balances,
    $meanRoundDuration,
    $networkTime,
    ALGO_ASSET,
    AssetId,
    FarmType,
    fetchAsset,
    Time,
} from '../common/store';
import { Heading2, ModalContainer, ModalTitle, ModalSubtitle } from '../common/styled';
import { DAY, formatDecimalsMeaningful, getSmallestUnits, unsafeFromBigint } from '../common/lib';
import { deployContractToBackend, getPactPools, getTinymanPools, getHumblePools } from '../providers/apiProvider';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { notify } from '../Components/Notification';
import {
    FARM_BENEFICIARY_ADDR,
    FARM_CREATION_FEE,
    FARM_FLAT_ALGO_CREATION_FEE,
    UNVERIFIED_FARM_CREATION_FEE,
    UNVERIFIED_FARM_FLAT_ALGO_CREATION_FEE,
} from '../AppContext';
import { Contract, Backend } from '../types';
import { expBackoff } from '../common/store/utils';
import { logEvent, LogName } from '../logEvent';
import { DexProvider } from '../dexes';
import { DexSwitch } from '../Zap/Zap';
import * as MiniHumble from '../dexes/humbleReexports';
import { InfoCard } from '../Components/InfoCard/InfoCard';
import { AddFarmRow, DateInput } from './styled';
import { deployFarm, getDexName, InitialDistributionState, InitialFarmState } from './utils';
import { numberRound } from './PoolList/Pool/utils';

// TODO: Using aliases for different package versions prevents us from automatically determining
// the version of given contract type from package.json. So we have to hard-code it.
// Is there a better option?
const CURRENT_CONTRACT_VERSION = {
    farm: '17.2.5',
    distribution: '17.0.5',
};

const MIN_ALLOWED_ALGO_BALANCE = 5;

export type AddFarmType = 'farm' | 'stake';
export type StakingAsset = {
    id: AssetId;
    name: string;
    isUnverified?: boolean;
    dex?: DexProvider;
    asset1_id?: number;
    asset2_id?: number;
};

export const deltaBlocks = (startTime: Time, endTime: Time, meanRoundDuration: number) => {
    return Math.floor(Math.max(5, (endTime - startTime) / 1000) / meanRoundDuration);
};

export const daysToBlocks = (days: number, meanRoundDuration: number) => {
    return Math.floor((days * DAY) / meanRoundDuration);
};

function getFlatAlgoFee(stakeToken: StakingAsset) {
    return stakeToken.isUnverified ? UNVERIFIED_FARM_FLAT_ALGO_CREATION_FEE : FARM_FLAT_ALGO_CREATION_FEE;
}

function getFee(stakeToken: StakingAsset) {
    return stakeToken.isUnverified ? UNVERIFIED_FARM_CREATION_FEE : FARM_CREATION_FEE;
}

const checkFarmParams = (
    stakeToken: StakingAsset,
    rewardToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    rewardAmount: number,
    algoToken: TokenOptionType,
    extraAlgoRewardAmount: number
) => {
    if (!stakeToken.id) {
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
    if (endBlock - beginBlock > 10_000_000) {
        notify('The maximum pool duration is one year. Please decrease the pool duration.', 'warning');
        return false;
    }
    if (Number.isNaN(rewardAmount) || rewardAmount === 0) {
        notify('Please, enter reward amount.', 'warning');
        return false;
    }

    if (!Number.isNaN(rewardToken.balance) && rewardToken.balance < rewardAmount) {
        notify('Reward tokens amount is less than the wallet balance.', 'warning');
        return false;
    }

    const flatAlgoFee = getFlatAlgoFee(stakeToken);
    const minAlgoBalance = Number(flatAlgoFee) + extraAlgoRewardAmount + MIN_ALLOWED_ALGO_BALANCE;
    if (!Number.isNaN(algoToken.balance) && algoToken.balance < minAlgoBalance) {
        const needAlgo = minAlgoBalance - algoToken.balance;
        notify(
            `Not enough ALGO. Please deposit at least ${Math.round(needAlgo)} ALGO to proceed.
            Some ALGOs are reserved by Algorand Network. 
            Creation fee is ${flatAlgoFee} ALGO. 
            So minimum balance to create the pool is ${minAlgoBalance}.`,
            'warning'
        );
        return false;
    }

    if (!FARM_BENEFICIARY_ADDR) {
        console.log('No FARM_BENEFICIARY_ADDR');
        return false;
    }

    return true;
};

const getContractAndParams = (
    contractType: FarmType,
    account: Account,
    stakeToken: StakingAsset,
    rewardToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    rewardAmount: number,
    algoToken: TokenOptionType,
    extraAlgoRewardAmount: number,
    lockLengthBlocks: number
): [Contract, InitialFarmState | InitialDistributionState] => {
    const totalRewardAmount = unsafeFromBigint(getSmallestUnits(rewardToken, rewardAmount));
    const totalAlgoRewardAmount = unsafeFromBigint(getSmallestUnits(ALGO_ASSET, extraAlgoRewardAmount));
    const flatAlgoFeeAmount = getFlatAlgoFee(stakeToken);
    const flatAlgoCreationFee = unsafeFromBigint(getSmallestUnits(ALGO_ASSET, Number(flatAlgoFeeAmount)));
    const creationFee = getFee(stakeToken);

    console.log(
        'Start create ' + contractType,
        stakeToken.id,
        rewardToken.id,
        beginBlock,
        endBlock,
        totalRewardAmount,
        totalAlgoRewardAmount
    );

    if (contractType === 'farm') {
        const ctc = account.contract(farmBackend as Backend);
        const contractParameters: InitialFarmState = {
            beneficiary: FARM_BENEFICIARY_ADDR ?? '',
            creationFee: creationFee ?? 0,
            stakeToken: stakeToken.id,
            rewardToken: rewardToken.id,
            beginBlock,
            endBlock,
            totalRewardAmount,
            totalAlgoRewardAmount,
            lockLengthBlocks,
            flatAlgoCreationFee,
        };
        return [ctc, contractParameters];
    }

    const ctc = account.contract(distributionBackend as Backend);
    const contractParameters: InitialDistributionState = {
        beneficiary: FARM_BENEFICIARY_ADDR ?? '',
        creationFee: creationFee ?? 0,
        token: stakeToken.id,
        beginBlock,
        endBlock,
        totalRewardAmount,
        totalAlgoRewardAmount,
        lockLengthBlocks,
        flatAlgoCreationFee,
    };
    return [ctc, contractParameters];
};

const createFarm = async (
    account: Account,
    stakeToken: StakingAsset,
    rewardToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    rewardAmount: number,
    algoToken: TokenOptionType,
    extraAlgoRewardAmount: number,
    lockLengthBlocks: number
) => {
    if (
        !checkFarmParams(stakeToken, rewardToken, beginBlock, endBlock, rewardAmount, algoToken, extraAlgoRewardAmount)
    ) {
        return false;
    }

    const contractType: FarmType = stakeToken.id === rewardToken.id ? 'distribution' : 'farm';
    const [ctc, contractParameters] = getContractAndParams(
        contractType,
        account,
        stakeToken,
        rewardToken,
        beginBlock,
        endBlock,
        rewardAmount,
        algoToken,
        extraAlgoRewardAmount,
        lockLengthBlocks
    );

    logEvent(
        account.networkAccount.addr,
        { status: '[ADDFARM START]', contractType, params: JSON.stringify(contractParameters) },
        LogName.ADDFARM
    );

    try {
        const contractId = await deployFarm(ctc, contractParameters);

        const deployToBackendWithBackoffFun = expBackoff(async () =>
            deployContractToBackend(
                account.networkAccount.addr,
                Number(contractId),
                contractType,
                stakeToken,
                rewardToken,
                rewardAmount,
                extraAlgoRewardAmount,
                beginBlock,
                endBlock,
                lockLengthBlocks,
                CURRENT_CONTRACT_VERSION[contractType]
            )
        );

        await deployToBackendWithBackoffFun(null);
        notify(`Done! Contract id is ${Number(contractId)}. Please, update the page.`, 'success');
        logEvent(
            account.networkAccount.addr,
            {
                status: '[ADDFARM OK]',
                contractType,
                contractId: Number(contractId),
                params: JSON.stringify(contractParameters),
            },
            LogName.ADDFARM
        );
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        console.log(error);
        const additionalInfo = error instanceof AxiosError && error.response ? error.response.data.detail : '';
        if (error_message.includes('cancelled') || error_message.includes('The User has rejected')) {
            notify('Operation is cancelled.', 'warning');
        } else if (error_message.includes('popup')) {
            notify('Popups are blocked. Please, allow popups in your browser.', 'error');
        } else if (error_message.includes('below min')) {
            notify('Not enough ALGOs in the wallet.', 'error');
        } else {
            notify(`Something went wrong, please contact us on twitter or discord!`, 'error');
        }
        logEvent(
            account.networkAccount.addr,
            {
                status: '[ADDFARM ERROR]',
                contractType,
                error: String(error) + ': ' + additionalInfo,
                params: JSON.stringify(contractParameters),
            },
            LogName.ADDFARM
        );
        return false;
    }

    return true;
};

const calculateFarmData = (
    currentBlock: number,
    rewardAmount: number,
    startTimestamp: Time,
    daysDuration: number,
    meanRoundDuration: number,
    lockPeriod: number
) => {
    const beginBlock: number = currentBlock + deltaBlocks(Date.now(), startTimestamp, meanRoundDuration);
    const endBlock: number = beginBlock + daysToBlocks(daysDuration, meanRoundDuration);
    const rewardPerBlock: number = endBlock - beginBlock ? rewardAmount / (endBlock - beginBlock) : 0;
    const lockPeriodBlocks = daysToBlocks(lockPeriod, meanRoundDuration);

    return [beginBlock, endBlock, rewardPerBlock, lockPeriodBlocks];
};

export const calculateTimeByBlock = (
    currentBlock: number,
    block: number,
    meanRoundDuration: number,
    dateOnly?: boolean
) => {
    const timestamp = Date.now() + (block - currentBlock) * meanRoundDuration * 1000;
    return new Date(timestamp).toLocaleString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: dateOnly ? undefined : '2-digit',
        minute: dateOnly ? undefined : '2-digit',
        hour12: false,
    });
};

function PoolInfo({
    type,
    stakingAsset,
    currentBlock,
    beginBlock,
    endBlock,
    rewardPerBlock,
    rewardAmount,
    rewardToken,
    lockPeriodBlocks,
    meanRoundDuration,
    algoTokenRewards,
    selectedPool,
}: {
    type: AddFarmType;
    stakingAsset: StakingAsset;
    currentBlock: number;
    beginBlock: number;
    endBlock: number;
    rewardPerBlock: number;
    rewardAmount: number;
    rewardToken: TokenOptionType;
    lockPeriodBlocks: number;
    meanRoundDuration: number;
    algoTokenRewards: number;
    selectedPool: PoolOptionType;
}) {
    const creationFee = getFee(stakingAsset);
    const farmCreationFee = (rewardAmount * Number(creationFee ?? 0)) / 10_000;
    const farmCreationAlgoFee = getFlatAlgoFee(stakingAsset);
    const startTime = calculateTimeByBlock(currentBlock, beginBlock, meanRoundDuration);
    const endTime = calculateTimeByBlock(currentBlock, endBlock, meanRoundDuration);

    return (
        <InfoPanel isLoading={false}>
            <InfoRow
                title={type === 'farm' ? 'FARM POOL' : 'STAKING TOKEN'}
                value={stakingAsset.name}
                valueLink={'https://algoscan.app/asset/' + stakingAsset.id}
            />
            <InfoRow
                title="ASA ID"
                value={
                    stakingAsset.dex
                        ? `${stakingAsset.id} (${getDexName(stakingAsset.dex)})`
                        : stakingAsset.id.toString()
                }
                style={{ marginBottom: '20px' }}
            />
            {type === 'farm' && (
                <InfoRow
                    title="Current pool liquidity"
                    value={'$' + numberRound(Number(selectedPool.totalLiquidity))}
                />
            )}
            {type === 'farm' && (
                <InfoRow
                    title="Current fees APR"
                    value={`${selectedPool.dexFeeApr ? (selectedPool.dexFeeApr * 100).toFixed(2) : 0}%`}
                    style={{ marginBottom: '20px' }}
                />
            )}
            <InfoRow title="Start time" value={startTime} />
            <InfoRow title="End time" value={endTime} />
            <InfoRow title="Start-end blocks" value={beginBlock + '-' + endBlock} style={{ marginBottom: '20px' }} />
            <InfoRow
                title="Total reward"
                value={rewardAmount + ' ' + rewardToken.unitName}
                valueLink={'https://algoscan.app/asset/' + rewardToken.id}
            />
            <InfoRow title="Reward per block" value={rewardPerBlock.toPrecision(6) + ' ' + rewardToken.unitName} />
            {algoTokenRewards > 0 && <InfoRow title="Extra rewards" value={algoTokenRewards + ' ALGO'} />}
            <InfoRow title="Lock period blocks" value={lockPeriodBlocks} style={{ marginBottom: '20px' }} />
            <InfoRow
                title="Creation fee"
                value={farmCreationFee + ' ' + rewardToken.unitName + '  + ' + (farmCreationAlgoFee ?? 0) + ' ALGO'}
            />
        </InfoPanel>
    );
}

function getTinymanPoolOptions(selectedOption?: SelectOptionType) {
    return (query: string) => {
        return getTinymanPools(50, query, true)
            .then((pools) => {
                const options: PoolOptionType[] = pools.map((pool) => {
                    return {
                        value: pool.liquidity_asset.id.toString(),
                        name: pool.asset_1.unit_name + '-' + pool.asset_2.unit_name + ' LP',
                        poolId: 0,
                        poolDex: 'T3',
                        asset1: pool.asset_1.id,
                        asset2: pool.asset_2.id,
                        liquidityAsset: pool.liquidity_asset.id,
                        asset1Reserve: BigInt(0),
                        asset2Reserve: BigInt(0),
                        totalLiquidity: BigInt(Math.round(pool.liquidity_in_usd)),
                        dexFeeApr: pool.annual_percentage_rate,
                    };
                });

                if (selectedOption && selectedOption.value && !options.includes(selectedOption as PoolOptionType)) {
                    options.push(selectedOption as PoolOptionType);
                }

                return options;
            })
            .catch((error) => {
                console.warn('Tinyman pool search failed:', error.message);
                return [];
            });
    };
}

function getPactPoolOptions(selectedOption?: SelectOptionType) {
    return async (query: string) => {
        const pactPools = await getPactPools(20, query);
        const options: PoolOptionType[] = pactPools.map((pool) => ({
            value: Number(pool.pool_asset.on_chain_id).toString(),
            name: `${pool.primary_asset.unit_name}-${pool.secondary_asset.unit_name} LP`,
            poolId: Number(pool.id),
            poolDex: 'PT',
            asset1: Number(pool.primary_asset.on_chain_id),
            asset2: Number(pool.secondary_asset.on_chain_id),
            liquidityAsset: Number(pool.pool_asset.on_chain_id),
            asset1Reserve: BigInt(0),
            asset2Reserve: BigInt(0),
            totalLiquidity: BigInt(Math.round(Number(pool.tvl_usd))),
            dexFeeApr: 0, // Is it important here?
        }));

        return options;
    };
}

type HumblePoolInfo = {
    tokenAUnitName: string;
    tokenBUnitName: string;
} & MiniHumble.PoolDetails;

let humblePools: HumblePoolInfo[] = [];

// TODO: eeeh this is very copy-pasty can we do it in a more unified way?
function getHumblePoolOptions(selectedOption?: SelectOptionType) {
    return async (query: string) => {
        if (humblePools.length === 0) {
            const poolDatas = await getHumblePools();
            humblePools = await Promise.all(
                poolDatas.map(async (pool) => {
                    const tokenA = await fetchAsset(Number(pool.tokenAId));
                    const tokenB = await fetchAsset(Number(pool.tokenBId));

                    return { ...pool, tokenAUnitName: tokenA.unitName, tokenBUnitName: tokenB.unitName };
                })
            );
        }

        query = query.toLowerCase();
        const filtered = humblePools.filter(
            ({ tokenAUnitName, tokenBUnitName }) =>
                tokenAUnitName.toLowerCase().includes(query) || tokenBUnitName.toLowerCase().includes(query)
        );

        const options: PoolOptionType[] = filtered.map((pool) => ({
            value: pool.poolTokenId?.toString() || '',
            name: `${pool.tokenAUnitName}-${pool.tokenBUnitName} LP`,
            poolId: Number(pool.poolAddress),
            poolDex: 'H2',
            asset1: Number(pool.tokenAId),
            asset2: Number(pool.tokenBId),
            liquidityAsset: Number(pool.poolTokenId),
            asset1Reserve: BigInt(0),
            asset2Reserve: BigInt(0),
            totalLiquidity: BigInt(Math.round(Number(pool.mintedLiquidityTokens))),
            dexFeeApr: 0, // Is it important here?
        }));

        if (selectedOption && selectedOption.value && !options.includes(selectedOption as PoolOptionType)) {
            options.push(selectedOption as PoolOptionType);
        }

        return options;
    };
}

function getStakingAsset(
    type: AddFarmType,
    selectedToken: TokenOptionType,
    selectedPool: PoolOptionType
): StakingAsset {
    if (type === 'stake') {
        return {
            id: selectedToken.id,
            name: selectedToken.unitName,
            isUnverified: selectedToken.isUnverified,
        };
    }
    return {
        id: selectedPool.liquidityAsset,
        name: selectedPool.name,
        dex: selectedPool.poolDex,
        asset1_id: selectedPool.asset1,
        asset2_id: selectedPool.asset2,
    };
}

export function AddFarm({ type }: { type: AddFarmType }) {
    const account = useUnit($account);
    const balances = useUnit($balances);
    const currentBlock = useUnit($networkTime);
    const meanRoundDuration = useUnit($meanRoundDuration);

    const [selectedDex, setSelectedDex] = useState<DexProvider>('T3');
    const [poolOptions, setPoolOptions] = useState<PoolOptionType[]>([]);
    const [selectedPool, setSelectedPool] = useState<PoolOptionType>(POOL_OPTION);
    const [selectedToken, setSelectedToken] = useState<TokenOptionType>(TOKEN_OPTION);

    const [rewardTokenOptions, setRewardTokenOptions] = useState<TokenOptionType[]>([]);
    const [selectedRewardToken, setSelectedRewardToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [rewardTokenAmount, setRewardTokenAmount] = useState<string>('');

    const [algoToken, setAlgoToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [algoTokenAmount, setAlgoTokenAmount] = useState<string>('');

    const [startTime, setStartTime] = useState<string>('');
    const [daysDuration, setDaysDuration] = useState<string>('');
    const [lockPeriod, setLockPeriod] = useState<string>('0');

    const [AddFarmModal, openAddFarmModal, closeAddFarmModal] = useModal('root');

    const startTimestamp = Date.parse(startTime);
    const [beginBlock, endBlock, rewardPerBlock, lockPeriodBlocks] = calculateFarmData(
        currentBlock,
        Number(rewardTokenAmount),
        startTimestamp,
        Number(daysDuration),
        meanRoundDuration,
        Number(lockPeriod)
    );

    const getPoolOptions =
        selectedDex === 'T3' ? getTinymanPoolOptions : selectedDex === 'PT' ? getPactPoolOptions : getHumblePoolOptions;

    useEffect(() => {
        getPoolOptions()('').then((options) => {
            setPoolOptions(options);
            setSelectedPool(options[0]);
        });
    }, [getPoolOptions]);

    useEffect(() => {
        getTokens(account, balances).then((res) => {
            const filteredAssets = res.filter((asset) => asset.id !== 0);
            setRewardTokenOptions(filteredAssets);
            setSelectedRewardToken(filteredAssets[0]);
            setSelectedToken(filteredAssets[0]);

            const filteredAlgoAsset = res.filter((asset) => asset.id === 0);
            setAlgoToken(filteredAlgoAsset[0]);
        });
    }, [account, balances]);

    const selectDexOnChange = (dex: DexProvider) => {
        setSelectedDex(dex);
        setPoolOptions([]);
        setSelectedPool(POOL_OPTION);
    };

    const selectPoolOnChange = (option: PoolOptionType) => {
        setSelectedPool(option);
    };

    const selectTokenOnChange = (option: TokenOptionType) => {
        setSelectedToken(option);
    };

    const selectRewardTokenOnChange = (option: TokenOptionType) => {
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
        <ModalContainer>
            <ModalTitle style={{ textAlign: 'center' }}>ADD {type.toString().toUpperCase()}</ModalTitle>
            {type === 'farm' && (
                <>
                    <DexSwitch dexes={['T3', 'PT', 'H2']} currentDex={selectedDex} dexOnChange={selectDexOnChange} />
                    <Heading2>LP POOL</Heading2>
                    <Select
                        selectType={SelectType.poolSelect}
                        options={poolOptions}
                        selectedOption={selectedPool}
                        selectOnChange={selectPoolOnChange}
                        getOptions={getPoolOptions}
                    />
                </>
            )}
            {type === 'stake' && (
                <>
                    <Heading2>STAKING TOKEN</Heading2>
                    <Select
                        selectType={SelectType.tokenSelect}
                        options={rewardTokenOptions}
                        selectedOption={selectedToken}
                        selectOnChange={selectTokenOnChange}
                    />
                </>
            )}
            <Heading2>REWARDS</Heading2>
            <SelectInputGroup
                options={rewardTokenOptions}
                selectedOption={selectedRewardToken}
                inputData={rewardTokenAmount}
                setInputData={setRewardTokenAmount}
                selectOnChange={selectRewardTokenOnChange}
            />
            <Heading2 style={{ marginTop: 5 }}>ALGO REWARDS [OPTIONAL]</Heading2>
            <SelectInputGroup
                options={[algoToken]}
                selectedOption={algoToken}
                inputData={algoTokenAmount}
                setInputData={setAlgoTokenAmount}
                selectOnChange={() => {}}
            />
            <AddFarmRow>
                <Heading2>START</Heading2>
                <DateInput
                    placeholder="Select start time"
                    type="datetime-local"
                    value={startTime}
                    onChange={dateInputOnChange}
                />
            </AddFarmRow>
            <AddFarmRow>
                <Heading2 style={{ minWidth: '130px' }}>DURATION</Heading2>
                <DateInput
                    style={{ width: '80px', textAlign: 'center', marginRight: '10px', marginLeft: '10px' }}
                    placeholder="1-420"
                    value={daysDuration}
                    onChange={durationInputOnChange}
                />
                <Heading2>DAYS</Heading2>
            </AddFarmRow>
            <AddFarmRow>
                <Heading2 style={{ minWidth: '130px' }}>LOCK</Heading2>
                <DateInput
                    style={{ width: '80px', textAlign: 'center', marginRight: '10px', marginLeft: '10px' }}
                    placeholder="1-999"
                    value={lockPeriod}
                    onChange={lockInputOnChange}
                />
                <Heading2>DAYS</Heading2>
            </AddFarmRow>
            {!account ? (
                <ConnectWallet buttonClassName="swap_button" style={{ width: '100%' }} />
            ) : (
                <PacmanButton
                    buttonText="VERIFY DETAILS"
                    buttonStyle="swap_button"
                    style={{ marginTop: 20 }}
                    onClickAction={async () => {
                        if (
                            checkFarmParams(
                                getStakingAsset(type, selectedToken, selectedPool),
                                selectedRewardToken,
                                beginBlock,
                                endBlock,
                                Number(rewardTokenAmount),
                                algoToken,
                                Number(algoTokenAmount)
                            )
                        ) {
                            openAddFarmModal();
                        }
                    }}
                />
            )}
            <AddFarmModal>
                <ModalContainer>
                    <ModalSubtitle style={{ fontSize: '16px', width: 350 }}>
                        Please, carefully verify the farm creation parameters.
                    </ModalSubtitle>
                    <PoolInfo
                        type={type}
                        stakingAsset={getStakingAsset(type, selectedToken, selectedPool)}
                        currentBlock={currentBlock}
                        beginBlock={beginBlock}
                        endBlock={endBlock}
                        rewardPerBlock={rewardPerBlock}
                        rewardAmount={Number(rewardTokenAmount)}
                        rewardToken={selectedRewardToken}
                        lockPeriodBlocks={lockPeriodBlocks}
                        meanRoundDuration={meanRoundDuration}
                        algoTokenRewards={Number(algoTokenAmount)}
                        selectedPool={selectedPool}
                    />
                    {account && (
                        <PacmanButton
                            buttonText="CREATE FARM"
                            buttonStyle="swap_button"
                            style={{ marginTop: 20 }}
                            onClickAction={async () => {
                                const res = await createFarm(
                                    account,
                                    getStakingAsset(type, selectedToken, selectedPool),
                                    selectedRewardToken,
                                    beginBlock,
                                    endBlock,
                                    Number(rewardTokenAmount),
                                    algoToken,
                                    Number(algoTokenAmount),
                                    lockPeriodBlocks
                                );
                                res && closeAddFarmModal();
                            }}
                        />
                    )}
                </ModalContainer>
            </AddFarmModal>
            <InfoCard
                title="Questions? We are here"
                subtitle=""
                linkText="team@cometa.wtf"
                link="mailto:team@cometa.wtf"
                style={{ width: '100%', height: 120, marginTop: 20 }}
            />
        </ModalContainer>
    );
}
