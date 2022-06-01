import { PoolList } from '../Farm/PoolList';
import { FarmContainer } from '../Farm/styled';
import { InfoHeader } from '../common/styled';
import { useStore } from 'effector-react';
import { $account } from '../common/store';
import { $sortedStakingPools, setStakingPoolInfos, $stakeLPTokens, $stakeRewardTokens } from './store';

export const Stake = () => {
    const account = useStore($account);
    return (
        <FarmContainer>
            {account ? (
                <>
                    <h1>Staking Pools</h1>
                    <PoolList
                        type="distribution"
                        pools={$sortedStakingPools}
                        setPoolInfos={setStakingPoolInfos}
                        LPTokens={$stakeLPTokens}
                        RewardTokens={$stakeRewardTokens}
                    />
                </>
            ) : (
                <InfoHeader>PLEASE, CONNECT THE WALLET.</InfoHeader>
            )}
        </FarmContainer>
    );
};
