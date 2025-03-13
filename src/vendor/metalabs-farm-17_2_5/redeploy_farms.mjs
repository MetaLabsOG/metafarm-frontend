import * as fs from "fs";
import * as backend from "./build/index.main.mjs";
import * as distributionBackend from "../disribution/build/index.main.mjs";
import axios from "axios";
import { BigNumber } from "ethers";
import { stdlib, deployStandardContract } from "@metalabsog/common";

const packageJson = JSON.parse(fs.readFileSync("./package.json"));
const distrPackageJson = JSON.parse(fs.readFileSync("../disribution/package.json"));

const CONTRACT_TYPE = "distribution"; // "farm";

const BACKENDS = {
  farm: backend,
  distribution: distributionBackend,
};

const NETWORK = "TestNet";
const VERSION = {
  farm: packageJson.version,
  distribution: distrPackageJson.version,
};
const TESTNET_PASSWORD = "$C0metaT0TheM00n$";
const MAINNET_PASSWORD = ""; // TODO

function parseBignumsRecursive(obj) {
  if (
    typeof obj === "string" ||
    typeof obj === "number" ||
    typeof obj === "boolean" ||
    obj === null
  ) {
    return obj;
  } else if (obj instanceof Array) {
    return obj.map(parseBignumsRecursive);
  }

  if (obj.type === "BigNumber" && obj.hex !== undefined) {
    return BigNumber.from(obj.hex);
  } else {
    return Object.keys(obj).reduce((newObj, key) => {
      newObj[key] = parseBignumsRecursive(obj[key]);
      return newObj;
    }, {});
  }
}

function migrateInitialState(bAcc, initial) {
  return initial;
  // return {
  //   ...initial,
  //   beneficiary: bAcc.networkAccount.addr,
  //   creationFee: 0,
  //   extraAlgoRewardPerBlock: 0,
  //   beginBlock: initial.beginBlock.sub(600000), // shifting for a month
  //   endBlock: initial.endBlock.sub(600000),
  // };
}

const mnemonic =
  "retire piano fly enable goose survey furnace slogan citizen idea bleak ribbon proof connect board ignore quarter piano lottery volume case also loan abstract property";

const testnet_beneficiary_mnemonic =
  "drop mixture cram custom twist sport people caught please able cactus effort fog circle flat enhance merge spy orient effort stool have motor ability onion";
const mainnet_beneficiary_mnemonic =
  "excite muffin service clump abandon figure census please onion coyote cheap route glass deliver diesel load walnut need bone ill liquid grief before absorb flower";

const account = await stdlib.newAccountFromMnemonic(mnemonic);
const beneficiaryAcc = await stdlib.newAccountFromMnemonic(
  NETWORK == "TestNet" ? testnet_beneficiary_mnemonic : mainnet_beneficiary_mnemonic
);

stdlib.setProviderByName(NETWORK);

const PASSWORD = NETWORK == "TestNet" ? TESTNET_PASSWORD : MAINNET_PASSWORD;
const FILE_NAME = `${CONTRACT_TYPE}s.json`;
const API_URL =
  NETWORK === "TestNet" ? "https://api.testnet.cometa.farm" : "https://api.cometa.farm";
const http = axios.create({ baseURL: API_URL });

console.log("fetching existing farms...");
let farms;
if (fs.existsSync(FILE_NAME)) {
  farms = parseBignumsRecursive(JSON.parse(fs.readFileSync(FILE_NAME, "utf-8")));
} else {
  farms = await http
    .get(`/contracts?type=${CONTRACT_TYPE}`)
    .then((resp) => parseBignumsRecursive(resp.data));
  fs.writeFileSync(FILE_NAME, JSON.stringify(farms));
}

console.log(farms);

console.log(
  "NEXT ACTION is destructive - the farms will be deleted from backend and redeployed. Edit the source file if you are serious about it."
);
// process.exit(1);

console.log("deleting all old farms from backend...");
await http.delete(`/contracts?type=${CONTRACT_TYPE}&password=${PASSWORD}`);

console.log("redeploying new farms...");
await Promise.all(
  farms.map(async (farm) => {
    const ctc = account.contract(BACKENDS[CONTRACT_TYPE]);
    const contractId = await deployStandardContract(
      ctc,
      migrateInitialState(beneficiaryAcc, farm.metadata.cache.initial)
    );
    console.log(`contract ${contractId} is on the network`);
    await http.post("/contract/add?password=" + PASSWORD, {
      ...farm,
      id: contractId,
      version: VERSION[CONTRACT_TYPE],
    });
    console.log(`contract ${contractId} is on the backend`);
  })
);
