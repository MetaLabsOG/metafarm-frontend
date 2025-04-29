import inquirer from "inquirer";
import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import { parseBigNumber } from "@metalabsog/common";

const stdlib = loadStdlib();
stdlib.setProviderByName("TestNet");

// ACCOUNT DATA
const mnemonic =
  "resource one during credit release unit culture dignity now mirror notice unable left pyramid story absent start access ordinary school fresh spring dial absent among";
const nftPrize = 80010410;

const acc = await stdlib.newAccountFromMnemonic(mnemonic);

// if devNet
//stdlib.fundFromFaucet(acc, stdlib.parseCurrency(10))

const NEW = await ask.ask("Do you want to deploy?", ask.yesno);

let ctc = null;
if (NEW) {
  ctc = acc.contract(backend);
} else {
  let appId = await ask.ask("What is you app id?", (x) => x);
  appId = parseInt(appId);
  ctc = acc.contract(backend, appId);
  let api = ctc.a.Api;

  await ctc.p.Buyer({
    deployed: async () => {
      const call = async (f) => {
        let res = undefined;
        try {
          res = await f();
        } catch (e) {
          res = [`err`, e];
        }
        console.log(`res`, res);
      };

      await call(() => api.buyTicket());
      const [_, fomoInfo] = await ctc.views.Fomo.info();

      console.log(fomoInfo);
    },
    showPurchase: async (address, p1, p2) => {
      console.log("showPurchase", address, p1, p2);
    },
    showOutcome: async (address) => {
      console.log("showOutcome", address);
    },
  });
}

ctc.getInfo().then((info) => {
  console.log(`The contract is deployed as = ${parseBigNumber(info)}`);
});

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const questions = [
  {
    type: "number",
    name: "time",
    message: "how long is it goint to run (in minutes)?",
    filter: Number,
  },
];

const answers = await inquirer.prompt(questions);

const interact = {
  ...stdlib.hasRandom,
  getParams: () => ({
    // Relative deadline (how long timer will tick after the beginning/refresh).
    deadline: answers.time * 60,
    deltaDeadline: 30,
    // Initial price of tickets.
    ticketPrice: stdlib.parseCurrency(1),
    // An NFT which will serve as additional prize to the winner.
    nftPrize,
    // Affects how the ticket price changes as tickets are sold (0 means constant price).
    // TODO: consider something more interesting?
    unitPrice: stdlib.parseCurrency(0.5),
    // Funder gets part of ticket sales. This number represents denominator. Examples:
    // * ticketFeeDenominator = 2 means Funder will get 50% of sales
    // * ticketFeeDenominator = 100 means Funder will get 1% of sales
    ticketFeeDenominator: 100,
    tokensGivenPerTicket: 10,
  }),

  showPurchase: async (address, p1, p2) => {
    console.log("showPurchase", address, p1, p2);
  },
  showOutcome: async (address) => {
    console.log("showOutcome", address);
  },
  deployed: () => {
    console.log("Contract was properly initialized and ready to work");
  },
};

const part = ctc.p.Funder;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);
