import { ReactElement, useCallback, useState } from 'react';
import { useStore } from 'effector-react';
import { useQuery } from 'react-query';
//@ts-ignore TODO: type definitions for contract packages?... damn seems bad...
import { backend, reach } from '@metalabsog/crowdsale';

import { Status } from '../Status';
import { getContracts, tokensaleWhitelist } from '../providers/apiProvider';
import { useContractOptin, useReachContract } from '../common/reachHooks';
import { InfoHeader } from '../common/styled';
import { META_TOKEN_ID } from '../AppContext';
import { $account } from '../common/store';
import { Account } from '../types';
import { Button } from './styled';

type CrowdsaleProps = {
    account: Account;
    contractId: number;
};

type OptinState = 'before' | 'transactions' | 'whitelisting' | 'done';

const CrowdsaleInner = ({ account, contractId }: CrowdsaleProps): ReactElement => {
    const { ctc, state, reload } = useReachContract(backend, account, contractId);
    const { userOptedIn, optIn } = useContractOptin(reach, account, contractId, [META_TOKEN_ID]);
    const [optInState, setOptInState] = useState<OptinState>('before');
    const [tokenAmount, setTokenAmount] = useState<number>(0);

    const optInAndWhitelist = useCallback(async () => {
        setOptInState('transactions');
        await optIn();
        setOptInState('whitelisting');
        const whitelistRes = await tokensaleWhitelist(contractId, account.networkAccount.addr);
        console.log(whitelistRes);
        setOptInState('done');
    }, [optIn, contractId, account.networkAccount.addr]);

    const algoPrice = useCallback(
        (amount: number) => {
            const { rate } = state.initial;
            return Math.floor((amount * rate[1]) / rate[0]);
        },
        [state]
    );

    const setTokenAmountValidated = useCallback(
        (amount: number) => {
            const { individualCap, rate } = state.initial;
            const { alreadyBought } = state.local;

            // TODO: this leads to very annoying behaviour of form when using microtokens, but should be better with usual ones
            amount = Math.min(amount, individualCap - alreadyBought);
            amount = Math.floor((algoPrice(amount) * rate[0]) / rate[1]);
            setTokenAmount(amount);
        },
        [state, algoPrice]
    );

    const buy = useCallback(
        async (tokenAmount) => {
            const res = await ctc.a.purchase(tokenAmount);
            console.log('PURCHASE', res);
            reload();
        },
        [ctc, reload]
    );

    if (!state || !state.initial || !state.global || !state.local) {
        return <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />;
    }

    if (!userOptedIn) {
        return optInState === 'before' ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <InfoHeader>YOU ARE WHITELISTED!</InfoHeader>
                <h4 style={{ marginBottom: '20px' }}>Opt into META token and the token sale app to buy META!</h4>
                <Button onClick={optInAndWhitelist}>OPT IN</Button>
            </div>
        ) : (
            <Status status="OPTING YOU IN. PLEASE CONFIRM TRANSACTIONS" showLoading={true} />
        );
    }

    if (optInState === 'whitelisting') {
        return <Status status="PREPARING THE TOKENSALE FOR YOU" showLoading={true} />
    }

    const { totalAmount, rate, individualCap } = state.initial;
    const { sold } = state.global;
    const { alreadyBought } = state.local;

    // TODO: i dont care about user-friendly price rates and amounts (with correct decimals) for now
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>BUY META</h1>
            <br />
            <h3 style={{ marginBottom: '20px' }}>
                microMETA/microALGO rate: {rate[0]}/{rate[1]}
            </h3>
            <h3 style={{ marginBottom: '50px' }}>
                Already sold: {sold} microMETA of {totalAmount}
            </h3>

            <h4>SET AMOUNT TO BUY ({individualCap - alreadyBought} more microMETA allowed)</h4>
            <input
                type="number"
                className="token_input"
                placeholder={'10'}
                onChange={(e) => setTokenAmountValidated(parseInt(e.target.value))}
                value={tokenAmount}
            />

            <h4 style={{ marginTop: '30px' }}>microALGOs to pay: {algoPrice(tokenAmount)}</h4>
            <Button onClick={() => buy(tokenAmount)}>BUY META</Button>
        </div>
    );
};

export const Crowdsale = (): ReactElement => {
    const account = useStore($account);
    const { data, isError } = useQuery(['contracts', 'crowdsale'], () => getContracts('crowdsale'));

    if (!account) {
        return <InfoHeader>PLEASE, CONNECT THE WALLET.</InfoHeader>;
    } else if (isError || !data || data.length === 0) {
        return <InfoHeader>SALE NOT STARTED, COMING SOON!</InfoHeader>;
    }

    const contract = data.sort((a: any, b: any) => b.deployed_timestamp - a.deployed_timestamp)[0];

    if (!contract.metadata.whitelist.includes(account.networkAccount.addr)) {
        return <InfoHeader>SORRY, YOU ARE NOT IN THE WHITELIST</InfoHeader>;
    } else {
        return <CrowdsaleInner account={account} contractId={contract.id} />;
    }
};
