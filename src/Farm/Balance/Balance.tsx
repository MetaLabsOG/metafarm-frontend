import { useStore } from 'effector-react';
import { $poolAggregates } from '../store';
import { Amount } from './Amount';
import { BalanceList } from './styled';

export const Balance = () => {
    const aggregates = useStore($poolAggregates);
    return (
        <BalanceList>
            <Amount title="TVL" value={aggregates.tvl} />
            <Amount title="Total Stake" value={aggregates.totalUserStake} />
            <Amount title="Total Reward" value={aggregates.totalPendingReward} />
        </BalanceList>
    );
};
