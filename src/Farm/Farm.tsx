import { useContext } from 'react';
import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { FarmContainer } from './styled';
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
                <div className="fomo">
                    <h1 style={{ fontSize: '20px', marginTop: '20px' }}>PLEASE, CONNECT THE WALLET.</h1>
                </div>
            )}
        </FarmContainer>
    );
};
