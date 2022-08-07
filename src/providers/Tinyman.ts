// These are basically rewrites of the Python Tinyman SDK library, so that we can fetch token prices from there

import algosdk from 'algosdk';
import { max, min } from 'ramda';
import { AppId, AssetId } from '../common/store';
import TINYMAN_ASC from './tinyman_asc.json';

// Without bothering the backend all the time (which does algoindexer queries anyway).
type VariableDef = {
    name: string;
    type: string;
    index: number;
    length: number;
};

type ProgramDef = {
    bytecode: string;
    address: string;
    size: number;
    variables: VariableDef[];
    source: string;
};

type SwapType = 'fi' | 'fo';

type CommonPoolArgs = {
    validatorAppId: AppId;
    a1: AssetId;
    a2: AssetId;
    lpTokenId: AssetId;
    assetInAmount: number;
    assetOutAmount: number;
    sender: string;
    suggestedParams: algosdk.SuggestedParams;
};

type SwapTxArgs = CommonPoolArgs & {
    assetInId: AssetId;
    swapType: SwapType;
};

type MintTxArgs = CommonPoolArgs & {
    lpAmount: number;
};

type SignedTxn = {
    blob: Uint8Array;
    txID: string;
};

export type MaybeSignedTx = {
    txn: algosdk.Transaction;
    signedTxn: SignedTxn | null;
};

function toUint8Array(s: string): Uint8Array {
    return new Uint8Array(Buffer.from(s, 'utf-8'));
}

export function getPoolLogicSig(a1: AssetId, a2: AssetId, validatorAppId: AppId): algosdk.LogicSigAccount {
    const program = getProgram(TINYMAN_ASC.contracts.pool_logicsig.logic, {
        validator_app_id: validatorAppId,
        asset_id_1: max(a1, a2),
        asset_id_2: min(a1, a2),
    });
    return new algosdk.LogicSigAccount(program);
}

export function prepareSwapTransactions({
    validatorAppId,
    a1,
    a2,
    lpTokenId,
    assetInId,
    assetInAmount,
    assetOutAmount,
    swapType,
    sender,
    suggestedParams,
}: SwapTxArgs): MaybeSignedTx[] {
    const poolLogicSig = getPoolLogicSig(a1, a2, validatorAppId);
    const poolAddress = poolLogicSig.address();
    const assetOutId = assetInId === a1 ? a2 : a1;
    const feeNote = toUint8Array('fee');
    const validatorArgs = ['swap', swapType].map(toUint8Array);
    const foreignAssets = [a1, a2, lpTokenId].filter((id) => id !== 0);

    let txns = [
        algosdk.makePaymentTxnWithSuggestedParams(sender, poolAddress, 2000, undefined, feeNote, suggestedParams),
        algosdk.makeApplicationNoOpTxn(
            poolAddress,
            suggestedParams,
            validatorAppId,
            validatorArgs,
            [sender],
            undefined,
            foreignAssets
        ),
        assetInId === 0
            ? algosdk.makePaymentTxnWithSuggestedParams(
                  sender,
                  poolAddress,
                  assetInAmount,
                  undefined,
                  undefined,
                  suggestedParams
              )
            : algosdk.makeAssetTransferTxnWithSuggestedParams(
                  sender,
                  poolAddress,
                  undefined,
                  undefined,
                  assetInAmount,
                  undefined,
                  assetInId,
                  suggestedParams
              ),
        assetOutId === 0
            ? algosdk.makePaymentTxnWithSuggestedParams(
                  poolAddress,
                  sender,
                  assetOutAmount,
                  undefined,
                  undefined,
                  suggestedParams
              )
            : algosdk.makeAssetTransferTxnWithSuggestedParams(
                  poolAddress,
                  sender,
                  undefined,
                  undefined,
                  assetOutAmount,
                  undefined,
                  assetOutId,
                  suggestedParams
              ),
    ];

    txns = algosdk.assignGroupID(txns);
    return signWithLogicSig(poolLogicSig, txns);
}

export function prepareMintTransactions({
    validatorAppId,
    a1,
    a2,
    lpTokenId,
    assetInAmount,
    assetOutAmount,
    lpAmount,
    sender,
    suggestedParams,
}: MintTxArgs): MaybeSignedTx[] {
    // To ensure that a1 is not algo
    if (a1 < a2) {
        const a = a2;
        a2 = a1;
        a1 = a;
        const amount = assetOutAmount;
        assetOutAmount = assetInAmount;
        assetInAmount = amount;
    }
    const poolLogicSig = getPoolLogicSig(a1, a2, validatorAppId);
    const poolAddress = poolLogicSig.address();
    const feeNote = toUint8Array('fee');
    const validatorArgs = ['mint'].map(toUint8Array);
    const foreignAssets = [a1, a2, lpTokenId].filter((id) => id !== 0);

    let txns = [
        algosdk.makePaymentTxnWithSuggestedParams(sender, poolAddress, 2000, undefined, feeNote, suggestedParams),
        algosdk.makeApplicationNoOpTxn(
            poolAddress,
            suggestedParams,
            validatorAppId,
            validatorArgs,
            [sender],
            undefined,
            foreignAssets
        ),
        algosdk.makeAssetTransferTxnWithSuggestedParams(
            sender,
            poolAddress,
            undefined,
            undefined,
            assetInAmount,
            undefined,
            a1,
            suggestedParams
        ),
        a2 === 0
            ? algosdk.makePaymentTxnWithSuggestedParams(
                  sender,
                  poolAddress,
                  assetOutAmount,
                  undefined,
                  undefined,
                  suggestedParams
              )
            : algosdk.makeAssetTransferTxnWithSuggestedParams(
                  sender,
                  poolAddress,
                  undefined,
                  undefined,
                  assetOutAmount,
                  undefined,
                  a2,
                  suggestedParams
              ),
        algosdk.makeAssetTransferTxnWithSuggestedParams(
            poolAddress,
            sender,
            undefined,
            undefined,
            lpAmount,
            undefined,
            lpTokenId,
            suggestedParams
        ),
    ];

    txns = algosdk.assignGroupID(txns);
    return signWithLogicSig(poolLogicSig, txns);
}

function signWithLogicSig(lsig: algosdk.LogicSigAccount, txns: algosdk.Transaction[]): MaybeSignedTx[] {
    return txns.map((txn) => {
        const signedTxn =
            algosdk.encodeAddress(txn.from.publicKey) === lsig.address()
                ? algosdk.signLogicSigTransaction(txn, lsig)
                : null;
        return { txn, signedTxn };
    });
}

/**
 * Variable encoding used by Tinyman contracts
 */
function encodeValue(value: number, type: string): Buffer {
    if (type !== 'int') {
        throw new Error('tinymanEncodeVal: only int variables are supported');
    }
    const bytes = [];
    for (;;) {
        const b = value & 0x7f;
        value >>= 7;
        if (value) {
            bytes.push(b | 0x80);
        } else {
            bytes.push(b);
            break;
        }
    }

    return Buffer.from(new Uint8Array(bytes));
}

/**
 * Substitutes variables into Tinyman LogicSig program
 */
export function getProgram(definition: ProgramDef, variables: Record<string, number>): Uint8Array {
    const template = Buffer.from(definition.bytecode, 'base64');
    let buf = Buffer.alloc(template.length * 2);
    const varDefs = definition.variables.sort((a, b) => a.index - b.index);

    let templateIx = 0;
    let bufIx = 0;
    for (const v of varDefs) {
        template.copy(buf, bufIx, templateIx, v.index);
        bufIx += v.index - templateIx;
        templateIx = v.index + v.length;

        const name = v.name.slice('TMPL_'.length).toLowerCase();
        const value = variables[name];
        const encoded = encodeValue(value, v.type);
        encoded.copy(buf, bufIx);
        bufIx += encoded.length;
    }

    if (templateIx < template.length) {
        template.copy(buf, bufIx, templateIx, template.length);
        bufIx += template.length - templateIx;
    }

    if (bufIx < buf.length) {
        buf = buf.slice(0, bufIx);
    }
    return new Uint8Array(buf);
}
