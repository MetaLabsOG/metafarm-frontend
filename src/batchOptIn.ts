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
        await withAlgodEncoding(algodClient, IntDecoding.DEFAULT, async (algodClient) => {
            return waitForConfirmation(algodClient, txId, 4);
        });
    }

    return true; // We don't need this but have to send something to make contract wait
}

export async function checkOptIn(addr: Address, asaId: AssetId) {
    const prefix = ALGONET === TESTNET ? 'testnet' : 'mainnet';
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    return fetch(`https://${prefix}-idx.algonode.cloud/v2/accounts/${addr}`, {
        method: 'GET',
        signal: controller.signal,
    })
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
        .catch(() => false)
        .finally(() => clearTimeout(timeoutId));
}
