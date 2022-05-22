import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useStore, useStoreMap } from 'effector-react';
import { useQuery } from 'react-query';
//@ts-ignore TODO: type definitions for contract packages?... damn seems bad...
import { backend, reach } from '@metalabsog/crowdsale';

import { Status } from '../Status';
import { getContracts, tokensaleWhitelist } from '../providers/apiProvider';
import { useContractOptin, useReachContract } from '../common/reachHooks';
import { InfoHeader } from '../common/styled';
import { META_TOKEN_ID } from '../AppContext';
import { $account, buildContractsStore, Contract } from '../common/store';
import { Account } from '../types';
import { Button } from './styled';

const { $contracts, triggerStateUpdate, setContractInfos } = buildContractsStore('crowdsale', backend);

type CrowdsaleProps = {
    account: Account;
    contract: Contract<'crowdsale'>;
};

type OptinState = 'before' | 'transactions' | 'whitelisting' | 'done';

const CrowdsaleInner = ({ account, contract }: CrowdsaleProps): ReactElement => {
    const { userOptedIn, optIn } = useContractOptin(reach, account, contract.id, [META_TOKEN_ID]);
    const [optInState, setOptInState] = useState<OptinState>('before');
    const [tokenAmount, setTokenAmount] = useState<number>(0);

    const { ctc, state } = contract;

    const optInAndWhitelist = useCallback(async () => {
        setOptInState('transactions');
        await optIn();
        setOptInState('whitelisting');
        const whitelistRes = await tokensaleWhitelist(contract.id, account.networkAccount.addr);
        console.log(whitelistRes);
        setOptInState('done');
    }, [optIn, contract.id, account.networkAccount.addr]);

    const algoPrice = useCallback(
        (amount: number) => {
            const { rate } = state!.initial;
            return Math.floor((amount * rate[1]) / rate[0]);
        },
        [state]
    );

    const setTokenAmountValidated = useCallback(
        (amount: number) => {
            const { individualCap, rate } = state!.initial;
            const { alreadyBought } = state!.local;

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
        },
        [ctc]
    );

    if (!state) {
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
        return <Status status="PREPARING THE TOKENSALE FOR YOU" showLoading={true} />;
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
    const { data, isError, isSuccess } = useQuery(['contracts', 'crowdsale'], () => getContracts('crowdsale'));

    useEffect(() => {
        if (isSuccess) {
            const contracts = data.sort((a: any, b: any) => b.deployed_timestamp - a.deployed_timestamp).slice(0, 1);
            setContractInfos(contracts);
        }
    }, [data, isError, isSuccess]);

    const contract = useStoreMap($contracts, (ls: Contract<'crowdsale'>[]) => ls[0]);

    if (!account) {
        return <InfoHeader>PLEASE, CONNECT THE WALLET.</InfoHeader>;
    } else if (contract === undefined) {
        return <InfoHeader>SALE NOT STARTED, COMING SOON!</InfoHeader>;
    }

    if (!contract.info.metadata.whitelist.includes(account.networkAccount.addr)) {
        return <InfoHeader>SORRY, YOU ARE NOT IN THE WHITELIST</InfoHeader>;
    } else {
        return <CrowdsaleInner account={account} contract={contract} />;
    }
};
