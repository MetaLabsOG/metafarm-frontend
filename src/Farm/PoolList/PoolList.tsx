import { useCallback, useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getPools } from '../../providers/apiProvider';
import { addPools } from './store';
import { Pool } from './Pool';
import { AppContext, Context } from '../../AppContext';

//@ts-ignore
import * as farm13 from 'farm-13.1.0/build/index.main.mjs';
//@ts-ignore
import * as farm14 from 'farm-14.0.1/build/index.main.mjs';
import { PoolListHeader } from './styled';
import { PoolT } from './types';

const poolsVersion = {
    '13.1.0': farm13,
    '14.0.1': farm14,
};

const columNames = ['POOL', 'TVL', 'APR', 'ENDS IN', 'MY STAKE', 'REWARD'];

export const PoolList = () => {
    const { account } = useContext(AppContext) as Context;
    const poolsQuery = useQuery(['pools', 'fomo'], () => getPools('farm'));

    const connectToContract = useCallback(
        async (account) => {
            if (poolsQuery.data) {
                const connectedContracts = poolsQuery.data.reduce((acc: Map<string, any>, pool: PoolT) => {
                    //@ts-ignore
                    console.log(poolsVersion[pool.version], pool.version);
                    //@ts-ignore
                    const ctc = account.contract(poolsVersion[pool.version], pool.id);
                    return acc.set(pool.id.toString(), ctc);
                }, new Map<string, any>());

                addPools(connectedContracts);
            }
        },
        [poolsQuery]
    );

    useEffect(() => {
        console.log('CONNECTING');
        if (account) {
            connectToContract(account);
        }
    }, [account, connectToContract]);

    return (
        <div>
            <PoolListHeader>
                {columNames.map((name) => (
                    <div>{name}</div>
                ))}
            </PoolListHeader>
            {poolsQuery.data && poolsQuery.data.reverse().map((pool: PoolT) => <Pool id={pool.id} />)}
        </div>
    );
};
