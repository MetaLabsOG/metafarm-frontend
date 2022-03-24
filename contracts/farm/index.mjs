import { loadStdlib, ask } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
import inquirer from 'inquirer'

const stdlib = loadStdlib(process.env)
stdlib.setProviderByName('LocalHost')


const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (acc) => fmt(await stdlib.balanceOf(acc));
const isBigNumber = (n) => n.hasOwnProperty("_isBigNumber")

function parseBigNumber(bn) {
    const hex = bn._hex.slice(2);
    return parseInt(hex, 16);
}

function printObjectWithBigNumbers(object) {
    if (object == null) {
        return null;
    }
    for (const p in object) {
        const val = object[p];
        if (isBigNumber(val)) {
            console.log(p, parseBigNumber(val));
        } else {
            console.log(p, val);
        }
    }
}


async function printState(ctc) {
    const [status, object] = await ctc.views.State.info()
    printObjectWithBigNumbers(object)
}

//const creatorMnemonic = "surface impulse merge slice ankle thunder dawn nephew face speak dirt rain ladder absent clutch tooth exit claim slim mask motion hint kind absorb witness"
//const creatorAcc = await stdlib.newAccountFromMnemonic(creatorMnemonic)

//const stakerMnemonic = "occur virtual daring rhythm clog excite loop output clog stove abuse frown assume youth hole dose typical ribbon worth shallow enjoy cross impose absent bachelor"
//const stakerAcc = await stdlib.newAccountFromMnemonic(stakerMnemonic)

const creatorAcc = await stdlib.newTestAccount(stdlib.parseCurrency(100))

// TODO use arrays etc.
const accountsNumber = 2

const stakerAccs = await stdlib.newTestAccounts(accountsNumber, stdlib.parseCurrency(10))
const stakerAcc1 = await stdlib.newTestAccount(stdlib.parseCurrency(10))
const stakerAcc2 = await stdlib.newTestAccount(stdlib.parseCurrency(10))
console.log("Accounts created and funded with ALGO")


const stakeToken = await stdlib.launchToken(creatorAcc, "Staky", "STAKE")
const rewardToken = await stdlib.launchToken(creatorAcc, "Rewardy", "REWARD")
console.log("Staking and reward tokens minted")

if (stdlib.connector === 'ETH' || stdlib.connector === 'CFX') {
    const myGasLimit = 5000000;
    accAlice.setGasLimit(myGasLimit);
    accBob.setGasLimit(myGasLimit);
} else if (stdlib.connector == 'ALGO') {
    await stakerAcc1.tokenAccept(stakeToken.id)
    await stakerAcc2.tokenAccept(stakeToken.id)
    await stakerAcc1.tokenAccept(rewardToken.id)
    await stakerAcc2.tokenAccept(rewardToken.id)
    for (const acc of stakerAccs) {
        await acc.tokenAccept(stakeToken.id)
        await acc.tokenAccept(rewardToken.id)
    } 
    console.log("Stakers opted in")
} else {
    console.log("Unsupported connector " + stdlib.connector)

}

const initalStakyBalance = 1000000
await stdlib.transfer(creatorAcc, stakerAcc1, initalStakyBalance, stakeToken.id)
await stdlib.transfer(creatorAcc, stakerAcc2, initalStakyBalance, stakeToken.id)
for (const acc of stakerAccs) {
    await stdlib.transfer(creatorAcc, acc, initalStakyBalance, stakeToken.id)
}
console.log("Stakers received STAKE token")


async function deploy() {
    const creatorCtc = creatorAcc.contract(backend)
    const currentBlock = Math.floor(Date.now() / 1000)
    const runningBlocks = 1000
    const rewardPerBlock = 1000
    const creatorInteract = {
        getParams: () => ({
            stakeToken: stakeToken.id,
            rewardToken: rewardToken.id,
            beginBlock: currentBlock,
            endBlock: currentBlock + runningBlocks,
            totalRewardAmount: runningBlocks * rewardPerBlock, // 1000 microtokens per second. On algo it is 1/1000 ALGO.
        }),
        deployed: async () => {
            throw ['done', {}]
        }
    };

    try {
        await creatorCtc.p.Creator(creatorInteract)
    } catch (e) {
        if (e[0] === 'done') {
            //return e[1]
        } else {
            throw e
        }
    }

    const info = await creatorCtc.getInfo()
    let parsedId = null;
    if (isBigNumber(info)) {
        parsedId = parseBigNumber(info);
    } else {
        parsedId = JSON.stringify(info);
    }

    return parsedId
}

const contractId = await deploy()
console.log(`The contract is deployed as = ${contractId}`);
const initialCreatorBalance = await getBalance(creatorAcc);
console.log(`Creator balance is ${initialCreatorBalance}`);

const staker1Ctc = stakerAcc1.contract(backend, contractId);
const staker2Ctc = stakerAcc2.contract(backend, contractId);

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

// TODO do we even need to connect as a participant? 
// Actually we do because it is useful to get notified about global state upadates
// But we probably do not need it right now.
await staker1Ctc.p.Farmer({
    deployed: async () => {
        let ctc = null
        const call = async (f) => {
            console.log("Before call")
            await printState(ctc)

            let res = undefined
            try {
                res = await f()
            } catch (e) {
                res = [`err`, e]
            }
            console.log(`Result:\n`)
            printObjectWithBigNumbers(res)
            console.log('\n')
            const [stateStatus, stateInfo] = await ctc.views.State.info()

            console.log("After call")
            await printState(ctc)
        };


        while (true) {
            const answers = await inquirer.prompt(questions)
            console.log(JSON.stringify(answers, null, ' '))

            // TODO
            if (answers.account == 1) {
                ctc = staker1Ctc
            } else {
                ctc = staker2Ctc
            }

            const api = ctc.a.Farm;
            
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
        }
    },
    // TODO other farmer interact functions
})