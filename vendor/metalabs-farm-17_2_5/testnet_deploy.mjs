import * as backend from "./build/index.main.mjs";
import { stdlib, deployStandardContract, parseBigNumber } from "@metalabsog/common";

// TODO: this mnemonic should be taken from some envvar or config or something
const mnemonic =
  "retire piano fly enable goose survey furnace slogan citizen idea bleak ribbon proof connect board ignore quarter piano lottery volume case also loan abstract property";

const creatorAcc = await stdlib.newAccountFromMnemonic(mnemonic);

stdlib.setProviderByName("TestNet");

const creatorCtc = await creatorAcc.contract(backend, 93132418);
//creatorCtc.getInfo().then((info) => {
// console.log(`The contract is deployed as = ${parseBigNumber(info)}`);
//});

const wallet = "3ONHOKYJGYREOUEP52JP7YMZDR77ZHM7B4KOJ3AMPSYOJTINL5W5YOX2HM";

console.log(await creatorCtc.v.global());
console.log(await creatorCtc.v.local(wallet));

await creatorCtc.apis.stake(1);

/*

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
const beginBlock = 21_400_000;
const lenInBlocks = 1_000_000;

// Deployment in Reach terms (2nd transaction)
await deployStandardContract(creatorCtc, {
  stakeToken: LIQ,
  rewardToken: META,
  beginBlock: beginBlock,
  endBlock: beginBlock + lenInBlocks,
  rewardPerBlock: 1,
  isDevEnv: false,
});

// TODO: connect to backend and add it to list?

console.log("The contract was properly initialized and ready to work");
*/
