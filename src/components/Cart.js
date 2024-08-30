import React from "react";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import Checkout from "./Checkout";

function Cart() {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartitems = useSelector((store) => store.cart.items);
  console.log(cartitems)

  return (
    <div className="main-content">
      {cartitems.length == 0 ? (
        <EmptyCart />
      ) : (
        <div id="cart-cant">
          <div id="cart-heading-text">
            <h1>Secure Checkout</h1>
          </div>
          <div id="cart-main-container">
            <div id="left-cart-container">
              {cartitems.map((e) => (
                <CartItems
                  key={e.id} // Add a unique key
                  name={e.name}
                  price={e.defaultPrice ? 
                    Math.floor(e.defaultPrice / 100) : Math.floor(e.price / 100)}
                  desc={e.category}
                  image={e.imageId}
                />
              ))}
              {!cartitems.length == 0 && (
                <div id="clear-cart-bottom">
                  <div id="clear-cart" onClick={handleClearCart}>
                    <h3>Clear Cart</h3>
                  </div>
                </div>
              )}
            </div>
            <div id="right-cart-container">
                <Checkout />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
