import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { FarmContainer } from './styled';
import { $sortedPools, setPoolInfos } from './store';

export const Farm = () => {
    return (
        <FarmContainer>
            <Balance />
            <PoolList type="farm" pools={$sortedPools} setPoolInfos={setPoolInfos} />
        </FarmContainer>
    );
};
