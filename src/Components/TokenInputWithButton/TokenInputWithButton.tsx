import React, { FC, useState } from 'react';
import { createPortal } from 'react-dom';

import { useUnit } from 'effector-react';
import { Effect } from 'effector';
import { BigNumberish } from '@ethersproject/bignumber';
import { LPTokenInfo } from '../../dexes';
import { $account, Asset, Priced } from '../../common/store';
import { formatDecimalsMeaningful, fromSmallestUnits, getSmallestUnits } from '../../common/lib';
import { notify, ToastTypes, useToasts } from '../Notification';
import { PacmanButton } from '../PacmanButton/PacmanButton';
import { logFarmActionData } from '../../logEvent';
import Confetti from '../Confetti/Confetti';
import closeButton from '../../imgs/close.svg';
import { batchOptIn, checkOptIn } from '../../batchOptIn';
import { reach } from '../../AppContext';
import { Button } from '../Button/Button';
import { ModalCloseButton, ModalContainer, ModalSubtitle, ModalTitle } from '../../common/styled';
import { Action, Balance, Input, MaxButton, TokenInputWithButtonContainer } from './styled';

const warningOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    zIndex: 1100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
};

const warningModalStyle: React.CSSProperties = {
    marginTop: 0,
    width: 'min(420px, calc(100vw - 32px))',
    gap: '16px',
};

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

export const checkValidInput = (input: string, token: LPTokenInfo | Priced<Asset>, tokenMicroBalance: bigint) => {
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
    const isPending = useUnit(actionEffect.pending);
    // TODO
    // const actionEffectEvent = useUnit(actionEffect);

    const [inputAmount, setInputAmount] = useState<string>('');
    const [isValidInput, setIsValidInput] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isActive = tokenMicroBalance > 0 && !isLoading;

    const [showConfetti, setShowConfetti] = useState(false);

    const buttonType = buttonName.toLowerCase();
    const balanceField = buttonType === 'stake' ? 'Balance' : 'In Pool';

    const [isWarningOpen, setIsWarningOpen] = useState(false);
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
                            setIsWarningOpen(true);
                        } else {
                            await onClick();
                        }
                    }}
                />
                <MaxButton isActive={isActive} onClick={setInputMaxAmount}>
                    MAX
                </MaxButton>
            </Action>
            <Balance isValid={isValidInput} title={`${fromSmallestUnits(token, tokenMicroBalance)} ${balanceSuffix}`}>
                {balanceField}: {formatDecimalsMeaningful(fromSmallestUnits(token, tokenMicroBalance), 2)} {balanceSuffix}{' '}
                {isValidInput ? '' : '(Not enough)'}
            </Balance>
            <Confetti
                showConfetti={showConfetti}
                onFinish={() => {
                    setShowConfetti(false);
                }}
            />
            {isWarningOpen &&
                createPortal(
                    <div
                        style={warningOverlayStyle}
                        onClick={(event) => {
                            if (event.target === event.currentTarget) {
                                setIsWarningOpen(false);
                            }
                        }}
                    >
                        <ModalContainer
                            style={warningModalStyle}
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                        >
                            <ModalCloseButton
                                src={closeButton}
                                alt="close"
                                onClick={() => {
                                    setIsWarningOpen(false);
                                }}
                            />
                            <ModalTitle style={{ textAlign: 'center' }}>⚠️ WARNING</ModalTitle>
                            <ModalSubtitle style={{ fontSize: '18px', width: '300px' }}>{warningText}</ModalSubtitle>
                            <Button
                                buttonText="OK"
                                onClick={async () => {
                                    setIsWarningOpen(false);
                                    await onClick();
                                }}
                            />
                        </ModalContainer>
                    </div>,
                    document.body
                )}
        </TokenInputWithButtonContainer>
    );
};
