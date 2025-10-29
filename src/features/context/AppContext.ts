import { createContext } from "react";
import type {ModalData} from "../types/ModalData"
import type { ToastData } from "../types/ToastData";


type AppContextType = {
    showModal: (data: ModalData|null) => void,
    enqueueToast: (toastData: ToastData) => void
}


const AppContext = createContext<AppContextType>({
    showModal: (_:ModalData|null) => { throw "ShowModal is not implemented"},
    enqueueToast: (_:ToastData) => { throw "enqueueToast is not implemented"},
});

export default AppContext;