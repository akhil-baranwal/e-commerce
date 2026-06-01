import React from "react";
import Home from "./pages/home/home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/shop" element={<Shop/>}/> 
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;