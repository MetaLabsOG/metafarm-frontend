import React, { FC } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { renderOption, SelectType } from '../Select/Select';
import { formatNumber } from '../../common/lib';
import { SelectInputGroupProps } from './types';
import '../Select/styled.css';
import './styled.css';

// @ts-ignore
function TokenOption({ option }) {
    return (
        <div className="TokenOptionContainer">
            <img alt="" className="tokenIcon" width="32" height="32" src={option.logo} />
            <div style={{ fontSize: '16px', textAlign: 'left' }}>{option.unit_name}</div>
        </div>
    );
}

// @ts-ignore
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
    selectOnChange,
    inputOnChange,
}) => {
    return (
        <div className="SelectInputGroupContainer">
            <SelectSearch
                className="select-search"
                options={options}
                filterOptions={fuzzySearch}
                renderOption={(props, option) => renderOption(props, option, SelectType.tokenSelect, false)}
                renderValue={(props, snapshot) => renderSelectedOption(props, snapshot)}
                search={true}
                value={selectedOption.value}
                onChange={selectOnChange}
                placeholder=""
            />
            <div style={{ width: '100%' }}>
                <input className="tokenInput" placeholder={'Enter amount'} onChange={inputOnChange} value={inputData} />
                {selectedOption.balance > 0 && (
                    <div className="tokenBalance">Balance: {formatNumber(selectedOption.balance)}</div>
                )}
            </div>
        </div>
    );
};
