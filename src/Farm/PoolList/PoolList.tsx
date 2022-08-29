import { Contract, FarmType } from '../../common/store';
import { PoolWithStats } from '../store';
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

export function PoolList<T extends FarmType>({ pools }: { pools: PoolWithStats[] }) {
    const poolComponents = pools.map((pws: PoolWithStats, index) => <Pool key={pws.pool.id} index={index} pws={pws} />);

    return (
        <PoolListContainer>
            <PoolListHeader>
                {Object.keys(POOL_COLUMN_WIDTH).map((key) => (
                    <PoolListHeaderElement key={key} width={POOL_COLUMN_WIDTH[key]}>
                        {key}
                    </PoolListHeaderElement>
                ))}
            </PoolListHeader>
            {/* {isError && <InfoHeader>Oops Something went wrong :( </InfoHeader>} */}
            {poolComponents}
        </PoolListContainer>
    );
}
