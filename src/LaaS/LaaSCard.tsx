import { useStoreMap, useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { useEffect, useState } from 'react';
import { $meanRoundDuration, $networkTime, $pricedAssets, Contract } from '../common/store';
import { DexProvider } from '../dexes';
import { ProgressBar } from '../Components/ProgressBar/ProgressBar';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { getTinymanPools } from '../providers/apiProvider';
import { getDexName } from '../Farm/utils';
import { LaaSHeader } from './LaaSHeader';
import { LaaSInfo } from './LaaSInfo';
import { LaaSResults } from './LaaSResults';
import { getVaultDurationText, LaaSButton } from './LaaSButton';
import { LaaSCardContainer } from './styled';
import { LaaSTokenDeposit } from './LaaSTokenDeposit';
import { LaaSAuction } from './LaaSAuction';

export enum LaaSStage {
    subscription,
    running,
    auction,
    withdraw,
    unknown,
}

export const BUTTON_TITLE: Record<LaaSStage, string> = {
    [LaaSStage.subscription]: 'subscription',
    [LaaSStage.running]: 'running',
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
    //Record<LaaSStage, Record<RowType, boolean>> = {
    [LaaSStage.subscription]: {
        [RowType.expectedARP]: true,
        [RowType.capacityLeft]: true,
        [RowType.vaultDuration]: true,
        [RowType.myStake]: true,
    },
    [LaaSStage.running]: {
        [RowType.TVL]: true,
        [RowType.myStake]: true,
        [RowType.myRevenue]: true,
    },
    [LaaSStage.auction]: {
        [RowType.TVL]: true,
        [RowType.myStake]: true,
        [RowType.expectedRevenue]: true,
        [RowType.withdrawIn]: true,
    },
    [LaaSStage.withdraw]: {
        [RowType.TVL]: true,
        [RowType.ILCovered]: true,
        [RowType.claimAmount]: true,
    },
    [LaaSStage.unknown]: {},
};

export const AUCTION_BLOCKS = 60 * 60 * 24;

const getLaaSStage = (currentBlock: number, vault: Contract<'laas'>): LaaSStage => {
    if (!vault.state) {
        return LaaSStage.unknown;
    }

    const startBlock = vault.state.initial.startBlock;
    const subscriptionBlocks = vault.state.initial.subscriptionBlocks;
    const isFullySubscribed = vault.state.global.isFullySubscribed;

    if (currentBlock - startBlock < subscriptionBlocks && !isFullySubscribed) {
        return LaaSStage.subscription;
    }

    const vaultRunBlocks = vault.state.initial.vaultRunBlocks;
    if (currentBlock - startBlock < vaultRunBlocks) {
        return LaaSStage.running;
    }

    const auctionStartBlock = vault.state.global.auctionStartBlock;
    const auctionLeftToRaise = vault.state.global.auctionLeftToRaise;
    if (currentBlock - auctionStartBlock < AUCTION_BLOCKS && auctionLeftToRaise > 0) {
        return LaaSStage.auction;
    }

    return LaaSStage.withdraw;
};

export const LaaSCard = ({ vault }: { vault: Contract<'laas'> }) => {
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
    const laasStage = getLaaSStage(currentBlock, vault);

    const initialABalance = Number(vault.state.initial.initialABalance);
    const totalALiqProvided = Number(vault.state.global.totalALiqProvided);

    const vaultDurationText = getVaultDurationText(laasStage, meanRoundDuration, currentBlock, vault.state.initial);

    const [expectedAPR, setExpectedAPR] = useState<number>(0);
    const poolAddress = vault.state.initial.liquidityPoolAddr;

    const [DepositModal, openDepositModal, closeDepositModal] = useModal('root', { preventScroll: true });
    const [AuctionModal, openAuctionModal, closeAuctionModal] = useModal('root', { preventScroll: true });

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
        <LaaSCardContainer>
            <LaaSHeader asset1={asset1} asset2={asset2} dex={dex} isVerified={isVerified} />
            {laasStage === LaaSStage.subscription ? (
                <ProgressBar
                    title="TVL"
                    value={`${numberRound(totalALiqProvided)} / ${numberRound(initialABalance)} ${asset1.unitName}`}
                    progress={totalALiqProvided / initialABalance}
                />
            ) : (
                <LaaSResults laasStage={laasStage} APY={expectedAPR} IL={0} />
            )}
            <LaaSInfo laasStage={laasStage} vault={vault} asset1={asset1} asset2={asset2} expectedAPR={expectedAPR} />
            <LaaSButton
                laasStage={laasStage}
                vault={vault}
                asset2_name={asset2.name}
                buttonSubtitle={vaultDurationText}
                onClick={() => {
                    if (laasStage === LaaSStage.subscription) {
                        openDepositModal();
                    }
                    if (laasStage == LaaSStage.auction) {
                        openAuctionModal();
                    }
                }}
            />
            <DepositModal>
                <LaaSTokenDeposit
                    vault={vault}
                    asset={asset2}
                    buttonSubtitle={vaultDurationText}
                    vaultName={vaultName}
                    expectedAPR={expectedAPR}
                    capacityLeft={capacityLeft}
                />
            </DepositModal>
            <AuctionModal>
                <LaaSAuction vault={vault} asset1={asset1} asset2={asset2} />
            </AuctionModal>
        </LaaSCardContainer>
    );
};
