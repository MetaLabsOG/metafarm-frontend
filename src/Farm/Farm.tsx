import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { FarmContainer } from './styled';
import { $sortedFarmPools } from './store';
import { createComponent } from 'effector-react';
import { FarmType } from '../common/store';

export const Farm = createComponent($sortedFarmPools, (_props, state) => (
    <FarmContainer>
        <Balance kind={'farm' as FarmType} />
        {/*<PoolCreateModal />*/}
        <PoolList type="farm" pools={state} />
    </FarmContainer>
));
