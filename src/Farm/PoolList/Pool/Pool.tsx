import { useContext, useEffect, useCallback, useState } from 'react';
import { AppContext, Context, reach } from '../../../AppContext';
import { Status } from '../../../Status';
import { Contract, InfoFromCtc } from '../types';
import { useEvent, useStore } from 'effector-react';
import { PoolState } from './types';
import { $globalStates, $initialStates, $localStates, $tokenInfo, updateLocalInfo, updatePool } from '../store/store';

import { PoolInfo } from './PoolInfo';
import { PoolActions } from './PoolActions';
import { PoolConainer } from './styled';

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

export const Pool = ({ index, poolCtc }: { index: number; poolCtc: Contract }) => {
    const { account } = useContext(AppContext) as Context;
    const [isOpen, setIsOpen] = useState(false);

    const [currentBlock, setCurrentBlock] = useState<number>(0);

    const [poolState, setPoolState] = useState<PoolState>();

    const handleUpdatePool = useEvent(updatePool);
    const handleUpdatePoolLocal = useEvent(updateLocalInfo);
    const initialInfo = useStore($initialStates.map((state) => state.find((info) => info.index === index)));
    const globalInfo = useStore($globalStates.map((state) => state.find((info) => info.index === index)));
    const localInfo = useStore($localStates.map((state) => state.find((info) => info.index === index)));
    const lpTokenInfo = useStore($tokenInfo.map((state) => state.find((info) => info.id === initialInfo?.stakeToken)));

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
        if (currentBlock < initialInfo.beginBlock) {
            setPoolState(PoolState.Upcoming);
        } else if (currentBlock > initialInfo.endBlock) {
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
    } else if (
        poolState === PoolState.Running ||
        poolState === PoolState.Upcoming ||
        poolState === PoolState.Finished
    ) {
        return (
            <PoolConainer onClick={() => setIsOpen(!isOpen)}>
                <PoolInfo
                    initialInfo={initialInfo}
                    localInfo={localInfo}
                    globalInfo={globalInfo}
                    id={index}
                    poolState={poolState}
                    lpTokenInfo={lpTokenInfo}
                    currentBlock={currentBlock}
                />
                {isOpen && <PoolActions />}
            </PoolConainer>
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />;
};
