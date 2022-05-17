import { useEffect, useState, SyntheticEvent, useCallback } from 'react';
import { reach } from '../../../AppContext';
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
    BasicInfo,
    PoolInfoValue,
} from './styled';
import { Status } from '../../../Status';
import { calculateAmountToken, convertAmount, convertAmountToUSD, numberRound } from './utils';

export const EndedPool = ({
    pool,
    initialInfo,
    localInfo,
    globalInfo,
    lpTokenInfo,
    id,
    getInfo,
}: {
    pool: any;
    localInfo: any;
    globalInfo: any;
    initialInfo: any;
    lpTokenInfo: any;
    id: number;
    getInfo: () => void;
}) => {
    const [withDrawAmount, setWithDrawAmount] = useState(0);

    const getTokenInfo = useCallback(async () => {
        if (localInfo.staked) {
            setWithDrawAmount(calculateAmountToken(lpTokenInfo, localInfo.staked));
        }
    }, [localInfo.staked, lpTokenInfo]);

    useEffect(() => {
        getTokenInfo();
    }, [getTokenInfo]);

    const withDraw = async () => {
        try {
            await pool.a.unstake(convertAmount(withDrawAmount.toString(), lpTokenInfo));
            getInfo();
        } catch (error) {
            console.log(error);
        }
        setWithDrawAmount(0);
    };

    const claim = async () => {
        try {
            if (reach?.bigNumberToNumber(localInfo.reward) > 0) {
                getInfo();
                await pool.a.claim();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PoolConainer>
            {initialInfo && localInfo && globalInfo && lpTokenInfo ? (
                <>
                    <TokenInfo>
                        <div>
                            <BasicInfo>{lpTokenInfo?.name}</BasicInfo>
                            <div>EARN META</div>
                        </div>
                    </TokenInfo>
                    <Stake>
                        <PoolInfo>
                            <PoolInfoValue width={60}>{`$${convertAmountToUSD(
                                lpTokenInfo,
                                globalInfo?.totalStaked
                            )}`}</PoolInfoValue>
                            <PoolInfoValue>0</PoolInfoValue>
                        </PoolInfo>
                    </Stake>

                    <WithDraw style={{ height: '82%' }}>
                        <PoolInfo>
                            <PoolInfoValue width={80}>ENDED</PoolInfoValue>
                            <PoolInfoValue width={20}>
                                <HighlightedInfo>{`$${numberRound(withDrawAmount)}`}</HighlightedInfo>
                            </PoolInfoValue>
                        </PoolInfo>
                        <Action customColor>
                            <Input
                                value={withDrawAmount}
                                placeholder="0"
                                isActive={reach?.bigNumberToNumber(localInfo.reward) > 0}
                                disabled
                                //@ts-ignore
                                onChange={(e: SyntheticEvent) => setWithDrawAmount(e.currentTarget.value)}
                            />

                            <Button isActive={reach?.bigNumberToNumber(localInfo.reward) > 0} onClick={withDraw}>
                                WITHDRAW
                            </Button>
                        </Action>
                    </WithDraw>
                    <Claim>
                        <PoolInfo>
                            <HighlightedInfo style={{ marginLeft: '50px' }}>
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
