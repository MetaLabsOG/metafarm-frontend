// import { useContext, useEffect, useState, useCallback } from 'react';
// import {
//     PoolConainer,
//     TokenInfo,
//     Stake,
//     WithDraw,
//     Claim,
//     PoolInfo,
//     Action,
//     Button,
//     Input,
//     HighlightedInfo,
//     ActionWrapper,
//     GetLpTokenButton,
//     Link,
//     Balance,
//     BasicInfo,
//     PoolInfoValue,
//     MaxButton,
// } from './styled';
// import { AppContext, Context, reach } from '../../../AppContext';
// import { calculateAmountToken, convertAmount, convertAmountToUSD, isValidAmount, numberRound } from './utils';
// import { GlobalInfo, InitialInfo, LocalInfo } from '../types';

export const PendingPool = () => {
    return null;
};
//     const { account } = useContext(AppContext) as Context;
//     const [withDrawAmount, setWithDrawAmount] = useState(0);
//     const [balanceToken, setBalanceToken] = useState(0);
//     const [stakeAmount, setStakeAmount] = useState(0);
//     const [time, setTime] = useState('');
//     const [isValidStakeAmount, setIsValidStakeAmount] = useState(true);
//     const [isValidWithDrawAmount, setIsValidWithDrawAmount] = useState(true);
//     const [stakedToken, setStakedToken] = useState(0);

//     const getTokenInfo = useCallback(async () => {
//         if (initialInfo) {
//             const { stakeToken, beginBlock } = initialInfo;
//             const diff = Math.round(((beginBlock - currentBlock) * 4.35) / 86400);
//             setTime(`START IN ${diff} DAYS`);
//             const balanceToken = (await reach.balanceOf(account, stakeToken)).toNumber();
//             setBalanceToken(calculateAmountToken(lpTokenInfo, balanceToken));
//         }
//         if (localInfo.staked) {
//             setStakedToken(calculateAmountToken(lpTokenInfo, localInfo.staked));
//         }
//     }, [account, localInfo, setStakedToken, initialInfo, lpTokenInfo, currentBlock]);

//     useEffect(() => {
//         getTokenInfo();
//     }, [getTokenInfo]);

//     const maxedStakeAmount = () => {
//         setStakeAmount(balanceToken);
//     };

//     const maxedWithDrawAmount = () => {
//         setWithDrawAmount(stakedToken);
//     };

//     const onChangeStake = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setIsValidStakeAmount(isValidAmount(Number(e.currentTarget.value), balanceToken));
//         setStakeAmount(Number(e.currentTarget.value));
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

//     const stake = async () => {
//         if (isValidStakeAmount) {
//             try {
//                 await pool.a.stake(convertAmount(stakeAmount, lpTokenInfo));
//                 getInfo();
//             } catch (error) {
//                 console.log(error);
//             }
//             setStakeAmount(0);
//         }
//     };

//     return (
//         <PoolConainer>
//             <TokenInfo>
//                 <div>
//                     <BasicInfo>{lpTokenInfo?.name}</BasicInfo>
//                     <div>EARN META</div>
//                 </div>
//                 <Link href="https://app.tinyman.org/#/pool/create-pair?asset_1=0" target="_blank" rel="noreferrer">
//                     <GetLpTokenButton isActive={!(balanceToken > 0)}>Get LP Tokens</GetLpTokenButton>
//                 </Link>
//             </TokenInfo>
//             <Stake>
//                 <PoolInfo>
//                     <PoolInfoValue width={60}>{`$${convertAmountToUSD(
//                         lpTokenInfo,
//                         globalInfo?.totalStaked
//                     )}`}</PoolInfoValue>
//                     <PoolInfoValue>0</PoolInfoValue>
//                 </PoolInfo>
//                 <ActionWrapper>
//                     <Action isActive={isValidStakeAmount && balanceToken > 0}>
//                         <Input
//                             value={stakeAmount}
//                             placeholder="0"
//                             isActive={isValidStakeAmount}
//                             //@ts-ignore
//                             onChange={onChangeStake}
//                         />
//                         <MaxButton onClick={maxedStakeAmount}>MAX</MaxButton>
//                         <Button isActive={isValidStakeAmount} onClick={stake}>
//                             STAKE
//                         </Button>
//                     </Action>
//                     <Balance isValid={isValidStakeAmount}>{`Balance: ${numberRound(balanceToken)} LP ${
//                         isValidStakeAmount ? `` : '(Not enough)'
//                     }`}</Balance>
//                 </ActionWrapper>
//             </Stake>
//             <WithDraw>
//                 <PoolInfo>
//                     <PoolInfoValue width={80}>{time}</PoolInfoValue>
//                     <PoolInfoValue width={20}>
//                         <HighlightedInfo>{`$${convertAmountToUSD(lpTokenInfo, localInfo.staked)}`}</HighlightedInfo>
//                     </PoolInfoValue>
//                 </PoolInfo>
//                 <ActionWrapper>
//                     <Action customColor isActive={isValidWithDrawAmount}>
//                         <Input
//                             isActive={isValidWithDrawAmount}
//                             value={withDrawAmount}
//                             placeholder="0"
//                             onChange={onChangeWithDraw}
//                         />
//                         <MaxButton onClick={maxedWithDrawAmount}>MAX</MaxButton>
//                         <Button isActive={isValidWithDrawAmount} onClick={withDraw}>
//                             WITHDRAW
//                         </Button>
//                     </Action>
//                     <Balance isValid={isValidWithDrawAmount}>{`Staked: ${numberRound(stakedToken)} LP ${
//                         isValidWithDrawAmount ? `` : '(Not enough)'
//                     } `}</Balance>
//                 </ActionWrapper>
//             </WithDraw>
//             <Claim></Claim>
//         </PoolConainer>
//     );
// };
