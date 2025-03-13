import fs from "fs";
import axios from "axios";

import algosdk from "algosdk";
const TINYMAN_ASC = JSON.parse(fs.readFileSync("./tinyman_asc.json"));

Array.prototype.minBy = function (fn) {
  return this.extremumBy(fn, Math.min);
};

Array.prototype.maxBy = function (fn) {
  return this.extremumBy(fn, Math.max);
};

Array.prototype.extremumBy = function (pluck, extremum) {
  return this.reduce(function (best, next) {
    var pair = [pluck(next), next];
    if (!best) {
      return pair;
    } else if (extremum.apply(null, [best[0], pair[0]]) == best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
};

/**
 * Variable encoding used by Tinyman contracts
 */
function encodeVal(value, type) {
  if (type !== "int") {
    throw new Error("tinymanEncodeVal: only int variables are supported");
  }
  const bytes = [];
  for (;;) {
    const b = value & 0x7f;
    value >>= 7;
    if (value) {
      bytes.push(b | 0x80);
    } else {
      bytes.push(b);
      break;
    }
  }

  return Buffer.from(new Uint8Array(bytes));
}

/**
 * Substitutes variables into Tinyman LogicSig program
 */
function getProgram(definition, variables) {
  const template = Buffer.from(definition.bytecode, "base64");
  let buf = Buffer.alloc(template.length * 2);
  const varDefs = definition.variables.sort((a, b) => a.index - b.index);

  let templateIx = 0;
  let bufIx = 0;
  for (const v of varDefs) {
    template.copy(buf, bufIx, templateIx, v.index);
    bufIx += v.index - templateIx;
    templateIx = v.index + v.length;

    const name = v.name.slice("TMPL_".length).toLowerCase();
    const value = variables[name];
    const encoded = encodeVal(value, v.type);
    encoded.copy(buf, bufIx);
    bufIx += encoded.length;
  }

  if (templateIx < template.length) {
    template.copy(buf, bufIx, templateIx, template.length);
    bufIx += template.length - templateIx;
  }

  if (bufIx < buf.length) {
    buf = buf.slice(0, bufIx);
  }
  return new Uint8Array(buf);
}

function getPoolLogicSig(a1, a2, validatorAppId) {
  const program = getProgram(TINYMAN_ASC.contracts.pool_logicsig.logic, {
    validator_app_id: validatorAppId,
    asset_id_1: a1 > a2 ? a1 : a2, // max(a1, a2),
    asset_id_2: a1 <= a2 ? a1 : a2, // min(a1, a2),
  });
  return new algosdk.LogicSigAccount(program);
}

function toASAListObj(asset) {
  return {
    id: asset.index.toString(),
    decimals: asset.params.decimals,
    name: asset.params.name,
    unit_name: asset.params["unit-name"],
    url: asset.params.url,
    total_amount: asset.params.total.toString(),
    logo: {},
    deleted: asset.deleted,
  };
}

const TINYMAN_VALIDATOR_APP_ID = 552635992; // mainnet
const META_DEPLOY_ADDR = "METAFG5UBD74CKQFIIABWMMQXR45J7BAP3KV6BVR3V7LDPNAEKNEVLMBRE";
const indexer = new algosdk.Indexer("", "https://algoindexer.algoexplorerapi.io", 443);
const http = axios.create();

const ALL_ASSETS = await http
  .get("https://asa-list.tinyman.org/assets.json")
  .then((res) => res.data);

const TOKEN_NAMES = [
  "ALGO",
  "META",
  "ASASTATS",
  "xSOL",
  "XGLI",
  "AWT",
  "KITSU",
  "BOARD",
  "VEST",
  "goMINT",
  "GEMS",
  "COSG",
];

console.log("Fetching info about tokens of interest...");

const TOKENS = {};

for (const ticker of TOKEN_NAMES) {
  let info = Object.values(ALL_ASSETS).find((asset) => asset.unit_name === ticker);
  if (info === undefined) {
    const resp = await indexer.searchForAssets().unit(ticker).do();
    info = toASAListObj(resp.assets[0]);
  }

  TOKENS[ticker] = info;
}

console.log(TOKENS);

console.log("Tokens fetched");

async function getLPTokenId(dex, token1, token2) {
  const _a1 = Number(TOKENS[token1].id);
  const _a2 = Number(TOKENS[token2].id);
  const a1 = _a1 < _a2 ? _a1 : _a2;
  const a2 = _a1 >= _a2 ? _a1 : _a2;

  if (dex === "Tinyman") {
    const lsig = getPoolLogicSig(a1, a2, TINYMAN_VALIDATOR_APP_ID);
    const addr = lsig.address();
    const url = `https://mainnet.analytics.tinyman.org/api/v1/pools/?limit=1&with_statistics=false&verified_only=false&ordering=-liquidity&search=${addr}`;
    const pool = await http.get(url).then((res) => res.data.results[0]);
    return Number(pool.liquidity_asset.id);
  } else if (dex === "Pact") {
    const url = `https://api.pact.fi/api/pools?primary_asset__algoid=${a1}&secondary_asset__algoid=${a2}`;
    const pool = await http
      .get(url)
      .then((res) => res.data.results.maxBy((p) => Number(p.tvl_usd)));
    return Number(pool.pool_asset.algoid);
  } else {
    throw new Error("wtf, wrong dex");
  }
}

const currentRound = await indexer
  .makeHealthCheck()
  .do()
  .then((res) => res.round);

const currentTimestamp = Date.now();
const date = new Date(currentTimestamp);

console.log(`Current round: ${currentRound}`);
console.log(
  `Current timestamp: ${date.toLocaleDateString("en-US")} ${date.toLocaleTimeString("en-US")}`
);

const FARM_START_TIMESTAMP = 1659718800; // 18:00 UTC
const FARMS_START_BLOCK =
  currentRound + Math.ceil((FARM_START_TIMESTAMP - currentTimestamp / 1000) / 4.35);

console.log(`Starting round: ${FARMS_START_BLOCK}`);

const FARMS_DURATION = 600000; // ~30 days if block speed is 4.35 blocks per second
const FARMS_END_BLOCK = FARMS_START_BLOCK + FARMS_DURATION;

const FARMS = [
  {
    type: "farm",
    dex: "Tinyman",
    from: ["META", "ALGO"],
    to: "META",
    totalRewards: 4700,
    totalAlgoRewards: 6000,
    lockDays: 14,
  },
  {
    type: "farm",
    dex: "Tinyman",
    from: ["META", "ALGO"],
    to: "META",
    totalRewards: 3100,
    totalAlgoRewards: 4000,
  },
  {
    type: "farm",
    dex: "Tinyman",
    from: ["ASASTATS", "ALGO"],
    to: "ASASTATS",
    totalRewards: 4_000_000,
    totalAlgoRewards: 1700,
  },
  { type: "distribution", token: "ASASTATS", totalRewards: 1_500_000 },
  {
    type: "farm",
    dex: "Tinyman",
    from: ["xSOL"],
    to: "XGLI",
    totalRewards: 200_000,
    totalAlgoRewards: 5000,
  },
  {
    type: "farm",
    dex: "Tinyman",
    from: ["AWT", "ALGO"],
    to: "META",
    totalRewards: 300,
    totalAlgoRewards: 1400,
  },
  {
    type: "farm",
    dex: "Tinyman",
    from: ["KITSU", "ALGO"],
    to: "KITSU",
    totalRewards: 10_000_000,
    totalAlgoRewards: 650,
  },
  {
    type: "farm",
    dex: "Tinyman",
    from: ["BOARD", "ALGO"],
    to: "BOARD",
    totalRewards: 20_000_000,
    totalAlgoRewards: 1850,
  },
  { type: "distribution", token: "BOARD", totalRewards: 20_000_000 },
  {
    type: "farm",
    dex: "Pact",
    from: ["VEST", "ALGO"],
    to: "VEST",
    totalRewards: 38450,
    totalAlgoRewards: 5000,
    lockDays: 7,
  },
  {
    type: "farm",
    dex: "Tinyman",
    from: ["goMINT", "ALGO"],
    to: "goMINT",
    totalRewards: 37000,
    totalAlgoRewards: 5000,
  },
  {
    type: "farm",
    dex: "Tinyman",
    from: ["GEMS", "ALGO"],
    to: "GEMS",
    totalRewards: 2500,
    totalAlgoRewards: 1100,
  },
];

const processedFarms = await Promise.all(
  FARMS.map(async (farmDesc) => {
    if (farmDesc.type === "distribution") {
      const tokenInfo = TOKENS[farmDesc.token];
      const token = Number(tokenInfo.id);
      const totalMicroRewards = BigInt(farmDesc.totalRewards) * BigInt(10 ** tokenInfo.decimals);
      const settings = {
        beneficiary: META_DEPLOY_ADDR,
        creationFee: 0,
        flatAlgoCreationFee: 0,
        token,
        beginBlock: FARMS_START_BLOCK,
        endBlock: FARMS_END_BLOCK,
        rewardPerBlock: Number(totalMicroRewards / BigInt(FARMS_DURATION)),
        extraAlgoRewardPerBlock: 0,
        lockLengthBlocks: 0,
      };

      return {
        type: "distribution",
        settings,
        metadata: { verified: true },
        description: `${farmDesc.token} distribution pool`,
      };
    } else {
      const { dex, from, to, lockDays, totalRewards, totalAlgoRewards } = farmDesc;

      let stakeToken,
        description,
        metadata = { verified: true };

      if (from.length === 2) {
        // farm (not stake)
        stakeToken = await getLPTokenId(dex, from[0], from[1]);
        metadata = {
          ...metadata,
          dex,
          asset_1_id: Number(TOKENS[from[0]].id),
          asset_2_id: Number(TOKENS[from[1]].id),
        };
        description = `${from[0]}/${from[1]} -> ${to} farm`;
      } else {
        // stake
        stakeToken = Number(TOKENS[from[0]].id);
        description = `${from[0]} -> ${to} staking pool`;
      }

      if ((lockDays ?? 0) > 0) {
        description += ` (with lock ${lockDays}d)`;
      }

      const rewardTokenInfo = TOKENS[to];
      const rewardToken = Number(rewardTokenInfo.id);
      const totalMicroRewards = BigInt(totalRewards) * BigInt(10 ** rewardTokenInfo.decimals);
      const totalMicroAlgoRewards =
        BigInt(totalAlgoRewards) * BigInt(10 ** TOKENS["ALGO"].decimals);

      const lockLengthBlocks = Math.floor(((lockDays ?? 0) * 24 * 60 * 60) / 4.35);

      const settings = {
        beneficiary: META_DEPLOY_ADDR,
        creationFee: 0,
        flatAlgoCreationFee: 0,
        stakeToken,
        rewardToken,
        beginBlock: FARMS_START_BLOCK,
        endBlock: FARMS_END_BLOCK,
        rewardPerBlock: Number(totalMicroRewards / BigInt(FARMS_DURATION)),
        extraAlgoRewardPerBlock: Number(totalMicroAlgoRewards / BigInt(FARMS_DURATION)),
        lockLengthBlocks,
      };

      return {
        type: "farm",
        settings,
        metadata,
        description,
      };
    }
  })
);

console.log(processedFarms);

// console.log("NEXT ACTION DEPLOYS FARMS!");
// process.exit(0);

// let i = 1;
// for (const farmParams of processedFarms) {
//   console.log(`deploying contract ${i}`);
//   const res = await http.post(
//     "https://api.cometa.farm/contract/deploy?password=%24C0metaT0TheM000n%24",
//     farmParams
//   );
//   console.log(`deployed contract ${i}`, res);
//   i++;
// }
