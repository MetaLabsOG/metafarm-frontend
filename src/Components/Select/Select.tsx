import React, { FC } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { formatNumber } from '../../common/lib';
import { PoolOptionType, SelectOptionType, SelectProps, TokenOptionType } from './types';
import './styled.css';
import './types';

export enum SelectType {
    tokenSelect,
    poolSelect,
}

export const TOKEN_OPTION: TokenOptionType = {
    value: '',
    name: '',
    unit_name: '',
    logo: '',
    balance: 0,
    decimals: 0,
};

export const POOL_OPTION: PoolOptionType = {
    value: '',
    name: '',
    dex: '',
    logo1: '',
    logo2: '',
    asaId: 0,
};

export const getPlaceholder = (selectType: SelectType) => {
    if (selectType === SelectType.tokenSelect) {
        return 'Choose token';
    }

    if (selectType === SelectType.poolSelect) {
        return 'Choose pool';
    }

    return '';
};

function TokenOption({ option, showAdditionalInfo }: { option: TokenOptionType; showAdditionalInfo: boolean }) {
    return (
        <React.Fragment>
            <img alt="" className="tokenIcon" src={option.logo} />
            <div>
                <div className="optionTitle">{option.name}</div>
                <div className="optionSubTitle">{option.unit_name}</div>
            </div>
            {showAdditionalInfo && option.balance > 0 && (
                <div className="selectAdditionalInfo">
                    Balance:
                    <br />
                    {formatNumber(option.balance)}
                </div>
            )}
        </React.Fragment>
    );
}

function PoolOption({ option }: { option: PoolOptionType }) {
    return (
        <React.Fragment>
            <div className="lpIcons">
                <img className="lpIcon" alt="" src={option.logo1} />
                <img className="lpIcon" style={{ left: '16px' }} alt="" src={option.logo2} />
            </div>
            <div>
                <div className="optionTitle">{option.name}</div>
                <div className="optionSubTitle">{option.dex}</div>
            </div>
            <div className="selectAdditionalInfo">
                ASA ID
                <br />
                {option.asaId}
            </div>
        </React.Fragment>
    );
}

function SelectOption({
    selectType,
    option,
    showAdditionalInfo,
}: {
    selectType: SelectType;
    option: SelectOptionType;
    showAdditionalInfo: boolean;
}) {
    if (selectType === SelectType.tokenSelect) {
        return <TokenOption option={option as TokenOptionType} showAdditionalInfo={showAdditionalInfo} />;
    }

    if (selectType === SelectType.poolSelect) {
        return <PoolOption option={option as PoolOptionType} />;
    }

    return <></>;
}

// @ts-ignore
export function renderOption(props, option, selectType: SelectType, showAdditionalInfo = true) {
    return (
        <button {...props} className="search_option" type="button">
            <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Montserrat', whiteSpace: 'nowrap' }}>
                <SelectOption selectType={selectType} option={option} showAdditionalInfo={showAdditionalInfo} />
            </div>
        </button>
    );
}

// @ts-ignore
function renderSelectedOption(valueProps, snapshot, selectType: SelectType) {
    const { option } = snapshot;

    return (
        <div style={{ position: 'relative' }}>
            {option && !snapshot.focus && (
                <div className="TokenOptionContainer">
                    <SelectOption selectType={selectType} option={option} showAdditionalInfo={true} />
                </div>
            )}
            <input
                {...valueProps}
                placeholder={snapshot.focus || !snapshot.displayValue ? getPlaceholder(selectType) : ''}
                className="search_value search_value_basic"
                value={snapshot.search}
            />
        </div>
    );
}

export const Select: FC<SelectProps> = ({ selectType, options, selectedOption, selectOnChange }) => {
    return (
        <SelectSearch
            className="select-search select-search-basic"
            options={options}
            value={selectedOption.value}
            renderOption={(props, option) => renderOption(props, option, selectType)}
            renderValue={(props, snapshot) => renderSelectedOption(props, snapshot, selectType)}
            filterOptions={fuzzySearch}
            search={true}
            onChange={selectOnChange}
            placeholder={getPlaceholder(selectType)}
        />
    );
};
