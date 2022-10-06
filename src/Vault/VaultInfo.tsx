import React, { useEffect, useState } from 'react';
import { useUnit } from 'effector-react';
import { $balances, $meanRoundDuration, $networkTime, Asset, Contract, Priced } from '../common/store';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { blocksToText } from '../Farm/PoolList/Pool/PoolInfo';
import { getTinymanPools } from '../providers/apiProvider';
import { VaultInfoContainer } from './styled';
import { AUCTION_BLOCKS, VaultStage, ROWS_BY_STAGE, RowType } from './VaultCard';

const getAPRText = (initial: number, current: number) => {
    if (current === 0) {
        return '-';
    }
    const resultAPR = 1 - current / initial;
    const resultAPRPrefix = resultAPR > 0 ? '+' : '';
    return `${resultAPRPrefix}${resultAPR * 100}%`;
};

export const VaultInfo = ({
    vaultStage,
    vault,
    asset1,
    asset2,
    expectedAPR,
}: {
    vaultStage: VaultStage;
    vault: Contract<'vault'>;
    asset1: Priced<Asset>;
    asset2: Priced<Asset>;
    expectedAPR: number;
}) => {
    if (!vault.state) {
        return <></>;
    }

    const balances = useUnit($balances);
    const meanRoundDuration = useUnit($meanRoundDuration);
    const currentBlock = useUnit($networkTime);

    const capacityLeft =
        (Number(vault.state.initial.initialABalance - vault.state.global.totalALiqProvided) * asset1.price) /
        asset2.price;
    const TVL =
        Number(vault.state.global.totalALiqProvided) * asset1.price +
        Number(vault.state.global.totalBLiqProvided) * asset2.price;

    const vaultDuration = blocksToText(meanRoundDuration, vault.state.initial.vaultRunBlocks);
    const auctionStartBlock = vault.state.global.auctionStartBlock;
    const withdrawIn = blocksToText(meanRoundDuration, AUCTION_BLOCKS - (currentBlock - auctionStartBlock));

    const myStake = Number(balances[vault.state.initial.slpToken] ?? 0) / 10 ** asset2.decimals;
    const myRevenue = Number(vault.state.global.totalBToWithdraw / vault.state.global.totalBLiqProvided); // TODO баланс сALGO / кол-во токенов в обороте
    const claimAmount = Number(vault.state.global.totalBToWithdraw / vault.state.global.totalBLiqProvided) * myStake;

    const auctionToRaiseInitial = vault.state.global.auctionToRaiseInitial;
    const ILCovered = vault.state.global.auctionToRaiseInitial - vault.state.global.auctionLeftToRaise;

    return (
        <VaultInfoContainer>
            {ROWS_BY_STAGE[vaultStage][RowType.expectedARP] && (
                <InfoRow
                    title={'Expected APR'}
                    value={`${numberRound(expectedAPR * 100)}%`}
                    style={{ color: 'white', fontWeight: '600' }}
                />
            )}
            {ROWS_BY_STAGE[vaultStage][RowType.capacityLeft] && (
                <InfoRow title={'Capacity left'} value={`${numberRound(capacityLeft)} ${asset2.unitName}`} />
            )}
            {ROWS_BY_STAGE[vaultStage][RowType.TVL] && <InfoRow title={'TVL'} value={`$${numberRound(TVL)}`} />}
            {ROWS_BY_STAGE[vaultStage][RowType.vaultDuration] && (
                <InfoRow title={'Vault duration'} value={vaultDuration} />
            )}
            {ROWS_BY_STAGE[vaultStage][RowType.myStake] && (
                <InfoRow title={'My stake'} value={`${myStake} c${asset2.unitName}`} />
            )}
            {ROWS_BY_STAGE[vaultStage][RowType.myRevenue] && (
                <InfoRow
                    title={'My revenue'}
                    value={`${myRevenue} ${asset2.unitName} (${getAPRText(myStake, myStake + myRevenue)})`}
                />
            )}
            {ROWS_BY_STAGE[vaultStage][RowType.expectedRevenue] && (
                <InfoRow title={'Expected revenue'} value={`${myRevenue} ${asset2.unitName}`} />
            )}
            {ROWS_BY_STAGE[vaultStage][RowType.withdrawIn] && (
                <InfoRow title={'Withdraw in'} value={`at most ${withdrawIn}`} />
            )}
            {ROWS_BY_STAGE[vaultStage][RowType.ILCovered] && (
                <InfoRow
                    title={'IL covered'}
                    value={`${numberRound(ILCovered)} / ${numberRound(auctionToRaiseInitial)} ${asset1.unitName}`}
                />
            )}
            {ROWS_BY_STAGE[vaultStage][RowType.claimAmount] && (
                <InfoRow
                    title={'Claim amount'}
                    value={`${claimAmount} ${asset2.unitName} (${getAPRText(myStake, claimAmount)})`}
                />
            )}
        </VaultInfoContainer>
    );
};
