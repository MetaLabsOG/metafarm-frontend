import { useEffect, useState } from 'react';
import { Status } from '../../../Status';
import {
    $networkTime,
    queryTimeUpdate,
    Contract,
    FarmType,
    AllDefined,
    ContractState,
    Amount,
    Time,
    hasLocalState,
} from '../../../common/store';
import { useStore, useStoreMap } from 'effector-react';
import { PoolState } from './types';
import { PoolInfo } from './PoolInfo';
import { PoolActions } from './PoolActions';
import { PoolContainer, PoolLoadingAnimation } from './styled';
import { $farmLPTokens, $farmRewardTokens } from '../../store';
import { $stakingTokens } from '../../../Stake/store';
import logo from '../../../imgs/logo.png';
import { min } from 'ramda';

const BIG_NUM = BigInt('1000000000000000000');

const recalculatedReward = (contractState: AllDefined<ContractState<FarmType>>, currentBlock: Time): Amount => {
    const { endBlock, rewardPerBlock } = contractState.initial;
    const { totalStaked, lastUpdateBlock, rewardPerTokenStored } = contractState.global;
    const { staked, reward, rewardPerTokenPaid } = contractState.local;

    if (lastUpdateBlock >= currentBlock || totalStaked === BigInt(0) || staked === BigInt(0)) {
        return reward;
    }

    const lastBlockWithRewards = min(currentBlock, endBlock);
    const rewardBlocksPassed = lastBlockWithRewards - lastUpdateBlock;
    const rewardPerTokenStoredNew =
        rewardPerTokenStored + (BigInt(rewardBlocksPassed) * rewardPerBlock * BIG_NUM) / totalStaked;

    const rewardToPayNow = (staked * (rewardPerTokenStoredNew - rewardPerTokenPaid)) / BIG_NUM;
    return reward + rewardToPayNow;
};

const projectState = (contractState: ContractState<FarmType>, currentBlock: Time): ContractState<FarmType> => {
    if (!hasLocalState(contractState)) {
        return contractState;
    }

    const projectedReward = recalculatedReward(contractState, currentBlock);
    return { ...contractState, local: { ...contractState.local, reward: projectedReward } };
};

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
        // console.log('WHY LOADING?', type, currentBlock, contract.state, lpTokenInfo, rewardTokenInfo, stakingTokenInfo);
        return (
            <PoolContainer>
                <PoolLoadingAnimation src={logo} style={{ opacity: '0.5' }} width="45px" height="45px" />
            </PoolContainer>
        );
    }

    const initial = contract.state.initial;
    const poolState =
        currentBlock < initial.beginBlock
            ? PoolState.Upcoming
            : currentBlock > initial.endBlock
            ? PoolState.Finished
            : PoolState.Running;

    const projectedState = projectState(contract.state, currentBlock);

    if (poolState === PoolState.Running || poolState === PoolState.Upcoming || poolState === PoolState.Finished) {
        return (
            <PoolContainer>
                <div onClick={() => setIsOpen(!isOpen && contract.ctc)}>
                    <PoolInfo
                        isOpen={isOpen}
                        contractState={projectedState}
                        poolState={poolState}
                        lpTokenInfo={lpTokenInfo}
                        rewardTokenInfo={rewardTokenInfo}
                        currentBlock={currentBlock}
                    />
                </div>
                {contract.ctc !== null && hasLocalState(projectedState) && isOpen && (
                    <PoolActions
                        poolState={poolState}
                        ctc={contract.ctc}
                        contractState={projectedState}
                        lpTokenInfo={lpTokenInfo}
                        rewardTokenInfo={rewardTokenInfo}
                        setIsZapModalOpen={setIsOpen}
                        currentBlock={currentBlock}
                    />
                )}
            </PoolContainer>
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />;
};
