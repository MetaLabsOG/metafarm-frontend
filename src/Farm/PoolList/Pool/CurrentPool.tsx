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
    BasicInfo,
    PoolInfoValue,
} from './styled';
import { isValidAmount, convertAmount, calculateAmountToken, convertAmountToUSD, numberRound } from './utils';
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
    const [isValidStakeAmount, setIsValidStakeAmount] = useState(true);
    const [isValidWithDrawAmount, setIsValidWithDrawAmount] = useState(true);
    const [isAcceptedToken, setIsAcceptedToken] = useState(false);
    const [time, setTime] = useState('');
    const [stakedToken, setStakedToken] = useState(0);

    const getTokenInfo = useCallback(async () => {
        if (initialInfo) {
            const isAcceptedToken = await account.tokenAccepted(id);
            setIsAcceptedToken(isAcceptedToken);
            const { stakeToken, endBlock } = initialInfo;
            const diff = Math.floor(((endBlock - currentBlock) * 4.35) / 86400);
            setTime(`${diff} DAYS`);
            const stakeTokenId = reach.bigNumberToNumber(stakeToken);
            const balanceToken = await reach.balanceOf(account, stakeTokenId);
            setBalanceToken(calculateAmountToken(lpTokenInfo, balanceToken));
        }
        if (localInfo) {
            console.log(localInfo.staked);

            setStakedToken(calculateAmountToken(lpTokenInfo, localInfo.staked));
        }
    }, [initialInfo, localInfo, account, id, currentBlock, lpTokenInfo]);

    useEffect(() => {
        getTokenInfo();
    }, [getTokenInfo]);

    const onChangeStake = (e: SyntheticEvent) => {
        //@ts-ignore
        setIsValidStakeAmount(isValidAmount(Number(e.currentTarget.value), balanceToken));

        //@ts-ignore
        setStakeAmount(e.currentTarget.value);
    };

    const onChangeWithDraw = (e: SyntheticEvent) => {
        //@ts-ignore
        setIsValidWithDrawAmount(isValidAmount(Number(e.currentTarget.value), stakedToken));
        //@ts-ignore
        setWithDrawAmount(e.currentTarget.value);
    };

    const withDraw = async () => {
        if (isValidWithDrawAmount) {
            try {
                await pool.a.unstake(convertAmount(withDrawAmount, lpTokenInfo));
            } catch (error) {
                console.log(error);
            }
            setWithDrawAmount('');
        }
    };

    const claim = async () => {
        try {
            if (reach?.bigNumberToNumber(localInfo.reward) > 0) {
                await pool.a.claim();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const stake = async () => {
        if (isValidStakeAmount) {
            try {
                await pool.a.stake(convertAmount(stakeAmount, lpTokenInfo));
            } catch (error) {
                console.log(error);
            }
            setStakeAmount('');
        }
    };

    return (
        <PoolConainer>
            {initialInfo && localInfo && globalInfo && lpTokenInfo ? (
                <>
                    <TokenInfo>
                        <div>
                            <BasicInfo>{lpTokenInfo.name}</BasicInfo>
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
                            <PoolInfoValue width={60}>{`$${numberRound(
                                convertAmountToUSD(lpTokenInfo, globalInfo?.totalStaked)
                            )}`}</PoolInfoValue>
                            <PoolInfoValue>10%</PoolInfoValue>
                        </PoolInfo>
                        <ActionWrapper>
                            <Action isActive={isValidStakeAmount && balanceToken > 0}>
                                <Input
                                    value={stakeAmount}
                                    placeholder="0"
                                    isActive={isValidStakeAmount}
                                    onChange={onChangeStake}
                                />
                                <Button isActive={isValidStakeAmount} onClick={stake}>
                                    STAKE
                                </Button>
                            </Action>
                            <Balance isValid={isValidStakeAmount}>{`Balance: ${numberRound(balanceToken)} LP ${
                                isValidStakeAmount ? `` : '(Not enough)'
                            }`}</Balance>
                        </ActionWrapper>
                    </Stake>
                    <WithDraw>
                        <PoolInfo>
                            <PoolInfoValue width={80}>{time}</PoolInfoValue>
                            <PoolInfoValue width={20}>
                                <HighlightedInfo>{`$${convertAmountToUSD(lpTokenInfo, localInfo.staked).toFixed(
                                    2
                                )}`}</HighlightedInfo>
                            </PoolInfoValue>
                        </PoolInfo>
                        <ActionWrapper>
                            <Action customColor isActive={isValidWithDrawAmount && stakedToken > 0}>
                                <Input
                                    value={withDrawAmount}
                                    isActive={isValidWithDrawAmount}
                                    placeholder="0"
                                    onChange={onChangeWithDraw}
                                />
                                <Button isActive={isValidWithDrawAmount} onClick={withDraw}>
                                    WITHDRAW
                                </Button>
                            </Action>
                            <Balance isValid={isValidWithDrawAmount}>{`Staked: ${numberRound(stakedToken)} LP ${
                                isValidWithDrawAmount ? `` : '(Not enough)'
                            } `}</Balance>
                        </ActionWrapper>
                    </WithDraw>
                    <Claim>
                        <PoolInfo>
                            <HighlightedInfo style={{ marginLeft: '40px' }}>
                                <div>{`${numberRound(calculateAmountToken(lpTokenInfo, localInfo.reward))} META`}</div>
                                <div>{`($${numberRound(convertAmountToUSD(lpTokenInfo, localInfo.reward))})`}</div>
                            </HighlightedInfo>
                        </PoolInfo>
                        <ClaimButton isActive={reach?.bigNumberToNumber(localInfo.reward) > 0} onClick={claim}>
                            CLAIM
                        </ClaimButton>
                    </Claim>
                </>
            ) : (
                <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />
            )}
        </PoolConainer>
    );
};
