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

    enqueueTask(data: BrokerData){
        console.log(data);
        data.action();
    }
}