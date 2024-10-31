// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Route , Routes  , BrowserRouter} from "react-router-dom";
import {Home} from "./Pages/Public/Home/Home.jsx";
import './App.css'
import {Navbar} from "./Components/ Navbar/Nabar.jsx";
import {Login} from "./Pages/Public/Login/Login.jsx";
import {ProductsPage} from "./Pages/Public/Products/ProductsPage.jsx";
import {CartPopup} from "./Components/CartPopup/CartPopup.jsx";
import {CartPayment} from "./Pages/Public/Payments/CartPayment.jsx";
import { Admin } from './Pages/Private/Admin/Admin.jsx';
import { BrandForm } from './Components/FormAdminDashboard/FormBrands/BrandsForm.jsx';
import { ProductForm } from './Components/FormAdminDashboard/FormProducts/createProductsForm.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartPopup />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/payments' element={<CartPayment />} />
          <Route path='/dashboard' element={<Admin />} />
          <Route path='/dashboard/product-form' element={<ProductForm />} />
          <Route path='/dashboard/brand-form' element={<BrandForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
