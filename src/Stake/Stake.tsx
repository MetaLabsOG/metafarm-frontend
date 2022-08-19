import { createComponent } from 'effector-react';
import { FarmType } from '../common/store';
import { Balance } from '../Farm/Balance';
import { PoolList } from '../Farm/PoolList';
import { FarmContainer } from '../Farm/styled';
import { $sortedStakingPools } from './store';

export const Stake = createComponent($sortedStakingPools, (_props, state) => (
    <FarmContainer>
        <Balance kind={'distribution' as FarmType} />
        <PoolList type="distribution" pools={state} />
    </FarmContainer>
));
