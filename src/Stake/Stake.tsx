import { createComponent, useUnit } from 'effector-react';
import { ContractInfo, FarmType } from '../common/store';
import { Balance } from '../Farm/Balance';
import { PoolList } from '../Farm/PoolList';
import { BalanceContainer, FarmContainer } from '../Farm/styled';
import { InfoCards } from '../Farm/Farm';
import { initializeFarmContract } from '../Farm/store';
import { $sortedStakePoolsWithStats, initializeDistributionContract } from './store';
import { LoadingSpinner } from '../Components/LoadingSpinner';

export const Stake = createComponent($sortedStakePoolsWithStats, (_props, state) => {
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

    const isLoading = !state;

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
                {state && state.length === 0 ? (
                    <div style={{ color: '#999', textAlign: 'center', padding: '40px', fontSize: '16px' }}>
                        No active stake pools
                    </div>
                ) : (
                    <PoolList pools={state} poolType="stake" initEvent={initStakeOrDistr} />
                )}
            </LoadingSpinner>

            <InfoCards addFarmType="stake" />
        </FarmContainer>
    );
});
