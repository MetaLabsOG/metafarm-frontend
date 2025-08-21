import axios from 'axios';
import { loadStdlib } from '@reach-sh/stdlib';
// @ts-expect-error No provided type bindings in contracts package
import { backend as farmBackend_17_2_4 } from 'metalabs-farm-17_2_4';
// @ts-expect-error No provided type bindings in contracts package
import { backend as farmBackend_17_2_5 } from 'metalabs-farm-17_2_5';
// @ts-expect-error No provided type bindings in contracts package
import { backend as distribution_17_0_4 } from 'metalabs-distribution-17_0_4';
// @ts-expect-error No provided type bindings in contracts package
import { backend as distribution_17_0_5 } from 'metalabs-distribution-17_0_5';
import { algod } from './AppContext';
import { batchOptIn, checkOptIn } from './batchOptIn';

const mnemonic = '';

const CONTRACT_BACKENDS = {
    farm: {
        '17.2.4': farmBackend_17_2_4,
        '17.2.5': farmBackend_17_2_5,
    },
    distribution: {
        '17.0.4': distribution_17_0_4,
        '17.0.5': distribution_17_0_5,
    },
};

export async function collectFees() {
    const stdlib = loadStdlib();
    const acc = await stdlib.newAccountFromMnemonic(mnemonic);
    stdlib.setProviderByName('MainNet');

    const cometaUrl = 'https://api.cometa.farm';

    for (const type of Object.keys(CONTRACT_BACKENDS)) {
        const contractList = await axios.get(`${cometaUrl}/contracts?type=${type}?new_first=true`).then(({ data }) => data);
        // console.log(contractList);
        console.log(`DOING ${type}, contracts: ${contractList.length}`);

        for (const pool of contractList) {
            try {
                const poolId = pool.id;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const ctc = acc.contract(CONTRACT_BACKENDS[type][pool.version], poolId);
                const address = await ctc.getContractAddress();
                const accountInfo = await algod.accountInformation(stdlib.formatAddress(address)).do();
                const algoBalance = accountInfo.amount / 1_000_000;
                console.log(pool.description, poolId, algoBalance);
                console.log(`claiming fees from ${type} pool ${poolId}`);
                // const optInId = pool.metadata.reward_token_id;
                // const isTokenOptIn = optInId ? await checkOptIn(acc.networkAccount.addr, optInId) : true;
                // if (!isTokenOptIn) {
                //     console.log('OPT-IN', optInId);
                //     // await batchOptIn(reach, acc.networkAccount.addr, [Number(optInId)], true);
                // }

                await ctc.a.claimFees();
                console.log('OK');
            } catch (e) {
                console.log(e);
            }
        }
        console.log('DONE!');
    }
}
