import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRatingString, cloudinaryImageId } = resData.info;
  const { slaString } = resData.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4 style={{ display: "flex", flexWrap: "wrap" }}>
        {cuisines.join(",")}
      </h4>
      <h5>{avgRatingString} Star</h5>
      <h6>{slaString} ETA</h6>
    </div>
  );
};

export default RestaurantCard;
