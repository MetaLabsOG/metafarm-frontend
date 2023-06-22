import { createComponent, useUnit } from 'effector-react';
import { SliseAd } from '@slise/embed-react';
import { FarmType } from '../common/store';
import { InfoCard } from '../Components/InfoCard/InfoCard';
// import governance from '../imgs/folks.jpeg';
import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { $sortedPoolsWithStats, initializeFarmContract } from './store';
import { BalanceContainer, FarmContainer, GovImg } from './styled';
// import { getTokenLink } from './PoolList/Pool/utils';

export const InfoCards = ({ addFarmType }: { addFarmType: string }) => {
    if (window.innerWidth <= 1120) {
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

export const Farm = createComponent($sortedPoolsWithStats, (_props, state) => (
    <FarmContainer>
        <BalanceContainer>
            <Balance kind={'farm' as FarmType} />
            {/*<a target="_blank" href="https://app.folks.finance/algo-liquid-governance?ref=cometa" rel="noreferrer">*/}
            {/*    <GovImg alt="Governance" src={governance} />*/}
            {/*</a>*/}
            <SliseAd
                style={{ minWidth: '270px', width: '270px', height: '90px' }}
                slotId="banner"
                pub="pub-2"
                format="270x90"
            />
        </BalanceContainer>
        <PoolList pools={state} poolType="farm" initEvent={useUnit(initializeFarmContract)} />
        <InfoCards addFarmType="farm" />
    </FarmContainer>
));
