import { useUnit } from 'effector-react';
import React, { useState, useEffect } from 'react';
import algosdk, { IntDecoding, waitForConfirmation } from 'algosdk';

import { $accountInfo } from '../common/store';
import MetapunksInfo from '../Metapunks.json';
import { reach } from '../AppContext';
import { withAlgodEncoding } from '../common/lib';

import BattleDisplay, { BattleData } from './BattleDisplay';
import "daisyui/dist/full.css";
import MidBattleDisplay, { MidBattleData } from './MidBattleDisplay';
import EndBattleDisplay, { EndBattleData } from './EndBattleDisplay';


export interface Metapunk {
    asset_id: number;
    punk_id: string | number;
    name: string;
    unit_name: string;
    main_url: string;
    model_3d_url: string;
    face_url: string;
    side_url: string;
    attributes: { trait_type: string; value: string }[];
}

export const METAPUNKS_INFO: Record<string, Metapunk> = MetapunksInfo;

const SERVER_URL = 'http://137.184.11.123:5420';

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
    const accountInfo = useUnit($accountInfo);
    const [metapunksIds, setMetapunksIds] = useState<Metapunk[]>([]);

    const [noteToPost, setNoteToPost] = useState<string>('');
    const [authTxId, setAuthTxId] = useState<string>('');
    const [txAuthResult, setTxAuthResult] = useState<string>(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJfaWQiOiIwYjA1YzZmZC0yMjFlLTRmMDgtYjMyMC0yZWVkNDZjYTc3MzQiLCJ0aW1lc3RhbXAiOjE2OTM4NTA5OTN9.EeIRInujiDUi38WHLbG9ZIU5x6RolSAVkM7S7mnme14'
    );
    const [battleData, setBattleData] = useState<BattleData | null>(null);
    const [midBattleData, setMidBattleData] = useState<MidBattleData | null>(null);
    const [endBattleData, setEndBattleData] = useState<EndBattleData | null>(null);
    const [selectedHeroes, setSelectedHeroes] = useState<string[]>([]);
    const [selectedBuff, setSelectedBuff] = useState<string | null>(null);

    const [selectedP1Command, setSelectedP1Command] = useState<string>('');
    const [selectedP2Command, setSelectedP2Command] = useState<string>('');

    useEffect(() => {
        if (!accountInfo) {
            return;
        }

        const accountAssetsIds = accountInfo.assets.map((asset: any) => asset['asset-id']);
        const metapunks = accountAssetsIds
            .filter((asset_id: any) => METAPUNKS_INFO[asset_id.toString()])
            .map((asset_id: any) => METAPUNKS_INFO[asset_id]);
        console.log(metapunks);
        setMetapunksIds(metapunks);
    }, [accountInfo]);

    const handleGetBattleId = async () => {
        try {
            const addr = accountInfo?.address;
            console.log(addr);
            const response = await fetch(SERVER_URL + '/auth/challenge?algo_address=' + addr, {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    accept: 'application/json',
                },
            });
            const data = await response.json();
            setNoteToPost(data);
        } catch (error) {
            console.error('Handle get battle error:', error);
        }
    };

    const handleOnchainAuth = async () => {
        try {
            const txAuthResult = await postTxWithNote(accountInfo?.address, noteToPost);
            setAuthTxId(txAuthResult);
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
            console.log('Server response:', data);
            setTxAuthResult(data);
        } catch (error) {
            console.error('Handle check onchain auth error:', error);
        }
    };

    const handleNewBattle = async () => {
        try {
            const response = await fetch(SERVER_URL + '/battle/new' + '?auth_token=' + txAuthResult, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                },
            });
            const data = await response.json();
            console.log('Server response:', data);
            setBattleData(data);
        } catch (error) {
            console.error('Handle new battle error:', error);
        }
    };
    const [isStartBattleDisabled, setIsStartBattleDisabled] = useState(false);
    const handleStartButton = async () => {
        if (isStartBattleDisabled) {
            // TODO: toast
            console.log("Select 5 heroes!");
        }
        try {
            const fullSelectedHeroes =
                battleData?.draft.heroes.filter((hero) => selectedHeroes.includes(hero.name)) || [];

            console.log("fullSelectedHeroes", fullSelectedHeroes)
            const url = SERVER_URL +
                    '/battle/start' +
                    '?auth_token=' + txAuthResult +
                    '&battle_id=' + battleData?.battle_id +
                    '&chosen_buff=' +  selectedBuff;
            console.log("going to fetch:", url)
            console.log("with body:", JSON.stringify(fullSelectedHeroes))
                  
            const response = await fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        accept: 'application/json',
                    },
                    body: JSON.stringify(fullSelectedHeroes),
                }
            );
            console.log("fetched")
            const data = await response.json();
            setMidBattleData(data);
            console.log('Battle start server response:', data);
            // setBattleData(data);
        } catch (error) {
            console.error('Handle start battle error:', error);
        }
    };

    const handleFinishButton = async () => {
        try {
            const response = await fetch(
                SERVER_URL +
                    '/battle/end' +
                    '?auth_token=' +
                    txAuthResult +
                    '&battle_id=' +
                    battleData?.battle_id +
                    '&chosen_command=' + selectedP1Command,
                {
                    method: 'POST',
                    headers: {
                        accept: 'application/json',
                    },
                }
            );
            const data = await response.json();
            console.log('Battle finish server response:', data);
            setEndBattleData(data);
        } catch (error) {
            console.error('Handle finish battle error:', error);
        }
    };



    return (
        <div data-theme="forest">
            <h1>Metachess</h1>
            <h2>Play the game bro</h2>
            <button className='btn btn-primary'
                style={{
                    width: 300,
                    height: 50,
                    fontSize: 20,
                    marginBottom: 20,
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                onClick={handleGetBattleId}
            >GET AUTH ID</button>
            <div>{noteToPost && <p>{noteToPost}</p>}</div>
            <button className='btn btn-primary'
                style={{
                    width: 300,
                    height: 50,
                    fontSize: 20,
                    marginBottom: 20,
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                onClick={handleOnchainAuth}
            > SIGN AUTH TX</button>
            <div>{authTxId && <p>{authTxId}</p>}</div>
            <button className='btn btn-primary'
                style={{
                    width: 300,
                    height: 50,
                    fontSize: 20,
                    marginBottom: 20,
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                onClick={handleCheckOnchainAuth}
            > AUTH TOKEN</button>
            {/* <div style={{ maxWidth: "500px"}}> {txAuthResult && <p>{txAuthResult}</p>}</div> */}
            <button className='btn btn-primary'
                style={{
                    width: 300,
                    height: 50,
                    fontSize: 20,
                    marginBottom: 20,
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                onClick={handleNewBattle}
            > NEW BATTLE</button>

            <div>
                {battleData ? (
                    <BattleDisplay
                        battleData={battleData}
                        selectedHeroes={selectedHeroes}
                        setSelectedHeroes={setSelectedHeroes}
                        selectedBuff={selectedBuff}
                        setSelectedBuff={setSelectedBuff}
                        setIsStartBattleDisabled={setIsStartBattleDisabled}
                    />
                ) : (
                    'Loading...'
                )}
                <button className='btn btn-primary'
                    style={{
                        width: 300,
                        height: 50,
                        fontSize: 20,
                        marginBottom: 20,
                        textDecoration: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    disabled={isStartBattleDisabled}
                    onClick={handleStartButton}
                > START BATTLE</button>
                {midBattleData ? (
                    <MidBattleDisplay
                        data={midBattleData}
                        selectedP1Command={selectedP1Command}
                        setSelectedP1Command={setSelectedP1Command}
                        selectedP2Command={selectedP2Command}
                        setSelectedP2Command={setSelectedP2Command}
                    />
                ) : (
                    'Loading...'
                )}
                
                <button className='btn btn-primary'
                    style={{
                        width: 300,
                        height: 50,
                        fontSize: 20,
                        marginBottom: 20,
                        textDecoration: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    onClick={handleFinishButton}
                >FINISH BATTLE</button>
                {endBattleData ? (
                    <EndBattleDisplay
                        data={endBattleData}
                    />
                ) : (
                    'Loading...'
                )}
                
                
            </div>
        </div>
    );
}

// http://137.184.11.123:5420/battle/new&auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJfaWQiOiIwYjA1YzZmZC0yMjFlLTRmMDgtYjMyMC0yZWVkNDZjYTc3MzQiLCJ0aW1lc3RhbXAiOjE2OTM3NzExMTN9.6GUN6kr69MvTbeeWHoHvMQZo7xPhX9Dy9SXojm4Q2Ps
