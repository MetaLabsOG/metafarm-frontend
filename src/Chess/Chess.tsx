import { useUnit } from 'effector-react';
import React, { useState, useEffect } from 'react';
import algosdk, { IntDecoding, waitForConfirmation } from 'algosdk';

import { $accountInfo } from '../common/store';
import { reach } from '../AppContext';
import { withAlgodEncoding } from '../common/lib';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import DetailedInfoPanel from './DetailedInfoPanel';
import NavigationPanel from './Navigation/NavigationPanel';
import LogPanel from './LogPanel';

export const SERVER_URL = 'http://137.184.11.123:5420';

async function postTxWithNote(addr: string, note: string) {
    const p = await reach.getProvider();
    const { algodClient } = p;
    const sp = await algodClient.getTransactionParams().do();
    const CloseRemainderTo = undefined;
    const amount = 1;
    const enc = new TextEncoder();
    const noteEncoded = enc.encode(note);

    const txns = [algosdk.makePaymentTxnWithSuggestedParams(addr, addr, amount, CloseRemainderTo, noteEncoded, sp)];
    algosdk.assignGroupID(txns);

    const reachTxns = txns.map((txn) => ({
        txn: Buffer.from(txn.toByte()).toString('base64'),
    }));

    await p.signAndPostTxns(reachTxns);

    const txId = txns[0].txID().toString();
    console.log('Waiting for confirmation of on-chain tx');
    const result = await withAlgodEncoding(algodClient, IntDecoding.DEFAULT, async (algodClient) => {
        return waitForConfirmation(algodClient, txId, 4);
    });
    console.log('Confirmed tx with note ' + note);
    console.log('Result tx id: ', txId);
    return txId;
}

export function Chess() {
    return (
        <div data-theme="forest" className="h-screen p-4 flex flex-col">
            <h1 className="text-3xl font-bold mb-4">Metachess</h1>
            <div className="main-layout grid grid-cols-3 gap-4 flex-1">
                <DetailedInfoPanel />
                <NavigationPanel />
                <LogPanel />
            </div>
        </div>
    );
}

// http://137.184.11.123:5420/battle/new&auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJfaWQiOiIwYjA1YzZmZC0yMjFlLTRmMDgtYjMyMC0yZWVkNDZjYTc3MzQiLCJ0aW1lc3RhbXAiOjE2OTM3NzExMTN9.6GUN6kr69MvTbeeWHoHvMQZo7xPhX9Dy9SXojm4Q2Ps
