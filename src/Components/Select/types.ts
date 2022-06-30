import { SelectType } from './Select';
import { Asset } from '../../common/store';

export interface PoolOptionType {
    value: string;
    name: string;
    dex: string;
    logo1: string;
    logo2: string;
    asaId: number;
}

export type TokenOptionType = Asset & { value: string; balance: number; logo: string };

export type SelectOptionType = TokenOptionType | PoolOptionType;

export interface SelectProps {
    selectType: SelectType;
    options: SelectOptionType[];
    selectedOption: SelectOptionType;
    selectOnChange: any;
}
