import { Buffer } from 'buffer';
import algosdk, { IntDecoding, waitForConfirmation } from 'algosdk';
import { ALGONET, TESTNET } from './AppContext';
import { withAlgodEncoding } from './common/lib';
import { AssetId } from './common/store';
import { Address, ReachStdlib } from './types';

/**
 * Opt-ins to a few asaIds in one go.
 * @param addr wallet address to sign transaction from. Usually should be address of connected user wallet.
 * @param asaIds ids to opt-in. Should be not empty and not more that 16.
 * @returns always true. It's a hack for reach smart contracts. TODO
 */
export async function batchOptIn(reach: ReachStdlib, addr: Address, asaIds: AssetId[], waitConfirmation = true) {
    if (asaIds.length === 0) {
        throw new Error('Empty opt-in asa id list');
    }

    if (asaIds.length > 16) {
        throw new Error(`Too many asa ids in the list. Should be at most 16 but is: [${asaIds.join(', ')}]`);
    }

    const p = await reach.getProvider();
    const { algodClient } = p;
    const ps = await algodClient.getTransactionParams().do();
    const revocationTarget = undefined;
    const CloseRemainderTo = undefined;
    const note = undefined;
    const amount = 0;

    const txns = asaIds.map((id) =>
        algosdk.makeAssetTransferTxnWithSuggestedParams(
            addr,
            addr,
            CloseRemainderTo,
            revocationTarget,
            amount,
            note,
            id,
            ps
        )
    );
    algosdk.assignGroupID(txns);

    const reachTxns = txns.map((txn) => ({
        txn: Buffer.from(txn.toByte()).toString('base64'),
    }));

    await p.signAndPostTxns(reachTxns);

    if (waitConfirmation) {
        const txId = txns[0].txID().toString();
        console.log('Waiting for confirmation of opt-in');
        await withAlgodEncoding(algodClient, IntDecoding.DEFAULT, async (algodClient) => {
            return waitForConfirmation(algodClient, txId, 4);
        });
        console.log('Confirmed');
    }

    return true; // We don't need this but have to send something to make contract wait
}

export async function multiBatchOptIn(reach: ReachStdlib, addr: Address) {
    // Const { BATCH_IDS: asaIds } = await import('./bigbrains_100');
    const asaIds: AssetId[] = [];
    const BATCH_SIZE = 16;
    const asaIdsCount = asaIds.length;
    console.log(asaIdsCount);
    for (let i = 0; i < asaIdsCount; i += BATCH_SIZE) {
        const batch = asaIds.slice(i, Math.min(asaIdsCount, i + BATCH_SIZE));
        console.log(i, Math.min(asaIdsCount, i + BATCH_SIZE));
        // eslint-disable-next-line no-await-in-loop -- we want to wait for confirmation
        await batchOptIn(reach, addr, batch, false);
    }
}

export async function checkOptIn(addr: Address, asaId: AssetId) {
    const preffix = ALGONET === TESTNET ? 'testnet.' : '';
    return fetch('https://algoindexer.' + preffix + 'algoexplorerapi.io/v2/accounts/' + addr, { method: 'GET' })
        .then(async (res) => res.json())
        .then((data) => {
            if (!data.account || !data.account.assets) {
                return false;
            }

            for (const asset_number in data.account.assets) {
                if (data.account.assets[asset_number]['asset-id'] === asaId) {
                    return true;
                }
            }

            return false;
        })
        .catch((error) => {
            console.log('ERR', error);
            return false;
        });
}
