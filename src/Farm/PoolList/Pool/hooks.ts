import { useEffect, useState } from "react"
import { Id, toast } from "react-toastify"
import { isNil } from 'ramda'


type useToastProps = {
    api: any,
    text: string,
    pendingStatus: boolean | unknown,
    action:  'claim' | 'withdraw' | 'stake'

}

type toastIds = {
    stake: Id | null
    claim: Id | null,
    withdraw: Id | null
}

export const useToasts = ({ api, text, pendingStatus, action }: useToastProps) => {
    const [toastIds, setToastIds] = useState<toastIds>({ stake: null , claim: null, withdraw: null })
  

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
                }
            })
        }
        
    }, [action, api, text, toastIds])
    
    
}