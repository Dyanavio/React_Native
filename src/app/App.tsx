import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './ui/Layout';
import Home from '../pages/home/Home';
import Privacy from '../pages/privacy/Privacy';
import AppContext from '../features/context/AppContext';
import type { ModalData } from '../features/types/ModalData';
import Cart from '../pages/cart/cart';
import Group from '../pages/group/group';
import Product from '../pages/product/product';
import About from '../pages/about/about';
import { useState } from 'react';
import ModalView from './ui/ModalView';


export default function App() {
  const [modalData, setModalData] = useState<ModalData|null>(null);

  const showModal = (data: ModalData|null) =>
  {
    setModalData(data);
  };

  return <AppContext.Provider value={{showModal}}>
      <BrowserRouter>
      <Routes>
        <Route path="cart" element={<Cart />}/>
        <Route path="group/:slug" element={<Group />}/>
        <Route path="product/:slug" element={<Product/>}/>

        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="privacy" element={<Privacy/>}/>
        <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <ModalView data={modalData}/>
  </AppContext.Provider>
  
}
