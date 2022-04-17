import * as backend from './build/index.main.mjs'
//import * as farmBackend from '../farm/build/index.main.mjs'
import * as farm from "@cometa/farm"
import { parseBigNumber, stdlib,  getContractId, convertBns } from '@cometa/common'

console.log(farm)

const accountsNumber = 2
const { creatorAcc, userAccs, tokens } = await farm.init(accountsNumber)
const { stakeToken, rewardToken } = tokens

const farmContractId = await farm.deploy(creatorAcc, userAccs, stakeToken, rewardToken)
console.log(`The farm is deployed as = ${farmContractId}`);


export async function deploy(
  creatorAcc,
  stakeToken,
  rewardToken,
  underlyingFarmId,
  creatorFee = 1,
  ) {
  const creatorCtc = creatorAcc.contract(backend)
  const creatorInteract = {
    getParams: () => ({
      stakeToken: parseBigNumber(stakeToken.id),
      rewardToken: parseBigNumber(rewardToken.id),
      underlyingFarmId: underlyingFarmId.contractId,
      creatorFee
    }),
    deployed: async () => {
      throw ['done', {}]
    }
  };

  try {
    await creatorCtc.p.Creator(creatorInteract)
  } catch (e) {
    if (e[0] !== 'done') {
      throw e
    }
  }

  const contractId = await getContractId(creatorCtc)
  
  return contractId
}

const optimizerContractId = await deploy(creatorAcc, stakeToken, rewardToken, farmContractId)
console.log(`The optimizer is deployed as = ${optimizerContractId}`);

const userCtcs = userAccs.map(acc => acc.contract(backend, optimizerContractId));


async function stake(account, amount) {
  const api = userCtcs[account].a
  return await api.stake(amount)
}

async function unstake(account, amount) {
  const api = userCtcs[account].a

  return convertBns(await api.unstake(amount))
}

const retval1 = await stake(1, 100)
const retval2 = await stake(1, 100)
//const retval3 = await unstake(1, 100)
console.log({
  retval1, retval2//, retval3
})