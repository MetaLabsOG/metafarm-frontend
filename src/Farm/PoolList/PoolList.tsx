import { PoolListHeader } from './styled';
const columNames = ['POOL', 'TVL', 'APR', 'ENDS IN', 'MY STAKE', 'REWARD'];

export const PoolList = () => {
    return (
        <div>
            <PoolListHeader>
                {columNames.map((name) => (
                    <div>{name}</div>
                ))}
            </PoolListHeader>
        </div>
    );
};
