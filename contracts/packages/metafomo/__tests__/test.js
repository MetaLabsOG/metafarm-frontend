const { config, stdlib, parseBigNumber } = require("@cometa/common")
const { init, deploy } = require("../deploy.mjs")
const { BigNumber } = require("ethers")
const { cancelable } = require("cancelable-promise")

let playerAccs, playerCtcs, metafomoToken, playerLogs, playerCtcConnection, creatorCtc

async function bid(account) {
  const api = playerCtcs[account].a.Api

  return await api.buyTicket()
}

async function buyTimeReduction(account) {
  const api = playerCtcs[account].a.Api

  return await api.buyTimeReduction()
}

async function buyDiscount(account) {
  const api = playerCtcs[account].a.Api

  return await api.buyDiscount()
}

function convertBns(obj) {
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


async function getView() {
  const ctc = playerCtcs[0]
  const [status, object] = await ctc.views.Fomo.info()
  return convertBns(object)
}

beforeAll(() => {
  jest.setTimeout(10 * 1000)
})

beforeEach(async () => {
  const accountsNumber = 2
  const initResult = await init(accountsNumber)
  const { creatorAcc, nftPrize } = initResult
  playerAccs = initResult.playerAccs
  const ctcs = await deploy(creatorAcc, playerAccs, nftPrize)
  creatorCtc = ctcs.creatorCtc
  playerCtcs = ctcs.playerCtcs

  playerLogs = Array(accountsNumber).fill([])

  const [infoStatus, initialInfo] = await playerCtcs[0].views.Fomo.info()
  metafomoToken = parseBigNumber(initialInfo.token)

  if (stdlib.connector === "ALGO") {
    for (const acc of playerAccs) {
      acc.tokenAccept(metafomoToken)
    }
    console.log(`All players opted-in into token ${metafomoToken}`)
  }

  playerCtcConnection = cancelable(playerCtcs[0].p.Buyer({}))
})

afterEach(async () => {
  // TODO does not really finish stuff
  await playerCtcConnection.cancel()
})


/*test('contract can be deployed and id is written in configstore', async () => {
  const lastPublishedContractId = config.get("farm.lastDeployed")
  await deploy(creatorAcc, stakeToken, rewardToken)
  const newContractId = config.get("farm.lastDeployed")
  expect(newContractId).not.toBe(lastPublishedContractId)
});*/

function expectIsBetween(a, l, r) {
  return expect(a).toBeGreaterThanOrEqual(l) && expect(a).toBeLessThanOrEqual(r)
}

function expectEqualIgnoringFees(newVal, shouldBe, EPS = 20 * 1000) {
  expectIsBetween(newVal, shouldBe - EPS, shouldBe)
}

async function getAllInfo() {
  const global = await getView()
  const algoBalances = []
  const metaBalances = []
  for (const p of playerAccs) {
    algoBalances.push((await stdlib.balanceOf(p)).toNumber())
    metaBalances.push((await stdlib.balanceOf(p, metafomoToken)).toNumber())
  }

  return {
    global,
    algoBalances,
    metaBalances
  }
}


test('can bid', async () => {
  const info = await getView()
  console.log(info)
  const ticketPrice = info.currentPrice
  const initialBalance = parseInt(await stdlib.balanceOf(playerAccs[0]))
  await bid(0)
  const { global, algoBalances, metaBalances } = await getAllInfo()
  console.log(initialBalance, ticketPrice, algoBalances)
  expectEqualIgnoringFees(algoBalances[0], initialBalance - ticketPrice)
  expect(metaBalances[0]).toBe(global.tokensGivenPerTicket)
  expect(global.tokenOwnedByUsers).toBe(global.tokensGivenPerTicket)
  expect(global.currentPrice).toBe(global.initialPrice + global.priceStep)
})

test('discount actually makes bids cheaper', async () => {
  await bid(0)
  await buyDiscount(0)
  let { global, algoBalances, metaBalances } = await getAllInfo()
  expect(global.tokenOwnedByUsers).toBe(0)
  expect(metaBalances[0]).toBe(0)
  const oldBalance = algoBalances[0]
  const priceWithDiscount = global.currentPrice * (100 - global.discountPercents[1]) / 100
  await bid(0);
  ({ global, algoBalances, metaBalances } = await getAllInfo());
  expectEqualIgnoringFees(algoBalances[0], oldBalance - priceWithDiscount)
})

// TODO implement not strict mode (subarray of events)
async function checkEvents(eventStream, events) {
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

test('events are emitted', async () => {
  const e = creatorCtc.e

  await bid(0)
  await bid(1)
  await bid(0)
  await bid(1)

  await buyDiscount(0)
  await buyDiscount(1)
  await buyTimeReduction(0)

  const info = await getView()
  const initialPrice = info.initialPrice
  const step = info.priceStep

  const purchaseEvents = [
    [
      [initialPrice, initialPrice + step],
      [initialPrice + step * 2, initialPrice + step * 3],
    ],
    [
      [initialPrice + step, initialPrice + step * 2],
      [initialPrice + step * 3, initialPrice + step * 4],
    ],
  ]

  await checkEvents(e.showPurchase, purchaseEvents)

  const buyDiscountEvents = [
    [
      [1],
    ],
    [
      [1],
    ],
  ]

  await checkEvents(e.updateDiscountLevel, buyDiscountEvents)

  
  const buyTimeReductionEvents = [
    [
      [1],
    ],
    [
      [],
    ],
  ]


  //const showPurchaseEvents = [p]
  //const showPurchaseEvent = await e.showPurchase.next()
  // console.log(showPurchaseEvent)
})

test('levels updated properly', async () => {
  // get META
  /*bid(0)
  await waitFor('showPurchase', playerPcEmitter)
  bid(0)
  await waitFor('showPurchase', playerPcEmitter)
  bid(1)
  await waitFor('showPurchase', playerPcEmitter)
  //await waitFor('showPurchase', playerPcEmitter)
  await bid(1)
  //await waitFor('showPurchase', playerPcEmitter)
  await bid(1)
  //await waitFor('showPurchase', playerPcEmitter)


  await buyDiscount(0)
  await buyDiscount(1)
  await buyDiscount(1)

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  await sleep(2000)

  console.log("player 0 logs")
  console.log(playerLogs[0])*/
})

/*
test('bids actually increase time', async() => {
  // get time
  // bid
  // check time got +30
  // buy time reduction
  // check time got +29
})

test('funder receives fees', async() => {
  // bid
  // check funder balance got larged
})

test('the game finishes and current winner gets prize', async() => {
  // bid(0)
  // bid(1)
  // move time a bit
  // check the games still works (?)
  // move time a lot
  // final action (?)
  // check current winner got ALGO
  // check random winner (decided by us?) got NFT
})
*/