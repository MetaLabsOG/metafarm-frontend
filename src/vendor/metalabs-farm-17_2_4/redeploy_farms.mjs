import * as fs from "fs";
import * as backend from "./build/index.main.mjs";
import axios from "axios";
import { BigNumber } from "ethers";
import { stdlib, deployStandardContract } from "@metalabsog/common";

const packageJson = JSON.parse(fs.readFileSync("./package.json"));

const NETWORK = "TestNet";
const VERSION = packageJson.version;
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
  return {
    ...initial,
    beneficiary: bAcc.networkAccount.addr,
    creationFee: 0,
    extraAlgoRewardPerBlock: 0,
    beginBlock: initial.beginBlock.sub(600000), // shifting for a month
    endBlock: initial.endBlock.sub(600000),
  };
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
const API_URL =
  NETWORK === "TestNet" ? "https://api.testnet.cometa.farm" : "https://api.cometa.farm";
const http = axios.create({ baseURL: API_URL });

console.log("fetching existing farms...");
let farms;
if (fs.existsSync("farms.json")) {
  farms = parseBignumsRecursive(JSON.parse(fs.readFileSync("farms.json", "utf-8")));
} else {
  farms = await http.get("/contracts?type=farm").then((resp) => parseBignumsRecursive(resp.data));
  fs.writeFileSync("farms.json", JSON.stringify(farms));
}

console.log(farms);

console.log(
  "NEXT ACTION is destructive - the farms will be deleted from backend and redeployed. Edit the source file if you are serious about it."
);
// process.exit(1);

console.log("deleting all old farms from backend...");
await http.delete("/contracts?type=farm&password=" + PASSWORD);

console.log("redeploying new farms...");
for (const farm of farms) {
  const ctc = account.contract(backend);
  const contractId = await deployStandardContract(ctc, {
    ...migrateInitialState(beneficiaryAcc, farm.metadata.cache.initial),
    isDevEnv: false,
  });
  await http.post("/contract/add?password=" + PASSWORD, {
    ...farm,
    id: contractId,
    version: VERSION,
  });
}
