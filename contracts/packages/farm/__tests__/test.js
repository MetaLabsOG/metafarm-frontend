const { config } = require("@cometa/common")
const { init, deploy } = require("../deploy.mjs")
const { BigNumber } = require("ethers")

let stakerCtcs 

async function stake(account, amount) {
    const api = stakerCtcs[account].a.Farm

    return await api.stake(amount)
}

async function unstake(account, amount) {
    const api = stakerCtcs[account].a.Farm
    
    return await api.unstake(amount)
}

async function claim(account) {
    const api = stakerCtcs[account].a.Farm

    return await api.claim()
}

function convertBns(obj) {
  if (obj instanceof BigNumber) {
    return obj.toNumber()
  }
  else if (obj instanceof Array) {
    return obj.map((e) => convertBns(e))
  } else {
    const newObj = {}
    for (const p in obj) {
        newObj[p] = convertBns(obj[p])
    }
    return newObj
  }
}


async function getView() {
    const ctc = stakerCtcs[0]
    const [status, object] = await ctc.views.State.info()
    return convertBns(object)
}

beforeEach(async () => {
  const accountsNumber = 3
  const { creatorAcc, stakerAccs, stakeToken, rewardToken } = await init(accountsNumber)
  const ctcs = await deploy(creatorAcc, stakerAccs, stakeToken, rewardToken)
  stakerCtcs = ctcs.stakerCtcs
})


/*test('contract can be deployed and id is written in configstore', async () => {
  const lastPublishedContractId = config.get("farm.lastDeployed")
  await deploy(creatorAcc, stakeToken, rewardToken)
  const newContractId = config.get("farm.lastDeployed")
  expect(newContractId).not.toBe(lastPublishedContractId)
});*/

test('can stake and unstake', async () => {
  await stake(1, 10)
  let view = await getView()
  expect(view.totalStaked).toBe(10)
  await unstake(1, 10)
  view = await getView()
  expect(view.totalStaked).toBe(0)
})
