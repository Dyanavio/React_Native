import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './ui/Layout';
import Home from '../pages/home/Home';
import Privacy from '../pages/privacy/Privacy';
import AppContext from '../features/context/AppContext';
import type { ModalData } from '../features/types/ModalData';
import Cart from '../pages/cart/cart';
import Product from '../pages/product/product';
import About from '../pages/about/about';
import { useState } from 'react';
import ModalView from './ui/ModalView';
import Group from '../pages/group/Group';
import Toast from './ui/Toast';
import type { ToastData } from '../features/types/ToastData';
import Broker from './ui/broker';
import type { BrokerData } from '../features/types/BrokerData';


export default function App() {
  const [modalData, setModalData] = useState<ModalData|null>(null);
  const [shownToastData, setShownToastData] = useState<ToastData|null>(null);

  const showModal = (data: ModalData|null) =>
  {
    setModalData(data);
  };

  const showToast = (data: ToastData|null) =>
  {
    setShownToastData(data);
  };


  const enqueueToast = (data: ToastData) =>
  {
    const brokerData: BrokerData = {
      type: "Toast",
      name: "Toast: " + data?.message,
      action: () => {
        setTimeout(() => {
          showToast(data);
          Broker.instance.timeout += 2000;
        }, Broker.instance.timeout);
        setTimeout(() => {
          setShownToastData(null);
          Broker.instance.timeout -= 2000;
          brokerData.callback(brokerData, undefined)}, 2000 + Broker.instance.timeout);
      },
      callback: (task, err) => console.log(task, err)
    }
    Broker.instance.enqueueTask(brokerData);
      
  }

  return <AppContext.Provider value={{showModal, enqueueToast}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="privacy" element={<Privacy/>}/>
        <Route path="about" element={<About/>}/>

        <Route path="cart" element={<Cart />}/>
        <Route path="group/:slug" element={<Group />}/>
        <Route path="product/:slug" element={<Product/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <ModalView data={modalData}/>
    <Toast data={shownToastData}/>
  </AppContext.Provider>
  
}
