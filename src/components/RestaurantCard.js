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
      <div
        style={{
          width: "100%",
          textWrap: "wrap",
        }}
      >
        <p>{cuisines.join(",")}</p>
      </div>
      <div style={{ display: "flex" }}>
        <p>{avgRatingString} Star</p>
        <p>{slaString} ETA</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
