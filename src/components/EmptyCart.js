import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div id="empty-cart-container">
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1040/1040455.png" id="empty-cart-img"/>
        </div>
      <div id="no-orders-yet">
        <h3 id="h333">No Orders Yet!</h3>
        <p>Your cart is empty!</p>
        <p> add somthing from the menu.</p>

        <Link id="order-Link" to={"/restaurant"}>
          <div id="clear-cart-111">
            <div id="clear-cart clr-cart">
              <h3>Let's Order!</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
