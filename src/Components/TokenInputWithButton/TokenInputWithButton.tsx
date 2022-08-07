import React, { FC, useEffect, useState } from 'react';

import { useStore, useUnit } from 'effector-react';
import { Effect } from 'effector';
import { BigNumberish } from '@ethersproject/bignumber';
import { LPTokenInfo } from '../../providers/dexesProvider';
import { $account, Asset, Priced } from '../../common/store';
import { fromSmallestUnits, getSmallestUnits, sleep } from '../../common/lib';
import { notify, ToastTypes, useToasts } from '../Notification';
import { PacmanButton } from '../PacmanButton/PacmanButton';
import { logFarmActionData } from '../../logEvent';
import Confetti from '../Confetti/Confetti';
import { batchOptIn, checkOptIn } from '../../batchOptIn.mjs';
import { reach } from '../../AppContext';
import { Action, Balance, Input, MaxButton, TokenInputWithButtonContainer } from './styled';

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

    const microAmount = getSmallestUnits(token, Number.parseFloat(input));
    return microAmount <= tokenMicroBalance;
};

export const TokenInputWithButton: FC<InputWithButtonProps> = ({
    token,
    tokenMicroBalance,
    balanceSuffix,
    buttonName,
    // TODO passing effects through props are wrong, probably we just need contractId?
    // eslint-disable-next-line effector/mandatory-scope-binding
    actionEffect,
    optInId,
    style,
    hasLock,
}) => {
    const account = useUnit($account);
    const isPending = useStore(actionEffect.pending);
    // TODO
    // const actionEffectEvent = useUnit(actionEffect);

    const [inputAmount, setInputAmount] = useState<string>('');
    const [isValidInput, setIsValidInput] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isActive = tokenMicroBalance > 0 && !isLoading;

    const [showConfetti, setShowConfetti] = useState(false);

    const buttonType = buttonName.toLowerCase();
    const balanceField = buttonType === 'stake' ? 'Balance' : 'Staked';

    const setNotificationText = useToasts({
        // eslint-disable-next-line effector/mandatory-scope-binding
        api: actionEffect,
        pendingStatus: isPending,
        action: buttonType === 'stake' ? ToastTypes.stake : ToastTypes.withdraw,
    });

    const setInputMaxAmount = () => {
        setIsValidInput(true);
        const tokenAmount = fromSmallestUnits(token, tokenMicroBalance).toString();
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
        const microAmount = getSmallestUnits(token, Number.parseFloat(inputAmount));
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
                // eslint-disable-next-line effector/mandatory-scope-binding
                await actionEffect([microAmount]);
                setShowConfetti(true);
            } catch (error) {
                const error_message = error instanceof Error ? error.message : String(error);
                console.log(error_message);
                if (error_message.includes('below min')) {
                    notify('Not enough ALGOs for opt-in. Please top up ALGO balance.', 'error');
                } else if (error_message.includes('cancelled')) {
                    notify('Operation is cancelled.', 'warning');
                } else if (error_message.includes('popup')) {
                    notify('Popups are blocked. Please, allow popups in your browser.', 'error');
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
                    isInactive={!isValidInput || !isActive}
                    onClickAction={async () => onClick()}
                />
                <MaxButton onClick={setInputMaxAmount}>MAX</MaxButton>
            </Action>
            <Balance isValid={isValidInput}>
                {balanceField}: {fromSmallestUnits(token, tokenMicroBalance)} {balanceSuffix}{' '}
                {isValidInput ? '' : '(Not enough)'}
            </Balance>
            <Confetti
                showConfetti={showConfetti}
                onFinish={() => {
                    setShowConfetti(false);
                }}
            />
        </TokenInputWithButtonContainer>
    );
};
