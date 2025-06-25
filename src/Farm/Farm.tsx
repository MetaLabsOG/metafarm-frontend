import { createComponent, useUnit } from 'effector-react';
// import { SliseAd } from '@slise/embed-react'; // Temporarily disabled due to loading errors
import { FarmType } from '../common/store';
import { InfoCard } from '../Components/InfoCard/InfoCard';
import governance from '../imgs/folks.jpeg';
import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { $sortedPoolsWithStats, initializeFarmContract } from './store';
import { BalanceContainer, FarmContainer, GovImg } from './styled';
import { LoadingSpinner } from '../Components/LoadingSpinner';

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

export const renderSliseAd = () => (
    // Temporarily disabled Slise ad due to loading errors
    // <SliseAd
    //     style={{ minWidth: '270px', width: '270px', height: '90px' }}
    //     slotId="banner"
    //     pub="pub-2"
    //     format="270x90"
    // />
    <div style={{ minWidth: '270px', width: '270px', height: '90px' }} /> // Placeholder
);

export const renderGovPromo = () => (
    <a target="_blank" href="https://app.folks.finance/algo-liquid-governance?ref=cometa" rel="noreferrer">
        <GovImg alt="Governance" src={governance} />
    </a>
);

function flipCoin(): boolean {
    const randomNumber = Math.random();
    return randomNumber < 0.5;
}

const showSliseAd = flipCoin();

export const renderRandomAd = (): JSX.Element => {
    if (showSliseAd) {
        return renderSliseAd();
    } else {
        return renderGovPromo();
    }
};

export const Farm = createComponent($sortedPoolsWithStats, (_props, state) => {
    const isLoading = !state || state.length === 0;

    return (
        <FarmContainer>
            {window.innerWidth <= 700 && renderSliseAd()}
            <BalanceContainer>
                <Balance kind={'farm' as FarmType} />
                {window.innerWidth > 700 && renderSliseAd()}
            </BalanceContainer>

            <LoadingSpinner
                isLoading={isLoading}
                text="Loading farm pools..."
                size="medium"
            >
                <PoolList pools={state} poolType="farm" initEvent={useUnit(initializeFarmContract)} />
            </LoadingSpinner>

            <InfoCards addFarmType="farm" />
        </FarmContainer>
    );
});
