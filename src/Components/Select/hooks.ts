import React, { useEffect, useState, useCallback } from 'react';
import { useUnit } from 'effector-react';
import { algod } from '../../AppContext';
import { Amount, AssetId, $balances } from '../../common/store';
import { AssetResponse, SelectOptionType } from './types';

async function getAssetByID(
    assetID: number,
    balances: Record<AssetId, Amount> | null
): Promise<SelectOptionType | null> {
    try {
        const response: AssetResponse = await (algod.getAssetByID(assetID).do() as Promise<AssetResponse>);
        const asset: SelectOptionType = {
            value: response?.index.toString(),
            id: response?.index,
            name: response?.params?.name,
            unitName: response?.params['unit-name'],
            balance: Number(balances?.[assetID] ?? 0) / Math.pow(10, response?.params?.decimals),
            decimals: response?.params?.decimals,
            creator: response?.params?.creator,
            reserve: response?.params?.reserve,
        };
        return asset;
    } catch (error) {
        console.error('Error fetching asset:', error);
        return null;
    }
}

async function filterOptions(
    tokenSearchInput: string,
    options: SelectOptionType[],
    balances: Record<AssetId, Amount> | null
): Promise<SelectOptionType[]> {
    if (!tokenSearchInput.length) return options;

    const inputAsNumber = Number(tokenSearchInput);
    const isNumericInput = !isNaN(inputAsNumber);

    if (isNumericInput) {
        const asset = await getAssetByID(inputAsNumber, balances);
        if (asset) {
            return [{ ...asset, isUnverified: true }];
        }
        return options;
    }

    return options.filter((option) => option.name.toLowerCase().includes(tokenSearchInput.toLowerCase())) || options;
}

const useFilteredTokenOptions = (
    initialOptions: SelectOptionType[],
    tokenSearchInput: string,
    getOptions?: (selectedOption: SelectOptionType) => (query: string) => Promise<SelectOptionType[]>,
    selectedOption?: SelectOptionType
) => {
    const balances = useUnit($balances);
    const [currentOptions, setCurrentOptions] = useState<SelectOptionType[]>(initialOptions);

    const fetchOptions = useCallback(async () => {
        if (getOptions && selectedOption) {
            const options = await getOptions(selectedOption)(tokenSearchInput);
            setCurrentOptions(options);
        } else {
            const options = await filterOptions(tokenSearchInput, initialOptions, balances);
            setCurrentOptions(options);
        }
    }, [tokenSearchInput, initialOptions, balances, getOptions, selectedOption]);

    useEffect(() => {
        fetchOptions();
    }, [fetchOptions]);

    return currentOptions;
};

export default useFilteredTokenOptions;
