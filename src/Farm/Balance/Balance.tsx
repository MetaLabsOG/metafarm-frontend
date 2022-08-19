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
    return (
        <BalanceList>
            <Amount title="TVL" value={aggregates.tvl} />
            <Amount title="Total Stake" value={aggregates.totalUserStake} />
            <Amount title="Total Reward" value={aggregates.totalPendingReward} />
        </BalanceList>
    );
}
