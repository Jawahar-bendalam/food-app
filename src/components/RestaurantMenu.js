import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_ITEM_URL } from "../utils/constants";
import useRestaurantInfo from "../utils/hooks/useRestaurantInfo";

const RestaurantMenu = () => {
  //We can shift the entire resInfo fetching responsibility into a seperate customhook

  // const [resInfo, setresInfo] = useState(null);
  const [itemFilter, setItemFilter] = useState("");

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  //Manual destructuring
  //const parms = useParams();
  //const resId = parms.id;

  //on the fly destructuring
  const { id } = useParams();

  // const fetchMenu = async () => {
  //   const resData = await fetch(RESINFO_URL + id);
  //   const resDataJson = await resData.json();
  //   setresInfo(resDataJson.data);
  // };

  const resInfo = useRestaurantInfo(id);

  if (resInfo === null) return <Shimmer />;

  const { avgRating, costForTwoMessage, name, totalRatingsString, price } =
    resInfo.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const itemUrl = MENU_ITEM_URL;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[50%] border-black rounded-md shadow-md p-4 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">{name}</h1>
          <h3 className="font-bold">
            {avgRating} Stars & {totalRatingsString}
          </h3>
          <h3 className="font-bold">{costForTwoMessage}</h3>
        </div>
        <div>
          <button
            className="rounded-md py-1 px-2 text-green-600 shadow-md font-bold"
            onClick={() => {
              setItemFilter("VEG");
            }}
          >
            Veg
          </button>
          <button
            className="rounded-md py-1 px-2 text-red-600 shadow-md font-bold"
            onClick={() => {
              setItemFilter("NONVEG");
            }}
          >
            Non-Veg
          </button>
          <button
            className="rounded-md py-1 px-2 text-black-600 shadow-md font-bold"
            onClick={() => {
              setItemFilter("");
            }}
          >
            Show All
          </button>
        </div>
      </div>
      <div className="w-[50%]">
        <ul>
          {(itemFilter
            ? itemCards.filter(
                (item) =>
                  item.card.info.itemAttribute.vegClassifier === itemFilter
              )
            : itemCards
          ).map((item) => (
            <li key={item.card.info.id} className="mt-2">
              <div className="flex justify-between mb-2">
                <div>
                  <h1>
                    {item.card.info.itemAttribute.vegClassifier === "VEG"
                      ? "🟢"
                      : "🔴"}
                    {item.card.info.name}
                  </h1>
                  <p>
                    ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </p>
                  {item.card?.info?.ratings?.aggregatedRating?.rating ? (
                    <p>
                      ⭐{item.card?.info?.ratings?.aggregatedRating?.rating} (
                      {
                        item.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
                      )
                    </p>
                  ) : (
                    <p>No ratings</p>
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <img
                    className="rounded-md"
                    src={itemUrl + item.card.info.imageId}
                    alt="item-img"
                  />
                  <button className="rounded-md py-1 px-2 text-green-600 shadow-md font-bold">
                    ADD
                  </button>
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
