import { Balance } from './Balance';
import { PoolList } from './PoolList';
import { FarmContainer } from './styled';
import { InfoHeader } from '../common/styled';
import { useStore } from 'effector-react';
import { $account } from '../common/store';
import { $sortedPools, setPoolInfos } from './store';

export const Farm = () => {
    const account = useStore($account);
    return (
        <FarmContainer>
            {account ? (
                <>
                    <Balance />
                    <PoolList type="farm" pools={$sortedPools} setPoolInfos={setPoolInfos} />
                </>
            ) : (
                <InfoHeader>PLEASE, CONNECT THE WALLET.</InfoHeader>
            )}
        </FarmContainer>
    );
};
