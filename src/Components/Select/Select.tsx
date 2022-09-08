import React, { FC } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { formatNumber } from '../../common/lib';
import { getAssetLogoUrl } from '../../Farm/PoolList/Pool/utils';
import { getDexIcon, getDexName } from '../../Farm/utils';
import tokenPlaceholder from '../../imgs/tokenPlaceholder.svg';
import { DexOptionType, PoolOptionType, SelectOptionType, SelectProps, TokenOptionType } from './types';
import './styled.css';

export enum SelectType {
    dexSelect,
    tokenSelect,
    poolSelect,
}

export const TOKEN_OPTION: TokenOptionType = {
    value: '',
    name: '',
    unitName: '',
    balance: 0,
    decimals: 0,
    id: 0,
    creator: '',
};

export const POOL_OPTION: PoolOptionType = {
    value: '',
    name: '',
    poolDex: 'T2',
    poolId: 0,
    asset1: 0,
    asset2: 0,
    liquidityAsset: 0,
    asset1Reserve: BigInt(0),
    asset2Reserve: BigInt(0),
    totalLiquidity: BigInt(0),
    dexFeeApr: 0,
};

export const getPlaceholder = (selectType: SelectType) => {
    if (selectType === SelectType.dexSelect) {
        return 'Choose DEX';
    }

    if (selectType === SelectType.tokenSelect) {
        return 'Choose token';
    }

    if (selectType === SelectType.poolSelect) {
        return 'Choose pool';
    }

    return '';
};

function DexOption({ option }: { option: DexOptionType }) {
    return (
        <>
            <img
                alt=""
                className="tokenIcon"
                style={{ background: 'white' }}
                src={getDexIcon(option.value) || undefined}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = tokenPlaceholder;
                }}
            />
            <div>
                <div className="optionTitle">{option.name}</div>
            </div>
        </>
    );
}

function TokenOption({ option, showAdditionalInfo }: { option: TokenOptionType; showAdditionalInfo: boolean }) {
    return (
        <>
            <img
                alt=""
                className="tokenIcon"
                src={getAssetLogoUrl(option.id)}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = tokenPlaceholder;
                }}
            />
            <div>
                <div className="optionTitle">{option.name}</div>
                <div className="optionSubTitle">{option.unitName}</div>
            </div>
            {showAdditionalInfo && option.balance > 0 && (
                <div className="selectAdditionalInfo">
                    Balance:
                    <br />
                    {formatNumber(option.balance)}
                </div>
            )}
        </>
    );
}

function PoolOption({ option }: { option: PoolOptionType }) {
    return (
        <>
            <div className="lpIcons">
                <img
                    className="lpIcon"
                    alt=""
                    src={getAssetLogoUrl(option.asset1)}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = tokenPlaceholder;
                    }}
                />
                <img
                    className="lpIcon"
                    style={{ left: '16px' }}
                    alt=""
                    src={getAssetLogoUrl(option.asset2)}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = tokenPlaceholder;
                    }}
                />
            </div>
            <div>
                <div className="optionTitle">{option.name}</div>
                <div className="optionSubTitle">{getDexName(option.poolDex)}</div>
            </div>
            <div className="selectAdditionalInfo">
                ASA ID
                <br />
                {option.liquidityAsset}
            </div>
        </>
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
    if (selectType === SelectType.dexSelect) {
        return <DexOption option={option as DexOptionType} />;
    }

    if (selectType === SelectType.tokenSelect) {
        return <TokenOption option={option as TokenOptionType} showAdditionalInfo={showAdditionalInfo} />;
    }

    if (selectType === SelectType.poolSelect) {
        return <PoolOption option={option as PoolOptionType} />;
    }

    return <></>;
}

// TODO(DariaYakovleva): please check types, looks very suspicious
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function renderOption(props, option, selectType: SelectType, showAdditionalInfo = true) {
    return (
        <button {...props} className="search_option" type="button">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'Montserrat',
                    whiteSpace: 'nowrap',
                }}
            >
                <SelectOption selectType={selectType} option={option} showAdditionalInfo={showAdditionalInfo} />
            </div>
        </button>
    );
}

// TODO(DariaYakovleva): please check types, looks very suspicious
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function renderSelectedOption(valueProps, snapshot, selectType: SelectType) {
    const { option } = snapshot;

    return (
        <div style={{ position: 'relative' }}>
            {option && !snapshot.focus && (
                <div className="TokenOptionContainer">
                    <SelectOption showAdditionalInfo selectType={selectType} option={option} />
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

export const Select: FC<SelectProps> = ({ selectType, options, selectedOption, selectOnChange, getOptions }) => {
    return (
        <SelectSearch
            search
            className="select-search select-search-basic"
            options={options}
            getOptions={getOptions ? getOptions(selectedOption) : undefined}
            value={selectedOption.value}
            renderOption={(props, option) => renderOption(props, option, selectType)}
            renderValue={(props, snapshot) => renderSelectedOption(props, snapshot, selectType)}
            filterOptions={fuzzySearch}
            placeholder={getPlaceholder(selectType)}
            onChange={selectOnChange}
        />
    );
};
