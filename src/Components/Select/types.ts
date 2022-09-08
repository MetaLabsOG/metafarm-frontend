import { Asset } from '../../common/store';
import { DexProvider, PoolInfo } from '../../dexes';
import { SelectType } from './Select';

export type DexOptionType = { name: string; value: DexProvider };
export type PoolOptionType = PoolInfo & { value: string; name: string };
export type TokenOptionType = Asset & { value: string; balance: number };
export type SelectOptionType = DexOptionType | TokenOptionType | PoolOptionType;

export interface SelectProps {
    selectType: SelectType;
    options: SelectOptionType[];
    selectedOption: SelectOptionType;
    selectOnChange: any;
    getOptions?: (selectedOption: SelectOptionType) => (query: string) => Promise<SelectOptionType[]>;
}
