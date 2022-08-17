import { Asset } from '../../common/store';
import { PoolInfo } from '../../dexes';
import { SelectType } from './Select';

export type PoolOptionType = PoolInfo & { value: string; name: string };
export type TokenOptionType = Asset & { value: string; balance: number };
export type SelectOptionType = TokenOptionType | PoolOptionType;

export interface SelectProps {
    selectType: SelectType;
    options: SelectOptionType[];
    selectedOption: SelectOptionType;
    selectOnChange: any;
}
