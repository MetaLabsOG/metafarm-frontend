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
import { toast } from 'react-toastify';
import { calculateAmountToken, isValidAmount, getLPTokenPoolLink, convertAmount } from './utils';
import { PoolState } from './types';
import { useStore, useStoreMap } from 'effector-react';
import { claimFx, fetchApiCallFx, stakeFx, withdrawFx } from '../../store';
import { formatDecimalsMeaningful } from '../../../common/lib';

export const PoolActions = ({
    poolState,
    contractState,
    lpTokenInfo,
    id
}: {
    poolState: PoolState;
    id: number;
    contractState: ContractState<'farm'>;
    lpTokenInfo: LPTokenInfo;
}) => {
    const lpBalance = useStoreMap($balances, (bs) => bs.get(lpTokenInfo.id, null));
    const [toStake, setToStake] = useState<string>('');
    const [toWithdraw, setToWithdraw] = useState<string>('');
    const [isValidWithdraw, setIsValidWithdraw] = useState<boolean>(true);
    const [isValidStake, setIsValidStake] = useState<boolean>(true);

    const pendingStake = useStore(stakeFx.pending)
   
    stakeFx.done.watch(() => {
        console.log(pendingStake)
        toast.success('Stake succees!')
        setToStake('')
    }
    )
    const pendingClaim = useStore(claimFx.pending)
    const pendingWithdraw = useStore(withdrawFx.pending)
    withdrawFx.done.watch(() => {
        toast.success('Withdraw succees!')
        setToWithdraw('')
    }
    )
  
    const stakedTokens = formatDecimalsMeaningful(calculateAmountToken(lpTokenInfo, contractState.local.staked));
    const lpBalanceForView = lpBalance === null ? '-' : formatDecimalsMeaningful(calculateAmountToken(lpTokenInfo, lpBalance));
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
                fetchApiCallFx({id, effectName: 'stake',  amount: convertedAmount, })
            }
            
        },
        [id, isValidStake, lpBalance, lpTokenInfo]
    );

    const withdraw = useCallback(
        (amount: string) => {
            if (canWithdraw && isValidWithdraw) {
                fetchApiCallFx({id, effectName: 'unstake', amount: convertAmount(amount, lpTokenInfo)})
            }
        },
        [canWithdraw, isValidWithdraw, id, lpTokenInfo]
    );

    const claim = useCallback(
        () => {
            fetchApiCallFx({ id, effectName: 'claim' })
        },[id])

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
                        <Action isActive={lpBalanceIsNotZero && isValidStake && !pendingStake}>
                            <Input
                                isActive={lpBalanceIsNotZero}
                                placeholder="0"
                                disabled={!lpBalanceIsNotZero}
                                value={toStake}
                                onChange={onChangeStake}
                            />
                            <Button isLoading={pendingStake} isActive={canStake} disabled={!canStake} onClick={() => stake(toStake)}>
                                    {pendingStake ? '' : 'STAKE' }
                            </Button>
                            <MaxButton hoverColor='green' onClick={setMaxStake}>MAX</MaxButton>
                        </Action>
                        <Balance isValid={isValidStake}>
                            Balance: {lpBalanceForView} LP {isValidStake ? '' : '(Not enough)'}
                        </Balance>
                    </>
                )}
            </Stake>
            <WithDraw>
                <Action isActive={canWithdraw && isValidWithdraw && !pendingWithdraw} customColor={true}>
                    <Input
                        isActive={canWithdraw}
                        placeholder="0"
                        disabled={!canWithdraw}
                        value={toWithdraw}
                        onChange={onChangeWithDraw}
                    />
                    <Button isLoading={pendingWithdraw} isActive={canWithdraw} disabled={!canWithdraw} onClick={() => withdraw(toWithdraw)}>
                            {pendingWithdraw ? '' : 'WITHDRAW' } 
                    </Button>
                    <MaxButton hoverColor='blue' onClick={setMaxWithdraw}>MAX</MaxButton>
                </Action>
                <Balance isValid={isValidWithdraw}>
                    Staked: {stakedTokens} LP {isValidWithdraw ? '' : '(Not enough)'}
                </Balance>
            </WithDraw>
            <Claim>
                {canClaim && (
                    <ClaimButton isLoading={pendingClaim} isActive={contractState.local.reward > 0 && !pendingClaim} onClick={claim}>
                        {pendingClaim ? '' : 'CLAIM' }
                    </ClaimButton>
                )}
            </Claim>
        </PoolActionsWrapper>
    );
};
