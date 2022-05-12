import { useContext, useEffect, useCallback, useState } from 'react';
import { useStoreMap } from 'effector-react';
import { $pools, selector } from '../store';
import { EndedPool } from './EndedPool';
import { PendingPool } from './PendingPool';

import { BigNumber } from 'ethers';

import { AppContext, Context, reach } from '../../../AppContext';
import { Status } from '../../../Status';
import { CurrentPool } from './CurrentPool';
import { getLPTokenInfo, LPTokenInfo } from '../../../providers/dexesProvider';

type localInfo = {
    reward: BigNumber;
    staked: BigNumber;
};

type globalInfo = {
    totalStaked: BigNumber;
};

type initialInfo = {
    stakeToken: BigNumber;
    rewardToken: BigNumber;
    endBlock: BigNumber;
    beginBlock: BigNumber;
    rewardPerBlock: BigNumber;
};

//@ts-ignore
export const getView = async (ctc, name, ...args) => {
    const [status, object] = await ctc.views[name](...args);
    if (status === 'Some') {
        return [status, object];
    } else if (status === 'None') {
        return [status, {}];
    } else {
        throw Error('Unknown status');
    }
};

export const Pool = ({ id }: { id: number }) => {
    const { account } = useContext(AppContext) as Context;
    //@ts-ignore
    const pools = useStoreMap({ store: $pools, keys: [id], fn: selector });
    const [localInfo, setLocalInfo] = useState<localInfo | undefined>(undefined);
    const [globalInfo, setGlobalInfo] = useState<globalInfo | undefined>(undefined);
    const [initialInfo, setInitalInfo] = useState<initialInfo | undefined>(undefined);
    const [lpTokenInfo, setLpTokenInfo] = useState<LPTokenInfo | undefined>(undefined);
    const [currentBlock, setCurrentBlock] = useState<number>(0);

    const [isEnded, setIsEnded] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [isCurrent, setIsCurrent] = useState(false);

    const selectedPool = pools ? pools.get(id.toString()) : undefined;

    const getInfo = useCallback(async () => {
        if (selectedPool) {
            const [, globalInfo] = await getView(selectedPool, 'global');
            const [ininitalInfoStatus, initalInfoInFunct] = await getView(selectedPool, 'initial');
            const [, localInfo] = await getView(selectedPool, 'local', account.networkAccount.addr);

            const currentBlock = await reach.getNetworkTime();

            if (initalInfoInFunct) {
                const lpTokenInfo = await getLPTokenInfo(reach.bigNumberToNumber(initalInfoInFunct.stakeToken));
                console.log('LP INFO', lpTokenInfo);
                setLpTokenInfo(lpTokenInfo);
            }

            const currentBlockNumber = reach.bigNumberToNumber(currentBlock);

            const beginBlock =
                ininitalInfoStatus !== 'None' ? reach.bigNumberToNumber(initalInfoInFunct.beginBlock) : 0;
            const endBlock = ininitalInfoStatus !== 'None' ? reach.bigNumberToNumber(initalInfoInFunct.endBlock) : 0;

            if (currentBlockNumber < beginBlock) {
                setIsPending(true);
            }

            if (currentBlockNumber > endBlock) {
                setIsEnded(true);
            }

            if (currentBlockNumber >= beginBlock && currentBlockNumber < endBlock) {
                setIsCurrent(true);
            }

            setCurrentBlock(reach?.bigNumberToNumber(currentBlock));
            setGlobalInfo(globalInfo);
            setInitalInfo(initalInfoInFunct);
            setLocalInfo(localInfo);
        }
    }, [account, selectedPool]);

    useEffect(() => {
        if (pools.size > 0) {
            getInfo();
        }
    }, [getInfo, pools]);

    if (isEnded && globalInfo && localInfo && lpTokenInfo) {
        return (
            <EndedPool
                pool={selectedPool}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                localInfo={localInfo}
                lpTokenInfo={lpTokenInfo}
                id={id}
            />
        );
    }

    if (isCurrent && globalInfo && localInfo && lpTokenInfo) {
        return (
            <CurrentPool
                currentBlock={currentBlock}
                pool={selectedPool}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                localInfo={localInfo}
                lpTokenInfo={lpTokenInfo}
                id={id}
            />
        );
    }

    if (isPending && globalInfo && localInfo && lpTokenInfo) {
        return (
            <PendingPool
                pool={selectedPool}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                currentBlock={currentBlock}
                localInfo={localInfo}
                lpTokenInfo={lpTokenInfo}
                id={id}
            />
        );
    }

    return <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />;
};
