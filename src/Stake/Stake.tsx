import { createComponent, useUnit } from 'effector-react';
// import { SliseAd } from '@slise/embed-react'; // Temporarily disabled due to loading errors
import { ContractInfo, FarmType } from '../common/store';
import { Balance } from '../Farm/Balance';
import { PoolList } from '../Farm/PoolList';
import { BalanceContainer, FarmContainer, GovImg } from '../Farm/styled';
import { InfoCards } from '../Farm/Farm';
import { initializeFarmContract } from '../Farm/store';
import governance from '../imgs/folks.jpeg';
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

    const renderSliseAd = () => (
        // Temporarily disabled Slise ad due to loading errors
        // <SliseAd
        //     style={{ minWidth: '270px', width: '270px', height: '90px' }}
        //     slotId="banner"
        //     pub="pub-2"
        //     format="270x90"
        // />
        <div style={{ minWidth: '270px', width: '270px', height: '90px' }} /> // Placeholder
    );

    const isLoading = !state || state.length === 0;

    return (
        <FarmContainer>
            {window.innerWidth <= 700 && renderSliseAd()}
            <BalanceContainer>
                <Balance kind={'distribution' as FarmType} />
                {window.innerWidth > 700 && renderSliseAd()}
            </BalanceContainer>

            <LoadingSpinner
                isLoading={isLoading}
                text="Loading stake pools..."
                size="medium"
            >
                <PoolList pools={state} poolType="stake" initEvent={initStakeOrDistr} />
            </LoadingSpinner>

            <InfoCards addFarmType="stake" />
        </FarmContainer>
    );
});
