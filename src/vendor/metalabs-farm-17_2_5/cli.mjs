import { stdlib, printObjectWithBigNumbers, call } from "@metalabsog/common";
import inquirer from "inquirer";
import { init, deploy } from "./deploy.mjs";

async function printState(ctc) {
  const [_, object] = await ctc.views.global();
  printObjectWithBigNumbers(object);
}

const accountsNumber = 2;
const { creatorAcc, userAccs, tokens } = await init(accountsNumber);

const { stakeToken, rewardToken } = tokens;
const { contractId, userCtcs } = await deploy(creatorAcc, userAccs, stakeToken, rewardToken);
console.log(`The contract is deployed as = ${contractId}`);

const STAKE = "Stake";
const UNSTAKE = "Unstake";
const CLAIM = "Claim";
const WAIT = "Wait";
const questions = [
  {
    type: "list",
    name: "action",
    message: "what do you want to do?",
    choices: [STAKE, UNSTAKE, CLAIM, WAIT],
  },
  {
    type: "number",
    name: "account",
    message: `Which account? (1-${accountsNumber})`,
    validate(value) {
      const number = parseInt(value);
      const valid = !isNaN(number) && 0 < number && number <= accountsNumber;
      return valid || `Please enter integer between 1 and ${accountsNumber}`;
    },
    filter: Number,
  },
  {
    type: "input",
    name: "amount",
    // TODO shouldn't show it if not needed
    message: "How much? (just press enter if Claim or Info)",
    validate(value) {
      const valid = !isNaN(parseInt(value));
      return valid || "Please enter valid amount";
    },
    filter: Number,
  },
];

console.log("Going to farm a bit :)");

for (;;) {
  const answers = await inquirer.prompt(questions);
  console.log(JSON.stringify(answers, null, " "));

  // TODO
  const ctc = userCtcs[answers.account - 1];
  const api = ctc.a;

  console.log("Before call");
  await printState(ctc);
  switch (answers.action) {
    case STAKE:
      await call(() => api.stake(answers.amount));
      break;
    case UNSTAKE:
      await call(() => api.unstake(answers.amount));
      break;
    case CLAIM:
      await call(() => api.claim());
      break;
    case WAIT: {
      const beforeBlock = parseInt(await stdlib.getNetworkTime());
      const afterBlock = beforeBlock + answers.amount;
      console.log(`Forward from ${beforeBlock} to ${afterBlock}`);
      await stdlib.waitUntilTime(afterBlock, (status) => {
        console.log(`${status.current}/${status.target}`);
      });
      break;
    }
    default:
      console.log("Someting is very wrong, default case was reached");
  }

  console.log("After call");
  await printState(ctc);
}
