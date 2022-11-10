import {
    TransactionType,
    SignType,
    AlgoTransferParam,
    AppCallsParam,
    AssetTransferParam,
    ExecParams,
    StorageConfig,
    AppOptionalFlags,
    AppDefinition,
    MetaType,
    AppDefinitionFromFile,
} from '@algo-builder/web/build/types';
import { Account } from 'algosdk';
import { AppId, AssetId } from '../common/store/types';
import { Address } from '../types';

// Opt-in application into lp and abc token
export function makeOptInTx(fromAccount: Account, appId: AppId, assets: AssetId[]): AppCallsParam {
    return {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 5000 },
        foreignAssets: assets,
        appArgs: ['str:optin_tokens'],
    };
}

export type SetupParams = {
    vaultRunBlocks: number;
    liquidityPoolApp: number;
};

export function makeSetupTxs(
    fromAccount: Account,
    appId: AppId,
    toAccountAddr: Address,
    setupParams: SetupParams,
    aTokenAmount: number,
    aTokenId: AssetId,
    bTokenId: AssetId,
    lpTokenId: AssetId
): ExecParams[] {
    // Related const
    const algoFee = 1_000_000;

    const setupArgs = [`str:setup`, `int:${setupParams.vaultRunBlocks}`, `int:${setupParams.liquidityPoolApp}`];

    const appCallParams: AppCallsParam = {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 5000 },
        appArgs: setupArgs,
        foreignApps: [setupParams.liquidityPoolApp],
        foreignAssets: [aTokenId, bTokenId, lpTokenId],
    };

    // Fund application account with some ALGO(5)
    const feeParams: AlgoTransferParam = {
        type: TransactionType.TransferAlgo,
        sign: SignType.SecretKey,
        fromAccount,
        toAccountAddr,
        amountMicroAlgos: algoFee,
        payFlags: { totalFee: 5000 },
    };

    const payParams =
        aTokenId === 0
            ? ({
                  type: TransactionType.TransferAlgo,
                  sign: SignType.SecretKey,
                  fromAccount,
                  toAccountAddr,
                  amountMicroAlgos: aTokenAmount,
                  payFlags: { totalFee: 5000 },
              } as AlgoTransferParam)
            : ({
                  type: TransactionType.TransferAsset,
                  sign: SignType.SecretKey,
                  fromAccount,
                  toAccountAddr,
                  amount: aTokenAmount,
                  assetID: aTokenId,
                  payFlags: { totalFee: 5000 },
              } as AssetTransferParam);

    // TODO: appCall should be last otherwise it's not composable?
    return [appCallParams, feeParams, payParams];
}

// TODO: refactor to saner 'container' types
export function makeProvideLiquidityTxs(
    fromAccount: Account,
    appId: AppId,
    toAccountAddr: Address,
    amount: number,
    assetAId: AssetId,
    assetBId: AssetId,
    lpId: AssetId,
    slpId: AssetId,
    ammAppId: AppId,
    ammAppAddress: Address
): ExecParams[] {
    console.log('foreign assets', [assetAId, assetBId, slpId]);
    const appCallParams: AppCallsParam = {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 5000 },
        appArgs: ['str:provide_b'],
        foreignAssets: [assetAId, assetBId, lpId, slpId],
        foreignApps: [ammAppId],
        accounts: [ammAppAddress],
    };

    const assetTransferParams =
        assetBId === 0
            ? ({
                  type: TransactionType.TransferAlgo,
                  sign: SignType.SecretKey,
                  fromAccount,
                  toAccountAddr,
                  amountMicroAlgos: amount,
                  payFlags: { totalFee: 5000 },
              } as AlgoTransferParam)
            : ({
                  type: TransactionType.TransferAsset,
                  sign: SignType.SecretKey,
                  fromAccount,
                  toAccountAddr,
                  amount,
                  assetID: assetBId,
                  payFlags: { totalFee: 5000 },
              } as AssetTransferParam);

    return [assetTransferParams, appCallParams];
}

export function makeLiquiditySeekerWithdrawExcessTx(
    fromAccount: Account,
    appId: AppId,
    assetA: AssetId
): AppCallsParam {
    return {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 5000 },
        appArgs: ['str:withdraw_excessive_a'],
        foreignAssets: [assetA],
    };
}

export function makeWithdrawLsTx(fromAccount: Account, appId: AppId, assetA: AssetId, assetB: AssetId): AppCallsParam {
    return {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 5000 },
        appArgs: ['str:ls_withdraw'],
        foreignAssets: [assetA, assetB],
    };
}

export function makeEndVaultTx(
    fromAccount: Account,
    appId: AppId,
    ammAppId: AppId,
    ammAppAddress: Address,
    assets: AssetId[]
): AppCallsParam {
    return {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 10000 },
        appArgs: ['str:end_vault'],
        foreignAssets: assets,
        foreignApps: [ammAppId],
        accounts: [ammAppAddress],
    };
}

export function makeLiquidityProviderWithdrawTxs(
    fromAccount: Account,
    appId: AppId,
    toAccountAddr: Address,
    bAsset: AssetId,
    cToken: AssetId,
    amount: number
): ExecParams[] {
    const appCallParams: AppCallsParam = {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 5000 },
        appArgs: ['str:withdraw_b'],
        foreignAssets: [bAsset],
    };

    const assetTransferParams: AssetTransferParam = {
        type: TransactionType.TransferAsset,
        sign: SignType.SecretKey,
        fromAccount,
        toAccountAddr,
        amount,
        assetID: cToken,
        payFlags: { totalFee: 5000 },
    };

    return [appCallParams, assetTransferParams];
}

export function makeChangePriorityTx(fromAccount: Account, toAddress: Address, appId: AppId): AppCallsParam {
    return {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 5000 },
        appArgs: ['str:change_priority', `addr:${toAddress}`],
    };
}

export function makeAuctionBuyTxs(
    fromAccount: Account,
    appId: AppId,
    toAccountAddr: Address,
    aToken: AssetId,
    bToken: AssetId,
    bAmount: number,
    liquiditySeekerAddress: Address
): ExecParams[] {
    const appCallParams: AppCallsParam = {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        foreignAssets: [aToken, bToken],
        payFlags: { totalFee: 5000 },
        appArgs: ['str:auction_buy'],
        // TODO rework, probably not needed
        accounts: [liquiditySeekerAddress],
    };

    const assetTransferParams =
        bToken === 0
            ? ({
                  type: TransactionType.TransferAlgo,
                  sign: SignType.SecretKey,
                  fromAccount,
                  toAccountAddr,
                  amountMicroAlgos: bAmount,
                  payFlags: { totalFee: 5000 },
              } as AlgoTransferParam)
            : ({
                  type: TransactionType.TransferAsset,
                  sign: SignType.SecretKey,
                  fromAccount,
                  toAccountAddr,
                  amount: bAmount,
                  assetID: bToken,
                  payFlags: { totalFee: 5000 },
              } as AssetTransferParam);

    return [assetTransferParams, appCallParams];
}
