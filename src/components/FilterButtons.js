import { useContext } from "react";
import products from "./Data";
import { shopContext } from "../Context";

const Filter = () => {
  const { uniqueCategory, filterItems, setItems } = useContext(shopContext);
  return (
    <>
      {uniqueCategory.map((category) => (
        <button onClick={() => filterItems(category)}>{category}</button>
      ))}
      <button onClick={() => setItems(products)}>All</button>
    </>
  );
};

export default Filter;
