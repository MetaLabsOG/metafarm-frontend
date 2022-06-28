import { SelectType } from './Select';

export interface PoolOptionType {
    value: string;
    name: string;
    dex: string;
    logo1: string;
    logo2: string;
    asaId: number;
}

export interface TokenOptionType {
    value: string;
    name: string;
    unit_name: string;
    logo: string;
    balance: number;
    decimals: number;
}

export type SelectOptionType = TokenOptionType | PoolOptionType;

export interface SelectProps {
    selectType: SelectType;
    options: SelectOptionType[];
    selectedOption: SelectOptionType;
    selectOnChange: any;
}
