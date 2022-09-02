import React, { ChangeEvent, useEffect, useState } from 'react';
import { SelectedOptionValue } from 'react-select-search';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import { backend as farmBackend } from 'metalabs-farm-17_2_5';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { getTokens } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { POOL_OPTION, Select, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { PoolOptionType, SelectOptionType, TokenOptionType } from '../Components/Select/types';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';

import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { $account, $balances, $meanRoundDuration, $networkTime, ALGO_ASSET, AssetId, Time } from '../common/store';
import { Heading2, ModalContainer, ModalTitle, ModalSubtitle } from '../common/styled';
import { DAY, formatDecimalsMeaningful, getSmallestUnits, unsafeFromBigint } from '../common/lib';
import { deployContractToBackend, getTinymanPools } from '../providers/apiProvider';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { notify } from '../Components/Notification';
import { FARM_BENEFICIARY_ADDR, FARM_CREATION_FEE, FARM_FLAT_ALGO_CREATION_FEE } from '../AppContext';
import { Backend } from '../types';
import { expBackoff } from '../common/store/utils';
import { logEvent, LogName } from '../logEvent';
import { DexProvider } from '../dexes';
import { AddFarmRow, DateInput } from './styled';
import { deployFarm, InitialState } from './utils';

// TODO: Using aliases for different package versions prevents us from automatically determining
// the version of given contract type from package.json. So we have to hard-code it.
// Is there a better option?
const CURRENT_FARM_VERSION = '17.2.5';

const MIN_ALLOWED_ALGO_BALANCE = 5;

export type AddFarmType = 'farm' | 'stake';
export type StakingAsset = {
    id: AssetId;
    name: string;
    dex?: DexProvider;
};

const deltaBlocks = (startTime: Time, endTime: Time, meanRoundDuration: number) => {
    return Math.floor(Math.max(5, (endTime - startTime) / 1000) / meanRoundDuration);
};

const daysToBlocks = (days: number, meanRoundDuration: number) => {
    return Math.floor((days * DAY) / meanRoundDuration);
};

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
    if (Number.isNaN(rewardAmount) || rewardAmount === 0) {
        notify('Please, enter reward amount.', 'warning');
        return false;
    }

    if (!Number.isNaN(rewardToken.balance) && rewardToken.balance < rewardAmount) {
        notify('Reward tokens amount is less than the wallet balance.', 'warning');
        return false;
    }

    if (
        !Number.isNaN(algoToken.balance) &&
        algoToken.balance < Number(FARM_FLAT_ALGO_CREATION_FEE) + extraAlgoRewardAmount + MIN_ALLOWED_ALGO_BALANCE
    ) {
        const needAlgo =
            Number(FARM_FLAT_ALGO_CREATION_FEE) + extraAlgoRewardAmount + MIN_ALLOWED_ALGO_BALANCE - algoToken.balance;
        notify(
            `Not enough ALGOs in the wallet. Please, add at least ${Math.round(
                needAlgo
            )} ALGOs. The creation fee is ${FARM_FLAT_ALGO_CREATION_FEE} ALGOs.`,
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

    const totalRewardAmount = unsafeFromBigint(getSmallestUnits(rewardToken, rewardAmount));
    const totalAlgoRewardAmount = unsafeFromBigint(getSmallestUnits(ALGO_ASSET, extraAlgoRewardAmount));
    const flatAlgoCreationFee = unsafeFromBigint(getSmallestUnits(ALGO_ASSET, Number(FARM_FLAT_ALGO_CREATION_FEE)));

    console.log(
        'Start create farm',
        stakeToken.id,
        rewardToken.id,
        beginBlock,
        endBlock,
        totalRewardAmount,
        totalAlgoRewardAmount
    );
    const contractParameters: InitialState = {
        beneficiary: FARM_BENEFICIARY_ADDR ?? '',
        creationFee: FARM_CREATION_FEE ?? 0,
        stakeToken: stakeToken.id,
        rewardToken: rewardToken.id,
        beginBlock,
        endBlock,
        totalRewardAmount,
        totalAlgoRewardAmount,
        lockLengthBlocks,
        flatAlgoCreationFee,
    };
    logEvent(
        account.networkAccount.addr,
        { status: '[ADDFARM START]', params: JSON.stringify(contractParameters) },
        LogName.ADDFARM
    );

    try {
        const ctc = account.contract(farmBackend as Backend);
        const contractId = await deployFarm(ctc, contractParameters);

        const deployToBackendWithBackoffFun = expBackoff(async () =>
            deployContractToBackend(
                account.networkAccount.addr,
                Number(contractId),
                stakeToken.id === rewardToken.id ? 'distribution' : 'farm',
                stakeToken.name,
                stakeToken.dex,
                CURRENT_FARM_VERSION
            )
        );

        await deployToBackendWithBackoffFun(null);
        notify(`Done! Contract id is ${Number(contractId)}. Please, update the page.`, 'success');
        logEvent(
            account.networkAccount.addr,
            { status: '[ADDFARM OK]', contractId: Number(contractId), params: JSON.stringify(contractParameters) },
            LogName.ADDFARM
        );
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        console.log(error);
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
            { status: '[ADDFARM ERROR]', error: String(error), params: JSON.stringify(contractParameters) },
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

const calculateTimeByBlock = (currentBlock: number, block: number, meanRoundDuration: number) => {
    const timestamp = Date.now() + (block - currentBlock) * meanRoundDuration * 1000;
    return new Date(timestamp).toLocaleString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
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
    const farmCreationFee = (rewardAmount * Number(FARM_CREATION_FEE ?? 0)) / 10_000;
    const startTime = calculateTimeByBlock(currentBlock, beginBlock, meanRoundDuration);
    const endTime = calculateTimeByBlock(currentBlock, endBlock, meanRoundDuration);

    return (
        <InfoPanel isLoading={false}>
            <InfoRow
                title={type === 'farm' ? 'FARM POOL' : 'STAKING TOKEN'}
                value={stakingAsset.name}
                valueLink={'https://algoscan.app/asset/' + stakingAsset.id}
            />
            <InfoRow title="ASA ID" value={stakingAsset.id + ' (tinyman)'} style={{ marginBottom: '20px' }} />
            {type === 'farm' && (
                <InfoRow
                    title="Current pool liquidity"
                    value={'$' + formatDecimalsMeaningful(Number(selectedPool.totalLiquidity))}
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
                value={
                    farmCreationFee + ' ' + rewardToken.unitName + '  + ' + (FARM_FLAT_ALGO_CREATION_FEE ?? 0) + ' ALGO'
                }
            />
        </InfoPanel>
    );
}

function getPoolOptions(selectedOption?: SelectOptionType) {
    return (query: string) => {
        return getTinymanPools(50, query).then((pools) => {
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

            if (selectedOption && selectedOption.value && !options.includes(selectedOption as PoolOptionType)) {
                options.push(selectedOption as PoolOptionType);
            }

            return options;
        });
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
        };
    }
    return {
        id: selectedPool.liquidityAsset,
        name: selectedPool.name,
        dex: selectedPool.poolDex,
    };
}

export function AddFarm({ type }: { type: AddFarmType }) {
    const account = useUnit($account);
    const balances = useUnit($balances);
    const currentBlock = useUnit($networkTime);
    const meanRoundDuration = useUnit($meanRoundDuration);

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

    const [AddFarmModal, openAddFarmModal, closeAddFarmModal] = useModal('root', { preventScroll: true });

    const startTimestamp = Date.parse(startTime);
    const [beginBlock, endBlock, rewardPerBlock, lockPeriodBlocks] = calculateFarmData(
        currentBlock,
        Number(rewardTokenAmount),
        startTimestamp,
        Number(daysDuration),
        meanRoundDuration,
        Number(lockPeriod)
    );

    useEffect(() => {
        getPoolOptions()('').then((options) => setPoolOptions(options));
    }, []);

    useEffect(() => {
        getTokens(account, balances).then((res) => {
            const filteredAssets = res.filter((asset) => asset.id !== 0);
            setRewardTokenOptions(filteredAssets);
            setSelectedRewardToken(filteredAssets[0]);

            const filteredAlgoAsset = res.filter((asset) => asset.id === 0);
            setAlgoToken(filteredAlgoAsset[0]);
        });
    }, [account, balances]);

    const selectPoolOnChange = (value: SelectedOptionValue, option: PoolOptionType) => {
        setSelectedPool(option);
    };

    const selectTokenOnChange = (value: SelectedOptionValue, option: TokenOptionType) => {
        setSelectedToken(option);
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
        <ModalContainer>
            <ModalTitle>ADD {type.toString().toUpperCase()}</ModalTitle>
            {type === 'farm' && (
                <>
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
            <Heading2>ALGO REWARDS [OPTIONAL]</Heading2>
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
                    placeholder="1-999"
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
                <ConnectWallet buttonClassName="swap_button" />
            ) : (
                <PacmanButton
                    buttonText="VERIFY DETAILS"
                    buttonStyle="swap_button"
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
                    <ModalSubtitle style={{ fontSize: '16px' }}>
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
        </ModalContainer>
    );
}
