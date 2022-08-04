import { LPTokenInfo, ZapQuote } from '../../../providers/dexesProvider';
import { Asset, Priced, refreshAccountInfo } from '../../../common/store';
import { fromSmallestUnits } from '../../../common/lib';
import { QueryType, runTransactions } from '../../../Swap/Swap';
import { Account, Contract, ViewVal } from '../../../types';
import { logFarmActionData } from '../../../logEvent';
import { notify } from '../../../Components/Notification';
import { reach } from '../../../AppContext';

export const isCompoundEnabled = (lpTokenInfo: LPTokenInfo, reward_asset_id: number) => {
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

    // is logging 0 ok? it's still useful to see how many rewards a person sees on the screen in logs right?
    logFarmActionData(account, 'COMPOUND', 0, lpTokenInfo, rewardAsset);

    try {
        console.log('start claim');
        const [claimedAmountBignum, claimedExtraAlgosBignum] = await (ctc.apis.claim as ViewVal)([]);
        const claimedAmount = claimedAmountBignum.toBigInt();
        const claimedExtraAlgos = claimedExtraAlgosBignum.toBigInt();
        const reward_amount = fromSmallestUnits(rewardAsset, claimedAmount);
        console.log('CLAIMED', reward_amount, claimedAmount, claimedExtraAlgos);

        console.log('start zap');
        // TODO: this toString/fromString shenanigans should be gone. Overall, the methods in `Swap`
        // would benefit from some refactoring...
        const zapResult = await runTransactions(
            QueryType.zap,
            account,
            firstAsset.toString(),
            secondAsset.toString(),
            reward_amount.toString()
        );

        if (zapResult === null) {
            throw new Error('internal zap error!');
        }

        const algoRewardAmount = Number(reach.formatWithDecimals(claimedExtraAlgos, 6));
        let microAlgoLpAmount = BigInt(0);
        if (secondAsset === 0 && algoRewardAmount > 0) {
            const algoZapResult = await runTransactions(
                QueryType.zap,
                account,
                secondAsset.toString(),
                firstAsset.toString(),
                algoRewardAmount.toString()
            );

            if (algoZapResult === null) {
                throw new Error('internal algo zap error!');
            }

            const algoQuote = algoZapResult.quote as ZapQuote;
            microAlgoLpAmount = algoQuote.mint.minimalLiquidityIssued;
            console.log('Algo zap res lp amount', microAlgoLpAmount);
        }

        const quote = zapResult.quote as ZapQuote;
        refreshAccountInfo();
        console.log('COMPOUND ZAP ', quote, zapResult.txIds);

        // If mint transaction passed, tinyman could not return less than that (since txs are deterministic).
        // TODO: we should check
        const microLpAmount = quote.mint.minimalLiquidityIssued + microAlgoLpAmount;
        console.log('start stake', fromSmallestUnits(lpTokenInfo, microLpAmount), microLpAmount);

        await (ctc.apis.stake as ViewVal)([microLpAmount]);

        notify('Compound done!', 'success');
    } catch (e) {
        const error_message = e instanceof Error ? e.message : String(e);
        console.log(error_message);
        logFarmActionData(account, 'COMPOUND ERROR', 0, lpTokenInfo, rewardAsset, error_message);
        if (error_message.includes('underflow')) {
            notify('Not enough LP tokens.', 'error');
        } else if (error_message.includes('cancelled')) {
            notify('Operation is cancelled.', 'warning');
        } else if (error_message.includes('stake is locked')) {
            notify('Please, wait. Stake is locked.', 'error');
        } else {
            notify(error_message, 'error');
        }
    }
};
