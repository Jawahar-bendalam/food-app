import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState(resList);

  //js way of writing a variable- but UI wont re-render when variable updates
  // let listOfRes = resList;

  return (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" />
        <button>Search</button>
      </div> */}
      <div className="btn-container">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredRes = listOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOfRes(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
