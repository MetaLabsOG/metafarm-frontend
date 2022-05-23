import { useState, useCallback } from 'react';
import { $balances, ContractState } from '../../../common/store';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import {
    Action,
    Balance,
    Button,
    GetLpTokenButton,
    Input,
    PoolActionsWrapper,
    Stake,
    TokenInfo,
    WithDraw,
    Claim,
    ClaimButton,
    MaxButton,
    Link,
} from './styled';
import { calculateAmountToken, numberRound } from './utils';
import { PoolState } from './types';
import { useStoreMap } from 'effector-react';

export const PoolActions = ({
    poolState,
    ctc,
    contractState,
    lpTokenInfo,
}: {
    poolState: PoolState;
    ctc: any;
    contractState: ContractState<'farm'>;
    lpTokenInfo: LPTokenInfo;
}) => {
    // const pending = useStore(updateContractStateFx.pending);
    const lpBalance = useStoreMap($balances, (bs) => bs.get(lpTokenInfo.id, null));
    const [toStake, setToStake] = useState<string>('');
    const [toWithdraw, setToWithdraw] = useState<string>('');

    const stakedTokens = numberRound(calculateAmountToken(lpTokenInfo, contractState.local.staked));
    const lpBalanceForView = lpBalance === null ? '-' : numberRound(calculateAmountToken(lpTokenInfo, lpBalance));

    const canStake = poolState !== PoolState.Finished;
    const lpBalanceIsNotZero = lpBalance !== null && lpBalance > 0;
    const stakedTokenIsNotZero = Number(stakedTokens) > 0;
    const canWithdraw = stakedTokenIsNotZero;

    const canClaim = poolState > PoolState.Upcoming;

    console.log(ctc);

    const setMaxStake = () => {
        if (lpBalanceIsNotZero) {
            setToStake(lpBalanceForView.toString());
        }
    };

    const setMaxWithdraw = () => {
        if (canWithdraw) {
            setToWithdraw(stakedTokens.toString());
        }
    };

    const stake = useCallback(
        (amount: string) => {
            const convertedAmount = Math.floor(parseFloat(amount) * 10 ** lpTokenInfo.decimals);
            if (lpBalance && convertedAmount < lpBalance) {
                ctc.apis.stake(convertedAmount);
            }
        },

        [ctc.apis, lpBalance, lpTokenInfo.decimals]
    );

    const withdraw = useCallback(
        (amount: string) => {
            if (canWithdraw) {
                ctc.apis.unstake(Math.floor(parseFloat(amount) * 10 ** lpTokenInfo.decimals));
            }
        },
        [ctc.apis, lpTokenInfo.decimals, canWithdraw]
    );

    return (
        <PoolActionsWrapper>
            <TokenInfo>
                {canStake && (
                    <Link href="https://app.tinyman.org/#/pool/create-pair?asset_1=0" target="_blank" rel="noreferrer">
                        <GetLpTokenButton>Get LP Tokens</GetLpTokenButton>
                    </Link>
                )}
            </TokenInfo>
            <Stake>
                {canStake && (
                    <>
                        <Action isActive={lpBalanceIsNotZero}>
                            <Input
                                isActive={lpBalanceIsNotZero}
                                disabled={!lpBalanceIsNotZero}
                                value={toStake}
                                onChange={(e) => setToStake(e.target.value)}
                            />
                            <Button isActive={canStake} disabled={!canStake} onClick={() => stake(toStake)}>
                                STAKE
                            </Button>
                            <MaxButton onClick={setMaxStake}>MAX</MaxButton>
                        </Action>
                        <Balance isValid={true}>Balance: {lpBalanceForView} LP</Balance>
                    </>
                )}
            </Stake>
            <WithDraw>
                <Action isActive={canWithdraw} customColor={true}>
                    <Input
                        isActive={canWithdraw}
                        disabled={!canWithdraw}
                        value={toWithdraw}
                        onChange={(e) => setToWithdraw(e.target.value)}
                    />
                    <Button isActive={canWithdraw} disabled={!canWithdraw} onClick={() => withdraw(toWithdraw)}>
                        WITHDRAW
                    </Button>
                    <MaxButton onClick={setMaxWithdraw}>MAX</MaxButton>
                </Action>
                <Balance isValid={true}>Staked: {stakedTokens} LP</Balance>
            </WithDraw>
            <Claim>
                {canClaim && (
                    <ClaimButton isActive={canClaim} onClick={() => ctc.claim()}>
                        CLAIM
                    </ClaimButton>
                )}
            </Claim>
        </PoolActionsWrapper>
    );
};
