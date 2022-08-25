import React from 'react';
import { TokenOptionType } from '../Select/types';

export interface SelectInputGroupProps {
    options: any;
    selectedOption: TokenOptionType;
    inputData: string;
    setInputData: React.Dispatch<React.SetStateAction<string>>;
    selectOnChange: any;
    inputOnChange?: any;
    inputDisabled?: boolean;
    selectDisabled?: boolean;
}
