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
    const lpBalance = useStoreMap($balances, (bs) => bs.get(lpTokenInfo.id, null));
    const [toStake, setToStake] = useState<string>('');
    const [toWithdraw, setToWithdraw] = useState<string>('');

    const canStake = poolState === PoolState.Running;
    const canWithdraw = poolState > PoolState.Upcoming;
    const canClaim = poolState > PoolState.Upcoming;

    console.log(ctc);

    const stake = useCallback(
        (amount: string) => ctc.apis.stake(Math.floor(parseFloat(amount) * 10 ** lpTokenInfo.decimals)),
        [ctc, lpTokenInfo]
    );

    const withdraw = useCallback(
        (amount: string) => ctc.apis.unstake(Math.floor(parseFloat(amount) * 10 ** lpTokenInfo.decimals)),
        [ctc, lpTokenInfo]
    );

    return (
        <PoolActionsWrapper>
            <TokenInfo>
                <GetLpTokenButton>Get LP Tokens</GetLpTokenButton>
            </TokenInfo>
            <Stake>
                <Action isActive={canStake}>
                    <Input
                        isActive={canStake}
                        disabled={!canStake}
                        value={toStake}
                        onChange={(e) => setToStake(e.target.value)}
                    />
                    <Button isActive={canStake} disabled={!canStake} onClick={() => stake(toStake)}>
                        STAKE
                    </Button>
                </Action>
                <Balance isValid={true}>
                    Balance: {lpBalance === null ? '-' : numberRound(calculateAmountToken(lpTokenInfo, lpBalance))} LP
                </Balance>
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
                </Action>
                <Balance isValid={true}>
                    Staked: {numberRound(calculateAmountToken(lpTokenInfo, contractState.local.staked))} LP
                </Balance>
            </WithDraw>
            <Claim>
                <ClaimButton isActive={canClaim} onClick={() => ctc.claim()}>CLAIM</ClaimButton>
            </Claim>
        </PoolActionsWrapper>
    );
};
