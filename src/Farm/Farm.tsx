import { createComponent } from 'effector-react';
import { FarmType } from '../common/store';
import { InfoCard } from '../Components/InfoCard/InfoCard';
import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { FarmContainer } from './styled';
import { $sortedFarmPools } from './store';

export const InfoCards = () => {
    if (window.innerWidth <= 1120) {
        return <></>;
    }

    return (
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <InfoCard
                title="How to create farm?"
                subtitle="Launch your own farm in a few click."
                link="https://metalabs.gitbook.io/cometa/"
            />
            <InfoCard
                title="How to use Cometa?"
                subtitle="Read the guide about lock pools, compound and zap features."
                link="https://metalabs.gitbook.io/cometa/"
            />
        </div>
    );
};

export const Farm = createComponent($sortedFarmPools, (_props, state) => (
    <FarmContainer>
        <Balance kind={'farm' as FarmType} />
        {/* <PoolCreateModal /> */}
        <PoolList type="farm" pools={state} />
        <InfoCards />
    </FarmContainer>
));
