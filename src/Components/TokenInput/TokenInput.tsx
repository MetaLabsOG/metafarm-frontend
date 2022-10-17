import React, { useState } from 'react';
import { fromSmallestUnits } from '../../common/lib';
import { LPTokenInfo } from '../../dexes';
import { Asset, Priced } from '../../common/store';
import { checkValidInput } from '../TokenInputWithButton/TokenInputWithButton';
import { TokenInputContainer, Balance, Input, MaxButton } from './styled';

export interface TokenInputProps {
    token: LPTokenInfo | Priced<Asset>;
    tokenMicroBalance: bigint;
    tokenInput: string;
    setTokenInput: React.Dispatch<React.SetStateAction<string>>;
}

export const TokenInput = ({ token, tokenMicroBalance, tokenInput, setTokenInput }: TokenInputProps) => {
    const [isValidInput, setIsValidInput] = useState<boolean>(true);

    const setInputMaxAmount = () => {
        setIsValidInput(true);
        const tokenAmount = fromSmallestUnits(token, tokenMicroBalance).toString();
        setTokenInput(tokenAmount);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number.isNaN(Number(e.currentTarget.value))) {
            return;
        }
        setIsValidInput(checkValidInput(e.currentTarget.value, token, tokenMicroBalance));
        setTokenInput(e.currentTarget.value);
    };

    return (
        <TokenInputContainer>
            <Input placeholder="Enter amount" isActive={isValidInput} value={tokenInput} onChange={onChange} />
            <MaxButton onClick={setInputMaxAmount}>MAX</MaxButton>
            <Balance isValid={isValidInput}>
                Balance: {fromSmallestUnits(token, tokenMicroBalance)} {token.unitName}{' '}
                {isValidInput ? '' : '(Not enough)'}
            </Balance>
        </TokenInputContainer>
    );
};
