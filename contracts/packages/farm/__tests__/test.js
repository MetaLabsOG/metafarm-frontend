const { config } = require("@cometa/common")
const { init, deploy } = require("../deploy.mjs")

test('contract can be deployed and id is written in configstore', async () => {
  const lastPublishedContractId = config.get("farm.lastDeployed")
  const accountsNumber = 1
  const { creatorAcc, stakerAccs, stakeToken, rewardToken } = await init(accountsNumber)
  await deploy(creatorAcc, stakeToken, rewardToken)
  const newContractId = config.get("farm.lastDeployed")
  expect(newContractId).not.toBe(lastPublishedContractId)
});