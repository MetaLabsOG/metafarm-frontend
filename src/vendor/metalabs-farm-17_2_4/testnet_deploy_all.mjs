import * as farm_backend from "./build/index.main.mjs";
import * as distribution_backend from "@metalabsog/distribution/build/index.main.mjs";
import { stdlib, deployStandardContract } from "@metalabsog/common";

import bent from "bent";

const mnemonic =
  "retire piano fly enable goose survey furnace slogan citizen idea bleak ribbon proof connect board ignore quarter piano lottery volume case also loan abstract property";
const creatorAcc = await stdlib.newAccountFromMnemonic(mnemonic);

const TestNet = true;

const indexerApi = TestNet
  ? "https://algoindexer.testnet.algoexplorerapi.io/"
  : "https://algoindexer.algoexplorerapi.io/";

stdlib.setProviderByName(TestNet ? "TestNet" : "MainNet");

const FARM_VERSION = "17.0.2";
const DIST_VERSION = "17.0.2";

const testnet_api_password = "$C0metaT0TheM00n$";

const cometaApi = TestNet ? "https://testapi.cometa.farm/" : "https://api.cometa.farm/";

const getFromIndexer = bent(indexerApi, "GET", "json", 200);
const postToSwagger = bent(cometaApi, "POST", "json", 200);

const indexerHealth = await getFromIndexer("health");

const TM_META_ALGO = 93085031;
const TM_META_USDC = 93117635;
const TM_USDC_ALGO = 62401500;
const TM_ALGF_META = 93118084;

const ALGO = 0;
const USDC = 10458941;
const ALGF = 70283957;
const META = 85951079;

const BLOCK_NOW = indexerHealth.round;

// not very accturate
const BLOCK_TIME = 5;

const DAY = (24 * 60 * 60) / BLOCK_TIME;

const TINYMAN = "Tinyman";
//const PACT = "Pact";

const farms_json = [
  {
    stakeToken: TM_META_ALGO,
    rewardToken: META,
    beginBlock: BLOCK_NOW,
    endBlock: BLOCK_NOW + 31 * DAY,
    rewardPerBlock: 2000,
    lockLengthBlocks: 15,
    stakeFee: 0,
    unstakeFee: 0,
    isDevEnv: false,

    description: "Tinyman META/ALGO -> META with lock",

    dex: TINYMAN,
    asset_1_id: META,
    asset_2_id: ALGO,
  },
  {
    stakeToken: TM_META_ALGO,
    rewardToken: META,
    beginBlock: BLOCK_NOW,
    endBlock: BLOCK_NOW + 31 * DAY,
    rewardPerBlock: 2000,
    lockLengthBlocks: 0,
    stakeFee: 0,
    unstakeFee: 0,
    isDevEnv: false,

    description: "Tinyman META/ALGO -> META no lock",

    dex: TINYMAN,
    asset_1_id: META,
    asset_2_id: ALGO,
  },
  {
    stakeToken: TM_USDC_ALGO,
    rewardToken: META,
    beginBlock: BLOCK_NOW,
    endBlock: BLOCK_NOW + 66 * DAY,
    rewardPerBlock: 1000,
    lockLengthBlocks: 0,
    stakeFee: 10000,
    unstakeFee: 0,
    isDevEnv: false,

    description: "Tinyman USDC/ALGO -> META with stakeFee",

    dex: TINYMAN,
    asset_1_id: USDC,
    asset_2_id: ALGO,
  },
  {
    stakeToken: TM_META_USDC,
    rewardToken: META,
    beginBlock: BLOCK_NOW,
    endBlock: BLOCK_NOW + 7 * DAY,
    rewardPerBlock: 1500,
    lockLengthBlocks: 0,
    stakeFee: 0,
    unstakeFee: 10000,
    isDevEnv: false,

    description: "Tinyman META/USDC -> META with unstakeFee",

    dex: TINYMAN,
    asset_1_id: META,
    asset_2_id: USDC,
  },
  {
    stakeToken: TM_ALGF_META,
    rewardToken: META,
    beginBlock: BLOCK_NOW,
    endBlock: BLOCK_NOW + 10 * DAY,
    rewardPerBlock: 3000,
    lockLengthBlocks: 0,
    stakeFee: 0,
    unstakeFee: 0,
    isDevEnv: false,

    description: "Tinyman ALGF/META -> META",

    dex: TINYMAN,
    asset_1_id: META,
    asset_2_id: ALGF,
  },
  {
    stakeToken: TM_ALGF_META,
    rewardToken: META,
    beginBlock: BLOCK_NOW + 10 * DAY,
    endBlock: BLOCK_NOW + 20 * DAY,
    rewardPerBlock: 1000,
    lockLengthBlocks: 0,
    stakeFee: 0,
    unstakeFee: 0,
    isDevEnv: false,

    description: "Tinyman ALGF/META -> META not yet started",

    dex: TINYMAN,
    asset_1_id: META,
    asset_2_id: ALGF,
  },
  {
    stakeToken: TM_ALGF_META,
    rewardToken: META,
    beginBlock: BLOCK_NOW - 10 * DAY,
    endBlock: BLOCK_NOW,
    rewardPerBlock: 1000,
    lockLengthBlocks: 0,
    stakeFee: 0,
    unstakeFee: 0,
    isDevEnv: false,

    description: "Tinyman ALGF/META -> META already finished",

    dex: TINYMAN,
    asset_1_id: META,
    asset_2_id: ALGF,
  },
];

const stake_json = [
  {
    stakeToken: ALGF,
    rewardToken: META,
    beginBlock: BLOCK_NOW,
    endBlock: BLOCK_NOW + 50 * DAY,
    rewardPerBlock: 2000,
    lockLengthBlocks: 0,
    stakeFee: 0,
    unstakeFee: 0,
    isDevEnv: false,

    description: "Stake ALGF -> META",
  },
];

const distribution_json = [
  {
    token: META,
    beginBlock: BLOCK_NOW,
    endBlock: BLOCK_NOW + 100 * DAY,
    rewardPerBlock: 5000,
    isDevEnv: false,

    description: "Distribution META -> META",
  },
];

/*
const TMPOOL1 = 62401500;
const LIQ = 56999328; // pact goBtc - ALGO
const ST1 = 85951240;
const ST2 = 85951846;
const lenInBlocks = 1_000_000;
*/

for (const f of farms_json) {
  const farmCtc = creatorAcc.contract(farm_backend);
  const id = await deployStandardContract(farmCtc, f);

  const swagger_response = await postToSwagger("contract/add?password=%24C0metaT0TheM00n%24", {
    type: "farm",
    id,
    version: FARM_VERSION,
    description: f.description,
    metadata: {
      dex: f.dex,
      asset_1_id: f.asset_1_id,
      asset_2_id: f.asset_2_id,
    },
  });

  console.log("deployed farm: ", id, swagger_response);
}

for (const s of stake_json) {
  const farmCtc = creatorAcc.contract(farm_backend);
  const id = await deployStandardContract(farmCtc, s);

  const swagger_response = await postToSwagger("contract/add?password=%24C0metaT0TheM00n%24", {
    type: "stake",
    id,
    version: FARM_VERSION,
    description: s.description,
    metadata: {},
  });

  console.log("deployed stake: ", swagger_response);
}

for (const d of distribution_json) {
  const distributionCtc = creatorAcc.contract(distribution_backend);
  const id = await deployStandardContract(distributionCtc, d);

  const swagger_response = await postToSwagger("contract/add?password=%24C0metaT0TheM00n%24", {
    type: "distribution",
    id,
    version: DIST_VERSION,
    description: d.description,
    metadata: {},
  });

  console.log("deployed distribution: ", swagger_response);
}

/*
await deployStandardContract(creatorCtc, {
  stakeToken: TMPOOL1,
  rewardToken: META,
  beginBlock: beginBlock,
  endBlock: beginBlock + lenInBlocks,
  rewardPerBlock: 1,
  isDevEnv: false,
});

// TODO: connect to backend and add it to list?

console.log("The contract was properly initialized and ready to work");
*/
