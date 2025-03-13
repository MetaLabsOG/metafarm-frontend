import { stdlib, configureUsersAndTokens, deployStandardContract } from "@metalabsog/common";
import { BigNumber } from "ethers";
import log from "loglevel";
import * as reachLib from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

/**
 * Initializes a smart contract.
 * Creates one account for Creator which will deploy the contract and
 * as much as needed accounts for users. Makes all accounts ready to interact with the contract.
 *
 * @argument accountsNumber amount of user accounts to initialize.
 */
export async function init(accountsNumber) {
  const creatorAcc = await stdlib.newTestAccount(stdlib.parseCurrency(10000));

  const userAccs = await stdlib.newTestAccounts(accountsNumber, stdlib.parseCurrency(10));
  log.trace("Accounts created and funded with ALGO");

  const stakeToken = await stdlib.launchToken(creatorAcc, "Staky", "STAKE");
  const rewardToken = await stdlib.launchToken(creatorAcc, "Rewardy", "REWARD");
  log.trace("Staking and reward tokens minted");

  await configureUsersAndTokens([creatorAcc, ...userAccs], [stakeToken, rewardToken]);

  const initalStakyBalance = BigNumber.from(1000000000);
  for (const acc of userAccs) {
    await stdlib.transfer(creatorAcc, acc, initalStakyBalance, stakeToken.id);
  }
  log.trace("Stakers received STAKE token");

  return {
    creatorAcc,
    userAccs,
    tokens: {
      stakeToken,
      rewardToken,
    },
  };
}

export async function deploy(
  creatorAcc,
  userAccs,
  stakeToken,
  rewardToken,
  beginBlock = 0,
  blocksToRun = 1000,
  rewardPerBlock = 1000,
  extraAlgoRewardPerBlock = 0,
  lockLengthBlocks = 0,
  stakeFee = 0,
  unstakeFee = 0,
  creationFee = 0,
  beneficiaryAcc = creatorAcc
) {
  const creatorCtc = creatorAcc.contract(backend);
  const contractId = await deployStandardContract(creatorCtc, {
    stakeToken: stakeToken.id,
    rewardToken: rewardToken.id,
    beginBlock,
    endBlock: beginBlock + blocksToRun,
    totalRewardAmount: rewardPerBlock * blocksToRun,
    totalAlgoRewardAmount: extraAlgoRewardPerBlock * blocksToRun,
    lockLengthBlocks,
    creationFee,
    beneficiary: beneficiaryAcc.networkAccount.addr,
    flatAlgoCreationFee: 0,
  });
  const userCtcs = userAccs.map((acc) => acc.contract(backend, contractId));

  return {
    contractId,
    creatorCtc,
    userCtcs,
  };
}

export { stdlib as reach, backend, reachLib };
