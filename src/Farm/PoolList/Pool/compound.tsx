import { LPTokenInfo } from '../../../providers/dexesProvider';
import { Asset, Priced, refreshAccountInfo } from '../../../common/store';
import { calculateTokenAmount, calculateTokenMicroAmount } from '../../../common/lib';
import { ZapData } from '../../../Zap/types';
import { getData, QueryType, runTransactions } from '../../../Swap/Swap';
import { Account } from '../../../types';
import { logEvent, LogName } from '../../../logEvent';

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

    logEvent(
        account?.networkAccount.addr,
        {
            message: '[COMPOUND]',
            amount: reward_amount.toString(),
            lp_token_name: lpTokenInfo.name,
            lp_token_id: lpTokenInfo.id,
            lp_asset1_id: lpTokenInfo.asset1,
            lp_asset2_id: lpTokenInfo.asset2,
            reward_token_id: rewardAssetId,
            reward_token_name: rewardAsset.unitName,
        },
        LogName.farm
    );
    try {
        console.log('start claim');
        await ctc.apis.claim();

        console.log('start zap');
        const zap_data: ZapData = await getData(
            QueryType.zap,
            firstAsset.toString(),
            secondAsset.toString(),
            reward_amount.toString(),
            '&swap_half=true&slippage=0.1'
        );
        const result_zap_tx_id = await runTransactions(
            QueryType.zap,
            account,
            firstAsset.toString(),
            secondAsset.toString(),
            reward_amount.toString(),
            '&swap_half=true&slippage=0.1'
        );
        refreshAccountInfo();
        console.log('ZAP ' + result_zap_tx_id);

        // TODO: fast fix. we have to better calculate result LP amount considering dex fees and slippage.
        // TODO: Maybe we can do Math.min(THIS, currentWalletLpBalance)
        const lpAmountWithSlippage = zap_data.lp_amount * 0.9;
        const microStakeAmount = calculateTokenMicroAmount(lpTokenInfo, lpAmountWithSlippage);
        console.log('start stake', lpAmountWithSlippage, microStakeAmount);

        await ctc.apis.stake([microStakeAmount]);
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        console.log(error_message);
        logEvent(
            account?.networkAccount.addr,
            {
                message: '[COMPOUND ERROR]',
                amount: reward_amount.toString(),
                lp_token_name: lpTokenInfo.name,
                error: error_message,
            },
            LogName.farm
        );
        if (error_message.includes('underflow')) {
            alert('Not enough LP tokens');
        } else {
            alert(error_message);
        }
    }
};
