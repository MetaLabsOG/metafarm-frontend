import * as backend from "./build/index.main.mjs";
import { stdlib, deployStandardContract, parseBigNumber } from "@metalabsog/common";

const mnemonic =
  "retire piano fly enable goose survey furnace slogan citizen idea bleak ribbon proof connect board ignore quarter piano lottery volume case also loan abstract property";
const creatorAcc = await stdlib.newAccountFromMnemonic(mnemonic);

stdlib.setProviderByName("TestNet");

const creatorCtc = creatorAcc.contract(backend);
creatorCtc.getInfo().then((info) => {
  console.log(`The contract is deployed as = ${parseBigNumber(info)}`);
});

// eslint-disable-next-line no-unused-vars
const META = 85951079;
// eslint-disable-next-line no-unused-vars
const USDC = 10458941;
// eslint-disable-next-line no-unused-vars
const TMPOOL1 = 62401500;
// eslint-disable-next-line no-unused-vars
const LIQ = 56999328; // pact goBtc - ALGO
// eslint-disable-next-line no-unused-vars
const ST1 = 85951240;
// eslint-disable-next-line no-unused-vars
const ST2 = 85951846;
const beginBlock = 21_900_000;
const lenInBlocks = 100_000;

// Deployment in Reach terms (2nd transaction)
await deployStandardContract(creatorCtc, {
  token: META,
  beginBlock: beginBlock,
  endBlock: beginBlock + lenInBlocks,
  rewardPerBlock: 10,
  isDevEnv: false,
});

// TODO: connect to backend and add it to list?

console.log("The contract was properly initialized and ready to work");
