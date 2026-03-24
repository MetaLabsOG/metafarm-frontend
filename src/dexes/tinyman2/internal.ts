// These are basically rewrites of the Python Tinyman SDK library, so that we can fetch token prices from there

import { Buffer } from 'buffer';
import algosdk, { encodeUint64 } from 'algosdk';
import { AppId, AssetId } from '../../common/store/types';
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
    assetOutAmount: number;
    sender: string;
    suggestedParams: algosdk.SuggestedParams;
};

type SwapTxArgs = CommonPoolArgs & {
    assetInId: AssetId;
    swapType: SwapType;
    assetInAmount: number;
};

type MintTxArgs = CommonPoolArgs & {
    lpAmount: number;
    assetInAmount: number;
};

type RedeemTxArgs = CommonPoolArgs & {
    assetOutId: AssetId;
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
    return new Uint8Array(Buffer.from(s, 'utf8'));
}

export function getPoolLogicSig(a1: AssetId, a2: AssetId, validatorAppId: AppId): algosdk.LogicSigAccount {
    const [asset1ID, asset2ID] = [Math.max(a1, a2), Math.min(a1, a2)];

    // Encode required values, and convert them to byte arrays
    const encodedByteArrays = {
        bytes: Array.from(Buffer.from(TINYMAN_ASC.contracts.pool_logicsig.logic.bytecode, 'base64')),
        validatorAppId: Array.from(encodeUint64(validatorAppId)),
        asset1ID: Array.from(encodeUint64(asset1ID)),
        asset2ID: Array.from(encodeUint64(asset2ID)),
    };

    // Concat byte arrays (we're required to insert validatorAppID and assetIDs in the middle of the byte array)
    const finalProgramArray = [
        ...encodedByteArrays.bytes.slice(0, 3),
        ...encodedByteArrays.validatorAppId.slice(0, 8),
        ...encodedByteArrays.asset1ID.slice(0, 8),
        ...encodedByteArrays.asset2ID.slice(0, 8),
        ...encodedByteArrays.bytes.slice(27),
    ];

    // Finally, create the logic signature account using the final byte array
    return new algosdk.LogicSigAccount(new Uint8Array(finalProgramArray));
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
    const swapTypeArg = swapType === 'fi' ? 'fixed-input' : 'fixed-output';
    const validatorArgs: Uint8Array[] = [
        ...['swap', swapTypeArg].map(toUint8Array),
        encodeUint64(assetOutAmount),  // minimum output (slippage protection)
    ];
    const foreignAssets = [a1, a2].filter((id) => id !== 0);
    // AppCall fee covers itself + 1 inner txn (output transfer) via fee pooling
    const appCallParams = { ...suggestedParams, fee: suggestedParams.minFee * 2, flatFee: true };

    let txns = [
        // Txn 0: Input asset transfer (must precede AppCall — validator uses GroupIndex-1)
        assetInId === 0
            ? algosdk.makePaymentTxnWithSuggestedParams(
                  sender, poolAddress, assetInAmount, undefined, undefined, suggestedParams
              )
            : algosdk.makeAssetTransferTxnWithSuggestedParams(
                  sender, poolAddress, undefined, undefined, assetInAmount, undefined, assetInId, suggestedParams
              ),
        // Txn 1: AppCall — last in group, output sent via inner transaction
        algosdk.makeApplicationNoOpTxn(
            sender,
            appCallParams,
            validatorAppId,
            validatorArgs,
            [poolAddress],
            undefined,
            foreignAssets
        ),
    ];

    txns = algosdk.assignGroupID(txns);
    return txns.map((txn) => ({ txn, signedTxn: null }));
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
    // Ensure a1 > a2 (a1 is the non-ALGO asset)
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
    const validatorArgs: Uint8Array[] = [
        ...['add_liquidity', 'flexible'].map(toUint8Array),
        encodeUint64(lpAmount),  // minimum LP tokens (slippage protection)
    ];
    const foreignAssets = [a1, a2, lpTokenId].filter((id) => id !== 0);
    // AppCall fee covers itself + 2 inner txns (LP mint + change return) via fee pooling
    const appCallParams = { ...suggestedParams, fee: suggestedParams.minFee * 3, flatFee: true };

    let txns = [
        // Txn 0: Asset 1 transfer (must precede AppCall — validator uses GroupIndex-2)
        algosdk.makeAssetTransferTxnWithSuggestedParams(
            sender, poolAddress, undefined, undefined, assetInAmount, undefined, a1, suggestedParams
        ),
        // Txn 1: Asset 2 transfer (validator uses GroupIndex-1)
        a2 === 0
            ? algosdk.makePaymentTxnWithSuggestedParams(
                  sender, poolAddress, assetOutAmount, undefined, undefined, suggestedParams
              )
            : algosdk.makeAssetTransferTxnWithSuggestedParams(
                  sender, poolAddress, undefined, undefined, assetOutAmount, undefined, a2, suggestedParams
              ),
        // Txn 2: AppCall — last in group, LP tokens sent via inner transaction
        algosdk.makeApplicationNoOpTxn(
            sender,
            appCallParams,
            validatorAppId,
            validatorArgs,
            [poolAddress],
            undefined,
            foreignAssets
        ),
    ];

    txns = algosdk.assignGroupID(txns);
    return txns.map((txn) => ({ txn, signedTxn: null }));
}

export function prepareRedeemTransactions({
    validatorAppId,
    a1,
    a2,
    lpTokenId,
    assetOutId,
    assetOutAmount,
    sender,
    suggestedParams,
}: RedeemTxArgs): MaybeSignedTx[] {
    const poolLogicSig = getPoolLogicSig(a1, a2, validatorAppId);
    const poolAddress = poolLogicSig.address();
    const feeNote = toUint8Array('fee');
    const validatorArgs = ['redeem'].map(toUint8Array);
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
