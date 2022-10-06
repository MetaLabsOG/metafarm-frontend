import { useStoreMap, useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import React, { useEffect, useState } from 'react';
import { $meanRoundDuration, $networkTime, $pricedAssets, Contract } from '../common/store';
import { DexProvider } from '../dexes';
import { ProgressBar } from '../Components/ProgressBar/ProgressBar';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { getTinymanPools } from '../providers/apiProvider';
import Confetti from '../Components/Confetti/Confetti';
import { getDexName } from '../Farm/utils';
import { VaultHeader } from './VaultHeader';
import { VaultInfo } from './VaultInfo';
import { VaultResults } from './VaultResults';
import { getVaultDurationText, VaultButton } from './VaultButton';
import { VaultCardContainer } from './styled';
import { VaultTokenDeposit } from './VaultTokenDeposit';
import { VaultAuction } from './VaultAuction';

export enum VaultStage {
    subscription,
    running,
    auction,
    withdraw,
    unknown,
}

export const BUTTON_TITLE: Record<VaultStage, string> = {
    [VaultStage.subscription]: 'subscription',
    [VaultStage.running]: 'running',
    [VaultStage.auction]: 'go to auction',
    [VaultStage.withdraw]: 'withdraw',
    [VaultStage.unknown]: '',
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
    //Record<VaultStage, Record<RowType, boolean>> = {
    [VaultStage.subscription]: {
        [RowType.expectedARP]: true,
        [RowType.capacityLeft]: true,
        [RowType.vaultDuration]: true,
        [RowType.myStake]: true,
    },
    [VaultStage.running]: {
        [RowType.TVL]: true,
        [RowType.myStake]: true,
        [RowType.myRevenue]: true,
    },
    [VaultStage.auction]: {
        [RowType.TVL]: true,
        [RowType.myStake]: true,
        [RowType.expectedRevenue]: true,
        [RowType.withdrawIn]: true,
    },
    [VaultStage.withdraw]: {
        [RowType.TVL]: true,
        [RowType.ILCovered]: true,
        [RowType.claimAmount]: true,
    },
    [VaultStage.unknown]: {},
};

// TODO (need to update contract): should be read from the contract.
export const AUCTION_BLOCKS = 60 * 60 * 24;

const getVaultStage = (currentBlock: number, vault: Contract<'vault'>): VaultStage => {
    if (!vault.state) {
        return VaultStage.unknown;
    }

    const startBlock = vault.state.initial.startBlock;
    const subscriptionBlocks = vault.state.initial.subscriptionBlocks;
    const isFullySubscribed = vault.state.global.isFullySubscribed;

    if (currentBlock - startBlock < subscriptionBlocks && !isFullySubscribed) {
        return VaultStage.subscription;
    }

    const vaultRunBlocks = vault.state.initial.vaultRunBlocks;
    if (currentBlock - startBlock < vaultRunBlocks) {
        return VaultStage.running;
    }

    const auctionStartBlock = vault.state.global.auctionStartBlock;
    const auctionLeftToRaise = vault.state.global.auctionLeftToRaise;
    if (currentBlock - auctionStartBlock < AUCTION_BLOCKS && auctionLeftToRaise > 0) {
        return VaultStage.auction;
    }

    return VaultStage.withdraw;
};

export const VaultCard = ({ vault }: { vault: Contract<'vault'> }) => {
    if (!vault.state) {
        return <></>;
    }

    const dex: DexProvider = 'T2';
    const asset1_id = vault.state.initial.aToken;
    const asset2_id = vault.state.initial.bToken;
    const asset1 = useStoreMap($pricedAssets, (as) => as.get(asset1_id, null));
    const asset2 = useStoreMap($pricedAssets, (as) => as.get(asset2_id, null));
    // const asset1 = await fetchAsset(asset1_id);
    // const asset2 = await fetchAsset(asset2_id);
    const isVerified = vault.info.metadata.verified ?? false;

    const meanRoundDuration = useUnit($meanRoundDuration);
    const currentBlock = useUnit($networkTime);
    const vaultStage = getVaultStage(currentBlock, vault);

    const initialABalance = Number(vault.state.initial.initialABalance);
    const totalALiqProvided = Number(vault.state.global.totalALiqProvided);

    const vaultDurationText = getVaultDurationText(vaultStage, meanRoundDuration, currentBlock, vault.state.initial);

    const [expectedAPR, setExpectedAPR] = useState<number>(0);
    const poolAddress = vault.state.initial.liquidityPoolAddr;

    const [DepositModal, openDepositModal, closeDepositModal] = useModal('root', { preventScroll: true });
    const [AuctionModal, openAuctionModal, closeAuctionModal] = useModal('root', { preventScroll: true });

    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        getTinymanPools(1, poolAddress).then((pools) => {
            pools[0] && setExpectedAPR(pools[0].annual_percentage_rate * 2);
        });
    }, [poolAddress]);

    if (!asset1 || !asset2) {
        return <></>;
    }

    const vaultName = `${asset1.unitName}/${asset2.unitName} on ${getDexName(dex)}`;
    const capacityLeft =
        (Number(vault.state.initial.initialABalance - vault.state.global.totalALiqProvided) * asset1.price) /
        asset2.price;

    return (
        <VaultCardContainer>
            <VaultHeader asset1={asset1} asset2={asset2} dex={dex} isVerified={isVerified} />
            {vaultStage === VaultStage.subscription ? (
                <ProgressBar
                    title="TVL"
                    value={`${numberRound(totalALiqProvided)} / ${numberRound(initialABalance)} ${asset1.unitName}`}
                    progress={totalALiqProvided / initialABalance}
                />
            ) : (
                <VaultResults vaultStage={vaultStage} APY={expectedAPR} IL={0} />
            )}
            <VaultInfo
                vaultStage={vaultStage}
                vault={vault}
                asset1={asset1}
                asset2={asset2}
                expectedAPR={expectedAPR}
            />
            <VaultButton
                vaultStage={vaultStage}
                vault={vault}
                asset2_name={asset2.name}
                buttonSubtitle={vaultDurationText}
                onClick={() => {
                    if (vaultStage === VaultStage.subscription) {
                        openDepositModal();
                    }
                    if (vaultStage === VaultStage.auction) {
                        openAuctionModal();
                    }
                    if (vaultStage === VaultStage.withdraw) {
                        setShowConfetti(true);
                    }
                }}
            />
            <DepositModal>
                <VaultTokenDeposit
                    vault={vault}
                    asset={asset2}
                    buttonSubtitle={vaultDurationText}
                    vaultName={vaultName}
                    expectedAPR={expectedAPR}
                    capacityLeft={capacityLeft}
                />
            </DepositModal>
            <AuctionModal>
                <VaultAuction vault={vault} asset1={asset1} asset2={asset2} />
            </AuctionModal>
            <Confetti
                showConfetti={showConfetti}
                onFinish={() => {
                    setShowConfetti(false);
                }}
            />
        </VaultCardContainer>
    );
};
