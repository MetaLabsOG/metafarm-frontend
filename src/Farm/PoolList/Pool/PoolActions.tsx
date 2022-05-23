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
import { calculateAmountToken, isValidAmount, numberRound } from './utils';
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
    const [isValidWithdraw, setIsValidWithdraw] = useState<boolean>(true);
    const [isValidStake, setIsValidStake] = useState<boolean>(true);

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
        if (canWithdraw && isValidWithdraw) {
            setToWithdraw(stakedTokens.toString());
        }
    };

    const onChangeWithDraw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValidWithdraw(isValidAmount(Number(e.currentTarget.value), Number(stakedTokens)));
        setToWithdraw(e.currentTarget.value);
    };

    const onChangeStake = (e: React.ChangeEvent<HTMLInputElement>) => {
        const convertedAmount = Math.floor(parseFloat(e.currentTarget.value) * 10 ** lpTokenInfo.decimals);
        setIsValidStake(isValidAmount(convertedAmount, Number(lpBalance)));
        setToStake(e.currentTarget.value);
    };

    const stake = useCallback(
        (amount: string) => {
            const convertedAmount = Math.floor(parseFloat(amount) * 10 ** lpTokenInfo.decimals);
            if (lpBalance && convertedAmount < lpBalance && isValidStake) {
                ctc.apis.stake(convertedAmount);
            }
        },

        [ctc.apis, isValidStake, lpBalance, lpTokenInfo.decimals]
    );

    const withdraw = useCallback(
        (amount: string) => {
            if (canWithdraw && isValidWithdraw) {
                ctc.apis.unstake(Math.floor(parseFloat(amount) * 10 ** lpTokenInfo.decimals));
            }
        },
        [canWithdraw, isValidWithdraw, ctc.apis, lpTokenInfo.decimals]
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
                        <Action isActive={lpBalanceIsNotZero && isValidStake}>
                            <Input
                                isActive={lpBalanceIsNotZero}
                                disabled={!lpBalanceIsNotZero}
                                value={toStake}
                                onChange={onChangeStake}
                            />
                            <Button isActive={canStake} disabled={!canStake} onClick={() => stake(toStake)}>
                                STAKE
                            </Button>
                            <MaxButton onClick={setMaxStake}>MAX</MaxButton>
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
                        disabled={!canWithdraw}
                        value={toWithdraw}
                        onChange={onChangeWithDraw}
                    />
                    <Button isActive={canWithdraw} disabled={!canWithdraw} onClick={() => withdraw(toWithdraw)}>
                        WITHDRAW
                    </Button>
                    <MaxButton onClick={setMaxWithdraw}>MAX</MaxButton>
                </Action>
                <Balance isValid={isValidWithdraw}>
                    Staked: {stakedTokens} LP {isValidWithdraw ? '' : '(Not enough)'}
                </Balance>
            </WithDraw>
            <Claim>
                {canClaim && (
                    <ClaimButton isActive={contractState.local.reward > 0} onClick={() => ctc.apis.claim()}>
                        CLAIM
                    </ClaimButton>
                )}
            </Claim>
        </PoolActionsWrapper>
    );
};
