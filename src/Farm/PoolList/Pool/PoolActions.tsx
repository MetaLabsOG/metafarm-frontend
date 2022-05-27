import { useState, useCallback } from 'react';
import { useStore, useStoreMap } from 'effector-react';
import { toast } from 'react-toastify';
import { equals } from 'ramda';
import { $balances, ContractState, Priced, Asset } from '../../../common/store';
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
    Packman
} from './styled';
import packman from '../../../imgs/pacman.gif';
import { calculateAmountToken, isValidAmount, getLPTokenPoolLink } from './utils';
import { PoolState } from './types';


export const PoolActions = ({
    poolState,
    ctc,
    contractState,
    lpTokenInfo,
    rewardTokenInfo,
}: {
    poolState: PoolState;
    ctc: any;
    contractState: ContractState<'farm'>;
    lpTokenInfo: LPTokenInfo;
    rewardTokenInfo: Priced<Asset>;
}) => {
    const pendingStake = useStore(ctc.apis.stake.pending);
    const pendingClaim = useStore(ctc.apis.claim.pending);
    const pendingWithDraw = useStore(ctc.apis.unstake.pending)

    
    ctc.apis.stake.done.watch(() => {
        toast.success("Staked!");
        setToStake('')
        setIsVievMaxForStake(true)
    })

    ctc.apis.unstake.done.watch(() => {
        toast.success("Withdraw!")
        setToWithdraw('')
        setIsVievMaxForWithdraw(true)
    })

    const lpBalance = useStoreMap($balances, (bs) => bs[lpTokenInfo.id]  || 0);
    const [toStake, setToStake] = useState<string>('');
    const [isViewMaxForStake, setIsVievMaxForStake] = useState<boolean>(true);
    const [toWithdraw, setToWithdraw] = useState<string>('');
    const [isViewMaxForWithdraw, setIsVievMaxForWithdraw] = useState<boolean>(true);
    const [isValidWithdraw, setIsValidWithdraw] = useState<boolean>(true);
    const [isValidStake, setIsValidStake] = useState<boolean>(true);

    const stakedTokens = calculateAmountToken(lpTokenInfo, contractState.local.staked);
    const lpBalanceForView = lpBalance === null ? '-' : calculateAmountToken(lpTokenInfo, lpBalance);

    const canStake = poolState !== PoolState.Finished
   
    const lpBalanceIsNotZero = lpBalance !== null && lpBalanceForView > 0 && !pendingStake
    const isActiveStake = lpBalanceIsNotZero && !pendingStake
    const stakedTokenIsNotZero = Number(stakedTokens) > 0;
    const canWithdraw = stakedTokenIsNotZero && !pendingWithDraw
    

    const canClaim = poolState > PoolState.Upcoming;
    const isActiveClaim = contractState.local.reward > 0 && !pendingClaim

    console.log(ctc);


    const setMaxStake = () => {
        if (lpBalanceIsNotZero) {
            setIsVievMaxForStake(false);
            setIsValidStake(true)
            setToStake(lpBalanceForView.toString());
        }
    };

    const setMaxWithdraw = () => {
        if (canWithdraw && isValidWithdraw) {
            setIsVievMaxForWithdraw(false)
            setIsValidWithdraw(true)
            setToWithdraw(stakedTokens.toString());
        }
    };

    const onChangeWithDraw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValidWithdraw(isValidAmount(Number(e.currentTarget.value), Number(stakedTokens)));
        setIsVievMaxForWithdraw(!equals(Number(e.currentTarget.value), stakedTokens));
        setToWithdraw(e.currentTarget.value);
    };

    const onChangeStake = (e: React.ChangeEvent<HTMLInputElement>) => {
        const convertedAmount = Math.floor(parseFloat(e.currentTarget.value) * 10 ** lpTokenInfo.decimals);
        setIsValidStake(isValidAmount(convertedAmount, Number(lpBalance)));
        setIsVievMaxForStake(!equals(convertedAmount, lpBalance));
        setToStake(e.currentTarget.value);
    };

    const stake = useCallback(
        (amount: string) => {
            const convertedAmount = Math.floor(parseFloat(amount) * 10 ** lpTokenInfo.decimals);
            if (!pendingStake && lpBalance && convertedAmount <= lpBalance && isValidStake) {
                ctc.apis.stake([convertedAmount]);
            }
        },

        [pendingStake, ctc.apis, isValidStake, lpBalance, lpTokenInfo.decimals]
    );

    const withdraw = useCallback(
        (amount: string) => {
            if (!pendingWithDraw && canWithdraw && isValidWithdraw) {
                ctc.apis.unstake([Math.floor(parseFloat(amount) * 10 ** lpTokenInfo.decimals)]);
            }
        },
        [pendingWithDraw, canWithdraw, isValidWithdraw, ctc.apis, lpTokenInfo.decimals]
    );

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
                        <Action isActive={isActiveStake && isValidStake} >
                            <Input
                                placeholder='0'
                                isActive={isActiveStake}
                                value={toStake}
                                onChange={onChangeStake}
                            />
                            <Button isActive={canStake && !pendingStake} disabled={!lpBalanceIsNotZero} onClick={() => stake(toStake)}>
                                {pendingStake ? <Packman src={packman}/> : 'STAKE'}
                            </Button>
                            {isViewMaxForStake && <MaxButton onClick={setMaxStake}>MAX</MaxButton>}
                        </Action>
                        <Balance isValid={isValidStake}>
                            Balance: {lpBalanceForView} LP {isValidStake ? '' : '(Not enough)'}
                        </Balance>
                    </>
                )}
            </Stake>
            <WithDraw>
                <Action isActive={canWithdraw && isValidWithdraw && !pendingWithDraw} customColor={true}>
                    <Input
                        placeholder='0'
                        isActive={canWithdraw}
                        disabled={!canWithdraw}
                        value={toWithdraw}
                        onChange={onChangeWithDraw}
                    />
                    <Button isActive={canWithdraw && !pendingWithDraw} disabled={!canWithdraw} onClick={() => withdraw(toWithdraw)}>
                        {pendingWithDraw ? <Packman src={packman}/> : 'WITHDRAW'} 
                    </Button>
                    {isViewMaxForWithdraw && <MaxButton onClick={setMaxWithdraw}>MAX</MaxButton>}
                </Action>
                <Balance isValid={isValidWithdraw}>
                    Staked: {stakedTokens} LP {isValidWithdraw ? '' : '(Not enough)'}
                </Balance>
            </WithDraw>
            <Claim>
                {canClaim && (
                    <ClaimButton isActive={isActiveClaim} onClick={() => isActiveClaim && ctc.apis.claim()}>
                        {pendingClaim ? <Packman src={packman}/> : 'CLAIM'}
                    </ClaimButton>
                )}
            </Claim>
        </PoolActionsWrapper>
    );
};
