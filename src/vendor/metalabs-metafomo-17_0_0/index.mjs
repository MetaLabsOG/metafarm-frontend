import * as backend from "./build/index.main.mjs";
import { stdlib, deployStandardContract, configureUsersAndTokens } from "@metalabsog/common";
import * as reachLib from "@reach-sh/stdlib";

// Creates accounts etc.
export async function init(accountsNumber) {
  const creatorAcc = await stdlib.newTestAccount(stdlib.parseCurrency(100));
  const playerAccs = await stdlib.newTestAccounts(accountsNumber, stdlib.parseCurrency(10));
  console.log("Accounts created and funded with ALGO");

  const nftPrize = await stdlib.launchToken(creatorAcc, "FOMO NFT prize", "FOMONFT", {
    url: "https://arweave.net/CKu5PrxNiIfIHeY8eM_6zYt5pgMlKVfDgzXPCiMr5Vk",
  });
  console.log(`NFT minted as ${nftPrize.id}`);

  await configureUsersAndTokens(playerAccs, [nftPrize]);

  return {
    creatorAcc,
    playerAccs,
    nftPrize,
  };
}

export async function deploy(creatorAcc, playerAccs, nftPrize) {
  const creatorCtc = creatorAcc.contract(backend);
  const contractId = await deployStandardContract(
    creatorCtc,
    {
      // Relative deadline (how long timer will tick after the beginning/refresh).
      deadline: 60 * 60,
      deltaDeadline: 30,
      // Initial price of tickets.
      ticketPrice: stdlib.parseCurrency(0.1),
      // An NFT which will serve as additional prize to the winner.
      nftPrize: nftPrize.id,
      // Affects how the ticket price changes as tickets are sold (0 means constant price).
      // TODO: consider something more interesting?
      unitPrice: stdlib.parseCurrency(0.01),
      // Funder gets part of ticket sales. This number represents denominator. Examples:
      // * ticketFeeDenominator = 2 means Funder will get 50% of sales
      // * ticketFeeDenominator = 100 means Funder will get 1% of sales
      ticketFeeDenominator: 100,
      tokensGivenPerTicket: 10,
    },
    {
      showPurchase: async (address, p1, p2) => {
        console.log("showPurchase", address, p1, p2);
      },
      showOutcome: async (address) => {
        console.log("showOutcome", address);
      },
    }
  );

  return {
    contractId,
    creatorCtc,
    playerCtcs: playerAccs.map((acc) => acc.contract(backend, contractId)),
  };
}

export { backend, stdlib as reach, reachLib };
