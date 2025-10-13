import { createContext } from "react";
import type {ModalData} from "../types/ModalData"


type AppContextType = {
    showModal?: (data: ModalData) => void,
}


const AppContext = createContext({
    showModal: (_:ModalData) => { throw "ShowModal is not implemented"}
});

export default AppContext;