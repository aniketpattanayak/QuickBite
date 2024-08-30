const Itemdetails = ({ name, time, img }) => {
    return (
      <>
        <div id="item-details">
          <div id="item-details-img">
            <img id="round-image" src={img} />
          </div>
          <h2>{name}</h2>
          <div id="serving-box">
            <div id="serving">
              <h3 className="h3">Serving</h3>
              <div id="person-box">
                <i class="ri-user-3-fill lit"></i>
                <i class="ri-user-3-fill lit"></i>
              </div>
            </div>
            <div className="vertical-line"></div>
            <div id="cook-time">
              <h3 className="h3">Cook-time</h3>
              <h5 className="lit">{time}</h5>
            </div>
          </div>
        </div>
      </>
    );
  };


export default Itemdetails;

