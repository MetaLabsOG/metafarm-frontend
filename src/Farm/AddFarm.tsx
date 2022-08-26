import { ChangeEvent, useEffect, useState } from 'react';
import { SelectedOptionValue } from 'react-select-search';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import { backend as farmBackend } from '@metalabsog/farm';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useUnit, useStoreMap } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { getTokens } from '../Swap/Swap';
import { Button } from '../Components/Button/Button';
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
    $pricedAssets,
    ALGO_ASSET,
    Asset,
    Priced,
    Time,
} from '../common/store';
import { Heading2, ModalContainer, ModalTitle, ModalSubtitle } from '../common/styled';
import { DAY, formatDecimalsMeaningful, getSmallestUnits, unsafeFromBigint } from '../common/lib';
import { deployContractToBackend, getTinymanPools } from '../providers/apiProvider';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { notify } from '../Components/Notification';
import { FARM_BENEFICIARY_ADDR, FARM_CREATION_FEE } from '../AppContext';
import { Backend } from '../types';
import { expBackoff } from '../common/store/utils';
import { logEvent, LogName } from '../logEvent';
import { DateInput } from './styled';
import { deployFarm, InitialState } from './utils';

const deltaBlocks = (startTime: Time, endTime: Time, meanRoundDuration: number) => {
    return Math.floor(Math.max(5, (endTime - startTime) / 1000) / meanRoundDuration);
};

const daysToBlocks = (days: number, meanRoundDuration: number) => {
    return Math.floor((days * DAY) / meanRoundDuration);
};

const checkFarmParams = (
    stakeToken: PoolOptionType,
    rewardToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    rewardPerBlock: number,
    rewardTokenAmount: number
) => {
    if (!stakeToken.liquidityAsset) {
        notify('Please, choose LP pool.', 'warning');
        return false;
    }
    if (Number.isNaN(rewardToken.id)) {
        notify('Please, choose reward token.', 'warning');
        return false;
    }

    // TODO: remove it
    if (rewardToken.decimals === 0) {
        notify("We'll support reward tokens with 0 decimals next week.", 'warning');
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

    if (!FARM_BENEFICIARY_ADDR) {
        console.log('No FARM_BENEFICIARY_ADDR');
        return false;
    }

    return true;
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
    if (!checkFarmParams(stakeToken, rewardToken, beginBlock, endBlock, rewardPerBlock, rewardTokenAmount)) {
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
        microRewardPerBlock,
        algoMicroRewardPerBlock
    );
    const contractParameters: InitialState = {
        beneficiary: FARM_BENEFICIARY_ADDR ?? '',
        creationFee: FARM_CREATION_FEE ?? 0,
        stakeToken: stakeToken.liquidityAsset,
        rewardToken: rewardToken.id,
        beginBlock,
        endBlock,
        rewardPerBlock: unsafeFromBigint(microRewardPerBlock),
        extraAlgoRewardPerBlock: unsafeFromBigint(algoMicroRewardPerBlock),
        lockLengthBlocks: lockPeriodBlocks,
        flatAlgoCreationFee: 0,
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
            deployContractToBackend(Number(contractId), 'farm', stakeToken.name, stakeToken.poolDex)
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
    rewardToken,
}: {
    selectedPool: PoolOptionType;
    beginBlock: number;
    endBlock: number;
    rewardPerBlock: number;
    rewardAmount: number;
    rewardToken: TokenOptionType;
}) {
    const farmCreationFee = (rewardAmount * Number(FARM_CREATION_FEE ?? 0)) / 10_000;

    return (
        <InfoPanel isLoading={false}>
            <InfoRow title="FARM POOL" value={selectedPool.name} />
            <InfoRow title="LP ASA ID" value={selectedPool.liquidityAsset} />
            <InfoRow title="DEX" value="tinyman" />
            <InfoRow
                title="Current pool liquidity"
                value={'$' + formatDecimalsMeaningful(Number(selectedPool.totalLiquidity))}
            />
            <InfoRow
                title="Current fees APR"
                value={`${selectedPool.dexFeeApr ? (selectedPool.dexFeeApr * 100).toFixed(2) : 0}%`}
            />
            <InfoRow title="Reward token" value={rewardToken.unitName} style={{ marginBottom: '20px' }} />
            <InfoRow title="Start block" value={!Number.isNaN(beginBlock) ? beginBlock : 0} />
            <InfoRow title="End block" value={!Number.isNaN(endBlock) ? endBlock : 0} />
            <InfoRow
                title="Reward per block"
                value={!Number.isNaN(rewardPerBlock) ? rewardPerBlock.toPrecision(6) + ' ' + rewardToken.unitName : 0}
            />
            <InfoRow title="Farm creation fee" value={farmCreationFee} />
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

export function AddFarm() {
    const account = useUnit($account);
    const balances = useUnit($balances);
    const currentBlock = useUnit($networkTime);
    const meanRoundDuration = useUnit($meanRoundDuration);

    const [poolOptions, setPoolOptions] = useState<PoolOptionType[]>([]);
    const [selectedPool, setSelectedPool] = useState<PoolOptionType>(POOL_OPTION);

    const [rewardTokenOptions, setRewardTokenOptions] = useState<TokenOptionType[]>([]);
    const [selectedRewardToken, setSelectedRewardToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [rewardTokenAmount, setRewardTokenAmount] = useState<string>('');

    const [startTime, setStartTime] = useState<string>('');
    const [daysDuration, setDaysDuration] = useState<string>('');
    const [lockPeriod, setLockPeriod] = useState<string>('0');

    const [AddFarmModal, openAddFarmModal, closeAddFarmModal] = useModal('root', { preventScroll: true });

    const startTimestamp = Date.parse(startTime);
    const [beginBlock, endBlock, rewardPerBlock] = calculateFarmData(
        currentBlock,
        Number(rewardTokenAmount),
        startTimestamp,
        Number(daysDuration),
        meanRoundDuration
    );

    useEffect(() => {
        getPoolOptions()('').then((options) => setPoolOptions(options));
    }, []);

    useEffect(() => {
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
        <ModalContainer>
            <ModalTitle>ADD FARM</ModalTitle>
            <Heading2>LP POOL</Heading2>
            <Select
                selectType={SelectType.poolSelect}
                options={poolOptions}
                selectedOption={selectedPool}
                selectOnChange={selectPoolOnChange}
                getOptions={getPoolOptions}
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
            {!account ? (
                <ConnectWallet buttonClassName="swap_button" />
            ) : (
                <PacmanButton
                    buttonText="CREATE FARM"
                    buttonStyle="swap_button"
                    onClickAction={async () => {
                        if (
                            checkFarmParams(
                                selectedPool,
                                selectedRewardToken,
                                beginBlock,
                                endBlock,
                                rewardPerBlock,
                                Number(rewardTokenAmount)
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
                        Please, verify carefully the farm creation parameters.
                    </ModalSubtitle>
                    <PoolInfo
                        selectedPool={selectedPool}
                        beginBlock={beginBlock}
                        endBlock={endBlock}
                        rewardPerBlock={rewardPerBlock}
                        rewardAmount={Number(rewardTokenAmount)}
                        rewardToken={selectedRewardToken}
                    />
                    {account && (
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
                                res && closeAddFarmModal();
                            }}
                        />
                    )}
                </ModalContainer>
            </AddFarmModal>
        </ModalContainer>
    );
}
