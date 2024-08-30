// HotelMenuShimmer.jsx
import React from 'react';// Import the CSS for shimmer effect

const HotelMenuShimmer = () => {
  return (
    <div className="card-shimmer">
      <div className="card-image-shimmer"></div>
      <div className="card-content-shimmer">
        <div className="card-title-shimmer"></div>
        <div className="card-description-shimmer"></div>
        <div className="card-details-shimmer">
          <div className="card-rating-shimmer"></div>
          <div className="card-distance-shimmer"></div>
        </div>
        <div className="card-button-shimmer"></div>
      </div>
    </div>
  );
};

export default HotelMenuShimmer;
