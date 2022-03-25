import * as backend from './build/index.main.mjs'
import { stdlib, parseBigNumber, isBigNumber, getBalance, printObjectWithBigNumbers, getContractId, config } from '@cometa/common'

// Creates accounts etc.
export async function init(accountsNumber) {
  const creatorAcc = await stdlib.newTestAccount(stdlib.parseCurrency(100))

  const stakerAccs = await stdlib.newTestAccounts(accountsNumber, stdlib.parseCurrency(10))
  const [stakerAcc1, stakerAcc2] = stakerAccs
  console.log("Accounts created and funded with ALGO")

  const stakeToken = await stdlib.launchToken(creatorAcc, "Staky", "STAKE")
  const rewardToken = await stdlib.launchToken(creatorAcc, "Rewardy", "REWARD")
  console.log("Staking and reward tokens minted")

  if (stdlib.connector === 'ETH' || stdlib.connector === 'CFX') {
    const myGasLimit = 5000000;
    for (const acc of stakerAccs) {
      acc.setGasLimit(myGasLimit);
    }
  } else if (stdlib.connector === 'ALGO') {
    for (const acc of stakerAccs) {
      await acc.tokenAccept(stakeToken.id)
      await acc.tokenAccept(rewardToken.id)
    }
    console.log("Stakers opted in")
  } else {
    console.log("Unsupported connector " + stdlib.connector)

  }
  const initalStakyBalance = 1000000
  for (const acc of stakerAccs) {
    await stdlib.transfer(creatorAcc, acc, initalStakyBalance, stakeToken.id)
  }
  console.log("Stakers received STAKE token")

  return {
    creatorAcc, stakerAccs, stakeToken, rewardToken
  }
}


export async function deploy(creatorAcc, stakeToken, rewardToken) {
  const creatorCtc = creatorAcc.contract(backend)
  const currentBlock = Math.floor(Date.now() / 1000)
  const runningBlocks = 1000
  const rewardPerBlock = 1000
  const creatorInteract = {
    getParams: () => ({
      stakeToken: stakeToken.id,
      rewardToken: rewardToken.id,
      beginBlock: currentBlock,
      endBlock: currentBlock + runningBlocks,
      totalRewardAmount: runningBlocks * rewardPerBlock, // 1000 microtokens per second. On algo it is 1/1000 ALGO.
    }),
    deployed: async () => {
      throw ['done', {}]
    }
  };

  try {
    await creatorCtc.p.Creator(creatorInteract)
  } catch (e) {
    if (e[0] === 'done') {
      //return e[1]
    } else {
      throw e
    }
  }

  const contractId = await getContractId(creatorCtc)
  config.set('farm.lastDeployed', contractId)
  return contractId 
}