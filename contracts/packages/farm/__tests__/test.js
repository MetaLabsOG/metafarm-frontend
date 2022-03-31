const { config, stdlib, checkEvents, convertBns } = require("@cometa/common")
const { init, deploy } = require("../deploy.mjs")
const { BigNumber } = require("ethers")
const { syncBuiltinESMExports } = require("module")

let creatorCtc, userCtcs, userAccs

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

async function update(account) {
    const api = userCtcs[account].a
    return convertBns(await api.update())
}

async function setTime(account, time) {
    const api = userCtcs[account].a
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
  //console.log("addr", addr)
  const ctc = userCtcs[0]
  const [status, object] = await ctc.views.local(addr)
  //console.log("object", object)
  return convertBns(object)
}

beforeAll(() => {
  jest.setTimeout(10 * 1000)
})

beforeEach(async () => {
  const accountsNumber = 3
  const { creatorAcc, stakerAccs, stakeToken, rewardToken } = await init(accountsNumber)
  userAccs = stakerAccs
  const ctcs = await deploy(creatorAcc, stakerAccs, stakeToken, rewardToken)
  creatorCtc = ctcs.creatorCtc
  userCtcs = ctcs.stakerCtcs

  // We need somebody to log contract events.
  userCtcs[0].p.User({
    log: (...args) => {
      console.log(convertBns(args))
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

/*test('contract can be deployed and id is written in configstore', async () => {
  const lastPublishedContractId = config.get("farm.lastDeployed")
  await deploy(creatorAcc, stakeToken, rewardToken)
  const newContractId = config.get("farm.lastDeployed")
  expect(newContractId).not.toBe(lastPublishedContractId)
});*/

test('can stake and unstake', async () => {
  let view, staked, reward;
  ({staked, reward} = await stake(1, 10))
  expect(staked).toBe(10)
  view = await getGlobalState()
  expect(view.totalStaked).toBe(10)
  await unstake(1, 10)
  view = await getGlobalState()
  expect(view.totalStaked).toBe(0)
})

test('if both staked total raises', async () => {
  await stake(1, 10)
  await stake(2, 20)
  let view = await getGlobalState()
  expect(view.totalStaked).toBe(30)
})

test('rewards are calculated properly', async () => {
  jest.setTimeout(100 * 1000)
  let global, initial, staked, reward
  initial = await getInitialState()
  const length = initial.endBlock - initial.beginBlock
  const rewardPerBlock = initial.totalRewardAmount / length
  const stakeAmount1 = 10
  const stakeAmount2 = 20
  await stake(1, stakeAmount1);
  ({staked, reward} = await stake(2, stakeAmount2))

  console.log("after 2nd user stake", staked, reward)
  const wasStaked = staked

  // We waited but did not touch contract, so it should not be updated
  let oldState1 = await getLocalState(1)
  console.log(oldState1)
  let oldState2 = await getLocalState(2)


  expect(oldState1.reward).toBe(0)
  expect(oldState2.reward).toBe(0);
  await update(1)
  await update(2)
  await update(1)
  await update(2)
  const oldState1AfterUpdates = await getLocalState(1)
  const oldState2AfterUpdates = await getLocalState(2)
  console.log(oldState1AfterUpdates)
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  expect(oldState1AfterUpdates.reward).toBeGreaterThan(0)
  
  const waitTime = 100
  await stdlib.wait(waitTime, (stats) => {
    //console.log(convertBns(stats))
  });

  await update(1)
  await update(2)
  await update(1)
  await update(2)
  
  const state1 = await getLocalState(1)
  const state2 = await getLocalState(2)
  console.log("reward 1 after update;", state1.reward)
  expect(state1.reward).toBe(oldState1AfterUpdates.reward + waitTime * rewardPerBlock * stakeAmount1 / (stakeAmount1 + stakeAmount2))
  expect(state2.reward).toBe(oldState2AfterUpdates.reward + waitTime * rewardPerBlock * stakeAmount2 / (stakeAmount1 + stakeAmount2))
  ({staked, reward} = await claim(1))
  // Already claimed reward
  expect(reward).toBe(0)

  console.log(staked, reward)

  await sleep(1000)

})

test('rewards are added', async () => {
  await stake(1, 10)
  let {staked, reward} = await setTime(1, 1)

  console.log(reward)

  expect(reward).toBeGreaterThan(0)
  
})