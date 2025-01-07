import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRatingString, cloudinaryImageId } = resData.info;
  const { slaString } = resData.info.sla;
  return (
    <div className="w-[150px] bg-transparent rounded-md m-2">
      <img
        className="rounded-md h-[150px] w-full"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-base font-bold">{name}</h3>
      <div className="text-gray-500 text-wrap">
        <p>{cuisines.join(", ")}</p>
      </div>
      <p className="font-medium">
        ⭐{avgRatingString}⌚{slaString}
      </p>
    </div>
  );
};

//higher order component
// is a fn that takes a component as an input
//return the enhanced version of the component as an output
export const withOpenLabel = (RestaurantCard) => {
  //returns a functional component
  return (props) => {
    // functional component is a js fn that returns a piece of jsx
    return (
      <>
        <label className="absolute bg-green-500 text-white px-1 ml-2 mt-2 rounded-md">
          Open
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
