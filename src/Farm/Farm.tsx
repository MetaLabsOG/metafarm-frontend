import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { FarmContainer } from './styled';

export const Farm = () => {
    return (
        <FarmContainer>
            <Balance />
            <PoolList />
        </FarmContainer>
    );
};
