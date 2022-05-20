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

// TODO should add types in lib
//@ts-ignore
import { backend as farmBackend } from '@metalabsog/farm/';

import { PoolListContainer, PoolListHeader, PoolListHeaderElement } from './styled';
import { Contract, PoolT } from './types';
import { InfoHeader } from '../../common/styled';
import { useEvent, useList } from 'effector-react';
import { setAccount } from './store/store';

const headerColumn = [
    { name: 'POOL', width: 20 },
    { name: 'TVL', width: 16.5 },
    { name: 'APR', width: 16.5 },
    { name: 'MY STAKE', width: 16.5 },
    { name: 'REWARD', width: 16.5 },
    { name: 'ENDS IN', width: 16.5 },
];

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
    ));

    useEffect(() => {
        // TODO: it shouldn't be here. Also, we shall remove account in AppContext?
        handleAccount(account);

        if (account && isSuccess) {
            connectToContract(account);
        }
    }, [account, connectToContract, isSuccess, handleAccount]);

    return (
        <PoolListContainer>
            <PoolListHeader>
                {headerColumn.map((column, i) => (
                    <PoolListHeaderElement width={column.width} key={`${column.name}${i}`}>
                        {column.name}
                    </PoolListHeaderElement>
                ))}
            </PoolListHeader>
            {isError && <InfoHeader>Oops Something went wrong :( </InfoHeader>}
            {poolComponents}
        </PoolListContainer>
    );
};
