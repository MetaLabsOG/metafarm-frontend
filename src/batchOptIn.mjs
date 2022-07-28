import algosdk, { IntDecoding, waitForConfirmation } from 'algosdk';
import buffer from 'buffer';
import { ALGONET, TESTNET } from './AppContext.ts';
import { withAlgodEncoding } from './common/lib.ts';

const { Buffer } = buffer;

/**
 * Opt-ins to a few asaIds in one go.
 * @param addr wallet address to sign transaction from. Usually should be address of connected user wallet.
 * @param asaIds ids to opt-in. Should be not empty and not more that 16.
 * @returns always true. It's a hack for reach smart contracts. TODO
 */
export async function batchOptIn(reach, addr, asaIds, waitConfirmation = true) {
    if (asaIds.length === 0) {
        throw Error("Empty opt-in asa id list");
    }
    if (asaIds.length > 16) {
        throw Error(`Too many asa ids in the list. Should be at most 16 but is: ${asaIds}`)
    }

    const p = await reach.getProvider();
    const algodClient = p.algodClient;
    const ps = await algodClient.getTransactionParams().do();
    const revocationTarget = undefined;
    const CloseRemainderTo = undefined;
    const note = undefined;
    const amount = 0;

    const txns = asaIds.map(id =>
        algosdk.makeAssetTransferTxnWithSuggestedParams(
            addr, addr, CloseRemainderTo, revocationTarget, amount, note, id, ps
        )
    );
    algosdk.assignGroupID(txns);

    const reachTxns = txns.map(txn => ({
        txn: Buffer.from(txn.toByte()).toString("base64")
    }));

    let optedIn = false
    while (!optedIn) {
        try {
            await p.signAndPostTxns(reachTxns);
            optedIn = true
        } catch (e) {
            console.log("Opt in failed... Trying again.")
        }
    }
    let txId = txns[0].txID().toString();
    if (waitConfirmation) {
        console.log("Waiting for confirmation of opt-in")
        await withAlgodEncoding(algodClient, IntDecoding.DEFAULT, (algodClient) => {
            return waitForConfirmation(algodClient, txId, 4);
        });
        console.log("Confirmed")
    }
    return true; // we don't need this but have to send something to make contract wait
}

export async function multiBatchOptIn(addr) {
    // const { BATCH_IDS: asaIds } = await import('./bigbrains_100');
    const asaIds = [];
    const BATCH_SIZE = 16;
    const asaIdsCount = asaIds.length;
    console.log(asaIdsCount);
    for (let i = 0; i < asaIdsCount; i += BATCH_SIZE) {
        const batch = asaIds.slice(i, Math.min(asaIdsCount, i + BATCH_SIZE));
        console.log(i, Math.min(asaIdsCount, i + BATCH_SIZE));
        await batchOptIn(addr, batch, false);
    }
}

export function checkOptIn(addr, asaId) {
    const preffix = (ALGONET === TESTNET) ? "testnet." : "";
    return (
        fetch("https://algoindexer." + preffix + "algoexplorerapi.io/v2/accounts/" + addr, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            if (!data.account || !data.account.assets) {
                return false;
            }
            for (let asset_num in data.account.assets) {
                if (data.account.assets[asset_num]['asset-id'] === asaId) {
                    return true;
                }
            }
            return false;
        }).catch(err => {
            console.log('ERR', err);
            return false;
        })
    );
}