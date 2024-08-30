import React from "react";


function HotelCategory({img,name}) {
  return (
    <>
      <div id="category-box">
        <div id="inner-category-box">
          <img src={img} />
        </div>
        <div id="inner-category-box-text">
          <h2>{name}</h2>
        </div>
      </div>
    </>
  );
}

export default HotelCategory;
