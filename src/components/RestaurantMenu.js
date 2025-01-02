// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/hooks/useRestaurantInfo";

const RestaurantMenu = () => {
  //We can shift the entire resInfo fetching responsibility into a seperate customhook

  // const [resInfo, setresInfo] = useState(null);

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

  const { avgRating, costForTwoMessage, name, totalRatingsString } =
    resInfo.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {avgRating} Stars & {totalRatingsString}
      </h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
