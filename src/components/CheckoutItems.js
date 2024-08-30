import React from "react";
import Counter from "./Counter";

function CheckoutItems({ name, price }) {
  return (
    <div id="checkout-item-name">
      <div>
        <h3>
          <i class="ri-checkbox-blank-circle-fill" id="checkout-circle"></i>
          {name.slice(0,17)}
        </h3>
        <div id="checkout-item-customise">
          <h5>customise</h5>
          <i class="ri-arrow-right-s-line"></i>
        </div>
      </div>
      <div id="checkout-right-price">
        <Counter  />
        <div id="flex-end">
          <h6>₹{price}</h6>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItems;
