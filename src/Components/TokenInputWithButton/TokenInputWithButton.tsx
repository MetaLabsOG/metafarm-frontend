import React, { FC, useEffect, useState } from 'react';

import { useStore, useUnit } from 'effector-react';
import { Effect } from 'effector';
import { BigNumberish } from '@ethersproject/bignumber';
import { useModal } from 'react-hooks-use-modal';
import { LPTokenInfo } from '../../dexes';
import { $account, Asset, Priced } from '../../common/store';
import { fromSmallestUnits, getSmallestUnits, sleep } from '../../common/lib';
import { notify, ToastTypes, useToasts } from '../Notification';
import { PacmanButton } from '../PacmanButton/PacmanButton';
import { logFarmActionData } from '../../logEvent';
import Confetti from '../Confetti/Confetti';
import { batchOptIn, checkOptIn } from '../../batchOptIn';
import { reach } from '../../AppContext';
import { Button } from '../Button/Button';
import { ModalContainer, ModalSubtitle, ModalTitle } from '../../common/styled';
import { Action, Balance, Input, MaxButton, TokenInputWithButtonContainer } from './styled';

export interface InputWithButtonProps {
    token: LPTokenInfo | Priced<Asset>;
    tokenMicroBalance: bigint;
    balanceSuffix: string;
    buttonName: string;
    actionEffect: Effect<BigNumberish[], any>;
    optInId: number;
    isAutoClaim: boolean;
    style?: React.CSSProperties;
    hasLock?: boolean;
}

const checkValidInput = (input: string, token: LPTokenInfo | Priced<Asset>, tokenMicroBalance: bigint) => {
    if (!input) {
        return true;
    }

    if (Number.isNaN(Number(input))) {
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
    isAutoClaim,
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

    const [WarningModal, openWarningModal, closeWarningModal] = useModal('root', { preventScroll: true });
    const warningText =
        buttonName === 'Stake'
            ? "It's locked pool. You can claim rewards only after lock period. If you stake again your lock period will be reset."
            : 'Your rewards and lock period will be reset.';

    const setNotificationText = useToasts({
        // eslint-disable-next-line effector/mandatory-scope-binding
        api: actionEffect,
        pendingStatus: isPending,
        action: buttonType === 'stake' ? ToastTypes.stake : ToastTypes.withdraw,
        isAutoClaim,
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
        if (Number.isNaN(Number(e.currentTarget.value))) {
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
            try {
                const isTokenOptIn = account === null ? false : await checkOptIn(account.networkAccount.addr, optInId);
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
                } else if (error_message.includes('cancelled') || error_message.includes('The User has rejected')) {
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
                    onClickAction={async () => {
                        if (hasLock) {
                            openWarningModal();
                        } else {
                            await onClick();
                        }
                    }}
                />
                <MaxButton isActive={isActive} onClick={setInputMaxAmount}>
                    MAX
                </MaxButton>
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
            <WarningModal>
                <ModalContainer>
                    <ModalTitle style={{ textAlign: 'center' }}>⚠️ WARNING</ModalTitle>
                    <ModalSubtitle style={{ fontSize: '18px', width: '300px' }}>{warningText}</ModalSubtitle>
                    <Button
                        buttonText="OK"
                        onClick={async () => {
                            closeWarningModal();
                            await onClick();
                        }}
                    />
                </ModalContainer>
            </WarningModal>
        </TokenInputWithButtonContainer>
    );
};
