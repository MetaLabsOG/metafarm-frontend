import { reach } from '../AppContext';

// Copy-pasting select types/methods from Humble SDK to avoid actually importing Humble SDK

// Oh yes, swap computation involves a segment of compiled Reach code. God forgive us.
function backendGetExports(s: any) {
    const stdlib = s.reachStdlib;
    const ctc0 = stdlib.T_UInt;
    const ctc1 = stdlib.T_Struct([
        ['A', ctc0],
        ['B', ctc0],
    ]);
    const ctc2 = stdlib.T_Bool;
    const ctc3 = stdlib.T_Address;
    const ctc4 = stdlib.T_Struct([
        ['protoFee', ctc0],
        ['lpFee', ctc0],
        ['totFee', ctc0],
        ['protoAddr', ctc3],
        ['locked', ctc2],
    ]);
    return {
        computeSwap_: (_v14071: any, _v14072: any, _v14073: any, _v14074: any) => {
            const v14071 = stdlib.protect(ctc2, _v14071, null);
            const v14072 = stdlib.protect(ctc1, _v14072, null);
            const v14073 = stdlib.protect(ctc1, _v14073, null);
            const v14074 = stdlib.protect(ctc4, _v14074, null);

            const v14075 = v14072.A;
            const v14076 = v14072.B;
            const v14077 = v14073.A;
            const v14078 = v14073.B;
            const v14080 = v14074.protoFee;
            const v14081 = v14074.lpFee;
            const v14082 = v14074.totFee;
            const v14083 = stdlib.lt(
                v14080,
                stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '100')
            );
            const v14084 = stdlib.lt(
                v14081,
                stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '100')
            );
            const v14085 = v14083 ? v14084 : false;
            const v14086 = stdlib.add(v14081, v14080);
            const v14087 = stdlib.eq(v14082, v14086);
            const v14088 = v14085 ? v14087 : false;
            const v14089 = stdlib.lt(
                v14082,
                stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '100')
            );
            const v14090 = v14088 ? v14089 : false;
            const v14091 = stdlib.gt(
                v14082,
                stdlib.checkedBigNumberify('./index.rsh:76:15:decimal', stdlib.UInt_max, '0')
            );
            const v14092 = v14090 ? v14091 : false;
            stdlib.assert(v14092, {
                at: '<top level>',
                fs: [],
                msg: null,
                who: 'Module',
            });
            const v14094 = stdlib.gt(
                stdlib.UInt_max,
                stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, '10000')
            );
            stdlib.assert(v14094, {
                at: '275:10:application',
                fs: ['at <top level> call to "computeSwap_" (defined at: <top level>)'],
                msg: null,
                who: 'Module',
            });
            let v14095;
            if (v14071) {
                const v14100 = stdlib.eq(
                    v14076,
                    stdlib.checkedBigNumberify('./index.rsh:262:18:decimal', stdlib.UInt_max, '0')
                );
                stdlib.assert(v14100, {
                    at: './index.rsh:262:10:application',
                    fs: [
                        'at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)',
                        'at <top level> call to "computeSwap_" (defined at: <top level>)',
                    ],
                    msg: null,
                    who: 'Module',
                });
                const v14109 = stdlib.add(v14077, v14075);
                const v14117 = stdlib.muldiv(v14075, v14078, v14109);
                const v14118 = stdlib.cast('UInt', 'UInt256', v14075, false);
                const v14119 = stdlib.cast('UInt', 'UInt256', v14082, false);
                const v14120 = stdlib.sub256(
                    stdlib.checkedBigNumberify(
                        './index.rsh:70:22:decimal',
                        '115792089237316195423570985008687907853269984665640564039457584007913129639935',
                        '10000'
                    ),
                    v14119
                );
                const v14121 = stdlib.mul256(v14118, v14120);
                const v14122 = stdlib.cast('UInt', 'UInt256', v14077, false);
                const v14123 = stdlib.mul256(
                    v14122,
                    stdlib.checkedBigNumberify(
                        './index.rsh:70:22:decimal',
                        '115792089237316195423570985008687907853269984665640564039457584007913129639935',
                        '10000'
                    )
                );
                const v14124 = stdlib.add256(v14123, v14121);
                const v14125 = stdlib.cast('UInt', 'UInt256', v14078, false);
                const v14126 = stdlib.mul256(v14121, v14125);
                const v14127 = stdlib.div256(v14126, v14124);
                const v14128 = stdlib.cast('UInt256', 'UInt', v14127, false);
                const v14133 = stdlib.sub(v14117, v14128);
                const v14137 = stdlib.mul(
                    v14080,
                    stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100')
                );
                const v14138 = stdlib.div(v14137, v14082);
                const v14144 = stdlib.muldiv(
                    v14133,
                    v14138,
                    stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100')
                );
                const v14149 = stdlib.muldiv(
                    v14075,
                    v14080,
                    stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000')
                );
                const v14157 = stdlib.muldiv(v14149, v14078, v14109);
                const v14158 = stdlib.gt(v14157, v14144);
                const v14159 = [v14149, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                const v14160 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14144];
                const v14161 = v14158 ? v14159 : v14160;
                const v14163 = v14161[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '0')];
                const v14164 = v14161[stdlib.checkedBigNumberify('./index.rsh:263:19:array', stdlib.UInt_max, '1')];
                const v14166 = {
                    A: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    B: v14128,
                };
                const v14168 = {
                    A: v14163,
                    B: v14164,
                };
                const v14169 = [v14166, v14168];
                v14095 = v14169;
            } else {
                const v14170 = stdlib.eq(
                    v14075,
                    stdlib.checkedBigNumberify('./index.rsh:267:18:decimal', stdlib.UInt_max, '0')
                );
                stdlib.assert(v14170, {
                    at: './index.rsh:267:10:application',
                    fs: [
                        'at 276:31:application call to "computeSwap" (defined at: ./index.rsh:258:60:function exp)',
                        'at <top level> call to "computeSwap_" (defined at: <top level>)',
                    ],
                    msg: null,
                    who: 'Module',
                });
                const v14179 = stdlib.add(v14078, v14076);
                const v14187 = stdlib.muldiv(v14076, v14077, v14179);
                const v14188 = stdlib.cast('UInt', 'UInt256', v14076, false);
                const v14189 = stdlib.cast('UInt', 'UInt256', v14082, false);
                const v14190 = stdlib.sub256(
                    stdlib.checkedBigNumberify(
                        './index.rsh:70:22:decimal',
                        '115792089237316195423570985008687907853269984665640564039457584007913129639935',
                        '10000'
                    ),
                    v14189
                );
                const v14191 = stdlib.mul256(v14188, v14190);
                const v14192 = stdlib.cast('UInt', 'UInt256', v14078, false);
                const v14193 = stdlib.mul256(
                    v14192,
                    stdlib.checkedBigNumberify(
                        './index.rsh:70:22:decimal',
                        '115792089237316195423570985008687907853269984665640564039457584007913129639935',
                        '10000'
                    )
                );
                const v14194 = stdlib.add256(v14193, v14191);
                const v14195 = stdlib.cast('UInt', 'UInt256', v14077, false);
                const v14196 = stdlib.mul256(v14191, v14195);
                const v14197 = stdlib.div256(v14196, v14194);
                const v14198 = stdlib.cast('UInt256', 'UInt', v14197, false);
                const v14203 = stdlib.sub(v14187, v14198);
                const v14207 = stdlib.mul(
                    v14080,
                    stdlib.checkedBigNumberify('./index.rsh:243:40:decimal', stdlib.UInt_max, '100')
                );
                const v14208 = stdlib.div(v14207, v14082);
                const v14214 = stdlib.muldiv(
                    v14203,
                    v14208,
                    stdlib.checkedBigNumberify('./index.rsh:245:54:decimal', stdlib.UInt_max, '100')
                );
                const v14219 = stdlib.muldiv(
                    v14076,
                    v14080,
                    stdlib.checkedBigNumberify('./index.rsh:247:49:decimal', stdlib.UInt_max, '10000')
                );
                const v14227 = stdlib.muldiv(v14219, v14077, v14179);
                const v14228 = stdlib.gt(v14227, v14214);
                const v14229 = [v14219, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                const v14230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14214];
                const v14231 = v14228 ? v14229 : v14230;
                const v14233 = v14231[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '0')];
                const v14234 = v14231[stdlib.checkedBigNumberify('./index.rsh:268:19:array', stdlib.UInt_max, '1')];
                const v14236 = {
                    A: v14198,
                    B: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                };
                const v14238 = {
                    A: v14234,
                    B: v14233,
                };
                const v14239 = [v14236, v14238];
                v14095 = v14239;
            }
            const v14240 = v14095[stdlib.checkedBigNumberify('276:11:array', stdlib.UInt_max, '0')];
            const v14241 = v14095[stdlib.checkedBigNumberify('276:11:array', stdlib.UInt_max, '1')];
            const v14242 = v14240.A;
            const v14243 = v14240.B;
            const v14244 = v14241.A;
            const v14245 = v14241.B;
            const v14246 = {
                A: v14242,
                B: v14243,
            };
            const v14247 = {
                A: v14244,
                B: v14245,
            };
            const v14248 = [v14246, v14247];

            return v14248;
        },
    };
}

export function getComputeSwap(stdlib: any): ComputeSwapFn {
    return backendGetExports(stdlib).computeSwap_;
}

/** @internal Get protocol fee info for all pools */
export function getFeeInfo(): PoolProtocolInfo {
    const LIQUIDITY_PROVIDER_FEE = 25;
    const HUMBLE_DAO_FEE = 5;
    const TOTAL_FEE = 30;

    return {
        lpFee: LIQUIDITY_PROVIDER_FEE,
        protoFee: HUMBLE_DAO_FEE,
        totFee: TOTAL_FEE,
        locked: false,
    };
}

export type PoolProtocolInfo = {
    locked?: boolean;
    lpFee?: number;
    protoFee: number;
    totFee: number;
};

export type Balances = { A: any; B: any };
export type ComputeSwapFn = {
    (aForB: boolean, normalIn: Balances, poolBalances: Balances, protocolInfo: PoolProtocolInfo): Balances[];
};

export type TokenPair = {
    /** `Token A` id. Use '0' for network token  */
    tokenAId: string | number;
    /** `Token B` id */
    tokenBId: string | number;
};

/** Basic, high-level info about a `Liquidity Pool` */
export type PoolInfo = TokenPair & {
    /** Pool contract address (or Algorand application ID) */
    poolAddress: string | number;
    /** Number of decimal places for `Token A`. Defaults to `6` */
    tokenADecimals?: number;
    /** Number of decimal places for `Token B`. Defaults to `6` */
    tokenBDecimals?: number;
    /** When true, indicates this pool uses a network token (e.g. ALGO or ETH) */
    n2nn?: boolean;
    /** ID for pool liquidity token */
    poolTokenId?: string | number;
};

/** Enhanced `Pool` data */
export type PoolDetails = PoolInfo & {
    /** Balance of user pool LP tokens (amount of user Liquidity in the pool) */
    userLiquidity?: any;
    /** LP Tokens minted for this pool */
    mintedLiquidityTokens?: any;
    /** Balance of Pool `Token A` */
    tokenABalance?: string | number;
    /** Fees accrued from `Token A` */
    tokenAFees?: string | number;
    /** Balance of Pool `Token B` */
    tokenBBalance?: string | number;
    /** Fees accrued from `Token B` */
    tokenBFees?: string | number;
};

/** Options for interacting with a `Pool` contract */
export type ReachTxnOpts = {
    /** (Optional) The pool address targeted for the txn */
    poolAddress?: string | number;
    /** Optional function to call when withdrawal action is complete */
    onComplete?: (...args: any[]) => void;
    /** Optional function to call as the transaction progresses (e.g. for UI notifications) */
    onProgress?: (msg: string) => void;
};

export type SwapInfo = TokenPair & {
    amountA?: any;
    amountB?: any;
    tokenIn?: string | number;
};

export type SwapTxnOpts = {
    swap: SwapInfo;
    pool?: PoolDetails;
} & ReachTxnOpts;

/** @internal  */
function parseNetworkDecimals(decimals?: number): number {
    return decimals === undefined || isNaN(Number(decimals)) ? 6 : decimals;
}

function trailing0s(val: string) {
    return val.replace(/0*$/, '').replace(/\.$/, '');
}

function trimDecimals(val: string) {
    if (val.replace(/0*/, '') === '') return '';
    return `.${trailing0s(val)}`;
}

function abbrevNumber(numOfGroups: number) {
    if (Number.isNaN(numOfGroups) || !numOfGroups) return '';
    const ab = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Si', 'Se', 'O', 'N', 'D'];
    if (numOfGroups >= ab.length) return '!';
    return ab[numOfGroups - 1];
}

/**
 * @internal
 * Format arbitrarily large numbers or number strings. (e.g. `fn(1000)` -> `1K` ) */
export function formatNumberShort(val: any, round = 2) {
    if (isNaN(Number(val))) return '';

    const parts = val.toString().split('.');
    const ints = parts[0].length;
    if (!ints) return Number(val).toFixed(3);

    // Get number of vals before first 'comma'
    const abbrLength = ints % 3 || ints;
    const abbr = parts[0].substring(0, abbrLength) || parts[0];
    const rest = parts[0].substring(abbrLength);
    const restDecs = rest.substring(0, round);
    const grouper = new RegExp(/[0-9]{3}/g);
    const groups = [];
    const i = rest.matchAll(grouper);
    let n = i.next();
    if (!n.done) {
        do {
            groups.push(n.value[0]);
            n = i.next();
        } while (!n.done);
    }

    let decimals = trimDecimals(restDecs);
    if (abbrLength === ints) decimals = trimDecimals(parts[1] || restDecs);
    const out = `${abbr}${decimals}${abbrevNumber(groups.length)}`;

    return out;
}

/**
 * @reach_helper Optionally-abbreviated currency formatter (e.g.
 * `fn(1000)` -> `1000` || `1K` ). Expects `amt` to be in atomic unit for network */
export function formatCurrency(amt: any, decs?: number, abbr = false): string {
    const { formatWithDecimals } = reach;
    const decimals = parseNetworkDecimals(Number(decs));
    const reachFmt = formatWithDecimals(amt, decimals);
    return abbr ? formatNumberShort(reachFmt) : reachFmt;
}

/** @reach_helper Convert `val` to atomic units for the current network */
export function parseCurrency(val: any, dec?: number) {
    const decimals = parseNetworkDecimals(Number(dec));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore bad typing in reach
    return reach.parseCurrency(val, decimals);
}

/** @internal checks the number amount and prevents any decimals being added than the explicitely described max decimal */
function getValueWithMaxDecimals(original: string, decimals?: number) {
    const MAX_DECIMALS = 5;
    const decs = decimals === undefined || decimals === null ? MAX_DECIMALS : decimals;
    if (!original) return '0';
    const decIndex = original.indexOf('.');
    let value = original.toString();
    if (value.includes('e')) {
        const exPlaces = value.slice(value.indexOf('e') + 2);
        // if the exponential value (lets say 7 in 3.0e-7) is higher than the decimal
        // value for the coin (6), then the fee is zero since it's calculated amount
        // is too small for the coins precision
        if (decs < Number(exPlaces)) return '0';
        return decs;
    }

    if (decIndex > -1) {
        value = value.substring(0, decIndex) + value.substring(decIndex, decIndex + decs + 1);
    }

    if (decs === 0 && value) value = Math.floor(Number(value)).toString();
    return value;
}

/** @internal Takes a `SwapInfo` object and orders token A/B to match pool */
function alignSwapInfo(swap: SwapInfo, pool: PoolInfo): [s: SwapInfo, aligned: boolean] {
    const { tokenAId } = pool;
    if (!swap.tokenAId || !tokenAId) return [swap, false];

    if (swap.tokenAId.toString() === tokenAId.toString()) {
        return [{ ...swap, tokenIn: swap.tokenAId }, true];
    }

    return [
        {
            tokenAId: swap.tokenBId,
            tokenBId: swap.tokenAId,
            amountA: swap.amountB,
            amountB: swap.amountA,
            tokenIn: swap.tokenBId,
        },
        false,
    ];
}

/**
 * Compares the size of expected swap output to the value of the sa,e
 * in a "ideal"/balanced pool state (i.e. if `k` value doesn't change).
 * @param amtA Input amount for swap
 * @param opts Swap options
 * @returns Price impact (percentage) as a string
 */
export function calculatePriceImpact(amtA: any, opts: SwapTxnOpts) {
    if (!amtA) return '0';
    const { pool, swap } = opts;
    if (!pool) return '0';
    const { tokenABalance, tokenBBalance } = pool;
    let balA = Number(tokenABalance);
    let balB = Number(tokenBBalance);
    const aligned = alignSwapInfo(swap, pool)[1];
    if (!aligned) {
        balA = Number(tokenBBalance);
        balB = Number(tokenABalance);
    }

    if (!balA || !balB) return '0';

    const fmtA = Number(amtA);
    const idealAmtOut = (balB / balA) * fmtA;
    const amtOutWithPriceImpact = balB - (balA / (balA + fmtA)) * balB;
    const priceImpact = (idealAmtOut / amtOutWithPriceImpact - 1) * 100;
    return trailing0s(priceImpact.toFixed(2));
}

function adjustForPriceImpact(amtA: any, opts: SwapTxnOpts) {
    const impactPct = Number(calculatePriceImpact(amtA, opts));
    const impact = ((pct) => {
        switch (true) {
            case pct > 10000:
                return pct / 100000;
            case pct > 1000:
                return pct / 10000;
            case pct > 100:
                return pct / 1000;
            default:
                return pct / 100;
        }
    })(impactPct);
    const formula = 1 / (1 - impact);
    if (Number.isNaN(amtA) || Number.isNaN(formula)) return '';
    const adjusted = Number(amtA) * formula;
    return adjusted;
}

/**
 * Given an output amount, calculate the expected `amount B` output.
 */
function swapTokenAToB(amountIn: any, pool: PoolDetails): any {
    try {
        const fmtIn = Number(amountIn);
        if (fmtIn === 0) return '';

        const computeSwap = getComputeSwap(reach);
        const { tokenAId, tokenADecimals, tokenBId, tokenBDecimals, tokenABalance: balA, tokenBBalance: balB } = pool;

        if ([tokenAId, tokenBId].every(Boolean)) {
            const input = { A: parseCurrency(fmtIn, tokenADecimals), B: 0 };
            const poolBals = {
                // A: parseCurrency(Number(balA) + fmtIn, tokenADecimals),
                A: parseCurrency(balA, tokenADecimals),
                B: parseCurrency(balB, tokenBDecimals),
            };
            const [outBals] = computeSwap(true, input, poolBals, getFeeInfo());
            return formatCurrency(outBals.B, tokenBDecimals);
        }

        return '';
    } catch (err) {
        console.log('swapTokenAToB Error:\n', err);
        return '';
    }
}

/**
 * Given an output amount, calculate the expected `amount A` output.
 */
function swapTokenBToA(amtOut: any, pool: PoolDetails): any {
    try {
        const fmtOut = Number(amtOut);
        if (fmtOut === 0) return '';
        const computeSwap = getComputeSwap(reach);
        const { tokenADecimals, tokenBDecimals, tokenABalance: balA, tokenBBalance: balB } = pool;

        if ([tokenADecimals, tokenBDecimals].every((dec) => dec !== undefined)) {
            const input = { A: 0, B: parseCurrency(amtOut, tokenBDecimals) };
            const poolBals = {
                A: parseCurrency(balA, tokenADecimals),
                B: parseCurrency(balB, tokenBDecimals),
                // B: parseCurrency(Number(balB) + fmtOut, tokenBDecimals),
            };
            const [outBals] = computeSwap(false, input, poolBals, getFeeInfo());
            return reach.formatCurrency(outBals.A, tokenADecimals ?? 6);
        }
        return '';
    } catch (err) {
        console.log('swapTokenBToA Error:\n', err);
        return '';
    }
}

/**
 * @internal
 * Given an output amount, calculate the expected input. This function
 * calls `swapTokenBToA` if a possible overflow is detected (i.e. `amtOut`
 * is greater than the balance of `amtOut` token in the pool)
 */
const reverseTokenBToA = (amtOut: any, pool: PoolDetails, inputsAligned = false) => {
    if (!amtOut || Number(amtOut) === 0) return 0;

    const { gt, bigNumberify, sub, div } = reach;
    const { tokenADecimals = 6, tokenBDecimals = 6, tokenABalance, tokenBBalance } = pool;

    if (!(tokenABalance && tokenBBalance)) return 0;

    // Assume inverted (and align if not)
    const decs = [tokenBDecimals, tokenADecimals];
    const balances = [tokenBBalance, tokenABalance];
    if (inputsAligned) {
        decs.reverse();
        balances.reverse();
    }

    const [decimals1, decimals2] = decs;
    const reserveA = parseCurrency(balances[0], decimals1);
    const reserveB = parseCurrency(balances[1], decimals2);
    const expected = parseCurrency(amtOut, decimals2);

    // Check overflow (low liquidity) and use alternate calc since
    // results don't matter (UI will prevent swap)
    if (gt(expected, reserveB)) return swapTokenBToA(amtOut, pool);

    const num = reserveA.mul(expected).mul(bigNumberify(10000));
    const den = sub(reserveB, expected).mul(bigNumberify(9975));
    const input = div(num, den).add(1);
    return reach.formatWithDecimals(input, decimals1);
};

/**
 * Calculate the result of a token swap. Order of tokens may vary, as
 * long as all required arguments are passed.
 * @param opts options
 * @param opts.swap Swap options
 * @param opts.swap.amountA input amount
 * @param opts.swap.tokenAId input token ID
 * @param opts.swap.amountB (expected) output amount
 * @param opts.swap.tokenBId output token ID
 * @param opts.pool Swap target Pool data
 */
export function calculateTokenSwap(opts: SwapTxnOpts): SwapInfo {
    // Exit if one token is missing
    const { pool, swap } = opts;
    const { amountA, amountB, tokenAId, tokenBId } = swap;
    if (!opts || (!tokenAId && !tokenBId) || !pool) return swap;

    const decimals = [pool.tokenADecimals, pool.tokenBDecimals];
    const inputIsAligned = alignSwapInfo(swap, pool)[1];
    if (!inputIsAligned) decimals.reverse();

    const swapped = { ...swap };
    if (amountB && !amountA) {
        // Convert Token B to Token A | user typed into field "B"
        const expectedIn = reverseTokenBToA(amountB, pool, inputIsAligned);
        swapped.amountA = adjustForPriceImpact(expectedIn, opts);
    } else {
        // Else convert Token A to Token B
        swapped.amountB = inputIsAligned ? swapTokenAToB(amountA, pool) : swapTokenBToA(amountA, pool);
    }

    const amtB = swapped.amountB.toString();
    swapped.amountB = getValueWithMaxDecimals(amtB, decimals[1]);
    swapped.tokenIn = tokenAId;
    return swapped;
}
