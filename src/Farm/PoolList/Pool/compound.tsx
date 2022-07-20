import { LPTokenInfo, makeDex, ZapQuote } from '../../../providers/dexesProvider';
import { Asset, Priced, refreshAccountInfo } from '../../../common/store';
import { calculateTokenAmount } from '../../../common/lib';
import { QueryType, runTransactions } from '../../../Swap/Swap';
import { Account } from '../../../types';
import { logFarmActionData } from '../../../logEvent';
import { notify } from './Notification';

export const isCompoundEnabled = (lpTokenInfo: LPTokenInfo, reward_asset_id: number) => {
    return reward_asset_id === lpTokenInfo.asset1 || reward_asset_id === lpTokenInfo.asset2;
};

export const runCompound = async (account: Account, ctc: any, lpTokenInfo: LPTokenInfo, rewardAsset: Priced<Asset>) => {
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
        const claimedAmountBignum = await ctc.apis.claim();
        const claimedAmount = claimedAmountBignum.toBigInt();
        const reward_amount = calculateTokenAmount(rewardAsset, claimedAmount);
        console.log('CLAIMED', reward_amount, claimedAmount);

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

        let { quote, txIds } = zapResult;
        quote = quote as ZapQuote;
        refreshAccountInfo();
        console.log('COMPOUND ZAP ', quote, txIds);

        // If mint transaction passed, tinyman could not return less than that (since txs are deterministic).
        // TODO: we should check
        const microLpAmount = quote.mint.minimalLiquidityIssued;
        console.log('start stake', calculateTokenAmount(lpTokenInfo, microLpAmount), microLpAmount);

        await ctc.apis.stake([microLpAmount]);
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        console.log(error_message);
        logFarmActionData(account, 'COMPOUND ERROR', 0, lpTokenInfo, rewardAsset, error_message);
        if (error_message.includes('underflow')) {
            notify('Not enough LP tokens.', 'error');
        } else {
            notify(error_message, 'error');
        }
    }
};
