import React from "react";
import { imgId } from "../utils/mockdata";
import { useDispatch, useSelector } from "react-redux";
import { removeitems } from "../utils/cartSlice";

function CartItems({name, price, desc, image}) {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch()

    const handleRemoveItem = () => {
        dispatch(removeitems());
    }

  return (
    <div id="cart-item-container">
      <div id="cart-items-cont">
        <div id="text-div">
          <div id="name-text">
            <h3>{name}</h3>
          </div>
          <p>
            {" "}
            {desc}{" "}
          </p>
        </div>
        <div id="imggg">
        <img src={imgId+image} />
        <h4 id="p-h4">₹{price} Rupees</h4>
        </div>
        <div id="remove-item" onClick={handleRemoveItem}><i class="ri-restaurant-2-line"></i></div>
        
      </div>
    </div>
  );
}

export default CartItems;
