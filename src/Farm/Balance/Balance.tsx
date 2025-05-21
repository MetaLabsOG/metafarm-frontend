import { Store } from 'effector';
import { useUnit } from 'effector-react';
import { FarmType } from '../../common/store';
import { $distributionPoolAggregates } from '../../Stake/store';
import { $farmPoolAggregates, PoolAggregates } from '../store';
import { Amount } from './Amount';
import { BalanceList } from './styled';

const kindToAggregates: Record<FarmType, Store<PoolAggregates>> = {
    farm: $farmPoolAggregates,
    distribution: $distributionPoolAggregates,
};

type BalanceProps = {
    kind: FarmType;
};

export function Balance({ kind }: BalanceProps) {
    const aggregates = useUnit(kindToAggregates[kind]);
    const tvlName = (kind === 'farm' ? 'Farm' : 'Stake') + ' TVL';
    return (
        <BalanceList>
            <Amount title={tvlName} value={aggregates.tvl} />
            <Amount title="My Stake" value={aggregates.totalUserStake} />
            <Amount title="My Earn" value={aggregates.totalPendingReward} />
        </BalanceList>
    );
}
