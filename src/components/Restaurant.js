import Newest from "./Newest";
import HotelMenu from "./HotelMenu";
import { useEffect, useState } from "react";
import HotelCategory from "./HotelCategory";
import snacks from "../../public/images/snacks.png";
import fishes from "../../public/images/Fishes.png";
import pasta from "../../public/images/pasta.png";
import deesert from "../../public/images/deesert.png";
import burger from "../../public/images/burger.png";
import drink from "../../public/images/drink.png";
import { hotelAPI, cloudinaryImageIdURL } from "../utils/mockdata";

const Restaurant = () => {
  const [num, setnum] = useState(4);
  const [newdata, setnewdata] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(hotelAPI);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        setnewdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setHotelData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="main-content">
        <div id="recipe">
          <div id="recipename">
            <h1>Hotels</h1>
          </div>
          <div id="reciperight">
            <div className="search-container">
              <i className="ri-search-line search-icon"></i>
              <input
                type="text"
                placeholder="Search Hotels..."
                className="search-input"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  const filteredres = newdata.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setHotelData(filteredres);
                }}
              />
            </div>
            <Newest />
          </div>
        </div>
      </div>

      <div id="menu-name-container">
        <div id="menu-box">
          <h3>Menu </h3>
          <h4>Category</h4>
        </div>
        <div id="category-container">
          <HotelCategory img={snacks} name="Snacks" />
          <HotelCategory img={fishes} name="Fishes" />
          <HotelCategory img={pasta} name="Pasta" />
          <HotelCategory img={deesert} name="Deesert" />
          <HotelCategory img={burger} name="burger" />
          <HotelCategory img={drink} name="Soft Drink" />
        </div>
      </div>
      <div id="menu-name-container">
        <div id="menu-box">
          <h3>Most </h3>
          <h4>Popular</h4>
        </div>
      </div>
      <div id="filter-div">
        <div
          id="filter" 
          onClick={() => {
            const filteredres = hotelData.filter((e) => e.new === true);
            setHotelData(filteredres);
          }}
        >
          <h2>New on QuickBite</h2>
        </div>
        <div
          id="filter"
          onClick={() => {
            const filteredres = hotelData.filter((e) => e.info.avgRating > 4);
            setHotelData(filteredres);
          }}
        >
          <h2>Rating 4+</h2>
        </div>
        <div
          id="filter" 
          onClick={() => {
            const filteredres = hotelData.filter((e) => e.info.veg === true);
            setHotelData(filteredres);
          }}
        >
          <h2>Pure Veg</h2>
        </div>
        <div
          id="filter"
          onClick={() => {
            const filteredres = hotelData.filter(
              (e) => e.avgprice >= 300 && e.avgprice <= 600
            );
            setHotelData(filteredres);
          }}
        >
          <h2>Rs 300- Rs 600</h2>
        </div>
        <div
          id="filter"
          onClick={() => {
            const filteredres = hotelData.filter((e) => e.avgprice < 300);
            setHotelData(filteredres);
          }}
        >
          <h2>Less then Rs 300</h2>
        </div>
        <div
          id="filter"
          onClick={() => {
            setHotelData(newdata);
          }}
        >
          <h2>Reset</h2>
        </div>
      </div> 
      <div id="hotel-menu-container">
      {hotelData
          .slice(0, num)
          .map(({ info }) => (
            <HotelMenu
              key={info.id} 
              hotelcode={info.id} 
              img={cloudinaryImageIdURL+ info.cloudinaryImageId}  
              name={info.name} 
              desc={ info.cuisines.join(', ')} 
              star={info.avgRating}
              totalRatingsString= {info.totalRatingsString}
              km={info.sla.lastMileTravelString} 
            />
          ))}
      </div>
      <div id="show-more-container">
        <div
          id="show-more"
          onClick={() => {
            const fnum = num + 4;
            setnum(fnum);
          }}
        >
          <h3>
            Show more <i className="ri-arrow-down-s-line"></i>
          </h3>
        </div>
      </div>
      <div id="menu-name-container">
        <div id="menu-box">
          <h3>Near </h3>
          <h4>You</h4>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
