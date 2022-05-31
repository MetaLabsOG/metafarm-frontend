import { useEffect, useState } from "react"
import { Id, toast } from "react-toastify"
import { isNil } from 'ramda'


export enum ToastTypes {
    stake,
    claim,
    withdraw
}

type useToastProps<ApiType> = {
    api: ApiType,
    text: string,
    pendingStatus: boolean | unknown,
    action:  ToastTypes

}

type ToastIds = {
    [ToastTypes.stake]: Id | null
    [ToastTypes.withdraw]: Id | null,
    [ToastTypes.claim]: Id | null
}

export const useToasts = ({ api, text, pendingStatus, action }: useToastProps<any>) => {
    const [toastIds, setToastIds] = useState<ToastIds>({ [ToastTypes.stake]: null , [ToastTypes.claim]: null, [ToastTypes.withdraw]: null })
  

    useEffect(() => {
        if (pendingStatus && isNil(toastIds[action])) {
            const toastStakeId = toast.loading(text,{ theme: "dark" })
            setToastIds({...toastIds, [action]: toastStakeId})
        }
    },[action, pendingStatus, text, toastIds])
 

    useEffect(() => {
        if (!isNil(toastIds[action])) {
            api.finally.watch(({ status, params }: { status: string, params: any }) => {
                console.log(params)
                const toastId = toastIds[action] as Id
                if (status === 'done') {
                    toast.update(toastId, {
                        render: text,
                        type: "success",
                        isLoading: false,
                        autoClose: 5000
                    })
                    setToastIds({ ...toastIds, [action]: null })
                }
                if (status === 'fail') {
                    toast.update(toastId, {
                        render: `Fail ${text}`,
                        type: "error",
                        isLoading: false,
                        autoClose: 5000
                    });
                    setToastIds({ ...toastIds, [action]: null })
                }
            })
        }
        
    }, [action, api, text, toastIds])
    
    
}