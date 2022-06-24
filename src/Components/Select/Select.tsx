import React, { FC } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { formatNumber } from '../../common/lib';
import './styled.css';
import './types';
import { OptionType, SelectProps } from './types';

export const SELECT_OPTION: OptionType = {
    value: '',
    title: '',
    subTitle: '',
    logo: '',
    additionalInfo: '',
};

// @ts-ignore
function OptionDescrLong({ option }) {
    return (
        <React.Fragment>
            <img alt="" className="option_icon" width="32" height="32" src={option.logo} />
            <div>
                <div style={{ fontSize: '16px', textAlign: 'left' }}>{option.title}</div>
                <div style={{ fontSize: '12px', textAlign: 'left' }}>{option.subTitle}</div>
            </div>
            {option.additionalInfo && (
                <div
                    style={{
                        marginLeft: 'auto',
                        marginRight: '50px',
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        color: '#8b8b8b',
                    }}
                >
                    additionalInfo
                </div>
            )}
        </React.Fragment>
    );
}

// @ts-ignore
export function renderOption(props, option) {
    return (
        <button {...props} className="search_option" type="button">
            <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Montserrat', whiteSpace: 'nowrap' }}>
                <OptionDescrLong option={option} />
            </div>
        </button>
    );
}

// @ts-ignore
export function renderValue(valueProps, snapshot, placeholder) {
    const { option } = snapshot;

    return (
        <div style={{ position: 'relative' }}>
            {option && !snapshot.focus && (
                <div className="option_descr">
                    <OptionDescrLong option={option} />
                </div>
            )}
            <input
                {...valueProps}
                placeholder={snapshot.focus || !snapshot.displayValue ? placeholder : ''}
                className="search_value search_value_basic"
                value={snapshot.search}
            />
        </div>
    );
}

export const Select: FC<SelectProps> = ({ options, selectedOption, selectOnChange, placeholder }) => {
    return (
        <SelectSearch
            className="select-search select-search-basic"
            options={options}
            filterOptions={fuzzySearch}
            renderOption={renderOption}
            renderValue={(props, snapshot) => renderValue(props, snapshot, placeholder)}
            search={true}
            value={selectedOption.value}
            onChange={selectOnChange}
            placeholder={placeholder}
        />
    );
};
