import React, { FC, useState } from 'react';
import { Action, Button, Balance, Input, MaxButton, Pacman, TokenInputWithButtonContainer } from './styled';

import pacman from '../../imgs/pacman.gif';
import { LPTokenInfo } from '../../providers/dexesProvider';
import { useStore } from 'effector-react';
import { Asset, Priced } from '../../common/store';
import { calculateTokenAmount, calculateTokenMicroAmount } from '../../common/lib';
import { Effect } from 'effector';
import { ToastTypes, useToasts } from '../../Farm/PoolList/Pool/hooks';

export interface InputWithButtonProps {
    token: LPTokenInfo | Priced<Asset>;
    tokenMicroBalance: number;
    balanceSuffix: string;
    buttonName: string;
    actionEffect: Effect<number[], any>;
    blueButtonColor?: boolean;
}

export const TokenInputWithButton: FC<InputWithButtonProps> = ({
    token,
    tokenMicroBalance,
    balanceSuffix,
    buttonName,
    actionEffect,
    blueButtonColor = false,
}) => {
    const isPending = useStore(actionEffect.pending);
    const isActive = Number(tokenMicroBalance) > 0 && !isPending;

    const [inputAmount, setInputAmount] = useState<string>('');
    const [isValidInput, setIsValidInput] = useState<boolean>(true);

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
        const inputValue = e.currentTarget.value ? parseFloat(e.currentTarget.value) : 0;
        const microAmount = calculateTokenMicroAmount(token, inputValue);
        setIsValidInput(microAmount <= tokenMicroBalance);
        setInputAmount(e.currentTarget.value);
    };

    const onClick = (amount: string) => {
        const microAmount = calculateTokenMicroAmount(token, parseFloat(inputAmount));
        if (!isPending && isValidInput && microAmount > 0) {
            actionEffect([microAmount]);
            setInputAmount('');
        }
    };

    return (
        <TokenInputWithButtonContainer>
            <Action blueColor={blueButtonColor} isActive={isActive && isValidInput}>
                <Input placeholder="0" isActive={isActive} value={inputAmount} onChange={onChange} />
                <Button isActive={!isPending} disabled={!isActive} onClick={() => onClick(inputAmount)}>
                    {isPending ? <Pacman src={pacman} /> : buttonName}
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
