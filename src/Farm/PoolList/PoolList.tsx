import { Contract, FarmType } from '../../common/store';
import { PoolListContainer, PoolListHeader, PoolListHeaderElement } from './styled';
import { Pool } from './Pool';

export const POOL_COLUMN_WIDTH: Record<string, string> = {
    POOL: '300px',
    TVL: '130px',
    APR: '130px',
    'MY STAKE': '138px',
    REWARD: '180px',
    'ENDS IN': '120px',
};

export const PoolList = <T extends FarmType>({ type, pools }: { type: T; pools: Array<Contract<T>> }) => {
    const poolComponents = pools.map((ctc: Contract<T>) => <Pool key={ctc.id} type={type} contract={ctc} />);

    return (
        <PoolListContainer>
            <PoolListHeader>
                {Object.keys(POOL_COLUMN_WIDTH).map((key, i) => (
                    <PoolListHeaderElement key={i} width={POOL_COLUMN_WIDTH[key]}>
                        {key}
                    </PoolListHeaderElement>
                ))}
            </PoolListHeader>
            {/* {isError && <InfoHeader>Oops Something went wrong :( </InfoHeader>} */}
            {poolComponents}
        </PoolListContainer>
    );
};
