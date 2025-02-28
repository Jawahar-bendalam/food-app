import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  //js way of writing a variable- but UI wont re-render when variable updates
  // let listOfRes = resList;

  //making the variable as state variable... whenever the state changes the page re-renders
  const [listOfRes, setlistOfRes] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9719249&lng=77.51280899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonRes = await res.json();
    setlistOfRes(
      jsonRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      jsonRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // catching the functional component in a variable
  // by calling the higher order function along with the respective input component
  const RestaurantCardWithOpenLabel = withOpenLabel(RestaurantCard);

  if (onlineStatus === false)
    return <h1>Semms like you are offline, Please check your connection </h1>;

  //conditional rendering
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="m-4 flex justify-between">
        <div className="search">
          <input
            className="mr-1 border-2 border-grey rounded-md hover:border-green-600"
            type="text"
            value={searchInput}
            onChange={(event) => {
              setsearchInput(event.target.value);
            }}
          />
          <button
            className="bg-green-600 rounded-md py-1 px-2 mr-3 text-white"
            onClick={() => {
              let searchedRes = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchInput.toLowerCase())
              );
              setFilteredRes(searchedRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-600 rounded-md py-1 px-2 text-white"
          onClick={() => {
            let topRatedRes = listOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRes(topRatedRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardWithOpenLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}

            {/* <PromotedRestaurantCard resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
