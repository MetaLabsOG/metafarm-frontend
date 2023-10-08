import { useEvent, useUnit } from 'effector-react';
import { useState } from 'react';
import algosdk, { IntDecoding, waitForConfirmation } from 'algosdk';

import { reach } from '../../AppContext';
import { withAlgodEncoding } from '../../common/lib';
import { $accountInfo } from '../../common/store';

import { SERVER_URL } from '../Chess';
import { $txAuthResult, addEventLog, setGlobalStage, setTxAuthResult } from '../store';

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

const LoginScreen: React.FC = () => {
    const accountInfo = useUnit($accountInfo);
    const [noteToPost, setNoteToPost] = useState<string>('');
    const [authTxId, setAuthTxId] = useState<string>('');

    const logEvent = useUnit(addEventLog);

    const setTxAuthResultEvent = useEvent(setTxAuthResult);
    const setGlobalStageEvent = useEvent(setGlobalStage);

    const handleGetAuthId = async () => {
        try {
            const addr = accountInfo?.address;
            const response = await fetch(SERVER_URL + '/auth/challenge?algo_address=' + addr, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                },
            });
            const data = await response.json();
            logEvent({ message: data.challenge_code });

            setNoteToPost(data.challenge_code);
        } catch (error) {
            console.error('Handle get battle error:', error);
        }
    };

    const handleOnchainAuth = async () => {
        try {
            // TODO: change before release
            // const txAuthResult = await postTxWithNote(accountInfo?.address, noteToPost);
            const txAuthResult = 'IDoNotGiveAFuck420';

            setAuthTxId(txAuthResult);
            logEvent({ message: txAuthResult });
        } catch (error) {
            console.error('Handle onchain auth error:', error);
        }
    };

    const handleCheckOnchainAuth = async () => {
        try {
            const addr = accountInfo?.address;
            console.log(addr);
            const response = await fetch(
                SERVER_URL + '/auth/token?algo_address=' + addr + '&challenge_txid=' + authTxId,
                {
                    method: 'POST',
                    headers: {
                        accept: 'application/json',
                    },
                }
            );
            const data = await response.json();
            logEvent({ message: data.access_token });
            setTxAuthResultEvent(data.access_token);
            setGlobalStageEvent('Dashboard');
        } catch (error) {
            console.error('Handle check onchain auth error:', error);
        }
    };

    return (
        <div className="middle-panel flex flex-col items-center justify-center space-y-10">
            <button className="btn btn-primary btn-lg" onClick={handleGetAuthId}>
                GET AUTH ID
            </button>
            <button className="btn btn-primary btn-lg" onClick={handleOnchainAuth}>
                SIGN AUTH TX
            </button>
            <button className="btn btn-primary btn-lg" onClick={handleCheckOnchainAuth}>
                AUTH TOKEN
            </button>
        </div>
    );
};

export default LoginScreen;
