import { useEffect, useState } from 'react';
import { Id, toast, TypeOptions } from 'react-toastify';
import { isNil } from 'ramda';
import pacman_grey from '../imgs/pacman.gif';

const NOTIFICATION_ICONS: Record<TypeOptions, string> = {
    success: '🚀',
    warning: '⚠️',
    info: '💁‍',
    error: '🙁',
    default: '',
};

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
    isAutoClaim?: boolean;
};

type ToastIds = {
    [ToastTypes.stake]: Id | null;
    [ToastTypes.withdraw]: Id | null;
    [ToastTypes.claim]: Id | null;
};

export const useToasts = ({ api, pendingStatus, action, text, isAutoClaim = false }: useToastProps<any>) => {
    const [notificationText, setNotificationText] = useState(text ?? '');

    const [toastIds, setToastIds] = useState<ToastIds>({
        [ToastTypes.stake]: null,
        [ToastTypes.claim]: null,
        [ToastTypes.withdraw]: null,
    });

    useEffect(() => {
        if (pendingStatus && isNil(toastIds[action])) {
            const toastStakeId = toast.loading(
                <Notification action={action} status="in progress" text={notificationText} isAutoClaim={isAutoClaim} />,
                {
                    icon: <img style={{ width: '30px', height: '30px' }} alt="loader" src={pacman_grey} />,
                    closeButton: true,
                }
            );
            setToastIds({ ...toastIds, [action]: toastStakeId });
        }
    }, [action, pendingStatus, notificationText, toastIds]);

    useEffect(() => {
        if (!isNil(toastIds[action])) {
            api.finally.watch(({ status }: { status: string }) => {
                const toastId = toastIds[action]!;
                const type = status === 'done' ? 'success' : 'error';
                toast.update(toastId, {
                    render: <Notification action={action} status={status} text={notificationText} />,
                    type,
                    icon: NOTIFICATION_ICONS[type],
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

function Notification({
    action,
    status,
    text,
    isAutoClaim = false,
}: {
    action: ToastTypes;
    status: string;
    text: string;
    isAutoClaim?: boolean;
}) {
    const autoClaim = isAutoClaim ? 'AND AUTO-CLAIM ' : '';
    return (
        <div style={{ marginLeft: '10px', fontFamily: 'Montserrat' }}>
            <div>
                {ToastTypes[action].toUpperCase()} {autoClaim} {status.toUpperCase()}
            </div>
            {text && <div>AMOUNT: {text}</div>}
        </div>
    );
}

function Alert({ text, link }: { text: string; link?: string }) {
    return (
        <div style={{ marginLeft: '10px', fontFamily: 'Montserrat' }}>
            <div>{text}</div>
            {link && (
                <a target="_blank" href={link} rel="noreferrer" style={{ color: 'white' }}>
                    Transaction
                </a>
            )}
        </div>
    );
}

export const notify = (text: string, type: TypeOptions, link?: string) => {
    toast(<Alert text={text} link={link} />, {
        type,
        icon: NOTIFICATION_ICONS[type],
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        position: type === 'success' || type == 'info' ? toast.POSITION.BOTTOM_RIGHT : toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        theme: type === 'success' ? 'colored' : 'light',
    });
};
