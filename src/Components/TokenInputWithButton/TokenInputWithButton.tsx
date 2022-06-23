import React, { FC, useState } from 'react';
import { Action, Balance, Input, MaxButton, TokenInputWithButtonContainer } from './styled';

import { LPTokenInfo } from '../../providers/dexesProvider';
import { useStore } from 'effector-react';
import { $account, Asset, Priced } from '../../common/store';
import { calculateTokenAmount, calculateTokenMicroAmount } from '../../common/lib';
import { Effect } from 'effector';
import { ToastTypes, useToasts } from '../../Farm/PoolList/Pool/hooks';
import { BigNumberish } from '@ethersproject/bignumber';
import { PacmanButton } from '../PacmanButton/PacmanButton';
import { logFarmActionData } from '../../logEvent';

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
    const account = useStore($account);
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
        if (isNaN(Number(e.currentTarget.value))) {
            return;
        }
        setIsValidInput(checkValidInput(e.currentTarget.value, token, tokenMicroBalance));
        setInputAmount(e.currentTarget.value);
    };

    const onClick = async () => {
        const microAmount = calculateTokenMicroAmount(token, parseFloat(inputAmount));
        if (!isLoading && isValidInput && microAmount > 0) {
            logFarmActionData(account, buttonName, inputAmount, token as LPTokenInfo);
            setIsLoading(true);
            setInputAmount('');
            try {
                await actionEffect([microAmount]);
            } catch (e) {
                // @ts-ignore
                const error_message = e.message;
                console.log(error_message);
                logFarmActionData(
                    account,
                    buttonName + ' ERROR',
                    inputAmount,
                    token as LPTokenInfo,
                    null,
                    error_message
                );
            }
            setIsLoading(false);
        }
    };

    return (
        <TokenInputWithButtonContainer style={style}>
            <Action blueColor={blueButtonColor} isActive={isActive && isValidInput}>
                <Input placeholder="0" isActive={isActive} value={inputAmount} onChange={onChange} />
                <PacmanButton
                    style={blueButtonColor ? { color: '#55D6FF' } : {}}
                    buttonText={buttonName}
                    buttonStyle="token_input_button"
                    onClickAction={() => onClick()}
                    isInactive={!isValidInput || !isActive}
                />
                <MaxButton onClick={setInputMaxAmount}>MAX</MaxButton>
            </Action>
            <Balance isValid={isValidInput}>
                Balance: {calculateTokenAmount(token, tokenMicroBalance)} {balanceSuffix}{' '}
                {isValidInput ? '' : '(Not enough)'}
            </Balance>
        </TokenInputWithButtonContainer>
    );
};
