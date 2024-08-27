import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import products from "./Data";
import ProductCard from "./ProductCard";

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
          <div className="product-imgs">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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
