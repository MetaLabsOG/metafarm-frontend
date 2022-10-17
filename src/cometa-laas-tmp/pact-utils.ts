import { AppCallsParam, DeployAppParam, SignType, TransactionType } from '@algo-builder/web/build/types';

import { getApplicationAddress } from 'algosdk';
import { Account } from '../types';
import { TealConnector } from '../common/store';
import { AssetId, AppId } from '../common/store/types';
import {
    instantiatePactTemplate,
    makeAddLiquidityTxs,
    makeCreateLiquidityTokenTx,
    makeDeployPactDefinition,
    makeOptInTx,
} from './pact-tx-params';
import { getCreatedAppId, sendAlgobTxs } from './utils';

export const TESTNET_PACT_GOVERNANCE_ADDR = 'G5WRMSA3AGJRBI6WXUZOM64STKWGBHKPVCWGMCSK4ZJEZXRCVPRNCGN5YI';
export const TESTNET_PACT_FEE_BPS = 30;

export async function deployPactPool(
    aToken: AssetId,
    bToken: AssetId,
    acc: Account,
    connector: TealConnector
): Promise<AppId> {
    const { approvalCode, clearCode } = instantiatePactTemplate(
        aToken,
        bToken,
        TESTNET_PACT_FEE_BPS,
        TESTNET_PACT_FEE_BPS,
        TESTNET_PACT_GOVERNANCE_ADDR
    );

    const approvalProgramBytes = await connector.compile(approvalCode);
    const clearProgramBytes = await connector.compile(clearCode);

    const appDef = makeDeployPactDefinition(approvalProgramBytes, clearProgramBytes, aToken, bToken);
    const execParam: DeployAppParam = {
        type: TransactionType.DeployApp,
        sign: SignType.SecretKey,
        fromAccount: { addr: acc.networkAccount.addr, sk: new Uint8Array(0) },
        appDefinition: appDef,
        payFlags: { totalFee: 5000 }, // TODO 5000 is arbitrary
    };

    const appIds = await sendAlgobTxs([execParam], [], [aToken, bToken], connector);
    return getCreatedAppId(appIds[0], connector);
}

export async function pactOptIn(appId: AppId, a: AssetId, b: AssetId, acc: Account, connector: TealConnector) {
    const typedAcc = { addr: acc.networkAccount.addr, sk: new Uint8Array(0) };
    const appCallTx: AppCallsParam = makeOptInTx(typedAcc, appId, a, b);
    await sendAlgobTxs([appCallTx], [], [a, b], connector);
}

export async function pactCreateLiquidityTokenTx(
    appId: AppId,
    a: AssetId,
    b: AssetId,
    acc: Account,
    connector: TealConnector
): Promise<AssetId> {
    const typedAcc = { addr: acc.networkAccount.addr, sk: new Uint8Array(0) };
    const appCallTx: AppCallsParam = makeCreateLiquidityTokenTx(typedAcc, appId, a, b);
    const createTxIds = await sendAlgobTxs([appCallTx], [appId], [a, b], connector);
    const createTxn = await connector.getTransaction(createTxIds[0]);

    const cfgTxn = createTxn['inner-txns'].find((txn: any) => txn['tx-type'] === 'acfg');
    return cfgTxn['created-asset-index'];
}

export async function pactAddLiq(
    appId: AppId,
    a: AssetId,
    b: AssetId,
    lp: AssetId,
    acc: Account,
    connector: TealConnector
) {
    const initialLiquidity = 10001; // Minimum
    const typedAcc = { addr: acc.networkAccount.addr, sk: new Uint8Array(0) };
    const addInitialLiqTxs = makeAddLiquidityTxs(
        typedAcc,
        appId,
        getApplicationAddress(appId),
        lp,
        a,
        b,
        initialLiquidity,
        initialLiquidity
    );
    await sendAlgobTxs(addInitialLiqTxs, [appId], [a, b, lp], connector);
}

export async function deployPactPoolFull(
    aToken: AssetId,
    bToken: AssetId,
    acc: Account,
    connector: TealConnector
): Promise<{ poolId: AppId; lpTokenId: AssetId }> {
    const poolId = await deployPactPool(aToken, bToken, acc, connector);
    await pactOptIn(poolId, aToken, bToken, acc, connector);
    const lpTokenId = await pactCreateLiquidityTokenTx(poolId, aToken, bToken, acc, connector);
    await pactAddLiq(poolId, aToken, bToken, lpTokenId, acc, connector);
    return { poolId, lpTokenId };
}
