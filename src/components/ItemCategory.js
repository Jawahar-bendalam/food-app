import ItemList from "./ItemList";

const ItemCategory = ({ categoryData }) => {
  return (
    <div className="m-2 shadow-md rounded-md p-2">
      <div className="flex justify-between">
        <span className="font-bold">
          {categoryData.title} ({categoryData.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <ItemList items={categoryData.itemCards} />
    </div>
  );
};

export default ItemCategory;
