import { Pool } from './Pool';
import { PoolListContainer, PoolListHeader, PoolListHeaderElement } from './styled';
import { useList } from 'effector-react';
import { Contract, FarmType } from '../../common/store';
import { Store } from 'effector';

export const POOL_COLUMN_WIDTH: Record<string, string> = {
    POOL: '300px',
    TVL: '130px',
    APR: '130px',
    'MY STAKE': '138px',
    REWARD: '180px',
    'ENDS IN': '120px',
};

export const PoolList = <T extends FarmType>({ type, pools }: { type: T; pools: Store<Contract<T>[]> }) => {
    const poolComponents = useList(pools, (ctc: Contract<T>, index: number) => (
        <Pool type={type} key={index} contract={ctc} />
    ));

    return (
        <PoolListContainer>
            <PoolListHeader>
                {Object.keys(POOL_COLUMN_WIDTH).map((key, i) => (
                    <PoolListHeaderElement width={POOL_COLUMN_WIDTH[key]} key={i}>
                        {key}
                    </PoolListHeaderElement>
                ))}
            </PoolListHeader>
            {/* {isError && <InfoHeader>Oops Something went wrong :( </InfoHeader>} */}
            {poolComponents}
        </PoolListContainer>
    );
};
