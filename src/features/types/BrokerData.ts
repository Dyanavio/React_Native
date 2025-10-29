import type { ToastData } from "./ToastData";

type BrokerData = {
    type: string
    name?: string,
    action: () => void,
    callback: (data:BrokerData, err: string|undefined) => void,
    toastData: ToastData
}

export type { BrokerData };