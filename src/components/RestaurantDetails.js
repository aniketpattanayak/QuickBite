import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resId } from "../utils/mockdata";
import MenuDetail from "./MenuDetail";
import ResHighlightContainer from "./ResHighlightContainer";

// Utility function to truncate text
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

function RestaurantDetails() {
  const [data, setData] = useState([]);
  const [hotelname, setHotelname] = useState([]);
  const { resid } = useParams();
  const [card, setCard] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(0); // Default to 0 to expand the first section
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(resId + resid);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        console.log("API Response:", json);

        const cards = json?.data?.cards || [];
        setCard(cards);

        const groupedCards =
          cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        console.log("Grouped Cards:", groupedCards);

        setData(cards);
        setHotelname(Array.isArray(groupedCards) ? groupedCards : []);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [resid]);

  const handleClick = (index) => {
    // Only toggle the section if it's not the first section
    setExpandedIndex((prevIndex) => (index === 0 ? 0 : prevIndex === index ? null : index));
  };

  const handleAddItem = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000); // Hide message after 2 seconds
  };

  return (
    <>
      <div id="rs-hotel-menu-container" className="main-content">
        <div id="rs-hotel-menu-container-i">
          <div id="rs-hotel-name">
            <h1>{data[2]?.card?.card?.info?.name || "Hotel Name"}</h1>
          </div>
          <ResHighlightContainer
            rating={data[2]?.card?.card?.info?.avgRating}
            totalRatingsString={data[2]?.card?.card?.info?.totalRatingsString}
            fortwo={data[2]?.card?.card?.info?.costForTwoMessage}
            km={data[2]?.card?.card?.info?.feeDetails?.message}
          />

          <div id="rs-menu-text">
            <h3>--- MENU ---</h3>
          </div>
          <div id="rs-hr"></div>

          {hotelname.length > 0 ? (
            hotelname.map((section, sectionIndex) => (
              <div key={sectionIndex} id="padd">
                {section.card.card.title && (
                  <div id="section-card-title-container" onClick={() => handleClick(sectionIndex)}>
                    <h4 id="section-card-title">
                      {section.card.card.title} ({section?.card?.card?.itemCards?.length})
                    </h4>
                    {expandedIndex === sectionIndex ? (
                      <i className="ri-arrow-up-wide-line"></i>
                    ) : (
                      <i className="ri-arrow-down-wide-line"></i>
                    )}
                  </div>
                )}
                {(expandedIndex === sectionIndex || sectionIndex === 0) && section.card.card.itemCards?.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <MenuDetail
                      items={item.card.info}
                      item_name={item.card.info.name}
                      about_item={truncateText(
                        item.card.info.description || "No description available",
                        90
                      )}
                      item_price={item.card.info.finalPrice ? "@" + (item.card.info.finalPrice / 100) : item.card.info.price / 100}
                      original_price={
                        item.card.info.defaultPrice
                          ? item.card.info.defaultPrice / 100 + " Rupees"
                          : item.card.info.price / 100 + " Rupees"
                      }
                      id={item.card.info.imageId}
                      offers={item.card.info.offerTags}
                      offerstag={item.card.info.offerTags}
                      item_rating={item.card.info.rating || " "}
                      ratingcount={item.card.info.ratingCount || 0}
                      onAddItem={handleAddItem} // Pass the handler to MenuDetail
                    />
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}

          {/* Success Message */}
          {showSuccessMessage && (
            <div id="success-message" className="success-message">
              Success! Item added to cart.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default RestaurantDetails;
