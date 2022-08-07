import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useStoreMap, useUnit } from 'effector-react';
import { useQuery } from 'react-query';

// @ts-expect-error TODO: type definitions for contract packages?... damn seems bad...
import { backend, reach } from '@metalabsog/crowdsale';
import { BigNumberish } from '@ethersproject/bignumber';

import { Status } from '../Status.js';
import { getContracts, tokensaleWhitelist } from '../providers/apiProvider';
import { useContractOptin } from '../common/reachHooks';
import { InfoHeader } from '../common/styled';
import { META_TOKEN_ID } from '../AppContext';
import { $account, Amount, buildContractsStore, Contract } from '../common/store';
import { Account, Backend } from '../types';
import { unsafeFromBigint } from '../common/lib';
import { Button } from './styled';

const { $contracts, setContractInfos } = buildContractsStore('crowdsale', backend as Backend);

type CrowdsaleProps = {
    account: Account;
    contract: Contract<'crowdsale'>;
};

type OptinState = 'before' | 'transactions' | 'whitelisting' | 'done';

const CrowdsaleInner = ({ account, contract }: CrowdsaleProps) => {
    const { userOptedIn, optIn } = useContractOptin(reach, account, contract.id, [META_TOKEN_ID]);
    const [optInState, setOptInState] = useState<OptinState>('before');
    const [tokenAmount, setTokenAmount] = useState<Amount>(BigInt(0));

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
        (amount: Amount) => {
            const { rate } = state!.initial;
            return (amount * rate[1]) / rate[0];
        },
        [state]
    );

    const setTokenAmountValidated = useCallback(
        (amount: Amount) => {
            const { individualCap, rate } = state!.initial;
            const alreadyBought = state!.local?.alreadyBought ?? BigInt(0);

            // TODO: this leads to very annoying behaviour of form when using microtokens, but should be better with usual ones
            const leftToBuy = individualCap - alreadyBought;
            amount = amount < leftToBuy ? amount : leftToBuy;
            amount = (algoPrice(amount) * rate[0]) / rate[1];
            setTokenAmount(amount);
        },
        [state, algoPrice]
    );

    const buy = useCallback(
        async (tokenAmount: BigNumberish) => {
            const res = await ctc.apis.purchase([tokenAmount]);
            console.log('PURCHASE', res);
        },
        [ctc]
    );

    if (!state) {
        return <Status showLoading status="CONNECTING TO THE SMART-CONTRACT" />;
    }

    if (!userOptedIn) {
        return optInState === 'before' ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <InfoHeader>YOU ARE WHITELISTED!</InfoHeader>
                <h4 style={{ marginBottom: '20px' }}>Opt into META token and the token sale app to buy META!</h4>
                <Button isActive onClick={optInAndWhitelist}>
                    OPT IN
                </Button>
            </div>
        ) : (
            <Status showLoading status="OPTING YOU IN. PLEASE CONFIRM TRANSACTIONS" />
        );
    }

    if (optInState === 'whitelisting') {
        return <Status showLoading status="PREPARING THE TOKENSALE FOR YOU" />;
    }

    const { totalAmount, rate, individualCap } = state.initial;
    const { sold } = state.global;
    const alreadyBought = state.local?.alreadyBought ?? BigInt(0);

    // TODO: i dont care about user-friendly price rates and amounts (with correct decimals) for now
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>BUY META</h1>
            <br />
            <h3 style={{ marginBottom: '20px' }}>
                <>
                    microMETA/microALGO rate: {rate[0]}/{rate[1]}
                </>
            </h3>
            <h3 style={{ marginBottom: '50px' }}>
                <>
                    Already sold: {sold} microMETA of {totalAmount}
                </>
            </h3>

            <h4>
                <>SET AMOUNT TO BUY ({individualCap - alreadyBought} more microMETA allowed)</>
            </h4>
            <input
                type="number"
                className="tokenInput"
                placeholder="10"
                value={unsafeFromBigint(tokenAmount)}
                // TODO: remove this conversion when adding proper display with decimals
                onChange={(e) => {
                    setTokenAmountValidated(BigInt(Number.parseInt(e.target.value)));
                }}
            />

            <h4 style={{ marginTop: '30px' }}>
                <>microALGOs to pay: {algoPrice(tokenAmount)}</>
            </h4>
            <Button isActive onClick={async () => buy(tokenAmount)}>
                BUY META
            </Button>
        </div>
    );
};

export const Crowdsale = (): ReactElement => {
    const account = useUnit($account);
    const { data, isError, isSuccess } = useQuery(['contracts', 'crowdsale'], async () => getContracts('crowdsale'));

    const setContractInfosEvent = useUnit(setContractInfos);

    useEffect(() => {
        if (isSuccess && Array.isArray(data)) {
            const contracts = data.sort((a: any, b: any) => b.deployed_timestamp - a.deployed_timestamp).slice(0, 1);
            // TODO(flyingleafe) pls fix
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setContractInfosEvent(contracts);
        }
    }, [data, isError, isSuccess]);

    const contract = useStoreMap($contracts, (ls: Array<Contract<'crowdsale'>>) => ls[0]);

    if (!account) {
        return <InfoHeader>PLEASE, CONNECT THE WALLET.</InfoHeader>;
    }
    if (contract === undefined) {
        return <InfoHeader>SALE NOT STARTED, COMING SOON!</InfoHeader>;
    }

    if (!contract.info.metadata.whitelist.includes(account.networkAccount.addr)) {
        return <InfoHeader>SORRY, YOU ARE NOT IN THE WHITELIST</InfoHeader>;
    }
    return <CrowdsaleInner account={account} contract={contract} />;
};
