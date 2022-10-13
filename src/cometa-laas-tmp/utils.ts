import { getSuggestedParams, mkTxParams } from '@algo-builder/web';
import { mkTransaction } from '@algo-builder/web/build/lib/txn';
import { ExecParams } from '@algo-builder/web/build/types';
import { assignGroupID, getApplicationAddress } from 'algosdk';

import { Account } from '../types';
import { toReachTxnGroup } from '../common/lib';
import { reach } from '../AppContext';
import { AppId, AssetId, TealConnector } from '../common/store';
import { makeFundAppTx } from './common-tx-params';

export async function sendAlgobTxs(
    algobTxs: ExecParams[],
    optinApps: AppId[],
    optinAssets: AssetId[],
    connector: TealConnector
): Promise<string[]> {
    const p = await reach.getProvider();
    const sp = await getSuggestedParams(p.algodClient);

    const algodTxs = await Promise.all(
        algobTxs.map(async (tx) => {
            const algodParam = await mkTxParams(p.algodClient, tx.payFlags, sp);
            return mkTransaction(tx, algodParam);
        })
    );

    assignGroupID(algodTxs);

    const walletGroup = toReachTxnGroup(algodTxs);
    walletGroup.usedApps = optinApps;
    walletGroup.usedAssets = optinAssets;

    return connector.signAndPostTxs([walletGroup]);
}

export async function getCreatedAppId(txId: string, connector: TealConnector): Promise<AppId> {
    const tx = await connector.getTransaction(txId);
    return tx['created-application-index'];
}

export async function fundApp(appId: AppId, acc: Account, connector: TealConnector) {
    // TODO it shall happen right after creation, we just need to get appId somehow
    const appAddress = getApplicationAddress(appId);
    const fundAppParam = makeFundAppTx({ addr: acc.networkAccount.addr, sk: new Uint8Array(0) }, appAddress);

    await sendAlgobTxs([fundAppParam], [appId], [], connector);
}
