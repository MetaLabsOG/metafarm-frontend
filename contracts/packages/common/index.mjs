import Configstore from 'configstore'
export const config = new Configstore('cometa')

import { loadStdlib} from "@reach-sh/stdlib";

export const stdlib = loadStdlib(process.env)

export const fmt = (x) => stdlib.formatCurrency(x, 4);
export const getBalance = async (acc) => fmt(await stdlib.balanceOf(acc));
export const isBigNumber = (n) => n.hasOwnProperty("_isBigNumber")

export const parseBigNumber = (bn) => {
    const hex = bn._hex.slice(2);
    return parseInt(hex, 16);
}

export const printObjectWithBigNumbers = (object) => {
    if (object == null) {
        return null;
    }
    for (const p in object) {
        const val = object[p];
        if (isBigNumber(val)) {
            console.log(p, parseBigNumber(val));
        } else {
            console.log(p, val);
        }
    }
}

export const call = async (f) => {
    let res = undefined
    try {
        res = await f()
    } catch (e) {
        res = [`err`, e]
    }
    console.log(`Result:\n`)
    printObjectWithBigNumbers(res)
    console.log('\n')
}

export const getContractId = async (ctc) => {
    const info = await ctc.getInfo()
    if (isBigNumber(info)) {
        return parseBigNumber(info)
    } else {
        return JSON.stringify(info)
    }
}

/* TODO
  Mints a token with given params. Additionally opt-ins into this token from all given accounts if needed.
*/
export const mintToken = async (tokenParams, accounts) => {

}

export function commonFunction() {
    console.log("common function")
}