type BrokerData = {
    type: string
    name?: string,
    action: () => void,
    callback: (data:BrokerData, err: string|undefined) => void,
}

export type { BrokerData };