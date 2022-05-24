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
    Animation,
} from './styled';
import { calculateAmountToken, isValidAmount, numberRound, getLPTokenPoolLink, convertAmount } from './utils';
import { PoolState } from './types';
import { useStore, useStoreMap } from 'effector-react';
import { claimFx, fetchApiCallFx, stakeFx, withdrawFx } from '../../store';

export const PoolActions = ({
    poolState,
    contractState,
    lpTokenInfo,
    index
}: {
    poolState: PoolState;
    index: number;
    contractState: ContractState<'farm'>;
    lpTokenInfo: LPTokenInfo;
}) => {
    const lpBalance = useStoreMap($balances, (bs) => bs.get(lpTokenInfo.id, null));
    const [toStake, setToStake] = useState<string>('');
    const [toWithdraw, setToWithdraw] = useState<string>('');
    const [isValidWithdraw, setIsValidWithdraw] = useState<boolean>(true);
    const [isValidStake, setIsValidStake] = useState<boolean>(true);

    const pendingStake = useStore(stakeFx.pending)
    stakeFx.done.watch(() =>  setToStake(''))
    const pendingClaim = useStore(claimFx.pending)
    const pendingWithdraw = useStore(withdrawFx.pending)
    withdrawFx.done.watch(() => setToWithdraw(''))
  
    const stakedTokens = numberRound(calculateAmountToken(lpTokenInfo, contractState.local.staked));
    const lpBalanceForView = lpBalance === null ? '-' : numberRound(calculateAmountToken(lpTokenInfo, lpBalance));
    const canStake = poolState !== PoolState.Finished;
    const lpBalanceIsNotZero = lpBalance !== null && lpBalance > 0;
    const stakedTokenIsNotZero = Number(stakedTokens) > 0;
    const canWithdraw = stakedTokenIsNotZero;

    const canClaim = poolState > PoolState.Upcoming;

    const setMaxStake = () => {
        if (lpBalanceIsNotZero) {
            setToStake(lpBalanceForView.toString());
        }
    };

    const setMaxWithdraw = () => {
        if (canWithdraw && isValidWithdraw) {
            setToWithdraw(stakedTokens.toString());
        }
    };

    const onChangeWithDraw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValidWithdraw(isValidAmount(Number(e.currentTarget.value), Number(stakedTokens)));
        setToWithdraw(e.currentTarget.value);
    };

    const onChangeStake = (e: React.ChangeEvent<HTMLInputElement>) => {
        const convertedAmount = convertAmount(e.currentTarget.value, lpTokenInfo);
        setIsValidStake(isValidAmount(convertedAmount, Number(lpBalance)));
        setToStake(e.currentTarget.value);
    };

    const stake = useCallback(
        (amount: string) => {
            const convertedAmount = convertAmount(amount, lpTokenInfo)
            if (lpBalance && convertedAmount < lpBalance && isValidStake) {
                fetchApiCallFx({index, effectName: 'stake',  amount: convertedAmount, })
            }
            
        },
        [index, isValidStake, lpBalance, lpTokenInfo]
    );

    const withdraw = useCallback(
        (amount: string) => {
            if (canWithdraw && isValidWithdraw) {
                fetchApiCallFx({index, effectName: 'unstake', amount: convertAmount(amount, lpTokenInfo)})
            }
        },
        [canWithdraw, isValidWithdraw, index, lpTokenInfo]
    );

    const claim = useCallback(
        () => {
            fetchApiCallFx({ index, effectName: 'claim' })
        },[index])

    return (
        <PoolActionsWrapper>
            <TokenInfo>
                {canStake && (
                    <Link href={getLPTokenPoolLink(lpTokenInfo)} target="_blank" rel="noreferrer">
                        <GetLpTokenButton>Get LP Tokens</GetLpTokenButton>
                    </Link>
                )}
            </TokenInfo>
            <Stake>
                {canStake && (
                    <>
                        <Action isActive={lpBalanceIsNotZero && isValidStake}>
                            <Input
                                isActive={lpBalanceIsNotZero}
                                placeholder="0"
                                disabled={!lpBalanceIsNotZero}
                                value={toStake}
                                onChange={onChangeStake}
                            />
                            <Button isActive={canStake} disabled={!canStake} onClick={() => stake(toStake)}>
                                STAKE
                            </Button>
                            <MaxButton hoverColor='green' onClick={setMaxStake}>MAX</MaxButton>
                            {pendingStake &&
                                <Animation>
                                <span></span>
                            </Animation>}
                        </Action>
                        <Balance isValid={isValidStake}>
                            Balance: {lpBalanceForView} LP {isValidStake ? '' : '(Not enough)'}
                        </Balance>
                    </>
                )}
            </Stake>
            <WithDraw>
                <Action isActive={canWithdraw && isValidWithdraw} customColor={true}>
                    <Input
                        isActive={canWithdraw}
                        placeholder="0"
                        disabled={!canWithdraw}
                        value={toWithdraw}
                        onChange={onChangeWithDraw}
                    />
                    <Button isActive={canWithdraw} disabled={!canWithdraw} onClick={() => withdraw(toWithdraw)}>
                        WITHDRAW
                    </Button>
                    <MaxButton hoverColor='blue' onClick={setMaxWithdraw}>MAX</MaxButton>
                    {pendingWithdraw &&
                            <Animation>
                            <span></span>
                        </Animation>
                    }
                    
                </Action>
                <Balance isValid={isValidWithdraw}>
                    Staked: {stakedTokens} LP {isValidWithdraw ? '' : '(Not enough)'}
                </Balance>
            </WithDraw>
            <Claim>
                {canClaim && (
                    <ClaimButton isActive={contractState.local.reward > 0} onClick={claim}>
                        CLAIM
                    </ClaimButton>
                )}
            </Claim>
        </PoolActionsWrapper>
    );
};
