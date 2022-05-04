import { useContext } from 'react';
import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { FarmContainer } from './styled';
import { InfoHeader } from '../common/styled';
import { AppContext, Context } from '../AppContext';

export const Farm = () => {
    const { account } = useContext(AppContext) as Context;
    return (
        <FarmContainer>
            {account ? (
                <>
                    <Balance />
                    <PoolList />
                </>
            ) : (
                <InfoHeader>PLEASE, CONNECT THE WALLET.</InfoHeader>
            )}
        </FarmContainer>
    );
};
