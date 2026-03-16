import { useUnit } from 'effector-react';
import { ContractInfo, FarmType } from '../common/store';
import { Balance } from '../Farm/Balance';
import { PoolList } from '../Farm/PoolList';
import { BalanceContainer, FarmContainer } from '../Farm/styled';
import { InfoCards } from '../Farm/Farm';
import { $farmPoolsLoaded, initializeFarmContract } from '../Farm/store';
import { $sortedStakePoolsWithStats, $distributionPoolsLoaded, initializeDistributionContract } from './store';
import { LoadingSpinner } from '../Components/LoadingSpinner';

export function Stake() {
    const state = useUnit($sortedStakePoolsWithStats);
    const farmLoaded = useUnit($farmPoolsLoaded);
    const distrLoaded = useUnit($distributionPoolsLoaded);
    const initStake = useUnit(initializeFarmContract);
    const initDistr = useUnit(initializeDistributionContract);
    const initStakeOrDistr = (info: ContractInfo<FarmType>) => {
        if (info.type === 'farm') {
            initStake(info);
        } else if (info.type === 'distribution') {
            initDistr(info);
        } else {
            console.error(`Unsupported pool type: ${info.type}`);
        }
    };

    const isLoading = !farmLoaded && !distrLoaded;

    return (
        <FarmContainer>
            <BalanceContainer>
                <Balance kind={'distribution' as FarmType} />
            </BalanceContainer>

            <LoadingSpinner
                isLoading={isLoading}
                text="Loading stake pools..."
                size="medium"
            >
                {(farmLoaded || distrLoaded) && state.length === 0 ? (
                    <div style={{ color: 'var(--newnewGray)', textAlign: 'center', padding: '40px', fontSize: '16px' }}>
                        No active stake pools
                    </div>
                ) : (
                    <PoolList pools={state} poolType="stake" initEvent={initStakeOrDistr} />
                )}
            </LoadingSpinner>

            <InfoCards addFarmType="stake" />
        </FarmContainer>
    );
}
