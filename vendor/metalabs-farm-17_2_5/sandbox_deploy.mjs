import * as backend from "./build/index.main.mjs";
import { stdlib, deployStandardContract, parseBigNumber } from "@metalabsog/common";

// default sandbox online wallet address
// TODO what is onlne wallet?
const address = "KDIXBQDE2NC6REQF6MBMXTAYPDE64XY5I37NNGR4D2DVL3GOTX4DENA6HY";
// default sandbox online wallet mnemonic
const mnemonic =
  "glimpse off grab flag reduce stamp limb wheat melody fix decorate sketch fury giant stable puzzle dinner merry traffic action shock useless sunset above orchard";
const creatorAcc = await stdlib.newAccountFromMnemonic(mnemonic);

const rawDefaultToken = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

// sandbox setup commands
// goal asset create --creator KDIXBQDE2NC6REQF6MBMXTAYPDE64XY5I37NNGR4D2DVL3GOTX4DENA6HY --total 1000000000 --name STAKE
// goal asset create --creator KDIXBQDE2NC6REQF6MBMXTAYPDE64XY5I37NNGR4D2DVL3GOTX4DENA6HY --total 1000000000 --name REWARD

const stakeTokenId = 1;
const rewardTokenId = 2;

const sandboxProviderEnv = {
  ALGO_SERVER: "http://localhost",
  ALGO_PORT: "4001",
  ALGO_TOKEN: rawDefaultToken,
  ALGO_INDEXER_SERVER: "http://localhost",
  ALGO_INDEXER_PORT: "8980",
  ALGO_INDEXER_TOKEN: rawDefaultToken,
  // TODO what is it
  REACH_ISOLATED_NETWORK: "yes",
  // TODO what is it
  ALGO_NODE_WRITE_ONLY: "no",
};

stdlib.setProviderByEnv(sandboxProviderEnv);

const creatorCtc = creatorAcc.contract(backend);
creatorCtc.getInfo().then((info) => {
  console.log(`The contract is deployed as = ${parseBigNumber(info)}`);
});

const beginBlock = 1;
const lenInBlocks = 10_000;

// Deployment in Reach terms (2nd transaction)
await deployStandardContract(creatorCtc, {
  stakeToken: stakeTokenId,
  rewardToken: rewardTokenId,
  beginBlock: beginBlock,
  endBlock: beginBlock + lenInBlocks,
  rewardPerBlock: 100,
  isDevEnv: false,
});

// TODO: connect to backend and add it to list?

console.log("The contract was properly initialized and ready to work");
