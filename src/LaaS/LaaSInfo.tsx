import React from 'react';
import { useUnit } from 'effector-react';
import { ApiPool } from '@pactfi/pactsdk';
import { $balances, $meanRoundDuration, Asset, ContractState, fetchAsset, Priced } from '../common/store';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { blocksToText } from '../Farm/PoolList/Pool/PoolInfo';
import { fromSmallestUnits } from '../common/lib';
import { getCapacityLeft, getPoolAPR, LaaSStage, ROWS_BY_STAGE } from './LaaSCard';
import { LaaSInfoContainer } from './styled';

export const LaaSInfo = ({
    laasStage,
    vaultState,
    asset1,
    asset2,
    poolInfo,
}: {
    laasStage: LaaSStage;
    vaultState: ContractState<'laas'>;
    asset1: Priced<Asset>;
    asset2: Priced<Asset>;
    poolInfo: ApiPool | null;
}) => {
    const balances = useUnit($balances);
    const expectedAPR = getPoolAPR(poolInfo);
    const capacityLeft = getCapacityLeft(asset1, asset2, vaultState);
    const TVL =
        Number(vaultState.global.totalALiqProvided) * asset1.price +
        Number(vaultState.global.totalBLiqProvided) * asset2.price;

    const slpTokenId = vaultState.initial.slpToken;
    const myStake = fromSmallestUnits({ decimals: 6 }, balances[slpTokenId]); // TODO check
    const meanRoundDuration = useUnit($meanRoundDuration);
    const vaultDuration = blocksToText(meanRoundDuration, vaultState.initial.vaultRunBlocks);
    // const myRevenue = vaultState.global.totalBToWithdraw / vaultState.global.totalBLiqProvided; // TODO умножить на баланс сALGO, это когда закончился аукцион
    // const myRevenue = vaultState.global.totalBToWithdraw / vaultState.global.totalBLiqProvided; // TODO баланс сALGO / кол-во токенов в обороте

    return (
        <LaaSInfoContainer>
            {ROWS_BY_STAGE[laasStage].expectedARP && (
                <InfoRow
                    title="Expected APR"
                    value={`${expectedAPR * 100}%`}
                    style={{ color: 'white', fontWeight: '600' }}
                />
            )}
            {ROWS_BY_STAGE[laasStage].capacityLeft && (
                <InfoRow title="Capacity left" value={`${numberRound(capacityLeft)} ${asset2.unitName}`} />
            )}
            {ROWS_BY_STAGE[laasStage].TVL && <InfoRow title="TVL" value={`$${numberRound(TVL)}`} />}
            {ROWS_BY_STAGE[laasStage].vaultDuration && <InfoRow title="Vault duration" value={vaultDuration} />}
            {ROWS_BY_STAGE[laasStage].myStake && <InfoRow title="My stake" value={`${myStake} c${asset2.unitName}`} />}
            {ROWS_BY_STAGE[laasStage].myRevenue && <InfoRow title="My revenue" value="40 ALGO (+4%)" />}
            {ROWS_BY_STAGE[laasStage].expectedRevenue && <InfoRow title="Expected revenue" value="23 ALGO" />}
            {ROWS_BY_STAGE[laasStage].withdrawIn && <InfoRow title="Withdraw in" value="at most 2 days" />}
            {ROWS_BY_STAGE[laasStage].ILCovered && <InfoRow title="IL covered" value="20,000 / 20,000 ALGO" />}
            {ROWS_BY_STAGE[laasStage].claimAmount && <InfoRow title="Claim amount" value="1200 ALGO (+20%)" />}
        </LaaSInfoContainer>
    );
};
