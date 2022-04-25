import { PoolConainer, PoolInfo, Stake, WithDraw, Claim } from './styled';

export const Pool = () => {
    return (
        <PoolConainer>
            <PoolInfo></PoolInfo>
            <Stake></Stake>
            <WithDraw></WithDraw>
            <Claim></Claim>
        </PoolConainer>
    );
};
