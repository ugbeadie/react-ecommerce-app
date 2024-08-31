import { Link } from "react-router-dom";
import { useContext } from "react";
import { shopContext } from "../Context";
import "../App.css";
import ProductCard from "./ProductCard";
import FilterButtons from "./FilterButtons";
import products from "./Data";

const Products = () => {
  const { setItems } = useContext(shopContext);

  return (
    <>
      <div className="product-head">
        <h3>
          <span>TRENDING</span>
        </h3>
        <p>Top view this week</p>
      </div>
      <div className="filter-btn">
        <FilterButtons />
      </div>
      <div className="product-imgs">
        <ProductCard />
      </div>
      <div className="go-to-shop">
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <button onClick={() => setItems(products)}>go to shop</button>
        </Link>
      </div>
    </>
  );
};

export default Products;
