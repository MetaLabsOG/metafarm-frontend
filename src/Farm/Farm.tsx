import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { FarmContainer } from './styled';
import { $sortedFarmPools, setPoolInfos } from './store';

export const Farm = () => {
    return (
        <FarmContainer>
            <Balance />
            <PoolList type="farm" pools={$sortedFarmPools} setPoolInfos={setPoolInfos} />
        </FarmContainer>
    );
};
