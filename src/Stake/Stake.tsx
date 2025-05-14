import { createComponent, useUnit } from 'effector-react';
import { SliseAd } from '@slise/embed-react';
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
            throw new Error(`Unsupported pool type type ${info.type}`);
        }
    };

    const renderSliseAd = () => (
        <SliseAd
            style={{ minWidth: '270px', width: '270px', height: '90px' }}
            slotId="banner"
            pub="pub-2"
            format="270x90"
        />
    );

    const isLoading = !state || state.length === 0;

    return (
        <FarmContainer>
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
            {window.innerWidth <= 700 && renderSliseAd()}
        </FarmContainer>
    );
});
