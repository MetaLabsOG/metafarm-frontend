import React, { FC, useState } from 'react';
import { formatNumber } from '../../common/lib';
import { theme } from '../../theme';
import { MaxButton } from '../TokenInputWithButton/styled';
import { Select, SelectType } from '../Select/Select';
import { SelectContainer, SelectInputGroupContainer, TokenInput } from './styled';
import { SelectInputGroupProps } from './types';

export const SelectInputGroup: FC<SelectInputGroupProps> = ({
    options,
    selectedOption,
    inputData,
    setInputData,
    selectOnChange,
    inputOnChange,
    inputDisabled = false,
    selectDisabled = false,
}) => {
    const [isValidInput, setIsValidInput] = useState<boolean>(true);

    const setInputMaxAmount = () => {
        setIsValidInput(true);
        const newInputData = formatNumber(selectedOption.balance).toString();
        const changed = newInputData !== inputData;
        setInputData(newInputData);
        if (changed) {
            inputOnChange?.(newInputData);
        }
    };

    return (
        <SelectInputGroupContainer>
            <SelectContainer>
                <Select
                    selectType={SelectType.selectInputGroup}
                    options={options}
                    selectedOption={selectedOption}
                    selectOnChange={selectOnChange}
                    style={{ border: 0 }}
                />
            </SelectContainer>
            <TokenInput
                disabled={inputDisabled}
                placeholder="0"
                value={inputData}
                onChange={(e) => {
                    if (Number.isNaN(Number(e.target.value))) {
                        return;
                    }
                    const isValidInput =
                        !e.target.value ||
                        Number.isNaN(selectedOption.balance) ||
                        Number(e.target.value) <= selectedOption.balance;
                    setIsValidInput(isValidInput);
                    setInputData(e.target.value);
                    inputOnChange && inputOnChange(e.target.value);
                }}
            />

            {/*<TokenBalance style={isValidInput ? {} : { color: theme.red }}>*/}
            {/*    Balance: {formatNumber(!Number.isNaN(selectedOption.balance) ? selectedOption.balance : 0)}*/}
            {/*    {isValidInput ? '' : ' (Not enough)'}*/}
            {/*</TokenBalance>*/}
            {selectedOption.balance > 0 && !inputDisabled && (
                <MaxButton
                    isActive
                    style={{
                        fontSize: 13,
                        background: theme.backgroundModal,
                        marginTop: 20,
                        left: 188,
                        borderRadius: 20,
                        color: theme.newLightGray,
                    }}
                    onClick={setInputMaxAmount}
                >
                    max
                </MaxButton>
            )}
        </SelectInputGroupContainer>
    );
};
