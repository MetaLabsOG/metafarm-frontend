import React, { FC, useState } from 'react';
import { Action, Balance, Input, MaxButton, TokenInputWithButtonContainer } from './styled';

import { LPTokenInfo } from '../../providers/dexesProvider';
import { useEvent, useStore } from 'effector-react';
import { $account, Asset, Priced } from '../../common/store';
import { fromMicros, getMicros, sleep } from '../../common/lib';
import { Effect } from 'effector';
import { notify, ToastTypes, useToasts } from '../Notification';
import { BigNumberish } from '@ethersproject/bignumber';
import { PacmanButton } from '../PacmanButton/PacmanButton';
import { logFarmActionData } from '../../logEvent';
import Confetti from '../Confetti/Confetti';
import { batchOptIn, checkOptIn } from '../../batchOptIn.mjs';
import { reach } from '../../AppContext';

export interface InputWithButtonProps {
    token: LPTokenInfo | Priced<Asset>;
    tokenMicroBalance: bigint;
    balanceSuffix: string;
    buttonName: string;
    actionEffect: Effect<BigNumberish[], any>;
    optInId: number;
    style?: React.CSSProperties;
    hasLock?: boolean;
}

const checkValidInput = (input: string, token: LPTokenInfo | Priced<Asset>, tokenMicroBalance: bigint) => {
    if (!input) {
        return true;
    }

    if (isNaN(Number(input))) {
        return false;
    }

    const microAmount = getMicros(token, parseFloat(input));
    return microAmount <= tokenMicroBalance;
};

export const TokenInputWithButton: FC<InputWithButtonProps> = ({
    token,
    tokenMicroBalance,
    balanceSuffix,
    buttonName,
    // eslint-disable-next-line effector/mandatory-useEvent
    actionEffect,
    optInId,
    style,
    hasLock,
}) => {
    const account = useStore($account);
    const isPending = useStore(actionEffect.pending);
    const actionEffectEvent = useEvent(actionEffect);

    const [inputAmount, setInputAmount] = useState<string>('');
    const [isValidInput, setIsValidInput] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isActive = tokenMicroBalance > 0 && !isLoading;

    const [showConfetti, setShowConfetti] = useState(false);

    const setNotificationText = useToasts({
        api: actionEffectEvent,
        pendingStatus: isPending,
        action: buttonName === 'Stake' ? ToastTypes.stake : ToastTypes.withdraw,
    });

    const setInputMaxAmount = () => {
        setIsValidInput(true);
        const tokenAmount = fromMicros(token, tokenMicroBalance).toString();
        setInputAmount(tokenAmount);
        setNotificationText(tokenAmount + ' ' + balanceSuffix);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isActive) {
            return;
        }
        if (isNaN(Number(e.currentTarget.value))) {
            return;
        }
        setIsValidInput(checkValidInput(e.currentTarget.value, token, tokenMicroBalance));
        setInputAmount(e.currentTarget.value);
        setNotificationText(e.currentTarget.value + ' ' + balanceSuffix);
    };

    const onClick = async () => {
        const microAmount = getMicros(token, parseFloat(inputAmount));
        if (!isLoading && isValidInput && microAmount > 0) {
            logFarmActionData(account, buttonName, inputAmount, token as LPTokenInfo);
            setIsLoading(true);
            setInputAmount('');
            if (hasLock) {
                notify(
                    buttonName === 'Stake'
                        ? 'Your lock period will be reset.'
                        : 'Your rewards and lock period will be reset.',
                    'warning'
                );
                await sleep(3000);
            }
            try {
                const isTokenOptIn = await checkOptIn(account?.networkAccount.addr, optInId);
                if (account && !isTokenOptIn) {
                    await batchOptIn(reach, account.networkAccount.addr, [Number(optInId)], true);
                }
                await actionEffectEvent([microAmount]);
                setShowConfetti(true);
            } catch (e) {
                const error_message = e instanceof Error ? e.message : String(e);
                console.log(error_message);
                if (error_message.includes('below min')) {
                    notify('Not enough ALGOs for opt-in. Please top up ALGO balance.', 'error');
                } else if (error_message.includes('cancelled')) {
                    notify('Operation is cancelled.', 'warning');
                } else {
                    notify(error_message, 'error');
                }
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
            <Action isActive={isActive && isValidInput}>
                <Input placeholder="0" isActive={isActive && isValidInput} value={inputAmount} onChange={onChange} />
                <PacmanButton
                    buttonText={buttonName}
                    buttonStyle="token_input_button"
                    onClickAction={() => onClick()}
                    isInactive={!isValidInput || !isActive}
                />
                <MaxButton onClick={setInputMaxAmount}>MAX</MaxButton>
            </Action>
            <Balance isValid={isValidInput}>
                Balance: {fromMicros(token, tokenMicroBalance)} {balanceSuffix} {isValidInput ? '' : '(Not enough)'}
            </Balance>
            <Confetti showConfetti={showConfetti} onFinish={() => setShowConfetti(false)} />
        </TokenInputWithButtonContainer>
    );
};
