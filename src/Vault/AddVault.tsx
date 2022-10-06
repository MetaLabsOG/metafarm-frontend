import React, { ChangeEvent, useEffect, useState } from 'react';
import { SelectedOptionValue } from 'react-select-search';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { getTokens } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { Select, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { TokenOptionType } from '../Components/Select/types';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';

import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { $account, $balances, $meanRoundDuration, $networkTime } from '../common/store';
import { Heading2, ModalContainer, ModalTitle, ModalSubtitle } from '../common/styled';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { notify } from '../Components/Notification';
import { FARM_FLAT_ALGO_CREATION_FEE } from '../AppContext';
import { logEvent, LogName } from '../logEvent';
import { DexProvider } from '../dexes';
import { DexSwitch } from '../Zap/Zap';
import { AddFarmRow, DateInput } from '../Farm/styled';
import { calculateTimeByBlock, daysToBlocks } from '../Farm/AddFarm';

const MIN_ALLOWED_ALGO_BALANCE = 5;

const checkVaultParams = (
    stakeToken: TokenOptionType,
    rewardToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    rewardAmount: number,
    algoToken: TokenOptionType,
    extraAlgoRewardAmount: number
) => {
    if (Number.isNaN(stakeToken.id)) {
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

    // const minAlgoBalance = Number(FARM_FLAT_ALGO_CREATION_FEE) + extraAlgoRewardAmount + MIN_ALLOWED_ALGO_BALANCE;
    // if (!Number.isNaN(algoToken.balance) && algoToken.balance < minAlgoBalance) {
    //     const needAlgo = minAlgoBalance - algoToken.balance;
    //     notify(
    //         `Not enough ALGO. Please deposit at least ${Math.round(needAlgo)} ALGO to proceed.
    //         Some ALGOs are reserved by Algorand Network.
    //         Creation fee is ${FARM_FLAT_ALGO_CREATION_FEE} ALGO.
    //         So minimum balance to create the pool is ${minAlgoBalance}.`,
    //         'warning'
    //     );
    //     return false;
    // }

    return true;
};

const createVault = async (
    account: Account,
    stakeToken: TokenOptionType,
    rewardToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    rewardAmount: number,
    algoToken: TokenOptionType,
    extraAlgoRewardAmount: number
) => {
    if (
        !checkVaultParams(stakeToken, rewardToken, beginBlock, endBlock, rewardAmount, algoToken, extraAlgoRewardAmount)
    ) {
        return false;
    }

    try {
        console.log('VAULT!');
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
            {
                status: '[Vault ERROR]',
                error: String(error),
            },
            LogName.ADDFARM
        );
        return false;
    }

    return true;
};

function VaultInfo({
    stakingAsset,
    currentBlock,
    beginBlock,
    endBlock,
    rewardAmount,
    rewardToken,
    meanRoundDuration,
    algoTokenRewards,
}: {
    stakingAsset: TokenOptionType;
    currentBlock: number;
    beginBlock: number;
    endBlock: number;
    rewardAmount: number;
    rewardToken: TokenOptionType;
    meanRoundDuration: number;
    algoTokenRewards: number;
}) {
    const vaultCreationFee = 0;
    const startTime = calculateTimeByBlock(currentBlock, beginBlock, meanRoundDuration);
    const endTime = calculateTimeByBlock(currentBlock, endBlock, meanRoundDuration);

    return (
        <InfoPanel isLoading={false}>
            <InfoRow title="Expected user APR" value={'10%'} />
            <InfoRow title="Expected Impermanent Loss" value={'5%'} />
            <InfoRow title="Subscription period" value={'10 days'} />
            <InfoRow title="Vault start" value={startTime} />
            <InfoRow title="Vault end" value={endTime} />
            <InfoRow title="Auction duration" value={'2 days'} />
            <InfoRow
                title="Total reward"
                value={rewardAmount + ' ' + rewardToken.unitName}
                valueLink={'https://algoscan.app/asset/' + rewardToken.id}
            />
            {algoTokenRewards > 0 && <InfoRow title="Extra rewards" value={algoTokenRewards + ' ALGO'} />}
            <InfoRow title="Vault creation fee" value={(FARM_FLAT_ALGO_CREATION_FEE ?? 0) + ' ALGO'} />
        </InfoPanel>
    );
}

export function AddVault() {
    const account = useUnit($account);
    const balances = useUnit($balances);
    const currentBlock = useUnit($networkTime);
    const meanRoundDuration = useUnit($meanRoundDuration);

    const [selectedDex, setSelectedDex] = useState<DexProvider>('T2');
    const [tokensOptions, setTokensOptions] = useState<TokenOptionType[]>([]);

    const [selectedProjectToken, setSelectedProjectToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [projectTokenAmount, setProjectTokenAmount] = useState<string>('');
    const [selectedUserToken, setSelectedUserToken] = useState<TokenOptionType>(TOKEN_OPTION);

    const [rewardToken, setRewardToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [rewardTokenAmount, setRewardTokenAmount] = useState<string>('');

    const [daysDuration, setDaysDuration] = useState<string>('');

    const [AddVaultModal, openAddVaultModal, closeAddVaultModal] = useModal('root', { preventScroll: true });

    const endBlock: number = currentBlock + daysToBlocks(Number(daysDuration), meanRoundDuration);

    useEffect(() => {
        getTokens(account, balances).then((res) => {
            setTokensOptions(res);
            setSelectedUserToken(res[0]);
            setSelectedProjectToken(res[1]);
            setRewardToken(res[1]);
        });
    }, [account, balances]);

    const selectDexOnChange = (dex: DexProvider) => {
        setSelectedDex(dex);
    };

    const selectTokenOnChange = (value: SelectedOptionValue, option: TokenOptionType) => {
        setSelectedUserToken(option);
    };

    const selectRewardTokenOnChange = (value: SelectedOptionValue, option: TokenOptionType) => {
        setSelectedProjectToken(option);
    };

    const durationInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDaysDuration(e.target.value);
    };

    return (
        <ModalContainer>
            <ModalTitle style={{ textAlign: 'center' }}>ADD LAAS VAULT</ModalTitle>
            <DexSwitch dexProvider={selectedDex} dexOnChange={selectDexOnChange} />
            <Heading2>PROJECT TOKEN</Heading2>
            <SelectInputGroup
                options={tokensOptions}
                selectedOption={selectedProjectToken}
                inputData={projectTokenAmount}
                setInputData={setProjectTokenAmount}
                selectOnChange={selectRewardTokenOnChange}
            />
            <Heading2>USER TOKEN</Heading2>
            <Select
                selectType={SelectType.tokenSelect}
                options={tokensOptions}
                selectedOption={selectedUserToken}
                selectOnChange={selectTokenOnChange}
            />
            <Heading2>REWARDS [OPTIONAL]</Heading2>
            <SelectInputGroup
                options={tokensOptions}
                selectedOption={rewardToken}
                inputData={rewardTokenAmount}
                setInputData={setRewardTokenAmount}
                selectOnChange={() => {}}
            />
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
            {!account ? (
                <ConnectWallet buttonClassName="swap_button" />
            ) : (
                <PacmanButton
                    buttonText="VERIFY DETAILS"
                    buttonStyle="swap_button"
                    onClickAction={async () => {
                        if (
                            checkVaultParams(
                                selectedUserToken,
                                selectedProjectToken,
                                currentBlock,
                                endBlock,
                                Number(projectTokenAmount),
                                rewardToken,
                                Number(rewardTokenAmount)
                            )
                        ) {
                            openAddVaultModal();
                        }
                    }}
                />
            )}
            <AddVaultModal>
                <ModalContainer>
                    <ModalSubtitle style={{ fontSize: '16px' }}>
                        Please, carefully verify the LaaS creation parameters.
                    </ModalSubtitle>
                    <VaultInfo
                        stakingAsset={selectedUserToken}
                        currentBlock={currentBlock}
                        beginBlock={currentBlock}
                        endBlock={endBlock}
                        rewardAmount={Number(projectTokenAmount)}
                        rewardToken={selectedProjectToken}
                        meanRoundDuration={meanRoundDuration}
                        algoTokenRewards={Number(rewardTokenAmount)}
                    />
                    {account && (
                        <PacmanButton
                            buttonText="CREATE LAAS VAULT"
                            buttonStyle="swap_button"
                            onClickAction={async () => {
                                const res = await createVault(
                                    account,
                                    selectedUserToken,
                                    selectedProjectToken,
                                    currentBlock,
                                    endBlock,
                                    Number(projectTokenAmount),
                                    rewardToken,
                                    Number(rewardTokenAmount)
                                );
                                res && closeAddVaultModal();
                            }}
                        />
                    )}
                </ModalContainer>
            </AddVaultModal>
        </ModalContainer>
    );
}
