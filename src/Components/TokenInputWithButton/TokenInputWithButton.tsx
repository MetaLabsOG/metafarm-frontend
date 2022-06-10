import React, { FC, useState } from 'react';
import { Action, Button, Balance, Input, MaxButton, Pacman, TokenInputWithButtonContainer } from './styled';

import pacman from '../../imgs/pacman.gif';
import { LPTokenInfo } from '../../providers/dexesProvider';
import { useStore } from 'effector-react';
import { Asset, Priced } from '../../common/store';
import { calculateTokenAmount, calculateTokenMicroAmount } from '../../common/lib';
import { Effect } from 'effector';
import { ToastTypes, useToasts } from '../../Farm/PoolList/Pool/hooks';
import { BigNumberish } from '@ethersproject/bignumber';

export interface InputWithButtonProps {
    token: LPTokenInfo | Priced<Asset>;
    tokenMicroBalance: bigint;
    balanceSuffix: string;
    buttonName: string;
    actionEffect: Effect<BigNumberish[], any>;
    blueButtonColor?: boolean;
    style?: React.CSSProperties;
}

const checkValidInput = (input: string, token: LPTokenInfo | Priced<Asset>, tokenMicroBalance: bigint) => {
    if (!input) {
        return true;
    }

    if (isNaN(Number(input))) {
        return false;
    }

    const microAmount = calculateTokenMicroAmount(token, parseFloat(input));
    return microAmount <= tokenMicroBalance;
};

export const TokenInputWithButton: FC<InputWithButtonProps> = ({
    token,
    tokenMicroBalance,
    balanceSuffix,
    buttonName,
    actionEffect,
    blueButtonColor = false,
    style,
}) => {
    const isPending = useStore(actionEffect.pending);

    const [inputAmount, setInputAmount] = useState<string>('');
    const [isValidInput, setIsValidInput] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isActive = tokenMicroBalance > 0 && !isLoading;

    useToasts({
        api: actionEffect,
        text: `${inputAmount} ${balanceSuffix} ${buttonName}`,
        pendingStatus: isPending,
        action: ToastTypes.stake,
    });

    const setInputMaxAmount = () => {
        setIsValidInput(true);
        setInputAmount(calculateTokenAmount(token, tokenMicroBalance).toString());
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValidInput(checkValidInput(e.currentTarget.value, token, tokenMicroBalance));
        setInputAmount(e.currentTarget.value);
    };

    const onClick = (amount: string) => {
        const microAmount = calculateTokenMicroAmount(token, parseFloat(inputAmount));
        if (!isLoading && isValidInput && microAmount > 0) {
            setIsLoading(true);
            setInputAmount('');
            actionEffect([microAmount]).then(() => setIsLoading(false));
        }
    };

    return (
        <TokenInputWithButtonContainer style={style}>
            <Action blueColor={blueButtonColor} isActive={isActive && isValidInput}>
                <Input placeholder="0" isActive={isActive} value={inputAmount} onChange={onChange} />
                <Button isActive={!isLoading} disabled={!isActive} onClick={() => onClick(inputAmount)}>
                    {isLoading ? <Pacman src={pacman} /> : buttonName}
                </Button>
                <MaxButton onClick={setInputMaxAmount}>MAX</MaxButton>
            </Action>
            <Balance isValid={isValidInput}>
                Balance: {calculateTokenAmount(token, tokenMicroBalance)} {balanceSuffix}{' '}
                {isValidInput ? '' : '(Not enough)'}
            </Balance>
        </TokenInputWithButtonContainer>
    );
};
