import { useEffect, useState } from 'react';
import { Status } from '../../../Status';
import { $networkTime, queryTimeUpdate, Contract, Priced, Asset } from '../../../common/store';
import { useStore, useStoreMap } from 'effector-react';
import { PoolState } from './types';
import { PoolInfo } from './PoolInfo';
import { PoolActions } from './PoolActions';
import { PoolContainer, PoolInfoContainer } from './styled';
import { Store } from 'effector';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import Immutable from 'immutable';

export const Pool = ({
    type,
    contract,
    LPTokens,
    RewardTokens,
}: {
    type: string;
    contract: Contract<'farm'>;
    LPTokens: Store<Immutable.Map<number, Priced<LPTokenInfo> | null>>;
    RewardTokens: Store<Immutable.Map<number, Priced<Asset> | null>>;
}) => {
    const currentBlock = useStore($networkTime);
    const lpTokenInfo = useStoreMap(LPTokens, (tokens) => tokens.get(contract.id, null));
    const rewardTokenInfo = useStoreMap(RewardTokens, (tokens) => tokens.get(contract.id, null));

    const [isOpen, setIsOpen] = useState(false);

    useEffect(queryTimeUpdate, [contract]);

    if (currentBlock === 0 || !contract.ctc || !contract.state || !lpTokenInfo || !rewardTokenInfo) {
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
                <PoolInfoContainer onClick={() => setIsOpen(!isOpen)}>
                    <PoolInfo
                        type={type}
                        isOpen={isOpen}
                        contractState={contract.state}
                        poolState={poolState}
                        lpTokenInfo={lpTokenInfo}
                        rewardTokenInfo={rewardTokenInfo}
                        currentBlock={currentBlock}
                    />
                </PoolInfoContainer>
                {isOpen && (
                    <PoolActions
                        type={type}
                        poolState={poolState}
                        ctc={contract.ctc}
                        contractState={contract.state}
                        lpTokenInfo={lpTokenInfo}
                        rewardTokenInfo={rewardTokenInfo}
                    />
                )}
            </PoolContainer>
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />;
};
