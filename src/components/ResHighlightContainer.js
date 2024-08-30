import React from "react";
import cycle from "../../public/images/cycle.png";

function ResHighlightContainer({rating, km, fortwo, totalRatingsString}) {
  return (
    <>
      <div id="rs-hotel-option">
        <div className="rs-cp">
          <h3 id="rs-h3">Order Online</h3>
          <div className="rs-oo"></div>
        </div>
        <div className="rs-cp">
          <h3>Dineout</h3>
          <div className=""></div>
        </div>
      </div>
      <div id="rs-hr"></div>
      <div id="rs-hotel-details-container">
        <div id="rs-rating">
          <div id="rs-circle">
            <i class="ri-star-fill"></i>
          </div>
          <h3 id="rs-ratings-h3">{rating} ({totalRatingsString})• {fortwo}</h3>
        </div>
        <div id="rs-link">
          <a href="#">Burger</a>,<a href="#"> American</a>
        </div>
        <div id="rs-outlet1">
          <i class="ri-map-pin-3-line rs"></i>
          <h3 id="rs-outlet-text">Outlet</h3>
          <h3 id="rs-outlet-loc">Bhubaneswar</h3>
        </div>
        <div id="rs-outlet2">
          <i class="ri-map-pin-3-line rs" id="rotated-icon"></i>
          <h3 id="rs-time">20-25 mins</h3>
        </div>
        <hr />
        <div id="rs-footer">
          <div>
            <img id="cycle" src={cycle} />
          </div>
          <h3>{km}</h3>
        </div>
      </div>
    </>
  );
}

export default ResHighlightContainer;
