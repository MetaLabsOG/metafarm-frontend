import { useEffect, useState } from 'react';
import { useStoreMap, useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { Status } from '../../../Status.js';
import { $networkTime, queryTimeUpdate, hasLocalState, $pricedAlgo } from '../../../common/store';
import { $stakingTokens } from '../../../Stake/store';
import logo from '../../../imgs/logo.png';
import { $farmRewardTokens, PoolWithStats } from '../../store';
import { ConnectWalletModal } from '../../../wallet/ConnectWalletModal';
import { PoolState } from './types';
import { PoolInfo } from './PoolInfo';
import { PoolActions } from './PoolActions';
import { PoolContainer, PoolLoadingAnimation } from './styled';
import { getPoolState } from './utils';

export function Pool({ pws, isForcedOpen }: { pws: PoolWithStats; isForcedOpen?: boolean }) {
    const contract = pws.pool;
    const currentBlock = useUnit($networkTime);
    const pricedAlgo = useUnit($pricedAlgo);
    const stakeTokenInfo = useStoreMap($stakingTokens, (tokens) => tokens.get(contract.id, null));
    const rewardTokenInfo = useStoreMap($farmRewardTokens, (tokens) => tokens.get(contract.id, null)) ?? stakeTokenInfo;
    const [ConnectWallet, openConnectWallet, closeConnectWallet, isConnectWalletOpen] = useModal('root');
    const [isOpen, setIsOpen] = useState(isForcedOpen ? true : false);

    const queryTimeUpdateEvent = useUnit(queryTimeUpdate);

    useEffect(queryTimeUpdateEvent, [contract, queryTimeUpdateEvent]);

    const is_info_loaded = rewardTokenInfo && stakeTokenInfo;
    if (currentBlock === 0 || !contract.state || !is_info_loaded || !pricedAlgo) {
        // Console.log('WHY LOADING?', type, currentBlock, contract.state, lpTokenInfo, rewardTokenInfo, stakingTokenInfo);
        return (
            <PoolContainer>
                <PoolLoadingAnimation src={logo} style={{ opacity: '0.5' }} width="45px" height="45px" />
            </PoolContainer>
        );
    }

    const poolState = getPoolState(currentBlock, contract.state.initial);

    const isSafari = navigator.userAgent.toLowerCase().includes('safari');

    const onPoolClick = () => {
        if (contract.ctc === null) {
            openConnectWallet();
            return;
        }
        setIsOpen(!isOpen);
    };

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
                    onClick={onPoolClick}
                >
                    <PoolInfo
                        isOpen={isOpen}
                        contractState={contract.state}
                        poolState={poolState}
                        stakeTokenInfo={stakeTokenInfo}
                        rewardTokenInfo={rewardTokenInfo}
                        currentBlock={currentBlock}
                        pricedAlgo={pricedAlgo}
                        poolMetadata={contract.info.metadata}
                        apr={pws.apr}
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
                            contractVersion={contract.info.version}
                            pricedAlgo={pricedAlgo}
                        />
                    </div>
                )}
                <ConnectWallet>
                    <ConnectWalletModal closeModal={closeConnectWallet} isModalOpen={isConnectWalletOpen} />
                </ConnectWallet>
            </PoolContainer>
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />;
}
