import { loadStdlib, ask } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
import { stdlib, parseBigNumber, isBigNumber, getBalance, printObjectWithBigNumbers, call, config } from '@cometa/common'
import inquirer from 'inquirer'
import { init, deploy } from './deploy.mjs'

async function printState(ctc) {
    const [status, object] = await ctc.views.State.info()
    printObjectWithBigNumbers(object)
}

const accountsNumber = 2
const { creatorAcc, stakerAccs, stakeToken, rewardToken } = await init(accountsNumber)
await deploy(creatorAcc, stakeToken, rewardToken)
const contractId = config.get("farm.lastDeployed")
console.log(`The contract is deployed as = ${contractId}`);


// TODO const stakerCtcs = 
const stakerCtcs = stakerAccs.map(acc => acc.contract(backend, contractId));

const STAKE = 'Stake'
const UNSTAKE = 'Unstake'
const CLAIM = 'Claim'
const INFO = 'Info'
const WAIT = 'Wait'
const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'what do you want to do?',
        choices: [STAKE, UNSTAKE, CLAIM, INFO, WAIT]
    },
    {
        type: 'number',
        name: 'account',
        message: `Which account? (1-${accountsNumber})`,
        validate(value) {
            const number = parseInt(value)
            const valid = !isNaN(number) && 0 < number && number <= accountsNumber
            return valid || `Please enter integer between 1 and ${accountsNumber}`
        },
        filter: Number,
    },
    {
        type: 'input',
        name: 'amount',
        // TODO shouldn't show it if not needed 
        message: 'How much? (just press enter if Claim or Info)',
        validate(value) {
            const valid = !isNaN(parseInt(value));
            return valid || 'Please enter valid amount';
        },
        filter: Number
    }
];

console.log("Going to farm a bit :)")

while (true) {
    const answers = await inquirer.prompt(questions)
    console.log(JSON.stringify(answers, null, ' '))

    // TODO
    const ctc = stakerCtcs[answers.account - 1]
    const api = ctc.a.Farm;

    console.log("Before call")
    await printState(ctc)
    switch (answers.action) {
        case STAKE:
            await call(() => api.stake(answers.amount))
            break
        case UNSTAKE:
            await call(() => api.unstake(answers.amount))
            break
        case CLAIM:
            await call(() => api.claim());
            break
        case INFO:
            await call(() => api.getInfo());
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
}