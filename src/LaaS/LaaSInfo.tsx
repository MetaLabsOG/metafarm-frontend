import React from 'react';
import { useUnit } from 'effector-react';
import { $meanRoundDuration, Asset, Contract, Priced } from '../common/store';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { blocksToText } from '../Farm/PoolList/Pool/PoolInfo';
import { LaaSInfoContainer } from './styled';
import { LaaSStage, ROWS_BY_STAGE, RowType } from './LaaSCard';

export const LaaSInfo = ({
    laasStage,
    vault,
    asset1,
    asset2,
}: {
    laasStage: LaaSStage;
    vault: Contract<'laas'>;
    asset1: Priced<Asset>;
    asset2: Priced<Asset>;
}) => {
    if (!vault.state) {
        return <></>;
    }

    const expectedAPR = 9.8; // TODO trading fees * 2
    const capacityLeft =
        Number(vault.state.initial.initialABalance - vault.state.global.totalALiqProvided) * asset1.price;
    const TVL =
        Number(vault.state.global.totalALiqProvided) * asset1.price +
        Number(vault.state.global.totalBLiqProvided) * asset2.price;

    const meanRoundDuration = useUnit($meanRoundDuration);
    const vaultDuration = blocksToText(meanRoundDuration, vault.state.initial.vaultRunBlocks);
    const myRevenue = vault.state.global.totalBToWithdraw / vault.state.global.totalBLiqProvided; // TODO умножить на баланс сALGO, это когда закончился аукцион
    // const myRevenue = vault.state.global.totalBToWithdraw / vault.state.global.totalBLiqProvided; // TODO баланс сALGO / кол-во токенов в обороте

    return (
        <LaaSInfoContainer>
            {ROWS_BY_STAGE[laasStage][RowType.expectedARP] && (
                <InfoRow
                    title={'Expected APR'}
                    value={`${expectedAPR}%`}
                    style={{ color: 'white', fontWeight: '600' }}
                />
            )}
            {ROWS_BY_STAGE[laasStage][RowType.capacityLeft] && (
                <InfoRow title={'Capacity left'} value={`${numberRound(capacityLeft)} ${asset2.unitName}`} />
            )}
            {ROWS_BY_STAGE[laasStage][RowType.TVL] && <InfoRow title={'TVL'} value={`$${numberRound(TVL)}`} />}
            {ROWS_BY_STAGE[laasStage][RowType.vaultDuration] && (
                <InfoRow title={'Vault duration'} value={vaultDuration} />
            )}
            {ROWS_BY_STAGE[laasStage][RowType.myStake] && <InfoRow title={'My stake'} value={`1000 cALGO`} />}
            {ROWS_BY_STAGE[laasStage][RowType.myRevenue] && <InfoRow title={'My revenue'} value={`40 ALGO (+4%)`} />}
            {ROWS_BY_STAGE[laasStage][RowType.expectedRevenue] && (
                <InfoRow title={'Expected revenue'} value={`23 ALGO`} />
            )}
            {ROWS_BY_STAGE[laasStage][RowType.withdrawIn] && <InfoRow title={'Withdraw in'} value={`at most 2 days`} />}
            {ROWS_BY_STAGE[laasStage][RowType.ILCovered] && (
                <InfoRow title={'IL covered'} value={`20,000 / 20,000 ALGO`} />
            )}
            {ROWS_BY_STAGE[laasStage][RowType.claimAmount] && (
                <InfoRow title={'Claim amount'} value={`1200 ALGO (+20%)`} />
            )}
        </LaaSInfoContainer>
    );
};
