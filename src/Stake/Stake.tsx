import { useUnit } from 'effector-react';
import { ContractInfo, FarmType } from '../common/store';
import { Balance } from '../Farm/Balance';
import { PoolList } from '../Farm/PoolList';
import { BalanceContainer, FarmContainer } from '../Farm/styled';
import { InfoCards } from '../Farm/Farm';
import { $farmPoolsLoaded, initializeFarmContract } from '../Farm/store';
import { $sortedStakePoolsWithStats, $distributionPoolsLoaded, $distributionPoolsError, initializeDistributionContract } from './store';
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

    const distrError = useUnit($distributionPoolsError);
    const hasError = distrError && !farmLoaded && !distrLoaded;
    const poolsReady = farmLoaded || distrLoaded;
    const isLoading = !poolsReady && !hasError;

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
                {hasError ? (
                    <div style={{ color: 'var(--newnewGray)', textAlign: 'center', padding: '40px', fontSize: '16px' }}>
                        Failed to load pools. Please refresh the page.
                    </div>
                ) : (farmLoaded || distrLoaded) && state.length === 0 ? (
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
