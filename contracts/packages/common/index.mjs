import Configstore from 'configstore'
export const config = new Configstore('cometa')
import {BigNumber} from 'ethers'

import { loadStdlib } from "@reach-sh/stdlib";

export const stdlib = loadStdlib(process.env)

export const fmt = (x) => stdlib.formatCurrency(BigNumber.from(x), 4);
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

export function convertBns(obj) {
  if (obj instanceof BigNumber) {
    return obj.toNumber()
  }
  else if (obj instanceof Array) {
    return obj.map((e) => convertBns(e))
  } else if (typeof obj == "object") {
    const newObj = {}
    for (const p in obj) {
      newObj[p] = convertBns(obj[p])
    }
    return newObj
  } else {
    return obj
  }
}

export async function checkGlobalEvents(eventStream, events) {
  let totalExpectedEvents = events.length

  let ptr = 0

  async function checkPurchases() {
    await eventStream.monitor(({ when, what }) => {
      const eventArgs = convertBns(what)

      const currentEvent = events[ptr]
      expect(eventArgs).toStrictEqual(currentEvent)
      ptr++
      totalExpectedEvents--

      if (totalExpectedEvents == 0) {
        throw "done"
      }
    })
  }

  try {
    await checkPurchases()
  } catch (e) {
    if (e === 'done') {
      // Do nothing
    } else {
      throw e
    }
  }
}

// TODO implement not strict mode (subarray of events)
export async function checkEvents(eventStream, events) {
  let totalExpectedEvents = events.map(e => e.length).reduce((a, b) => a + b)

  const ptrs = playerAccs.map((_) => 0)

  async function checkPurchases() {
    await eventStream.monitor(({ when, what }) => {
      const eventAddr = stdlib.formatAddress(what[0])
      const eventArgs = convertBns(what.slice(1))
      const addrs = playerAccs.map((acc) => acc.networkAccount.addr)
      const playerIndex = addrs.indexOf(eventAddr)

      const playerEvents = events[playerIndex]
      const currentEventIndex = ptrs[playerIndex]
      const currentEvent = playerEvents[currentEventIndex]

      expect(eventArgs).toStrictEqual(currentEvent)
      ptrs[playerIndex]++
      totalExpectedEvents--

      if (totalExpectedEvents == 0) {
        throw "done"
      }
    })
  }

  try {
    await checkPurchases()
  } catch (e) {
    if (e === 'done') {
      // Do nothing
    } else {
      throw e
    }
  }
}
