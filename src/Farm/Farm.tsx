import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { FarmContainer } from './styled';
import { $sortedFarmPools } from './store';

export const Farm = () => {
    return (
        <FarmContainer>
            <Balance />
            <PoolList type="farm" pools={$sortedFarmPools} />
        </FarmContainer>
    );
};
