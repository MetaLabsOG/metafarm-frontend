import { useEffect, useState } from 'react';
import { Status } from '../../../Status';
import { $networkTime, Contract, queryTimeUpdate } from '../../../common/store';
import { useStore } from 'effector-react';
import { PoolState } from './types';
import { PoolInfo } from './PoolInfo';
import { PoolActions } from './PoolActions';
import { PoolContainer, PoolInfoContainer } from './styled';
import { $lpTokenInfos } from '../../store';

export const Pool = ({ contract, id }: { contract: Contract<'farm'>, id: number }) => {
    const currentBlock = useStore($networkTime);
    const lpTokenInfo = useStore(
        $lpTokenInfos.map((tokens) => (contract.state ? tokens.get(contract.state.initial.stakeToken, null) : null))
    );

    const [isOpen, setIsOpen] = useState(false);

    useEffect(queryTimeUpdate, [contract]);

    if (currentBlock === 0 || !contract.ctc || !contract.state || !lpTokenInfo) {
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
                        contractState={contract.state}
                        poolState={poolState}
                        lpTokenInfo={lpTokenInfo}
                        currentBlock={currentBlock}
                    />
                </PoolInfoContainer>
                {isOpen && (
                    <PoolActions
                        id={id}
                        poolState={poolState}
                        contractState={contract.state}
                        lpTokenInfo={lpTokenInfo}
                    />
                )}
            </PoolContainer>
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />;
};
