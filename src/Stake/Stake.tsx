import { PoolList } from '../Farm/PoolList';
import { FarmContainer } from '../Farm/styled';
import { $sortedStakingPools, setStakingPoolInfos } from './store';

export const Stake = () => {
    return (
        <FarmContainer>
            <h1>Staking Pools</h1>
            <PoolList type="distribution" pools={$sortedStakingPools} setPoolInfos={setStakingPoolInfos} />
        </FarmContainer>
    );
};
