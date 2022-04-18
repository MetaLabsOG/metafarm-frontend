import * as backend from "./build/index.main.mjs"
import { stdlib, getContractId } from "@cometa/common"
import { BigNumber } from "ethers"
import log from "loglevel"

/*
interface NetworkState {
  creatorAcc: any,
  userAccs: any,
  tokens: {
    stakeToken: any,
    rewardToken: any
  }
}
*/

/**
 * Initializes a smart contract.
 * Creates one account for Creator which will deploy the contract and 
 * as much as needed accounts for users. Makes all accounts ready to interact with the contract.
 * 
 * @argument accountsNumber amount of user accounts to initialize.
 */
export async function init(accountsNumber) {
  const creatorAcc = await stdlib.newTestAccount(stdlib.parseCurrency(100))

  const userAccs = await stdlib.newTestAccounts(accountsNumber, stdlib.parseCurrency(10))
  log.trace("Accounts created and funded with ALGO")

  const stakeToken = await stdlib.launchToken(creatorAcc, "Staky", "STAKE")
  const rewardToken = await stdlib.launchToken(creatorAcc, "Rewardy", "REWARD")
  log.trace("Staking and reward tokens minted")

  if (stdlib.connector === "ETH" || stdlib.connector === "CFX") {
    const gasLimit = 5000000
    creatorAcc.setGasLimit(gasLimit)
    for (const acc of userAccs) {
      acc.setGasLimit(gasLimit)
    }
  } else if (stdlib.connector === "ALGO") {
    for (const acc of userAccs) {
      await acc.tokenAccept(stakeToken.id)
      await acc.tokenAccept(rewardToken.id)
    }
    log.trace("Stakers opted in")
  } else {
    log.error("Unsupported connector " + stdlib.connector)

  }
  const initalStakyBalance = BigNumber.from(1000000)
  for (const acc of userAccs) {
    await stdlib.transfer(creatorAcc, acc, initalStakyBalance, stakeToken.id)
  }
  log.trace("Stakers received STAKE token")

  return {
    creatorAcc,
    userAccs,
    tokens: {
      stakeToken,
      rewardToken,
    },
  }
}


export async function deploy(
  creatorAcc,
  userAccs,
  stakeToken,
  rewardToken,
  beginBlock = 0,
  blocksToRun = 1000,
  rewardPerBlock = 1000
) {
  const creatorCtc = creatorAcc.contract(backend)
  const creatorInteract = {
    getParams: () => ({
      stakeToken: stakeToken.id,
      rewardToken: rewardToken.id,
      beginBlock,
      endBlock: beginBlock + blocksToRun,
      rewardPerBlock,
    }),
    deployed: async () => {
      throw ["done", {}]
    }
  }

  try {
    await creatorCtc.p.Creator(creatorInteract)
  } catch (e) {
    if (e[0] !== "done") {
      throw e
    }
  }

  const contractId = await getContractId(creatorCtc)
  const userCtcs = userAccs.map(acc => acc.contract(backend, contractId))
  return {
    contractId,
    creatorCtc,
    userCtcs,
  }
}