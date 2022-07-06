import { LPTokenInfo, makeDex, ZapQuote } from '../../../providers/dexesProvider';
import { Asset, Priced, refreshAccountInfo } from '../../../common/store';
import { calculateTokenAmount, calculateTokenMicroAmount } from '../../../common/lib';
import { QueryType, runTransactions } from '../../../Swap/Swap';
import { Account } from '../../../types';
import { logFarmActionData } from '../../../logEvent';

const tinyman = makeDex('T2');

export const isCompoundEnabled = (lpTokenInfo: LPTokenInfo, reward_asset_id: number) => {
    return reward_asset_id === lpTokenInfo.asset1 || reward_asset_id === lpTokenInfo.asset2;
};

export const runCompound = async (
    account: Account,
    ctc: any,
    lpTokenInfo: LPTokenInfo,
    rewardAsset: Priced<Asset>,
    rewardMicroamount: bigint
) => {
    const rewardAssetId = rewardAsset.id;
    const asset1Id = lpTokenInfo.asset1;
    const asset2Id = lpTokenInfo.asset2;

    console.log('COMPOUND', asset1Id, asset2Id, rewardAssetId, rewardMicroamount);
    const reward_amount = calculateTokenAmount(rewardAsset, rewardMicroamount);
    if (!isCompoundEnabled(lpTokenInfo, rewardAssetId)) {
        alert('Different assets for compound');
        return;
    }
    const firstAsset = asset1Id === rewardAssetId ? asset1Id : asset2Id;
    const secondAsset = asset1Id === rewardAssetId ? asset2Id : asset1Id;

    logFarmActionData(account, 'COMPOUND', reward_amount, lpTokenInfo, rewardAsset);

    try {
        console.log('start claim');
        await ctc.apis.claim();

        console.log('start zap');
        // TODO: this toString/fromString shenanigans should be gone. Overall, the methods in `Swap`
        // would benefit from some refactoring... Also, the `claim` method returns
        // the amount of tokens claimed which is always correct, so it should be taken from there,
        // not provided as an argument to this method (it uses the frontend prediction AFAIU, which will most
        // likely be smaller than the actual amount claimed since blocks come quick).
        // just need to check the format it returns it in (i guess should be Ether's bignum).
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

        // TODO: fast fix. we have to better calculate result LP amount considering dex fees and slippage.
        // TODO: Maybe we can do Math.min(THIS, currentWalletLpBalance)
        const microLpAmount = quote.mint.minimalLiquidityIssued;
        console.log('start stake', calculateTokenAmount(lpTokenInfo, microLpAmount), microLpAmount);

        await ctc.apis.stake([microLpAmount]);
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        console.log(error_message);
        logFarmActionData(account, 'COMPOUND ERROR', reward_amount, lpTokenInfo, rewardAsset, error_message);
        if (error_message.includes('underflow')) {
            alert('Not enough LP tokens');
        } else {
            alert(error_message);
        }
    }
};
