import { useEffect, useState, SyntheticEvent } from 'react';
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
} from './styled';
import { Status } from '../../../Status';

export const EndedPool = ({
    pool,
    initialInfo,
    localInfo,
    globalInfo,
    lpTokenInfo,
    id,
}: {
    pool: any;
    localInfo: any;
    globalInfo: any;
    initialInfo: any;
    lpTokenInfo: any;
    id: number;
}) => {
    const [withDrawAmount, setWithDrawAmount] = useState(0);

    const getTokenInfo = async () => {
        if (localInfo.staked) {
            setWithDrawAmount(reach.bigNumberToNumber(localInfo.staked));
        }
    };

    useEffect(() => {
        getTokenInfo();
    });

    const withDraw = async () => {
        try {
            await pool.a.unstake(withDrawAmount);
        } catch (error) {
            console.log(error);
        }
        setWithDrawAmount(0);
    };

    const claim = async () => {
        try {
            await pool.a.claim();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PoolConainer>
            {initialInfo && localInfo && globalInfo && lpTokenInfo ? (
                <>
                    <TokenInfo style={{ height: '30%' }}>
                        <div>
                            <div>{lpTokenInfo.name}</div>
                            <div>EARN META</div>
                        </div>
                    </TokenInfo>
                    <Stake>
                        <PoolInfo>
                            <div>{`$ ${reach?.bigNumberToNumber(globalInfo?.totalStaked)}`}</div>
                            <div>10%</div>
                        </PoolInfo>
                        <Action></Action>
                    </Stake>
                    <WithDraw style={{ height: '82%' }}>
                        <PoolInfo style={{ width: '80%' }}>
                            <div>ENDED</div>
                            <HighlightedInfo>{`$ ${reach?.bigNumberToNumber(localInfo.staked)}`}</HighlightedInfo>
                        </PoolInfo>

                        <Action customColor>
                            <Input
                                value={withDrawAmount}
                                placeholder="0"
                                isActive
                                disabled
                                //@ts-ignore
                                onChange={(e: SyntheticEvent) => setWithDrawAmount(e.currentTarget.value)}
                            />

                            <Button isActive onClick={withDraw}>
                                WITHDRAW
                            </Button>
                        </Action>
                    </WithDraw>
                    <Claim>
                        <PoolInfo>
                            <HighlightedInfo style={{ marginLeft: '40px' }}>{`$ ${
                                reach?.bigNumberToNumber(localInfo.reward) / 10000
                            }`}</HighlightedInfo>
                        </PoolInfo>
                        <ClaimButton isActive onClick={claim}>
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
