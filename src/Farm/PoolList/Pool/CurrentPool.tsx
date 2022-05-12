import { useContext, useEffect, useState, SyntheticEvent, useCallback } from 'react';
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
    ClaimButton,
    HighlightedInfo,
    ActionWrapper,
    GetLpTokenButton,
    Link,
    Balance,
} from './styled';
import { isValidAmount } from './utils';
import { Status } from '../../../Status';
import { AppContext, Context, reach } from '../../../AppContext';

export const CurrentPool = ({
    pool,
    initialInfo,
    localInfo,
    globalInfo,
    lpTokenInfo,
    currentBlock,
    id,
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
    const [stakedToken, setStakedToken] = useState(0);

    const getTokenInfo = useCallback(async () => {
        if (initialInfo) {
            const { stakeToken, endBlock } = initialInfo;
            const diff = Math.floor(((endBlock - currentBlock) * 4.35) / 86400);
            setTime(`${diff} DAYS`);
            const stakeTokenId = reach.bigNumberToNumber(stakeToken);
            const balanceToken = await reach.balanceOf(account, stakeTokenId);
            setBalanceToken((lpTokenInfo.price * reach.bigNumberToNumber(balanceToken)) / 10 ** lpTokenInfo.decimals);
        }
        if (localInfo) {
            setStakedToken(reach.bigNumberToNumber(localInfo.staked));
        }
    }, [account, currentBlock, initialInfo, setStakedToken, lpTokenInfo]);

    useEffect(() => {
        getTokenInfo();
    }, [getTokenInfo]);

    const withDraw = async () => {
        try {
            await pool.a.unstake(withDrawAmount);
        } catch (error) {
            console.log(error);
        }
        setWithDrawAmount('');
    };

    const claim = async () => {
        try {
            await pool.a.claim();
        } catch (error) {
            console.log(error);
        }
    };

    const stake = async () => {
        try {
            await pool.a.stake(stakeAmount);
        } catch (error) {
            console.log(error);
        }
        setStakeAmount('');
    };

    return (
        <PoolConainer>
            {initialInfo && localInfo && globalInfo && lpTokenInfo ? (
                <>
                    <TokenInfo>
                        <div>
                            <div>{lpTokenInfo.name}</div>
                            <div>EARN META</div>
                        </div>
                        <Link
                            href="https://app.tinyman.org/#/pool/create-pair?asset_1=0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GetLpTokenButton isActive={!(balanceToken > 0)}>Get LP Tokens</GetLpTokenButton>
                        </Link>
                    </TokenInfo>
                    <Stake>
                        <PoolInfo>
                            <div>{`$ ${reach?.bigNumberToNumber(globalInfo?.totalStaked)}`}</div>
                            <div>10%</div>
                        </PoolInfo>
                        <ActionWrapper>
                            <Action>
                                <Input
                                    value={stakeAmount}
                                    placeholder="0"
                                    isActive={balanceToken > 0}
                                    //@ts-ignore
                                    onChange={(e: SyntheticEvent) => setStakeAmount(e.currentTarget.value)}
                                />
                                <Button isActive={balanceToken > 0} onClick={stake}>
                                    STAKE
                                </Button>
                            </Action>
                            <Balance>{`Balance: ${Math.floor(balanceToken)} LP`}</Balance>
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
                            <Balance>{`Staked: ${stakedToken} LP`}</Balance>
                        </ActionWrapper>
                    </WithDraw>
                    <Claim>
                        <PoolInfo>
                            <HighlightedInfo style={{ marginLeft: '40px' }}>{`$ ${
                                reach?.bigNumberToNumber(localInfo.reward) / 10000
                            }`}</HighlightedInfo>
                        </PoolInfo>
                        <ClaimButton onClick={claim}>CLAIM</ClaimButton>
                    </Claim>
                </>
            ) : (
                <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />
            )}
        </PoolConainer>
    );
};
