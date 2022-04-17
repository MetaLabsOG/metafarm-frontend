const { config, stdlib, checkGlobalEvents, convertBns } = require("@cometa/common")
const { init, deploy } = require("../deploy.mjs")
const { BigNumber } = require("ethers")

let contractId, creatorAcc, userAccs, creatorCtc, userCtcs, stakeToken, rewardToken

async function stake(account, amount) {
  const api = userCtcs[account].a
  return convertBns(await api.stake(amount))
}

async function unstake(account, amount) {
  const api = userCtcs[account].a

  return convertBns(await api.unstake(amount))
}

async function claim(account) {
  const api = userCtcs[account].a
  return convertBns(await api.claim())
}

async function withdraw(account) {
  const api = userCtcs[account].a
  return convertBns(await api.withdraw())
}

async function update(account) {
  const api = userCtcs[account].a
  return convertBns(await api.update())
}

async function updateAll() {
  // TODO use Promise.all
  for (const x of Array(3).keys()) {
    await update(x)
  }
}

async function setTime(time) {
  const api = userCtcs[0].a
  return convertBns(await api.setTime(time))
}


async function getInitialState() {
  const ctc = userCtcs[0]
  const [status, object] = await ctc.views.initial()
  return convertBns(object)
}

async function getGlobalState() {
  const ctc = userCtcs[0]
  const [status, object] = await ctc.views.global()
  return convertBns(object)
}


async function getLocalState(acc) {
  const addr = userAccs[acc].networkAccount.addr
  const ctc = userCtcs[0]
  const [status, object] = await ctc.views.local(addr)
  return convertBns(object)
}

beforeAll(() => {
  jest.setTimeout(10 * 1000)
})

beforeEach(async () => {
  const accountsNumber = 3
  let tokens
  ({ creatorAcc, userAccs, tokens } = await init(accountsNumber));
  ({ stakeToken, rewardToken } = tokens);
  ({contractId, creatorCtc, userCtcs} =
    await deploy(creatorAcc, userAccs, stakeToken, rewardToken))

  // We need somebody to log contract events.
  userCtcs[0].p.User({
    log: (...args) => {
      //console.log(convertBns(args))
    },
    deployed: () => {
      console.log("deployed for monitoring user")
    },
  })
})


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
  for (const p of userAccs) {
    algoBalances.push((await stdlib.balanceOf(p)).toNumber())
    metaBalances.push((await stdlib.balanceOf(p, metafomoToken)).toNumber())
  }

  return {
    global,
    algoBalances,
    metaBalances
  }
}

/*test('contract can be deployed and id is written in configstore', async () => {
  const lastPublishedContractId = config.get("farm.lastDeployed")
  await deploy(creatorAcc, stakeToken, rewardToken)
  const newContractId = config.get("farm.lastDeployed")
  expect(newContractId).not.toBe(lastPublishedContractId)
});*/

test("can stake and unstake", async () => {
  let view, staked, reward;
  ({ staked, reward } = await stake(1, 10))
  expect(staked).toBe(10)
  view = await getGlobalState()
  expect(view.totalStaked).toBe(10)
  await unstake(1, 10)
  view = await getGlobalState()
  expect(view.totalStaked).toBe(0)
})

test("if both staked total raises", async () => {
  await stake(1, 10)
  await stake(2, 20)
  let view = await getGlobalState()
  expect(view.totalStaked).toBe(30)
})

test("rewards are calculated properly", async () => {
  jest.setTimeout(100 * 1000)
  let global, initial, staked, reward
  initial = await getInitialState()
  const length = initial.endBlock - initial.beginBlock
  const rewardPerBlock = initial.totalRewardAmount / length
  const stakeAmount1 = 10
  const stakeAmount2 = 20
  stake(1, stakeAmount1);
  ({ staked, reward } = stake(2, stakeAmount2))

  console.log("after 2nd user stake", staked, reward)

  // We waited but did not touch contract, so it should not be updated
  let oldState1 = await getLocalState(1)
  let oldState2 = await getLocalState(2)

  expect(oldState1.reward).toBe(0)
  expect(oldState2.reward).toBe(0)

  const waitBlocks = 100
  await setTime(waitBlocks)
  await updateAll()

  const state1 = await getLocalState(1)
  const state2 = await getLocalState(2)
  console.log("reward 1 after update;", state1.reward)
  let totalStaked = stakeAmount1 + stakeAmount2
  let expectedRewardP1S1 = stakeAmount1 * Math.floor(waitBlocks * rewardPerBlock / totalStaked)
  let expectedRewardP2S1 = stakeAmount2 * Math.floor(waitBlocks * rewardPerBlock / totalStaked)
  expect(state1.reward).toBe(expectedRewardP1S1)
  expect(state2.reward).toBe(expectedRewardP2S1);
  ({ staked, reward } = await claim(1))
  // Already claimed
  expect(reward).toBe(0)

  const waitBlocks2 = 10

  await stake(1, 10)

  // Update only one
  await setTime(waitBlocks + waitBlocks2)
  await update(1)

  totalStaked = 40
  let expectedRewardP1S2 = 20 * Math.floor(waitBlocks2 * rewardPerBlock / totalStaked)
  let expectedRewardP2S2 = expectedRewardP2S1

  const state1_now = await getLocalState(1)
  const state2_now = await getLocalState(2)

  expect(state1_now.reward).toBe(expectedRewardP1S2)
  expect(state2_now.reward).toBe(expectedRewardP2S2)

  // Already claimed reward
  expect(reward).toBe(0)

  console.log(staked, reward)

})

test("rewards are added", async () => {
  await stake(1, 10)
  await setTime(100)

  let { reward } = await update(1)

  console.log(reward)

  expect(reward).toBeGreaterThan(0)
})

function randInt(n) {
  return Math.floor(Math.random() * n)
}

test("state is still proper after many actions", async () => {
  let staked = Array(3).fill(0)
  let time = 0

  for (let i = 0; i < 70; i++) {
    const action = randInt(4)
    const p = randInt(3)

    if (action === 0) {
      const toStake = randInt(100)
      staked[p] += toStake
      await stake(p, toStake)
    } else if (action === 1) {
      const toUnstake = Math.min(randInt(100), staked[p])
      staked[p] -= toUnstake
      await unstake(p, toUnstake)
    } else if (action === 2) {
      await claim(p)
    } else if (action === 3) {
      time += randInt(100)
      await setTime(time)
    }
  }

  for (let p = 0; p < 3; p++) {
    const contractLocalState = await getLocalState(p)
    expect(contractLocalState.staked).toBe(staked[p])
  }
})

test("cannot stake when contract finished", async () => {
  await stake(1, 1)
  await setTime(999)
  // still can stake here
  await stake(1, 1)
  await setTime(1000)
  // too late now
  await expect(stake(1, 1)).rejects.toBeDefined()

  const e = creatorCtc.e
  // One empty event
  await checkGlobalEvents(e.noRewardsLeft, [[]])
})

// TODO
/*test("can withdraw", async () => {
})


test("cannot withdraw at the beginning", async () => {
  await expect(withdraw(1)).rejects.toBeDefined()
})*/