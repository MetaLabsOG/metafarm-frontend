import { LPTokenInfo } from '../../../providers/dexesProvider';
import { Asset, Priced } from '../../../common/store';
import { calculateTokenAmount, calculateTokenMicroAmount } from '../../../common/lib';
import { ZapData } from '../../../Zap/types';
import { getData, QueryType, runTransactions } from '../../../Swap/Swap';
import { Account } from '../../../types';

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
        alert('Different assets for comound');
        return;
    }
    const firstAsset = asset1Id === rewardAssetId ? asset1Id : asset2Id;
    const secondAsset = asset1Id === rewardAssetId ? asset2Id : asset1Id;

    console.log('start claim');
    await ctc.apis.claim();

    console.log('start zap');
    const zap_data: ZapData = await getData(
        QueryType.zap,
        firstAsset.toString(),
        secondAsset.toString(),
        reward_amount.toString(),
        '&swap_half=true'
    );
    const result_zap_tx_id = await runTransactions(
        QueryType.zap,
        account,
        firstAsset.toString(),
        secondAsset.toString(),
        reward_amount.toString(),
        '&swap_half=true'
    );
    console.log('ZAP ' + result_zap_tx_id);

    const microStakeAmount = calculateTokenMicroAmount(lpTokenInfo, zap_data.lp_amount);
    console.log('start stake', zap_data.lp_amount, microStakeAmount);
    await ctc.apis.stake([microStakeAmount]);
};
