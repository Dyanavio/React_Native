import type { BrokerData } from "../../features/types/BrokerData";

export default class Broker {
    static #instance: Broker|null = null;
    timeout: number;

    static get instance() : Broker {
        if(Broker.#instance == null) {
            Broker.#instance = new Broker();
        }
        return Broker.#instance;
    } 

    constructor() {
        this.timeout = 0;
    }

    enqueueTask(data: BrokerData) {
        switch(data.type)
        {
            case "Toast":
                setTimeout(() => {
                    console.log(Broker.instance.timeout, data.name);
                    data.action();
                    Broker.instance.timeout += data.toastData.timeout || 2000;
                }, Broker.instance.timeout);
                setTimeout(() => {
                    Broker.instance.timeout -= data.toastData.timeout || 2000;
                    data.callback(data, undefined);
                }, data.toastData.timeout || 2000 + Broker.instance.timeout)
                break;
        }
        

        
    }
}