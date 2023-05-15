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

    return (
        <FarmContainer>
            <BalanceContainer>
                <Balance kind={'distribution' as FarmType} />
                {/*<a target="_blank" href="https://app.folks.finance/algo-liquid-governance?ref=cometa" rel="noreferrer">*/}
                {/*    <GovImg alt="Governance" src={governance} />*/}
                {/*</a>*/}
                <SliseAd
                    style={{ minWidth: '363px', width: '363px', height: '91px' }}
                    slotId="2"
                    pub="pub-2"
                    format="667x167"
                />
            </BalanceContainer>
            <PoolList pools={state} poolType="stake" initEvent={initStakeOrDistr} />
            <InfoCards addFarmType="stake" />
        </FarmContainer>
    );
});
