import { useContext, useEffect, useCallback, useState, SyntheticEvent } from 'react';
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
import { Status } from '../../../Status';
import { AppContext, Context } from '../../../AppContext';

//change STYLE FOR GET LP if balance !== 0
//isActive claim if claim !== 0
//Stake isActive if balance !==0
export const CurrentPool = ({
    pool,
    initialInfo,
    localInfo,
    globalInfo,
    id,
    currentBlock,
}: {
    pool: any;
    localInfo: any;
    globalInfo: any;
    initialInfo: any;
    id: number;
    currentBlock: number;
}) => {
    const { reach, account } = useContext(AppContext) as Context;
    const [withDrawAmount, setWithDrawAmount] = useState('');
    const [balanceToken, setBalanceToken] = useState(0);
    const [stakeAmount, setStakeAmount] = useState('');
    const [time, setTime] = useState('');
    const [stakedToken, setStakedtoken] = useState(reach.bigNumberToNumber(localInfo.staked));

    const getTokenInfo = async () => {
        //@ts-ignore
        const { stakeToken, endBlock } = initialInfo;
        const diff = Math.floor(((endBlock - currentBlock) * 4.35) / 86400);
        setTime(`${diff} DAYS`);
        const tokenMeta = await account.tokenMetadata(reach.bigNumberToNumber(stakeToken));
        const balanceToken = await reach.balanceOf(account, reach.bigNumberToNumber(stakeToken));
        setBalanceToken(reach.bigNumberToNumber(balanceToken) / 100000000);
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

    const claim = async () => {
        try {
            await pool.a.claim();
        } catch (error) {
            console.log(error);
        }
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
            {initialInfo && localInfo && globalInfo ? (
                <>
                    <TokenInfo>
                        <div>
                            <div>META•ALGO LP</div>
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
