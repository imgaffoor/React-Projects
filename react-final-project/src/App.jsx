import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Veg from './Components/Veg'
import NonVeg from './Components/NonVeg'
import Cart from './Components/Cart'
import PurchaseHistory from './Components/PurchaseHistory'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import './App.css'
import { useSelector } from 'react-redux'
import GoogleLoginComponent from './Components/GoogleLoginComponent'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  const cart = useSelector((state) => state.cart);
  const  totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  return (
    <>
      <GoogleOAuthProvider clientId="247681171004-amhqmc28tt974qj0qte2lall44u05rgp.apps.googleusercontent.com">
        <GoogleLoginComponent/>
      </GoogleOAuthProvider>
      <BrowserRouter>
        
        <div className="link-container">
          <Link to="/">Home</Link>
          <Link to="/veg">Veg</Link>
          <Link to="/non-veg">NonVeg</Link>
          <Link to="/cart">Cart {totalItems}</Link>
          <Link to="/purchase-history">Purchase History</Link>
          <Link to="/aboutus">AboutUs</Link>
          <Link to="/contactus">ContactUs</Link>
        </div>
          
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/veg" element={<Veg />}/>
            <Route path="/non-veg" element={<NonVeg />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/purchase-history" element={<PurchaseHistory />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/contactus" element={<ContactUs />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
