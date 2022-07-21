import { useEffect, useState } from 'react';
import { Status } from '../../../Status';
import { $networkTime, queryTimeUpdate, Contract, FarmType, hasLocalState, $pricedAlgo } from '../../../common/store';
import { useStore, useStoreMap } from 'effector-react';
import { PoolState } from './types';
import { PoolInfo } from './PoolInfo';
import { PoolActions } from './PoolActions';
import { PoolContainer, PoolLoadingAnimation } from './styled';
import { $farmRewardTokens } from '../../store';
import { $stakingTokens } from '../../../Stake/store';
import logo from '../../../imgs/logo.png';

export const Pool = ({ type, contract }: { type: FarmType; contract: Contract<FarmType> }) => {
    const currentBlock = useStore($networkTime);
    const pricedAlgo = useStore($pricedAlgo);
    const stakeTokenInfo = useStoreMap($stakingTokens, (tokens) => tokens.get(contract.id, null));
    const rewardTokenInfo = useStoreMap($farmRewardTokens, (tokens) => tokens.get(contract.id, null)) ?? stakeTokenInfo;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(queryTimeUpdate, [contract]);

    const is_info_loaded = rewardTokenInfo && stakeTokenInfo;
    if (currentBlock === 0 || !contract.state || !is_info_loaded || !pricedAlgo) {
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

    const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') !== -1;

    if (poolState === PoolState.Running || poolState === PoolState.Upcoming || poolState === PoolState.Finished) {
        return (
            <PoolContainer
                style={{ transform: window.innerWidth <= 1120 && isOpen && !isSafari ? 'rotateY(180deg)' : '' }}
            >
                <div
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: window.innerWidth <= 1120 && isOpen && !isSafari ? 'rotateY(180deg)' : '',
                    }}
                    onClick={() => setIsOpen(!isOpen && contract.ctc)}
                >
                    <PoolInfo
                        isOpen={isOpen}
                        contractState={contract.state}
                        poolState={poolState}
                        stakeTokenInfo={stakeTokenInfo}
                        rewardTokenInfo={rewardTokenInfo}
                        currentBlock={currentBlock}
                        pricedAlgo={pricedAlgo}
                    />
                </div>
                {contract.ctc !== null && hasLocalState(contract.state) && isOpen && (
                    <div
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: window.innerWidth <= 1120 && isOpen && !isSafari ? 'rotateY(180deg)' : '',
                        }}
                    >
                        <PoolActions
                            poolState={poolState}
                            ctc={contract.ctc}
                            contractState={contract.state}
                            stakeTokenInfo={stakeTokenInfo}
                            rewardTokenInfo={rewardTokenInfo}
                            setIsZapModalOpen={setIsOpen}
                            currentBlock={currentBlock}
                            contractId={contract.id}
                            pricedAlgo={pricedAlgo}
                        />
                    </div>
                )}
            </PoolContainer>
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />;
};
