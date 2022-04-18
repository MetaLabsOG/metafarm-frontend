import { printObjectWithBigNumbers, call, parseBigNumber, stdlib } from "@cometa/common"
import inquirer from "inquirer"
import * as backend from "./build/index.main.mjs"
import { deploy, init } from "./deploy.mjs"

async function printState(ctc) {
  const [status, object] = await ctc.views.Fomo.info()
  delete object.timeReductionPrices
  delete object.timeReductionSecs
  delete object.discountPrices
  delete object.discountPercents
  printObjectWithBigNumbers(object)
}

const accountsNumber = 2
const { creatorAcc, playerAccs, nftPrize } = await init(accountsNumber)
const {contractId, creatorCtc, playerCtcs} = await deploy(creatorAcc, playerAccs, nftPrize)
console.log(`The contract is deployed as = ${contractId}`)

const initialInfo = await playerCtcs[0].views.Fomo.info()
const metafomoToken = parseBigNumber(initialInfo[1]["token"])

if (stdlib.connector === "ALGO") {
  for (const acc of playerAccs) {
    acc.tokenAccept(metafomoToken)
  }
  console.log(`All players opted-in into token ${metafomoToken}`)
}

const playerInteract = (player) => ({
  deployed: () => {
    console.log(`Player ${player} deployed`)
  },
  showPurchase: (addr, lastPrice, newPrice) => {
    console.log(`Player ${player} showPurchase`, addr, parseBigNumber(lastPrice), parseBigNumber(newPrice))
  },
  updateDiscountLevel: (addr, level) => {
    console.log(`Player ${player} updateDiscountLevel`, addr, parseBigNumber(level))
  },
  updateTimeReductionLevel: (addr, level) => {
    console.log(`Player ${player} updateTimeReductionLevel`, addr, parseBigNumber(level))
  }
})

// Connect to receive events
playerCtcs.forEach(function (player, i) {
  player.p.Buyer(playerInteract(i))
})



const FOMO = "Bid"
const TIME_REDUCTION = "Time Reduction"
const DISCOUNT = "Discount"
const WAIT = "Wait"

const questions = [
  {
    type: "list",
    name: "action",
    message: "what do you want to do?",
    choices: [FOMO, TIME_REDUCTION, DISCOUNT, WAIT]
  },
  {
    type: "number",
    name: "account",
    message: `Which account? (1-${accountsNumber})`,
    validate(value) {
      const number = parseInt(value)
      const valid = !isNaN(number) && 0 < number && number <= accountsNumber
      return valid || `Please enter integer between 1 and ${accountsNumber}`
    },
    filter: Number,
  }
  // TODO need to support WAIT somehow
]

console.log("Going to play FOMO :)")


while (true) {
  const answers = await inquirer.prompt(questions)
  console.log(JSON.stringify(answers, null, " "))

  // TODO
  const ctc = playerCtcs[answers.account - 1]
  const api = ctc.a.Api

  console.log("Before call")
  await printState(ctc)
  switch (answers.action) {
  case FOMO:
    await call(() => api.buyTicket())
    break
  case TIME_REDUCTION:
    await call(() => api.buyTimeReduction())
    break
  case DISCOUNT:
    await call(() => api.buyDiscount())
    break
  case WAIT:
    const beforeBlock = parseInt(await stdlib.getNetworkTime())
    const afterBlock = beforeBlock + answers.amount
    console.log(`Forward from ${beforeBlock} to ${afterBlock}`)
    await stdlib.waitUntilTime(afterBlock, (status) => {
      console.log(`${status.current}/${status.target}`)
    })
    break
  default:
    console.log("Someting is very wrong, default case was reached")
  }
    
  console.log("After call")
  await printState(ctc)

  const sleep = ms => new Promise(r => setTimeout(r, ms))

  // Sleeping here to make sure participants interacts were called and printed info
  await sleep(1000)
}