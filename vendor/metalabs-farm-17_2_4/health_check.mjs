import * as backend from "./build/index.main.mjs";
import { stdlib, printObjectWithBigNumbers } from "@metalabsog/common";

import inquirer from "inquirer";

const questions = [
  {
    type: "number",
    name: "contract",
    message: "Deployed contract id",
    validate(value) {
      const number = parseInt(value);
      const valid = !isNaN(number) && 85900000 <= number && number <= 200000000;
      return valid || `Please enter valid algorand app if (TestNet)`;
    },
    filter: Number,
  },
];

const answers = await inquirer.prompt(questions);

const mnemonic =
  "retire piano fly enable goose survey furnace slogan citizen idea bleak ribbon proof connect board ignore quarter piano lottery volume case also loan abstract property";
const creatorAcc = await stdlib.newAccountFromMnemonic(mnemonic);

stdlib.setProviderByName("TestNet");

const userCtc = creatorAcc.contract(backend, answers.contract);

const info = userCtc.getInfo();
console.log(`The contract is deployed as = ${info}`);

const userInteract = {
  deployed: async () => {
    throw ["done", {}];
  },
};

try {
  await userCtc.p.User(userInteract);
} catch (e) {
  if (e[0] !== "done") {
    throw e;
  }
  console.log("Contract was initialized!");
}

const initial = (await userCtc.views.initial())[1];
const global = (await userCtc.views.global())[1];

console.log("Initial state");
printObjectWithBigNumbers(initial);
console.log("Global state");
printObjectWithBigNumbers(global);
