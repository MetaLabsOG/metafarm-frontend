import { BigNumberish } from '@ethersproject/bignumber';
import { useState, useEffect } from 'react';
import pact from '../imgs/dexes/pact.png';
import tinyman from '../imgs/dexes/tinyman.png';
import tinymanOld from '../imgs/dexes/tinymanOld.png';
import humble from '../imgs/dexes/humble.png';
import { reach } from '../AppContext';
import { SubstituteType } from '../types';
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
        return 'tinyman1.1';
    }
    if (poolDex === 'T3') {
        return 'tinyman2.0';
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
    if (poolDex === 'T3') {
        return tinyman;
    } else if (poolDex === 'T2') {
        return tinymanOld;
    } else if (poolDex === 'PT') {
        return pact;
    } else if (poolDex === 'H2') {
        return humble;
    }

    return null;
};

export const usePersistedState = <InitialValueType>(
    key: string | null | undefined,
    initialValue: InitialValueType
): [InitialValueType, React.Dispatch<React.SetStateAction<InitialValueType>>] => {
    const [storedValue, setStoredValue] = useState(() => {
        if (!key) {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item != null ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    useEffect(() => {
        if (key) {
            try {
                window.localStorage.setItem(key, JSON.stringify(storedValue));
            } catch (error) {
                //
            }
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};

export const useWalletPersistedState = <InitialValueType>(
    key: string | null | undefined,
    initialValue: InitialValueType
) => {
    const [walletAddr] = useState(() => {
        return localStorage.getItem('walletAddress');
    });

    return usePersistedState<InitialValueType>(walletAddr ? `${walletAddr}-${key}` : undefined, initialValue);
};
