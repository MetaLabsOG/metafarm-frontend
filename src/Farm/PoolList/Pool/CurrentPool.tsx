// import { useContext, useEffect, useState, useCallback } from 'react';
// import {
//     PoolConainer,
//     TokenInfo,
//     Stake,
//     WithDraw,
//     Claim,
//     Action,
//     Button,
//     Input,
//     ClaimButton,
//     HighlightedInfo,
//     ActionWrapper,
//     GetLpTokenButton,
//     Link,
//     Balance,
//     BasicInfo,
//     PoolInfoValue,
//     MaxButton,
// } from './styled';
// import { isValidAmount, convertAmount, calculateAmountToken, convertAmountToUSD, numberRound } from './utils';
// import { Status } from '../../../Status';
// import { AppContext, Context, reach } from '../../../AppContext';

export const CurrentPool = () => {
    return null;
};
//     const [isAcceptedToken, setIsAcceptedToken] = useState(false);
//     const getTokenInfo = useCallback(async () => {
//         if (initialInfo) {
//             // TODO shall we opt-in?
//             const isAcceptedToken = await account.tokenAccepted(initialInfo.rewardToken);
//             setIsAcceptedToken(isAcceptedToken);
//             const { stakeToken, endBlock } = initialInfo;
//             const diff = Math.floor(((endBlock - currentBlock) * 4.35) / 86400);
//             setTime(`${diff} DAYS`);
//             const stakeTokenId = reach.bigNumberToNumber(stakeToken);
//             const balanceToken = (await reach.balanceOf(account, stakeTokenId)).toNumber();
//             setBalanceToken(calculateAmountToken(lpTokenInfo, balanceToken));
//         }
//         if (localInfo) {
//             setStakedToken(calculateAmountToken(lpTokenInfo, localInfo.staked));
//         }
//     }, [initialInfo, localInfo, account, currentBlock, lpTokenInfo]);

//     const onChangeStake = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setIsValidStakeAmount(isValidAmount(Number(e.currentTarget.value), balanceToken));
//         setStakeAmount(Number(e.currentTarget.value));
//     };
//     const maxedStakeAmount = () => {
//         setStakeAmount(balanceToken);
//     };
//     const maxedWithDrawAmount = () => {
//         setWithDrawAmount(stakedToken);
//     };
//     const onChangeWithDraw = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setIsValidWithDrawAmount(isValidAmount(Number(e.currentTarget.value), stakedToken));
//         setWithDrawAmount(Number(e.currentTarget.value));
//     };
//     const withDraw = async () => {
//         if (isValidWithDrawAmount) {
//             try {
//                 await pool.a.unstake(convertAmount(withDrawAmount, lpTokenInfo));
//                 getInfo();
//             } catch (error) {
//                 console.log(error);
//             }
//             setWithDrawAmount(0);
//         }
//     };
//     const claim = async () => {
//         try {
//             if (localInfo.reward > 0) {
//                 await pool.a.claim();
//                 getInfo();
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     const stake = async () => {
//         if (isValidStakeAmount) {
//             try {
//                 getInfo();
//                 await pool.a.stake(convertAmount(stakeAmount, lpTokenInfo));
//             } catch (error) {
//                 console.log(error);
//             }
//             setStakeAmount(0);
//         }
//     };
//     return (
//         <PoolConainer>
//             {initialInfo && localInfo && globalInfo && lpTokenInfo ? (
//                 <>
//
//                     <Stake>
//
//                         <ActionWrapper>
//                             <Action isActive={isValidStakeAmount && balanceToken > 0}>
//                                 <Input
//                                     value={stakeAmount}
//                                     placeholder="0"
//                                     isActive={isValidStakeAmount}
//                                     onChange={onChangeStake}
//                                 />
//                                 <MaxButton onClick={maxedStakeAmount}>MAX</MaxButton>
//                                 <Button isActive={isValidStakeAmount} onClick={stake}>
//                                     STAKE
//                                 </Button>
//                             </Action>
//                             <Balance isValid={isValidStakeAmount}>{`Balance: ${numberRound(balanceToken)} LP ${
//                                 isValidStakeAmount ? `` : '(Not enough)'
//                             }`}</Balance>
//                         </ActionWrapper>
//                     </Stake>
//                     <WithDraw>
//                         <PoolInfo>

//                         </PoolInfo>
//                         <ActionWrapper>
//                             <Action customColor isActive={isValidWithDrawAmount && stakedToken > 0}>
//                                 <Input
//                                     value={withDrawAmount}
//                                     isActive={isValidWithDrawAmount}
//                                     placeholder="0"
//                                     onChange={onChangeWithDraw}
//                                 />
//                                 <MaxButton onClick={maxedWithDrawAmount}>MAX</MaxButton>
//                                 <Button isActive={isValidWithDrawAmount} onClick={withDraw}>
//                                     WITHDRAW
//                                 </Button>
//                             </Action>
//                             <Balance isValid={isValidWithDrawAmount}>{`Staked: ${numberRound(stakedToken)} LP ${
//                                 isValidWithDrawAmount ? `` : '(Not enough)'
//                             } `}</Balance>
//                         </ActionWrapper>
//                     </WithDraw>
//                     <Claim>

//                         <ClaimButton isActive={localInfo.reward > 0} onClick={claim}>
//                             CLAIM
//                         </ClaimButton>
//                     </Claim>
//                 </>
//             ) : (
//                 <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />
//             )}
//         </PoolConainer>
//     );
