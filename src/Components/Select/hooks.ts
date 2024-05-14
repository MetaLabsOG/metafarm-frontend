import React, { useEffect, useState } from 'react';
import { useUnit } from 'effector-react';
import { algod } from '../../AppContext';
import { Amount, AssetId, $balances } from '../../common/store';
import { SelectOptionType } from './types';

async function getAssetByID(assetID: number, balances: Record<AssetId, Amount> | null) {
    try {
        const response = await algod.getAssetByID(assetID).do();
        const asset: SelectOptionType = {
            value: response?.index.toString(),
            id: response?.index,
            name: response?.params.name,
            unitName: response?.params['unit-name'],
            balance: Number(balances?.[assetID] ?? 0) / Math.pow(10, response?.params?.decimals),
            decimals: response?.params.decimals,
            creator: '',
            reserve: '',
        };
        return [asset];
    } catch (error) {
        return null;
    }
}

async function filterOptions(
    tokenSearchInput: string,
    options: SelectOptionType[],
    balances: Record<AssetId, Amount> | null
) {
    if (tokenSearchInput.length === 0) {
        return options;
    }

    const inputAsNumber = Number(tokenSearchInput);
    const isNumericInput = !isNaN(inputAsNumber);

    if (isNumericInput) {
        const asset = await getAssetByID(inputAsNumber, balances || null);
        return asset || options;
    }
    return (
        options.filter((option: any) => option.name.toLowerCase().includes(tokenSearchInput.toLowerCase())) || options
    );
}

const useFilteredTokenOptions = (
    options: SelectOptionType[],
    tokenSearchInput: string,
    getOptions?: ((selectedOption: SelectOptionType) => (query: string) => Promise<SelectOptionType[]>) | undefined,
    selectedOption?: SelectOptionType
) => {
    const balances = useUnit($balances);
    const [currentOptions, setCurrentOptions] = useState<SelectOptionType[]>(options);

    useEffect(() => {
        if (getOptions && selectedOption) {
            getOptions(selectedOption)(tokenSearchInput).then((options) => {
                return options;
            });
        } else {
            filterOptions(tokenSearchInput, options, balances).then((options) => {
                setCurrentOptions(options);
            });
        }
    }, [tokenSearchInput, options]);

    return currentOptions;
};

export default useFilteredTokenOptions;
