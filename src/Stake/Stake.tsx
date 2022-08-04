import { createComponent } from 'effector-react';
import { PoolList } from '../Farm/PoolList';
import { FarmContainer } from '../Farm/styled';
import { $sortedStakingPools } from './store';

export const Stake = createComponent($sortedStakingPools, (_props, state) => (
    <FarmContainer>
        <h1 style={{ fontFamily: 'Montserrat' }}>Staking Pools</h1>
        <PoolList type="farm" pools={state} />
    </FarmContainer>
));
