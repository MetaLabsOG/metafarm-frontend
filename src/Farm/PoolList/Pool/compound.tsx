import { LPTokenInfo, makeDex, ZapQuote } from '../../../dexes';
import { ALGO_ASSET, Asset, Priced, refreshAccountInfo } from '../../../common/store';
import { fromSmallestUnits } from '../../../common/lib';
import { QueryType, runTransactions, SLIPPAGE } from '../../../Swap/Swap';
import { Account, Contract, ViewVal } from '../../../types';
import { logFarmActionData } from '../../../logEvent';
import { notify } from '../../../Components/Notification';
import { reach } from '../../../AppContext';

export const isCompoundEnabled = (lpTokenInfo: LPTokenInfo, reward_asset_id: number) => {
    if (lpTokenInfo.poolDex !== 'T2' && lpTokenInfo.poolDex !== 'PT') {
        return false;
    }
    return reward_asset_id === lpTokenInfo.asset1 || reward_asset_id === lpTokenInfo.asset2;
};

export const runCompound = async (
    account: Account,
    ctc: Contract,
    lpTokenInfo: LPTokenInfo,
    rewardAsset: Priced<Asset>
) => {
    const rewardAssetId = rewardAsset.id;
    const asset1Id = lpTokenInfo.asset1;
    const asset2Id = lpTokenInfo.asset2;

    console.log('COMPOUND', asset1Id, asset2Id, rewardAssetId);
    if (!isCompoundEnabled(lpTokenInfo, rewardAssetId)) {
        notify('Different assets for compound.', 'error');
        return;
    }
    const firstAsset = asset1Id === rewardAssetId ? asset1Id : asset2Id;
    const secondAsset = asset1Id === rewardAssetId ? asset2Id : asset1Id;

    // Is logging 0 ok? it's still useful to see how many rewards a person sees on the screen in logs right?
    logFarmActionData(account, 'COMPOUND', 0, lpTokenInfo, rewardAsset);

    try {
        console.log('start claim');
        const { result } = await (ctc.apis.claim as ViewVal)([]);
        const [claimedAmountBignum, claimedExtraAlgosBignum] = result;
        const claimedAmount = claimedAmountBignum.toBigInt();
        const claimedExtraAlgos = claimedExtraAlgosBignum.toBigInt();
        const reward_amount = fromSmallestUnits(rewardAsset, claimedAmount);
        console.log('CLAIMED', reward_amount, claimedAmount, claimedExtraAlgos);

        console.log('start zap');
        const dex = makeDex(lpTokenInfo.poolDex);
        const pool = await dex.getPoolByAssets(lpTokenInfo.asset1, lpTokenInfo.asset2);
        const zapOp = await pool.getZap(rewardAsset, claimedAmount, SLIPPAGE);
        const zapTxIds = await runTransactions(account, zapOp);

        if (zapTxIds === null) {
            throw new Error('Internal zap error!');
        }

        let microAlgoLpAmount = BigInt(0);
        if (secondAsset === 0 && claimedExtraAlgos > BigInt(0)) {
            const algoZap = await pool.getZap(ALGO_ASSET, claimedExtraAlgos, SLIPPAGE);
            const algoZapResult = await runTransactions(account, algoZap);

            if (algoZapResult === null) {
                throw new Error('Internal algo zap error!');
            }

            microAlgoLpAmount = algoZap.mint.minimalLiquidityIssued;
            console.log('Algo zap res lp amount', microAlgoLpAmount);
        }

        refreshAccountInfo();
        console.log('COMPOUND ZAP', zapOp, zapTxIds);

        // If mint transaction passed, tinyman could not return less than that (since txs are deterministic).
        // TODO: we should check
        const microLpAmount = zapOp.mint.minimalLiquidityIssued + microAlgoLpAmount;
        console.log('start stake', fromSmallestUnits(lpTokenInfo, microLpAmount), microLpAmount);

        await (ctc.apis.stake as ViewVal)([microLpAmount]);

        notify('Compound done!', 'success');
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        console.log(error_message);
        logFarmActionData(account, 'COMPOUND ERROR', 0, lpTokenInfo, rewardAsset, error_message);
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
