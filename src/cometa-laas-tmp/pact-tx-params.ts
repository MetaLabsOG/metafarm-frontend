import { readFileSync, writeFileSync } from 'node:fs';
import {
    TransactionType,
    SignType,
    AppCallsParam,
    AssetTransferParam,
    AlgoTransferParam,
    ExecParams,
    StorageConfig,
    MetaType,
    AppOptionalFlags,
    AppDefinition,
    AppDefinitionFromSource,
    AppDefinitionFromFile,
    AppDefinitionFromSourceCompiled,
} from '@algo-builder/web/build/types';
import { Account } from 'algosdk';
import { Address } from '../types';
import { AppId, AssetId } from '../common/store';
import { pactApprovalProgramTemplate } from './pact_approval_source';

// Arguments are actually used in eval
export function instantiatePactTemplate(
    /* eslint-disable @typescript-eslint/naming-convention */
    primary_asset_id: AssetId,
    secondary_asset_id: AssetId,
    fee_bps: number,
    pact_fee_bps: number,
    admin_and_treasury_address: string
    /* eslint-enable @typescript-eslint/naming-convention */
) {
    return {
        // eslint-disable-next-line no-eval
        approvalCode: eval(`\`${pactApprovalProgramTemplate}\``) as string,
        clearCode: '#pragma version 6\nint 1',
    };
}

// From https://github.com/pactfi/algorand-testbed
// We are using v2 which is NOT LIVE yet
// TODO: we need to know when it launches
// TODO: it uses templates for bps
export function makeDeployPactDefinition(
    approvalProgramBytes: Uint8Array,
    clearProgramBytes: Uint8Array,
    a: AssetId,
    b: AssetId
): AppDefinitionFromSourceCompiled {
    const appStorageConfig: StorageConfig = {
        appName: 'pact',
        localInts: 0,
        localBytes: 0,
        globalInts: 9,
        globalBytes: 4,
        extraPages: 1,
    };

    const appOptionalFlags: AppOptionalFlags = {
        appArgs: [],
        accounts: [],
        foreignApps: [],
        foreignAssets: [a, b],
    };

    return {
        metaType: MetaType.BYTES as const,
        approvalProgramBytes,
        clearProgramBytes,
        ...appOptionalFlags,
        ...appStorageConfig,
    };
}

export function makeCreateLiquidityTokenTx(fromAccount: Account, appId: AppId, a: AssetId, b: AssetId): AppCallsParam {
    return {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 5000 },
        foreignAssets: [a, b],
        appArgs: ['str:CLT'],
    };
}

export function makeOptInTx(fromAccount: Account, appId: AppId, a: AssetId, b: AssetId): AppCallsParam {
    return {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 5000 },
        foreignAssets: [a, b],
        appArgs: ['str:OPTIN'],
    };
}

// TODO STUFF BELOW IS NOT READY
//      USE PACT JS SDK for reference

export function makeAddLiquidityTxs(
    fromAccount: Account,
    appId: AppId,
    toAccountAddr: Address,
    lpToken: AssetId,
    aToken: AssetId,
    bToken: AssetId,
    aAmount: number,
    bAmount: number
): ExecParams[] {
    const aTransferParams =
        aToken === 0
            ? ({
                  type: TransactionType.TransferAlgo,
                  sign: SignType.SecretKey,
                  fromAccount,
                  toAccountAddr,
                  amountMicroAlgos: aAmount,
                  payFlags: { totalFee: 5000 },
              } as AlgoTransferParam)
            : ({
                  type: TransactionType.TransferAsset,
                  sign: SignType.SecretKey,
                  fromAccount,
                  toAccountAddr,
                  amount: aAmount,
                  assetID: aToken,
                  payFlags: { totalFee: 5000 },
              } as AssetTransferParam);

    const bTransferParams: AssetTransferParam = {
        type: TransactionType.TransferAsset,
        sign: SignType.SecretKey,
        fromAccount,
        toAccountAddr,
        amount: bAmount,
        assetID: bToken,
        payFlags: { totalFee: 5000 },
    };

    const appCallParams: AppCallsParam = {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        payFlags: { totalFee: 5000 },
        foreignAssets: [aToken, bToken, lpToken],
        appArgs: ['str:ADDLIQ', 'int:0'],
    };

    return [aTransferParams, bTransferParams, appCallParams];
}

export function makeRemoveLiquidityTxs(
    fromAccount: Account,
    appId: AppId,
    toAccountAddr: Address,
    aToken: AssetId,
    bToken: AssetId,
    lpToken: AssetId,
    amount: number
): ExecParams[] {
    const assetTransferParams: AssetTransferParam = {
        type: TransactionType.TransferAsset,
        sign: SignType.SecretKey,
        fromAccount,
        toAccountAddr,
        amount,
        assetID: lpToken,
        payFlags: { totalFee: 5000 },
    };

    const appCallParams: AppCallsParam = {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        foreignAssets: [aToken, bToken],
        payFlags: { totalFee: 5000 },
        appArgs: ['str:REMLIQ', 'int:0', 'int:0'],
    };

    return [assetTransferParams, appCallParams];
}

export enum ToSwap {
    a,
    b,
}

export function makeSwapTxs(
    fromAccount: Account,
    appId: AppId,
    toAccountAddr: Address,
    tokenA: AssetId,
    tokenB: AssetId,
    amount: number,
    toSwap: ToSwap,
    // TODO acutally use it
    minimumAmountReceived = 0
): ExecParams[] {
    const assetID = toSwap === ToSwap.a ? tokenA : tokenB;

    const assetTransferParams =
        assetID === 0
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
                  assetID,
                  payFlags: { totalFee: 5000 },
              } as AssetTransferParam);

    const appCallParams: AppCallsParam = {
        type: TransactionType.CallApp,
        sign: SignType.SecretKey,
        fromAccount,
        appID: appId,
        foreignAssets: [tokenA, tokenB].sort((x, y) => x - y),
        payFlags: { totalFee: 5000 },
        appArgs: ['str:SWAP', `int:${minimumAmountReceived}`],
    };

    return [assetTransferParams, appCallParams];
}
