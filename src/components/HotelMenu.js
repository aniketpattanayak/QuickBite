import { Link } from "react-router-dom";

const HotelMenu = ({ hotelcode, img, name, desc, star, km ,totalRatingsString}) => {
  return (
    <>
      <div className="card">
        <img src={img} alt="Restaurant Image" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{name.slice(0, 15)}</h2>
          <p className="card-description">{desc.slice(0,30)}...</p>
          <div className="card-details"> 
            <div id="rs-rating"> 
              <div id="rs-circle">
                <i class="ri-star-fill"></i>
              </div>
              <h3 id="rs-ratings-h3">{star} ({totalRatingsString} ratings)</h3>
            </div>
            <span className="card-distance">{km}</span>
          </div>
          <Link to={"/restaurant/" + hotelcode}>
            <button className="card-button">Order Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HotelMenu;
