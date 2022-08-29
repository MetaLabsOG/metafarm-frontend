import { createComponent } from 'effector-react';
import { FarmType } from '../common/store';
import { Balance } from '../Farm/Balance';
import { PoolList } from '../Farm/PoolList';
import { FarmContainer } from '../Farm/styled';
import { InfoCards } from '../Farm/Farm';
import { $stakePoolsWithStats } from './store';

export const Stake = createComponent($stakePoolsWithStats, (_props, state) => (
    <FarmContainer>
        <Balance kind={'distribution' as FarmType} />
        <PoolList pools={state} />
        <InfoCards />
    </FarmContainer>
));
