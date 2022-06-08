import { useEffect, useState } from 'react';
import { Status } from '../../../Status';
import { $networkTime, queryTimeUpdate, Contract, FarmType, AllDefined, ContractState } from '../../../common/store';
import { useStore, useStoreMap } from 'effector-react';
import { PoolState } from './types';
import { PoolInfo } from './PoolInfo';
import { PoolActions } from './PoolActions';
import { PoolContainer, PoolInfoContainer } from './styled';
import { $farmLPTokens, $farmRewardTokens } from '../../store';
import { $stakingTokens } from '../../../Stake/store';

export const Pool = ({ type, contract }: { type: FarmType; contract: Contract<FarmType> }) => {
    const currentBlock = useStore($networkTime);
    const lpTokenInfo = useStoreMap($farmLPTokens, (tokens) => tokens.get(contract.id, null));
    const stakingTokenInfo = useStoreMap($stakingTokens, (tokens) => tokens.get(contract.id, null));
    const rewardTokenInfo =
        useStoreMap($farmRewardTokens, (tokens) => tokens.get(contract.id, null)) ?? stakingTokenInfo;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(queryTimeUpdate, [contract]);

    const is_info_loaded = rewardTokenInfo && ((type === 'farm' && lpTokenInfo) || type === 'distribution');
    if (currentBlock === 0 || !contract.state || !is_info_loaded) {
        console.log('WHY LOADING?', type, currentBlock, contract.state, lpTokenInfo, rewardTokenInfo, stakingTokenInfo);
        return <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />;
    }

    const initial = contract.state.initial;
    const poolState =
        currentBlock < initial.beginBlock
            ? PoolState.Upcoming
            : currentBlock > initial.endBlock
            ? PoolState.Finished
            : PoolState.Running;

    if (poolState === PoolState.Running || poolState === PoolState.Upcoming || poolState === PoolState.Finished) {
        return (
            <PoolContainer>
                <PoolInfoContainer onClick={() => setIsOpen(!isOpen && contract.ctc)}>
                    <PoolInfo
                        isOpen={isOpen}
                        contractState={contract.state}
                        poolState={poolState}
                        lpTokenInfo={lpTokenInfo}
                        rewardTokenInfo={rewardTokenInfo}
                        currentBlock={currentBlock}
                    />
                </PoolInfoContainer>
                {contract.ctc !== null && contract.state.local && isOpen && (
                    <PoolActions
                        poolState={poolState}
                        ctc={contract.ctc}
                        contractState={contract.state as AllDefined<ContractState<'farm'>>}
                        lpTokenInfo={lpTokenInfo}
                        rewardTokenInfo={rewardTokenInfo}
                    />
                )}
            </PoolContainer>
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />;
};
