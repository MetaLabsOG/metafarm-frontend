import { ReactElement, useContext } from "react";
import { useQuery } from 'react-query';
//@ts-ignore TODO: type definitions for contract packages?... damn seems bad...
import { backend, reach } from '@metalabsog/crowdsale';

import { getContracts } from '../providers/apiProvider';
import { useReachContract } from "../common/reachHooks";
import { InfoHeader } from '../common/styled';
import { AppContext, Context } from "../AppContext";
import { CrowdsaleT } from './types';
import { Account } from "../types";

type CrowdsaleProps = {
    account: Account;
    contractId: number;
}

const CrowdsaleInner = ({ account, contractId }: CrowdsaleProps): ReactElement => {
    const { ctc, loaded, initial, global, local } = useReachContract(backend, account, contractId);
    return <>{JSON.stringify(initial)}</>
}

export const Crowdsale = (): ReactElement => {
    const { account } = useContext(AppContext) as Context;
    const { data, isError } = useQuery(['contracts', 'farm'], () => getContracts('crowdsale'));
     
    if (!account) {
        return <InfoHeader>PLEASE, CONNECT THE WALLET.</InfoHeader>
    } else if (isError || !data || data.length === 0) {
        return <InfoHeader>SALE NOT STARTED, COMING SOON!</InfoHeader>
    } else {
        return <CrowdsaleInner account={account} contractId={data[0].id}/>
    }
}