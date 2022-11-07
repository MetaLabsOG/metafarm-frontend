import { ChangeEvent, useEffect, useState } from 'react';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';

import { backend as laasBackend } from '../cometa-laas-tmp/wrapper';
import { getTokens } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { Select, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { TokenOptionType } from '../Components/Select/types';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { $account, $balances, $meanRoundDuration, $networkTime, DEFAULT_TEAL_CONNECTOR } from '../common/store';
import { Heading2, ModalContainer, ModalTitle, ModalSubtitle } from '../common/styled';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { notify } from '../Components/Notification';
import { DexPool, DexProvider, makeDex } from '../dexes';
import { AddFarmRow, DateInput } from '../Farm/styled';
import { calculateTimeByBlock, daysToBlocks } from '../Farm/AddFarm';
import { deployFarm, getDexName } from '../Farm/utils';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { algoexplorerLink, getSmallestUnits } from '../common/lib';
import { expBackoff } from '../common/store/utils';
import { deployVaultToBackend, getPactPools } from '../providers/apiProvider';

const MIN_ALLOWED_ALGO_BALANCE = 5;

const checkLaaSParams = (
    projectToken: TokenOptionType,
    projectTokenAmount: number,
    userToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    pool: DexPool | null
) => {
    if (!projectToken.id) {
        notify('Please, choose project token.', 'warning');
        return false;
    }
    if (Number.isNaN(userToken.id)) {
        notify('Please, choose user token.', 'warning');
        return false;
    }

    if (Number.isNaN(beginBlock) || beginBlock >= endBlock) {
        notify('Please, choose vault duration.', 'warning');
        return false;
    }

    if (Number.isNaN(projectTokenAmount) || projectTokenAmount === 0) {
        notify('Please, enter project token amount.', 'warning');
        return false;
    }

    if (!Number.isNaN(projectToken.balance) && projectToken.balance < projectTokenAmount) {
        notify('Project tokens amount is less than the wallet balance.', 'warning');
        return false;
    }

    if (!pool) {
        notify("Pact pool isn't found.", 'error');
        return false;
    }

    // const minAlgoBalance = Number(FARM_FLAT_ALGO_CREATION_FEE) + MIN_ALLOWED_ALGO_BALANCE;
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
    dex: DexProvider,
    projectToken: TokenOptionType,
    projectTokenAmount: number,
    userToken: TokenOptionType,
    vaultRunBlocks: number,
    rewardToken: TokenOptionType,
    rewardAmount: number,
    lpTokenId: number,
    poolAppId: number
) => {
    // if (!checkLaaSParams()) {
    //     return false;
    // }

    try {
        console.log('[START]', projectToken.id, userToken.id, vaultRunBlocks);
        console.log('[PACT POOL]', lpTokenId, poolAppId);

        // const { poolAppId, lpTokenId } = await deployPactPoolFull(aToken, bToken, account, DEFAULT_TEAL_CONNECTOR);

        const vaultParams = {
            ammAppId: poolAppId,
            aToken: projectToken.id,
            bToken: userToken.id,
            lpToken: lpTokenId,
            vaultRunBlocks: vaultRunBlocks,
            initialAmountA: getSmallestUnits(projectToken, projectTokenAmount),
        };
        console.log('[START VAULT DEPLOY]', vaultParams);
        const laasCtc = laasBackend.makeCtc(account, DEFAULT_TEAL_CONNECTOR);
        const vaultId = await deployFarm(laasCtc, vaultParams);

        const deployToBackendWithBackoffFun = expBackoff(async () =>
            deployVaultToBackend(account.networkAccount.addr, Number(vaultId), 'laas', projectToken, userToken)
        );

        await deployToBackendWithBackoffFun(null);
        notify(`Done! Contract id is ${Number(vaultId)}. Please, update the page.`, 'success');

        console.log('OMG CANT BELIVE IT WORKS!', vaultId);
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        console.log(error_message);
        return false;
    }

    return true;
};

function LaaSInfo({
    projectToken,
    userToken,
    dex,
    currentBlock,
    endBlock,
    rewardAmount,
    rewardToken,
    daysDuration,
    meanRoundDuration,
    poolAPR,
    pool,
}: {
    projectToken: TokenOptionType;
    userToken: TokenOptionType;
    dex: DexProvider;
    currentBlock: number;
    endBlock: number;
    rewardAmount: number;
    rewardToken: TokenOptionType;
    daysDuration: number;
    meanRoundDuration: number;
    poolAPR: number;
    pool: DexPool | null;
}) {
    const laasCreationFee = 0;
    const startTime = calculateTimeByBlock(currentBlock, currentBlock, meanRoundDuration);
    const endTime = calculateTimeByBlock(currentBlock, endBlock, meanRoundDuration);
    const subscriptionPeriod = daysDuration / 5;
    const auctionDurationDays = 3;
    const vaultName = `${projectToken.unitName}/${userToken.unitName} on ${getDexName(dex)}`;

    if (!pool) {
        return null;
    }

    return (
        <InfoPanel isLoading={false}>
            <InfoRow title="Vault" value={vaultName} valueLink={algoexplorerLink('application', pool.poolId)} />
            <InfoRow
                title="LP ASA ID"
                value={pool.liquidityAsset}
                valueLink={algoexplorerLink('asset', pool.liquidityAsset)}
            />
            <InfoRow title="Expected user APR" value={`${numberRound(poolAPR * 100, 2)}%`} />
            {/*<InfoRow title="Expected Impermanent Loss" value="5%" />*/}
            <InfoRow title="Subscription period" value={`${numberRound(subscriptionPeriod)} days`} />
            <InfoRow title="Vault start" value={startTime} />
            <InfoRow title="Vault end" value={endTime} />
            <InfoRow title="Auction duration" value={`${auctionDurationDays} days`} />
            {/*<InfoRow*/}
            {/*    title="Total reward"*/}
            {/*    value={`${rewardAmount} ${rewardToken.unitName}`}*/}
            {/*    valueLink={`https://algoscan.app/asset/${rewardToken.id}`}*/}
            {/*/>*/}
            <InfoRow title="Vault creation fee" value={`${laasCreationFee} ALGO`} />
        </InfoPanel>
    );
}

export function AddLaaS() {
    const account = useUnit($account);
    const balances = useUnit($balances);
    const currentBlock = useUnit($networkTime);
    const meanRoundDuration = useUnit($meanRoundDuration);

    const [selectedDex, setSelectedDex] = useState<DexProvider>('PT');
    const [tokensOptions, setTokensOptions] = useState<TokenOptionType[]>([]);

    const [selectedProjectToken, setSelectedProjectToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [projectTokenAmount, setProjectTokenAmount] = useState<string>('');
    const [selectedUserToken, setSelectedUserToken] = useState<TokenOptionType>(TOKEN_OPTION);

    const [rewardToken, setRewardToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [rewardTokenAmount, setRewardTokenAmount] = useState<string>('');

    const [daysDuration, setDaysDuration] = useState<string>('');

    const [AddLaaSModal, openAddLaaSModal, closeAddLaaSModal] = useModal('root');

    const endBlock: number = currentBlock + daysToBlocks(Number(daysDuration), meanRoundDuration);

    const [pool, setPool] = useState<DexPool | null>(null);
    const [poolAPR, setPoolAPR] = useState<number>(0);

    useEffect(() => {
        getTokens(account, balances).then((res) => {
            const filteredTokens = res.filter((token) => token.id !== 0);
            setTokensOptions(filteredTokens);
            setSelectedProjectToken(filteredTokens[0]);
            setRewardToken(filteredTokens[0]);
            setSelectedUserToken(filteredTokens[1]);
        });
    }, [account, balances]);

    useEffect(() => {
        makeDex(selectedDex)
            .getPoolByAssets(selectedProjectToken.id, selectedUserToken.id)
            .then((pool) => {
                setPool(pool);
                getPactPools(1, pool.poolId).then((pools) => {
                    if (pools[0]) {
                        setPoolAPR(Number(pools[0].apr_7d));
                    }
                });
            })
            .catch((e) => {
                setPool(null);
                setPoolAPR(0);
            });
    }, [selectedProjectToken, selectedUserToken]);

    // const selectDexOnChange = (dex: DexProvider) => {
    //     setSelectedDex(dex);
    // };

    const selectProjectTokenOnChange = (option: TokenOptionType) => {
        setSelectedProjectToken(option);
    };

    const selectUserTokenOnChange = (option: TokenOptionType) => {
        setSelectedUserToken(option);
    };

    const selectRewardTokenOnChange = (option: TokenOptionType) => {
        setRewardToken(option);
    };

    const durationInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDaysDuration(e.target.value);
    };

    return (
        <ModalContainer>
            <ModalTitle style={{ textAlign: 'center' }}>ADD LAAS VAULT</ModalTitle>
            {/*<DexSwitch dexProvider={selectedDex} dexOnChange={selectDexOnChange} />*/}
            <Heading2>PROJECT TOKEN</Heading2>
            <SelectInputGroup
                options={tokensOptions}
                selectedOption={selectedProjectToken}
                inputData={projectTokenAmount}
                setInputData={setProjectTokenAmount}
                selectOnChange={selectProjectTokenOnChange}
            />
            <Heading2>USER TOKEN</Heading2>
            <Select
                selectType={SelectType.tokenSelect}
                options={tokensOptions}
                selectedOption={selectedUserToken}
                selectOnChange={selectUserTokenOnChange}
            />
            {/*<Heading2>REWARDS [OPTIONAL]</Heading2>*/}
            {/*<SelectInputGroup*/}
            {/*    options={tokensOptions}*/}
            {/*    selectedOption={rewardToken}*/}
            {/*    inputData={rewardTokenAmount}*/}
            {/*    setInputData={setRewardTokenAmount}*/}
            {/*    selectOnChange={selectRewardTokenOnChange}*/}
            {/*/>*/}
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
                    style={{ marginTop: 20 }}
                    onClickAction={async () => {
                        if (
                            checkLaaSParams(
                                selectedProjectToken,
                                Number(projectTokenAmount),
                                selectedUserToken,
                                currentBlock,
                                endBlock,
                                pool
                            )
                        ) {
                            openAddLaaSModal();
                        }
                    }}
                />
            )}
            <AddLaaSModal>
                <ModalContainer>
                    <ModalSubtitle style={{ fontSize: '16px', width: 350, marginBottom: 10 }}>
                        Please, carefully verify the vault creation parameters.
                    </ModalSubtitle>
                    <LaaSInfo
                        projectToken={selectedProjectToken}
                        userToken={selectedUserToken}
                        dex={selectedDex}
                        currentBlock={currentBlock}
                        endBlock={endBlock}
                        rewardToken={rewardToken}
                        rewardAmount={Number(rewardTokenAmount)}
                        daysDuration={Number(daysDuration)}
                        meanRoundDuration={meanRoundDuration}
                        poolAPR={poolAPR}
                        pool={pool}
                    />
                    {account && pool && (
                        <PacmanButton
                            buttonText="CREATE LAAS VAULT"
                            buttonStyle="swap_button"
                            style={{ marginTop: 20 }}
                            onClickAction={async () => {
                                const res = await createVault(
                                    account,
                                    selectedDex,
                                    selectedProjectToken,
                                    Number(projectTokenAmount),
                                    selectedUserToken,
                                    endBlock - currentBlock,
                                    rewardToken,
                                    Number(rewardTokenAmount),
                                    pool.poolId,
                                    pool.liquidityAsset
                                );
                                res && closeAddLaaSModal();
                            }}
                        />
                    )}
                </ModalContainer>
            </AddLaaSModal>
        </ModalContainer>
    );
}
