import { useCallback, useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
<<<<<<< HEAD
import { getContracts } from '../../providers/apiProvider';
import { addPools } from './store';
=======
import { getPools } from '../../providers/apiProvider';
import { $pools, addPools } from './store';
>>>>>>> 4235793 (refactor(farm): :recycle: simpler storage in effector)
import { Pool } from './Pool';
import { AppContext, Context } from '../../AppContext';

//@ts-ignore
import { backend as farmBackend } from '@metalabsog/farm/';

import { PoolListHeader } from './styled';
import { Contract, PoolT } from './types';
import { InfoHeader } from '../../common/styled';
import { useEvent, useList } from 'effector-react';
import { setAccount } from './store/store';

const columNames = ['POOL', 'TVL', 'APR', 'ENDS IN', 'MY STAKE', 'REWARD'];

export const PoolList = () => {
    const { account } = useContext(AppContext) as Context;
<<<<<<< HEAD
    const { data, isError, isSuccess } = useQuery(['contracts', 'farm'], () => getContracts('farm'));
    const pools = useMemo(() => (data && data.length > 0 ? data : []), [data]);
=======
    const { data, isError, isSuccess } = useQuery(['pools', 'farm'], () => getPools('farm'));
>>>>>>> 4235793 (refactor(farm): :recycle: simpler storage in effector)

    const handleAccount = useEvent(setAccount);

    const connectToContract = useCallback(
        async (account) => {
            if (data) {
                const connectedContracts = data.reduce((acc: [], pool: PoolT) => {
                    const ctc = account.contract(farmBackend, pool.id);
                    return [...acc, ctc];
                }, []);
                addPools(connectedContracts);
            }
        },
        [data]
    );

    const poolComponents = useList($pools, (ctc: Contract, index: number) => (
            <Pool key={index} index={index} poolCtc={ctc} />
    ))

    useEffect(() => {
        // TODO: it shouldn't be here. Also, we shall remove account in AppContext?
        handleAccount(account);

        if (account && isSuccess) {
            connectToContract(account);
        }
    }, [account, connectToContract, isSuccess, handleAccount]);

    return (
        <div>
            <PoolListHeader>
                {columNames.map((name, i) => (
                    <div key={`${name}${i}`}>{name}</div>
                ))}
            </PoolListHeader>
            {isError && <InfoHeader>Oops Something went wrong :( </InfoHeader>}
            {poolComponents}
        </div>
    );
};
