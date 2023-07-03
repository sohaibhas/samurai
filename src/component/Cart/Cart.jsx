import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispath = useDispatch();

  const handleRemove = (productTitle) => {
    dispath(remove(productTitle));
  };
  return (
    <div className="container">
      <h2 className="text-center">My Shopping Cart</h2>
      <div className="container d-flex flex-row">
        <h5 className="w-50">Product</h5>
        <h5 className="w-25">Price</h5>
        <h5 className="w-25">Quantity</h5>
        <h5>Total</h5>
      </div>
      {products.map((product) => (
        <div className="container d-flex flex-row">
          <div className="w-50 d-flex" style={{ height: "120px" }}>
            <img src={product.image} alt="" width={"100px"} height={"100px"} />
            <p className="ps-3">{product.title}</p>
          </div>
          <div className="w-25">{product.price}</div>
          <div className="w-25">
            <button
              className="btn btn-dark"
              onClick={() => handleRemove(product.title)}
            >
              Remove
            </button>
          </div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
