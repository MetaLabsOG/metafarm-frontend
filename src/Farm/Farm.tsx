import { useUnit } from 'effector-react';
import { FarmType } from '../common/store';
import { InfoCard } from '../Components/InfoCard/InfoCard';
import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { $sortedPoolsWithStats, $farmPoolsLoaded, initializeFarmContract } from './store';
import { BalanceContainer, FarmContainer } from './styled';
import { LoadingSpinner } from '../Components/LoadingSpinner';
import { useWindowSize } from '../hooks';

export const InfoCards = ({ addFarmType }: { addFarmType: string }) => {
    const { isDesktop } = useWindowSize();

    if (!isDesktop) {
        return null;
    }

    return (
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <InfoCard
                title="How to create a pool?"
                subtitle={`Launch your own ${addFarmType} pool in a few clicks.`}
                linkText={`Launch ${addFarmType}`}
                link={`/add${addFarmType}`}
            />
            <InfoCard
                title="How to use Cometa?"
                subtitle="Read the guide to learn about locked pools, compounding, and ZAP."
                linkText="Check the guide"
                link="https://metalabs.gitbook.io/cometa/"
            />
        </div>
    );
};

export function Farm() {
    const state = useUnit($sortedPoolsWithStats);
    const poolsLoaded = useUnit($farmPoolsLoaded);
    const initEvent = useUnit(initializeFarmContract);
    const isLoading = !poolsLoaded;

    return (
        <FarmContainer>
            <BalanceContainer>
                <Balance kind={'farm' as FarmType} />
            </BalanceContainer>

            <LoadingSpinner
                isLoading={isLoading}
                text="Loading farm pools..."
                size="medium"
            >
                {poolsLoaded && state.length === 0 ? (
                    <div style={{ color: 'var(--newnewGray)', textAlign: 'center', padding: '40px', fontSize: '16px' }}>
                        No active farms
                    </div>
                ) : (
                    <PoolList pools={state} poolType="farm" initEvent={initEvent} />
                )}
            </LoadingSpinner>

            <InfoCards addFarmType="farm" />
        </FarmContainer>
    );
}
