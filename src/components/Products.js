import { Link } from "react-router-dom";
import "../App.css";
import ProductCard from "./ProductCard";
import FilterButtons from "./FilterButtons";

const Products = () => {
  return (
    <>
      <div className="products">
        <div className="product-container">
          <div className="product-head">
            <h3>
              <span>TRENDING</span>
            </h3>
            <p>Top view this week</p>
          </div>

          <FilterButtons />
          <div className="product-imgs">
            <ProductCard />
          </div>
          <div className="go-to-shop">
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <button>go to shop</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
