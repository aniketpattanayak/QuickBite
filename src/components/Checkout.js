import React from "react";
import Counter from "./Counter";
import CheckoutItems from "./CheckoutItems";
import { useSelector } from "react-redux";
import SuggestionBox from "./SuggestionBox";

function Checkout() {
    const cartitems = useSelector((store) => store.cart.items);
    let sum = 0;
    const total = cartitems.map((e)=> {e.defaultPrice? sum += e.defaultPrice/100 :sum += e.price/100}) 
    console.log(sum)
  return (
    <div>
      <h2 id="checkout-item-heading">Bill Details</h2>
      <div>
        {
            cartitems.map((e)=><CheckoutItems key={e.id} name={e.name} price={e.defaultPrice?e.defaultPrice/100:e.price/100}/>)
        }
      </div>
      <div>
        <SuggestionBox/>
        <div id="check-out-prices">
            <h5>Item Total</h5>
            <h5 style={{color: "green"}}>₹{sum}</h5>
        </div>
        <div id="check-out-prices">
            <h5>Delivery Fee | 6.9 kms</h5>
            <h5>₹38</h5>
        </div>
        <div id="check-out-prices">
            <h5>Extra discount for you</h5>
            <h5>-₹15</h5>
        </div>
        <div id="bar">
        <div id="rs-hr"></div>
        </div>
        <div id="check-out-prices">
            <h5>Delivery Tip</h5>
            <h5 style={{color: "red"}}>Add tip</h5>
        </div>
        <div id="check-out-prices">
            <h5>Platform fee</h5>
            <h5>₹6</h5>
        </div>
        <div id="check-out-prices">
            <h5>GST and Restaurant Charges</h5>
            <h5>₹13</h5>
        </div>
        <div id="bar1">
        <div id="rs-hr"></div>
        </div>
        <div id="iddd">
            <h5 className="c-h5">TO PAY</h5>
            <h5 className="c-h5">₹{sum+42}</h5>
        </div>
        <div id="pay-container">
        <div id="pay">
            <h2>PAY NOW</h2>
        </div>
        </div>
        

      </div>
    </div>
  );
}

export default Checkout;
