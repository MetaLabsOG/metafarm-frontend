import { useCallback, useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getPools } from '../../providers/apiProvider';
import { addPools } from './store';
import { Pool } from './Pool';
import { AppContext, Context } from '../../AppContext';

//@ts-ignore
import { backend as farm } from '@metalabsog/farm/';

import { PoolListHeader } from './styled';
import { PoolT } from './types';

const columNames = ['POOL', 'TVL', 'APR', 'ENDS IN', 'MY STAKE', 'REWARD'];

export const PoolList = () => {
    const { account } = useContext(AppContext) as Context;
    const poolsQuery = useQuery(['pools', 'fomo'], () => getPools('farm'));

    const connectToContract = useCallback(
        async (account) => {
            if (poolsQuery.data) {
                const connectedContracts = poolsQuery.data.reduce((acc: Map<string, any>, pool: PoolT) => {
                    //@ts-ignore
                    const ctc = account.contract(farm, pool.id);
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
