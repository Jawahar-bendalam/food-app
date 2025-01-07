import { MENU_ITEM_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const itemUrl = MENU_ITEM_URL;
  return (
    <>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="mt-2 border-green-500 border-b-2"
        >
          <div className="flex justify-between mb-2">
            <div className="w-[75%]">
              <h1 className="font-bold text-lg">
                {item.card.info.itemAttribute.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}
                {item.card.info.name}
              </h1>
              <p className="font-semibold text-md ml-1">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              {item.card?.info?.ratings?.aggregatedRating?.rating ? (
                <p className="font-semibold text-md">
                  ⭐{item.card?.info?.ratings?.aggregatedRating?.rating} (
                  {item.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </p>
              ) : (
                <p>No ratings</p>
              )}
              <p className="ml-1">{item.card.info.description}</p>
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
        </div>
      ))}
    </>
  );
};

export default ItemList;
