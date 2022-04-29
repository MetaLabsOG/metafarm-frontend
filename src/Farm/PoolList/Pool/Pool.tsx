import { useContext, useEffect, useCallback, useState, SyntheticEvent } from 'react';
import { useStore } from 'effector-react';
import { $pools } from '../store';
import {
    PoolConainer,
    TokenInfo,
    Stake,
    WithDraw,
    Claim,
    PoolInfo,
    Action,
    Input,
    Button,
    GetLpTokenButton,
    Link,
    ClaimButton,
    HighlightedInfo,
} from './styled';
import { BigNumber } from 'ethers';
import dayjs from 'dayjs';
import { AppContext, Context } from '../../../AppContext';
import { Status } from '../../../Status';

type localInfo = {
    reward: BigNumber;
    staked: BigNumber;
};

type globalInfo = {
    totalStaked: BigNumber;
};

type initialInfo = {
    endBlock: BigNumber;
};

export const Pool = ({ id }: { id: number }) => {
    const { reach, account } = useContext(AppContext) as Context;
    const pools = useStore($pools);
    const [localInfo, setLocalInfo] = useState<localInfo | undefined>(undefined);
    const [globalInfo, setGlobalInfo] = useState<globalInfo | undefined>(undefined);
    const [initialInfo, setInitalInfo] = useState<initialInfo | undefined>(undefined);
    const [stakeAmount, setStakeAmount] = useState('');
    const [withDrawAmount, setWithDrawAmount] = useState('');

    const selectedPool = pools ? pools.get(id.toString()) : undefined;

    const getInfo = useCallback(async () => {
        if (selectedPool) {
            const initialInfo = await selectedPool.views.initial();
            setInitalInfo(initialInfo[1]);

            const globalInfo = await selectedPool.views.global();
            setGlobalInfo(globalInfo[1]);

            const localInfo = await selectedPool.views.local(account?.getAddress());
            setLocalInfo(localInfo[1]);
        }
    }, [account, selectedPool]);

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    const stake = async () => {
        try {
            await selectedPool.a.stake(Number(stakeAmount.substring(2)));
        } catch (error) {
            console.log(error);
        }
        setStakeAmount('');
        await getInfo();
    };

    const withDraw = async () => {
        try {
            await selectedPool.a.unstake(Number(withDrawAmount.substring(2)));
        } catch (error) {
            console.log(error);
        }
        setWithDrawAmount('');
        await getInfo();
    };

    const claim = async () => {
        try {
            await selectedPool.a.claim();
            await getInfo();
        } catch (error) {
            console.log(error);
        }
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
                            <GetLpTokenButton>Get LP Tokens</GetLpTokenButton>
                        </Link>
                    </TokenInfo>
                    <Stake>
                        <PoolInfo>
                            <div>{`$ ${reach?.bigNumberToNumber(globalInfo?.totalStaked)}`}</div>
                            <div>10%</div>
                        </PoolInfo>
                        <Action>
                            <Input
                                value={stakeAmount}
                                mask="$ 99999999999"
                                placeholder="$ 0"
                                maskPlaceholder=""
                                //@ts-ignore
                                onChange={(e: SyntheticEvent) => setStakeAmount(e.currentTarget.value)}
                            />
                            <Button onClick={stake}>STAKE</Button>
                        </Action>
                    </Stake>
                    <WithDraw>
                        <PoolInfo style={{ width: '80%' }}>
                            <div>{`${dayjs(reach?.bigNumberToNumber(initialInfo.endBlock)).format('D')} days`}</div>
                            <HighlightedInfo>{`$ ${reach?.bigNumberToNumber(localInfo.staked)}`}</HighlightedInfo>
                        </PoolInfo>
                        <Action customColor>
                            <Input
                                value={withDrawAmount}
                                mask="$ 99999999999"
                                placeholder="$ 0"
                                maskPlaceholder=""
                                //@ts-ignore
                                onChange={(e: SyntheticEvent) => setWithDrawAmount(e.currentTarget.value)}
                            />
                            <Button onClick={withDraw}>WITHDRAW</Button>
                        </Action>
                    </WithDraw>
                    <Claim>
                        <PoolInfo>
                            <HighlightedInfo style={{ marginLeft: '40px' }}>{`$ ${reach?.bigNumberToNumber(
                                localInfo.reward
                            )}`}</HighlightedInfo>
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
