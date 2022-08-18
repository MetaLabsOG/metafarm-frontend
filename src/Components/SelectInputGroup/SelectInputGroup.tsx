import { FC, useState } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { renderOption, SelectType } from '../Select/Select';
import { formatNumber } from '../../common/lib';
import '../Select/styled.css';
import { getAssetLogoUrl } from '../../Farm/PoolList/Pool/utils';
import { theme } from '../../theme';
import { MaxButton } from '../TokenInputWithButton/styled';
import { SelectInputGroupProps } from './types';
import './styled.css';

function TokenOption({ option }: { option: any }) {
    return (
        <div className="TokenOptionContainer">
            <img alt="" className="tokenIcon" width="32" height="32" src={getAssetLogoUrl(option.id)} />
            <div style={{ fontSize: '16px', textAlign: 'left' }}>{option.unitName}</div>
        </div>
    );
}

// TODO(DariaYakovleva): please check types, looks very suspicious
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function renderSelectedOption(valueProps, snapshot) {
    const { option } = snapshot;

    return (
        <div style={{ position: 'relative' }}>
            {option && !snapshot.focus && <TokenOption option={option} />}
            <input
                {...valueProps}
                placeholder={snapshot.focus || !snapshot.displayValue ? 'Choose token' : ''}
                className="search_value"
                value={snapshot.search}
            />
        </div>
    );
}

export const SelectInputGroup: FC<SelectInputGroupProps> = ({
    options,
    selectedOption,
    inputData,
    setInputData,
    selectOnChange,
    inputOnChange,
    inputDisabled,
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
        <div className="SelectInputGroupContainer">
            <SelectSearch
                search
                className="select-search"
                options={options}
                filterOptions={fuzzySearch}
                renderOption={(props, option) => renderOption(props, option, SelectType.tokenSelect, false)}
                renderValue={(props, snapshot) => renderSelectedOption(props, snapshot)}
                value={selectedOption.value}
                placeholder=""
                onChange={selectOnChange}
            />
            <div style={{ width: '100%', position: 'relative' }}>
                <input
                    disabled={inputDisabled}
                    className="tokenInput"
                    placeholder={!inputDisabled ? 'Enter amount' : '0'}
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

                <div className="tokenBalance" style={isValidInput ? {} : { color: theme.red }}>
                    Balance: {formatNumber(!Number.isNaN(selectedOption.balance) ? selectedOption.balance : 0)}
                    {isValidInput ? '' : ' (Not enough)'}
                </div>
                {selectedOption.balance > 0 && !inputDisabled && (
                    <MaxButton
                        isActive
                        style={{
                            fontSize: '16px',
                            background: '#272727',
                            marginTop: '8px',
                            left: '70%',
                        }}
                        onClick={setInputMaxAmount}
                    >
                        MAX
                    </MaxButton>
                )}
            </div>
        </div>
    );
};
