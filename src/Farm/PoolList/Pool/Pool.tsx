import { useContext, useEffect, useCallback, useState } from 'react';
import { EndedPool } from './EndedPool';
import { PendingPool } from './PendingPool';

import { AppContext, Context, reach } from '../../../AppContext';
import { Status } from '../../../Status';
import { CurrentPool } from './CurrentPool';
import { getLPTokenInfo, LPTokenInfo } from '../../../providers/dexesProvider';
import { Contract, InfoFromCtc } from '../types';
import { useEvent, useStore } from 'effector-react';
import { $globalStates, $initialStates, $localStates, updateLocalInfo, updatePool } from '../store/store';

export async function getView(ctc: Contract, name: string, ...args: any[]): Promise<InfoFromCtc> {
    console.log('getting views', await ctc.views);
    const [status, object] = await ctc.views[name](...args);
    switch (status) {
        case 'Some':
            return object;
        case 'None':
            throw Error('Unable to get info from contract');
        default:
            throw Error('Unknown status');
    }
}

enum PoolState {
    Upcoming,
    Running,
    Finished,
}

export const Pool = ({ index, poolCtc }: { index: number; poolCtc: Contract }) => {
    const { account } = useContext(AppContext) as Context;

    const [lpTokenInfo, setLpTokenInfo] = useState<LPTokenInfo | undefined>(undefined);
    const [currentBlock, setCurrentBlock] = useState<number>(0);

    const [poolState, setPoolState] = useState<PoolState>();

    const handleUpdatePool = useEvent(updatePool);
    const handleUpdatePoolLocal = useEvent(updateLocalInfo);
    const initialInfo = useStore($initialStates.map((state) => state.find((info) => info.index === index)));
    const globalInfo = useStore($globalStates.map((state) => state.find((info) => info.index === index)));
    const localInfo = useStore($localStates.map((state) => state.find((info) => info.index === index)));

    useEffect(() => {
        handleUpdatePool(index);
        handleUpdatePoolLocal({
            index,
            addr: account.networkAccount.addr,
        });
    }, [account.networkAccount.addr, handleUpdatePool, handleUpdatePoolLocal, index]);

    const getInfo = useCallback(async () => {
        if (!initialInfo) {
            return;
        }

        const currentBlock = (await reach.getNetworkTime()).toNumber();

        const lpTokenInfo = await getLPTokenInfo(initialInfo.stakeToken);
        setLpTokenInfo(lpTokenInfo);

        const beginBlock = initialInfo.beginBlock;
        const endBlock = initialInfo.endBlock;

        if (currentBlock < beginBlock) {
            setPoolState(PoolState.Upcoming);
        } else if (currentBlock > endBlock) {
            setPoolState(PoolState.Finished);
        } else {
            setPoolState(PoolState.Running);
        }

        setCurrentBlock(currentBlock);
    }, [initialInfo]);

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    if (!initialInfo || !globalInfo || !localInfo || !lpTokenInfo) {
        return <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />;
    } else if (poolState === PoolState.Running) {
        return (
            <CurrentPool
                getInfo={getInfo}
                currentBlock={currentBlock}
                pool={poolCtc}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                localInfo={localInfo}
                lpTokenInfo={lpTokenInfo}
            />
        );
    } else if (poolState === PoolState.Upcoming) {
        return (
            <PendingPool
                getInfo={getInfo}
                pool={poolCtc}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                currentBlock={currentBlock}
                localInfo={localInfo}
                lpTokenInfo={lpTokenInfo}
            />
        );
    } else if (poolState === PoolState.Finished) {
        return (
            <EndedPool
                getInfo={getInfo}
                pool={poolCtc}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                localInfo={localInfo}
                lpTokenInfo={lpTokenInfo}
            />
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />;
};
