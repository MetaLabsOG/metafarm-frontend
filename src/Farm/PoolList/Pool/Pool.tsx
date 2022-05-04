import { useContext, useEffect, useCallback, useState, SyntheticEvent } from 'react';
import { useStore } from 'effector-react';
import { $pools } from '../store';
import { EndedPool } from './EndedPool';
import { PendingPool } from './PendingPool';
import relativeTime from 'dayjs/plugin/relativeTime';
import { BigNumber } from 'ethers';
import dayjs from 'dayjs';
import { AppContext, Context, reach } from '../../../AppContext';
import { Status } from '../../../Status';
import { CurrentPool } from './CurrentPool';

dayjs.extend(relativeTime);

type localInfo = {
    reward: BigNumber;
    staked: BigNumber;
};

type globalInfo = {
    totalStaked: BigNumber;
};

type initialInfo = {
    endBlock: BigNumber;
    beginBlock: BigNumber;
};

//TODO BLOCK TIME FUNC
//CURRENT BLOCK
//TOKEN PRICE
export const Pool = ({ id }: { id: number }) => {
    const { account } = useContext(AppContext) as Context;
    const pools = useStore($pools);
    const [localInfo, setLocalInfo] = useState<localInfo | undefined>(undefined);
    const [globalInfo, setGlobalInfo] = useState<globalInfo | undefined>(undefined);
    const [initialInfo, setInitalInfo] = useState<initialInfo | undefined>(undefined);
    const [currentBlock, setCurrentBlock] = useState<number>(0);

    const [isEnded, setIsEnded] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [isCurrent, setIsCurrent] = useState(false);

    const selectedPool = pools ? pools.get(id.toString()) : undefined;

    const getInfo = useCallback(async () => {
        if (selectedPool) {
            const [initialInfoStatus, initialInfo] = await selectedPool.views.initial();
            setInitalInfo(initialInfo);

            const globalInfo = await selectedPool.views.global();
            setGlobalInfo(globalInfo[1]);

            const localInfo = await selectedPool.views.local(account?.getAddress());
            setLocalInfo(localInfo[1]);

            const currentBlock = await reach.getNetworkTime();
            const currentBlockNumber = reach.bigNumberToNumber(currentBlock);

            const beginBlock = initialInfoStatus !== 'None' ? reach.bigNumberToNumber(initialInfo.beginBlock) : 0;
            const endBlock = initialInfoStatus !== 'None' ? reach.bigNumberToNumber(initialInfo.endBlock) : 0;

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
        }
    }, [account, reach, selectedPool]);

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    if (isEnded) {
        return (
            <EndedPool
                pool={selectedPool}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                localInfo={localInfo}
                id={id}
            />
        );
    }

    if (isCurrent) {
        return (
            <CurrentPool
                currentBlock={currentBlock}
                pool={selectedPool}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                localInfo={localInfo}
                id={id}
            />
        );
    }

    if (isPending) {
        return (
            <PendingPool
                pool={selectedPool}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                currentBlock={currentBlock}
                localInfo={localInfo}
                id={id}
            />
        );
    }

    return <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />;
};
