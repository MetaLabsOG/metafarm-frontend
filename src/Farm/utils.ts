import { BigNumberish } from '@ethersproject/bignumber';
import pact from '../imgs/dexes/pact.png';
import tinyman from '../imgs/dexes/tinyman.png';
import humble from '../imgs/dexes/humble.png';
import algofi from '../imgs/dexes/algofi.png';
import { reach } from '../AppContext';
import { Contract, SubstituteType } from '../types';
import { DexProvider } from '../dexes';
import { Amount, DistributionInitialInfo, FarmInitialInfo, SomeContract } from '../common/store';

// Reuse the view type here
export type InitialFarmState = SubstituteType<FarmInitialInfo, Amount, BigNumberish>;
export type InitialDistributionState = SubstituteType<DistributionInitialInfo, Amount, BigNumberish>;

export async function deployFarm(
    ctc: SomeContract,
    initialState: InitialFarmState | InitialDistributionState | any
): Promise<BigNumberish> {
    const creatorInteract = {
        getParams: () => initialState,
        deployed: reach.disconnect,
    };

    await reach.withDisconnect(async () => {
        await ctc.p.Creator(creatorInteract);
    });

    return ctc.getInfo();
}

export const getDexName = (poolDex: string): string => {
    if (poolDex === 'T2') {
        return 'tinyman';
    }
    if (poolDex === 'PT') {
        return 'pact';
    }
    if (poolDex === 'H2') {
        return 'humble';
    }
    return poolDex;
};

export type Image = string;

export const getDexIcon = (poolDex: DexProvider): Image | null => {
    if (poolDex === 'T2') {
        return tinyman;
    } else if (poolDex === 'PT') {
        return pact;
    } else if (poolDex === 'H2') {
        return humble;
    }

    return null;
};
