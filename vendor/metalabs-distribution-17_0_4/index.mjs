import * as backend from "./build/index.main.mjs";
import { stdlib, configureUsersAndTokens, deployStandardContract } from "@metalabsog/common";
import { BigNumber } from "ethers";
import log from "loglevel";
import * as reachLib from "@reach-sh/stdlib";

/**
 * Initializes a smart contract.
 * Creates one account for Creator which will deploy the contract and
 * as much as needed accounts for users. Makes all accounts ready to interact with the contract.
 *
 * @argument accountsNumber amount of user accounts to initialize.
 */
export async function init(accountsNumber) {
  const creatorAcc = await stdlib.newTestAccount(stdlib.parseCurrency(100));

  const userAccs = await stdlib.newTestAccounts(accountsNumber, stdlib.parseCurrency(10));
  log.trace("Accounts created and funded with ALGO");

  const token = await stdlib.launchToken(creatorAcc, "Staky", "STAKE");
  log.trace("Staking and tokens minted");

  await configureUsersAndTokens([creatorAcc, ...userAccs], [token]);

  const initalStakyBalance = BigNumber.from(1000000);
  for (const acc of userAccs) {
    await stdlib.transfer(creatorAcc, acc, initalStakyBalance, token.id);
  }
  log.trace("Stakers received STAKE token");

  return {
    creatorAcc,
    userAccs,
    token,
  };
}

export async function deploy(
  creatorAcc,
  userAccs,
  token,
  beginBlock = 0,
  blocksToRun = 1000,
  rewardPerBlock = 1000,
  extraAlgoRewardPerBlock = 0,
  lockLengthBlocks = 0,
  creationFee = 0,
  beneficiaryAcc = creatorAcc
) {
  const creatorCtc = creatorAcc.contract(backend);
  const contractId = await deployStandardContract(creatorCtc, {
    token: token.id,
    beginBlock,
    endBlock: beginBlock + blocksToRun,
    rewardPerBlock,
    extraAlgoRewardPerBlock,
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

export { backend, stdlib as reach, reachLib };
