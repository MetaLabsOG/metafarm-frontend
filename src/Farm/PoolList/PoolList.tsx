import { useCallback, useContext, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { getContracts } from '../../providers/apiProvider';
import { addPools } from './store';
import { Pool } from './Pool';
import { AppContext, Context } from '../../AppContext';

//@ts-ignore
import { backend as farm } from '@metalabsog/farm/';

import { PoolListHeader } from './styled';
import { PoolT } from './types';
import { InfoHeader } from '../../common/styled';

const columNames = ['POOL', 'TVL', 'APR', 'ENDS IN', 'MY STAKE', 'REWARD'];

export const PoolList = () => {
    const { account } = useContext(AppContext) as Context;
    const { data, isError, isSuccess } = useQuery(['contracts', 'farm'], () => getContracts('farm'));
    const pools = useMemo(() => (data && data.length > 0 ? data : []), [data]);

    const connectToContract = useCallback(
        async (account) => {
            if (data) {
                const connectedContracts = data.reduce((acc: [], pool: PoolT) => {
                    //@ts-ignore
                    const ctc = account.contract(farm, pool.id);
                    return [...acc, [pool.id.toString(), ctc]];
                }, []);
                //@ts-ignore
                addPools({ pools: connectedContracts });
            }
        },
        [data]
    );

    useEffect(() => {
        if (account && isSuccess) {
            connectToContract(account);
        }
    }, [account, connectToContract, isSuccess]);

    return (
        <div>
            <PoolListHeader>
                {columNames.map((name, i) => (
                    <div key={`${name}${i}`}>{name}</div>
                ))}
            </PoolListHeader>
            {isError && <InfoHeader>Oops Something went wrong :( </InfoHeader>}
            {isSuccess && pools.map((pool: PoolT) => <Pool key={pool.id} id={pool.id} />)}
        </div>
    );
};
