import { createComponent, useUnit } from 'effector-react';
import { ContractInfo, FarmType } from '../common/store';
import { Balance } from '../Farm/Balance';
import { PoolList } from '../Farm/PoolList';
import { FarmContainer } from '../Farm/styled';
import { InfoCards } from '../Farm/Farm';
import { initializeFarmContract } from '../Farm/store';
import { $sortedStakePoolsWithStats, initializeDistributionContract } from './store';

export const Stake = createComponent($sortedStakePoolsWithStats, (_props, state) => {
    const initStake = useUnit(initializeFarmContract);
    const initDistr = useUnit(initializeDistributionContract);
    const initStakeOrDistr = (info: ContractInfo<FarmType>) => {
        if (info.type === 'farm') {
            initStake(info);
        } else if (info.type === 'distribution') {
            initDistr(info);
        } else {
            throw new Error(`Unsupported pool type type ${info.type}`);
        }
    };

    return (
        <FarmContainer>
            <Balance kind={'distribution' as FarmType} />
            <PoolList pools={state} poolType="stake" initEvent={initStakeOrDistr} />
            <InfoCards addFarmType="stake" />
        </FarmContainer>
    );
});
