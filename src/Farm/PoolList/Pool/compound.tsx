import { LPTokenInfo, makeDex, ZapQuote } from '../../../dexes';
import {
    ALGO_ASSET,
    Amount,
    Asset,
    fetchAccountInfoFx,
    getBalancesFromAccountInfo,
    Priced,
    refreshAccountInfo,
} from '../../../common/store';
import { algoexplorerTxLink, fromSmallestUnits } from '../../../common/lib';
import { getBestSwap, QueryType, runTransactions, SLIPPAGE } from '../../../Swap/Swap';
import { Account, Contract, ViewVal } from '../../../types';
import { logFarmActionData } from '../../../logEvent';
import { notify } from '../../../Components/Notification';
import { reach } from '../../../AppContext';
import { convertAmountToUSD, isLPTokenInfo } from './utils';

export const isCompoundEnabled = (lpTokenInfo: LPTokenInfo, reward_asset_id: number) => {
    if (lpTokenInfo.poolDex !== 'T2' && lpTokenInfo.poolDex !== 'PT') {
        return false;
    }
    return reward_asset_id === lpTokenInfo.asset1 || reward_asset_id === lpTokenInfo.asset2;
};

const zapCompound = async (
    account: Account,
    lpTokenInfo: LPTokenInfo,
    rewardAsset: Priced<Asset>,
    amount: bigint,
    extraAlgoAmount: bigint
) => {
    console.log('start compound zap');
    const asset1Id = lpTokenInfo.asset1;
    const asset2Id = lpTokenInfo.asset2;
    const rewardAssetId = rewardAsset.id;

    const firstAsset = asset1Id === rewardAssetId ? asset1Id : asset2Id;
    const secondAsset = asset1Id === rewardAssetId ? asset2Id : asset1Id;

    const dex = makeDex(lpTokenInfo.poolDex);
    const pool = await dex.getPoolByAssets(lpTokenInfo.asset1, lpTokenInfo.asset2);
    const zapOp = await pool.getZap(rewardAsset, amount, SLIPPAGE);
    const zapTxIds = await runTransactions(account, zapOp);

    if (zapTxIds === null) {
        throw new Error('Internal zap error!');
    }

    let microAlgoLpAmount = BigInt(0);
    if (secondAsset === 0 && extraAlgoAmount > BigInt(0)) {
        const algoZap = await pool.getZap(ALGO_ASSET, extraAlgoAmount, SLIPPAGE);
        const algoZapResult = await runTransactions(account, algoZap);

        if (algoZapResult === null) {
            throw new Error('Internal algo zap error!');
        }

        microAlgoLpAmount = algoZap.mint.minimalLiquidityIssued;
        console.log('Algo zap res lp amount', microAlgoLpAmount);
    }

    console.log('COMPOUND ZAP', zapOp, zapTxIds);

    const accInfo = await fetchAccountInfoFx(account);
    const balances = getBalancesFromAccountInfo(accInfo);
    // If mint transaction passed, tinyman could not return less than that (since txs are deterministic).
    // TODO: we should check
    // const microLpAmount = zapOp.mint.minimalLiquidityIssued + microAlgoLpAmount;
    const microLpAmount = balances[lpTokenInfo.id];
    return microLpAmount;
};

const swapCompound = async (account: Account, firstAsset: Asset, secondAsset: Asset, microAmount: Amount) => {
    const amount = fromSmallestUnits(firstAsset, microAmount);
    const bestSwap = await getBestSwap(account, secondAsset.id.toString(), firstAsset.id.toString(), amount.toString());
    if (!bestSwap) {
        throw new Error('Best Swap Failed');
    }
    const res = await runTransactions(account, bestSwap, amount);
    if (!res) {
        throw new Error('Best Swap Failed');
    }

    return bestSwap.best.amountOut;
};

export const runCompound = async (
    account: Account,
    ctc: Contract,
    stakedAsset: Priced<LPTokenInfo> | Priced<Asset>,
    rewardAsset: Priced<Asset>,
    claimRewards: Amount
) => {
    const compoundAmount = convertAmountToUSD(rewardAsset, claimRewards);
    console.log('COMPOUND', stakedAsset, rewardAsset, compoundAmount);
    if (isLPTokenInfo(stakedAsset) && !isCompoundEnabled(stakedAsset, rewardAsset.id)) {
        notify('Different assets for compound.', 'error');
        return;
    }
    if (compoundAmount < 0.01) {
        notify('The compound is available only if rewards are worth more than 1 cent.', 'error');
        return;
    }

    logFarmActionData(account, 'COMPOUND', compoundAmount, stakedAsset, rewardAsset);

    try {
        const { result } = await (ctc.apis.claim as ViewVal)([]);
        const [claimedAmountBignum, claimedExtraAlgosBignum] = result;
        const claimedAmount = claimedAmountBignum.toBigInt();
        const claimedExtraAlgos = claimedExtraAlgosBignum.toBigInt();

        let stakeAmount = claimedAmount;
        if (isLPTokenInfo(stakedAsset)) {
            stakeAmount = await zapCompound(account, stakedAsset, rewardAsset, claimedAmount, claimedExtraAlgos);
        } else {
            if (stakedAsset.id !== rewardAsset.id) {
                stakeAmount = await swapCompound(account, rewardAsset, stakedAsset, claimedAmount);
            }
            if (claimedExtraAlgos > BigInt(0)) {
                const extraStakeAmount = (stakeAmount = await swapCompound(
                    account,
                    ALGO_ASSET,
                    stakedAsset,
                    claimedExtraAlgos
                ));
                stakeAmount += extraStakeAmount;
            }
        }

        await (ctc.apis.stake as ViewVal)([stakeAmount]);
        notify('Compound done!', 'success');
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        console.log(error_message);
        logFarmActionData(account, 'COMPOUND ERROR', compoundAmount, stakedAsset, rewardAsset, error_message);
        if (error_message.includes('underflow')) {
            notify('Not enough LP tokens.', 'error');
        } else if (error_message.includes('cancelled') || error_message.includes('The User has rejected')) {
            notify('Operation is cancelled.', 'warning');
        } else if (error_message.includes('stake is locked')) {
            notify('Please, wait. Stake is locked.', 'error');
        } else {
            notify(error_message, 'error');
        }
    }
};
