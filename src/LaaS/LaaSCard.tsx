import { useStoreMap, useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { useEffect, useState } from 'react';
import {
    $account,
    $balances,
    $meanRoundDuration,
    $networkTime,
    $pricedAssets,
    Asset,
    Contract,
    ContractState,
    Priced,
} from '../common/store';
import { DexPool, DexProvider, makeDex } from '../dexes';
import { ProgressBar } from '../Components/ProgressBar/ProgressBar';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { getPactPools } from '../providers/apiProvider';
import { fromSmallestUnits } from '../common/lib';
import { notify } from '../Components/Notification';
import { logEvent, LogName } from '../logEvent';
import { Button, ButtonType } from '../Components/Button/Button';
import { LaaSHeader } from './LaaSHeader';
import { LaaSInfo } from './LaaSInfo';
import { LaaSResults } from './LaaSResults';
import { getVaultDurationText, LaaSButton } from './LaaSButton';
import { LaaSCardContainer, ManageButton } from './styled';
import { LaaSTokenDeposit } from './LaaSTokenDeposit';
import { LaaSAuction } from './LaaSAuction';
import { VaultManagement } from './VaultManagement';

export enum LaaSStage {
    subscription,
    running,
    waitingEndVault,
    auction,
    withdraw,
    unknown,
}

export const BUTTON_TITLE: Record<LaaSStage, string> = {
    [LaaSStage.subscription]: 'subscription',
    [LaaSStage.running]: 'running',
    [LaaSStage.waitingEndVault]: 'end vault',
    [LaaSStage.auction]: 'go to auction',
    [LaaSStage.withdraw]: 'withdraw',
    [LaaSStage.unknown]: '',
};

export enum RowType {
    expectedARP,
    capacityLeft,
    TVL,
    vaultDuration,
    myStake,
    myRevenue,
    expectedRevenue,
    withdrawIn,
    ILCovered,
    claimAmount,
}

export const ROWS_BY_STAGE: any = {
    // Record<LaaSStage, Record<RowType, boolean>> = {
    [LaaSStage.subscription]: {
        expectedARP: true,
        capacityLeft: true,
        vaultDuration: true,
        myStake: true,
    },
    [LaaSStage.running]: {
        TVL: true,
        myStake: true,
        myRevenue: true,
    },
    [LaaSStage.waitingEndVault]: {
        TVL: true,
        myStake: true,
        myRevenue: true,
    },
    [LaaSStage.auction]: {
        TVL: true,
        myStake: true,
        expectedRevenue: true,
        withdrawIn: true,
    },
    [LaaSStage.withdraw]: {
        TVL: true,
        ILCovered: true,
        myStake: true,
        claimAmount: true,
    },
    [LaaSStage.unknown]: {},
};

const getLaaSStage = (currentBlock: number, vault: Contract<'laas'>): LaaSStage => {
    if (!vault.state) {
        return LaaSStage.unknown;
    }

    const { startBlock } = vault.state.initial;
    const subscriptionBlocks = vault.state.initial.subscriptionBlock;
    const isFullySubscribed = Number(vault.state.initial.initialABalance - vault.state.global.totalALiqProvided) === 0;

    if (currentBlock - startBlock < subscriptionBlocks && !isFullySubscribed) {
        return LaaSStage.subscription;
    }

    const { vaultRunBlocks } = vault.state.initial;
    if (currentBlock - startBlock < vaultRunBlocks) {
        return LaaSStage.running;
    }

    const { auctionStartBlock, auctionLeftToRaise } = vault.state.global;
    const { auctionLength } = vault.state.initial;
    if (
        auctionLeftToRaise &&
        auctionStartBlock &&
        currentBlock - auctionStartBlock < auctionLength &&
        auctionLeftToRaise > 0
    ) {
        return LaaSStage.auction;
    }

    if (vault.state.global.totalBToWithdraw === null) {
        return LaaSStage.waitingEndVault;
    }

    return LaaSStage.withdraw;
};

export const getCapacityLeft = (asset1: Priced<Asset>, asset2: Priced<Asset>, vaultState: ContractState<'laas'>) => {
    return (
        (fromSmallestUnits(asset1, vaultState.initial.initialABalance - vaultState.global.totalALiqProvided) *
            asset1.price) /
        asset2.price
    );
};

export const getCurrentImpermanentLoss = (
    asset1: Priced<Asset>,
    asset2: Priced<Asset>,
    vaultState: ContractState<'laas'>,
    pool: DexPool | null,
    laasStage: LaaSStage
) => {
    if (!pool) {
        return 0;
    }
    const rOld = Number(vaultState.global.totalALiqProvided) / Number(vaultState.global.totalBLiqProvided);
    // const rCurrent = asset1.price / asset2.price;
    let rCurrent;
    if (laasStage === LaaSStage.auction || laasStage === LaaSStage.withdraw) {
        // TODO verify
        if (!vaultState.global.auctionLeftToRaise) {
            return 0;
        }
        rCurrent =
            Number(vaultState.global.totalALiqProvided) /
            Number(vaultState.global.totalBLiqProvided - vaultState.global.auctionLeftToRaise);
    } else {
        const assetRatio = Number(pool.asset1Reserve) / Number(pool.asset2Reserve);
        rCurrent = asset1.id === pool.asset1 ? assetRatio : 1 / assetRatio;
    }

    const p = rOld / rCurrent;

    return Math.abs((2 * Math.sqrt(p)) / (1 + p) - 1);
};

export const LaaSCard = ({ vault }: { vault: Contract<'laas'> }) => {
    const dex: DexProvider = 'PT';
    const asset1_id = vault.state?.initial.aToken;
    const asset2_id = vault.state?.initial.bToken;
    const asset1 = useStoreMap($pricedAssets, (as) => as.get(asset1_id ?? 0, null));
    const asset2 = useStoreMap($pricedAssets, (as) => as.get(asset2_id ?? 0, null));
    const isVerified = vault.info.metadata.verified ?? false;

    const balances = useUnit($balances);
    const meanRoundDuration = useUnit($meanRoundDuration);
    const currentBlock = useUnit($networkTime);
    const account = useUnit($account);
    const address = account ? account.networkAccount.addr : '';
    const laasStage = getLaaSStage(currentBlock, vault);

    const [DepositModal, openDepositModal, closeDepositModal] = useModal('root');
    const [AuctionModal, openAuctionModal, closeAuctionModal] = useModal('root');
    const [VaultManagementModal, openVaultManagementModal, closeVaultManagementModal] = useModal('root');

    const [poolAPR, setPoolAPR] = useState<number>(0);
    const [pool, setPool] = useState<DexPool | null>(null);

    useEffect(() => {
        if (!vault.state || !asset1_id || !asset2_id) {
            return;
        }

        makeDex(dex)
            .getPoolByAssets(asset1_id, asset2_id)
            .then((pool) => {
                setPool(pool);
                getPactPools(1, pool.poolId).then((pools) => {
                    if (pools[0]) {
                        setPoolAPR(Number(pools[0].apr_7d));
                    }
                });
            });
    }, [vault.state]);

    if (!asset1 || !asset2 || !currentBlock || !vault.state) {
        return null;
    }

    const initialABalance = fromSmallestUnits(asset1, vault.state.initial.initialABalance);
    const totalALiqProvided = fromSmallestUnits(asset1, vault.state.global.totalALiqProvided);
    const vaultDurationText = getVaultDurationText(laasStage, meanRoundDuration, currentBlock, vault.state.initial);

    const withdrawBalance = vault.state ? balances[vault.state.initial.slpToken] : 0;
    // console.log('STATE', vault.state);

    const isFinalResult = laasStage === LaaSStage.withdraw;
    const resultARP = vault.state
        ? Number(vault.state.global.totalBToWithdraw) / Number(vault.state.global.totalBLiqProvided) - 1
        : 0;

    const isCreator = address === vault.state.initial.creator;

    return (
        <LaaSCardContainer>
            <LaaSHeader asset1={asset1} asset2={asset2} dex={dex} isVerified={isVerified} />
            {laasStage === LaaSStage.subscription ? (
                <ProgressBar
                    title="TVL"
                    value={`${numberRound(totalALiqProvided)} / ${numberRound(initialABalance)} ${asset1.unitName}`}
                    progress={totalALiqProvided / initialABalance}
                />
            ) : (
                <LaaSResults
                    APY={isFinalResult ? resultARP : poolAPR}
                    IL={getCurrentImpermanentLoss(asset1, asset2, vault.state, pool, laasStage)}
                    isFinalAPY={isFinalResult}
                    isFinalIL={isFinalResult}
                />
            )}
            <LaaSInfo
                laasStage={laasStage}
                vaultState={vault.state}
                asset1={asset1}
                asset2={asset2}
                poolAPR={poolAPR}
            />
            <LaaSButton
                laasStage={laasStage}
                vault={vault}
                asset2_name={asset2.unitName}
                buttonSubtitle={vaultDurationText}
                disabled={laasStage === LaaSStage.withdraw && withdrawBalance === 0}
                onClick={async () => {
                    if (laasStage === LaaSStage.subscription) {
                        openDepositModal();
                    }
                    if (laasStage === LaaSStage.auction) {
                        openAuctionModal();
                    }
                    if (laasStage === LaaSStage.waitingEndVault) {
                        await vault.ctc.apis.end_vault();
                        logEvent(
                            address,
                            {
                                message: '[VAULT IS ENDED]',
                                vault_id: vault.id,
                                vault_name: `${asset1?.unitName}/${asset2?.unitName}`,
                            },
                            LogName.LAAS
                        );
                        console.log('VAULT IS ENDED');
                    }
                    if (laasStage === LaaSStage.withdraw) {
                        try {
                            await vault.ctc.apis.withdraw_b([withdrawBalance]);
                            logEvent(
                                address,
                                {
                                    message: '[WITHDRAW OK]',
                                    vault_id: vault.id,
                                    vault_name: `${asset1?.unitName}/${asset2?.unitName}`,
                                    amount: Number(withdrawBalance),
                                },
                                LogName.LAAS
                            );
                            notify('Done!', 'success');
                        } catch (error) {
                            const error_message = error instanceof Error ? error.message : String(error);
                            console.log('[WITHDRAW ERROR]', error_message);
                            logEvent(
                                address,
                                {
                                    message: '[WITHDRAW ERROR]',
                                    vault_id: vault.id,
                                    vault_name: `${asset1.unitName}/${asset2.unitName}`,
                                    amount: Number(withdrawBalance),
                                    error: error_message,
                                },
                                LogName.LAAS
                            );
                            notify('Fail!', 'error');
                        }
                    }
                }}
            />
            {isCreator && <ManageButton onClick={openVaultManagementModal}>MANAGE</ManageButton>}
            <DepositModal>
                <LaaSTokenDeposit
                    address={address}
                    vault={vault}
                    dex={dex}
                    asset1={asset1}
                    asset2={asset2}
                    poolAPR={poolAPR}
                    buttonSubtitle={vaultDurationText}
                    closeModal={closeDepositModal}
                />
            </DepositModal>
            <AuctionModal>
                <LaaSAuction
                    address={address}
                    vault={vault}
                    asset1={asset1}
                    asset2={asset2}
                    closeModal={closeAuctionModal}
                    pool={pool}
                />
            </AuctionModal>
            <VaultManagementModal>
                <VaultManagement vault={vault} laasStage={laasStage} asset1={asset1} asset2={asset2} dex={dex} />
            </VaultManagementModal>
        </LaaSCardContainer>
    );
};
