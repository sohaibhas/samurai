import React from "react";
import Header from "./component/Home/Header/Header";
import Navbar from "./component/Home/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Footer from "./component/Home/Footer/Footer";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Acc from "./component/Account/Acc";
import Cart from "./component/Cart/Cart";

function App() {
  const token = localStorage.getItem("user");
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          {token ? (
            <>
              <Route path="/account" element={<Acc />} />
            </>
          ) : (
            <>
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/register" element={<Register />} />
            </>
          )}
          {!token ? (
            <>
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/register" element={<Register />} />
            </>
          ) : (
            <Route path="/*" element={<Navigate to="/" replace />} />
          )}
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
