import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { FarmContainer } from './styled';
import { $sortedFarmPools } from './store';
import { PoolCreateModal } from './PoolCreateModal';

export const Farm = () => {
    return (
        <FarmContainer>
            <Balance />
            <PoolCreateModal />
            <PoolList type="farm" pools={$sortedFarmPools} />
        </FarmContainer>
    );
};
