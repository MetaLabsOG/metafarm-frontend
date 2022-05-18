import { ReactElement, useContext, useCallback, useState } from 'react';
import { useQuery } from 'react-query';
//@ts-ignore TODO: type definitions for contract packages?... damn seems bad...
import { backend, reach } from '@metalabsog/crowdsale';

import { Status } from '../Status';
import { algod } from '../providers/dexesProvider';
import { getContracts, tokensaleWhitelist } from '../providers/apiProvider';
import { useContractOptin, useReachContract } from '../common/reachHooks';
import { InfoHeader } from '../common/styled';
import { AppContext, Context } from '../AppContext';
import { Account } from '../types';
import { Button } from './styled';

type CrowdsaleProps = {
    account: Account;
    contractId: number;
};

const CrowdsaleInner = ({ account, contractId }: CrowdsaleProps): ReactElement => {
    const { ctc, state, reload } = useReachContract(backend, account, contractId);
    const { userOptedIn, optIn } = useContractOptin(reach, account, contractId);
    const [tokenAmount, setTokenAmount] = useState<number>(0);

    const optInAndWhitelist = useCallback(async () => {
        const optInRes = await optIn();
        console.log(optInRes);
        const whitelistRes = await tokensaleWhitelist(contractId, account.networkAccount.addr);
        console.log(whitelistRes);
    }, [optIn, contractId, account.networkAccount.addr]);

    const algoPrice = useCallback((amount: number) => {
        const { rate } = state.initial; 
        return Math.floor(amount * rate[1] / rate[0]);
    }, [state])

    const setTokenAmountValidated = useCallback((amount: number) => {
        const { individualCap, rate } = state.initial;
        const { alreadyBought } = state.local;

        // TODO: this leads to very annoying behaviour of form when using microtokens, but should be better with usual ones
        amount = Math.min(amount, individualCap - alreadyBought);
        amount = Math.floor(algoPrice(amount) * rate[0] / rate[1]);
        setTokenAmount(amount);
    }, [state, algoPrice]);

    const buy = useCallback(async (tokenAmount) => {
        const res = await ctc.a.purchase(tokenAmount);
        console.log("PURCHASE", res);
        reload();
    }, [ctc, reload])
    
    if (!userOptedIn) {
        return <Button onClick={optInAndWhitelist}>Participate in the crowdsale!</Button>;
    }

    if (!state || !state.initial || !state.global || !state.local) {
        return <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />;
    }

    const { totalAmount, rate, individualCap } = state.initial;
    const { sold } = state.global;
    const { alreadyBought } = state.local;

    // TODO: i dont care about user-friendly price rates and amounts (with correct decimals) for now
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>BUY META</h1>
            <br />
            <h3 style={{marginBottom: '20px'}}>
                microMETA/microALGO rate: {rate[0]}/{rate[1]}
            </h3>
            <h3 style={{marginBottom: '50px'}}>
                Already sold: {sold} microMETA
            </h3>

            <h4>SET AMOUNT TO BUY ({individualCap - alreadyBought} more microMETA allowed)</h4>
            <input
                type="number"
                className="token_input"
                placeholder={'10'}
                onChange={(e) => setTokenAmountValidated(parseInt(e.target.value))}
                value={tokenAmount}
            />

            <h4 style={{marginTop: '30px'}}>microALGOs to pay: {algoPrice(tokenAmount)}</h4>   
            <Button onClick={() => buy(tokenAmount)}>BUY META</Button>
        </div>
    );
};

export const Crowdsale = (): ReactElement => {
    const { account } = useContext(AppContext) as Context;
    const { data, isError } = useQuery(['contracts', 'farm'], () => getContracts('crowdsale'));

    if (!account) {
        return <InfoHeader>PLEASE, CONNECT THE WALLET.</InfoHeader>;
    } else if (isError || !data || data.length === 0) {
        return <InfoHeader>SALE NOT STARTED, COMING SOON!</InfoHeader>;
    } else {
        return <CrowdsaleInner account={account} contractId={data[0].id} />;
    }
};
