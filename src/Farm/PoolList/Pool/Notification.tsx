import React, { useEffect, useState } from 'react';
import { Id, toast } from 'react-toastify';
import { isNil } from 'ramda';
import pacman_grey from '../../../imgs/pacman.gif';

export enum ToastTypes {
    stake,
    claim,
    withdraw,
}

type useToastProps<ApiType> = {
    api: ApiType;
    pendingStatus: boolean | unknown;
    action: ToastTypes;
    text?: string;
};

type ToastIds = {
    [ToastTypes.stake]: Id | null;
    [ToastTypes.withdraw]: Id | null;
    [ToastTypes.claim]: Id | null;
};

export const useToasts = ({ api, pendingStatus, action, text }: useToastProps<any>) => {
    const [notificationText, setNotificationText] = useState(text ?? '');

    const [toastIds, setToastIds] = useState<ToastIds>({
        [ToastTypes.stake]: null,
        [ToastTypes.claim]: null,
        [ToastTypes.withdraw]: null,
    });

    useEffect(() => {
        if (pendingStatus && isNil(toastIds[action])) {
            const toastStakeId = toast.loading(
                <Notification action={action} status={'in progress'} text={notificationText} />,
                {
                    icon: <img style={{ width: '30px', height: '30px' }} alt="loader" src={pacman_grey} />,
                }
            );
            setToastIds({ ...toastIds, [action]: toastStakeId });
        }
    }, [action, pendingStatus, notificationText, toastIds]);

    useEffect(() => {
        if (!isNil(toastIds[action])) {
            api.finally.watch(({ status }: { status: string }) => {
                const toastId = toastIds[action] as Id;
                toast.update(toastId, {
                    render: <Notification action={action} status={status} text={notificationText} />,
                    type: status === 'done' ? 'success' : 'error',
                    icon: status === 'done' ? '🚀' : '🙁',
                    isLoading: false,
                    autoClose: 5000,
                    closeOnClick: true,
                    draggable: true,
                });
                setToastIds({ ...toastIds, [action]: null });
            });
        }
    }, [action, api, notificationText, toastIds]);

    return setNotificationText;
};

const Notification = ({ action, status, text }: { action: ToastTypes; status: string; text: string }) => {
    return (
        <div style={{ marginLeft: '10px', fontFamily: 'Montserrat' }}>
            <div>
                {ToastTypes[action].toUpperCase()} {status.toUpperCase()}
            </div>
            <div>AMOUNT: {text}</div>
        </div>
    );
};
