import { Asset } from '../../common/store';
import { PoolInfo } from '../../dexes';
import { SelectType } from './Select';
import React from '.store/@types-react-npm-18.0.15-5275c78b86/package';

export type PoolOptionType = PoolInfo & { value: string; name: string };
export type TokenOptionType = Asset & { value: string; balance: number };
export type SelectOptionType = TokenOptionType | PoolOptionType;

export interface SelectProps {
    selectType: SelectType;
    options: SelectOptionType[];
    selectedOption: SelectOptionType;
    selectOnChange: any;
    getOptions?: (selectedOption: SelectOptionType) => (query: string) => Promise<SelectOptionType[]>;
    style?: React.CSSProperties;
}
