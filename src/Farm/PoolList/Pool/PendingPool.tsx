import { useContext, useEffect, useState, SyntheticEvent } from 'react';
import {
    PoolConainer,
    TokenInfo,
    Stake,
    WithDraw,
    Claim,
    PoolInfo,
    Action,
    Button,
    Input,
    HighlightedInfo,
    ActionWrapper,
    GetLpTokenButton,
    Link,
    Balance,
} from './styled';
import { AppContext, Context, reach } from '../../../AppContext';

export const PendingPool = ({
    pool,
    initialInfo,
    localInfo,
    globalInfo,
    lpTokenInfo,
    id,
    currentBlock,
}: {
    pool: any;
    localInfo: any;
    globalInfo: any;
    initialInfo: any;
    lpTokenInfo: any;
    id: number;
    currentBlock: number;
}) => {
    const { account } = useContext(AppContext) as Context;
    const [withDrawAmount, setWithDrawAmount] = useState('');
    const [balanceToken, setBalanceToken] = useState(0);
    const [stakeAmount, setStakeAmount] = useState('');
    const [time, setTime] = useState('');
    const [stakedToken, setStakedtoken] = useState(reach.bigNumberToNumber(localInfo.staked));

    const getTokenInfo = async () => {
        //@ts-ignore
        const { stakeToken, beginBlock } = initialInfo;
        const diff = Math.round(((beginBlock - currentBlock) * 4.35) / 86400);
        setTime(`START IN ${diff} DAYS`);
        const tokenMeta = await account.tokenMetadata(reach.bigNumberToNumber(stakeToken));
        const balanceToken = await reach.balanceOf(account, reach.bigNumberToNumber(stakeToken));
        setBalanceToken(lpTokenInfo.price * reach.bigNumberToNumber(balanceToken) / 10**lpTokenInfo.decimals);
    };

    useEffect(() => {
        getTokenInfo();
    });

    const withDraw = async () => {
        try {
            await pool.a.unstake(Number(withDrawAmount.substring(2)));
        } catch (error) {
            console.log(error);
        }
        setWithDrawAmount('');
    };

    const stake = async () => {
        try {
            await pool.a.stake(Number(stakeAmount.substring(2)));
        } catch (error) {
            console.log(error);
        }
        setStakeAmount('');
    };

    return (
        <PoolConainer>
            <TokenInfo>
                <div>
                    <div>{lpTokenInfo?.name}</div>
                    <div>EARN META</div>
                </div>
                <Link href="https://app.tinyman.org/#/pool/create-pair?asset_1=0" target="_blank" rel="noreferrer">
                    <GetLpTokenButton isActive>Get LP Tokens</GetLpTokenButton>
                </Link>
            </TokenInfo>
            <Stake>
                <PoolInfo>
                    <div>{`$ ${reach.bigNumberToNumber(globalInfo?.totalStaked)}`}</div>
                    <div>0</div>
                </PoolInfo>
                <ActionWrapper>
                    <Action>
                        <Input
                            value={stakeAmount}
                            placeholder="0"
                            //@ts-ignore
                            onChange={(e: SyntheticEvent) => setStakeAmount(e.currentTarget.value)}
                        />
                        <Button onClick={stake}>STAKE</Button>
                    </Action>
                    <Balance>{`Balance: ${Math.floor(balanceToken)}`}</Balance>
                </ActionWrapper>
            </Stake>
            <WithDraw>
                <PoolInfo style={{ width: '80%' }}>
                    <div>{time}</div>
                    <HighlightedInfo>{`$ ${reach?.bigNumberToNumber(localInfo.staked)}`}</HighlightedInfo>
                </PoolInfo>
                <ActionWrapper>
                    <Action customColor>
                        <Input
                            value={withDrawAmount}
                            placeholder="0"
                            //@ts-ignore
                            onChange={(e: SyntheticEvent) => setWithDrawAmount(e.currentTarget.value)}
                        />
                        <Button onClick={withDraw}>WITHDRAW</Button>
                    </Action>
                    <Balance>{`Staked: ${stakedToken}`}</Balance>
                </ActionWrapper>
            </WithDraw>
            <Claim></Claim>
        </PoolConainer>
    );
};
