import React from "react";
import { imgId } from "../utils/mockdata";
import { useDispatch } from "react-redux";
import cartSlice, { addItems } from "../utils/cartSlice";

function MenuDetail({
  items,
  item_name,
  item_price,
  original_price,
  about_item,
  offers,
  offerstag,
  item_rating,
  ratingcount,
  id,
  onAddItem, // Add this prop
}) {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItems(items));
    if (onAddItem) {
      onAddItem(); // Call the handler passed from RestaurantDetails
    }
  };

  return (
    <>
      <div id="rs-menu-detail-container">
        <div>
          <h3>{item_name}</h3>
          <div id="rs-text-div">
            {original_price && (
              <h4 className="original-price">₹{original_price}</h4>
            )}
            <i className="ri-price-tag-3-fill"></i>
            <h4 className="item-price">{item_price}</h4>
          </div>
          <div id="rs-star1">
            <i className="ri-star-fill"></i>
            <div>
              {item_rating}({ratingcount})
            </div>
          </div>
          <div id="rs-menu-para">
            <h5>{about_item}</h5>
          </div>
        </div>
        <div id="rs-menu-img">
          <img src={imgId + id} />
          <div id="rs-add-btn" onClick={handleAddItem}>
            <h1>ADD</h1>
          </div>
        </div>
      </div>
      <div id="rs-hr"></div>
    </>
  );
}

export default MenuDetail;
