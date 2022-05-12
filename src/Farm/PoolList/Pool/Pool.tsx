import { useContext, useEffect, useCallback, useState } from 'react';
import { useStore } from 'effector-react';
import { $pools } from '../store';
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
        return object;
    } else if (status === 'None') {
        return 'UNINITIALIZED';
    } else {
        throw Error('Unknown status');
    }
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
    const [lpTokenInfo, setLpTokenInfo] = useState<LPTokenInfo | undefined>(undefined);
    const [currentBlock, setCurrentBlock] = useState<number>(0);

    const [isEnded, setIsEnded] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [isCurrent, setIsCurrent] = useState(false);

    const selectedPool = pools ? pools.get(id.toString()) : undefined;

    const getInfo = useCallback(async () => {
        console.log(selectedPool, 'GET_INFO');
        const rez = await selectedPool.views.global();
        console.log(rez);

        if (selectedPool) {
            Promise.allSettled([
                getView(selectedPool, 'global'),
                getView(selectedPool, 'initial'),
                getView(selectedPool, 'local', account.networkAccount.addr),
                reach.getNetworkTime(),
            ]).then((results) => console.log(id, results));

            if (initialInfo) {
                const lpTokenInfo = await getLPTokenInfo(reach.bigNumberToNumber(initialInfo.stakeToken));
                console.log('LP INFO', lpTokenInfo);
                setLpTokenInfo(lpTokenInfo);
            }

            console.log('GET_TOKEN_INFO', localInfo, globalInfo);

            // console.log('CURRENT_BLOCK', currentBlock);
            // const currentBlockNumber = reach.bigNumberToNumber(currentBlock);

            // const beginBlock = initialInfoStatus !== 'None' ? reach.bigNumberToNumber(initialInfo.beginBlock) : 0;
            // const endBlock = initialInfoStatus !== 'None' ? reach.bigNumberToNumber(initialInfo.endBlock) : 0;

            // if (currentBlockNumber < beginBlock) {
            //     setIsPending(true);
            // }

            // if (currentBlockNumber > endBlock) {
            //     setIsEnded(true);
            // }

            // if (currentBlockNumber >= beginBlock && currentBlockNumber < endBlock) {
            //     setIsCurrent(true);
            // }

            // setCurrentBlock(reach?.bigNumberToNumber(currentBlock));
        }
    }, [account, selectedPool]);

    useEffect(() => {
        if (pools.size) {
            getInfo();
            console.log('USE_EFF');
        }
    }, [pools]);

    if (isEnded) {
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

    if (isCurrent) {
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

    if (isPending) {
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
