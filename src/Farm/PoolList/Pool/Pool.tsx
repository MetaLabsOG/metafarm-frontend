import { useContext, useEffect, useCallback, useState } from 'react';
import { useStoreMap } from 'effector-react';
import { $pools, selector } from '../store';
import { EndedPool } from './EndedPool';
import { PendingPool } from './PendingPool';

import { AppContext, Context, reach } from '../../../AppContext';
import { Status } from '../../../Status';
import { CurrentPool } from './CurrentPool';
import { getLPTokenInfo, LPTokenInfo } from '../../../providers/dexesProvider';
import {
    Contract,
    GlobalInfo,
    GlobalInfoFromCtc,
    InfoFromCtc,
    InitialInfo,
    InitialInfoFromCtc,
    LocalInfo,
    LocalInfoFromCtc,
} from '../types';

export async function getView(ctc: Contract, name: string, ...args: any[]): Promise<InfoFromCtc> {
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

export const Pool = ({ id }: { id: number }) => {
    const { account } = useContext(AppContext) as Context;
    const pools = useStoreMap({ store: $pools, keys: [id], fn: selector });

    const [initialInfo, setInitalInfo] = useState<InitialInfo | undefined>(undefined);
    const [globalInfo, setGlobalInfo] = useState<GlobalInfo | undefined>(undefined);
    const [localInfo, setLocalInfo] = useState<LocalInfo | undefined>(undefined);

    const [lpTokenInfo, setLpTokenInfo] = useState<LPTokenInfo | undefined>(undefined);
    const [currentBlock, setCurrentBlock] = useState<number>(0);

    const [poolState, setPoolState] = useState<PoolState>();

    const selectedPool = pools ? pools.get(id.toString()) : undefined;

    const getInfo = useCallback(async () => {
        if (!selectedPool) {
            return;
        }
        // TODO looks shitty, probably we can make it better somehow...
        const initialInfo = new InitialInfo((await getView(selectedPool, 'initial')) as InitialInfoFromCtc);
        const globalInfo = new GlobalInfo((await getView(selectedPool, 'global')) as GlobalInfoFromCtc);
        const localInfo = new LocalInfo(
            (await getView(selectedPool, 'local', account.networkAccount.addr)) as LocalInfoFromCtc
        );

        const currentBlock = (await reach.getNetworkTime()).toNumber();

        const lpTokenInfo = await getLPTokenInfo(reach.bigNumberToNumber(initialInfo.stakeToken));
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
        setGlobalInfo(globalInfo);
        setInitalInfo(initialInfo);
        setLocalInfo(localInfo);
    }, [account, selectedPool]);

    useEffect(() => {
        if (pools.size > 0) {
            getInfo();
        }
    }, [getInfo, pools]);

    if (!initialInfo || !globalInfo || !localInfo || !lpTokenInfo) {
        return <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />;
    } else if (poolState === PoolState.Running) {
        return (
            <CurrentPool
                getInfo={getInfo}
                currentBlock={currentBlock}
                pool={selectedPool}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                localInfo={localInfo}
                lpTokenInfo={lpTokenInfo}
                id={id}
            />
        );
    } else if (poolState === PoolState.Upcoming) {
        return (
            <PendingPool
                getInfo={getInfo}
                pool={selectedPool}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                currentBlock={currentBlock}
                localInfo={localInfo}
                lpTokenInfo={lpTokenInfo}
                id={id}
            />
        );
    } else if (poolState === PoolState.Finished) {
        return (
            <EndedPool
                getInfo={getInfo}
                pool={selectedPool}
                initialInfo={initialInfo}
                globalInfo={globalInfo}
                localInfo={localInfo}
                lpTokenInfo={lpTokenInfo}
                id={id}
            />
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />
};
