import { BigNumber } from "ethers";
import log from "loglevel";
import { loadStdlib } from "@reach-sh/stdlib";

export const stdlib = loadStdlib();

export const fmt = (x) => stdlib.formatCurrency(BigNumber.from(x), 4);
export const getBalance = async (acc) => fmt(await stdlib.balanceOf(acc));
export const isBigNumber = (n) => Object.prototype.hasOwnProperty.call(n, "_isBigNumber");

export const parseBigNumber = (bn) => {
  if ("_hex" in bn) {
    const hex = bn._hex.slice(2);
    return parseInt(hex, 16);
  } else {
    log.error(`${bn} is not BigNumber`);
  }
};

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
};

export const call = async (f) => {
  let res = undefined;
  try {
    res = await f();
  } catch (e) {
    res = ["err", e];
  }
  console.log("Result:\n");
  printObjectWithBigNumbers(res);
  console.log("\n");
};

export const getView = async (ctc, name, ...args) => {
  const [status, object] = await ctc.views[name](...args);

  if (status === "Some") {
    return convertBns(object);
  } else if (status === "None") {
    return "UNINITIALIZED";
  } else {
    throw Error("Unknown status");
  }
};

export const getContractId = async (ctc) => {
  const info = await ctc.getInfo();
  if (isBigNumber(info)) {
    return parseBigNumber(info);
  } else {
    return JSON.stringify(info);
  }
};

export function convertBns(obj) {
  if (obj instanceof BigNumber) {
    if (obj.lte(String(Number.MAX_SAFE_INTEGER))) {
      return obj.toNumber();
    } else {
      return Number.POSITIVE_INFINITY;
    }
  } else if (obj instanceof Array) {
    return obj.map((e) => convertBns(e));
  } else if (typeof obj == "object") {
    const newObj = {};
    for (const p in obj) {
      newObj[p] = convertBns(obj[p]);
    }
    return newObj;
  } else {
    return obj;
  }
}

export function expectIsBetween(a, l, r) {
  return expect(a).toBeGreaterThanOrEqual(l) && expect(a).toBeLessThanOrEqual(r);
}

export function expectEqualIgnoringFees(newVal, shouldBe, EPS = 20 * 1000) {
  expectIsBetween(newVal, shouldBe - EPS, shouldBe);
}

export async function checkGlobalEvents(eventStream, events) {
  let totalExpectedEvents = events.length;

  let ptr = 0;

  async function checkPurchases() {
    await eventStream.monitor(({ what }) => {
      const eventArgs = convertBns(what);

      const currentEvent = events[ptr];
      expect(eventArgs).toStrictEqual(currentEvent);
      ptr++;
      totalExpectedEvents--;

      if (totalExpectedEvents === 0) {
        throw "done";
      }
    });
  }

  try {
    await checkPurchases();
  } catch (e) {
    if (e === "done") {
      // Do nothing
    } else {
      throw e;
    }
  }
}

// TODO implement not strict mode (subarray of events)
export async function checkEvents(eventStream, events, userAccs) {
  let totalExpectedEvents = events.map((e) => e.length).reduce((a, b) => a + b);

  // eslint-disable-next-line no-unused-vars
  const ptrs = userAccs.map((_) => 0);

  async function checkPurchases() {
    await eventStream.monitor(({ what }) => {
      const eventAddr = stdlib.formatAddress(what[0]);
      const eventArgs = convertBns(what.slice(1));
      const addrs = userAccs.map((acc) => acc.networkAccount.addr);
      const playerIndex = addrs.indexOf(eventAddr);

      const playerEvents = events[playerIndex];
      const currentEventIndex = ptrs[playerIndex];
      const currentEvent = playerEvents[currentEventIndex];

      expect(eventArgs).toStrictEqual(currentEvent);
      ptrs[playerIndex]++;
      totalExpectedEvents--;

      if (totalExpectedEvents === 0) {
        throw "done";
      }
    });
  }

  try {
    await checkPurchases();
  } catch (e) {
    if (e === "done") {
      // Do nothing
    } else {
      throw e;
    }
  }
}

/**
 * Deploy a contract which has a standard structure (`InitialState` + `deployed` + `Api`)
 * @param creatorCtc Reach backend interface for the creator account
 * @param initialState `InitialStateObj` of the contract
 */
export async function deployStandardContract(
  creatorCtc,
  initialState,
  additionalCreatorMethods = {}
) {
  const creatorInteract = {
    getParams: () => initialState,
    deployed: stdlib.disconnect,
    ...additionalCreatorMethods,
  };

  await stdlib.withDisconnect(async () => {
    await creatorCtc.p.Creator(creatorInteract);
  });

  return getContractId(creatorCtc);
}

/**
 * Initializes gas limit for users (for ETH/CFX connectors) or opts users
 * into listed tokens (for ALGO connector).
 * Uses the connector from stdlib (derived from REACH_CONNECTOR_MODE env var) by default.
 * @param {[*]} users List of Reach user accounts to configure
 * @param {[*]} tokens List of tokens (for users to opt-in for Algorand)
 */
export async function configureUsersAndTokens(
  users,
  tokens,
  { connector = stdlib.connector, gasLimit = 5000000, logger = log } = {}
) {
  if (connector === "ETH" || connector === "CFX") {
    for (const acc of users) {
      acc.setGasLimit(gasLimit);
    }
  } else if (connector === "ALGO") {
    for (const acc of users) {
      for (const token of tokens) {
        await acc.tokenAccept(token.id);
      }
    }
    logger.trace("Participants opted in");
  } else {
    logger.error("Unsupported connector " + connector);
  }
}
