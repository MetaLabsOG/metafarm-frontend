import { createComponent } from 'effector-react';
import { FarmType } from '../common/store';
import { InfoCard } from '../Components/InfoCard/InfoCard';
import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { $sortedPoolsWithStats } from './store';
import { FarmContainer } from './styled';

export const InfoCards = () => {
    if (window.innerWidth <= 1120) {
        return null;
    }

    return (
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <InfoCard
                title="How to create a farm?"
                subtitle="Launch your own farm in a few clicks."
                linkText="Coming soon"
                link=""
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

export const Farm = createComponent($sortedPoolsWithStats, (_props, state) => (
    <FarmContainer>
        <Balance kind={'farm' as FarmType} />
        {/* <PoolCreateModal /> */}
        <PoolList pools={state} />
        <InfoCards />
    </FarmContainer>
));
