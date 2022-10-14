import React, { FC, useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { formatNumber } from '../../common/lib';
import { getAssetLogoUrl } from '../../Farm/PoolList/Pool/utils';
import { getDexName } from '../../Farm/utils';
import tokenPlaceholder from '../../imgs/tokenPlaceholder.svg';
import select from '../../imgs/select.svg';

import {
    LpIcon,
    LpIcons,
    OptionAdditionalInfo,
    OptionSubtitle,
    OptionTitle,
    OptionContainer,
    SelectContainer,
    SelectModalContainer,
    SelectOptionContainer,
    SelectSearch,
    TokenIcon,
} from './styled';
import { PoolOptionType, SelectOptionType, SelectProps, TokenOptionType } from './types';

export enum SelectType {
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

function TokenOption({ option, showAdditionalInfo }: { option: TokenOptionType; showAdditionalInfo: boolean }) {
    return (
        <OptionContainer>
            <TokenIcon
                alt=""
                src={getAssetLogoUrl(option.id)}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = tokenPlaceholder;
                }}
            />
            <div>
                <OptionTitle>{option.name}</OptionTitle>
                <OptionSubtitle>{option.unitName}</OptionSubtitle>
            </div>
            {showAdditionalInfo && option.balance > 0 && (
                <OptionAdditionalInfo>
                    Balance:
                    <br />
                    {formatNumber(option.balance)}
                </OptionAdditionalInfo>
            )}
        </OptionContainer>
    );
}

function PoolOption({ option }: { option: PoolOptionType }) {
    return (
        <OptionContainer>
            <LpIcons>
                <LpIcon
                    alt=""
                    src={getAssetLogoUrl(option.asset1)}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = tokenPlaceholder;
                    }}
                />
                <LpIcon
                    style={{ left: '16px' }}
                    alt=""
                    src={getAssetLogoUrl(option.asset2)}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = tokenPlaceholder;
                    }}
                />
            </LpIcons>
            <div>
                <OptionTitle>{option.name}</OptionTitle>
                <OptionSubtitle>{getDexName(option.poolDex)}</OptionSubtitle>
            </div>
            <OptionAdditionalInfo>
                ASA ID
                <br />
                {option.liquidityAsset}
            </OptionAdditionalInfo>
        </OptionContainer>
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

export const Select: FC<SelectProps> = ({ selectType, options, selectedOption, selectOnChange, getOptions }) => {
    const [SelectModal, openSelectModal, closeSelectModal] = useModal('root');
    const [tokenSearchInput, setTokenSearchInput] = useState<string>('');
    const [currentOptions, setCurrentOptions] = useState<SelectOptionType[]>(options);

    useEffect(() => {
        setCurrentOptions(options);
    }, [options]);

    useEffect(() => {
        if (getOptions) {
            getOptions(selectedOption)(tokenSearchInput).then((options) => {
                setCurrentOptions(options);
            });
        } else {
            setCurrentOptions(
                options.filter((option) => option.name.toLowerCase().includes(tokenSearchInput.toLowerCase()))
            );
        }
    }, [tokenSearchInput]);

    return (
        <>
            <SelectContainer onClick={openSelectModal}>
                <SelectOption showAdditionalInfo selectType={selectType} option={selectedOption} />
                <img style={{ width: '15px', marginRight: '16px' }} alt="select" src={select} />
            </SelectContainer>
            <SelectModal>
                <SelectModalContainer>
                    <SelectSearch
                        placeholder="Search token name"
                        value={tokenSearchInput}
                        onChange={(e) => {
                            setTokenSearchInput(e.target.value);
                        }}
                    />
                    {currentOptions.slice(0, 10).map((option) => (
                        <SelectOptionContainer
                            key={option.name}
                            onClick={() => {
                                selectOnChange(option);
                                closeSelectModal();
                            }}
                        >
                            <SelectOption showAdditionalInfo selectType={selectType} option={option} />
                        </SelectOptionContainer>
                    ))}
                </SelectModalContainer>
            </SelectModal>
        </>
    );
};
